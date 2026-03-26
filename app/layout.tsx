import type { Metadata } from 'next'
import { Noto_Serif_KR, Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import { SITE } from '@/lib/constants'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/ui/FloatingButtons'
import ConsultPanel from '@/components/ui/ConsultPanel'

const notoSerifKr = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-noto-serif',
})

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans',
})

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | 경찰 출신 전문 탐정`,
    template: `%s | ${SITE.name}`,
  },
  description: '경찰 출신 전문가의 정확하고 신속한 조사. 배우자 불륜, 소재파악, 기업신용조사, 증거수집.',
  metadataBase: new URL(SITE.domain),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${notoSerifKr.variable} ${notoSansKr.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <ConsultPanel />
      </body>
    </html>
  )
}
