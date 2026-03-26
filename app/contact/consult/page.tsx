import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import ConsultPageForm from './ConsultPageForm'

export const metadata: Metadata = genMeta({
  title: '상담 신청',
  description: '명진탐정사무소에 온라인으로 무료 상담을 신청하세요.',
  pathname: '/contact/consult',
})

export default function ConsultPage() {
  return (
    <>
      <PageHeader title="상담 신청" subtitle="무료 상담을 신청하시면 빠른 시간 내 연락드립니다" breadcrumb={['고객센터', '상담 신청']} />
      <section className="max-w-xl mx-auto px-4 py-16">
        <ConsultPageForm />
      </section>
    </>
  )
}
