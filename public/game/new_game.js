/**
 * JigSolitaire — Core Mechanics (framework-free, no UI, no sound)
 *
 * Exports / exposes:
 *   PuzzleState    — data model: tiles, grid dimensions
 *   Shuffle        — Fisher-Yates shuffle on PuzzleState
 *   GroupEngine    — relative-neighbor detection & BFS group-building
 *   MoveEngine     — single-tile swap + multi-tile group move with displacement
 *   DragController — pointer/touch → drag lifecycle (needs a canvas-like element)
 *   isSolved       — win condition check
 *   ImageSplitter  — load image, fit to grid without stretch/crop, return tile slice descriptors
 */

'use strict';

// ─────────────────────────────────────────────
// 1. PUZZLE STATE
//    Each tile knows:
//      correctIndex  — where it belongs  (0 … cols*rows-1)
//      currentIndex  — where it is right now
// ─────────────────────────────────────────────
class PuzzleState {
  /**
   * @param {number} cols
   * @param {number} rows
   */
  constructor(cols, rows) {
    this.cols = cols;
    this.rows = rows;
    const total = cols * rows;
    // Start solved: tile i sits at position i
    this.tiles = Array.from({ length: total }, (_, i) => ({
      correctIndex: i,
      currentIndex: i,
    }));
  }

  // Convenience: col/row of a tile's current position
  currentGridOf(tileIdx) {
    const ci = this.tiles[tileIdx].currentIndex;
    return { col: ci % this.cols, row: Math.floor(ci / this.cols) };
  }

  // Convenience: col/row of a tile's correct position
  correctGridOf(tileIdx) {
    const ci = this.tiles[tileIdx].correctIndex;
    return { col: ci % this.cols, row: Math.floor(ci / this.cols) };
  }

  // Return the tile index sitting at grid cell (col, row), or -1 if out of bounds
  tileAtGrid(col, row) {
    if (col < 0 || col >= this.cols || row < 0 || row >= this.rows) return -1;
    const target = row * this.cols + col;
    return this.tiles.findIndex(t => t.currentIndex === target);
  }

  // Pixel top-left of a tile given a cell size (tileW, tileH)
  pixelOf(tileIdx, tileW, tileH) {
    const g = this.currentGridOf(tileIdx);
    return { x: g.col * tileW, y: g.row * tileH };
  }
}


// ─────────────────────────────────────────────
// 2. WIN CONDITION
// ─────────────────────────────────────────────

/**
 * Returns true when every tile is in its correct grid cell.
 * @param {PuzzleState} state
 */
function isSolved(state) {
  return state.tiles.every(t => t.currentIndex === t.correctIndex);
}


// ─────────────────────────────────────────────
// 3. SHUFFLE
//    Fisher-Yates on currentIndex values.
//    Guarantees the result is never already solved.
// ─────────────────────────────────────────────
const Shuffle = {
  /**
   * Mutates state.tiles in place — randomises currentIndex values.
   * @param {PuzzleState} state
   */
  shuffle(state) {
    const tiles = state.tiles;
    const total = tiles.length;

    // Collect all currentIndex values, shuffle them, redistribute
    const positions = tiles.map(t => t.currentIndex);

    for (let i = total - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [positions[i], positions[j]] = [positions[j], positions[i]];
    }

    tiles.forEach((t, i) => { t.currentIndex = positions[i]; });

    // Edge case: if shuffle happened to land on solved, swap tile 0 and 1
    if (isSolved(state)) {
      [tiles[0].currentIndex, tiles[1].currentIndex] =
        [tiles[1].currentIndex, tiles[0].currentIndex];
    }
  },
};


// ─────────────────────────────────────────────
// 4. GROUP ENGINE
//    Two tiles are "relative neighbors" when they are:
//      (a) adjacent on the board right now, AND
//      (b) adjacent in the same direction in the solved image.
//
//    A "merged group" is a connected component of relative neighbors
//    with size ≥ 2, found by BFS.
// ─────────────────────────────────────────────
const DIRECTIONS = [
  { dc:  0, dr: -1 },   // up
  { dc:  1, dr:  0 },   // right
  { dc:  0, dr:  1 },   // down
  { dc: -1, dr:  0 },   // left
];

const GroupEngine = {
  /**
   * Are two tiles currently adjacent AND correctly relative to each other?
   * @param {PuzzleState} state
   * @param {number} tiA  tile index A
   * @param {number} tiB  tile index B
   */
  areRelativeNeighbors(state, tiA, tiB) {
    const curA = state.currentGridOf(tiA);
    const curB = state.currentGridOf(tiB);
    const corA = state.correctGridOf(tiA);
    const corB = state.correctGridOf(tiB);

    const dcCur = curB.col - curA.col;
    const drCur = curB.row - curA.row;

    // Must be exactly 1 step apart on the board
    if (Math.abs(dcCur) + Math.abs(drCur) !== 1) return false;

    // That step must match their correct relative offset
    return dcCur === (corB.col - corA.col) && drCur === (corB.row - corA.row);
  },

  /**
   * BFS over all tiles — returns an array of Sets, each Set being
   * the tile indices that form one merged group (size ≥ 2).
   *
   * Call this after every move to keep groups up to date.
   *
   * @param {PuzzleState} state
   * @returns {Set<number>[]}
   */
  computeGroups(state) {
    const groups = [];
    const visited = new Set();

    for (let i = 0; i < state.tiles.length; i++) {
      if (visited.has(i)) continue;

      const group = new Set([i]);
      visited.add(i);
      const queue = [i];

      while (queue.length) {
        const cur = queue.shift();
        const cp = state.currentGridOf(cur);

        for (const { dc, dr } of DIRECTIONS) {
          const nc = cp.col + dc;
          const nr = cp.row + dr;
          const ni = state.tileAtGrid(nc, nr);
          if (ni === -1 || visited.has(ni)) continue;

          if (GroupEngine.areRelativeNeighbors(state, cur, ni)) {
            group.add(ni);
            visited.add(ni);
            queue.push(ni);
          }
        }
      }

      if (group.size >= 2) groups.push(group);
    }

    return groups;
  },

  /**
   * Return the group that contains tileIdx, or null.
   * @param {Set<number>[]} groups  result of computeGroups
   * @param {number} tileIdx
   */
  groupOf(groups, tileIdx) {
    return groups.find(g => g.has(tileIdx)) ?? null;
  },

  /**
   * The tiles that should move together when the user grabs tileIdx.
   * Returns a single-element array when the tile is ungrouped.
   * @param {Set<number>[]} groups
   * @param {number} tileIdx
   * @returns {number[]}
   */
  dragGroup(groups, tileIdx) {
    const g = GroupEngine.groupOf(groups, tileIdx);
    return g ? Array.from(g) : [tileIdx];
  },
};


// ─────────────────────────────────────────────
// 5. MOVE ENGINE
//    Two operations:
//      swapTwo       — swap a single tile with whatever is at targetGridIdx
//      moveGroup     — shift a group of tiles by (colOffset, rowOffset),
//                      displacing whatever tiles are in the way
// ─────────────────────────────────────────────
const MoveEngine = {
  /**
   * Swap one tile with whatever tile currently occupies targetGridIdx.
   * No-op if they are the same cell.
   *
   * @param {PuzzleState} state
   * @param {number} tileIdx        index of the dragged tile
   * @param {number} targetGridIdx  flat grid index of the drop cell
   * @returns {boolean}  true if a swap happened
   */
  swapTwo(state, tileIdx, targetGridIdx) {
    const other = state.tiles.findIndex(t => t.currentIndex === targetGridIdx);
    if (other === -1 || other === tileIdx) return false;

    [state.tiles[tileIdx].currentIndex, state.tiles[other].currentIndex] =
      [state.tiles[other].currentIndex, state.tiles[tileIdx].currentIndex];

    return true;
  },

  /**
   * Move a group of tiles by (colOffset, rowOffset).
   *
   * Tiles that are in the group's destination cells but NOT in the group
   * ("displaced" tiles) are slid into the cells vacated by the group.
   *
   * The move is rejected (returns false) when:
   *   - offset is (0, 0)
   *   - any destination cell is out of bounds
   *   - the number of displaced tiles ≠ the number of freed cells
   *     (prevents overlapping or partial moves)
   *
   * @param {PuzzleState} state
   * @param {number[]} groupIndices  tile indices to move together
   * @param {number} colOffset
   * @param {number} rowOffset
   * @returns {boolean}  true if the move was applied
   */
  moveGroup(state, groupIndices, colOffset, rowOffset) {
    if (colOffset === 0 && rowOffset === 0) return false;

    const dragSet = new Set(groupIndices);

    // Build the (old → new) grid index map for every tile in the group
    const moves = [];
    for (const ti of groupIndices) {
      const old = state.tiles[ti].currentIndex;
      const oc = old % state.cols;
      const or = Math.floor(old / state.cols);
      const nc = oc + colOffset;
      const nr = or + rowOffset;

      // Reject if destination is out of bounds
      if (nc < 0 || nc >= state.cols || nr < 0 || nr >= state.rows) return false;

      moves.push({ tileIdx: ti, oldIdx: old, newIdx: nr * state.cols + nc });
    }

    const newIdxSet = new Set(moves.map(m => m.newIdx));
    const oldIdxSet = new Set(moves.map(m => m.oldIdx));

    // Tiles in destination cells that are NOT part of the group
    const displaced = moves
      .map(m => state.tiles.findIndex(t => t.currentIndex === m.newIdx))
      .filter(idx => idx !== -1 && !dragSet.has(idx));

    // Cells vacated by the group that won't be re-occupied by the group itself
    const freed = moves
      .map(m => m.oldIdx)
      .filter(idx => !newIdxSet.has(idx));

    // Reject if we can't pair every displaced tile with a freed cell 1-to-1
    if (displaced.length !== freed.length) return false;

    // Apply: move group tiles
    for (const m of moves) {
      state.tiles[m.tileIdx].currentIndex = m.newIdx;
    }

    // Apply: slide displaced tiles into freed cells
    for (let i = 0; i < displaced.length; i++) {
      state.tiles[displaced[i]].currentIndex = freed[i];
    }

    return true;
  },
};


// ─────────────────────────────────────────────
// 6. DRAG CONTROLLER
//    Listens to mouse/touch events on a canvas element.
//    Calls back into your rendering and game logic.
//
//    Usage:
//      const dc = new DragController(canvas, state, tileW, tileH, {
//        onDragStart(tileIdx, groupIndices) {},
//        onDragMove(dragX, dragY, groupIndices) {},
//        onDrop(groupIndices, colOffset, rowOffset, dropGridIdx) {},
//        onRedraw() {},   // called after every state change
//      });
//      dc.attach();   // start listening
//      dc.detach();   // stop listening
// ─────────────────────────────────────────────
class DragController {
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {PuzzleState}       state
   * @param {{ tileW: number, tileH: number }} cellSize  — kept by reference so resize works
   * @param {object} callbacks
   */
  constructor(canvas, state, cellSize, callbacks = {}) {
    this.canvas    = canvas;
    this.state     = state;
    this.cellSize  = cellSize;   // { tileW, tileH }
    this.callbacks = callbacks;

    // Live drag state
    this._drag = null;   // { groupIndices, anchorTileIdx, offsetX, offsetY }
    this._x    = 0;
    this._y    = 0;
    this._groups = [];   // latest result from GroupEngine.computeGroups()

    // Bind handlers so we can add/remove them cleanly
    this._onDown  = this._onDown.bind(this);
    this._onMove  = this._onMove.bind(this);
    this._onUp    = this._onUp.bind(this);
  }

  // ── Public API ──────────────────────────────

  /** Sync the latest merged groups (call after every move / on init). */
  updateGroups(groups) { this._groups = groups; }

  attach() {
    const c = this.canvas;
    c.addEventListener('mousedown',  this._onDown);
    c.addEventListener('mousemove',  this._onMove);
    c.addEventListener('mouseup',    this._onUp);
    c.addEventListener('mouseleave', this._onUp);
    c.addEventListener('touchstart', this._onDown, { passive: false });
    c.addEventListener('touchmove',  this._onMove, { passive: false });
    c.addEventListener('touchend',   this._onUp,   { passive: false });
  }

  detach() {
    const c = this.canvas;
    c.removeEventListener('mousedown',  this._onDown);
    c.removeEventListener('mousemove',  this._onMove);
    c.removeEventListener('mouseup',    this._onUp);
    c.removeEventListener('mouseleave', this._onUp);
    c.removeEventListener('touchstart', this._onDown);
    c.removeEventListener('touchmove',  this._onMove);
    c.removeEventListener('touchend',   this._onUp);
  }

  /** Are we currently dragging something? */
  get isDragging() { return this._drag !== null; }

  /** Current drag position + group, for rendering. */
  get dragSnapshot() {
    if (!this._drag) return null;
    return {
      groupIndices: this._drag.groupIndices,
      anchorTileIdx: this._drag.anchorTileIdx,
      x: this._x,
      y: this._y,
      offsetX: this._drag.offsetX,
      offsetY: this._drag.offsetY,
    };
  }

  // ── Private helpers ──────────────────────────

  _getPointerPos(e) {
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width  / rect.width;
    const scaleY = this.canvas.height / rect.height;
    const src = e.touches ? e.touches[0] : e;
    return {
      x: (src.clientX - rect.left) * scaleX,
      y: (src.clientY - rect.top)  * scaleY,
    };
  }

  _tileAtPixel(px, py) {
    const { tileW, tileH } = this.cellSize;
    const col = Math.floor(px / tileW);
    const row = Math.floor(py / tileH);
    return this.state.tileAtGrid(col, row);
  }

  // ── Event handlers ───────────────────────────

  _onDown(e) {
    e.preventDefault();
    const pos = this._getPointerPos(e);
    const ti  = this._tileAtPixel(pos.x, pos.y);
    if (ti === -1) return;

    const groupIndices = GroupEngine.dragGroup(this._groups, ti);
    const anchorPx     = this.state.pixelOf(ti, this.cellSize.tileW, this.cellSize.tileH);

    this._drag = {
      groupIndices,
      anchorTileIdx: ti,
      offsetX: pos.x - anchorPx.x,
      offsetY: pos.y - anchorPx.y,
    };
    this._x = pos.x;
    this._y = pos.y;

    this.callbacks.onDragStart?.(ti, groupIndices);
    this.callbacks.onRedraw?.();
  }

  _onMove(e) {
    if (!this._drag) return;
    e.preventDefault();
    const pos = this._getPointerPos(e);
    this._x = pos.x;
    this._y = pos.y;
    this.callbacks.onDragMove?.(pos.x, pos.y, this._drag.groupIndices);
    this.callbacks.onRedraw?.();
  }

  _onUp(e) {
    if (!this._drag) return;
    e.preventDefault();

    const { tileW, tileH } = this.cellSize;
    const { anchorTileIdx, groupIndices, offsetX, offsetY } = this._drag;
    const anchorPx = this.state.pixelOf(anchorTileIdx, tileW, tileH);

    // How far (in pixels) did the drag move from the original position?
    const dx = this._x - offsetX - anchorPx.x;
    const dy = this._y - offsetY - anchorPx.y;

    if (groupIndices.length === 1) {
      // ── Single tile: find the cell under the drop centre ──
      const cx = anchorPx.x + dx + tileW / 2;
      const cy = anchorPx.y + dy + tileH / 2;
      const tc  = Math.floor(cx / tileW);
      const tr  = Math.floor(cy / tileH);

      if (tc >= 0 && tc < this.state.cols && tr >= 0 && tr < this.state.rows) {
        const targetGridIdx = tr * this.state.cols + tc;
        if (targetGridIdx !== this.state.tiles[anchorTileIdx].currentIndex) {
          this.callbacks.onDrop?.(groupIndices, 0, 0, targetGridIdx);
        }
      }
    } else {
      // ── Group: snap to nearest integer offset in grid cells ──
      const colOffset = Math.round(dx / tileW);
      const rowOffset = Math.round(dy / tileH);
      this.callbacks.onDrop?.(groupIndices, colOffset, rowOffset, null);
    }

    this._drag = null;
    this.callbacks.onRedraw?.();
  }
}


// ─────────────────────────────────────────────
// EXAMPLE WIRING  (remove / replace with your own)
//
//   const state   = new PuzzleState(4, 4);
//   const cell    = { tileW: 80, tileH: 80 };
//   let   groups  = [];
//
//   Shuffle.shuffle(state);
//   groups = GroupEngine.computeGroups(state);
//
//   const dc = new DragController(canvas, state, cell, {
//     onDragStart(ti, g)       { /* highlight group */ },
//     onDragMove(x, y, g)      { /* update ghost position */ },
//     onDrop(g, colOff, rowOff, targetGridIdx) {
//       let moved = false;
//       if (g.length === 1) {
//         moved = MoveEngine.swapTwo(state, g[0], targetGridIdx);
//       } else {
//         moved = MoveEngine.moveGroup(state, g, colOff, rowOff);
//       }
//       if (moved) {
//         groups = GroupEngine.computeGroups(state);
//         dc.updateGroups(groups);
//         if (isSolved(state)) console.log('Puzzle solved!');
//       }
//     },
//     onRedraw() { render(state, groups, dc.dragSnapshot, cell); },
//   });
//   dc.updateGroups(groups);
//   dc.attach();
// ─────────────────────────────────────────────


// ─────────────────────────────────────────────
// 7. IMAGE SPLITTER
//
//    Problem this solves
//    ───────────────────
//    Images come in arbitrary aspect ratios.  The puzzle grid also has an
//    aspect ratio (cols / rows).  If you naively stretch the image to fill
//    the board you get distortion.  If you crop it you lose content.
//
//    This module uses "contain" scaling — the same rule CSS uses for
//    `background-size: contain`:
//      • Scale the image UP or DOWN uniformly so it fits entirely inside
//        the available board area without exceeding either dimension.
//      • The resulting board is then snapped to exact integer tile sizes
//        so every tile is the same pixel width and height (no sub-pixel
//        edge tiles).
//      • No cropping ever occurs — the entire image is visible.
//      • No stretching ever occurs — aspect ratio is preserved throughout.
//
//    The output
//    ──────────
//    `ImageSplitter.split()` returns a `SplitResult`:
//
//      {
//        boardW,       // final board width  in px (= cols × tileW)
//        boardH,       // final board height in px (= rows × tileH)
//        tileW,        // width  of one tile in px
//        tileH,        // height of one tile in px
//        tiles: [      // one entry per tile, row-major order
//          {
//            tileIndex,      // flat index (row * cols + col)
//            col, row,       // grid position
//            srcX, srcY,     // top-left of this slice in the NATURAL image (px)
//            srcW, srcH,     // size of the slice in the NATURAL image (px)
//            // For CSS background-image rendering:
//            bgSize,         // e.g. "540px 720px"  (scaled image size)
//            bgPosition,     // e.g. "-90px -180px" (offset to show correct slice)
//          }
//        ]
//      }
//
//    The `srcX/srcY/srcW/srcH` fields let you draw slices with
//    `ctx.drawImage(img, srcX, srcY, srcW, srcH, 0, 0, tileW, tileH)`.
//
//    The `bgSize / bgPosition` fields give you ready-made CSS values for
//    div-based renderers that use `background-image`.
//
//    Usage
//    ─────
//    // Fit to a 500×600 viewport, 4×4 grid:
//    ImageSplitter.load('/img/cat.jpg')
//      .then(img => {
//        const result = ImageSplitter.split(img, 4, 4, 500, 600);
//        // use result.tiles, result.tileW, result.tileH …
//      });
//
//    // Or if you already have an HTMLImageElement:
//    const result = ImageSplitter.split(myImg, cols, rows, maxW, maxH);
// ─────────────────────────────────────────────
const ImageSplitter = {
  /**
   * Load an image from a URL and return a Promise<HTMLImageElement>.
   * Sets crossOrigin = 'anonymous' so the image can be read by Canvas.
   *
   * @param {string} url
   * @returns {Promise<HTMLImageElement>}
   */
  load(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload  = () => resolve(img);
      img.onerror = () => reject(new Error(`ImageSplitter: failed to load "${url}"`));
      img.src = url;
    });
  },

  /**
   * Compute all tile descriptors for an already-loaded image.
   *
   * Scaling rules (no stretch, no crop):
   *   1. Start with the image's natural pixel dimensions.
   *   2. Scale uniformly so the image fits inside (maxBoardW × maxBoardH)
   *      — whichever dimension is the tighter constraint wins (contain).
   *   3. Snap boardW to a multiple of `cols`, boardH to a multiple of `rows`
   *      by flooring — this guarantees every tile is an identical integer size.
   *   4. Derive the source rectangle in natural-image coordinates for each
   *      tile by scaling back from board pixels to natural pixels.
   *
   * @param {HTMLImageElement} img        - fully loaded image element
   * @param {number}           cols       - grid columns
   * @param {number}           rows       - grid rows
   * @param {number}           maxBoardW  - available width  for the board (px)
   * @param {number}           maxBoardH  - available height for the board (px)
   * @returns {SplitResult}
   */
  split(img, cols, rows, maxBoardW, maxBoardH) {
    const naturalW = img.naturalWidth  || img.width;
    const naturalH = img.naturalHeight || img.height;

    // ── Step 1: contain-scale to fit inside the available area ──────────
    // "contain" = scale so the image is as large as possible while still
    // fitting entirely within (maxBoardW × maxBoardH).  Never upscale past 1×.
    const scaleToFitW = maxBoardW / naturalW;
    const scaleToFitH = maxBoardH / naturalH;
    const containScale = Math.min(scaleToFitW, scaleToFitH); // allow upscale to fill available canvas area

    let boardW = naturalW * containScale;
    let boardH = naturalH * containScale;

    // ── Step 2: snap to exact tile multiples (floor, never ceil) ────────
    // Flooring instead of rounding guarantees we never exceed maxBoardW/H.
    const tileW = Math.floor(boardW / cols);
    const tileH = Math.floor(boardH / rows);
    boardW = tileW * cols;
    boardH = tileH * rows;

    // ── Step 3: map board pixels back to natural-image coordinates ───────
    // The board represents the full image scaled to (boardW × boardH).
    // Each tile's source rect in natural pixels is:
    //   srcX = (col  * tileW) / boardW * naturalW
    //   srcW =         tileW  / boardW * naturalW
    // (same formula for Y/H)
    const scaleBackX = naturalW / boardW;
    const scaleBackY = naturalH / boardH;

    const tiles = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const tileIndex = r * cols + c;

        // Source rect in natural image pixels
        const srcX = c * tileW * scaleBackX;
        const srcY = r * tileH * scaleBackY;
        const srcW = tileW * scaleBackX;
        const srcH = tileH * scaleBackY;

        // CSS background-image helpers
        // bgSize: the full image scaled to board size
        // bgPosition: shift so this tile's slice aligns to top-left of the div
        const bgSize     = `${boardW}px ${boardH}px`;
        const bgPosition = `-${c * tileW}px -${r * tileH}px`;

        tiles.push({
          tileIndex,
          col: c,
          row: r,
          // Canvas drawImage source rect
          srcX,
          srcY,
          srcW,
          srcH,
          // CSS background helpers
          bgSize,
          bgPosition,
        });
      }
    }

    return { boardW, boardH, tileW, tileH, tiles };
  },

  /**
   * Convenience: load a URL then split in one call.
   *
   * @param {string} url
   * @param {number} cols
   * @param {number} rows
   * @param {number} maxBoardW
   * @param {number} maxBoardH
   * @returns {Promise<{ img: HTMLImageElement } & SplitResult>}
   */
  async loadAndSplit(url, cols, rows, maxBoardW, maxBoardH) {
    const img = await this.load(url);
    const result = this.split(img, cols, rows, maxBoardW, maxBoardH);
    return { img, ...result };
  },
};


// ─────────────────────────────────────────────
// EXAMPLE — ImageSplitter wired into the full engine
//
//   const { img, boardW, boardH, tileW, tileH, tiles } =
//     await ImageSplitter.loadAndSplit('/img/cat.jpg', 4, 4, 500, 600);
//
//   // Build PuzzleState from split result
//   const state  = new PuzzleState(4, 4);
//   const cell   = { tileW, tileH };
//   Shuffle.shuffle(state);
//   let groups   = GroupEngine.computeGroups(state);
//
//   // Canvas rendering of one tile using srcX/srcY/srcW/srcH:
//   function renderTile(ctx, tileIdx) {
//     const t    = state.tiles[tileIdx];
//     const desc = tiles[t.correctIndex];       // correct slice descriptor
//     const pos  = state.pixelOf(tileIdx, tileW, tileH);
//     ctx.drawImage(img,
//       desc.srcX, desc.srcY, desc.srcW, desc.srcH,   // source rect
//       pos.x,     pos.y,     tileW,     tileH         // dest rect
//     );
//   }
//
//   // OR — for a div-based renderer, set CSS on the tile element:
//   function styleTileDiv(el, tileIdx) {
//     const t    = state.tiles[tileIdx];
//     const desc = tiles[t.correctIndex];
//     el.style.backgroundImage    = `url("${url}")`;
//     el.style.backgroundSize     = desc.bgSize;
//     el.style.backgroundPosition = desc.bgPosition;
//   }
// ─────────────────────────────────────────────


// ── Exports (ES-module style; remove if using plain <script>) ──
// export { PuzzleState, Shuffle, GroupEngine, MoveEngine, DragController, isSolved, ImageSplitter };