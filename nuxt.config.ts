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

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://1rm.davidsabalete.com' },
      ],
      script: [
        {
          src: 'https://quge5.com/88/tag.min.js',
          async: true,
          crossorigin: 'anonymous',
          'data-zone': '189840',
          'data-cfasync': 'false'
        }
      ],
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#007bff' },
      ],
    },
  },

  runtimeConfig: {
    // Private keys (only available on server-side)
    resendApiKey: process.env.RESEND_API_KEY || '',
    resendFromEmail: process.env.RESEND_FROM_EMAIL || '',
    contactRecipientEmail: process.env.CONTACT_RECIPIENT_EMAIL || 'info@davidsabalete.com',
    // Public keys (exposed to client-side)
    public: {
      googleTagManagerId: process.env.NUXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || '',
      version: packageJson.version,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://1rm.davidsabalete.com',
    },
  },
})
