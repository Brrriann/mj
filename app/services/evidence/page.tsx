import { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = genMeta({
  title: '증거 수집',
  description: '민사·형사 사건에 필요한 합법적인 증거를 수집하여 법적 분쟁에서 유리한 위치를 만들어드립니다.',
  pathname: '/services/evidence',
})

const INCLUDES = ['사진/영상 증거 수집', '목격자 진술 확보', '디지털 증거 분석 지원', '법원 제출용 보고서']

export default function EvidencePage() {
  return (
    <>
      <PageHeader title="증거 수집" subtitle="법적 효력 있는 증거를 합법적으로 수집합니다" breadcrumb={['업무분야', '증거 수집']} />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-textprimary leading-relaxed mb-10">
          민사·형사 사건에 필요한 증거를 합법적인 방법으로 수집하여 법적 분쟁에서 유리한 위치를 확보하세요.
          법원에서 인정되는 형태로 증거를 수집하고 보고서를 제공합니다.
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
