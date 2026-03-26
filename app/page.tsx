import { Heart, Search, Building2, FileSearch, Phone } from 'lucide-react'
import HeroSection from '@/components/ui/HeroSection'
import ServiceCard from '@/components/ui/ServiceCard'
import TrustSection from '@/components/ui/TrustSection'
import ReviewCard from '@/components/ui/ReviewCard'
import Link from 'next/link'

const SERVICES = [
  {
    title: '배우자 불륜 조사',
    description: '배우자의 외도 여부를 법적으로 유효한 증거와 함께 확인해드립니다.',
    href: '/services/infidelity',
    icon: <Heart size={32} className="text-primary" />,
  },
  {
    title: '소재/가출인 파악',
    description: '연락이 끊긴 가족, 지인, 채무자의 현재 소재를 파악해드립니다.',
    href: '/services/missing-person',
    icon: <Search size={32} className="text-primary" />,
  },
  {
    title: '기업 신용조사',
    description: '거래처나 파트너사의 신용도와 실태를 철저히 조사합니다.',
    href: '/services/corporate',
    icon: <Building2 size={32} className="text-primary" />,
  },
  {
    title: '증거 수집',
    description: '민사·형사 사건에 필요한 합법적인 증거를 수집해드립니다.',
    href: '/services/evidence',
    icon: <FileSearch size={32} className="text-primary" />,
  },
]

const REVIEWS = [
  {
    content: '빠른 조사와 명확한 증거 덕분에 소송에서 유리하게 진행할 수 있었습니다. 정말 감사합니다.',
    author: '의뢰인 A',
    service: '배우자 불륜 조사',
  },
  {
    content: '연락이 끊겼던 채무자를 2주 만에 찾아주셨습니다. 경찰 출신이라 그런지 믿음이 갔습니다.',
    author: '의뢰인 B',
    service: '소재 파악',
  },
  {
    content: '상담부터 결과 보고까지 친절하고 전문적이었습니다. 비밀도 완벽하게 지켜주셨어요.',
    author: '의뢰인 C',
    service: '증거 수집',
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* 서비스 섹션 */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-serif text-primary mb-3">업무 분야</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4" />
          <p className="text-textsecondary">전문적이고 합법적인 방법으로 진실을 밝혀드립니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => <ServiceCard key={s.href} {...s} />)}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/services/infidelity"
            className="border border-primary text-primary px-8 py-3 rounded hover:bg-primary hover:text-white transition-all duration-200 font-medium cursor-pointer"
          >
            전체 서비스 보기
          </Link>
        </div>
      </section>

      <TrustSection />

      {/* 후기 섹션 */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-serif text-primary mb-3">의뢰인 후기</h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => <ReviewCard key={r.author} {...r} />)}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/cases/reviews"
            className="border border-primary text-primary px-8 py-3 rounded hover:bg-primary hover:text-white transition-all duration-200 font-medium cursor-pointer"
          >
            더 많은 후기 보기
          </Link>
        </div>
      </section>

      {/* CTA 배너 */}
      <section className="bg-primary py-16 text-center text-white">
        <h2 className="text-3xl font-bold font-serif mb-4">지금 바로 무료 상담을 받아보세요</h2>
        <p className="text-gray-300 mb-8">모든 상담은 비밀이 보장되며, 부담 없이 문의하실 수 있습니다.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:01084182033"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white font-bold px-8 py-4 rounded hover:brightness-95 transition-all duration-200 cursor-pointer"
          >
            <Phone size={18} />
            전화 상담
          </a>
          <Link
            href="/contact/consult"
            className="border border-white text-white font-medium px-8 py-4 rounded hover:bg-white hover:text-primary transition-all duration-200 cursor-pointer"
          >
            온라인 상담 신청
          </Link>
        </div>
      </section>
    </>
  )
}
