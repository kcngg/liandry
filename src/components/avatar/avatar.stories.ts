// @ts-nocheck
import Avatar from './Avatar.vue'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of the avatar',
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square'],
      description: 'Shape of the avatar',
    },
    src: {
      control: { type: 'text' },
      description: 'Image source URL',
    },
    alt: {
      control: { type: 'text' },
      description: 'Alt text for the image (also used to generate initials)',
    },
    fallback: {
      control: { type: 'text' },
      description: 'Custom fallback text',
    },
    fallbackDelay: {
      control: { type: 'number' },
      description: 'Delay before showing fallback (ms)',
    },
  },
}

export default meta

export const Default = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    alt: 'John Doe',
    size: 'md',
    shape: 'circle',
  },
}

export const WithFallback = {
  args: {
    alt: 'John Doe',
    size: 'md',
    shape: 'circle',
  },
}

export const CustomFallback = {
  args: {
    fallback: 'JS',
    size: 'md',
    shape: 'circle',
  },
}

export const AllSizes = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <div class="text-center">
          <Avatar 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
            alt="John Doe" 
            size="xs" 
          />
          <p class="text-xs mt-1">xs</p>
        </div>
        
        <div class="text-center">
          <Avatar 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
            alt="Jane Smith" 
            size="sm" 
          />
          <p class="text-xs mt-1">sm</p>
        </div>
        
        <div class="text-center">
          <Avatar 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
            alt="Mike Johnson" 
            size="md" 
          />
          <p class="text-xs mt-1">md</p>
        </div>
        
        <div class="text-center">
          <Avatar 
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" 
            alt="Sarah Wilson" 
            size="lg" 
          />
          <p class="text-xs mt-1">lg</p>
        </div>
        
        <div class="text-center">
          <Avatar 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" 
            alt="David Brown" 
            size="xl" 
          />
          <p class="text-xs mt-1">xl</p>
        </div>
        
        <div class="text-center">
          <Avatar 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face" 
            alt="Emma Davis" 
            size="2xl" 
          />
          <p class="text-xs mt-1">2xl</p>
        </div>
      </div>
    `,
  }),
}

export const Shapes = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-6">
        <div class="text-center">
          <Avatar 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
            alt="John Doe" 
            size="lg" 
            shape="circle" 
          />
          <p class="text-sm mt-2">Circle</p>
        </div>
        
        <div class="text-center">
          <Avatar 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
            alt="Jane Smith" 
            size="lg" 
            shape="square" 
          />
          <p class="text-sm mt-2">Square</p>
        </div>
      </div>
    `,
  }),
}

export const FallbackInitials = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <div class="text-center">
          <Avatar alt="John Doe" size="lg" />
          <p class="text-xs mt-1">John Doe</p>
        </div>
        
        <div class="text-center">
          <Avatar alt="Jane Smith Johnson" size="lg" />
          <p class="text-xs mt-1">Jane Smith Johnson</p>
        </div>
        
        <div class="text-center">
          <Avatar alt="Alice" size="lg" />
          <p class="text-xs mt-1">Alice</p>
        </div>
        
        <div class="text-center">
          <Avatar fallback="AB" size="lg" />
          <p class="text-xs mt-1">Custom: AB</p>
        </div>
        
        <div class="text-center">
          <Avatar size="lg" />
          <p class="text-xs mt-1">No name</p>
        </div>
      </div>
    `,
  }),
}

export const LoadingStates = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <div class="text-center">
          <Avatar 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
            alt="John Doe" 
            size="lg" 
            :fallback-delay="0"
          />
          <p class="text-xs mt-1">Immediate fallback</p>
        </div>
        
        <div class="text-center">
          <Avatar 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
            alt="Jane Smith" 
            size="lg" 
            :fallback-delay="500"
          />
          <p class="text-xs mt-1">500ms delay</p>
        </div>
        
        <div class="text-center">
          <Avatar 
            src="https://invalid-url.jpg" 
            alt="Broken Image" 
            size="lg" 
          />
          <p class="text-xs mt-1">Broken image</p>
        </div>
      </div>
    `,
  }),
}

export const CustomFallbackSlot = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar size="lg">
          <template #fallback>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </template>
        </Avatar>
        
        <Avatar size="lg">
          <template #fallback>
            <div class="text-2xl">🎭</div>
          </template>
        </Avatar>
        
        <Avatar size="lg">
          <template #fallback>
            <div class="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
          </template>
        </Avatar>
      </div>
    `,
  }),
}

export const AvatarGroup = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-medium mb-3">Overlapping Group</h3>
          <div class="flex -space-x-2">
            <Avatar 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
              alt="John Doe" 
              size="md" 
              class="ring-2 ring-white/10"
            />
            <Avatar 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
              alt="Jane Smith" 
              size="md" 
              class="ring-2 ring-white/10"
            />
            <Avatar 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
              alt="Mike Johnson" 
              size="md" 
              class="ring-2 ring-white/10"
            />
            <Avatar 
              fallback="+3" 
              size="md" 
              class="ring-2 ring-white/10"
            />
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-medium mb-3">Spaced Group</h3>
          <div class="flex space-x-2">
            <Avatar alt="Alice Cooper" size="sm" />
            <Avatar alt="Bob Dylan" size="sm" />
            <Avatar alt="Charlie Parker" size="sm" />
            <Avatar alt="Diana Ross" size="sm" />
            <Avatar alt="Elvis Presley" size="sm" />
          </div>
        </div>
      </div>
    `,
  }),
}

export const WithBorders = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
          alt="John Doe" 
          size="lg" 
          class="ring-2 ring-blue-500"
        />
        
        <Avatar 
          src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
          alt="Jane Smith" 
          size="lg" 
          class="ring-2 ring-green-500 ring-offset-2"
        />
        
        <Avatar 
          alt="Mike Johnson" 
          size="lg" 
          class="border-2 border-purple-500"
        />
        
        <Avatar 
          alt="Sarah Wilson" 
          size="lg" 
          shape="square"
          class="border-2 border-orange-500"
        />
      </div>
    `,
  }),
}

export const Interactive = {
  render: () => ({
    components: { Avatar },
    setup() {
      const handleLoadingStatusChange = (status: string) => {
        console.log('Loading status changed:', status)
      }

      return { handleLoadingStatusChange }
    },
    template: `
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Click to see loading status in console</h3>
        <div class="flex items-center gap-4">
          <Avatar 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
            alt="John Doe" 
            size="lg" 
            @loading-status-change="handleLoadingStatusChange"
            class="cursor-pointer hover:opacity-80 transition-opacity"
          />
          
          <Avatar 
            src="https://invalid-url.jpg" 
            alt="Broken Image" 
            size="lg" 
            @loading-status-change="handleLoadingStatusChange"
            class="cursor-pointer hover:opacity-80 transition-opacity"
          />
          
          <Avatar 
            alt="Fallback Only" 
            size="lg" 
            class="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>
      </div>
    `,
  }),
}

export const Playground = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    alt: 'John Doe',
    size: 'lg',
    shape: 'circle',
    fallback: '',
    fallbackDelay: 0,
  },
}
