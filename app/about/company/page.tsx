import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = genMeta({
  title: '회사 소개',
  description: '경찰 출신 전문 탐정이 이끄는 명진탐정사무소를 소개합니다.',
  pathname: '/about/company',
})

export default function CompanyPage() {
  return (
    <>
      <PageHeader title="회사 소개" breadcrumb={['명진 소개', '회사 소개']} />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold font-serif text-primary mb-6">명진탐정사무소는</h2>
        <p className="text-textprimary leading-relaxed mb-6">
          명진탐정사무소는 경찰 출신 전문 탐정이 설립한 신뢰할 수 있는 조사 기관입니다.
          20년 이상의 현장 경험을 바탕으로 의뢰인의 진실을 밝혀드리며,
          모든 조사는 합법적인 방법으로만 진행합니다.
        </p>
        <div className="border-l-4 border-accent pl-6 py-2 bg-bgalt rounded-r">
          <p className="text-textprimary font-medium">
            &ldquo;의뢰인의 아픔을 내 것으로 여기고, 진실을 밝히는 일에 최선을 다합니다.&rdquo;
          </p>
        </div>
      </section>
    </>
  )
}
