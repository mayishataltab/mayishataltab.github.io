# Mayishat Altab Mridu — Personal Website

A static academic portfolio (HTML/CSS/JS, no build step).

## Files
- `index.html` — page content (includes JSON-LD data for search engines)
- `styles.css` — styles (light/dark themes, responsive, print layout)
- `script.js` — theme toggle, mobile menu, scroll reveal, copy citation / BibTeX
- `404.html` — custom "page not found" page (GitHub Pages uses it automatically)
- `robots.txt`, `sitemap.xml` — help search engines index the site
- `assets/Mayishat_Altab_Mridu_CV.pdf` — downloadable CV
- `assets/profile.jpg` — profile photo (400×400); replace the file to change it
- `assets/og-image.jpg` — 1200×630 preview image shown when the link is shared

## Deploy on GitHub Pages
1. Push this folder's contents to a repository named `mayishataltab.github.io`.
2. Repository → Settings → Pages → Source: `main` branch, `/ (root)`.

## After deploying: check the site address
Every file below assumes the site lives at `https://mayishataltab.github.io/`.
If you use a different repo name or a custom domain, replace that address in:

- `index.html` — `<link rel="canonical">` and the JSON-LD block (`url`, `image`)
- `index.html` — `og:image` and `twitter:image`: change `assets/og-image.jpg` to the full URL,
  e.g. `https://mayishataltab.github.io/assets/og-image.jpg` (LinkedIn needs an absolute URL)
- `sitemap.xml` — `<loc>`
- `robots.txt` — `Sitemap:` line

Note: the 404 page's links point to `/`, which is correct for a `username.github.io` site or a custom domain.

## Get indexed by Google
After deploying, add the site in Google Search Console and submit `sitemap.xml`.
