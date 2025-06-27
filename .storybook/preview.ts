import type { Preview } from '@storybook/vue3-vite'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

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
