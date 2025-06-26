import Button from '@/components/button/Button.vue'
import Stack from '@/components/layout/Stack.vue'
import Section from '@/components/layout/Section.vue'
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
      DialogDescription,
      DialogClose,
      Button,
      Stack,
    },
    template: `
      <DialogRoot>
        <DialogTrigger as-child>
          <Button color="primary">Open Dialog</Button>
        </DialogTrigger>
        
        <DialogPortal>
          <DialogOverlay />
          <DialogContent>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
            
            <div class="grid gap-4 py-4">
              <div class="grid grid-cols-4 items-center gap-4">
                <label for="name" class="text-right text-sm font-medium">Name</label>
                <input
                  id="name"
                  class="col-span-3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <label for="email" class="text-right text-sm font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  class="col-span-3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <Stack direction="row" gap="0.5rem" justify="end" class="mt-6">
              <DialogClose as-child>
                <Button color="secondary" variant="outline">Cancel</Button>
              </DialogClose>
              <Button color="primary">Save Changes</Button>
            </Stack>
            
            <DialogClose class="absolute right-4 top-4" />
          </DialogContent>
        </DialogPortal>
      </DialogRoot>
    `,
  }),
}

export const ConfirmationDialog: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A confirmation dialog for destructive actions.',
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
      DialogDescription,
      DialogClose,
      Button,
      Stack,
    },
    template: `
      <DialogRoot>
        <DialogTrigger as-child>
          <Button color="danger">Delete Account</Button>
        </DialogTrigger>
        
        <DialogPortal>
          <DialogOverlay />
          <DialogContent class="max-w-md">
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </DialogDescription>
            
            <Stack direction="row" gap="0.5rem" justify="end" class="mt-6">
              <DialogClose as-child>
                <Button color="secondary" variant="outline">Cancel</Button>
              </DialogClose>
              <DialogClose as-child>
                <Button color="danger">Yes, delete account</Button>
              </DialogClose>
            </Stack>
          </DialogContent>
        </DialogPortal>
      </DialogRoot>
    `,
  }),
}

export const AlertDialog: Story = {
  parameters: {
    docs: {
      description: {
        story: 'An alert dialog to display important information.',
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
      DialogDescription,
      DialogClose,
      Button,
      Stack,
    },
    template: `
      <DialogRoot>
        <DialogTrigger as-child>
          <Button color="primary" variant="outline">Show Alert</Button>
        </DialogTrigger>
        
        <DialogPortal>
          <DialogOverlay />
          <DialogContent class="max-w-sm">
            <DialogTitle>Update Available</DialogTitle>
            <DialogDescription>
              A new version of the application is available. Would you like to update now?
            </DialogDescription>
            
            <Stack direction="row" gap="0.5rem" justify="end" class="mt-6">
              <DialogClose as-child>
                <Button color="secondary" variant="ghost">Later</Button>
              </DialogClose>
              <DialogClose as-child>
                <Button color="primary">Update Now</Button>
              </DialogClose>
            </Stack>
          </DialogContent>
        </DialogPortal>
      </DialogRoot>
    `,
  }),
}

export const FormDialog: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A more complex form dialog with multiple input fields.',
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
      DialogDescription,
      DialogClose,
      Button,
      Stack,
    },
    template: `
      <DialogRoot>
        <DialogTrigger as-child>
          <Button color="primary">Add New User</Button>
        </DialogTrigger>
        
        <DialogPortal>
          <DialogOverlay />
          <DialogContent class="max-w-lg">
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              Fill in the information below to create a new user account.
            </DialogDescription>
            
            <Stack gap="1rem" class="py-4">
              <Stack gap="0.5rem">
                <label for="firstName" class="text-sm font-medium">First Name</label>
                <input
                  id="firstName"
                  class="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter first name"
                />
              </Stack>
              
              <Stack gap="0.5rem">
                <label for="lastName" class="text-sm font-medium">Last Name</label>
                <input
                  id="lastName"
                  class="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter last name"
                />
              </Stack>
              
              <Stack gap="0.5rem">
                <label for="userEmail" class="text-sm font-medium">Email</label>
                <input
                  id="userEmail"
                  type="email"
                  class="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter email address"
                />
              </Stack>
              
              <Stack gap="0.5rem">
                <label for="role" class="text-sm font-medium">Role</label>
                <select
                  id="role"
                  class="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a role</option>
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                  <option value="viewer">Viewer</option>
                </select>
              </Stack>
            </Stack>
            
            <Stack direction="row" gap="0.5rem" justify="end" class="mt-6">
              <DialogClose as-child>
                <Button color="secondary" variant="outline">Cancel</Button>
              </DialogClose>
              <Button color="primary">Create User</Button>
            </Stack>
            
            <DialogClose class="absolute right-4 top-4" />
          </DialogContent>
        </DialogPortal>
      </DialogRoot>
    `,
  }),
}

export const MultipleDialogs: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Multiple dialog triggers showing different dialog types.',
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
      DialogDescription,
      DialogClose,
      Button,
      Stack,
      Section,
    },
    template: `
      <Section title="Dialog Examples" :level="3">
        <Stack gap="1rem">
          <!-- Basic Dialog -->
          <DialogRoot>
            <DialogTrigger as-child>
              <Button color="primary" variant="outline">Basic Dialog</Button>
            </DialogTrigger>
            
            <DialogPortal>
              <DialogOverlay />
              <DialogContent>
                <DialogTitle>Basic Dialog</DialogTitle>
                <DialogDescription>
                  This is a basic dialog with minimal content.
                </DialogDescription>
                
                <Stack direction="row" gap="0.5rem" justify="end" class="mt-6">
                  <DialogClose as-child>
                    <Button color="primary">OK</Button>
                  </DialogClose>
                </Stack>
              </DialogContent>
            </DialogPortal>
          </DialogRoot>
          
          <!-- Confirmation Dialog -->
          <DialogRoot>
            <DialogTrigger as-child>
              <Button color="danger" variant="outline">Dangerous Action</Button>
            </DialogTrigger>
            
            <DialogPortal>
              <DialogOverlay />
              <DialogContent class="max-w-md">
                <DialogTitle>Confirm Action</DialogTitle>
                <DialogDescription>
                  Are you sure you want to proceed? This action cannot be undone.
                </DialogDescription>
                
                <Stack direction="row" gap="0.5rem" justify="end" class="mt-6">
                  <DialogClose as-child>
                    <Button color="secondary" variant="outline">Cancel</Button>
                  </DialogClose>
                  <DialogClose as-child>
                    <Button color="danger">Confirm</Button>
                  </DialogClose>
                </Stack>
              </DialogContent>
            </DialogPortal>
          </DialogRoot>
          
          <!-- Info Dialog -->
          <DialogRoot>
            <DialogTrigger as-child>
              <Button color="secondary" variant="outline">Show Info</Button>
            </DialogTrigger>
            
            <DialogPortal>
              <DialogOverlay />
              <DialogContent class="max-w-md">
                <DialogTitle>Information</DialogTitle>
                <DialogDescription>
                  Here's some helpful information about this feature. You can close this dialog when you're done reading.
                </DialogDescription>
                
                <Stack direction="row" gap="0.5rem" justify="end" class="mt-6">
                  <DialogClose as-child>
                    <Button color="primary">Got it</Button>
                  </DialogClose>
                </Stack>
              </DialogContent>
            </DialogPortal>
          </DialogRoot>
        </Stack>
      </Section>
    `,
  }),
}
