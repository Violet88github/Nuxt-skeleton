export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@formkit/nuxt',
    'nuxt-lodash',
    'nuxt-simple-sitemap',
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/apollo',
    '@pinia/nuxt',
  ],
  css: [
    '@/assets/css/main.css'
  ],
  apollo: {
    fetchOptions: {
      mode: 'no-cors'
    },
    clients: {
      default: {
        authType: 'Basic',
        httpEndpoint: 'https://event-planner.local/graphql',
        httpLinkOptions: {
          credentials: 'include'
        },
        authHeader: 'Authorization'
      }
    }
  },
  runtimeConfig: {
    silverStripeToken: process.env.API_TOKEN,
    silverStripeApi: process.env.API_URL
  }
})
