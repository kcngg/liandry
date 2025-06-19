<script setup lang="ts">
interface ContainerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: string | number
  center?: boolean
  as?: string
}

const {
  size = 'lg',
  padding = '1rem',
  center = true,
  as = 'div',
} = defineProps<ContainerProps>()

const sizeMap = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  full: '100%',
}

const formatPadding = (value: string | number) => {
  return typeof value === 'number' ? `${value}px` : value
}
</script>

<template>
  <component
    :is="as"
    class="container"
    :style="{
      maxWidth: sizeMap[size],
      padding: formatPadding(padding),
      margin: center ? '0 auto' : '0',
      width: '100%',
    }"
  >
    <slot />
  </component>
</template>
