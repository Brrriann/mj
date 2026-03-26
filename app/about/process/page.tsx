import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { MessageCircle, FileSignature, SearchCheck, BarChart3, FileOutput, Scale, Phone, CheckCircle } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = genMeta({
  title: '업무 프로세스',
  description: '명진탐정사무소의 체계적인 조사 프로세스를 안내합니다. 무료 상담부터 결과 보고, 법적 대응까지 6단계로 진행됩니다.',
  pathname: '/about/process',
})

const STEPS = [
  {
    icon: MessageCircle,
    step: '01',
    title: '무료 초기 상담',
    duration: '즉시 가능',
    desc: '전화 또는 카카오톡으로 현재 상황을 말씀해 주시면 됩니다. 대표 탐정이 직접 상담하며, 사건 개요와 의뢰인의 목적을 파악합니다.',
    points: [
      '24시간 상담 가능 (긴급 사건)',
      '비밀 보장 — 상담 내용 절대 외부 유출 없음',
      '조사 가능 여부 및 예상 기간 안내',
      '무료 — 초기 상담 비용 없음',
    ],
  },
  {
    icon: FileSignature,
    step: '02',
    title: '조사 계획 수립 및 계약',
    duration: '상담 후 1~2일',
    desc: '의뢰인의 목적에 맞는 최적의 조사 방법을 설계합니다. 조사 범위, 기간, 비용을 명확히 협의하고 계약서를 작성합니다.',
    points: [
      '맞춤형 조사 계획 수립',
      '투명한 비용 안내 — 추가 비용 없음',
      '비밀 유지 계약서 체결',
      '조사 목표 및 기대 결과 명확화',
    ],
  },
  {
    icon: SearchCheck,
    step: '03',
    title: '전문 조사 진행',
    duration: '사건별 상이',
    desc: '경찰 출신 대표 탐정이 직접 조사를 진행합니다. 외주 없이 전문가가 책임지고 담당합니다. 미행·잠복·탐문·데이터베이스 조회 등 최적의 방법을 동원합니다.',
    points: [
      '대표 탐정 직접 담당 — 외주 없음',
      '합법적 방법으로만 조사',
      '실시간 진행 상황 공유',
      '긴급 상황 즉시 대응',
    ],
  },
  {
    icon: BarChart3,
    step: '04',
    title: '중간 보고 및 확인',
    duration: '조사 기간 중',
    desc: '주요 정보가 수집될 때마다 의뢰인에게 중간 보고를 드립니다. 의뢰인의 의견을 반영하여 조사 방향을 필요에 따라 조정합니다.',
    points: [
      '정기적 중간 보고',
      '의뢰인 의견 반영',
      '조사 방향 실시간 조정',
      '수집 증거 임시 보고',
    ],
  },
  {
    icon: FileOutput,
    step: '05',
    title: '최종 보고서 제출',
    duration: '조사 완료 후',
    desc: '수집된 모든 증거와 정보를 체계적으로 정리한 최종 보고서를 제출합니다. 법원 제출 및 법적 절차 활용에 적합한 형태로 작성합니다.',
    points: [
      '영상·사진·문서 증거 첨부',
      '조사 일시·장소·상황 상세 기록',
      '법적 효력 검증 완료',
      '변호사 활용 가능한 형태',
    ],
  },
  {
    icon: Scale,
    step: '06',
    title: '사후 지원 및 법적 연계',
    duration: '보고서 제출 후',
    desc: '보고서 제출 이후에도 법적 절차 진행을 돕습니다. 연계 변호사 소개, 추가 증거 보완, 소송 진행 시 증인 역할 등 최종 목표 달성까지 함께합니다.',
    points: [
      '연계 변호사 소개',
      '추가 조사 필요 시 신속 대응',
      '소송 진행 지원',
      '최종 목표 달성까지 동행',
    ],
  },
]

const GUARANTEES = [
  { title: '비밀 보장', desc: '계약 시 비밀 유지 협약 체결. 의뢰인 정보 및 조사 내용 절대 외부 공개 금지.' },
  { title: '합법 조사', desc: '모든 조사는 법적 유효성 검토 후 진행. 불법 수집 증거로 인한 2차 피해 방지.' },
  { title: '투명 비용', desc: '계약 시 확정된 비용 외 추가 청구 없음. 모든 비용 사전 안내 및 서면 확인.' },
  { title: '직접 담당', desc: '대표 탐정이 직접 조사 담당. 외주·하청 없이 전문가가 책임지고 진행.' },
]

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        title="업무 프로세스"
        subtitle="상담부터 결과 보고까지 — 6단계 체계적 조사 프로세스"
      />

      {/* 프로세스 개요 */}
      <section className="py-16 bg-bgalt border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="text-textprimary leading-relaxed text-lg max-w-2xl mx-auto">
              명진탐정사무소는 20년 경찰 수사 경험을 바탕으로 한 체계적인 6단계 프로세스로 의뢰인의 문제를 해결합니다.
              모든 단계에서 비밀이 보장되며, 의뢰인과 실시간으로 소통합니다.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 6단계 프로세스 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-16">
            {STEPS.map((s, i) => {
              const Icon = s.icon
              const isEven = i % 2 === 1
              return (
                <ScrollReveal key={s.step}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={isEven ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-primary flex items-center justify-center flex-shrink-0">
                          <Icon size={28} className="text-accent" />
                        </div>
                        <div>
                          <span className="text-accent text-xs font-bold tracking-widest">STEP {s.step}</span>
                          <h3 className="text-2xl font-bold font-serif text-primary">{s.title}</h3>
                        </div>
                      </div>
                      <span className="inline-block text-xs text-primary bg-primary/10 px-3 py-1 mb-4">{s.duration}</span>
                      <p className="text-textprimary leading-relaxed mb-6">{s.desc}</p>
                    </div>
                    <div className={`bg-bgalt border border-gray-200 p-6 ${isEven ? 'lg:order-1' : ''}`}>
                      <ul className="space-y-3">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-start gap-3 text-sm text-textprimary">
                            <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 보장 사항 */}
      <section className="py-20 bg-bgalt">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold font-serif text-primary mb-2">명진탐정사무소의 약속</h2>
            <div className="w-12 h-1 bg-accent mb-12" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUARANTEES.map((g, i) => (
              <ScrollReveal key={g.title} delay={0.1 * i}>
                <div className="bg-white border border-gray-200 p-6 text-center hover:border-accent transition-colors duration-300">
                  <div className="w-12 h-12 bg-primary mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle size={20} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-primary font-serif mb-3">{g.title}</h3>
                  <p className="text-textsecondary text-sm leading-relaxed">{g.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 상담 안내 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold font-serif text-primary mb-2">상담 방법</h2>
            <div className="w-12 h-1 bg-accent mb-12" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { method: '전화 상담', contact: SITE.phone, desc: '가장 빠른 방법입니다. 즉시 연결되어 대표 탐정과 직접 상담할 수 있습니다. 24시간 긴급 상담 가능.', href: `tel:${SITE.phoneRaw}` },
              { method: '카카오톡 상담', contact: '카카오톡 채널', desc: '문자로 상황을 설명하기 편하신 분께 추천합니다. 사진이나 자료 전송도 가능합니다.', href: SITE.kakaoUrl },
              { method: '방문 상담', contact: '서울 (예약 후 방문)', desc: '직접 방문하여 자세한 상담을 원하시는 분은 사전 예약 후 방문하실 수 있습니다.', href: `tel:${SITE.phoneRaw}` },
            ].map((item) => (
              <ScrollReveal key={item.method}>
                <div className="border border-gray-200 p-6 hover:border-accent transition-colors duration-300">
                  <h3 className="font-bold text-primary font-serif text-lg mb-2">{item.method}</h3>
                  <p className="text-accent text-sm font-medium mb-3">{item.contact}</p>
                  <p className="text-textsecondary text-sm leading-relaxed mb-4">{item.desc}</p>
                  <a href={item.href} className="text-primary text-sm font-bold hover:text-accent transition-colors duration-200 cursor-pointer">
                    상담하기 &rarr;
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif mb-4">지금 바로 첫 걸음을 시작하세요</h2>
          <p className="text-gray-300 mb-8">초기 상담은 무료이며 비밀이 완벽히 보장됩니다.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-accent text-white font-bold px-10 py-4 hover:brightness-95 transition-all duration-200 cursor-pointer">
              <Phone size={18} /> 전화 상담
            </a>
            <a href={SITE.kakaoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white text-white px-10 py-4 hover:bg-white hover:text-primary transition-all duration-200 cursor-pointer">
              카카오톡 상담
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
