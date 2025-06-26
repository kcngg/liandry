import type { Preview } from '@storybook/vue3-vite'
import '@unocss/reset/tailwind-compat.css'
import 'uno.css'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#191A1E',
        },
      ],
    },
  },
}

export default preview
