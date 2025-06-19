<script setup lang="ts">
import { LoaderCircle } from 'lucide-vue-next'
import { tv } from 'tailwind-variants'
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
  asIcon?: boolean
}

const {
  variant = 'primary',
  size = 'md',
  isLoading = false,
  asIcon = false,
} = defineProps<ButtonProps>()

const buttonStyle = tv({
  base:
    'flex items-center justify-center ' +
    'font-400 ' +
    'disabled:opacity-75 disabled:cursor-not-allowed ' +
    'transition-all ' +
    'focus:scale-97.5',
  variants: {
    asIcon: {
      true: 'aspect-square !px-0',
    },
    variant: {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'bg-gray-500 text-white hover:bg-gray-600',
      danger: 'bg-red-500 text-white hover:bg-red-600',
    },
    size: {
      xs: 'px-2 py-1 h-26px text-xs rounded-6px',
      sm: 'px-3 py-2 h-32px text-xs rounded-8px',
      md: 'px-4 py-2 h-36px text-sm rounded-8px',
      lg: 'px-5 py-3 h-40px text-base rounded-10px',
      xl: 'px-6 py-4 h-44px text-base rounded-10px',
    },
  },
})
</script>

<template>
  <button :disabled="isLoading" :class="buttonStyle({ variant, size, asIcon })">
    <!-- Show loader if isLoading is true -->
    <LoaderCircle
      v-if="isLoading"
      class="animate-spin mr-2 size-5 text-white"
    />

    <slot
      :class="{
        'w-2px h-2px': asIcon && size === 'xs',
      }"
    />
  </button>
</template>
