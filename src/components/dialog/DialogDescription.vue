<script setup lang="ts">
import {
  DialogDescription,
  useForwardProps,
  type DialogDescriptionProps,
} from 'reka-ui'

const props = defineProps<DialogDescriptionProps>()
</script>

<template>
  <DialogDescription
    class="text-12px text-white/50"
    v-bind="useForwardProps(props)"
  >
    <slot />
  </DialogDescription>
</template>
