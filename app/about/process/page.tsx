import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = genMeta({
  title: '업무 프로세스',
  description: '명진탐정사무소의 체계적인 업무 진행 프로세스를 안내합니다.',
  pathname: '/about/process',
})

const STEPS = [
  { step: '01', title: '무료 상담', desc: '전화 또는 카카오톡으로 현황을 말씀해 주시면 해결 방법을 안내드립니다.' },
  { step: '02', title: '계약 체결', desc: '조사 범위와 비용을 협의 후 계약서를 작성합니다. 비밀 유지 계약 포함.' },
  { step: '03', title: '조사 진행', desc: '전문 탐정이 합법적인 방법으로 조사를 진행합니다.' },
  { step: '04', title: '결과 보고', desc: '조사 결과를 법적 효력이 있는 형태로 보고서와 함께 전달해드립니다.' },
]

export default function ProcessPage() {
  return (
    <>
      <PageHeader title="업무 프로세스" breadcrumb={['명진 소개', '업무 프로세스']} />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {STEPS.map((s) => (
            <div key={s.step} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                {s.step}
              </div>
              <div className="pt-2">
                <h3 className="text-primary font-bold font-serif text-lg mb-1">{s.title}</h3>
                <p className="text-textprimary text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
