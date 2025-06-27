<script setup lang="ts">
import { DialogPortal, useForwardProps, type DialogPortalProps } from 'reka-ui'

const props = defineProps<DialogPortalProps>()
</script>

<template>
  <DialogPortal v-bind="useForwardProps(props)">
    <slot />
  </DialogPortal>
</template>
