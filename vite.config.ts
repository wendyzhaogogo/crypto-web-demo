import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { Env } from './src/config/env'

// https://vite.dev/config/
export default defineConfig({
  base: Env.isProd() ? '/crypto-web-demo/' : '/',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
})
