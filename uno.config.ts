import { defineConfig, presetIcons, presetWind4 } from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'

export default defineConfig({
  presets: [presetAnimations(), presetWind4(), presetIcons()],
  content: {
    pipeline: {
      include: [
        // Default content paths
        /\.(vue|ts)($|\?)/,
        // Include Storybook stories
        'src/**/*.stories.ts',
      ],
    },
  },
  theme: {
    colors: {
      primary: '#006AFF',
    },
  },
})
