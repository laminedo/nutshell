import { copyFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Static hosts such as GitHub Pages answer unknown paths with 404.html. Serving the
// app there lets deep links like /book/meditations load and be handled by the router.
function spaFallback(): Plugin {
  return {
    name: 'spa-fallback',
    apply: 'build',
    writeBundle(options) {
      if (options.dir) copyFileSync(join(options.dir, 'index.html'), join(options.dir, '404.html'))
    },
  }
}

export default defineConfig({
  // Set BASE_PATH when the site is served from a sub-path, e.g. /nutshell/ on GitHub Pages.
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), spaFallback()],
  server: { port: 5173 },
})
