<script lang="ts" setup>
import { ButtonProps } from '../types/button'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<ButtonProps>()
</script>

<template>
  {{ props }}
  <p>Button Atom</p>
</template>
