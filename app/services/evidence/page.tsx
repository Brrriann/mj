import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Video, Mic, FileText, Users, CheckCircle, Phone, AlertTriangle } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = genMeta({
  title: '증거 수집',
  description: '민사·형사 소송에 필요한 합법적 증거 수집. CCTV 확보, 음성 녹취, 목격자 진술, 법원 제출용 보고서. 경찰 출신 탐정.',
  pathname: '/services/evidence',
})

const NEED_CASES = [
  '이혼 소송을 위한 불륜 증거가 필요하다',
  '직장 내 괴롭힘·성희롱 증거를 확보해야 한다',
  '스토킹·접근금지 가처분을 위한 증거가 필요하다',
  '교통사고 과실 분쟁 해결을 위한 자료가 필요하다',
  '보증금 반환 거부 임대인 관련 증거가 필요하다',
  '사기 피해 입증을 위한 증거를 확보해야 한다',
  '음주운전 가해자의 음주 사실을 입증해야 한다',
  '명예훼손·허위사실 유포의 증거가 필요하다',
]

const METHODS = [
  {
    icon: Video,
    title: 'CCTV 및 영상 확보',
    desc: '사건 현장 주변의 공개 CCTV 영상을 확보합니다. 민간 건물, 상점, 차량 블랙박스 등 다양한 영상 자료를 수집하며, 법원에서 인정되는 형태로 보존합니다.',
  },
  {
    icon: Mic,
    title: '음성 녹취 및 디지털 증거',
    desc: '합법적인 범위 내에서 음성 녹취를 진행합니다. 문자 메시지, 카카오톡 대화, 이메일 등 디지털 증거의 원본성 보존을 도와 법적 효력을 확보합니다.',
  },
  {
    icon: Users,
    title: '목격자 확보 및 진술',
    desc: '사건을 목격한 증인을 찾아 진술을 확보합니다. 법원 제출 가능한 형태의 진술서 작성을 돕고, 필요한 경우 증인 출석을 위한 협조를 구합니다.',
  },
  {
    icon: FileText,
    title: '법원 제출용 보고서 작성',
    desc: '수집된 모든 증거를 체계적으로 정리한 조사 보고서를 작성합니다. 증거 수집 일시, 장소, 방법, 상황 등을 명확히 기재하여 법적 신뢰성을 높입니다.',
  },
]

const FAQ = [
  { q: '불법으로 수집한 증거는 법원에서 인정되지 않는다던데?', a: '맞습니다. 그래서 저희는 철저히 합법적인 방법으로만 증거를 수집합니다. 연계 변호사와 협력하여 수집 전 법적 유효성을 검토합니다.' },
  { q: '몰래 촬영한 영상도 증거로 사용할 수 있나요?', a: '공개된 장소에서의 촬영은 일반적으로 합법이며 법원에서 인정됩니다. 사적 공간에서의 촬영은 법적 판단이 필요하므로 사전에 충분한 검토를 거칩니다.' },
  { q: '증거 수집 기간은 얼마나 걸리나요?', a: '사건 유형에 따라 다릅니다. 단순 CCTV 확보는 수일 내, 지속적인 행동 패턴 기록은 1~3주 소요될 수 있습니다.' },
  { q: '증거가 충분하지 않을 경우 어떻게 되나요?', a: '수집된 증거의 법적 효력에 대해 솔직하게 안내해드립니다. 부족한 경우 추가 조사 방법을 제안하거나, 있는 증거를 최대한 활용하는 방법을 변호사와 함께 검토합니다.' },
  { q: '형사 고소와 민사소송 모두에 활용할 수 있나요?', a: '수집된 증거는 형사 고소, 민사소송, 행정 신고 등 다양한 법적 절차에서 활용 가능합니다. 사용 목적을 미리 알려주시면 그에 맞는 형태로 증거를 준비합니다.' },
]

export default function EvidencePage() {
  return (
    <>
      <PageHeader
        title="증거 수집"
        subtitle="법적 효력 있는 증거 합법적 수집 · 소송 승소율 향상 · 경찰 출신 전문가"
      />

      {/* 서비스 소개 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-accent text-sm tracking-widest uppercase mb-3">Legal Evidence Collection</p>
              <h2 className="text-4xl font-bold font-serif text-primary mb-6">증거 없이는 아무것도 증명할 수 없습니다</h2>
              <p className="text-textprimary leading-relaxed mb-4">
                분명히 피해를 입었지만 증거가 없어 아무것도 할 수 없는 상황에 처해 계신가요?
                경찰 수사 경력 20년의 전문 탐정이 합법적인 방법으로 결정적인 증거를 확보해드립니다.
              </p>
              <p className="text-textprimary leading-relaxed mb-6">
                수집된 모든 증거는 법원에서 채택 가능한 형태로 보존하며, 연계 변호사를 통해
                법적 효력을 검증합니다. 증거의 질이 소송 결과를 좌우합니다.
              </p>
              <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-2 bg-accent text-white font-bold px-8 py-4 hover:brightness-95 transition-all duration-200 cursor-pointer">
                <Phone size={18} /> 무료 상담 전화
              </a>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-primary/5 border-l-4 border-accent p-8">
                <h3 className="font-bold text-primary font-serif text-xl mb-6 flex items-center gap-2">
                  <AlertTriangle size={20} className="text-accent" /> 이런 경우 증거 수집이 필요합니다
                </h3>
                <ul className="space-y-3">
                  {NEED_CASES.map((c) => (
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
            <h2 className="text-3xl font-bold font-serif text-primary mb-2">증거 수집 방법</h2>
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

      {/* 강점 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold font-serif text-primary mb-2">명진탐정사무소가 다른 이유</h2>
            <div className="w-12 h-1 bg-accent mb-12" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '합법성 최우선', desc: '수집 전 반드시 법적 유효성을 검토합니다. 불법 수집으로 인해 증거가 무효화되는 최악의 상황을 방지합니다.' },
              { title: '경찰 출신 전문가', desc: '20년 수사 경험을 바탕으로 어떤 증거가 법원에서 실질적으로 효력을 발휘하는지 정확히 알고 있습니다.' },
              { title: '변호사 연계', desc: '증거 수집부터 소송 진행까지 연계 변호사와 협력하여 의뢰인의 법적 권리를 최대한 보호합니다.' },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="border border-gray-200 p-6 hover:border-accent transition-colors duration-300">
                  <h3 className="font-bold text-primary font-serif text-lg mb-3">{item.title}</h3>
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
            <h2 className="text-3xl font-bold font-serif text-primary mb-2">증거 수집 진행 과정</h2>
            <div className="w-12 h-1 bg-accent mb-12" />
          </ScrollReveal>
          <div className="space-y-0">
            {[
              '무료 상담 — 사건 개요 및 필요 증거 파악',
              '법적 유효성 검토 — 수집 가능한 증거 범위 확인',
              '증거 수집 계획 수립 및 계약 체결',
              '현장 조사 — CCTV·영상·음성·목격자 확보',
              '수집 증거 법적 효력 검증 (연계 변호사)',
              '조사 보고서 작성 및 증거 제출',
              '법적 절차 대응 지원 및 변호사 연결',
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
          <h2 className="text-3xl font-bold font-serif mb-4">지금 바로 증거를 확보하세요</h2>
          <p className="text-gray-300 mb-8">시간이 지날수록 증거는 사라집니다. 빠른 의뢰가 성패를 가릅니다.</p>
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
