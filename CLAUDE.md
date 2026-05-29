# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # start dev server at localhost:3000
yarn build        # production build (runs Next.js lint + type-check + compile)
yarn lint         # ESLint with auto-fix across all .js/.ts/.tsx files
npx tsc --noEmit  # type-check only, no output
```

Use `nvm use v24` before running any commands — the project requires Node 24.

Vercel deploys automatically on push to `master`. The build runs `yarn build`, which includes ESLint. **Prettier errors are treated as build errors**, so always run `yarn lint` before pushing.

## Architecture

This is a **Next.js 12 / React 17 / TypeScript** app deployed on Vercel.

### Single-page portfolio

The entire portfolio lives in `src/pages/index.tsx` — one file, no shared components used. All data (jobs, education, skills, links) is defined as constants at the top of that file. All React components (Nav, Hero, About, Experience, Education, Skills, Contact) are co-located in the same file below the data.

`src/pages/employment.tsx` and `src/pages/education.tsx` are redirect-only pages that send visitors to `/#experience` and `/#education` respectively.

### Styling

All styles are in `src/styles/global.css` — plain CSS with custom properties (design tokens), no Tailwind (Tailwind is a leftover dependency but not used). The design token palette lives in `:root` at the top. The accent color is `--accent: #e3793f` (rust/orange).

`src/components/` (Layout, Navigation) is dead code — kept for reference but not imported anywhere.

### Key patterns in index.tsx

- **`Reveal`** — scroll-reveal wrapper using `IntersectionObserver` + React state. Pass `as="section"` to render as a different element, `delay={ms}` to stagger.
- **`useScrolled`** — returns true once the page scrolls past 24px; used to add backdrop blur to the nav.
- **`useActiveSection`** — `IntersectionObserver`-based section spy; drives the active nav link highlight.
- **`dangerouslySetInnerHTML`** — used in experience bullets and role titles for inline `<b>` and `<span>` markup. All data is hardcoded, not user input.

### Linting quirks

- `react/prop-types` is disabled (TypeScript handles it).
- `prettier/prettier` errors fail the Vercel build. Prettier config: `printWidth: 100`, `bracketSpacing: false`, `trailingComma: "all"`. Run `npx prettier --write src/` before committing if in doubt.
- `@typescript-eslint/explicit-module-boundary-types` warnings are expected and non-blocking.

### Public assets

- `public/portrait.jpg` — hero portrait photo
- `public/sitemap.xml` — update `<lastmod>` when content changes
- `public/robots.txt` — allows all crawlers
