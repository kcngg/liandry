<script setup lang="ts">
import { Button } from '@kcngg/liandry'
</script>

<template>
  <div class="p-8 space-y-4">
    <h1 class="text-2xl font-bold">Liandry Components Playground</h1>

    <!-- Test Button with different props -->
    <div class="space-y-2">
      <Button>Default Button</Button>
      <Button color="primary" variant="filled">Primary Filled</Button>
      <Button color="secondary" variant="outline"
        >Secondary Outline Large</Button
      >

      <Button as-icon size="sm">🚀</Button>
    </div>
  </div>
</template>

<style>
@import '@kcngg/liandry/style.css';
</style>
