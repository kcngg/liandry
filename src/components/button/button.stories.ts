import Button from '@/components/button/Button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta: Meta<any> = {
  component: Button,
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component:
          'Un composant bouton polyvalent avec différentes variantes de style et de taille utilisant Tailwind CSS.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
      description: 'La variante de style du bouton',
      defaultValue: 'primary',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'La taille du bouton',
      defaultValue: 'md',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    default: {
      control: { type: 'text' },
      description: 'Le contenu du bouton (slot par défaut)',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    default: 'Mon Bouton',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    default: 'Bouton Principal',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Le bouton principal avec un style bleu. Utilisé pour les actions principales.',
      },
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template:
      '<Button :variant="args.variant" :size="args.size">{{ args.default }}</Button>',
  }),
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    default: 'Bouton Secondaire',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Le bouton secondaire avec un style gris. Utilisé pour les actions secondaires.',
      },
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template:
      '<Button :variant="args.variant" :size="args.size">{{ args.default }}</Button>',
  }),
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
    default: 'Supprimer',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Le bouton de danger avec un style rouge. Utilisé pour les actions destructives.',
      },
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template:
      '<Button :variant="args.variant" :size="args.size">{{ args.default }}</Button>',
  }),
}

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Toutes les tailles de boutons disponibles : xs, sm, md, lg, xl.',
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <Button variant="primary" size="xs">Extra Small</Button>
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
        <Button variant="primary" size="xl">Extra Large</Button>
      </div>
    `,
  }),
}

export const AllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Toutes les variantes de boutons affichées ensemble pour comparaison.',
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
        <Button variant="primary" size="md">Primary</Button>
        <Button variant="secondary" size="md">Secondary</Button>
        <Button variant="danger" size="md">Danger</Button>
      </div>
    `,
  }),
}

export const LoadingState: Story = {
  args: {
    isLoading: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Un bouton dans un état de chargement. Utilisé pour indiquer que l’action est en cours.',
      },
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `
      <Button :variant="args.variant" :size="args.size" :isLoading="args.isLoading">
        {{ args.default }}
      </Button>
    `,
  }),
}

export const IconButton: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    asIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Un bouton avec une icône. Utilisé pour les actions qui nécessitent une représentation visuelle.',
      },
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `
      <Button :variant="args.variant" :size="args.size">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
      </Button>
    `,
  }),
}

export const SizeMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Matrice complète montrant toutes les combinaisons de variantes et de tailles.',
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <h4 style="margin-bottom: 0.5rem;">Primary</h4>
          <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
            <Button variant="primary" size="xs">XS</Button>
            <Button variant="primary" size="sm">SM</Button>
            <Button variant="primary" size="md">MD</Button>
            <Button variant="primary" size="lg">LG</Button>
            <Button variant="primary" size="xl">XL</Button>
          </div>
        </div>
        <div>
          <h4 style="margin-bottom: 0.5rem;">Secondary</h4>
          <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
            <Button variant="secondary" size="xs">XS</Button>
            <Button variant="secondary" size="sm">SM</Button>
            <Button variant="secondary" size="md">MD</Button>
            <Button variant="secondary" size="lg">LG</Button>
            <Button variant="secondary" size="xl">XL</Button>
          </div>
        </div>
        <div>
          <h4 style="margin-bottom: 0.5rem;">Danger</h4>
          <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
            <Button variant="danger" size="xs">XS</Button>
            <Button variant="danger" size="sm">SM</Button>
            <Button variant="danger" size="md">MD</Button>
            <Button variant="danger" size="lg">LG</Button>
            <Button variant="danger" size="xl">XL</Button>
          </div>
        </div>
      </div>
    `,
  }),
}
