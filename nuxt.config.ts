// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  // ssr: false, // enable SPA
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Frontend Coding Challenge',
    },
  },
  nitro: {
    storage: {
      storage: {
        driver: 'fs',
        base: './storage',
      },
    },
  },
});
