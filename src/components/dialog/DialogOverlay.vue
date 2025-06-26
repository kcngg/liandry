<script setup lang="ts">
import {
  DialogOverlay,
  useForwardProps,
  type DialogOverlayProps,
} from 'reka-ui'
import { cn } from '@/utils/classname'
import type { HTMLAttributes } from 'vue'

const props = defineProps<
  DialogOverlayProps & { class?: HTMLAttributes['class'] }
>()
</script>

<template>
  <DialogOverlay
    :class="
      cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',
        props.class,
      )
    "
    v-bind="useForwardProps(props)"
  >
    <slot />
  </DialogOverlay>
</template>
