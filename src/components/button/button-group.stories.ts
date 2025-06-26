import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of all buttons in the group',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Layout direction of the button group',
    },
    attached: {
      control: { type: 'boolean' },
      description: 'Whether buttons are attached (no gap) or separated',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'md',
    orientation: 'horizontal',
    attached: true,
  },
  render: (args) => ({
    components: { ButtonGroup, Button },
    setup() {
      return { args }
    },
    template: `
      <ButtonGroup v-bind="args">
        <Button>Save</Button>
        <Button>Cancel</Button>
        <Button>Delete</Button>
      </ButtonGroup>
    `,
  }),
}

export const Horizontal: Story = {
  args: {
    size: 'md',
    orientation: 'horizontal',
    attached: true,
  },
  render: (args) => ({
    components: { ButtonGroup, Button },
    setup() {
      return { args }
    },
    template: `
      <ButtonGroup v-bind="args">
        <Button variant="filled" color="primary">Primary</Button>
        <Button variant="outline" color="secondary">Secondary</Button>
        <Button variant="ghost" color="danger">Danger</Button>
      </ButtonGroup>
    `,
  }),
}

export const Vertical: Story = {
  args: {
    size: 'md',
    orientation: 'vertical',
    attached: true,
  },
  render: (args) => ({
    components: { ButtonGroup, Button },
    setup() {
      return { args }
    },
    template: `
      <ButtonGroup v-bind="args">
        <Button variant="filled" color="primary">Top</Button>
        <Button variant="outline" color="secondary">Middle</Button>
        <Button variant="ghost" color="danger">Bottom</Button>
      </ButtonGroup>
    `,
  }),
}

export const WithGaps: Story = {
  args: {
    size: 'md',
    orientation: 'horizontal',
    attached: false,
  },
  render: (args) => ({
    components: { ButtonGroup, Button },
    setup() {
      return { args }
    },
    template: `
      <ButtonGroup v-bind="args">
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </ButtonGroup>
    `,
  }),
}

export const AllSizes: Story = {
  render: () => ({
    components: { ButtonGroup, Button },
    template: `
      <div class="space-y-4">
        <div>
          <h3 class="text-sm font-medium mb-2">Extra Small (xs)</h3>
          <ButtonGroup size="xs">
            <Button>Save</Button>
            <Button>Cancel</Button>
            <Button>Delete</Button>
          </ButtonGroup>
        </div>
        
        <div>
          <h3 class="text-sm font-medium mb-2">Small (sm)</h3>
          <ButtonGroup size="sm">
            <Button>Save</Button>
            <Button>Cancel</Button>
            <Button>Delete</Button>
          </ButtonGroup>
        </div>
        
        <div>
          <h3 class="text-sm font-medium mb-2">Medium (md)</h3>
          <ButtonGroup size="md">
            <Button>Save</Button>
            <Button>Cancel</Button>
            <Button>Delete</Button>
          </ButtonGroup>
        </div>
        
        <div>
          <h3 class="text-sm font-medium mb-2">Large (lg)</h3>
          <ButtonGroup size="lg">
            <Button>Save</Button>
            <Button>Cancel</Button>
            <Button>Delete</Button>
          </ButtonGroup>
        </div>
        
        <div>
          <h3 class="text-sm font-medium mb-2">Extra Large (xl)</h3>
          <ButtonGroup size="xl">
            <Button>Save</Button>
            <Button>Cancel</Button>
            <Button>Delete</Button>
          </ButtonGroup>
        </div>
      </div>
    `,
  }),
}

export const MixedVariants: Story = {
  args: {
    size: 'md',
    orientation: 'horizontal',
    attached: true,
  },
  render: (args) => ({
    components: { ButtonGroup, Button },
    setup() {
      return { args }
    },
    template: `
      <div class="space-y-4">
        <div>
          <h3 class="text-sm font-medium mb-2">Primary Colors</h3>
          <ButtonGroup v-bind="args">
            <Button variant="filled" color="primary">Filled</Button>
            <Button variant="outline" color="primary">Outline</Button>
            <Button variant="ghost" color="primary">Ghost</Button>
          </ButtonGroup>
        </div>
        
        <div>
          <h3 class="text-sm font-medium mb-2">Secondary Colors</h3>
          <ButtonGroup v-bind="args">
            <Button variant="filled" color="secondary">Filled</Button>
            <Button variant="outline" color="secondary">Outline</Button>
            <Button variant="ghost" color="secondary">Ghost</Button>
          </ButtonGroup>
        </div>
        
        <div>
          <h3 class="text-sm font-medium mb-2">Danger Colors</h3>
          <ButtonGroup v-bind="args">
            <Button variant="filled" color="danger">Filled</Button>
            <Button variant="outline" color="danger">Outline</Button>
            <Button variant="ghost" color="danger">Ghost</Button>
          </ButtonGroup>
        </div>
      </div>
    `,
  }),
}

export const IconButtons: Story = {
  args: {
    size: 'md',
    orientation: 'horizontal',
    attached: true,
  },
  render: (args) => ({
    components: { ButtonGroup, Button },
    setup() {
      return { args }
    },
    template: `
      <div class="space-y-4">
        <div>
          <h3 class="text-sm font-medium mb-2">Icon Buttons</h3>
          <ButtonGroup v-bind="args">
            <Button as-icon>←</Button>
            <Button as-icon>↑</Button>
            <Button as-icon>↓</Button>
            <Button as-icon>→</Button>
          </ButtonGroup>
        </div>
        
        <div>
          <h3 class="text-sm font-medium mb-2">Mixed Icon & Text</h3>
          <ButtonGroup v-bind="args">
            <Button as-icon>+</Button>
            <Button>Add Item</Button>
            <Button as-icon>×</Button>
          </ButtonGroup>
        </div>
      </div>
    `,
  }),
}

export const LoadingStates: Story = {
  args: {
    size: 'md',
    orientation: 'horizontal',
    attached: true,
  },
  render: (args) => ({
    components: { ButtonGroup, Button },
    setup() {
      return { args }
    },
    template: `
      <div class="space-y-4">
        <div>
          <h3 class="text-sm font-medium mb-2">Loading States</h3>
          <ButtonGroup v-bind="args">
            <Button>Normal</Button>
            <Button is-loading>Loading</Button>
            <Button>Normal</Button>
          </ButtonGroup>
        </div>
        
        <div>
          <h3 class="text-sm font-medium mb-2">All Loading</h3>
          <ButtonGroup v-bind="args">
            <Button is-loading>Save</Button>
            <Button is-loading>Cancel</Button>
            <Button is-loading>Delete</Button>
          </ButtonGroup>
        </div>
      </div>
    `,
  }),
}

export const VerticalWithGaps: Story = {
  args: {
    size: 'lg',
    orientation: 'vertical',
    attached: false,
  },
  render: (args) => ({
    components: { ButtonGroup, Button },
    setup() {
      return { args }
    },
    template: `
      <ButtonGroup v-bind="args">
        <Button variant="filled" color="primary">Create New</Button>
        <Button variant="outline" color="secondary">Edit Existing</Button>
        <Button variant="ghost" color="danger">Delete All</Button>
      </ButtonGroup>
    `,
  }),
}

export const FormActions: Story = {
  args: {
    size: 'md',
    orientation: 'horizontal',
    attached: false,
  },
  render: (args) => ({
    components: { ButtonGroup, Button },
    setup() {
      return { args }
    },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-medium mb-2">Form Actions - Attached</h3>
          <ButtonGroup :attached="true" v-bind="args">
            <Button variant="outline" color="secondary">Cancel</Button>
            <Button variant="filled" color="primary">Save</Button>
          </ButtonGroup>
        </div>
        
        <div>
          <h3 class="text-sm font-medium mb-2">Form Actions - With Gaps</h3>
          <ButtonGroup v-bind="args">
            <Button variant="outline" color="secondary">Cancel</Button>
            <Button variant="filled" color="primary">Save</Button>
          </ButtonGroup>
        </div>
        
        <div>
          <h3 class="text-sm font-medium mb-2">Destructive Actions</h3>
          <ButtonGroup :attached="true" v-bind="args">
            <Button variant="outline" color="secondary">Cancel</Button>
            <Button variant="filled" color="danger">Delete</Button>
          </ButtonGroup>
        </div>
      </div>
    `,
  }),
}

export const Toolbar: Story = {
  args: {
    size: 'sm',
    orientation: 'horizontal',
    attached: true,
  },
  render: (args) => ({
    components: { ButtonGroup, Button },
    setup() {
      return { args }
    },
    template: `
      <div class="space-y-4">
        <div>
          <h3 class="text-sm font-medium mb-2">Text Formatting</h3>
          <ButtonGroup v-bind="args">
            <Button as-icon variant="outline">B</Button>
            <Button as-icon variant="outline">I</Button>
            <Button as-icon variant="outline">U</Button>
            <Button as-icon variant="outline">S</Button>
          </ButtonGroup>
        </div>
        
        <div>
          <h3 class="text-sm font-medium mb-2">Alignment</h3>
          <ButtonGroup v-bind="args">
            <Button as-icon variant="outline">⟵</Button>
            <Button as-icon variant="outline">⟷</Button>
            <Button as-icon variant="outline">⟶</Button>
            <Button as-icon variant="outline">⟺</Button>
          </ButtonGroup>
        </div>
        
        <div>
          <h3 class="text-sm font-medium mb-2">Actions</h3>
          <ButtonGroup v-bind="args">
            <Button variant="outline">Copy</Button>
            <Button variant="outline">Paste</Button>
            <Button variant="outline">Cut</Button>
            <Button variant="outline" color="danger">Delete</Button>
          </ButtonGroup>
        </div>
      </div>
    `,
  }),
}
