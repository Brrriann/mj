import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import ReviewCard from '@/components/ui/ReviewCard'

export const metadata: Metadata = genMeta({
  title: '의뢰인 후기',
  description: '명진탐정사무소를 이용한 의뢰인들의 실제 후기입니다.',
  pathname: '/cases/reviews',
})

const REVIEWS = [
  { content: '빠른 조사와 명확한 증거 덕분에 소송에서 유리하게 진행할 수 있었습니다.', author: '의뢰인 A', service: '배우자 불륜 조사' },
  { content: '연락이 끊겼던 채무자를 2주 만에 찾아주셨습니다. 믿음이 갔습니다.', author: '의뢰인 B', service: '소재 파악' },
  { content: '상담부터 결과 보고까지 친절하고 전문적이었습니다. 비밀도 완벽하게 지켜주셨어요.', author: '의뢰인 C', service: '증거 수집' },
  { content: '계약 전 거래처 신용조사를 의뢰했는데 결정적인 문제를 발견해주셨습니다.', author: '의뢰인 D', service: '기업 신용조사' },
]

export default function ReviewsPage() {
  return (
    <>
      <PageHeader title="의뢰인 후기" subtitle="의뢰인들의 진솔한 이야기" breadcrumb={['업무사례', '의뢰인 후기']} />
      <section className="max-w-4xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {REVIEWS.map((r) => <ReviewCard key={r.author} {...r} />)}
      </section>
    </>
  )
}
