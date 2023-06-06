<template>
  <Icon
    :name="name"
    :class="{
      'h-2 w-2': size === 'small',
      'h-4 w-4': size === 'medium',
      'h-6 w-6': size === 'large',
    }"
  />
</template>
  
<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  size: string
  name: string
}>()
</script>