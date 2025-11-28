// https://nuxt.com/docs/api/configuration/nuxt-config
import packageJson from './package.json'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  nitro: {
    preset: 'netlify'
  },
  ssr: true,

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

  runtimeConfig: {
    // Private keys (only available on server-side)
    // Public keys (exposed to client-side)
    public: {
      googleTagManagerId: process.env.NUXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || '',
      version: packageJson.version,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://1rm.davidsabalete.com',
    },
  },
})
