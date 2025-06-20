<script setup lang="ts">
import { Badge, Button } from '@kcngg/liandry'
</script>

<template>
  <div class="p-8 space-y-4">
    <h1 class="text-2xl font-bold">Liandry Components Playground</h1>

    <!-- Test Button with different props -->
    <div class="space-y-2">
      <h2 class="text-xl font-semibold">Buttons</h2>
      <Button>Default Button</Button>
      <Button color="primary" variant="filled">Primary Filled</Button>
      <Button color="secondary" variant="outline"
        >Secondary Outline Large</Button
      >

      <Button as-icon size="sm">🚀</Button>
    </div>

    <!-- Test Badge with different props -->
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Badges</h2>
      
      <div class="space-y-2">
        <h3 class="text-lg font-medium">Colors</h3>
        <div class="flex gap-2 items-center">
          <Badge color="primary">Primary</Badge>
          <Badge color="secondary">Secondary</Badge>
          <Badge color="danger">Danger</Badge>
        </div>
      </div>

      <div class="space-y-2">
        <h3 class="text-lg font-medium">Variants</h3>
        <div class="flex gap-2 items-center">
          <Badge variant="filled" color="primary">Filled</Badge>
          <Badge variant="outline" color="primary">Outline</Badge>
          <Badge variant="ghost" color="primary">Ghost</Badge>
        </div>
      </div>

      <div class="space-y-2">
        <h3 class="text-lg font-medium">Sizes</h3>
        <div class="flex gap-2 items-center">
          <Badge size="xs">XS</Badge>
          <Badge size="sm">SM</Badge>
          <Badge size="md">MD</Badge>
          <Badge size="lg">LG</Badge>
        </div>
      </div>

      <div class="space-y-2">
        <h3 class="text-lg font-medium">Rounded</h3>
        <div class="flex gap-2 items-center">
          <Badge rounded>Rounded</Badge>
          <Badge rounded color="secondary">Secondary</Badge>
          <Badge rounded color="danger">Danger</Badge>
        </div>
      </div>

      <div class="space-y-2">
        <h3 class="text-lg font-medium">All Combinations</h3>
        <div class="space-y-2">
          <div class="flex gap-2 items-center">
            <Badge color="primary" variant="filled" size="xs">Primary XS</Badge>
            <Badge color="secondary" variant="outline" size="sm">Secondary SM</Badge>
            <Badge color="danger" variant="ghost" size="md">Danger MD</Badge>
            <Badge color="primary" variant="filled" size="lg" rounded>Primary LG Rounded</Badge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import '@kcngg/liandry/style.css';
</style>
