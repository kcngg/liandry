<script setup lang="ts">
import {
  DialogContent,
  useForwardPropsEmits,
  type DialogContentEmits,
  type DialogContentProps,
} from 'reka-ui'
import { cn } from '@/utils/classname'
import type { HTMLAttributes } from 'vue'

const props = defineProps<
  DialogContentProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<DialogContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogContent
    :class="
      cn(
        'fixed left-[50%] top-[50%] z-100 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-primary-950 border-white/10 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-48% data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-48% sm:rounded-lg',
        props.class,
      )
    "
    v-bind="forwarded"
  >
    <slot />
  </DialogContent>
</template>
