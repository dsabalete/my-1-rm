export interface PageSeoOptions {
  title: string
  description: string
  path: string
  keywords?: string
  noindex?: boolean
  image?: string
}

export function usePageSeo(options: PageSeoOptions) {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl
  const fullUrl = `${siteUrl}${options.path}`
  const imageUrl = options.image ?? `${siteUrl}/og-image.svg`

  useSeoMeta({
    title: () => `${options.title} | My1RM`,
    description: () => options.description,
    keywords: () => options.keywords,
    ogTitle: () => options.title,
    ogDescription: () => options.description,
    ogType: 'website',
    ogUrl: () => fullUrl,
    ogSiteName: 'My1RM Calculator',
    ogImage: () => imageUrl,
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterCard: 'summary_large_image',
    twitterTitle: () => options.title,
    twitterDescription: () => options.description,
    twitterImage: () => imageUrl,
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
