/**
 * Global middleware to track page views
 * Runs on every route change
 */

export default defineNuxtRouteMiddleware((to) => {
  // Only track on client-side
  if (import.meta.client) {
    // Use setTimeout to ensure analytics is fully loaded
    setTimeout(() => {
      const analytics = useAnalytics()
      if (analytics.isEnabled.value) {
        const route = useRoute()
        analytics.trackPageView(to.path, (route.meta.title as string) || document.title)
      }
    }, 100)
  }
})

