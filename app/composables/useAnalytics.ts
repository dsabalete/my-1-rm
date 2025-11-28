/**
 * Analytics composable for tracking events
 * Uses Google Tag Manager (GTM)
 * Note: GA4 is configured externally through GTM
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
    return config.public.googleTagManagerId && import.meta.env.PROD
  })

  /**
   * Track a custom event
   */
  const trackEvent = (event: AnalyticsEvent): void => {
    if (!isEnabled.value) {
      return
    }

    const { eventName, eventParams } = event

    try {
      // Google Tag Manager
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: eventName,
          ...eventParams,
        })
      }
    } catch (error) {
      // Silently handle errors from browser extensions or blocked scripts
    }
  }

  /**
   * Track page view
   */
  const trackPageView = (path: string, title?: string): void => {
    if (!isEnabled.value) {
      return
    }

    try {
      // Google Tag Manager
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'page_view',
          page_path: path,
          page_title: title,
        })
      }
    } catch (error) {
      // Silently handle errors from browser extensions or blocked scripts
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
    dataLayer?: Array<Record<string, any>>
  }
}

