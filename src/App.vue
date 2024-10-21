<script setup lang="ts">
import DynamicButton from './components/DynamicButton.vue'
</script>

<template>
  <main>
    <DynamicButton as="link" :componentProps="{ as: 'link', name: 'test' }" />
    <DynamicButton
      as="button"
      :componentProps="{ as: 'button', onClick: () => console.log('as') }"
    />
  </main>
</template>

<style scoped>
main {
  display: grid;
  place-items: center;
}
</style>
