import { defineConfig, presetIcons, presetWind3 } from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'

export default defineConfig({
  presets: [presetWind3(), presetIcons(), presetAnimations()],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|ts|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // Include Storybook stories
        'src/**/*.stories.{js,ts}',
        'stories/**/*',
      ],
    },
  },
  theme: {
    colors: {
      primary: '#006AFF',
    },
  },
})
