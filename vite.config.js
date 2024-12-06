import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    eslintPlugin({
      exclude: ['/virtual:/', 'node_modules/**'],
    }),
  ],
  build: {
    outDir: 'dist',
  },
})
