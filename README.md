# ImageSqueeze

A free, private, browser-based image compressor and converter for PNG, JPG and WebP. Built with **Astro 7** and **Tailwind CSS 4**, and designed to deploy for free on **Cloudflare Pages**.

Everything runs client-side: images are never uploaded, stored or shared.

---

## Features

- Compress and convert **PNG, JPG and WebP** (plus GIF/BMP input)
- **Batch processing** — add as many images as you like (25 MB each)
- **Quality slider**, output format selector and optional max width/height resize
- Before/after file sizes with **% saved**
- Download individually or **all as a ZIP**
- **Dark mode**, fully responsive, accessible
- SEO-ready: meta tags, Open Graph, JSON-LD (`WebApplication` + `FAQPage`), sitemap, robots.txt

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Astro](https://astro.build/) (static output) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite` |
| Image compression | [`browser-image-compression`](https://www.npmjs.com/package/browser-image-compression) |
| ZIP downloads | [`jszip`](https://www.npmjs.com/package/jszip) |
| Sitemap | `@astrojs/sitemap` |
| Hosting | Cloudflare Pages |

## Getting started

```bash
npm install
npm run dev
```

Open the local URL that Astro prints (usually `http://localhost:4321`).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build the static site to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run og` | Regenerate `public/og-image.png` from `public/og-image.svg` |

## Before you deploy

1. **Set your domain.** Update `site` in `astro.config.mjs` and the `Sitemap:` line in `public/robots.txt`.
2. **Set a real contact email.** Search for `hello@imagesqueeze.com` and replace it with your own address in:
   - `src/pages/contact.astro`
   - `src/pages/privacy-policy.astro`
   - `src/pages/terms.astro`
3. **Update the OG image** (optional): edit `public/og-image.svg`, then run `npm run og`.
4. **Favicon** (optional): replace `public/favicon.svg`.

## Deploy to Cloudflare Pages

### Option A — Git integration (recommended)

1. Push this folder to a GitHub (or GitLab) repository.
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository and use:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. Your site goes live at `<project>.pages.dev`.

### Option B — Direct upload with Wrangler

```bash
npm run build
npx wrangler pages deploy dist --project-name imagesqueeze
```

## Connect a custom domain

1. Buy a domain (Namecheap, Cloudflare Registrar, etc.).
2. In **Cloudflare Pages → your project → Custom domains**, add the domain.
3. If the domain is registered elsewhere, point its nameservers to Cloudflare (or add the CNAME that Pages shows).
4. Wait for DNS + SSL to activate (usually a few minutes).
5. Update `site` in `astro.config.mjs` and `public/robots.txt`, then redeploy so canonical URLs and the sitemap use the new domain.

## After launch (SEO checklist)

1. Add the site to [Google Search Console](https://search.google.com/search-console) and submit `https://your-domain.com/sitemap-index.xml`.
2. Add it to [Bing Webmaster Tools](https://www.bing.com/webmasters).
3. Test the home page in [Rich Results Test](https://search.google.com/test/rich-results) (FAQ + WebApplication schema).
4. Check mobile usability and Core Web Vitals in PageSpeed Insights.
5. Promote the tool (Reddit, Quora, relevant communities) and add content over time.

> **Monetization:** when you are ready for Google AdSense, add the AdSense script to `src/layouts/BaseLayout.astro`, place ad slots, and update the privacy policy to mention advertising cookies.

## Project structure

```text
imagesqueeze/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── _headers          # Cloudflare security + cache headers
│   ├── favicon.svg
│   ├── og-image.svg
│   ├── og-image.png      # generated with `npm run og`
│   └── robots.txt
├── scripts/
│   └── generate-og.mjs
└── src/
    ├── components/
    │   ├── FAQ.astro
    │   ├── Footer.astro
    │   ├── Header.astro
    │   ├── ImageCompressor.astro
    │   ├── PageHero.astro
    │   └── ThemeToggle.astro
    ├── data/
    │   └── faq.ts
    ├── layouts/
    │   └── BaseLayout.astro
    ├── pages/
    │   ├── 404.astro
    │   ├── about.astro
    │   ├── contact.astro
    │   ├── index.astro
    │   ├── privacy-policy.astro
    │   └── terms.astro
    └── styles/
        └── global.css
```

## License

MIT — use it, modify it, ship it.
