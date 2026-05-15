# Probandenservice — Next.js website

Moderne, statisch-renderbare Next.js site voor Probandenservice.
Volledige redesign in "Garage Floor" stijl: donker dominant, rood signaal, Bebas Neue + Manrope, racing-stripe energie.

## Quick start

```bash
cd site
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Statische export (voor Netlify / GitHub Pages)

In `next.config.mjs` zet je `output: 'export'` aan, daarna:

```bash
npm run build
# resultaat staat in /out
```

## Deploy op Vercel

Push naar GitHub, koppel de repo aan Vercel. Werkt out-of-the-box, geen config nodig.

## Project structuur

```
site/
  app/                       # Next.js App Router pagina's
    layout.tsx               # Root layout (TopBar + Nav + Footer)
    page.tsx                 # Homepage
    diensten/                # Diensten overview + detail [slug]
    spoedservice/            # 24/7 spoed landing
    over-ons/
    faq/
    blog/                    # Blog overview + artikel [slug]
    contact/
    sitemap.ts               # auto-generated XML sitemap
    robots.ts                # robots.txt
    globals.css              # design tokens + base styles
  components/                # herbruikbare UI componenten
  lib/                       # data + site config
    site.ts                  # bedrijfsgegevens
    services.ts              # dienst data (homepage + detail pages)
    blog.ts                  # blog posts
  public/                    # statische assets (foto's, logo)
```

## Wat aanpassen

- **Bedrijfsgegevens**: `lib/site.ts` (naam, adres, telefoon, openingstijden, KVK)
- **Diensten**: `lib/services.ts` — toevoegen/wijzigen genereert automatisch detail pages
- **Blog posts**: `lib/blog.ts`
- **Foto's**: vervang placeholders in `public/images/` (zelfde bestandsnamen aanhouden)
- **Logo**: `public/logo.svg` (placeholder nu — vervang door echt logo)

## SEO

- Per-page `<title>` en `<meta description>` via Next.js Metadata API
- Automatische `sitemap.xml` en `robots.txt`
- LocalBusiness JSON-LD structured data in root layout (helpt voor Google Maps & Knowledge Panel)
- Semantische HTML structuur (`<section>`, `<article>`, `<nav>`, headings hiërarchie)
- Open Graph + Twitter card tags
- Alle dienst-pages hebben eigen URL & meta voor maximale longtail SEO

## Fonts

Bebas Neue + Manrope + IBM Plex Mono — geladen via `next/font/google` (geen externe requests, automatisch self-hosted).
