import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL || 'https://cucufastservice.ro'

  const routes = [
    '',
    '/servicii',
    '/despre',
    '/galerie',
    '/contact',
    '/programari',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = routes.map((route) => {
    const changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] =
      route === '' ? 'daily' : 'weekly'

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority: route === '' ? 1 : 0.8,
    }
  })

  return sitemapEntries
}

