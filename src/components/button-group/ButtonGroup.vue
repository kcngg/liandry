<script setup lang="ts">
import { tv } from 'tailwind-variants'
import { provide } from 'vue'
import {
  BUTTON_GROUP_CONTEXT_KEY,
  BUTTON_GROUP_SIZE_KEY,
  type ButtonSize,
} from './constants'

/**
 * ButtonGroup component that groups buttons together
 * Automatically injects size into child buttons and adjusts border radius
 */
export interface ButtonGroupProps {
  /** Button group size - applies to all child buttons */
  size?: ButtonSize
  /** Group orientation */
  orientation?: 'horizontal' | 'vertical'
  /** Whether buttons should be attached (no gap) */
  attached?: boolean
}

const {
  size = 'md',
  orientation = 'horizontal',
  attached = true,
} = defineProps<ButtonGroupProps>()

// Provide size to child Button components using symbols
provide(BUTTON_GROUP_SIZE_KEY, size)
provide(BUTTON_GROUP_CONTEXT_KEY, true)

const buttonGroupStyle = tv({
  base: 'inline-flex',
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    attached: {
      true: '',
      false: 'gap-2',
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      attached: true,
      class:
        '[&>button:not(:first-child):not(:last-child)]:rounded-none [&>button:first-child]:rounded-r-none [&>button:last-child]:rounded-l-none [&>button:not(:first-child)]:-ml-px',
    },
    {
      orientation: 'vertical',
      attached: true,
      class:
        '[&>button:not(:first-child):not(:last-child)]:rounded-none [&>button:first-child]:rounded-b-none [&>button:last-child]:rounded-t-none [&>button:not(:first-child)]:-mt-px',
    },
  ],
})
</script>

<template>
  <div :class="buttonGroupStyle({ orientation, attached })" role="group">
    <slot />
  </div>
</template>
