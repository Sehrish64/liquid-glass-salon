# Build notes — liquid-glass-salon ("Aurelia Salon & Spa")

Built 2026-10-26 from the liquid-glass-agency demo (React + Vite + TypeScript +
Tailwind v3, .liquid-glass / .liquid-glass-strong CSS, BlurText component,
Instrument Serif italic headings + Barlow body), re-themed to Sehrish's winning
Dark + Gold luxury: deep black backgrounds, gold (#d4af37) accents and CTAs.

## Imagery (all generated, all eyeballed before use)

8 photorealistic images, all in `src/assets/`:
- hero-bride.webp — hero portrait: Pakistani bride, red lehenga, gold embroidery
  and jewellery, salon vanity lights behind her (cinematic still + slow zoom;
  no video — the agency prompt's CloudFront videos were NOT reused).
- bride-makeup.webp — bride getting makeup done at the salon vanity.
- bride-full.webp — full-length bride in the salon.
- mehndi.webp — mehndi hands detail with gold bangles.
- salon-interior.webp — luxury black-and-gold salon interior.
- hairstyling.webp, facial.webp, manicure.webp — service + gallery shots.
No generated image was discarded: all 8 passed the face/hands/jewellery check
on first pass.

## Sections

Glass Nav · Hero (badge, headline, "Book Appointment" WhatsApp placeholder +
"View Services") · Services (Hair Studio / Skin & Facial / Bridal & Makeup,
glass cards with tag pills) · Packages (Signature Facial Rs 4,500; Hair Spa +
Cut Rs 6,000; Bridal Signature Rs 45,000 — labelled demo rates) · Gallery (6
images) · Testimonials (3 demo quotes) · Booking/Contact (11 AM–9 PM, WhatsApp
placeholder "#", Karachi) · Footer. No emoji anywhere in the site.

## Deploy constraint (text-only push path)

`vite.config.ts` sets `build.assetsInlineLimit` to 100,000,000, so all 8 images
inline as base64 into the JS bundle. Verified: `dist/` contains only text files
(index.html, JS, CSS, two SVG files from `public/`) — no png/jpg/webp/mp4.
Source goes to `main`, built `dist/` contents go to `gh-pages` (root).

## Deploy fix (2026-10-26, same night)

The first single-file push of the 5.95 MB inlined bundle failed with HTTP 413,
and the file alone also failed — the push path's body limit sits below ~6 MB.
Fix, both verified by re-screenshot: (1) images resized/compressed with ffmpeg
(hero 1100px, others 900px, webp q72–74) — 4.1 MB → 0.69 MB, no visible loss in
screenshots; (2) sections lazy-loaded (`src/sections/`) so Rollup splits the
bundle into chunks ≤ 600 KB, pushed to `gh-pages` in five small commits
(html/css/icons, main chunk, gallery+shared chunks, section chunks, index).
The `main` branch carries the same source minus the binary `src/assets/`
images (push path accepts text only); the live `gh-pages` bundle carries them
inlined. To rebuild from `main` alone, restore the 8 images into
`src/assets/` from `assets-raw/` (originals) and run the ffmpeg resize step
above, or copy them from the local project copy.

- `npm run build` passes (tsc + vite build, 443 modules).
- Served `dist/` locally and screenshotted with headless Chrome: desktop
  1440×900 + mobile 390×844 for hero, services, packages, gallery, booking —
  all 11 images loaded, glass edges clean, gold accents, text inside frame,
  cards stack on mobile. The only "overflow" flagged by measurement is the hero
  image itself, which intentionally overflows inside its `overflow-hidden`
  section for the slow-zoom effect (same pattern as the agency demo).
- Note: screenshots were taken against the local server, where Google Fonts
  may fall back (sandbox Chrome egress); the shipped `dist/` references the
  same Google Fonts links as the agency demo, which renders correctly live.
