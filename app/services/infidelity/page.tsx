import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Shield, Camera, FileText, Clock, CheckCircle, AlertTriangle, Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = genMeta({
  title: '배우자 불륜 조사',
  description: '경찰 출신 탐정의 배우자 불륜 조사. 법원 제출 가능한 증거 수집, 철저한 비밀 보장. 서울/경기/전국 출장.',
  pathname: '/services/infidelity',
})

const SIGNS = [
  '귀가 시간이 갑자기 불규칙해졌다',
  '핸드폰을 절대 두고 다니지 않는다',
  '주말 또는 야근이 갑자기 늘었다',
  '외모에 갑자기 신경을 쓰기 시작했다',
  '이유 없이 짜증과 냉담함이 증가했다',
  '부부 관계가 갑자기 줄거나 기피한다',
  '출장 또는 모임이 잦아졌다',
  '통화나 문자를 숨기는 행동을 한다',
]

const METHODS = [
  { icon: Camera, title: '미행 및 잠복 조사', desc: '전문 장비를 갖춘 탐정이 합법적 범위 내에서 미행 및 잠복 조사를 실시합니다. 노출 없이 증거를 확보합니다.' },
  { icon: FileText, title: '영상·사진 증거 수집', desc: '법원에서 인정되는 방식으로 영상 및 사진 증거를 수집합니다. 촬영 시간, 장소, 상황을 기록한 조사 보고서도 첨부합니다.' },
  { icon: Shield, title: '신원 및 동선 파악', desc: '불륜 상대방의 신원과 만남 패턴을 파악합니다. 만남 장소, 빈도, 지속 기간 등을 체계적으로 기록합니다.' },
  { icon: Clock, title: '24시간 추적 가능', desc: '필요에 따라 24시간 연속 추적이 가능합니다. 긴급 상황 발생 시 즉시 대응하며 의뢰인에게 실시간 보고합니다.' },
]

const FAQ = [
  { q: '조사 비용은 얼마인가요?', a: '조사 난이도, 기간, 지역에 따라 다릅니다. 초기 상담 후 정확한 견적을 제시해드리며, 추가 비용은 발생하지 않습니다.' },
  { q: '조사 기간은 얼마나 걸리나요?', a: '일반적으로 1~3주 정도 소요됩니다. 상황에 따라 단기간 내 증거 확보가 가능할 수도 있습니다.' },
  { q: '증거가 법원에서 인정되나요?', a: '저희는 법원에서 채택되는 합법적인 방법으로만 증거를 수집합니다. 변호사와 협력하여 법적 효력을 검증합니다.' },
  { q: '조사 사실이 배우자에게 알려지나요?', a: '절대 알려지지 않습니다. 모든 조사는 노출 없이 진행되며 의뢰인 정보도 외부에 공개되지 않습니다.' },
  { q: '불륜이 아닌 것으로 확인되면 어떻게 되나요?', a: '결과에 관계없이 조사를 성실히 진행합니다. 불륜이 없다는 결과도 의뢰인에게 중요한 정보입니다.' },
]

export default function InfidelityPage() {
  return (
    <>
      <PageHeader title="배우자 불륜 조사" subtitle="법적 효력 있는 증거 수집 · 완벽한 비밀 보장 · 경찰 출신 전문가 직접 조사" />

      {/* 서비스 소개 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-accent text-sm tracking-widest uppercase mb-3">Infidelity Investigation</p>
              <h2 className="text-4xl font-bold font-serif text-primary mb-6">배우자의 외도가 의심되신다면</h2>
              <p className="text-textprimary leading-relaxed mb-4">배우자의 행동 변화로 불안하고 힘드신가요? 의심만으로는 아무것도 해결되지 않습니다. 경찰 출신 전문 탐정이 합법적이고 체계적인 방법으로 진실을 밝혀드립니다.</p>
              <p className="text-textprimary leading-relaxed mb-6">수집된 증거는 이혼 소송, 위자료 청구, 재산분할 등에 직접 활용할 수 있습니다. 모든 과정은 철저히 비밀이 보장됩니다.</p>
              <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-2 bg-accent text-white font-bold px-8 py-4 hover:brightness-95 transition-all duration-200 cursor-pointer">
                <Phone size={18} /> 무료 상담 전화
              </a>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-primary/5 border-l-4 border-accent p-8">
                <h3 className="font-bold text-primary font-serif text-xl mb-6 flex items-center gap-2"><AlertTriangle size={20} className="text-accent" /> 이런 징후가 있다면 의뢰하세요</h3>
                <ul className="space-y-3">
                  {SIGNS.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-textprimary">
                      <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" /> {s}
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
                    <div className="w-14 h-14 bg-primary flex items-center justify-center flex-shrink-0"><Icon size={24} className="text-accent" /></div>
                    <div><h3 className="font-bold text-primary text-lg mb-2">{m.title}</h3><p className="text-textsecondary text-sm leading-relaxed">{m.desc}</p></div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 조사 프로세스 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold font-serif text-primary mb-2">조사 진행 과정</h2>
            <div className="w-12 h-1 bg-accent mb-12" />
          </ScrollReveal>
          <div className="space-y-0">
            {[
              '무료 초기 상담 (전화/카카오톡)',
              '맞춤형 조사 계획 수립 및 비용 안내',
              '전문 탐정 조사 시작 (미행·잠복·증거 수집)',
              '중간 보고 및 의뢰인 확인',
              '최종 조사 결과 보고서 및 증거 제출',
              '법적 절차 대응 자문 (연계 변호사 소개)',
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
      <section className="py-20 bg-bgalt">
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
          <h2 className="text-3xl font-bold font-serif mb-4">지금 무료 상담을 받아보세요</h2>
          <p className="text-gray-300 mb-8">모든 상담은 비밀이 보장됩니다. 부담 없이 연락주세요.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-accent text-white font-bold px-10 py-4 hover:brightness-95 transition-all duration-200 cursor-pointer"><Phone size={18} /> 전화 상담</a>
            <a href={SITE.kakaoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white text-white px-10 py-4 hover:bg-white hover:text-primary transition-all duration-200 cursor-pointer">카카오톡 상담</a>
          </div>
        </div>
      </section>
    </>
  )
}
