export type ExternalGame = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  seoOverview: string;
  howToPlay: string;
  strategyGuide: string;
  playerTips: string[];
  category: string;
  thumbnail: string;
  iframeUrl: string;
  accent: string;
  accentClass: string;
};

const playGameAdBase = "https://playgamead.com";
const placeholderThumbnail = "/game-thumbs/game-placeholder.png";

export const externalGames = [
  {
    slug: "4-color-card-game",
    title: "4 Color Card Game",
    shortTitle: "4 Color",
    description: "Play 4 Color Card Game online, a fast browser card game where you match colors and numbers, manage action cards, and enjoy quick rounds.",
    seoOverview: "4 Color Card Game is a fast browser card game built around matching either color or number on the discard pile. The appeal is immediate: every turn asks you to read the current card, choose a legal move, and decide whether to save action cards for later pressure. It works well for players who want a quick online card game with simple rules, short rounds, and enough tactical decisions to stay interesting.",
    howToPlay: "Start by looking at the top card in the center pile. Play a card from your hand that matches its color or number, or use a special action card when the rules allow it. If you cannot play, draw a card and continue from there. The goal is to empty your hand before the other players while using skips, reverses, and draw cards at the right time.",
    strategyGuide: "Good 4 Color Card Game strategy is about hand control. Keep more than one color available when possible, avoid spending powerful action cards too early, and watch which colors opponents seem unable to answer. When you are close to winning, choose moves that reduce your hand without opening an easy counterplay. In longer rounds, saving a wild card for the final turns is often stronger than using it for a small early advantage.",
    playerTips: [
      "Keep a balanced hand so one color change does not block every move.",
      "Use action cards when they change tempo, not just because they are available.",
      "Track opponent hesitation; it often reveals weak colors.",
      "Save flexible cards for the last few turns when possible.",
    ],
    category: "Cards",
    thumbnail: placeholderThumbnail,
    iframeUrl: `${playGameAdBase}/games/4-color-card-game/`,
    accent: "#ff5e4d",
    accentClass: "accent-coral",
  },
  {
    slug: "solitaire-classic",
    title: "Solitaire Classic",
    shortTitle: "Solitaire",
    description: "Play Solitaire Classic online in a clean browser card table with familiar rules, focused moves, and calm solitaire gameplay.",
    seoOverview: "Solitaire Classic is the familiar single-player card game built for focused browser play. The game rewards planning, patience, and clean sequencing as you uncover hidden cards, build tableau columns, and move each suit toward the foundation. It is a strong choice when you want a quiet online card game that can be played in short sessions but still offers meaningful decisions every few moves.",
    howToPlay: "Build descending columns in alternating colors on the tableau, reveal face-down cards whenever possible, and move aces to the foundation as soon as they appear. Continue stacking each foundation by suit from ace to king. Use the stock pile when the tableau has no useful move, but avoid cycling cards without a plan. The round is complete when all four suits are fully built.",
    strategyGuide: "The best Solitaire Classic strategy is to prioritize information. Revealing hidden tableau cards is usually stronger than moving cards to the foundation too quickly. Empty columns are valuable because only kings can occupy them, so create open space intentionally. Before drawing from the stock, scan the tableau for moves that expose new cards or free a trapped sequence. Efficient wins usually come from patient setup rather than constant foundation moves.",
    playerTips: [
      "Reveal face-down cards before making low-value foundation moves.",
      "Keep empty columns for kings that unlock deeper stacks.",
      "Move long sequences only when they expose useful cards.",
      "Check tableau options before drawing from the stock pile.",
    ],
    category: "Cards",
    thumbnail: placeholderThumbnail,
    iframeUrl: `${playGameAdBase}/games/solitaire-classic/`,
    accent: "#23cc88",
    accentClass: "accent-green",
  },
  {
    slug: "mahjong-connect",
    title: "Mahjong Connect",
    shortTitle: "Mahjong",
    description: "Play Mahjong Connect online, match open tiles, clear the board, and enjoy a fast browser puzzle game for tile-matching fans.",
    seoOverview: "Mahjong Connect is a tile-matching puzzle where the challenge is not only finding identical symbols but also reading whether a valid path connects them. It is faster than traditional mahjong solitaire because every match changes the board structure and can open new routes. This makes it a good browser puzzle for players who enjoy visual scanning, pattern recognition, and steady board-clearing progress.",
    howToPlay: "Find two matching tiles and connect them with a path that has only a limited number of turns. If the route is blocked by other tiles, the pair cannot be removed yet. Clear accessible pairs first, then use those removals to open pathways through the board. The objective is to remove every tile before time or available moves run out, depending on the version loaded in the iframe.",
    strategyGuide: "Strong Mahjong Connect play starts from the outside edges. Edge matches usually open the board faster because they create longer paths for future pairs. Avoid removing pairs at random; instead, choose matches that clear corridors, expose trapped symbols, or connect separated areas. When several pairs are available, prioritize the one that changes the board most. This prevents late-game stalls where matching tiles remain visible but unreachable.",
    playerTips: [
      "Scan the borders first because edge matches create space quickly.",
      "Prefer matches that open a new route through the middle.",
      "Do not remove easy pairs if they do not improve the board.",
      "Pause after each match and rescan newly opened paths.",
    ],
    category: "Tiles",
    thumbnail: placeholderThumbnail,
    iframeUrl: `${playGameAdBase}/games/mahjong-connect/`,
    accent: "#20b8d8",
    accentClass: "accent-sky",
  },
  {
    slug: "word-search",
    title: "Word Search",
    shortTitle: "Word Search",
    description: "Play Word Search online, scan the letter grid, find hidden words, and train focus with a simple browser word puzzle.",
    seoOverview: "Word Search is a classic browser word puzzle built around careful scanning and recognition. The goal is simple, but the solving process trains attention, vocabulary, and directional reading. Hidden words can appear horizontally, vertically, diagonally, forward, or backward depending on the puzzle. It is a useful choice for players who want a calm online word game that feels approachable while still rewarding concentration.",
    howToPlay: "Review the word list, then scan the grid for the first and last letters of each target word. When you find a possible start, follow the letters in one direction until the word is complete. Select or drag across the full word to mark it. Continue until every word in the list has been found. If a word is difficult, look for unusual letter combinations rather than common letters.",
    strategyGuide: "Efficient Word Search strategy relies on systematic scanning. Work through the word list one item at a time, start with longer words, and use rare letters as anchors. Letters like Q, X, Z, and J narrow the search quickly. If the grid feels crowded, scan rows first, then columns, then diagonals. Switching direction too often wastes focus, while a deliberate pattern keeps progress steady.",
    playerTips: [
      "Start with long words because they have fewer possible positions.",
      "Use rare letters as anchors before scanning common letters.",
      "Search one direction at a time to avoid missing obvious words.",
      "Mark found words mentally so you do not rescan solved areas.",
    ],
    category: "Words",
    thumbnail: placeholderThumbnail,
    iframeUrl: `${playGameAdBase}/games/word-search/`,
    accent: "#f6b63d",
    accentClass: "accent-gold",
  },
  {
    slug: "bubble-shooter",
    title: "Bubble Shooter",
    shortTitle: "Bubbles",
    description: "Play Bubble Shooter online, aim carefully, match colors, and clear bubble clusters in a quick arcade puzzle game.",
    seoOverview: "Bubble Shooter is an arcade puzzle game where aim, color matching, and angle control matter. Each shot can clear a cluster, set up a future chain reaction, or make the board more crowded. The game works well for quick browser sessions because the rules are direct and every turn produces visible feedback. It is a good fit for players who like casual puzzles with a skill-based aiming layer.",
    howToPlay: "Aim the launcher at bubbles of the same color and shoot to create a group, usually three or more matching bubbles. Matched groups pop and disappear from the board. Bank shots off the wall when a direct path is blocked, and watch the next bubble color if the game shows it. The goal is to clear the board or survive as long as possible before bubbles reach the bottom.",
    strategyGuide: "Good Bubble Shooter strategy is about clearing structure, not only popping any available match. Target high clusters when a shot can drop many lower bubbles at once. Use walls to reach side pockets, and avoid placing isolated colors where they cannot connect later. If the next bubble preview is available, plan two shots together: one to create a slot and one to clear it.",
    playerTips: [
      "Aim for hanging clusters that can drop several bubbles at once.",
      "Use bank shots to reach blocked colors near the sides.",
      "Avoid scattering single bubbles across the board.",
      "Plan around the next bubble color when preview is available.",
    ],
    category: "Arcade",
    thumbnail: placeholderThumbnail,
    iframeUrl: `${playGameAdBase}/games/bubble-shooter/`,
    accent: "#8b5cf6",
    accentClass: "accent-violet",
  },
  {
    slug: "block-puzzle",
    title: "Block Puzzle",
    shortTitle: "Blocks",
    description: "Play Block Puzzle online, place shapes, clear rows, and keep the board open in a relaxing browser logic puzzle.",
    seoOverview: "Block Puzzle is a logic puzzle about space management. You place block shapes onto a grid, clear completed rows or columns, and keep enough open space for future pieces. The rules are easy to understand, but strong scores depend on planning and restraint. It is a useful browser puzzle for players who want a calm, no-rush game that still rewards strategic thinking.",
    howToPlay: "Drag each available block shape onto the board. Complete full rows or columns to clear them and free space. New shapes continue appearing, so every placement should preserve room for awkward pieces. The game ends when no remaining shape fits the board. Your score improves when you clear lines efficiently and avoid filling the grid with isolated gaps.",
    strategyGuide: "The best Block Puzzle strategy is to preserve flexible space. Keep the center open when possible, avoid creating one-cell holes, and maintain room for large square or long bar pieces. Clearing one line is useful, but clearing a line while improving the shape of the board is better. Think about the next set of pieces before committing a placement that divides the grid into small unusable pockets.",
    playerTips: [
      "Keep one large open area instead of several small gaps.",
      "Avoid isolated single-cell holes unless they complete a clear soon.",
      "Place awkward shapes early while space is available.",
      "Favor moves that clear lines and improve board shape together.",
    ],
    category: "Puzzle",
    thumbnail: placeholderThumbnail,
    iframeUrl: `${playGameAdBase}/games/block-puzzle/`,
    accent: "#f97316",
    accentClass: "accent-orange",
  },
  {
    slug: "sudoku",
    title: "Sudoku",
    shortTitle: "Sudoku",
    description: "Play Sudoku online, fill the grid with logic, avoid repeated numbers, and enjoy a clean browser number puzzle.",
    seoOverview: "Sudoku is a number logic puzzle where each row, column, and 3x3 box must contain the digits 1 through 9 without repetition. It is one of the strongest browser puzzle formats for focused reasoning because progress comes from deduction rather than speed or guessing. This page is useful for players who want a clean online Sudoku experience that supports short practice sessions or longer logic solves.",
    howToPlay: "Look at the given numbers and fill empty cells with digits that do not repeat in the same row, column, or box. Start with rows, columns, or boxes that already contain many numbers because they have fewer possibilities. Continue narrowing candidates until each empty cell has one valid answer. The puzzle is solved when the full grid follows all Sudoku rules.",
    strategyGuide: "Good Sudoku strategy starts with singles. Identify cells where only one number can fit, then use that answer to unlock nearby rows, columns, and boxes. When simple singles run out, scan for hidden singles: numbers that can appear in only one cell within a row, column, or box. Avoid guessing unless the puzzle mode allows it; disciplined deduction leads to cleaner solves and fewer mistakes.",
    playerTips: [
      "Start with boxes, rows, or columns that have the most givens.",
      "Use elimination before considering advanced patterns.",
      "Check every placement against row, column, and box rules.",
      "When stuck, rescan for hidden singles before guessing.",
    ],
    category: "Logic",
    thumbnail: placeholderThumbnail,
    iframeUrl: `${playGameAdBase}/games/sudoku/`,
    accent: "#2563eb",
    accentClass: "accent-blue",
  },
] satisfies ExternalGame[];

export const getExternalGameBySlug = (slug: string) => externalGames.find((game) => game.slug === slug);
