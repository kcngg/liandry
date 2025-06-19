<script setup lang="ts">
interface GridProps {
  columns?: string | number
  rows?: string | number
  gap?: string | number
  columnGap?: string | number
  rowGap?: string | number
  autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense'
  autoColumns?: string
  autoRows?: string
  as?: string
}

const {
  columns,
  rows,
  gap,
  columnGap,
  rowGap,
  autoFlow = 'row',
  autoColumns,
  autoRows,
  as = 'div',
} = defineProps<GridProps>()

const formatValue = (value: string | number | undefined) => {
  if (value === undefined) return undefined
  return typeof value === 'number' ? `${value}px` : value
}

const getColumns = () => {
  if (!columns) return undefined
  if (typeof columns === 'number') return `repeat(${columns}, 1fr)`
  return columns
}

const getRows = () => {
  if (!rows) return undefined
  if (typeof rows === 'number') return `repeat(${rows}, 1fr)`
  return rows
}
</script>

<template>
  <component
    :is="as"
    class="grid"
    :style="{
      display: 'grid',
      gridTemplateColumns: getColumns(),
      gridTemplateRows: getRows(),
      gap: formatValue(gap),
      columnGap: formatValue(columnGap),
      rowGap: formatValue(rowGap),
      gridAutoFlow: autoFlow,
      gridAutoColumns: autoColumns,
      gridAutoRows: autoRows,
    }"
  >
    <slot />
  </component>
</template>
