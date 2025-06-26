import { defineConfig, presetIcons, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [presetWind4(), presetIcons()],
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
