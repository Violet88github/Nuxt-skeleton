// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/apollo'

  ],
  apollo: {
    autoImports: true,
    authType: 'Bearer',
    authHeader: 'Authorization',
    tokenStorage: 'cookie',
    proxyCookies: true,
    clients: {
      default: {
        httpEndpoint: 'http://silverstripe:8888/dev/graphql'
      }
    }
  },
  build: {
    hotMiddleware: {
      client: {
        overlay: false
      }
    }
  },
  colorMode: {
    classSuffix: ''
  }
})
