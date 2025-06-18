<script setup lang="ts">
import { tv } from 'tailwind-variants'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const { variant = 'primary', size = 'md' } = defineProps<ButtonProps>()

const buttonStyle = tv({
  base: 'rounded-8px flex items-center justify-center',
  variants: {
    variant: {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'bg-gray-500 text-white hover:bg-gray-600',
      danger: 'bg-red-500 text-white hover:bg-red-600',
    },
    size: {
      xs: 'px-2 py-1 h-26px text-xs',
      sm: 'px-3 py-2 h-32px text-sm',
      md: 'px-4 py-2 h-36px text-base',
      lg: 'px-5 py-3 h-40px text-lg',
      xl: 'px-6 py-4 h-44px text-xl',
    },
  },
})
</script>

<template>
  <button :class="buttonStyle({ variant, size })">
    <slot />
  </button>
</template>
