<script setup lang="ts">
import {
  DialogDescription,
  useForwardProps,
  type DialogDescriptionProps,
} from 'reka-ui'

const props = defineProps<DialogDescriptionProps>()
</script>

<template>
  <DialogDescription v-bind="useForwardProps(props)">
    <slot />
  </DialogDescription>
</template>
