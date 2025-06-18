<script setup lang="ts">
// interface ButtonProps {
//   variant?: 'primary' | 'secondary' | 'tertiary';
//   size?: 'small' | 'medium' | 'large';
//   disabled?: boolean;
//   loading?: boolean;
// }
//
// const { variant, loading, size, disabled } = defineProps<ButtonProps>();
const { label } = defineProps<{
  label: string;
}>();
</script>

<template>
  <button class="bg-red text-xl">{{ label }}</button>
</template>

