export interface PageSeoOptions {
  title: string
  description: string
  path: string
  keywords?: string
  noindex?: boolean
}

export function usePageSeo(options: PageSeoOptions) {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl
  const fullUrl = `${siteUrl}${options.path}`

  useSeoMeta({
    title: () => `${options.title} | My1RM`,
    description: () => options.description,
    keywords: () => options.keywords,
    ogTitle: () => options.title,
    ogDescription: () => options.description,
    ogType: 'website',
    ogUrl: () => fullUrl,
    ogSiteName: 'My1RM Calculator',
    twitterCard: 'summary',
    twitterTitle: () => options.title,
    twitterDescription: () => options.description,
    robots: () => options.noindex ? 'noindex, follow' : 'index, follow',
  })

  useHead({
    link: [
      {
        rel: 'canonical',
        href: fullUrl,
      },
    ],
  })
}
