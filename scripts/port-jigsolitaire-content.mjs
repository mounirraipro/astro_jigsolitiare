import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceRoot = "C:\\Users\\Administrateur\\Documents\\Projects-LA\\JigSolitaire";
const appRoot = path.join(sourceRoot, "app");
const blogRoot = path.join(appRoot, "blog");
const publicRoot = path.join(root, "public");

const read = (file) => fs.readFileSync(file, "utf8");
const write = (file, content) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, "utf8");
};

const decodeCommon = (text) =>
  text
    .replaceAll("â€”", "-")
    .replaceAll("â€“", "-")
    .replaceAll("Â·", "-")
    .replaceAll("Ã—", "x")
    .replaceAll("â€™", "'")
    .replaceAll("â€œ", '"')
    .replaceAll("â€", '"')
    .replaceAll("â€˜", "'")
    .replaceAll("Â", "")
    .replaceAll("ï¸", "");

const loadArticleMeta = () => {
  const source = read(path.join(appRoot, "lib", "articleMeta.ts"));
  const start = source.indexOf("export const articleMeta");
  const objectStart = source.indexOf("{", start);
  const objectEnd = source.lastIndexOf("};");
  const objectLiteral = decodeCommon(source.slice(objectStart, objectEnd + 1));
  return Function(`"use strict"; return (${objectLiteral});`)();
};

const extractBalancedDiv = (source, className) => {
  const marker = `<div className="${className}">`;
  const start = source.indexOf(marker);
  if (start === -1) return "";
  let cursor = start + marker.length;
  let depth = 1;
  while (cursor < source.length && depth > 0) {
    const nextOpen = source.indexOf("<div", cursor);
    const nextClose = source.indexOf("</div>", cursor);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      cursor = nextOpen + 4;
    } else {
      depth -= 1;
      if (depth === 0) return source.slice(start + marker.length, nextClose);
      cursor = nextClose + 6;
    }
  }
  return "";
};

const stripComponentBlock = (html, tag) => {
  let output = html;
  while (output.includes(`<${tag}`)) {
    const start = output.indexOf(`<${tag}`);
    const selfClose = output.indexOf("/>", start);
    const explicitClose = output.indexOf(`</${tag}>`, start);
    let end = -1;
    if (selfClose !== -1 && (explicitClose === -1 || selfClose < explicitClose)) {
      end = selfClose + 2;
    } else if (explicitClose !== -1) {
      end = explicitClose + tag.length + 3;
    }
    if (end === -1) break;
    output = output.slice(0, start) + output.slice(end);
  }
  return output;
};

const jsxToHtml = (source) => {
  let html = extractBalancedDiv(source, "page-content");
  for (const tag of [
    "AuthorByline",
    "AdSlot",
    "ArticleTags",
    "AuthorBioBox",
    "Sources",
    "RelatedArticles",
    "StarRating",
    "FAQ",
  ]) {
    html = stripComponentBlock(html, tag);
  }

  html = html
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
    .replace(/<Link\s+href="([^"]+)"[^>]*>/g, '<a href="$1">')
    .replace(/<\/Link>/g, "</a>")
    .replace(/\sclassName=/g, " class=")
    .replace(/\sstyle=\{\{[\s\S]*?\}\}/g, "")
    .replace(/\{\s*' '\s*\}/g, " ")
    .replace(/\{\s*" "\s*\}/g, " ")
    .replace(/\{`([^`]+)`\}/g, "$1")
    .replace(/\{([A-Za-z0-9_./:'" -]+)\}/g, "$1")
    .replace(/\s+/g, " ")
    .replace(/>\s+</g, ">\n<")
    .trim();

  return decodeCommon(html);
};

const articleMeta = loadArticleMeta();
const articlePages = [];
for (const [slug, meta] of Object.entries(articleMeta)) {
  const pageFile = path.join(blogRoot, slug, "page.tsx");
  if (!fs.existsSync(pageFile)) continue;
  const html = jsxToHtml(read(pageFile));
  articlePages.push({ ...meta, html });

  write(
    path.join(root, "src", "pages", "blog", slug + ".astro"),
    `---\nimport BaseLayout from "@/layouts/BaseLayout.astro";\nimport { articles } from "@/data/articles";\n\nconst article = articles.find((item) => item.slug === ${JSON.stringify(slug)});\nif (!article) throw new Error("Missing article: ${slug}");\n---\n\n<BaseLayout title={article.title} description={article.description} seo={{ title: article.title, seoTitle: article.title, description: article.description, keywords: article.keywords, schemaType: "Article", path: "/blog/${slug}" }}>\n  <article class="article-shell">\n    <nav class="crumbs"><a href="/blog">Blog</a><span>/</span><span>{article.category}</span></nav>\n    <h1>{article.title}</h1>\n    <p class="article-meta">{new Date(article.datePublished).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} - {article.readTime}</p>\n    <p class="article-description">{article.description}</p>\n    <div class="article-content" set:html={article.html} />\n  </article>\n</BaseLayout>\n`
  );
}

articlePages.sort((a, b) => b.datePublished.localeCompare(a.datePublished));
write(
  path.join(root, "src", "data", "articles.ts"),
  `export type Article = {\n  slug: string;\n  title: string;\n  description: string;\n  datePublished: string;\n  dateModified: string;\n  keywords: string[];\n  category: string;\n  readTime: string;\n  html: string;\n};\n\nexport const articles = ${JSON.stringify(articlePages, null, 2)} satisfies Article[];\n`
);

const categoryMetadata = {
  Animals: {
    slug: "animals",
    color: "#ef4444",
    description: "Adorable wildlife puzzles featuring animals from around the world.",
    longDescription: "Dive into the wild kingdom with animal puzzle images that reward color matching, shape reading, and patient visual memory.",
  },
  Nature: {
    slug: "nature",
    color: "#22c55e",
    description: "Landscapes and natural scenes to piece together.",
    longDescription: "Explore mountains, forests, water, and outdoor textures through calm visual puzzles built for relaxed focus.",
  },
  Cities: {
    slug: "cities",
    color: "#3b82f6",
    description: "Cityscapes and architectural puzzle images from around the globe.",
    longDescription: "Travel through skyline details, streets, buildings, and landmark compositions with crisp tile-swap challenges.",
  },
  Art: {
    slug: "art",
    color: "#8b5cf6",
    description: "Classic and modern art reimagined as puzzle grids.",
    longDescription: "Solve painterly compositions, abstract details, and vivid artwork with a slower, more observant puzzle rhythm.",
  },
  Food: {
    slug: "food",
    color: "#f59e0b",
    description: "Food photography puzzles full of color and texture.",
    longDescription: "Piece together bright dishes, ingredients, and plating details that test pattern recognition in a deliciously visual way.",
  },
};

const difficulty = ["Easy", "Medium", "Hard", "Expert", "Master"];
const levelsDir = path.join(publicRoot, "levels");
const categories = [];
let id = 1;
for (const folder of fs.readdirSync(levelsDir).filter((name) => fs.statSync(path.join(levelsDir, name)).isDirectory()).sort()) {
  const meta = categoryMetadata[folder] ?? {
    slug: folder.toLowerCase(),
    color: "#64748b",
    description: `${folder} puzzles.`,
    longDescription: `Enjoy the ${folder} puzzle collection.`,
  };
  const files = fs
    .readdirSync(path.join(levelsDir, folder))
    .filter((file) => /\.(png|jpg|jpeg|webp|gif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  categories.push({
    name: folder,
    ...meta,
    levels: files.map((file, index) => {
      const base = path.parse(file).name;
      return {
        id: id++,
        title: base.replace(/[_-]/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()),
        gridSize: index < 2 ? "3x3" : index < 5 ? "3x4" : "3x5",
        difficulty: difficulty[Math.min(index, difficulty.length - 1)],
        image: `/levels/${folder}/${file}`,
        thumbnail: `/level-thumbs/${folder}/${base}.webp`,
      };
    }),
  });
}

write(
  path.join(root, "src", "data", "gameData.ts"),
  `export type GameLevel = {\n  id: number;\n  title: string;\n  gridSize: string;\n  difficulty: string;\n  image: string;\n  thumbnail: string;\n};\n\nexport type GameCategory = {\n  slug: string;\n  name: string;\n  color: string;\n  description: string;\n  longDescription: string;\n  levels: GameLevel[];\n};\n\nexport const categories = ${JSON.stringify(categories, null, 2)} satisfies GameCategory[];\n\nexport const allLevels = categories.flatMap((category) => category.levels.map((level) => ({ category, level })));\nexport const getCategoryBySlug = (slug: string) => categories.find((category) => category.slug === slug);\n`
);

console.log(`Generated ${articlePages.length} article pages and ${categories.length} game categories.`);
