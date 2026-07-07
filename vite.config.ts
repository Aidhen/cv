import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({ command }) => ({
  plugins: [react(), svgr()],
  base: command === 'build' ? '/cv/' : '/', 
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    }
  }
}))