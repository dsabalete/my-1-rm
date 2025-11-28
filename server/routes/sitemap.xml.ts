/**
 * Sitemap route handler
 * Generates XML sitemap for SEO
 */
const SITE_URL = process.env.NUXT_PUBLIC_SITE_URL || 'https://1rm.davidsabalete.com'

export default defineEventHandler((event) => {
    const siteUrl = SITE_URL

    // Define all routes/pages
    const routes = [
        { url: '', changefreq: 'daily', priority: '1.0', lastmod: new Date().toISOString().split('T')[0] },
        { url: '/about', changefreq: 'monthly', priority: '0.8', lastmod: new Date().toISOString().split('T')[0] },
        { url: '/contact', changefreq: 'monthly', priority: '0.7', lastmod: new Date().toISOString().split('T')[0] },
        { url: '/privacy', changefreq: 'yearly', priority: '0.3', lastmod: '2024-12-19' },
    ]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
            .map(
                (route) => `  <url>
    <loc>${siteUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
            )
            .join('\n')}
</urlset>`

    event.node.res.setHeader('Content-Type', 'application/xml')
    event.node.res.setHeader('Cache-Control', 'public, max-age=3600')
    return sitemap
})

