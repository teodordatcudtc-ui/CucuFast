import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.SITE_URL || 'https://cucufastservice.ro'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/submissions/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

