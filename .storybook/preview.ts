import type { Preview } from '@storybook/vue3-vite'
import '@unocss/reset/tailwind-compat.css'
import 'uno.css'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
}

export default preview
