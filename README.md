# Game Template Astro

Astro starter for a customizable browser game site with reusable content and policy pages.

## Included

- Astro project config
- `@astrojs/sitemap` for generated sitemaps during build
- `@astrojs/partytown` for offloading Google scripts
- Google Analytics / Google Tag Manager helper component
- AMP-ready layout and AMP Google Analytics helper

## Setup

```bash
npm install
npm run dev
```

Set production values in `.env`. `SITE_URL` must be the final public origin so Astro can generate correct sitemap URLs:

```bash
SITE_URL=https://example.com
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
PUBLIC_GTM_ID=GTM-XXXXXXX
```

Customize the game name, description, genre, contact email, policy date, social defaults, and topic keywords in `src/data/siteConfig.ts`.

Page copy and page-level SEO live in `src/data/pageContent.ts`. Route-level SEO, canonical sitemap entries, JSON-LD schema choices, and crawl priority live in `src/data/seo.ts` and `src/data/siteRoutes.ts`.
