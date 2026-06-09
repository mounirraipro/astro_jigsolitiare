import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE_URL ?? "https://example.com";

export default defineConfig({
  site,
  output: "static",
  compressHTML: false,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push", "gtag"],
      },
    }),
    sitemap(),
  ],
});
