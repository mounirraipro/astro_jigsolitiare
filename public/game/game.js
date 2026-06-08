// ==========================================
// JigSolitaire Game Engine v6
// Redesigned UI: Start → Collection → Puzzle → Game → Win
// All puzzles are 3×3. Uses new_game.js engine.
// ==========================================

(function () {
  'use strict';

  // ==========================================
  // SOUND ENGINE — Web Audio API Synthesizer
  // ==========================================
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.enabled = true;
      this.initialized = false;
      this.sfxVolume = 0.4;
    }

    init() {
      if (this.initialized) return;
      try {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.initialized = true;
      } catch (e) {
        console.warn('Web Audio API not supported');
      }
    }

    _note(freq, type, duration, volume, delay = 0) {
      if (!this.ctx || !this.enabled) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
      gain.gain.setValueAtTime(volume * this.sfxVolume, this.ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration);
    }

    pickup() {
      this._note(880, 'sine', 0.12, 0.3);
      this._note(1320, 'sine', 0.08, 0.15, 0.03);
    }

    drop() {
      this._note(220, 'sine', 0.15, 0.35);
      this._note(165, 'triangle', 0.1, 0.2, 0.02);
    }

    merge() {
      this._note(523, 'sine', 0.2, 0.3);
      this._note(659, 'sine', 0.2, 0.25, 0.08);
      this._note(784, 'sine', 0.3, 0.2, 0.16);
    }

    win() {
      const notes = [523, 659, 784, 1047, 1319, 1568];
      notes.forEach((freq, i) => {
        this._note(freq, 'sine', 0.35, 0.25, i * 0.1);
        this._note(freq * 1.5, 'triangle', 0.25, 0.1, i * 0.1 + 0.05);
      });
    }

    click() {
      this._note(600, 'sine', 0.06, 0.15);
    }
  }

  // ==========================================
  // MUSIC MANAGER
  // ==========================================
  class MusicManager {
    constructor() {
      this.tracks = [
        '/Music/Golden Time.mp3',
        '/Music/Golden Time Extra.mp3',
        '/Music/Golden Time Reup.mp3',
      ];
      this.currentAudio = null;
      this.playing = false;
      this.volume = 0.5;
      this.fadeDuration = 2000;
      this._fadeInterval = null;
      this._isLoading = false;
    }

    playRandom() {
      if (!this.playing) return;
      if (this._isLoading) return; // Prevent concurrent loading of multiple tracks
      
      this._isLoading = true;
      let nextTrack;
      do {
        nextTrack = this.tracks[Math.floor(Math.random() * this.tracks.length)];
      } while (this.currentAudio && this.currentAudio.src.endsWith(encodeURI(nextTrack).split('/').pop()) && this.tracks.length > 1);

      const audio = new Audio(nextTrack);
      audio.volume = 0;
      audio.loop = false;
      
      // Cleanup previous fades to prevent conflicting intervals
      if (this._fadeInterval) {
        clearInterval(this._fadeInterval);
        this._fadeInterval = null;
      }

      const p = audio.play();
      if (p !== undefined) {
        p.then(() => {
          this._isLoading = false;
          if (!this.playing) {
            audio.pause();
            return;
          }
          if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio.src = '';
          }
          this.currentAudio = audio;
          
          this.currentAudio.addEventListener('ended', () => this.playRandom());
          this.currentAudio.addEventListener('error', () => setTimeout(() => this.playRandom(), 1000));
          
          this._fadeIn(this.currentAudio);
        }).catch(() => {
          this._isLoading = false;
        });
      } else {
        this._isLoading = false;
      }
    }

    _fadeIn(audio) {
      if (this._fadeInterval) clearInterval(this._fadeInterval);
      const step = 0.05;
      const interval = 100;
      this._fadeInterval = setInterval(() => {
        if (!this.playing || !audio) { 
          if (audio) audio.volume = 0; 
          clearInterval(this._fadeInterval); 
          return; 
        }
        if (audio.volume < this.volume) {
          audio.volume = Math.min(this.volume, audio.volume + step);
        } else {
          clearInterval(this._fadeInterval);
        }
      }, interval);
    }

    start() {
      if (this.playing) return;
      this.playing = true;
      if (this.currentAudio) {
        this.currentAudio.play().catch(() => {});
        this._fadeIn(this.currentAudio);
      } else {
        this.playRandom();
      }
    }

    setMute(muted) {
      if (muted) {
        this.playing = false;
        if (this._fadeInterval) clearInterval(this._fadeInterval);
        if (this.currentAudio) {
          this.currentAudio.pause();
          this.currentAudio.volume = 0;
        }
      } else {
        this.playing = true;
        if (this.currentAudio) {
          this.currentAudio.volume = this.volume;
          const p = this.currentAudio.play();
          if (p !== undefined) p.catch(() => {});
        } else {
          this.start();
        }
      }
    }
  }

  // ==========================================
  // CONFETTI SYSTEM
  // ==========================================
  class ConfettiSystem {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.particles = [];
      this.running = false;
      this.colors = ['#e85d45', '#22c55e', '#6366f1', '#eab308', '#f97316', '#ec4899', '#14b8a6'];
    }

    resize() {
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
    }

    burst(count = 80) {
      this.resize();
      this.particles = [];
      const cx = this.canvas.width / 2;
      const cy = this.canvas.height * 0.35;

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const speed = 3 + Math.random() * 6;
        this.particles.push({
          x: cx, y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 3,
          size: 4 + Math.random() * 6,
          color: this.colors[Math.floor(Math.random() * this.colors.length)],
          rotation: Math.random() * 360,
          rotSpeed: (Math.random() - 0.5) * 12,
          gravity: 0.12 + Math.random() * 0.08,
          friction: 0.98,
          opacity: 1,
          shape: Math.random() > 0.5 ? 'rect' : 'circle',
        });
      }

      if (!this.running) { this.running = true; this._animate(); }
    }

    _animate() {
      if (!this.running) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      let alive = 0;
      for (const p of this.particles) {
        p.vy += p.gravity; p.vx *= p.friction; p.vy *= p.friction;
        p.x += p.vx; p.y += p.vy;
        p.rotation += p.rotSpeed; p.opacity -= 0.008;
        if (p.opacity <= 0) continue;
        alive++;
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.globalAlpha = p.opacity;
        this.ctx.fillStyle = p.color;
        if (p.shape === 'rect') this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        else { this.ctx.beginPath(); this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2); this.ctx.fill(); }
        this.ctx.restore();
      }
      if (alive > 0) requestAnimationFrame(() => this._animate());
      else { this.running = false; this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); }
    }

    stop() {
      this.running = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  // ==========================================
  // GAME DATA — static export friendly
  // ==========================================
  const CATEGORY_DEFINITIONS = [
    { slug: 'animals', name: 'Animals', color: '#ef4444', count: 30 },
    { slug: 'art', name: 'Art', color: '#e17055', count: 11 },
    { slug: 'cities', name: 'Cities', color: '#6c5ce7', count: 36 },
    { slug: 'food', name: 'Food', color: '#fdcb6e', count: 11 },
    { slug: 'nature', name: 'Nature', color: '#22c55e', count: 32 },
  ];

  function titleFromFile(fileName) {
    return fileName
      .replace(/\.[^/.]+$/, '')
      .replace(/[_-]/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
  }

  function buildStaticCategories() {
    let levelId = 1;

    return CATEGORY_DEFINITIONS.map(cat => {
      const levels = Array.from({ length: cat.count }, (_, index) => {
        const fileName = `JigSolitaire_${cat.name}${index + 1}.png`;
        const thumbName = `JigSolitaire_${cat.name}${index + 1}.webp`;

        return {
          id: levelId++,
          title: titleFromFile(fileName),
          cols: 3,
          rows: 3,
          img: fileName,
          thumb: thumbName,
        };
      });

      return {
        slug: cat.slug,
        name: cat.name,
        color: cat.color,
        img: levels[0]?.img || '',
        thumb: levels[0]?.thumb || '',
        levels,
      };
    });
  }

  const CATEGORIES = buildStaticCategories();

  // ==========================================
  // PROGRESS (localStorage)
  // ==========================================
  const STORAGE_KEY = 'jigsolitaire_progress_v6';

  function getProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  }

  function getProgressKey(progress) {
    return Object.keys(progress)
      .filter((levelId) => progress[levelId])
      .sort((a, b) => Number(a) - Number(b))
      .join(',');
  }

  function markSolved(levelId) {
    const p = getProgress();
    p[levelId] = true;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    collectionRenderKey = '';
    puzzleRenderKey = '';
  }

  function isLevelUnlocked(cat, levelIndex, progress = getProgress()) {
    if (levelIndex === 0) return true;
    return !!progress[cat.levels[levelIndex - 1].id];
  }

  function isLevelSolved(levelId, progress = getProgress()) {
    return !!progress[levelId];
  }

  // ==========================================
  // ENGINE STATE
  // ==========================================
  let currentCategory = null;
  let currentLevel = null;
  let currentLevelIndex = 0;

  let state = null;          // PuzzleState
  let mergedGroups = [];     // GroupEngine result
  let dc = null;             // DragController
  let splitResult = null;    // ImageSplitter result
  let cols = 3, rows = 3;
  let tileW = 0, tileH = 0;

  let moves = 0;
  let seconds = 0;
  let timerInterval = null;
  let sourceImage = null;
  let isAnimating = false;
  let prevMergedCount = 0;
  let moveHistory = [];      // arrays of currentIndex snapshots for UNDO
  let collectionRenderKey = '';
  let puzzleRenderKey = '';

  // ==========================================
  // DOM
  // ==========================================
  const startScreen      = document.getElementById('start-screen');
  const collectionScreen = document.getElementById('collection-screen');
  const puzzleScreen     = document.getElementById('puzzle-screen');
  const gameScreen       = document.getElementById('game-screen');
  const winScreen        = document.getElementById('win-screen');

  const collectionGrid   = document.getElementById('collection-grid');
  const puzzleGrid       = document.getElementById('puzzle-grid');
  const gameCanvas       = document.getElementById('game-canvas');
  const winPreviewImage  = document.getElementById('win-preview-image');
  const timerValueEl     = document.getElementById('timer-value');

  const ctx  = gameCanvas.getContext('2d');

  const confetti = new ConfettiSystem(document.getElementById('confetti-canvas'));

  // ==========================================
  // SOUND (lazy-init on first interaction)
  // ==========================================
  const sfx = new SoundEngine();
  const music = new MusicManager();

  function initAudio() {
    sfx.init();
    if (!music.playing) music.start();
    document.removeEventListener('click', initAudio);
    document.removeEventListener('touchstart', initAudio);
  }
  document.addEventListener('click', initAudio);
  document.addEventListener('touchstart', initAudio);

  // ==========================================
  // GLOBAL AUDIO CONTROLS
  // ==========================================
  const btnToggleMusic = document.getElementById('btn-toggle-music');
  const musicVolumeSlider = document.getElementById('music-volume');
  
  if (btnToggleMusic && musicVolumeSlider) {
    let isMuted = false;
    
    function updateMusicIcon() {
      if (isMuted || music.volume === 0) {
        btnToggleMusic.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="1" y1="1" x2="23" y2="23"></line>
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        `;
        btnToggleMusic.classList.add('is-muted');
      } else {
        btnToggleMusic.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        `;
        btnToggleMusic.classList.remove('is-muted');
      }
    }

    btnToggleMusic.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudio(); // ensure audio context starts if not already
      
      isMuted = !isMuted;
      if (isMuted) {
        music.setMute(true);
      } else {
        if (music.volume === 0) {
          music.volume = 0.5;
          musicVolumeSlider.value = 0.5;
        }
        music.setMute(false);
      }
      updateMusicIcon();
    });

    musicVolumeSlider.addEventListener('input', (e) => {
      e.stopPropagation();
      initAudio(); // ensure audio context starts
      
      const val = parseFloat(e.target.value);
      music.volume = val;
      
      if (val === 0) {
        isMuted = true;
        music.setMute(true);
      } else {
        isMuted = false;
        music.setMute(false);
        if (music.currentAudio) {
          music.currentAudio.volume = val;
        }
      }
      updateMusicIcon();
    });
    
    // Also toggle slider container expansion nicely on mobile
    btnToggleMusic.addEventListener('mouseenter', () => {
      btnToggleMusic.parentElement.classList.add('active');
    });
    btnToggleMusic.parentElement.addEventListener('mouseleave', () => {
      btnToggleMusic.parentElement.classList.remove('active');
    });
  }

  // ==========================================
  // SCREEN MANAGEMENT
  // ==========================================
  function showScreen(screen) {
    [startScreen, collectionScreen, puzzleScreen, gameScreen, winScreen]
      .forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
  }

  // ==========================================
  // IMAGE LOADING
  // ==========================================
  function imgUrl(cat, imgFile) {
    return `/levels/${cat.name}/${imgFile}`;
  }

  function thumbUrl(cat, imgFile) {
    return `/level-thumbs/${cat.name}/${imgFile}`;
  }

  const lazyImageObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const img = entry.target;
          const src = img.dataset.src;
          if (src && img.src !== src) {
            img.src = src;
          }
          observer.unobserve(img);
        });
      }, {
        rootMargin: '200px 0px',
      })
    : null;

  function createCardImage(src, alt) {
    const img = document.createElement('img');
    img.alt = alt;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.fetchPriority = 'low';

    if (lazyImageObserver) {
      img.dataset.src = src;
      lazyImageObserver.observe(img);
    } else {
      img.src = src;
    }

    return img;
  }

  function getVisibleLevelEntries(cat, progress) {
    let teaserAdded = false;

    return cat.levels.map((level, index) => {
      const unlocked = isLevelUnlocked(cat, index, progress);
      const isTeaser = !unlocked && !teaserAdded;

      if (isTeaser) {
        teaserAdded = true;
      }

      return { level, index, unlocked, isTeaser };
    });
  }

  function loadImage(cat, imgFile) {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () => {
        // Fallback: colored canvas
        const c = document.createElement('canvas');
        c.width = 400; c.height = 400;
        const cx2 = c.getContext('2d');
        cx2.fillStyle = cat.color;
        cx2.fillRect(0, 0, 400, 400);
        cx2.fillStyle = '#fff';
        cx2.font = 'bold 18px Inter, sans-serif';
        cx2.textAlign = 'center';
        cx2.textBaseline = 'middle';
        cx2.fillText(imgFile, 200, 200);
        resolve(c);
      };
      img.src = imgUrl(cat, imgFile);
    });
  }

  // ==========================================
  // START SCREEN
  // ==========================================
  document.getElementById('btn-play').addEventListener('click', () => {
    sfx.click();
    initCollectionScreen();
    showScreen(collectionScreen);
  });

  // ==========================================
  // COLLECTION SCREEN
  // ==========================================
  function initCollectionScreen() {
    const progressKey = getProgressKey(getProgress());
    const nextRenderKey = `${CATEGORIES.length}:${progressKey}`;
    if (collectionRenderKey === nextRenderKey) return;

    collectionGrid.innerHTML = '';
    const fragment = document.createDocumentFragment();

    CATEGORIES.forEach((cat) => {
      const card = document.createElement('div');
      card.className = 'grid-card';
      const imgSrc = cat.thumb ? thumbUrl(cat, cat.thumb) : imgUrl(cat, cat.img);
      const img = createCardImage(imgSrc, cat.name);
      card.appendChild(img);
      card.addEventListener('click', () => {
        sfx.click();
        currentCategory = cat;
        initPuzzleScreen(cat);
        showScreen(puzzleScreen);
      });
      fragment.appendChild(card);
    });

    collectionGrid.appendChild(fragment);
    collectionRenderKey = nextRenderKey;
  }

  document.getElementById('btn-quick-play-collection').addEventListener('click', () => {
    sfx.click();
    quickPlay();
  });

  // ==========================================
  // PUZZLE SCREEN
  // ==========================================
  function initPuzzleScreen(cat) {
    const progress = getProgress();
    const nextRenderKey = `${cat.slug}:${getProgressKey(progress)}`;
    if (puzzleRenderKey === nextRenderKey) return;

    puzzleGrid.innerHTML = '';
    const fragment = document.createDocumentFragment();

    getVisibleLevelEntries(cat, progress).forEach(({ level, index, unlocked, isTeaser }) => {
      const card = document.createElement('div');
      card.className = 'grid-card' + (unlocked ? '' : ' is-locked');

      if (unlocked) {
        const imgSrc = level.thumb ? thumbUrl(cat, level.thumb) : imgUrl(cat, level.img);
        const img = createCardImage(imgSrc, level.title);
        card.appendChild(img);
      } else {
        const placeholder = document.createElement('div');
        placeholder.className = 'grid-card-placeholder';
        card.appendChild(placeholder);
      }

      if (!unlocked) {
        const overlay = document.createElement('div');
        overlay.className = 'locked-overlay';
        overlay.innerHTML = `
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--white)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <span style="color: var(--white); font-size: 0.85rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">${isTeaser ? 'Next Puzzle' : 'Locked'}</span>
        `;
        card.appendChild(overlay);
      } else {
        card.addEventListener('click', () => {
          sfx.click();
          currentLevelIndex = index;
          startGame(cat, level);
        });
      }
      fragment.appendChild(card);
    });

    puzzleGrid.appendChild(fragment);
    puzzleRenderKey = nextRenderKey;
  }

  document.getElementById('btn-quick-play-puzzle').addEventListener('click', () => {
    sfx.click();
    quickPlay();
  });

  document.getElementById('btn-back-collection').addEventListener('click', () => {
    sfx.click();
    showScreen(collectionScreen);
  });

  // ==========================================
  // QUICK PLAY — pick first unlocked level from any category
  // ==========================================
  function quickPlay() {
    const progress = getProgress();

    for (const cat of CATEGORIES) {
      for (let i = 0; i < cat.levels.length; i++) {
        if (isLevelUnlocked(cat, i, progress) && !isLevelSolved(cat.levels[i].id, progress)) {
          currentCategory = cat;
          currentLevelIndex = i;
          startGame(cat, cat.levels[i]);
          return;
        }
      }
    }
    // All solved — replay the first level
    const cat = CATEGORIES[0];
    currentCategory = cat;
    currentLevelIndex = 0;
    startGame(cat, cat.levels[0]);
  }

  // ==========================================
  // GAME — startGame
  // ==========================================
  async function startGame(cat, level) {
    currentCategory = cat;
    currentLevel = level;
    cols = level.cols;
    rows = level.rows;
    moves = 0;
    seconds = 0;
    moveHistory = [];
    mergedGroups = [];
    isAnimating = true;
    prevMergedCount = 0;

    if (dc) { dc.detach(); dc = null; }

    showScreen(gameScreen);
    confetti.stop();
    updateTimerEl();

    // Size board to available area
    const bp = document.querySelector('.game-board-area');
    const aW = bp.clientWidth - 24;
    const aH = bp.clientHeight - 24;

    // Loading placeholder
    const ratio = cols / rows;
    let bWtmp, bHtmp;
    if (aW / aH > ratio) { bHtmp = aH; bWtmp = bHtmp * ratio; }
    else { bWtmp = aW; bHtmp = bWtmp / ratio; }
    bWtmp = Math.floor(bWtmp / cols) * cols;
    bHtmp = Math.floor(bHtmp / rows) * rows;

    gameCanvas.width = bWtmp;
    gameCanvas.height = bHtmp;
    ctx.fillStyle = '#f2f2f2';
    ctx.fillRect(0, 0, bWtmp, bHtmp);
    ctx.fillStyle = '#9a9a9a';
    ctx.font = '500 13px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Loading…', bWtmp / 2, bHtmp / 2);

    // Load image + split
    sourceImage = await loadImage(cat, level.img);
    splitResult = ImageSplitter.split(sourceImage, cols, rows, aW, aH);
    tileW = splitResult.tileW;
    tileH = splitResult.tileH;
    const bW = splitResult.boardW;
    const bH = splitResult.boardH;

    gameCanvas.width = bW;
    gameCanvas.height = bH;

    // Build initial (solved) state
    state = new PuzzleState(cols, rows);
    const cellSize = { tileW, tileH };

    // Draw solved image (memorize phase)
    _drawFullImage(bW, bH);

    // Memorize overlay
    ctx.save();
    const labelW = 160, labelH = 44;
    const lx = (bW - labelW) / 2, ly = (bH - labelH) / 2;
    ctx.fillStyle = 'rgba(26,23,20,0.6)';
    ctx.beginPath();
    ctx.roundRect(lx, ly, labelW, labelH, 22);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = '600 14px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ Memorize!', bW / 2, bH / 2);
    ctx.restore();

    await new Promise(resolve => setTimeout(resolve, 3000));

    // Capture pre-shuffle positions
    const startPositions = state.tiles.map(t => ({
      x: (t.currentIndex % cols) * tileW,
      y: Math.floor(t.currentIndex / cols) * tileH,
    }));

    Shuffle.shuffle(state);

    const endPositions = state.tiles.map(t => ({
      x: (t.currentIndex % cols) * tileW,
      y: Math.floor(t.currentIndex / cols) * tileH,
    }));

    // Animate shuffle
    await new Promise(resolve => {
      const t0 = performance.now();
      const duration = 800;
      function frame(now) {
        const p = Math.min((now - t0) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        ctx.clearRect(0, 0, bW, bH);
        ctx.fillStyle = '#f2f2f2';
        ctx.fillRect(0, 0, bW, bH);
        for (let i = 0; i < state.tiles.length; i++) {
          const desc = splitResult.tiles[state.tiles[i].correctIndex];
          const cx2 = startPositions[i].x + (endPositions[i].x - startPositions[i].x) * ease;
          const cy2 = startPositions[i].y + (endPositions[i].y - startPositions[i].y) * ease;
          ctx.drawImage(sourceImage, desc.srcX, desc.srcY, desc.srcW, desc.srcH, cx2, cy2, tileW, tileH);
          ctx.strokeStyle = 'rgba(26,23,20,0.06)';
          ctx.lineWidth = 1;
          ctx.strokeRect(cx2, cy2, tileW, tileH);
        }
        if (p < 1) requestAnimationFrame(frame);
        else resolve();
      }
      requestAnimationFrame(frame);
    });

    // Wire up DragController
    isAnimating = false;
    mergedGroups = GroupEngine.computeGroups(state);
    prevMergedCount = mergedGroups.reduce((s, g) => s + g.size, 0);

    dc = new DragController(gameCanvas, state, cellSize, {
      onDragStart() { sfx.pickup(); },
      onDrop(groupIndices, colOffset, rowOffset, targetGridIdx) {
        // Save history before move
        const snapshot = state.tiles.map(t => t.currentIndex);
        let moved = false;
        if (groupIndices.length === 1) {
          moved = MoveEngine.swapTwo(state, groupIndices[0], targetGridIdx);
        } else {
          moved = MoveEngine.moveGroup(state, groupIndices, colOffset, rowOffset);
        }
        if (moved) {
          moveHistory.push(snapshot);
          moves++;
          sfx.drop();
          mergedGroups = GroupEngine.computeGroups(state);
          dc.updateGroups(mergedGroups);
          const cnt = mergedGroups.reduce((s, g) => s + g.size, 0);
          if (cnt > prevMergedCount && prevMergedCount > 0) sfx.merge();
          prevMergedCount = cnt;
          drawBoard();
          if (isSolved(state)) win();
        }
      },
      onRedraw() { drawBoard(); },
    });
    dc.updateGroups(mergedGroups);
    dc.attach();

    startTimer();
    drawBoard();
  }

  // ==========================================
  // DRAWING HELPERS
  // ==========================================
  function _drawFullImage(bW, bH) {
    ctx.clearRect(0, 0, bW, bH);
    ctx.drawImage(sourceImage, 0, 0, bW, bH);
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = 1;
    for (let c = 1; c < cols; c++) { ctx.beginPath(); ctx.moveTo(c * tileW, 0); ctx.lineTo(c * tileW, bH); ctx.stroke(); }
    for (let r = 1; r < rows; r++) { ctx.beginPath(); ctx.moveTo(0, r * tileH); ctx.lineTo(bW, r * tileH); ctx.stroke(); }
    ctx.restore();
  }

  function getGroupOf(ti) { return GroupEngine.groupOf(mergedGroups, ti); }

  function drawBoard() {
    if (!state || !splitResult) return;
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    ctx.fillStyle = '#f2f2f2';
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    if (!sourceImage) return;

    const snap = dc ? dc.dragSnapshot : null;
    const draggingSet = new Set(snap ? snap.groupIndices : []);

    state.tiles.forEach((_, i) => { if (!draggingSet.has(i)) drawTile(i); });
    state.tiles.forEach((_, i) => { if (!draggingSet.has(i)) drawBorders(i); });

    if (snap) {
      const anchor = state.pixelOf(snap.anchorTileIdx, tileW, tileH);
      const dx = snap.x - snap.offsetX - anchor.x;
      const dy = snap.y - snap.offsetY - anchor.y;

      ctx.save();
      ctx.fillStyle = 'rgba(0,0,0,0.06)';
      snap.groupIndices.forEach(i => {
        const p = state.pixelOf(i, tileW, tileH);
        ctx.fillRect(p.x + dx + 4, p.y + dy + 4, tileW, tileH);
      });
      ctx.restore();

      snap.groupIndices.forEach(i => {
        const p = state.pixelOf(i, tileW, tileH);
        drawTile(i, p.x + dx, p.y + dy, true);
      });
      snap.groupIndices.forEach(i => {
        const p = state.pixelOf(i, tileW, tileH);
        drawBorders(i, p.x + dx, p.y + dy, true);
      });
    }
  }

  function drawTile(ti, ox, oy, isDrag) {
    const desc = splitResult.tiles[state.tiles[ti].correctIndex];
    const p = state.pixelOf(ti, tileW, tileH);
    const x = ox !== undefined ? ox : p.x;
    const y = oy !== undefined ? oy : p.y;
    ctx.save();
    if (isDrag) { ctx.shadowColor = 'rgba(232,93,69,0.15)'; ctx.shadowBlur = 20; ctx.shadowOffsetY = 6; }
    ctx.drawImage(sourceImage, desc.srcX, desc.srcY, desc.srcW, desc.srcH, x, y, tileW, tileH);
    ctx.restore();
  }

  function drawBorders(ti, ox, oy, isDrag) {
    const group = getGroupOf(ti);
    const p = state.pixelOf(ti, tileW, tileH);
    const x = ox !== undefined ? ox : p.x;
    const y = oy !== undefined ? oy : p.y;
    const gp = state.currentGridOf(ti);
    const sides = [
      { dc: 0, dr: -1, edge: 'top' }, { dc: 1, dr: 0, edge: 'right' },
      { dc: 0, dr: 1, edge: 'bottom' }, { dc: -1, dr: 0, edge: 'left' },
    ];
    ctx.save();
    sides.forEach(s => {
      const nc = gp.col + s.dc, nr = gp.row + s.dr;
      if (group && nc >= 0 && nc < cols && nr >= 0 && nr < rows) {
        const ni = state.tileAtGrid(nc, nr);
        if (ni !== -1 && group.has(ni)) return;
      }
      if (group && group.size >= 2) {
        ctx.strokeStyle = isDrag ? 'rgba(232,93,69,0.5)' : 'rgba(232,93,69,0.25)';
        ctx.lineWidth = isDrag ? 2.5 : 2;
      } else {
        ctx.strokeStyle = isDrag ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.07)';
        ctx.lineWidth = 1;
      }
      ctx.beginPath();
      if (s.edge === 'top')    { ctx.moveTo(x, y); ctx.lineTo(x + tileW, y); }
      else if (s.edge === 'right')  { ctx.moveTo(x + tileW, y); ctx.lineTo(x + tileW, y + tileH); }
      else if (s.edge === 'bottom') { ctx.moveTo(x, y + tileH); ctx.lineTo(x + tileW, y + tileH); }
      else { ctx.moveTo(x, y); ctx.lineTo(x, y + tileH); }
      ctx.stroke();
    });
    ctx.restore();
  }

  // ==========================================
  // GAME ACTIONS: UNDO / SHOW / SURRENDER
  // ==========================================
  document.getElementById('btn-undo').addEventListener('click', () => {
    if (isAnimating || !state || moveHistory.length === 0) return;
    sfx.click();
    const prev = moveHistory.pop();
    state.tiles.forEach((t, i) => { t.currentIndex = prev[i]; });
    mergedGroups = GroupEngine.computeGroups(state);
    if (dc) dc.updateGroups(mergedGroups);
    drawBoard();
  });

  let showingReference = false;
  document.getElementById('btn-show').addEventListener('click', () => {
    if (isAnimating || !sourceImage || showingReference) return;
    sfx.click();
    showingReference = true;
    const bW = gameCanvas.width, bH = gameCanvas.height;
    _drawFullImage(bW, bH);
    setTimeout(() => {
      showingReference = false;
      drawBoard();
    }, 1500);
  });

  document.getElementById('btn-surrender').addEventListener('click', () => {
    sfx.click();
    stopTimer();
    if (dc) { dc.detach(); dc = null; }
    initCollectionScreen();
    showScreen(collectionScreen);
  });

  // ==========================================
  // GAME ACTIONS: QUIT
  // ==========================================
  document.getElementById('btn-quit').addEventListener('click', () => {
    sfx.click();
    stopTimer();
    if (dc) { dc.detach(); dc = null; }
    initCollectionScreen();
    showScreen(collectionScreen);
  });

  // ==========================================
  // TIMER
  // ==========================================
  function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => { seconds++; updateTimerEl(); }, 1000);
  }

  function stopTimer() { clearInterval(timerInterval); }

  function updateTimerEl() {
    timerValueEl.textContent = seconds < 60
      ? `${seconds}s`
      : `${Math.floor(seconds / 60)}m${(seconds % 60).toString().padStart(2, '0')}s`;
  }

  // ==========================================
  // WIN
  // ==========================================
  function win() {
    stopTimer();
    markSolved(currentLevel.id);
    sfx.win();

    const finalMoves = moves;
    const finalSeconds = seconds;

    // Populate win screen stats
    document.getElementById('win-time-label').textContent =
      finalSeconds < 60 ? `${finalSeconds} SECONDS` : `${Math.floor(finalSeconds / 60)}M ${finalSeconds % 60}S`;
    document.getElementById('win-moves-label').textContent = `${finalMoves} MOVES`;

    // Set the image src to the raw source map natively
    if (sourceImage) {
      winPreviewImage.src = sourceImage.src;
    }

    // Next level wiring
    const nextIndex = currentLevelIndex + 1;
    const btnContinue = document.getElementById('btn-continue');
    const progress = getProgress();
    if (nextIndex < currentCategory.levels.length && isLevelUnlocked(currentCategory, nextIndex, progress)) {
      btnContinue.style.display = '';
      btnContinue.onclick = () => {
        sfx.click();
        currentLevelIndex = nextIndex;
        startGame(currentCategory, currentCategory.levels[nextIndex]);
      };
    } else {
      btnContinue.style.display = 'none';
    }

    setTimeout(() => {
      showScreen(winScreen);
      setTimeout(() => confetti.burst(100), 150);
    }, 350);
  }

  // ==========================================
  // WIN SCREEN NAVIGATION
  // ==========================================
  document.getElementById('btn-select-level').addEventListener('click', () => {
    sfx.click();
    confetti.stop();
    if (currentCategory) initPuzzleScreen(currentCategory);
    showScreen(puzzleScreen);
  });

  document.getElementById('btn-menu-win').addEventListener('click', () => {
    sfx.click();
    confetti.stop();
    initCollectionScreen();
    showScreen(collectionScreen);
  });

  // ==========================================
  // RESIZE
  // ==========================================
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (currentLevel && gameScreen.classList.contains('active') && sourceImage && state) {
        const bp = document.querySelector('.game-board-area');
        const aW = bp.clientWidth - 24, aH = bp.clientHeight - 24;
        splitResult = ImageSplitter.split(sourceImage, cols, rows, aW, aH);
        tileW = splitResult.tileW;
        tileH = splitResult.tileH;
        gameCanvas.width = splitResult.boardW;
        gameCanvas.height = splitResult.boardH;
        if (dc) { dc.cellSize.tileW = tileW; dc.cellSize.tileH = tileH; }
        drawBoard();
      }
    }, 200);
  });

  // ==========================================
  // INIT
  // ==========================================
  // Start screen is already active via HTML
})();
