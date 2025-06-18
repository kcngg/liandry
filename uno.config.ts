import { defineConfig } from 'unocss'

export default defineConfig({
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
})
