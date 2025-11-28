/**
 * Composable to get the site URL for SEO purposes
 * Uses the runtime config
 */
export function useSiteUrl(): string {
  const config = useRuntimeConfig()
  return config.public.siteUrl || 'https://1rm.davidsabalete.com'
}

