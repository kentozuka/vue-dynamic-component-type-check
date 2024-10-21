<script setup lang="ts">
import { type Component, computed, defineAsyncComponent, ref } from 'vue'
import { DynamicButtonProps } from '../types/button'

const isLink = ref(false)

const components: { [key: string]: Component } = {
  button: defineAsyncComponent(() => import('./ButtonAtom.vue')),
  link: defineAsyncComponent(() => import('./RouterLinkButton.vue'))
}

const props = defineProps<{
  as: keyof typeof components | 'button' | 'link'
  componentProps: DynamicButtonProps
}>()

const currentComponent = computed(() => components[props.as])
</script>

<template>
  <main>
    <button @click="isLink = !isLink">toggle</button>
    <component :is="currentComponent" v-bind="props.componentProps as any" />
  </main>
</template>

<style scoped>
main {
  display: grid;
  place-items: center;
}
</style>
