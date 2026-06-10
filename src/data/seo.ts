import { pageContent, type ContentPage, type PageKey } from "@/data/pageContent";
import { siteConfig } from "@/data/siteConfig";
import { siteRoutes, type SiteRoute } from "@/data/siteRoutes";

export type SeoPage = {
  path: string;
  title: string;
  description: string;
  seoTitle?: string;
  keywords?: string[];
  schemaType?: string;
  noIndex?: boolean;
  priority?: number;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  updated?: string;
};

const baseKeywords = siteConfig.topicKeywords;

const contentPagePaths: Record<PageKey, string> = {
  about: "/about",
  accessibility: "/accessibility",
  blog: "/blog",
  contact: "/contact",
  "cookie-policy": "/cookie-policy",
  disclaimer: "/disclaimer",
  faq: "/faq",
  "how-to-play": "/how-to-play",
  parents: "/parents",
  strategy: "/strategy",
  "difficulty-guide": "/difficulty-guide",
  "game-mechanics": "/game-mechanics",
  "privacy-policy": "/privacy-policy",
  terms: "/terms",
};

const contentSeo = (Object.entries(pageContent) as [PageKey, ContentPage][]).map(([key, page]) => ({
  path: contentPagePaths[key as PageKey],
  title: page.title,
  description: page.description,
  seoTitle: page.seoTitle,
  keywords: page.keywords,
  schemaType: page.schemaType,
  updated: page.updated,
}));

const routeFallbackSeo = (route: SiteRoute): SeoPage => ({
  path: route.path,
  title: route.title,
  description:
    route.path === "/"
      ? siteConfig.description
      : `${route.title} for ${siteConfig.name}, a customizable ${siteConfig.gameGenre} website template.`,
  schemaType: "WebPage",
});

const pageOverrides: Partial<Record<string, Partial<SeoPage>>> = {
  "/": {
    title: siteConfig.name,
    seoTitle: `${siteConfig.name} Online - Free Jigsaw Solitaire Game`,
    description: siteConfig.description,
    priority: 1,
    changeFrequency: "weekly",
  },
  "/play": {
    seoTitle: `Play ${siteConfig.name} Online - Free Puzzle Tiles`,
    description: `Play ${siteConfig.name}, the free open browser puzzle game with tile swapping, merged groups, and image restoration.`,
    priority: 0.9,
    changeFrequency: "weekly",
  },
  "/how-to-play": {
    schemaType: "HowTo",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  "/blog": {
    schemaType: "Blog",
    priority: 0.75,
    changeFrequency: "weekly",
  },
  "/faq": {
    schemaType: "FAQPage",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  "/contact": {
    schemaType: "ContactPage",
    priority: 0.7,
    changeFrequency: "yearly",
  },
  "/privacy-policy": {
    schemaType: "WebPage",
    priority: 0.45,
    changeFrequency: "yearly",
  },
  "/terms": {
    schemaType: "WebPage",
    priority: 0.45,
    changeFrequency: "yearly",
  },
  "/cookie-policy": {
    priority: 0.4,
    changeFrequency: "yearly",
  },
  "/disclaimer": {
    priority: 0.4,
    changeFrequency: "yearly",
  },
};

const contentByPath = new Map(contentSeo.map((page) => [page.path, page]));

export const seoPages: SeoPage[] = siteRoutes.map((route) => {
  const content = contentByPath.get(route.path);
  const fallback = routeFallbackSeo(route);
  const override = pageOverrides[route.path] ?? {};

  return {
    ...fallback,
    ...content,
    ...override,
    keywords: [...baseKeywords, ...(content?.keywords ?? []), ...(override.keywords ?? [])],
    priority: override.priority ?? 0.6,
    changeFrequency: override.changeFrequency ?? (route.group === "legal" ? "yearly" : "monthly"),
  };
});

export const seoByPath = new Map(seoPages.map((page) => [page.path, page]));

export const normalizePath = (pathname: string) => {
  const path = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  return path || "/";
};

export const withTrailingSlash = (path: string) => {
  if (!path || path === "/") return "/";
  if (path.includes(".") || path.endsWith("/")) return path;
  const [pathname, query = ""] = path.split("?");
  return `${pathname}/${query ? `?${query}` : ""}`;
};

export const getCanonicalUrl = (path: string, origin = siteConfig.siteUrl) => new URL(withTrailingSlash(path), origin).href;

export const getSeoForPath = (pathname: string): SeoPage => {
  const path = normalizePath(pathname);
  return seoByPath.get(path) ?? {
    path,
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: baseKeywords,
    schemaType: "WebPage",
    priority: 0.5,
    changeFrequency: "monthly",
  };
};

export const buildPageTitle = (page: SeoPage) => page.seoTitle ?? `${page.title} | ${siteConfig.name}`;

export const buildJsonLd = (page: SeoPage, canonicalUrl: string) => {
  const websiteId = `${siteConfig.siteUrl.replace(/\/$/, "")}/#website`;
  const publisherId = `${siteConfig.siteUrl.replace(/\/$/, "")}/#organization`;
  const pageId = `${canonicalUrl}#webpage`;
  const schemaType = page.schemaType ?? "WebPage";
  const breadcrumbs = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.siteUrl,
    },
    ...(page.path === "/"
      ? []
      : [
          {
            "@type": "ListItem",
            position: 2,
            name: page.title,
            item: canonicalUrl,
          },
        ]),
  ];

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      name: siteConfig.name,
      alternateName: ["JigSolitaire Online", "Jigsaw Solitaire", "jigsolitiare"],
      url: siteConfig.siteUrl,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      publisher: {
        "@id": publisherId,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": publisherId,
      name: siteConfig.publisherName,
      url: siteConfig.siteUrl,
      email: siteConfig.contactEmail,
      sameAs: siteConfig.sameAs,
    },
    {
      "@context": "https://schema.org",
      "@type": schemaType,
      "@id": pageId,
      url: canonicalUrl,
      name: buildPageTitle(page),
      headline: page.title,
      description: page.description,
      isPartOf: {
        "@id": websiteId,
      },
      about: siteConfig.topicKeywords,
      inLanguage: siteConfig.language,
      publisher: {
        "@id": publisherId,
      },
      dateModified: page.updated ?? siteConfig.legalLastUpdated,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs,
    },
  ];
};
