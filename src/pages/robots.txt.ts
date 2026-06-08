import type { APIRoute } from "astro";
import { siteConfig } from "@/data/siteConfig";

export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? siteConfig.siteUrl;
  const manualSitemap = new URL("/sitemap.xml", origin).href;
  const astroSitemap = new URL("/sitemap-index.xml", origin).href;

  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "Disallow: /admin/",
      "Disallow: /api/",
      `Sitemap: ${manualSitemap}`,
      `Sitemap: ${astroSitemap}`,
      "",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain",
      },
    },
  );
};
