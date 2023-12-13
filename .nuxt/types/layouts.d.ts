import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}