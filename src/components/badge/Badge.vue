<script setup lang="ts">
import { tv } from 'tailwind-variants'
import { BADGE_DEFAULTS, type BadgeSize } from './constants'

/**
 * Badge component with multiple variants, colors, and sizes
 * Used for displaying status, categories, or labels
 */
interface BadgeProps {
  /** Badge color theme */
  color?: 'primary' | 'secondary' | 'danger'
  /** Badge visual style */
  variant?: 'filled' | 'outline' | 'ghost'
  /** Badge size */
  size?: BadgeSize
  /** Make badge rounded/pill shaped */
  rounded?: boolean
}

const {
  color = BADGE_DEFAULTS.color,
  variant = BADGE_DEFAULTS.variant,
  size = BADGE_DEFAULTS.size,
  rounded = BADGE_DEFAULTS.rounded,
} = defineProps<BadgeProps>()

const badgeStyle = tv({
  base:
    'inline-flex items-center justify-center ' +
    'font-500 ' +
    'transition-colors duration-200 ease-in-out ' +
    'whitespace-nowrap',
  variants: {
    rounded: {
      true: 'rounded-full',
      false: '',
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
      xs: 'px-1.5 py-0.5 text-xs rounded-4px',
      sm: 'px-2 py-1 text-xs rounded-6px',
      md: 'px-2.5 py-1 text-sm rounded-6px',
      lg: 'px-3 py-1.5 text-sm rounded-8px',
    },
  },
  compoundVariants: [
    // Primary filled
    {
      variant: 'filled',
      color: 'primary',
      class: 'bg-primary text-white',
    },
    // Primary outline
    {
      variant: 'outline',
      color: 'primary',
      class: 'border-primary text-primary',
    },
    // Primary ghost
    {
      variant: 'ghost',
      color: 'primary',
      class: 'text-primary bg-primary/10',
    },
    // Secondary filled
    {
      variant: 'filled',
      color: 'secondary',
      class: 'bg-white/10 text-white',
    },
    // Secondary outline
    {
      variant: 'outline',
      color: 'secondary',
      class: 'border-white/20 text-white',
    },
    // Secondary ghost
    {
      variant: 'ghost',
      color: 'secondary',
      class: 'text-white bg-white/5',
    },
    // Danger filled
    {
      variant: 'filled',
      color: 'danger',
      class: 'bg-red-600 text-white',
    },
    // Danger outline
    {
      variant: 'outline',
      color: 'danger',
      class: 'border-red-600 text-red-600',
    },
    // Danger ghost
    {
      variant: 'ghost',
      color: 'danger',
      class: 'text-red-600 bg-red-600/10',
    },
  ],
})
</script>

<template>
  <span :class="badgeStyle({ variant, color, size, rounded })">
    <slot />
  </span>
</template>
