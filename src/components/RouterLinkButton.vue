<script setup lang="ts">
import { LinkProps } from '../types/button'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<LinkProps>()
</script>

<template>
  {{ props }}
  <p>Router Link Button</p>
</template>
