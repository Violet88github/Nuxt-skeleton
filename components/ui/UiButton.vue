<template>
  <component
    :is="is"
    ref="button"
    class="btn flex items-center gap-x-2 relative duration-200 transition-all group"
    :class="{'pr-10': hoverEffect}"
    @click="navigate"
  >
    <UiIcon v-if="icon" :name="icon" />
    {{ label }}
    <UiIcon v-if="hoverEffect" size="md" class="hidden absolute right-3 group-hover:inline-block" name="material-symbols:arrow-circle-right-outline" />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  to?: string
  label?: string
  icon?: string
  hoverEffect?: boolean
}>()

const router = useRouter()
const button = ref(null)

const is = computed(() => {
  return props.to ? 'a' : 'button'
})

const navigate = () => {
  if (props.to) {
    router.push({ path: props.to })
  }
}
</script>
