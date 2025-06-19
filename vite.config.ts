import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    Vue(),
    UnoCSS({
      mode: 'per-module',
      content: {
        pipeline: {
          include: [/\.vue$/, /\.ts$/],
        },
      },
    }),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: './tsconfig.json',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/Components': path.resolve(__dirname, 'src/components'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Liandry',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue', 'lucide-vue-next', '@iconify/vue', 'reka-ui'],
      output: {
        globals: {
          vue: 'Vue',
          'lucide-vue-next': 'LucideVueNext',
          '@iconify/vue': 'IconifyVue',
          'reka-ui': 'RekaUI',
        },
      },
    },
    cssCodeSplit: false,
  },
})
