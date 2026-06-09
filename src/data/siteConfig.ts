export const siteConfig = {
  name: "JigSolitaire",
  tagline: "Swap tiles, merge groups, and restore beautiful puzzle images.",
  description:
    "Play JigSolitaire online free, an open browser puzzle game where you swap image tiles and solve jigsaw-style levels.",
  gameGenre: "tile-swap puzzle game",
  audience: "puzzle players, families, students, adults, and casual brain-game fans",
  contactEmail: "support@jigsolitaire.online",
  siteUrl: "https://astro.jigsolitaire.online",
  locale: "en_US",
  language: "en",
  themeColor: "#ff5e4d",
  defaultOgImage: "/Jigsolitaire.online_Thmbnail.png",
  socialHandle: "",
  publisherName: "JigSolitaire",
  sameAs: [] as string[],
  emitMetaKeywords: true,
  topicKeywords: [
    "JigSolitaire",
    "jigsaw puzzle online",
    "free online puzzle game",
    "tile swap puzzle",
    "browser puzzle game",
  ],
  legalLastUpdated: "May 24, 2026",
};

export type SiteConfig = typeof siteConfig;
