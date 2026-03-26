import { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about/company',
    '/about/ceo',
    '/about/process',
    '/services/infidelity',
    '/services/missing-person',
    '/services/corporate',
    '/services/evidence',
    '/cases/results',
    '/cases/reviews',
    '/contact/consult',
    '/contact/location',
  ]

  return routes.map((route) => ({
    url: `${SITE.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
