import Button from '@/components/button/Button.vue'
import Container from '@/components/layout/Container.vue'
import Grid from '@/components/layout/Grid.vue'
import Section from '@/components/layout/Section.vue'
import Stack from '@/components/layout/Stack.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta: Meta<any> = {
  title: 'Layout/Components',
  parameters: {
    docs: {
      description: {
        component: 'Layout components for organizing and structuring content.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const StackExamples: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Stack component for organizing elements in rows or columns using flexbox.',
      },
    },
  },
  render: () => ({
    components: { Stack, Button, Section },
    template: `
      <Stack gap="3rem">
        <Section title="Column Direction (default)" :level="3">
          <Stack gap="1rem">
            <Button color="primary">First</Button>
            <Button color="secondary">Second</Button>
            <Button color="danger">Third</Button>
          </Stack>
        </Section>

        <Section title="Row Direction" :level="3">
          <Stack direction="row" gap="1rem">
            <Button color="primary">First</Button>
            <Button color="secondary">Second</Button>
            <Button color="danger">Third</Button>
          </Stack>
        </Section>

        <Section title="With Wrap" :level="3">
          <Stack direction="row" gap="1rem" :wrap="true">
            <Button color="primary">One</Button>
            <Button color="primary">Two</Button>
            <Button color="primary">Three</Button>
            <Button color="primary">Four</Button>
            <Button color="primary">Five</Button>
            <Button color="primary">Six</Button>
            <Button color="primary">Seven</Button>
            <Button color="primary">Eight</Button>
          </Stack>
        </Section>

        <Section title="Center Alignment" :level="3">
          <Stack direction="row" gap="1rem" align="center" justify="center">
            <Button color="primary" size="xs">XS</Button>
            <Button color="primary" size="md">MD</Button>
            <Button color="primary" size="xl">XL</Button>
          </Stack>
        </Section>
      </Stack>
    `,
  }),
}

export const GridExamples: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Grid component for creating grid layouts using CSS Grid.',
      },
    },
  },
  render: () => ({
    components: { Grid, Button, Section, Stack },
    template: `
      <Stack gap="3rem">
        <Section title="3 Column Grid" :level="3">
          <Grid :columns="3" gap="1rem">
            <Button color="primary">1</Button>
            <Button color="secondary">2</Button>
            <Button color="danger">3</Button>
            <Button color="primary">4</Button>
            <Button color="secondary">5</Button>
            <Button color="danger">6</Button>
          </Grid>
        </Section>

        <Section title="Responsive Grid" :level="3">
          <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
            <Button color="primary">Responsive 1</Button>
            <Button color="secondary">Responsive 2</Button>
            <Button color="danger">Responsive 3</Button>
            <Button color="primary">Responsive 4</Button>
          </Grid>
        </Section>

        <Section title="Grid with Different Gaps" :level="3">
          <Grid :columns="2" column-gap="2rem" row-gap="0.5rem">
            <Button color="primary">Col Gap 2rem</Button>
            <Button color="secondary">Row Gap 0.5rem</Button>
            <Button color="danger">Col Gap 2rem</Button>
            <Button color="primary">Row Gap 0.5rem</Button>
          </Grid>
        </Section>
      </Stack>
    `,
  }),
}

export const SectionExamples: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Section component for organizing content with hierarchical titles.',
      },
    },
  },
  render: () => ({
    components: { Section, Button, Stack },
    template: `
      <Stack gap="2rem">
        <Section title="H1 Title" :level="1" subtitle="Optional subtitle">
          <p>Section content with an H1 title.</p>
        </Section>

        <Section title="H2 Title" :level="2">
          <Stack direction="row" gap="1rem">
            <Button color="primary">Action 1</Button>
            <Button color="secondary">Action 2</Button>
          </Stack>
        </Section>

        <Section title="H3 Title" :level="3" subtitle="With subtitle">
          <p>Section with H3 title and subtitle.</p>
        </Section>

        <Section title="H4 Title" :level="4">
          <p>Section with H4 title.</p>
        </Section>

        <Section title="H5 Title" :level="5">
          <p>Section with H5 title.</p>
        </Section>

        <Section title="H6 Title" :level="6">
          <p>Section with H6 title.</p>
        </Section>

        <Section title="Custom Spacing" :level="3" spacing="2rem">
          <p>This section has 2rem spacing between title and content.</p>
        </Section>
      </Stack>
    `,
  }),
}

export const ContainerExamples: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Container component for limiting content width and centering.',
      },
    },
  },
  render: () => ({
    components: { Container, Section, Stack, Button },
    template: `
      <Stack gap="3rem">
        <Section title="Container XS (480px)" :level="3">
          <Container size="xs" class="bg-white/5 border border-white/10 rounded-lg p-4">
            <Stack direction="row" gap="1rem" justify="center">
              <Button color="primary">XS Content</Button>
            </Stack>
          </Container>
        </Section>

        <Section title="Container MD (768px)" :level="3">
          <Container size="md" class="bg-white/5 border border-white/10 rounded-lg p-4">
            <Stack direction="row" gap="1rem" justify="center">
              <Button color="secondary">MD Content</Button>
            </Stack>
          </Container>
        </Section>

        <Section title="Container LG (1024px) - Default" :level="3">
          <Container class="bg-white/5 border border-white/10 rounded-lg p-4">
            <Stack direction="row" gap="1rem" justify="center">
              <Button color="danger">LG Content</Button>
            </Stack>
          </Container>
        </Section>

        <Section title="Container XL (1280px)" :level="3">
          <Container size="xl" class="bg-white/5 border border-white/10 rounded-lg p-4">
            <Stack direction="row" gap="1rem" justify="center">
              <Button color="primary">XL Content</Button>
            </Stack>
          </Container>
        </Section>

        <Section title="Container without centering" :level="3">
          <Container :center="false" class="bg-white/5 border border-white/10 rounded-lg p-4">
            <Button color="secondary">Not centered</Button>
          </Container>
        </Section>
      </Stack>
    `,
  }),
}

export const CombinedLayout: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Example combining all layout components to create a complete interface.',
      },
    },
  },
  render: () => ({
    components: { Container, Section, Stack, Grid, Button },
    template: `
      <Container size="xl">
        <Stack gap="4rem">
          <Section title="Complete Interface" :level="1" subtitle="Demonstration of combined layout components">
            <p>This example shows how to combine all layout components to create a cohesive interface.</p>
          </Section>

          <Section title="Primary Actions" :level="2">
            <Stack direction="row" gap="1rem" :wrap="true">
              <Button color="primary" size="lg">Primary Action</Button>
              <Button color="secondary" variant="outline" size="lg">Secondary Action</Button>
              <Button color="danger" variant="ghost" size="lg">Delete</Button>
            </Stack>
          </Section>

          <Section title="Card Grid" :level="2">
            <Grid columns="repeat(auto-fit, minmax(280px, 1fr))" gap="1.5rem">
              <div class="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <Stack gap="1rem">
                  <h4 class="m-0 font-semibold text-lg">Card 1</h4>
                  <p class="m-0 text-white/70 text-sm leading-relaxed">Description of the first card with some additional content to show text wrapping.</p>
                  <Button color="primary" size="sm">Learn More</Button>
                </Stack>
              </div>
              
              <div class="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <Stack gap="1rem">
                  <h4 class="m-0 font-semibold text-lg">Card 2</h4>
                  <p class="m-0 text-white/70 text-sm leading-relaxed">Description of the second card with some additional content to show text wrapping.</p>
                  <Button color="secondary" size="sm">Learn More</Button>
                </Stack>
              </div>
              
              <div class="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <Stack gap="1rem">
                  <h4 class="m-0 font-semibold text-lg">Card 3</h4>
                  <p class="m-0 text-white/70 text-sm leading-relaxed">Description of the third card with some additional content to show text wrapping.</p>
                  <Button color="danger" size="sm">Learn More</Button>
                </Stack>
              </div>

              <div class="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <Stack gap="1rem">
                  <h4 class="m-0 font-semibold text-lg">Card 4</h4>
                  <p class="m-0 text-white/70 text-sm leading-relaxed">Description of the fourth card with some additional content to show text wrapping.</p>
                  <Button color="primary" variant="outline" size="sm">Learn More</Button>
                </Stack>
              </div>
            </Grid>
          </Section>

          <Section title="Footer" :level="3">
            <div class="bg-white/5 border border-white/10 rounded-lg p-6">
              <Stack direction="row" gap="2rem" justify="between" align="center" :wrap="true">
                <Stack direction="row" gap="1rem">
                  <Button variant="ghost" size="sm">About</Button>
                  <Button variant="ghost" size="sm">Contact</Button>
                  <Button variant="ghost" size="sm">Help</Button>
                </Stack>
                <p class="m-0 text-white/60 text-sm">© 2024 Liandry UI</p>
              </Stack>
            </div>
          </Section>
        </Stack>
      </Container>
    `,
  }),
}
