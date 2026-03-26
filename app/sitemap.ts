import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://mjdet.com'
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
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
