import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        // Copy index.html to 404.html for GitHub Pages SPA routing
        const distPath = join(process.cwd(), 'dist')
        copyFileSync(
          join(distPath, 'index.html'),
          join(distPath, '404.html')
        )
      }
    }
  ],
  base: '/one-for-all/',
})
