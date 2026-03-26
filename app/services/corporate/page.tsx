import { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = genMeta({
  title: '기업 신용조사',
  description: '거래처나 파트너사의 신용도와 실태를 철저히 조사하여 사업 리스크를 줄여드립니다.',
  pathname: '/services/corporate',
})

const INCLUDES = ['기업 재무상태 조사', '대표자 신원 확인', '실제 영업 실태 파악', '종합 신용 보고서']

export default function CorporatePage() {
  return (
    <>
      <PageHeader title="기업 신용조사" subtitle="사업 파트너의 신뢰성을 검증합니다" breadcrumb={['업무분야', '기업 신용조사']} />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-textprimary leading-relaxed mb-10">
          거래처나 파트너사의 신용도와 실태를 철저히 조사하여 사업 리스크를 사전에 방지하세요.
          재무 상태부터 실제 영업 현황까지 종합적인 신용 조사 보고서를 제공합니다.
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
