import type { Preview } from '@storybook/vue3-vite'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

// Force dark background globally
const darkStyles = `
  .sb-show-main,
  .sb-main-padded,
  .docs-story,
  .sbdocs-content,
  .sbdocs-wrapper {
    background-color: #0f0f23 !important;
    color: #ffffff !important;
  }
  
  .sb-show-main {
    background: #171717 !important;
  }
  
  /* Force dark background for canvas */
  .sb-story-canvas {
    background: #0f0f23 !important;
  }
  
  /* Dark theme for docs */
  .sbdocs-content {
    background-color: #171717 !important;
    color: #ffffff !important;
  }
  
  /* Dark theme for code blocks */
  .sbdocs-content pre,
  .sbdocs-content code {
    background-color: #171717 !important;
    color: #ffffff !important;
  }
`

// Inject styles
const styleElement = document.createElement('style')
styleElement.textContent = darkStyles
document.head.append(styleElement)

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0f0f23',
        },
      ],
    },
    layout: 'centered',
    docs: {
      theme: {
        base: 'dark',
        colorPrimary: '#3b82f6',
        colorSecondary: '#6366f1',
        appBg: '#0f0f23',
        appContentBg: '#0f0f23',
        appBorderColor: '#374151',
        textColor: '#ffffff',
        barTextColor: '#ffffff',
        barSelectedColor: '#3b82f6',
        barBg: '#1f2937',
        inputBg: '#374151',
        inputBorder: '#4b5563',
        inputTextColor: '#ffffff',
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'dark', icon: 'circle', title: 'Dark' },
          { value: 'light', icon: 'circlehollow', title: 'Light' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
}

export default preview
