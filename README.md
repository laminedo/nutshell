# Nutshell

A book-summary web app: short "key idea" summaries you can read or listen to, with a personal library. No login, no backend.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Deploy

The site is hosted on GitHub Pages at https://laminedo.github.io/nutshell/, served from the `gh-pages` branch.

```bash
npm run deploy
```

That builds the app for the `/nutshell/` path and pushes `dist/` to `gh-pages`. Commit and push your source changes to `main` separately; deploying does not do that for you.

`npm run build` on its own produces a static site in `dist/` for hosting at the root of a domain. The build also writes `404.html` as a copy of `index.html`, which is how deep links such as `/book/meditations` load on static hosts.

## What's in it

- **Discover** – daily pick, categories, collections and themed shelves
- **Explore** – search across titles, authors and idea text; filter by category; sort
- **Book page** – overview, who it's for, key ideas, progress
- **Reader** – one key idea per screen, audio narration with sentence follow-along and speed control, text size, highlights, keyboard arrows
- **Library** – saved, in progress, finished and highlights (exportable as Markdown)
- Light and dark themes; works on phones

Everything a reader does is stored in the browser's `localStorage` under `nutshell:v1`.

## Add a book

Add an object to one of the files in `src/data/books/` (the shape is `Book` in `src/data/types.ts`). It appears everywhere automatically. Optionally add its `id` to the `recommended` order, or to a collection, in `src/data/index.ts`.

Covers are generated from `cover: { bg, ink, accent, motif }`; the available motifs are in `src/components/Cover.tsx`.

## Content

The 167 included summaries are original writing about public-domain works (all first published in 1930 or earlier). Summaries of books still in copyright may need the rights holder's permission before you publish them.

## Stack

React 19, React Router, TypeScript, Vite. Audio uses the browser's built-in speech synthesis, so there are no audio files and voice quality depends on the device.
