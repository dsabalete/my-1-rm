/**
 * Analytics plugin for Google Analytics and Google Tag Manager
 * Only runs on client-side
 */

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  // Only initialize in production
  if (!import.meta.env.PROD) {
    return
  }

  // Initialize Google Analytics 4 (GA4)
  if (config.public.googleAnalyticsId) {
    // Load GA4 script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${config.public.googleAnalyticsId}`
    document.head.appendChild(script)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer!.push(args)
    }
    window.gtag = gtag as Window['gtag']

    gtag('js', new Date())
    gtag('config', config.public.googleAnalyticsId, {
      send_page_view: false, // We'll handle page views manually for better control
    })
  }

  // Initialize Google Tag Manager
  if (config.public.googleTagManagerId) {
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
    document.head.appendChild(gtmScript)

    // Add noscript iframe
    const noscript = document.createElement('noscript')
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${config.public.googleTagManagerId}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `
    document.body.appendChild(noscript)
  }
})

