import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'src': resolve(__dirname, 'src')
    },
  },

  css: {
    preprocessorOptions: {
      less: {

      }
    }
  },
  server: {
    port: 9888,
    open: '/home',
    proxy: {
      'api': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },

    }
  }
})


