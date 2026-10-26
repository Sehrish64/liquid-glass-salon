import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/liquid-glass-salon/',
  plugins: [react()],
  build: {
    // Inline every image as base64 so the deployed dist contains no binary files
    // (the GitHub snapshot-push path accepts text files only).
    assetsInlineLimit: 100000000,
  },
})
