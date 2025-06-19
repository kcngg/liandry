<script setup lang="ts">
interface SectionProps {
  title?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  subtitle?: string
  spacing?: string | number
  as?: string
}

const {
  title,
  level = 2,
  subtitle,
  spacing = '1rem',
  as = 'section',
} = defineProps<SectionProps>()

const formatSpacing = (value: string | number) => {
  return typeof value === 'number' ? `${value}px` : value
}
</script>

<template>
  <component :is="as" class="section">
    <header v-if="title || subtitle" class="section-header" :style="{ marginBottom: formatSpacing(spacing) }">
      <component
        v-if="title"
        :is="`h${level}`"
        class="section-title"
        :style="{
          margin: 0,
          fontWeight: level <= 2 ? '700' : level <= 4 ? '600' : '500',
          fontSize: level === 1 ? '2rem' : level === 2 ? '1.5rem' : level === 3 ? '1.25rem' : level === 4 ? '1.125rem' : level === 5 ? '1rem' : '0.875rem',
          lineHeight: level <= 2 ? '1.2' : '1.4',
        }"
      >
        {{ title }}
      </component>
      
      <p
        v-if="subtitle"
        class="section-subtitle"
        :style="{
          margin: title ? '0.25rem 0 0 0' : '0',
          fontSize: '0.875rem',
          opacity: 0.7,
          lineHeight: '1.4',
        }"
      >
        {{ subtitle }}
      </p>
    </header>
    
    <div class="section-content">
      <slot />
    </div>
  </component>
</template> 