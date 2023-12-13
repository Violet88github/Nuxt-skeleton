<template>
  <Icon :name="name" :class="iconSize" />
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  size?: string
}>()

const iconSize = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'h-2 w-2'
    case 'sm':
      return 'h-4 w-4'
    case 'md':
      return 'h-6 w-6'
    case 'lg':
      return 'h-8 w-8'
    case 'xl':
      return 'h-10 w-10'
    default:
      return 'h-6 w-6'
  }
})
</script>
