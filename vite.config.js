import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/p187/',
  build: {
    outDir: 'docs'
  }
})
