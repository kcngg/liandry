<script setup lang="ts">
import {
  DialogContent,
  useForwardPropsEmits,
  type DialogContentEmits,
  type DialogContentProps,
} from 'reka-ui'

const props = defineProps<DialogContentProps>()
const emits = defineEmits<DialogContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogContent v-bind="forwarded">
    <slot />
  </DialogContent>
</template>
