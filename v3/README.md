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
- `projects.ts`: work (screenshots, logo, brand colour) and earlier projects
- `experience.ts`: the About page's experience and education
- `writing.ts` + `writing/*.md`: articles, rendered on-site

To add a project, drop screenshots into `src/assets/work/<name>/` (WebP, about 2560px wide) and a 96px square logo into `src/assets/logos/`, import them in `projects.ts` and add an entry with the project's brand colour. List shots from the landing page through to the app.

## Deploy

Static Next.js app. On Vercel, set the project root directory to `v3`. Analytics (Umami) only loads when `VERCEL_ENV` is `production`.

If styles ever look stale after a big change, delete `.next` and rebuild.
