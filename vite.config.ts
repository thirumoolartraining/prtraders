import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Forces absolute paths for all assets
  plugins: [react()],
  server: {
    port: 3000
  }
})