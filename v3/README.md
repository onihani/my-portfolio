# Portfolio v3

Three simple pages: home (a short intro and the work, each project on its own brand colour), about, and writing (articles read on-site).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run ci         # typecheck, lint, format check, copy check, build
npm run test:e2e   # Playwright smoke tests (run after a build)
```

## Edit content

Everything lives in `src/content/`:

- `site.ts`: name, headline, links
- `projects.ts`: selected work (screenshots, logo, brand colour, and a `liveUrl` for any screenshot that can be shown as the live site on desktop; check a site actually draws inside a frame before adding one, as Soccersm stays blank and Jodi refuses)
- `experience.ts`: the About page's experience list
- `writing.ts` + `writing/*.md`: articles, rendered on-site

To add a project, drop screenshots into `src/assets/work/<name>/` (WebP, about 2560px wide) and a 96px square logo into `src/assets/logos/`, import them in `projects.ts` and add an entry with the project's brand colour and a `textTone` (`light` for white text on deep colours, `dark` for bright ones; check it reaches 4.5:1). List shots from the landing page through to the app.

## Deploy

Static Next.js app. On Vercel, set the project root directory to `v3`. Analytics (Umami) only loads when `VERCEL_ENV` is `production`.

If styles ever look stale after a big change, delete `.next` and rebuild.
