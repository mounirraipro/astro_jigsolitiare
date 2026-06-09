export type ExternalGame = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  thumbnail: string;
  iframeUrl: string;
  accent: string;
};

const playGameAdBase = "https://playgamead.com";
const placeholderThumbnail = "/game-thumbs/game-placeholder.png";

export const externalGames = [
  {
    slug: "4-color-card-game",
    title: "4 Color Card Game",
    shortTitle: "4 Color",
    description: "Match colors and numbers in a quick browser card game.",
    category: "Cards",
    thumbnail: placeholderThumbnail,
    iframeUrl: `${playGameAdBase}/games/4-color-card-game/`,
    accent: "#ff5e4d",
  },
  {
    slug: "solitaire-classic",
    title: "Solitaire Classic",
    shortTitle: "Solitaire",
    description: "A clean classic solitaire table for focused card play.",
    category: "Cards",
    thumbnail: placeholderThumbnail,
    iframeUrl: `${playGameAdBase}/games/solitaire-classic/`,
    accent: "#23cc88",
  },
  {
    slug: "mahjong-connect",
    title: "Mahjong Connect",
    shortTitle: "Mahjong",
    description: "Find matching tiles and clear the board before time runs out.",
    category: "Tiles",
    thumbnail: placeholderThumbnail,
    iframeUrl: `${playGameAdBase}/games/mahjong-connect/`,
    accent: "#20b8d8",
  },
  {
    slug: "word-search",
    title: "Word Search",
    shortTitle: "Word Search",
    description: "Scan the grid, find hidden words, and train your attention.",
    category: "Words",
    thumbnail: placeholderThumbnail,
    iframeUrl: `${playGameAdBase}/games/word-search/`,
    accent: "#f6b63d",
  },
  {
    slug: "bubble-shooter",
    title: "Bubble Shooter",
    shortTitle: "Bubbles",
    description: "Aim, match colors, and clear satisfying bubble clusters.",
    category: "Arcade",
    thumbnail: placeholderThumbnail,
    iframeUrl: `${playGameAdBase}/games/bubble-shooter/`,
    accent: "#8b5cf6",
  },
  {
    slug: "block-puzzle",
    title: "Block Puzzle",
    shortTitle: "Blocks",
    description: "Place shapes, clear rows, and keep the board open.",
    category: "Puzzle",
    thumbnail: placeholderThumbnail,
    iframeUrl: `${playGameAdBase}/games/block-puzzle/`,
    accent: "#f97316",
  },
  {
    slug: "sudoku",
    title: "Sudoku",
    shortTitle: "Sudoku",
    description: "Fill the grid with calm logic and clean number placement.",
    category: "Logic",
    thumbnail: placeholderThumbnail,
    iframeUrl: `${playGameAdBase}/games/sudoku/`,
    accent: "#2563eb",
  },
] satisfies ExternalGame[];

export const getExternalGameBySlug = (slug: string) => externalGames.find((game) => game.slug === slug);
