// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    target: 'static',
    buildModules: [
      '@nuxt/image',
      'nuxt-icon',
      '@pinia/nuxt',
      '@nuxtjs/toast',
      '@nuxtjs/i18n',
      '@formkit/nuxt',
    ]
});