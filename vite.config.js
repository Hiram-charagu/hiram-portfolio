import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // The Three.js scene is an on-demand dynamic import, so this limit applies only
    // to its optional chunk; the initial app bundle remains small.
    chunkSizeWarningLimit: 1000,
  },
})
