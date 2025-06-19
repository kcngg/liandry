import { Plus } from 'lucide-vue-next'
import Button from '@/components/button/Button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta: Meta<any> = {
  component: Button,
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component:
          'Un composant bouton polyvalent avec différentes couleurs, variantes de style et tailles utilisant Tailwind CSS.',
      },
    },
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
      description: 'La couleur du bouton',
      defaultValue: 'primary',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outline', 'ghost'],
      description: 'La variante de style du bouton',
      defaultValue: 'filled',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'filled' },
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
    isLoading: {
      control: { type: 'boolean' },
      description: 'État de chargement du bouton',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    asIcon: {
      control: { type: 'boolean' },
      description: 'Bouton carré pour icône',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    color: 'primary',
    variant: 'filled',
    size: 'md',
    isLoading: false,
    asIcon: false,
    default: 'Mon Bouton',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'primary',
    variant: 'filled',
    size: 'md',
    default: 'Bouton Principal',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Le bouton principal avec un style bleu rempli. Utilisé pour les actions principales.',
      },
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template:
      '<Button :color="args.color" :variant="args.variant" :size="args.size">{{ args.default }}</Button>',
  }),
}

export const Secondary: Story = {
  args: {
    color: 'secondary',
    variant: 'filled',
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
      '<Button :color="args.color" :variant="args.variant" :size="args.size">{{ args.default }}</Button>',
  }),
}

export const Danger: Story = {
  args: {
    color: 'danger',
    variant: 'filled',
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
      '<Button :color="args.color" :variant="args.variant" :size="args.size">{{ args.default }}</Button>',
  }),
}

export const AllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Toutes les variantes de style (filled, outline, ghost) pour chaque couleur.',
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <h4 style="margin-bottom: 1rem; font-weight: 600;">Primary</h4>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <Button color="primary" variant="filled">Filled</Button>
            <Button color="primary" variant="outline">Outline</Button>
            <Button color="primary" variant="ghost">Ghost</Button>
          </div>
        </div>
        <div>
          <h4 style="margin-bottom: 1rem; font-weight: 600;">Secondary</h4>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <Button color="secondary" variant="filled">Filled</Button>
            <Button color="secondary" variant="outline">Outline</Button>
            <Button color="secondary" variant="ghost">Ghost</Button>
          </div>
        </div>
        <div>
          <h4 style="margin-bottom: 1rem; font-weight: 600;">Danger</h4>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <Button color="danger" variant="filled">Filled</Button>
            <Button color="danger" variant="outline">Outline</Button>
            <Button color="danger" variant="ghost">Ghost</Button>
          </div>
        </div>
      </div>
    `,
  }),
}

export const AllSizes: Story = {
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
        <Button color="primary" variant="filled" size="xs">XS</Button>
        <Button color="primary" variant="filled" size="sm">SM</Button>
        <Button color="primary" variant="filled" size="md">MD</Button>
        <Button color="primary" variant="filled" size="lg">LG</Button>
        <Button color="primary" variant="filled" size="xl">XL</Button>
      </div>
    `,
  }),
}

export const LoadingStates: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Boutons dans différents états de chargement.',
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
        <Button color="primary" variant="filled" :isLoading="true">Loading...</Button>
        <Button color="secondary" variant="outline" :isLoading="true">Loading...</Button>
        <Button color="danger" variant="ghost" :isLoading="true">Loading...</Button>
      </div>
    `,
  }),
}

export const IconButtons: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Boutons carrés pour icônes dans différentes tailles et variantes.',
      },
    },
  },
  render: () => ({
    components: { Button, Plus },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <h4 style="margin-bottom: 1rem; font-weight: 600;">Sizes</h4>
          <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
            <Button color="primary" variant="filled" size="xs" :asIcon="true"><Plus /></Button>
            <Button color="primary" variant="filled" size="sm" :asIcon="true"><Plus /></Button>
            <Button color="primary" variant="filled" size="md" :asIcon="true"><Plus /></Button>
            <Button color="primary" variant="filled" size="lg" :asIcon="true"><Plus /></Button>
            <Button color="primary" variant="filled" size="xl" :asIcon="true"><Plus /></Button>
          </div>
        </div>
        <div>
          <h4 style="margin-bottom: 1rem; font-weight: 600;">Variants</h4>
          <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
            <Button color="primary" variant="filled" :asIcon="true"><Plus /></Button>
            <Button color="primary" variant="outline" :asIcon="true"><Plus /></Button>
            <Button color="primary" variant="ghost" :asIcon="true"><Plus /></Button>
          </div>
        </div>
      </div>
    `,
  }),
}

export const CompleteMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Matrice complète montrant TOUTES les combinaisons possibles de couleurs, variantes, tailles et états.',
      },
    },
  },
  render: () => ({
    components: { Button, Plus },
    template: `
      <div style="display: flex; flex-direction: column; gap: 3rem;">
        <!-- Regular Buttons Matrix -->
        <div>
          <h3 style="margin-bottom: 1.5rem; font-weight: 700; font-size: 1.25rem;">Regular Buttons</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
            <!-- Primary -->
            <div>
              <h4 style="margin-bottom: 1rem; font-weight: 600; color: #3b82f6;">Primary</h4>
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div>
                  <h5 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">Filled</h5>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <Button color="primary" variant="filled" size="xs">XS</Button>
                    <Button color="primary" variant="filled" size="sm">SM</Button>
                    <Button color="primary" variant="filled" size="md">MD</Button>
                    <Button color="primary" variant="filled" size="lg">LG</Button>
                    <Button color="primary" variant="filled" size="xl">XL</Button>
                  </div>
                </div>
                <div>
                  <h5 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">Outline</h5>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <Button color="primary" variant="outline" size="xs">XS</Button>
                    <Button color="primary" variant="outline" size="sm">SM</Button>
                    <Button color="primary" variant="outline" size="md">MD</Button>
                    <Button color="primary" variant="outline" size="lg">LG</Button>
                    <Button color="primary" variant="outline" size="xl">XL</Button>
                  </div>
                </div>
                <div>
                  <h5 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">Ghost</h5>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <Button color="primary" variant="ghost" size="xs">XS</Button>
                    <Button color="primary" variant="ghost" size="sm">SM</Button>
                    <Button color="primary" variant="ghost" size="md">MD</Button>
                    <Button color="primary" variant="ghost" size="lg">LG</Button>
                    <Button color="primary" variant="ghost" size="xl">XL</Button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Secondary -->
            <div>
              <h4 style="margin-bottom: 1rem; font-weight: 600; color: #6b7280;">Secondary</h4>
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div>
                  <h5 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">Filled</h5>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <Button color="secondary" variant="filled" size="xs">XS</Button>
                    <Button color="secondary" variant="filled" size="sm">SM</Button>
                    <Button color="secondary" variant="filled" size="md">MD</Button>
                    <Button color="secondary" variant="filled" size="lg">LG</Button>
                    <Button color="secondary" variant="filled" size="xl">XL</Button>
                  </div>
                </div>
                <div>
                  <h5 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">Outline</h5>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <Button color="secondary" variant="outline" size="xs">XS</Button>
                    <Button color="secondary" variant="outline" size="sm">SM</Button>
                    <Button color="secondary" variant="outline" size="md">MD</Button>
                    <Button color="secondary" variant="outline" size="lg">LG</Button>
                    <Button color="secondary" variant="outline" size="xl">XL</Button>
                  </div>
                </div>
                <div>
                  <h5 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">Ghost</h5>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <Button color="secondary" variant="ghost" size="xs">XS</Button>
                    <Button color="secondary" variant="ghost" size="sm">SM</Button>
                    <Button color="secondary" variant="ghost" size="md">MD</Button>
                    <Button color="secondary" variant="ghost" size="lg">LG</Button>
                    <Button color="secondary" variant="ghost" size="xl">XL</Button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Danger -->
            <div>
              <h4 style="margin-bottom: 1rem; font-weight: 600; color: #ef4444;">Danger</h4>
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div>
                  <h5 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">Filled</h5>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <Button color="danger" variant="filled" size="xs">XS</Button>
                    <Button color="danger" variant="filled" size="sm">SM</Button>
                    <Button color="danger" variant="filled" size="md">MD</Button>
                    <Button color="danger" variant="filled" size="lg">LG</Button>
                    <Button color="danger" variant="filled" size="xl">XL</Button>
                  </div>
                </div>
                <div>
                  <h5 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">Outline</h5>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <Button color="danger" variant="outline" size="xs">XS</Button>
                    <Button color="danger" variant="outline" size="sm">SM</Button>
                    <Button color="danger" variant="outline" size="md">MD</Button>
                    <Button color="danger" variant="outline" size="lg">LG</Button>
                    <Button color="danger" variant="outline" size="xl">XL</Button>
                  </div>
                </div>
                <div>
                  <h5 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">Ghost</h5>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <Button color="danger" variant="ghost" size="xs">XS</Button>
                    <Button color="danger" variant="ghost" size="sm">SM</Button>
                    <Button color="danger" variant="ghost" size="md">MD</Button>
                    <Button color="danger" variant="ghost" size="lg">LG</Button>
                    <Button color="danger" variant="ghost" size="xl">XL</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Icon Buttons Matrix -->
        <div>
          <h3 style="margin-bottom: 1.5rem; font-weight: 700; font-size: 1.25rem;">Icon Buttons (asIcon=true)</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
            <!-- Primary Icons -->
            <div>
              <h4 style="margin-bottom: 1rem; font-weight: 600; color: #3b82f6;">Primary Icons</h4>
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div>
                  <h5 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">Filled</h5>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <Button color="primary" variant="filled" size="xs" :asIcon="true"><Plus /></Button>
                    <Button color="primary" variant="filled" size="sm" :asIcon="true"><Plus /></Button>
                    <Button color="primary" variant="filled" size="md" :asIcon="true"><Plus /></Button>
                    <Button color="primary" variant="filled" size="lg" :asIcon="true"><Plus /></Button>
                    <Button color="primary" variant="filled" size="xl" :asIcon="true"><Plus /></Button>
                  </div>
                </div>
                <div>
                  <h5 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">Outline</h5>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <Button color="primary" variant="outline" size="xs" :asIcon="true"><Plus /></Button>
                    <Button color="primary" variant="outline" size="sm" :asIcon="true"><Plus /></Button>
                    <Button color="primary" variant="outline" size="md" :asIcon="true"><Plus /></Button>
                    <Button color="primary" variant="outline" size="lg" :asIcon="true"><Plus /></Button>
                    <Button color="primary" variant="outline" size="xl" :asIcon="true"><Plus /></Button>
                  </div>
                </div>
                <div>
                  <h5 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">Ghost</h5>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <Button color="primary" variant="ghost" size="xs" :asIcon="true"><Plus /></Button>
                    <Button color="primary" variant="ghost" size="sm" :asIcon="true"><Plus /></Button>
                    <Button color="primary" variant="ghost" size="md" :asIcon="true"><Plus /></Button>
                    <Button color="primary" variant="ghost" size="lg" :asIcon="true"><Plus /></Button>
                    <Button color="primary" variant="ghost" size="xl" :asIcon="true"><Plus /></Button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Secondary Icons -->
            <div>
              <h4 style="margin-bottom: 1rem; font-weight: 600; color: #6b7280;">Secondary Icons</h4>
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div>
                  <h5 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">Filled</h5>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <Button color="secondary" variant="filled" size="xs" :asIcon="true"><Plus /></Button>
                    <Button color="secondary" variant="filled" size="sm" :asIcon="true"><Plus /></Button>
                    <Button color="secondary" variant="filled" size="md" :asIcon="true"><Plus /></Button>
                    <Button color="secondary" variant="filled" size="lg" :asIcon="true"><Plus /></Button>
                    <Button color="secondary" variant="filled" size="xl" :asIcon="true"><Plus /></Button>
                  </div>
                </div>
                <div>
                  <h5 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">Outline</h5>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <Button color="secondary" variant="outline" size="xs" :asIcon="true"><Plus /></Button>
                    <Button color="secondary" variant="outline" size="sm" :asIcon="true"><Plus /></Button>
                    <Button color="secondary" variant="outline" size="md" :asIcon="true"><Plus /></Button>
                    <Button color="secondary" variant="outline" size="lg" :asIcon="true"><Plus /></Button>
                    <Button color="secondary" variant="outline" size="xl" :asIcon="true"><Plus /></Button>
                  </div>
                </div>
                <div>
                  <h5 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">Ghost</h5>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <Button color="secondary" variant="ghost" size="xs" :asIcon="true"><Plus /></Button>
                    <Button color="secondary" variant="ghost" size="sm" :asIcon="true"><Plus /></Button>
                    <Button color="secondary" variant="ghost" size="md" :asIcon="true"><Plus /></Button>
                    <Button color="secondary" variant="ghost" size="lg" :asIcon="true"><Plus /></Button>
                    <Button color="secondary" variant="ghost" size="xl" :asIcon="true"><Plus /></Button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Danger Icons -->
            <div>
              <h4 style="margin-bottom: 1rem; font-weight: 600; color: #ef4444;">Danger Icons</h4>
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div>
                  <h5 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">Filled</h5>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <Button color="danger" variant="filled" size="xs" :asIcon="true"><Plus /></Button>
                    <Button color="danger" variant="filled" size="sm" :asIcon="true"><Plus /></Button>
                    <Button color="danger" variant="filled" size="md" :asIcon="true"><Plus /></Button>
                    <Button color="danger" variant="filled" size="lg" :asIcon="true"><Plus /></Button>
                    <Button color="danger" variant="filled" size="xl" :asIcon="true"><Plus /></Button>
                  </div>
                </div>
                <div>
                  <h5 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">Outline</h5>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <Button color="danger" variant="outline" size="xs" :asIcon="true"><Plus /></Button>
                    <Button color="danger" variant="outline" size="sm" :asIcon="true"><Plus /></Button>
                    <Button color="danger" variant="outline" size="md" :asIcon="true"><Plus /></Button>
                    <Button color="danger" variant="outline" size="lg" :asIcon="true"><Plus /></Button>
                    <Button color="danger" variant="outline" size="xl" :asIcon="true"><Plus /></Button>
                  </div>
                </div>
                <div>
                  <h5 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">Ghost</h5>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <Button color="danger" variant="ghost" size="xs" :asIcon="true"><Plus /></Button>
                    <Button color="danger" variant="ghost" size="sm" :asIcon="true"><Plus /></Button>
                    <Button color="danger" variant="ghost" size="md" :asIcon="true"><Plus /></Button>
                    <Button color="danger" variant="ghost" size="lg" :asIcon="true"><Plus /></Button>
                    <Button color="danger" variant="ghost" size="xl" :asIcon="true"><Plus /></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Loading States -->
        <div>
          <h3 style="margin-bottom: 1.5rem; font-weight: 700; font-size: 1.25rem;">Loading States</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <Button color="primary" variant="filled" :isLoading="true">Loading Filled</Button>
            <Button color="primary" variant="outline" :isLoading="true">Loading Outline</Button>
            <Button color="primary" variant="ghost" :isLoading="true">Loading Ghost</Button>
            <Button color="secondary" variant="filled" :isLoading="true">Loading Secondary</Button>
            <Button color="danger" variant="filled" :isLoading="true">Loading Danger</Button>
            <Button color="primary" variant="filled" :isLoading="true" :asIcon="true"><Plus /></Button>
          </div>
        </div>
      </div>
    `,
  }),
}
