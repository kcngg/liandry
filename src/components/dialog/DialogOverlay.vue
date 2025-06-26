<script setup lang="ts">
import { useForwardProps, type DialogOverlayProps } from 'reka-ui'

const props = defineProps<DialogOverlayProps>()
</script>

<template>
  <DialogOverlay v-bind="useForwardProps(props)">
    <slot />
  </DialogOverlay>
</template>
