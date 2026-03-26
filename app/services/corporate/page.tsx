import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Building2, FileSearch, UserCheck, TrendingDown, CheckCircle, Phone, AlertTriangle } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = genMeta({
  title: '기업 신용조사',
  description: '거래처·파트너사 기업 신용조사. 대표자 신원 확인, 재무 실태, 사기 전과 조회. 투자·계약 전 필수 실사.',
  pathname: '/services/corporate',
})

const RISK_CASES = [
  '계약 전 거래 업체의 신용 상태가 의심스럽다',
  '투자 예정 기업의 실제 재무 상태를 확인하고 싶다',
  '파트너사 대표의 신원 및 전과 여부가 궁금하다',
  '프랜차이즈 가맹 전 본사 실태를 파악하고 싶다',
  '납품 업체의 부도 가능성을 사전에 확인하고 싶다',
  '인수합병(M&A) 대상 기업의 실사가 필요하다',
  '해외 거래 업체의 국내 사업 실태를 조사하고 싶다',
  '장기 거래처의 최근 재무 변동 상황을 파악하고 싶다',
]

const METHODS = [
  {
    icon: FileSearch,
    title: '재무·법적 기록 조사',
    desc: '법인등기부등본, 사업자등록 현황, 부동산 압류 기록, 어음 부도 이력, 소송 기록 등 공개 자료를 종합적으로 분석합니다. 재무 건전성을 객관적으로 평가합니다.',
  },
  {
    icon: UserCheck,
    title: '대표자 신원 조사',
    desc: '대표자 및 주요 임원의 실제 신원을 확인합니다. 사기·횡령 전과, 다른 법인과의 연관 관계, 과거 폐업 이력, 명의 도용 여부를 조사합니다.',
  },
  {
    icon: Building2,
    title: '실제 영업 실태 확인',
    desc: '사무실·공장·매장 등 사업장을 직접 방문하여 실체를 확인합니다. 페이퍼컴퍼니 여부, 실제 종업원 수, 영업 규모를 현장에서 검증합니다.',
  },
  {
    icon: TrendingDown,
    title: '신용위험 종합 평가',
    desc: '수집된 모든 정보를 종합하여 거래 위험도를 평가합니다. 계약·투자 진행 여부를 판단할 수 있는 명확한 기준과 의견을 보고서에 담습니다.',
  },
]

const FAQ = [
  { q: '어느 정도 규모의 기업까지 조사 가능한가요?', a: '소규모 자영업자부터 대기업 계열사까지 규모에 관계없이 조사 가능합니다. 조사 범위와 깊이는 의뢰인의 필요에 맞춰 조정합니다.' },
  { q: '조사 결과를 법적 분쟁에 활용할 수 있나요?', a: '수집된 자료와 보고서는 민사소송, 사기 고소, 계약 파기 소송 등 법적 분쟁에서 증거로 활용 가능합니다.' },
  { q: '해외 법인도 조사할 수 있나요?', a: '국내에 영업 거점이 있는 해외 법인의 국내 실태 조사는 가능합니다. 순수 해외 법인은 연계 네트워크를 통해 가능 여부를 상담 시 안내해드립니다.' },
  { q: '조사 기간은 얼마나 걸리나요?', a: '일반적으로 3~10일 소요됩니다. 단순 신원 조회는 2~3일 내 완료되며, 심층 실사는 2주 이상 소요될 수 있습니다.' },
  { q: '조사 의뢰 사실이 상대방에게 알려지나요?', a: '절대 알려지지 않습니다. 모든 조사는 비밀리에 진행되며, 의뢰인 정보는 외부에 공개되지 않습니다.' },
]

export default function CorporatePage() {
  return (
    <>
      <PageHeader
        title="기업 신용조사"
        subtitle="계약·투자 전 필수 실사 · 사기 피해 예방 · 경찰 출신 전문가"
      />

      {/* 서비스 소개 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-accent text-sm tracking-widest uppercase mb-3">Corporate Due Diligence</p>
              <h2 className="text-4xl font-bold font-serif text-primary mb-6">계약하기 전, 반드시 확인하세요</h2>
              <p className="text-textprimary leading-relaxed mb-4">
                사업 파트너나 거래처를 잘못 선택하면 수억 원의 피해가 발생합니다. 화려한 홈페이지와 유창한 말솜씨 뒤에 감춰진 실제 신용 상태를 전문가가 직접 확인해드립니다.
              </p>
              <p className="text-textprimary leading-relaxed mb-6">
                경찰 수사 경력 20년의 전문 탐정이 법인등기부터 대표자 신원, 현장 실태까지 빠짐없이 조사하여
                계약·투자 결정에 필요한 객관적인 정보를 제공합니다.
              </p>
              <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-2 bg-accent text-white font-bold px-8 py-4 hover:brightness-95 transition-all duration-200 cursor-pointer">
                <Phone size={18} /> 무료 상담 전화
              </a>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-primary/5 border-l-4 border-accent p-8">
                <h3 className="font-bold text-primary font-serif text-xl mb-6 flex items-center gap-2">
                  <AlertTriangle size={20} className="text-accent" /> 이런 상황에서 의뢰하세요
                </h3>
                <ul className="space-y-3">
                  {RISK_CASES.map((c) => (
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

      {/* 예방 효과 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold font-serif text-primary mb-2">신용조사로 예방한 피해</h2>
            <div className="w-12 h-1 bg-accent mb-12" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '10억+', label: '단일 최대 피해 예방액', desc: '페이퍼컴퍼니를 사전에 적발하여 투자 사기 피해를 막은 사례입니다.' },
              { stat: '3일', label: '최단 조사 완료 기간', desc: '긴급 의뢰 시 핵심 정보를 3일 이내 파악한 사례가 다수 있습니다.' },
              { stat: '100%', label: '사전 적발 성공률', desc: '조사 의뢰 후 문제를 발견한 경우 모두 계약 파기 또는 선금 회수에 성공했습니다.' },
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
              '무료 상담 — 조사 대상 및 목적 파악',
              '조사 범위 협의 · 비용 안내 · 계약 체결',
              '공개 자료 수집 — 법인등기·소송·부도 기록 조회',
              '대표자 신원 및 전과 조회',
              '현장 방문 — 사업장 실태 직접 확인',
              '수집 정보 종합 분석 및 위험도 평가',
              '종합 신용조사 보고서 제출',
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
          <h2 className="text-3xl font-bold font-serif mb-4">계약 전에 반드시 확인하세요</h2>
          <p className="text-gray-300 mb-8">조사 비용보다 사기 피해 복구 비용이 훨씬 더 큽니다. 초기 상담은 무료입니다.</p>
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
