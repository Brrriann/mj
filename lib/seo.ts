import { Metadata } from 'next'
import { SITE } from './constants'

export function generateMetadata({
  title,
  description,
  pathname,
}: {
  title: string
  description: string
  pathname?: string
}): Metadata {
  const fullTitle = `${title} | ${SITE.name}`
  const pageUrl = pathname ? `${SITE.domain}${pathname}` : SITE.domain
  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: pageUrl,
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
