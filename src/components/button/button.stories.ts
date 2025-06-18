import Button from '@/components/button/Button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  component: Button,
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'My Button',
  },
}
