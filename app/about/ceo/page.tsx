import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = genMeta({
  title: '대표 소개',
  description: '경찰 출신 명진탐정사무소 대표를 소개합니다.',
  pathname: '/about/ceo',
})

export default function CeoPage() {
  return (
    <>
      <PageHeader title="대표 소개" breadcrumb={['명진 소개', '대표 소개']} />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-48 h-48 bg-bgalt rounded-lg flex-shrink-0 flex items-center justify-center text-textsecondary text-sm">
            대표 사진
          </div>
          <div>
            <h2 className="text-2xl font-bold font-serif text-primary mb-2">홍길동 대표</h2>
            <p className="text-accent font-medium mb-4">경찰 출신 공인탐정</p>
            <ul className="space-y-2 text-textprimary text-sm">
              <li>• 전) 서울지방경찰청 수사과 근무 (20년)</li>
              <li>• 공인탐정 자격 취득</li>
              <li>• 명진탐정사무소 설립 및 운영</li>
            </ul>
            <p className="mt-6 text-textprimary leading-relaxed text-sm">
              (실제 대표 소개 내용으로 교체 예정)
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
