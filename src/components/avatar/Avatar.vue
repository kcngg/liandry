<script setup lang="ts">
import { AvatarFallback, AvatarImage, AvatarRoot } from 'reka-ui'
import { tv } from 'tailwind-variants'
import { computed } from 'vue'

type ImageLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error'

export interface AvatarProps {
  /** Image source URL */
  src?: string
  /** Alt text for the image */
  alt?: string
  /** Size of the avatar */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  /** Shape of the avatar */
  shape?: 'circle' | 'square'
  /** Fallback text to display when image fails to load */
  fallback?: string
  /** Delay before showing fallback (in milliseconds) */
  fallbackDelay?: number
  /** Custom CSS class */
  class?: string
}

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'md',
  shape: 'circle',
  fallbackDelay: 0,
})

const emit = defineEmits<{
  /** Emitted when image loading status changes */
  loadingStatusChange: [status: ImageLoadingStatus]
}>()

const avatarVariants = tv({
  base: [
    'inline-flex',
    'items-center',
    'justify-center',
    'overflow-hidden',
    'bg-gray-100',
    'text-gray-600',
    'font-medium',
    'select-none',
    'shrink-0',
  ],
  variants: {
    size: {
      xs: 'h-6 w-6 text-xs',
      sm: 'h-8 w-8 text-sm',
      md: 'h-10 w-10 text-base',
      lg: 'h-12 w-12 text-lg',
      xl: 'h-16 w-16 text-xl',
      '2xl': 'h-20 w-20 text-2xl',
    },
    shape: {
      circle: 'rounded-full',
      square: 'rounded-lg',
    },
  },
})

const fallbackVariants = tv({
  base: [
    'flex',
    'h-full',
    'w-full',
    'items-center',
    'justify-center',
    'bg-gray-100',
    'text-gray-600',
    'font-medium',
    'uppercase',
  ],
})

const avatarClass = computed(() => {
  return avatarVariants({
    size: props.size,
    shape: props.shape,
    class: props.class,
  })
})

const fallbackClass = computed(() => {
  return fallbackVariants()
})

const fallbackText = computed(() => {
  if (props.fallback) {
    return props.fallback
  }

  // Generate initials from alt text if available
  if (props.alt && props.alt.trim()) {
    return props.alt
      .trim()
      .split(/\s+/)
      .map((word) => word.charAt(0))
      .join('')
      .slice(0, 2)
      .toUpperCase()
  }

  return '?'
})

const handleLoadingStatusChange = (status: ImageLoadingStatus) => {
  emit('loadingStatusChange', status)
}
</script>

<template>
  <AvatarRoot :class="avatarClass">
    <AvatarImage
      v-if="src"
      :src="src"
      :alt="alt"
      @loading-status-change="handleLoadingStatusChange"
    />
    <AvatarFallback :delay-ms="fallbackDelay" :class="fallbackClass">
      <slot name="fallback">
        {{ fallbackText }}
      </slot>
    </AvatarFallback>
  </AvatarRoot>
</template>
