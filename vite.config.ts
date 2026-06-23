import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const workPages = [
  'computer-use',
  'code-intelligence',
  'reasoning-rag',
  'ads-recommendation',
  'model-learning',
  'cloud-intelligence',
  'embodied-agents',
]

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries([
        ['main', resolve(__dirname, 'index.html')],
        ...workPages.map((slug) => [slug, resolve(__dirname, `work/${slug}/index.html`)]),
      ]),
    },
  },
})
