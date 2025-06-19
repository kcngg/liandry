import { defineConfig } from 'tsdown'
import Vue from 'unplugin-vue/rolldown'
import unocssRollupPlugin from './plugins/unocss-rollup-plugin.mjs'

export default defineConfig([
  {
    entry: ['./src/index.ts'],
    platform: 'neutral',
    plugins: [Vue({ isProduction: true }), unocssRollupPlugin()],
    dts: { vue: true },
    external: ['lucide-vue-next'],
  },
])
