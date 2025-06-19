<script setup lang="ts">
interface StackProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  gap?: string | number
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  wrap?: boolean
  as?: string
}

const {
  direction = 'column',
  gap = '1rem',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  as = 'div',
} = defineProps<StackProps>()

const alignMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch',
}

const justifyMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
}
</script>

<template>
  <component
    :is="as"
    class="stack"
    :style="{
      display: 'flex',
      flexDirection: direction,
      gap: typeof gap === 'number' ? `${gap}px` : gap,
      alignItems: alignMap[align],
      justifyContent: justifyMap[justify],
      flexWrap: wrap ? 'wrap' : 'nowrap',
    }"
  >
    <slot />
  </component>
</template> 