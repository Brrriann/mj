import { Metadata } from 'next'
import { SITE } from './constants'

export function generateMetadata({
  title,
  description,
}: {
  title: string
  description: string
}): Metadata {
  const fullTitle = `${title} | ${SITE.name}`
  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: SITE.domain,
      siteName: SITE.name,
      locale: 'ko_KR',
      type: 'website',
    },
  }
}

export function generateLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    telephone: SITE.phone,
    url: SITE.domain,
    address: {
      '@type': 'PostalAddress',
      addressLocality: '서울특별시',
      addressCountry: 'KR',
    },
  }
}
