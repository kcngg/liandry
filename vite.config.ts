import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [Vue(), UnoCSS()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/Components': path.resolve(__dirname, 'src/components'),
    },
  },
})
