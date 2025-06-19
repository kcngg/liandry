<script setup lang="ts">
import { LoaderCircle } from 'lucide-vue-next'
import { tv } from 'tailwind-variants'
interface ButtonProps {
  color?: 'primary' | 'secondary' | 'danger'
  variant?: 'filled' | 'outline' | 'ghost'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
  asIcon?: boolean
}

const {
  color = 'primary',
  variant = 'filled',
  size = 'md',
  isLoading = false,
  asIcon = false,
} = defineProps<ButtonProps>()

const buttonStyle = tv({
  base:
    'flex items-center justify-center ' +
    'font-400 ' +
    'disabled:opacity-75 disabled:cursor-not-allowed ' +
    'transition-colors duration-200 ease-in-out ' +
    'focus:outline-none',
  variants: {
    asIcon: {
      true: 'aspect-square !px-0',
    },
    variant: {
      filled: '',
      outline: 'bg-transparent border-1',
      ghost: 'bg-transparent',
    },
    color: {
      primary: '',
      secondary: '',
      danger: '',
    },
    size: {
      xs: 'px-2 py-1 h-26px text-xs rounded-6px',
      sm: 'px-3 py-2 h-32px text-xs rounded-8px',
      md: 'px-4 py-2 h-36px text-sm rounded-8px',
      lg: 'px-5 py-3 h-40px text-base rounded-10px',
      xl: 'px-6 py-4 h-44px text-base rounded-10px',
    },
  },
  compoundVariants: [
    // Primary filled
    {
      variant: 'filled',
      color: 'primary',
      class: 'bg-primary text-white hover:bg-primary/90 focus:bg-primary/80',
    },
    // Primary outline
    {
      variant: 'outline',
      color: 'primary',
      class:
        'border-primary text-primary hover:bg-primary hover:text-white focus:bg-primary/90 focus:text-white',
    },
    // Primary ghost
    {
      variant: 'ghost',
      color: 'primary',
      class:
        'text-primary hover:bg-primary/10 hover:text-primary focus:bg-primary/20 focus:text-primary',
    },
    // Secondary filled
    {
      variant: 'filled',
      color: 'secondary',
      class: 'bg-white/3 text-white hover:bg-white/10 focus:bg-white/15',
    },
    // Secondary outline
    {
      variant: 'outline',
      color: 'secondary',
      class:
        'border-white/6 text-white hover:bg-white/10 hover:border-white/20 focus:bg-white/15 focus:border-white/30',
    },
    // Secondary ghost
    {
      variant: 'ghost',
      color: 'secondary',
      class: 'text-white hover:bg-white/10 focus:bg-white/15',
    },
    // Danger filled
    {
      variant: 'filled',
      color: 'danger',
      class: 'bg-red-500 text-white hover:bg-red-600 focus:bg-red-700',
    },
    // Danger outline
    {
      variant: 'outline',
      color: 'danger',
      class:
        'border-red-500 text-red-500 hover:bg-red-500 hover:text-white focus:bg-red-600 focus:text-white',
    },
    // Danger ghost
    {
      variant: 'ghost',
      color: 'danger',
      class:
        'text-red-500 hover:bg-red-100 hover:text-red-600 focus:bg-red-200 focus:text-red-700',
    },
  ],
})

// Icon size mapping based on button size
const getIconSize = (size: string) => {
  const sizeMap = {
    xs: 'size-3', // 12px
    sm: 'size-4', // 16px
    md: 'size-4', // 16px
    lg: 'size-5', // 20px
    xl: 'size-6', // 24px
  }
  return sizeMap[size as keyof typeof sizeMap] || 'size-4'
}

// Loader icon size mapping
const getLoaderSize = (size: string) => {
  const sizeMap = {
    xs: 'size-3', // 12px
    sm: 'size-4', // 16px
    md: 'size-4', // 16px
    lg: 'size-5', // 20px
    xl: 'size-6', // 24px
  }
  return sizeMap[size as keyof typeof sizeMap] || 'size-4'
}
</script>

<template>
  <button
    :disabled="isLoading"
    :class="buttonStyle({ variant, color, size, asIcon })"
  >
    <!-- Show loader if isLoading is true -->
    <LoaderCircle
      v-if="isLoading"
      class="animate-spin text-white"
      :class="[
        getLoaderSize(size),
        {
          'mr-2': !asIcon,
        },
      ]"
    />

    <template v-if="isLoading && asIcon" />
    <slot
      v-else
      :icon-class="getIconSize(size)"
      :size="size"
      :as-icon="asIcon"
    />
  </button>
</template>
