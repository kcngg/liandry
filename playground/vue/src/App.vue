<script setup lang="ts">
import { Button, type ButtonSize } from '@kcngg/liandry'

// Test explicit typing
const buttonSize: ButtonSize = 'lg'
const buttonColor: 'primary' | 'secondary' | 'danger' = 'primary'
</script>

<template>
  <div class="p-8 space-y-4">
    <h1 class="text-2xl font-bold">Liandry Components Playground</h1>

    <!-- Test Button with different props -->
    <div class="space-y-2">
      <Button>Default Button</Button>
      <Button color="primary" variant="filled">Primary Filled</Button>
      <Button color="secondary" variant="outline" :size="buttonSize"
        >Secondary Outline Large</Button
      >
      <Button :color="buttonColor" variant="ghost" :is-loading="true"
        >Primary Ghost Loading</Button
      >
      <Button as-icon size="sm">🚀</Button>
    </div>
    
    <!-- Test typing -->
    <div class="text-sm text-gray-600">
      <p>Button size: {{ buttonSize }}</p>
      <p>Button color: {{ buttonColor }}</p>
    </div>
  </div>
</template>

<style>
@import '@kcngg/liandry/style.css';
</style>
