// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@pinia/nuxt',
      'nuxt-icon',
      '@nuxtjs/i18n',
      '@formkit/nuxt',
      '@nuxt/image-edge',
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
       plugins: {
        tailwindcss: {},
        autoprefixer: {},
     },
    },
    formkit: {
       configFile: './formkit.config.ts',
    },
});