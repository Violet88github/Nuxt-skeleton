import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}