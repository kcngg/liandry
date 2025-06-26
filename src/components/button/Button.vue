<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { tv } from 'tailwind-variants'
import { computed, inject } from 'vue'
import { BUTTON_GROUP_SIZE_KEY } from '../button-group'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/**
 * Button component with multiple variants, colors, and sizes
 * Supports loading states and icon-only buttons
 */
export interface ButtonProps {
  /** Button color theme */
  color?: 'primary' | 'secondary' | 'danger'
  /** Button visual style */
  variant?: 'filled' | 'outline' | 'ghost'
  /** Button size */
  size?: ButtonSize
  /** Show loading spinner */
  isLoading?: boolean
  /** Make button square for icon-only usage */
  asIcon?: boolean
}

const {
  color = 'primary',
  variant = 'filled',
  size: propSize,
  isLoading = false,
  asIcon = false,
} = defineProps<ButtonProps>()

// Inject size from ButtonGroup if available using symbols
const buttonGroupSize = inject(BUTTON_GROUP_SIZE_KEY, null)

// Use group size if available, otherwise use prop size, otherwise default
const size = computed<ButtonSize>(() => buttonGroupSize || propSize || 'md')

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
      sm: 'px-3 py-2 h-32px text-xs rounded-6px',
      md: 'px-4 py-2 h-36px text-sm rounded-8px',
      lg: 'px-5 py-3 h-40px text-base rounded-10px',
      xl: 'px-6 py-4 h-44px text-base rounded-12px',
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
      class: 'bg-red-600 text-white hover:bg-red-600/90 focus:bg-red-600/80',
    },
    // Danger outline
    {
      variant: 'outline',
      color: 'danger',
      class:
        'border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:bg-red-600/90 focus:text-white',
    },
    // Danger ghost
    {
      variant: 'ghost',
      color: 'danger',
      class:
        'text-red-600 hover:bg-red-600/10 hover:text-red-600 focus:bg-red-600/20 focus:text-red-600',
    },
  ],
})

/**
 * Get icon size class based on button size
 * Maps button sizes to appropriate icon dimensions
 */
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

/**
 * Get loader icon size class based on button size
 * Ensures loader matches the button's icon size
 */
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
    <Icon
      v-if="isLoading"
      icon="svg-spinners:bars-rotate-fade"
      :class="[
        getLoaderSize(size),
        {
          'mr-2': !asIcon,
          'text-white': variant === 'filled',
          'text-current': variant === 'outline' || variant === 'ghost',
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
