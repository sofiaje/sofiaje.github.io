import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: 'docs', // Change 'docs' to 'public' if you prefer that directory name
  },
})
