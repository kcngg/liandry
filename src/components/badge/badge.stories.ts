import Badge from './Badge.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    rounded: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'primary',
    variant: 'filled',
    size: 'md',
    rounded: false,
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: '<Badge v-bind="args">Badge</Badge>',
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex gap-4 items-center">
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="danger">Danger</Badge>
      </div>
    `,
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="space-y-4">
        <div class="flex gap-4 items-center">
          <Badge variant="filled" color="primary">Filled</Badge>
          <Badge variant="outline" color="primary">Outline</Badge>
          <Badge variant="ghost" color="primary">Ghost</Badge>
        </div>
        <div class="flex gap-4 items-center">
          <Badge variant="filled" color="secondary">Filled</Badge>
          <Badge variant="outline" color="secondary">Outline</Badge>
          <Badge variant="ghost" color="secondary">Ghost</Badge>
        </div>
        <div class="flex gap-4 items-center">
          <Badge variant="filled" color="danger">Filled</Badge>
          <Badge variant="outline" color="danger">Outline</Badge>
          <Badge variant="ghost" color="danger">Ghost</Badge>
        </div>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex gap-4 items-center">
        <Badge size="xs">Extra Small</Badge>
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    `,
  }),
}

export const Rounded: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex gap-4 items-center">
        <Badge rounded>Rounded Badge</Badge>
        <Badge rounded color="secondary">Secondary</Badge>
        <Badge rounded color="danger">Danger</Badge>
      </div>
    `,
  }),
}

export const AllCombinations: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-3">Primary</h3>
          <div class="space-y-2">
            <div class="flex gap-2 items-center">
              <Badge color="primary" variant="filled" size="xs">XS</Badge>
              <Badge color="primary" variant="filled" size="sm">SM</Badge>
              <Badge color="primary" variant="filled" size="md">MD</Badge>
              <Badge color="primary" variant="filled" size="lg">LG</Badge>
            </div>
            <div class="flex gap-2 items-center">
              <Badge color="primary" variant="outline" size="xs">XS</Badge>
              <Badge color="primary" variant="outline" size="sm">SM</Badge>
              <Badge color="primary" variant="outline" size="md">MD</Badge>
              <Badge color="primary" variant="outline" size="lg">LG</Badge>
            </div>
            <div class="flex gap-2 items-center">
              <Badge color="primary" variant="ghost" size="xs">XS</Badge>
              <Badge color="primary" variant="ghost" size="sm">SM</Badge>
              <Badge color="primary" variant="ghost" size="md">MD</Badge>
              <Badge color="primary" variant="ghost" size="lg">LG</Badge>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">Secondary</h3>
          <div class="space-y-2">
            <div class="flex gap-2 items-center">
              <Badge color="secondary" variant="filled" size="xs">XS</Badge>
              <Badge color="secondary" variant="filled" size="sm">SM</Badge>
              <Badge color="secondary" variant="filled" size="md">MD</Badge>
              <Badge color="secondary" variant="filled" size="lg">LG</Badge>
            </div>
            <div class="flex gap-2 items-center">
              <Badge color="secondary" variant="outline" size="xs">XS</Badge>
              <Badge color="secondary" variant="outline" size="sm">SM</Badge>
              <Badge color="secondary" variant="outline" size="md">MD</Badge>
              <Badge color="secondary" variant="outline" size="lg">LG</Badge>
            </div>
            <div class="flex gap-2 items-center">
              <Badge color="secondary" variant="ghost" size="xs">XS</Badge>
              <Badge color="secondary" variant="ghost" size="sm">SM</Badge>
              <Badge color="secondary" variant="ghost" size="md">MD</Badge>
              <Badge color="secondary" variant="ghost" size="lg">LG</Badge>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">Danger</h3>
          <div class="space-y-2">
            <div class="flex gap-2 items-center">
              <Badge color="danger" variant="filled" size="xs">XS</Badge>
              <Badge color="danger" variant="filled" size="sm">SM</Badge>
              <Badge color="danger" variant="filled" size="md">MD</Badge>
              <Badge color="danger" variant="filled" size="lg">LG</Badge>
            </div>
            <div class="flex gap-2 items-center">
              <Badge color="danger" variant="outline" size="xs">XS</Badge>
              <Badge color="danger" variant="outline" size="sm">SM</Badge>
              <Badge color="danger" variant="outline" size="md">MD</Badge>
              <Badge color="danger" variant="outline" size="lg">LG</Badge>
            </div>
            <div class="flex gap-2 items-center">
              <Badge color="danger" variant="ghost" size="xs">XS</Badge>
              <Badge color="danger" variant="ghost" size="sm">SM</Badge>
              <Badge color="danger" variant="ghost" size="md">MD</Badge>
              <Badge color="danger" variant="ghost" size="lg">LG</Badge>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}
