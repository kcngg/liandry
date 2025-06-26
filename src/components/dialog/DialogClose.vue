<script setup lang="ts">
import { DialogClose, useForwardProps } from 'reka-ui'
import { Button, type ButtonProps } from '@/components/button'

const props = defineProps<ButtonProps>()
</script>

<template>
  <DialogClose>
    <Button v-bind="useForwardProps(props)">
      <slot />
    </Button>
  </DialogClose>
</template>
