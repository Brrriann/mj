import { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = genMeta({
  title: '배우자 불륜 조사',
  description: '경찰 출신 전문 탐정이 법적으로 유효한 증거와 함께 배우자의 외도 여부를 조사합니다.',
  pathname: '/services/infidelity',
})

const INCLUDES = ['미행 및 잠복 조사', '사진/영상 증거 수집', '행동 패턴 분석', '법원 제출 가능한 보고서 작성']

export default function InfidelityPage() {
  return (
    <>
      <PageHeader title="배우자 불륜 조사" subtitle="합법적인 방법으로 진실을 밝혀드립니다" breadcrumb={['업무분야', '배우자 불륜 조사']} />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-textprimary leading-relaxed mb-10">
          배우자의 외도가 의심된다면 혼자 고민하지 마세요. 명진탐정사무소는 법적 효력이 있는
          증거를 합법적인 방법으로 수집하여 이혼 소송이나 위자료 청구에 도움을 드립니다.
          모든 조사는 비밀이 보장됩니다.
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
