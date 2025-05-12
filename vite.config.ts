import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// making proxy settings, cause earlier cookies were set to server url, but browser only knows front url
// and it was not sending cookies to server, so we need to set proxy to make it work

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/app': {
        target: 'http://localhost:8000', // Your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/app/, ''), // Optional: Remove /api prefix
      },
    },
  },
})
