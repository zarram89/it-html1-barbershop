import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/it-html1-barbershop/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/pages/index.html'),
        catalog: resolve(__dirname, 'src/pages/catalog.html'),
      },
    },
  },
})

