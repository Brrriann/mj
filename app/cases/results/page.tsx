import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = genMeta({
  title: '사건 사례',
  description: '명진탐정사무소의 실제 조사 사례를 확인해보세요.',
  pathname: '/cases/results',
})

const CASES = [
  { category: '배우자 불륜 조사', title: '3주 만에 증거 확보 성공', summary: '장기 잠복 조사를 통해 법원에서 인정된 영상 증거를 확보하여 이혼 소송에서 유리한 결과를 이끌어냈습니다.' },
  { category: '소재 파악', title: '1개월째 연락 두절된 채무자 소재 파악', summary: '탐문 조사와 행동 패턴 분석으로 10일 만에 채무자의 현재 거주지를 파악했습니다.' },
  { category: '기업 신용조사', title: '허위 실적 기업 사전 적발', summary: '계약 체결 전 의뢰를 통해 상대 기업의 실제 영업 실태와 재무 허위 신고를 사전에 파악했습니다.' },
]

export default function CaseResultsPage() {
  return (
    <>
      <PageHeader title="사건 사례" subtitle="실제 조사 사례를 통해 전문성을 확인하세요" breadcrumb={['업무사례', '사건 사례']} />
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-6">
        {CASES.map((c) => (
          <div key={c.title} className="border border-gray-100 rounded-lg p-6 hover:border-accent transition-colors duration-200">
            <p className="text-accent text-sm font-medium mb-2">{c.category}</p>
            <h3 className="text-primary font-bold font-serif text-lg mb-3">{c.title}</h3>
            <p className="text-textprimary text-sm leading-relaxed">{c.summary}</p>
          </div>
        ))}
      </section>
    </>
  )
}
