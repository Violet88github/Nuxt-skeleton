<template>
  <component 
    @click="$emit('click')"
    class="flex items-center justify-center btn" 
    :is="is" 
    :class="{
      'btn-primary': type === 'primary'
    }
    "
  >
    <UiIcon
      v-if="icon"
      size="medium"
      name="name"
    />
    {{ label ?? '' }}
  </component>
</template>
  
<script lang="ts" setup>
import { computed } from "@vue/reactivity";
  
const props = defineProps<{
  label?: string;
  to?: URL;
  blank?: boolean;
  icon?: string;
  type: string;
}>();


const is = computed(() => {
  if (props.to) {
    return "NuxtLink";
  }

  return "button";
});
</script>