export type ExternalGame = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
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
    category: "Logic",
    thumbnail: placeholderThumbnail,
    iframeUrl: `${playGameAdBase}/games/sudoku/`,
    accent: "#2563eb",
    accentClass: "accent-blue",
  },
] satisfies ExternalGame[];

export const getExternalGameBySlug = (slug: string) => externalGames.find((game) => game.slug === slug);
