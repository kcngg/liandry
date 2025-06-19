import { Plus } from 'lucide-vue-next'
import Stack from '@/components/layout/Stack.vue'
import Grid from '@/components/layout/Grid.vue'
import Section from '@/components/layout/Section.vue'
import Container from '@/components/layout/Container.vue'
import Button from '@/components/button/Button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta: Meta<any> = {
  title: 'Layout/Components',
  parameters: {
    docs: {
      description: {
        component: 'Composants de layout pour organiser et structurer le contenu.',
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
        story: 'Le composant Stack pour organiser les éléments en ligne ou en colonne avec flexbox.',
      },
    },
  },
  render: () => ({
    components: { Stack, Button, Section },
    template: `
      <Stack gap="3rem">
        <Section title="Direction Column (défaut)" :level="3">
          <Stack gap="1rem">
            <Button color="primary">Premier</Button>
            <Button color="secondary">Deuxième</Button>
            <Button color="danger">Troisième</Button>
          </Stack>
        </Section>

        <Section title="Direction Row" :level="3">
          <Stack direction="row" gap="1rem">
            <Button color="primary">Premier</Button>
            <Button color="secondary">Deuxième</Button>
            <Button color="danger">Troisième</Button>
          </Stack>
        </Section>

        <Section title="Avec Wrap" :level="3">
          <Stack direction="row" gap="1rem" :wrap="true">
            <Button color="primary">Un</Button>
            <Button color="primary">Deux</Button>
            <Button color="primary">Trois</Button>
            <Button color="primary">Quatre</Button>
            <Button color="primary">Cinq</Button>
            <Button color="primary">Six</Button>
            <Button color="primary">Sept</Button>
            <Button color="primary">Huit</Button>
          </Stack>
        </Section>

        <Section title="Alignement Center" :level="3">
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
        story: 'Le composant Grid pour créer des layouts en grille avec CSS Grid.',
      },
    },
  },
  render: () => ({
    components: { Grid, Button, Section, Stack },
    template: `
      <Stack gap="3rem">
        <Section title="Grille 3 colonnes" :level="3">
          <Grid :columns="3" gap="1rem">
            <Button color="primary">1</Button>
            <Button color="secondary">2</Button>
            <Button color="danger">3</Button>
            <Button color="primary">4</Button>
            <Button color="secondary">5</Button>
            <Button color="danger">6</Button>
          </Grid>
        </Section>

        <Section title="Grille responsive" :level="3">
          <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
            <Button color="primary">Responsive 1</Button>
            <Button color="secondary">Responsive 2</Button>
            <Button color="danger">Responsive 3</Button>
            <Button color="primary">Responsive 4</Button>
          </Grid>
        </Section>

        <Section title="Grille avec gaps différents" :level="3">
          <Grid :columns="2" column-gap="2rem" row-gap="0.5rem">
            <Button color="primary">Gap Col 2rem</Button>
            <Button color="secondary">Gap Row 0.5rem</Button>
            <Button color="danger">Gap Col 2rem</Button>
            <Button color="primary">Gap Row 0.5rem</Button>
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
        story: 'Le composant Section pour organiser le contenu avec des titres hiérarchiques.',
      },
    },
  },
  render: () => ({
    components: { Section, Button, Stack },
    template: `
      <Stack gap="2rem">
        <Section title="Titre H1" :level="1" subtitle="Sous-titre optionnel">
          <p>Contenu de la section avec un titre H1.</p>
        </Section>

        <Section title="Titre H2" :level="2">
          <Stack direction="row" gap="1rem">
            <Button color="primary">Action 1</Button>
            <Button color="secondary">Action 2</Button>
          </Stack>
        </Section>

        <Section title="Titre H3" :level="3" subtitle="Avec sous-titre">
          <p>Section avec titre H3 et sous-titre.</p>
        </Section>

        <Section title="Titre H4" :level="4">
          <p>Section avec titre H4.</p>
        </Section>

        <Section title="Titre H5" :level="5">
          <p>Section avec titre H5.</p>
        </Section>

        <Section title="Titre H6" :level="6">
          <p>Section avec titre H6.</p>
        </Section>

        <Section title="Espacement personnalisé" :level="3" spacing="2rem">
          <p>Cette section a un espacement de 2rem entre le titre et le contenu.</p>
        </Section>
      </Stack>
    `,
  }),
}

export const ContainerExamples: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Le composant Container pour limiter la largeur du contenu et le centrer.',
      },
    },
  },
  render: () => ({
    components: { Container, Section, Stack, Button },
    template: `
      <Stack gap="3rem">
        <Section title="Container XS (480px)" :level="3">
          <Container size="xs" style="background: #f3f4f6; border: 1px dashed #d1d5db;">
            <Stack direction="row" gap="1rem" justify="center">
              <Button color="primary">Contenu XS</Button>
            </Stack>
          </Container>
        </Section>

        <Section title="Container MD (768px)" :level="3">
          <Container size="md" style="background: #f3f4f6; border: 1px dashed #d1d5db;">
            <Stack direction="row" gap="1rem" justify="center">
              <Button color="secondary">Contenu MD</Button>
            </Stack>
          </Container>
        </Section>

        <Section title="Container LG (1024px) - Défaut" :level="3">
          <Container style="background: #f3f4f6; border: 1px dashed #d1d5db;">
            <Stack direction="row" gap="1rem" justify="center">
              <Button color="danger">Contenu LG</Button>
            </Stack>
          </Container>
        </Section>

        <Section title="Container XL (1280px)" :level="3">
          <Container size="xl" style="background: #f3f4f6; border: 1px dashed #d1d5db;">
            <Stack direction="row" gap="1rem" justify="center">
              <Button color="primary">Contenu XL</Button>
            </Stack>
          </Container>
        </Section>

        <Section title="Container sans centrage" :level="3">
          <Container :center="false" style="background: #f3f4f6; border: 1px dashed #d1d5db;">
            <Button color="secondary">Non centré</Button>
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
        story: 'Exemple combinant tous les composants layout pour créer une interface complète.',
      },
    },
  },
  render: () => ({
    components: { Container, Section, Stack, Grid, Button },
    template: `
      <Container size="xl">
        <Stack gap="4rem">
          <Section title="Interface Complète" :level="1" subtitle="Démonstration des composants layout combinés">
            <p>Cet exemple montre comment combiner tous les composants layout pour créer une interface cohérente.</p>
          </Section>

          <Section title="Actions Principales" :level="2">
            <Stack direction="row" gap="1rem" :wrap="true">
              <Button color="primary" size="lg">Action Principale</Button>
              <Button color="secondary" variant="outline" size="lg">Action Secondaire</Button>
              <Button color="danger" variant="ghost" size="lg">Supprimer</Button>
            </Stack>
          </Section>

          <Section title="Grille de Cartes" :level="2">
            <Grid columns="repeat(auto-fit, minmax(250px, 1fr))" gap="1.5rem">
              <div style="padding: 1.5rem; border: 1px solid #e5e7eb; border-radius: 8px;">
                <Stack gap="1rem">
                  <h4 style="margin: 0; font-weight: 600;">Carte 1</h4>
                  <p style="margin: 0; color: #6b7280;">Description de la première carte.</p>
                  <Button color="primary" size="sm">Voir plus</Button>
                </Stack>
              </div>
              
              <div style="padding: 1.5rem; border: 1px solid #e5e7eb; border-radius: 8px;">
                <Stack gap="1rem">
                  <h4 style="margin: 0; font-weight: 600;">Carte 2</h4>
                  <p style="margin: 0; color: #6b7280;">Description de la deuxième carte.</p>
                  <Button color="secondary" size="sm">Voir plus</Button>
                </Stack>
              </div>
              
              <div style="padding: 1.5rem; border: 1px solid #e5e7eb; border-radius: 8px;">
                <Stack gap="1rem">
                  <h4 style="margin: 0; font-weight: 600;">Carte 3</h4>
                  <p style="margin: 0; color: #6b7280;">Description de la troisième carte.</p>
                  <Button color="danger" size="sm">Voir plus</Button>
                </Stack>
              </div>
            </Grid>
          </Section>

          <Section title="Footer" :level="3">
            <Stack direction="row" gap="2rem" justify="between" align="center" :wrap="true">
              <Stack direction="row" gap="1rem">
                <Button variant="ghost" size="sm">À propos</Button>
                <Button variant="ghost" size="sm">Contact</Button>
                <Button variant="ghost" size="sm">Aide</Button>
              </Stack>
              <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">© 2024 Liandry UI</p>
            </Stack>
          </Section>
        </Stack>
      </Container>
    `,
  }),
} 