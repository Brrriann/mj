import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Search, MapPin, Users, Database, CheckCircle, Phone, AlertTriangle } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = genMeta({
  title: '소재/가출인 파악',
  description: '연락이 끊긴 가족, 채무자, 가출인의 소재를 신속하게 파악합니다. 경찰 출신 탐정의 전문 추적 조사. 전국 출장 가능.',
  pathname: '/services/missing-person',
})

const CASES = [
  '행방불명된 가족 · 친척',
  '연락을 끊은 채무자 · 보증인',
  '가출한 청소년 · 성인 자녀',
  '실종된 치매 노인',
  '잠적한 사기 피의자',
  '해외 도주 후 귀국한 채무자',
  '오랫동안 소식이 없는 지인',
  '이혼 후 연락이 끊긴 배우자',
]

const METHODS = [
  {
    icon: Database,
    title: '데이터베이스 조회',
    desc: '공개 데이터베이스와 행정 정보를 활용하여 대상자의 최신 주소지, 직장, 차량 등록 정보를 추적합니다. 합법적 범위 내에서 최대한 활용합니다.',
  },
  {
    icon: Users,
    title: '탐문 및 인맥 조사',
    desc: '대상자의 가족, 지인, 직장 동료 등 주변인을 대상으로 탐문 조사를 진행합니다. 오랜 경찰 수사 경험을 바탕으로 한 자연스러운 접근으로 정보를 수집합니다.',
  },
  {
    icon: MapPin,
    title: '현장 잠복 및 감시',
    desc: '대상자가 출현할 가능성이 있는 장소에서 잠복 감시를 실시합니다. 자주 방문하는 장소, 거주 가능성이 있는 지역을 집중 모니터링합니다.',
  },
  {
    icon: Search,
    title: 'CCTV 및 디지털 추적',
    desc: '공개 CCTV 영상 분석과 디지털 흔적 추적으로 대상자의 동선을 파악합니다. 교통카드 이용 패턴, 카드 사용 지역 등을 종합 분석합니다.',
  },
]

const FAQ = [
  { q: '찾지 못하면 비용은 어떻게 되나요?', a: '계약 시 조건을 명확히 협의합니다. 조사 실패 시 비용 처리 방법에 대해 사전에 투명하게 안내해드립니다.' },
  { q: '가출인 조사도 가능한가요?', a: '성인 가출인도 조사 가능합니다. 단, 본인의 의사를 최대한 존중하며 강제적인 귀가는 진행하지 않습니다.' },
  { q: '경찰 신고와 동시에 진행해도 되나요?', a: '경찰 신고와 병행하시는 것을 권장합니다. 민간 조사는 경찰 수사와는 별개로, 더 빠르고 집중적인 추적이 가능합니다.' },
  { q: '조사 결과는 어떤 형태로 전달되나요?', a: '소재 확인 후 현재 거주지, 직장, 연락처, 생활 현황 등을 담은 보고서를 제공합니다. 법적 조치가 필요한 경우 증거 형태로도 제공합니다.' },
  { q: '전국 어디서든 조사 가능한가요?', a: '전국 출장 조사가 가능합니다. 해외 도주 후 귀국 모니터링도 가능하니 상담을 통해 구체적인 방법을 안내받으세요.' },
]

export default function MissingPersonPage() {
  return (
    <>
      <PageHeader
        title="소재/가출인 파악"
        subtitle="신속하고 정확한 추적 조사 · 전국 출장 가능 · 경찰 출신 전문가"
      />

      {/* 서비스 소개 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-accent text-sm tracking-widest uppercase mb-3">Missing Person Investigation</p>
              <h2 className="text-4xl font-bold font-serif text-primary mb-6">연락이 끊긴 분을 찾고 계신가요</h2>
              <p className="text-textprimary leading-relaxed mb-4">
                갑자기 연락이 끊긴 가족, 잠적한 채무자, 가출한 자녀 때문에 밤잠을 설치고 계신가요?
                경찰 출신 전문 탐정이 20년 이상의 수사 경험을 바탕으로 신속하게 소재를 파악해드립니다.
              </p>
              <p className="text-textprimary leading-relaxed mb-6">
                단순한 주소 조회를 넘어 현재 생활 상태, 재산 현황, 직장 정보까지 종합적으로 파악하여
                법적 조치 및 접촉에 필요한 모든 정보를 제공합니다.
              </p>
              <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-2 bg-accent text-white font-bold px-8 py-4 hover:brightness-95 transition-all duration-200 cursor-pointer">
                <Phone size={18} /> 무료 상담 전화
              </a>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-primary/5 border-l-4 border-accent p-8">
                <h3 className="font-bold text-primary font-serif text-xl mb-6 flex items-center gap-2">
                  <AlertTriangle size={20} className="text-accent" /> 이런 경우 의뢰하세요
                </h3>
                <ul className="space-y-3">
                  {CASES.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-textprimary">
                      <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 조사 방법 */}
      <section className="py-20 bg-bgalt">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold font-serif text-primary mb-2">조사 방법</h2>
            <div className="w-12 h-1 bg-accent mb-12" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {METHODS.map((m, i) => {
              const Icon = m.icon
              return (
                <ScrollReveal key={m.title} delay={0.1 * i}>
                  <div className="flex gap-5">
                    <div className="w-14 h-14 bg-primary flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-2">{m.title}</h3>
                      <p className="text-textsecondary text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 실적 강조 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold font-serif text-primary mb-2">소재 파악 실적</h2>
            <div className="w-12 h-1 bg-accent mb-12" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '평균 11일', label: '평균 소재 파악 기간', desc: '의뢰 접수 후 평균 11일 이내에 소재를 파악합니다. 긴급한 경우 48시간 내 결과를 낸 사례도 다수 있습니다.' },
              { stat: '94%', label: '소재 파악 성공률', desc: '의뢰된 사건의 94% 이상에서 소재를 파악했습니다. 해외 도주 사례를 포함한 수치입니다.' },
              { stat: '전국', label: '출장 가능 지역', desc: '서울·경기는 물론 제주도를 포함한 전국 어디서나 출장 조사가 가능합니다.' },
            ].map((item) => (
              <ScrollReveal key={item.label}>
                <div className="border border-gray-200 p-6 text-center hover:border-accent transition-colors duration-300">
                  <p className="text-4xl font-bold font-serif text-accent mb-2">{item.stat}</p>
                  <p className="font-bold text-primary mb-3">{item.label}</p>
                  <p className="text-textsecondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 조사 프로세스 */}
      <section className="py-20 bg-bgalt">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold font-serif text-primary mb-2">조사 진행 과정</h2>
            <div className="w-12 h-1 bg-accent mb-12" />
          </ScrollReveal>
          <div className="space-y-0">
            {[
              '무료 초기 상담 — 대상자 정보 및 상황 파악',
              '조사 범위 및 방법 협의 · 계약 체결',
              '데이터베이스 조회 및 1차 정보 수집',
              '현장 조사 — 탐문·잠복·감시',
              '중간 진행 상황 보고',
              '소재 확인 후 상세 보고서 제공',
              '법적 조치 필요 시 자문 및 변호사 연결',
            ].map((step, i) => (
              <ScrollReveal key={step} delay={0.08 * i}>
                <div className="flex gap-6 py-5 border-b border-gray-100 last:border-0">
                  <span className="text-4xl font-bold font-serif text-gray-100 flex-shrink-0 w-12">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-textprimary font-medium self-center">{step}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold font-serif text-primary mb-2">자주 묻는 질문</h2>
            <div className="w-12 h-1 bg-accent mb-12" />
          </ScrollReveal>
          <div className="space-y-6">
            {FAQ.map((f, i) => (
              <ScrollReveal key={f.q} delay={0.08 * i}>
                <div className="border-b border-gray-200 pb-6">
                  <p className="font-bold text-primary mb-3">Q. {f.q}</p>
                  <p className="text-textsecondary text-sm leading-relaxed">A. {f.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif mb-4">지금 바로 상담하세요</h2>
          <p className="text-gray-300 mb-8">시간이 지날수록 소재 파악이 어려워집니다. 빠른 의뢰가 중요합니다.</p>
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
