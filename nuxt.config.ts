import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  css: ['~/assets/main.css'],

  modules: [
    '@pinia/nuxt',
    'usebootstrap',
  ],
})
