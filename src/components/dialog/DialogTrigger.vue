<script setup lang="ts">
import {
  DialogTrigger,
  useForwardProps,
  type DialogTriggerProps,
} from 'reka-ui'

const props = defineProps<DialogTriggerProps>()
const forwarded = useForwardProps(props)
</script>

<template>
  <DialogTrigger v-bind="forwarded">
    <slot />
  </DialogTrigger>
</template>
