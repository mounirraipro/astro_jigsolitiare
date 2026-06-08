import type { APIRoute } from "astro";
import { seoPages } from "@/data/seo";
import { siteConfig } from "@/data/siteConfig";

export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? siteConfig.siteUrl;
  const today = new Date().toISOString().slice(0, 10);
  const urls = seoPages
    .filter((page) => !page.noIndex)
    .map((page) => {
      const loc = new URL(page.path, origin).href;

      return [
        "<url>",
        `<loc>${loc}</loc>`,
        `<lastmod>${today}</lastmod>`,
        `<changefreq>${page.changeFrequency}</changefreq>`,
        `<priority>${page.priority?.toFixed(1)}</priority>`,
        "</url>",
      ].join("");
    })
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
