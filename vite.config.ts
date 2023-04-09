import * as path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [vue(), UnoCSS(), VitePWA({ registerType: 'autoUpdate' }), Pages()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
