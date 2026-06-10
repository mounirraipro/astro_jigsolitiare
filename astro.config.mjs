import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./src/data/siteConfig";

const site = process.env.SITE_URL ?? siteConfig.siteUrl;

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "always",
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
  ],
});
