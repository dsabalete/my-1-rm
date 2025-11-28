/**
 * Analytics plugin for Google Tag Manager
 * Only runs on client-side
 * Note: GA4 is configured externally through GTM
 */

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  // Only initialize in production
  if (!import.meta.env.PROD) {
    return
  }

  // Suppress common browser extension errors that interfere with analytics
  // This error is harmless and typically caused by ad blockers or other extensions
  if (typeof window !== 'undefined') {
    window.addEventListener('unhandledrejection', (event) => {
      if (
        event.reason?.message?.includes('message channel closed') ||
        event.reason?.message?.includes('asynchronous response')
      ) {
        event.preventDefault()
      }
    })
  }

  // Initialize Google Tag Manager
  if (config.public.googleTagManagerId) {
    try {
      // Initialize dataLayer
      window.dataLayer = window.dataLayer || []

      // Load GTM script
      const gtmScript = document.createElement('script')
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${config.public.googleTagManagerId}');
      `
      gtmScript.onerror = () => {
        // Silently handle script loading errors (e.g., blocked by ad blocker)
      }
      document.head.appendChild(gtmScript)

      // Add noscript iframe
      const noscript = document.createElement('noscript')
      noscript.innerHTML = `
        <iframe src="https://www.googletagmanager.com/ns.html?id=${config.public.googleTagManagerId}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `
      document.body.appendChild(noscript)
    } catch (error) {
      // Silently handle initialization errors
    }
  }
})

