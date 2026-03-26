import { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = genMeta({
  title: '소재/가출인 파악',
  description: '연락이 끊긴 가족, 지인, 채무자의 현재 소재를 신속히 파악해드립니다.',
  pathname: '/services/missing-person',
})

const INCLUDES = ['소재 파악 조사', '생활 패턴 분석', '지인 탐문 조사', '결과 보고서 제공']

export default function MissingPersonPage() {
  return (
    <>
      <PageHeader title="소재/가출인 파악" subtitle="신속하고 정확한 소재 파악 조사" breadcrumb={['업무분야', '소재/가출인 파악']} />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-textprimary leading-relaxed mb-10">
          연락이 끊긴 가족, 지인, 또는 채무자의 소재를 파악해야 할 때 명진탐정사무소가 도와드립니다.
          합법적인 조사 방법을 통해 신속하게 현재 위치를 확인해드립니다.
        </p>
        <h3 className="text-primary font-bold font-serif text-lg mb-4">조사 포함 내용</h3>
        <ul className="space-y-3 mb-12">
          {INCLUDES.map((item) => (
            <li key={item} className="flex items-center gap-3 text-textprimary">
              <span className="text-accent font-bold">✓</span> {item}
            </li>
          ))}
        </ul>
        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <p className="text-lg font-bold font-serif mb-4">지금 바로 무료 상담을 받아보세요</p>
          <a
            href="tel:01084182033"
            className="inline-flex items-center gap-2 bg-accent text-white font-bold px-8 py-3 rounded hover:brightness-95 transition-all duration-200 cursor-pointer"
          >
            <Phone size={18} /> 010-8418-2033
          </a>
        </div>
      </section>
    </>
  )
}
