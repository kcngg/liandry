import { Button } from '@/components/button'
import DialogFooter from '@/components/dialog/DialogFooter.vue'
import Stack from '@/components/layout/Stack.vue'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from './index'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Components/Dialog',
  parameters: {
    docs: {
      description: {
        component:
          'A set of dialog components built on reka-ui that provide styled, accessible modal dialogs. Each component can be composed together to create custom dialogs.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Basic dialog composition with all essential parts.',
      },
    },
  },
  render: () => ({
    components: {
      DialogRoot,
      DialogTrigger,
      DialogPortal,
      DialogOverlay,
      DialogContent,
      DialogTitle,
      DialogFooter,
      DialogDescription,
      DialogClose,
      Button,
      Stack,
    },
    template: `
      <DialogRoot>
        <DialogTrigger as-child>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent>
            <Stack gap="4">
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>
                This is a description of the dialog. It provides additional context or information.
              </DialogDescription>
              <DialogFooter>
                <DialogClose>
                  Close
                </DialogClose>
              </DialogFooter>
            </Stack>
          </DialogContent>
        </DialogPortal>
      </DialogRoot>
    `,
  }),
}
