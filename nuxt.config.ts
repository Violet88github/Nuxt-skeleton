// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [    
  '@nuxt/image',
  '@formkit/nuxt',
  'nuxt-lodash',
  'nuxt-simple-sitemap',
  'nuxt-icon',
  '@nuxtjs/tailwindcss',
  '@vueuse/nuxt'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
