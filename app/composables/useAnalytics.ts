/**
 * Analytics composable for tracking events
 * Supports Google Analytics 4 (GA4) and Google Tag Manager (GTM)
 */

export interface AnalyticsEvent {
  eventName: string
  eventParams?: Record<string, string | number | boolean>
}

/**
 * Composable for tracking analytics events
 */
export function useAnalytics() {
  const config = useRuntimeConfig()
  const isEnabled = computed(() => {
    return (
      (config.public.googleAnalyticsId || config.public.googleTagManagerId) &&
      import.meta.env.PROD
    )
  })

  /**
   * Track a custom event
   */
  const trackEvent = (event: AnalyticsEvent): void => {
    if (!isEnabled.value) {
      return
    }

    const { eventName, eventParams } = event

    // Google Analytics 4 (gtag)
    if (config.public.googleAnalyticsId && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams)
    }

    // Google Tag Manager
    if (config.public.googleTagManagerId && typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...eventParams,
      })
    }
  }

  /**
   * Track page view
   */
  const trackPageView = (path: string, title?: string): void => {
    if (!isEnabled.value) {
      return
    }

    // Google Analytics 4 (gtag)
    if (config.public.googleAnalyticsId && typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', config.public.googleAnalyticsId, {
        page_path: path,
        page_title: title,
      })
    }

    // Google Tag Manager
    if (config.public.googleTagManagerId && typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: path,
        page_title: title,
      })
    }
  }

  /**
   * Track calculator calculation
   */
  const trackCalculation = (weight: number, reps: number, result: number): void => {
    trackEvent({
      eventName: 'calculate_1rm',
      eventParams: {
        weight,
        reps,
        result_1rm: Math.round(result),
      },
    })
  }

  /**
   * Track settings save
   */
  const trackSettingsSave = (weight: number, reps: number): void => {
    trackEvent({
      eventName: 'save_settings',
      eventParams: {
        default_weight: weight,
        default_reps: reps,
      },
    })
  }

  return {
    trackEvent,
    trackPageView,
    trackCalculation,
    trackSettingsSave,
    isEnabled,
  }
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | object,
      config?: Record<string, any>
    ) => void
    dataLayer?: Array<Record<string, any>>
  }
}

