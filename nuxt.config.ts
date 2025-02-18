// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  // pages: true,
  css: [
    { src: '@/assets/scss/main.scss', lang: 'scss'},
    '@/assets/scss/fonts.scss',
  ],
  devtools: { enabled: true }
})
