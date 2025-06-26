import type { Preview } from '@storybook/vue3-vite'
import '@unocss/reset/tailwind-compat.css'
import 'uno.css'

const preview: Preview = {
  parameters: {
    layout: 'centered',
  },
}

export default preview
