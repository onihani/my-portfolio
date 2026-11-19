# Portfolio v3

A single, simple page: a short intro, selected work with screenshots, writing and past projects.

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
- `projects.ts`: selected work (with screenshots) and past projects
- `writing.ts` + `writing/*.md`: articles, rendered on-site

To add a project, drop screenshots into `src/assets/work/<name>/` (WebP, about 2560px wide), import them in `projects.ts` and add an entry.

## Deploy

Static Next.js app. On Vercel, set the project root directory to `v3`. Analytics (Umami) only loads when `VERCEL_ENV` is `production`.

If styles ever look stale after a big change, delete `.next` and rebuild.
