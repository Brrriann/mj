import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = genMeta({
  title: '오시는 길',
  description: '명진탐정사무소 위치 및 오시는 방법을 안내합니다.',
  pathname: '/contact/location',
})

export default function LocationPage() {
  return (
    <>
      <PageHeader title="오시는 길" breadcrumb={['고객센터', '오시는 길']} />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="w-full h-80 bg-bgalt rounded-lg flex items-center justify-center text-textsecondary mb-8 border border-gray-200">
          지도 (실제 주소 확정 후 embed 교체 예정)
        </div>
        <div className="space-y-3">
          <div className="flex gap-4">
            <span className="text-accent font-bold w-20 flex-shrink-0">주소</span>
            <span className="text-textprimary">{SITE.address}</span>
          </div>
          <div className="flex gap-4">
            <span className="text-accent font-bold w-20 flex-shrink-0">전화</span>
            <a href={`tel:${SITE.phoneRaw}`} className="text-textprimary hover:text-accent transition-colors duration-200 cursor-pointer">{SITE.phone}</a>
          </div>
          <div className="flex gap-4">
            <span className="text-accent font-bold w-20 flex-shrink-0">운영시간</span>
            <span className="text-textprimary">24시간 상담 가능</span>
          </div>
        </div>
      </section>
    </>
  )
}
