import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Shield, Eye, Lock, Award, Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = genMeta({
  title: '회사 소개',
  description: '경찰 출신 전문 탐정이 이끄는 명진탐정사무소를 소개합니다. 20년 수사 경력, 합법적 조사, 완벽한 비밀 보장.',
  pathname: '/about/company',
})

const VALUES = [
  {
    icon: Shield,
    title: '합법성',
    desc: '모든 조사는 합법적인 방법으로만 진행합니다. 불법 수집 증거는 법원에서 인정되지 않을 뿐 아니라 의뢰인에게도 법적 위험이 될 수 있습니다. 저희는 항상 법 테두리 안에서 움직입니다.',
  },
  {
    icon: Eye,
    title: '정확성',
    desc: '경찰 출신 탐정의 체계적인 수사 방법론을 적용합니다. 추측이나 짐작이 아닌, 확인된 사실만을 보고서에 담습니다. 잘못된 정보로 인한 2차 피해를 철저히 방지합니다.',
  },
  {
    icon: Lock,
    title: '비밀 보장',
    desc: '의뢰인의 정보와 조사 내용은 철저히 비밀이 보장됩니다. 계약 시 비밀 유지 협약을 체결하며, 어떠한 경우에도 의뢰인의 동의 없이 정보를 공개하지 않습니다.',
  },
  {
    icon: Award,
    title: '전문성',
    desc: '20년 이상의 경찰 수사 경력과 탐정 자격을 갖춘 전문가가 직접 조사를 담당합니다. 외주나 하청 없이 대표 탐정이 모든 사건을 직접 관리합니다.',
  },
]

const HISTORY = [
  { year: '2003', event: '서울지방경찰청 수사과 배속, 강력범죄 수사 시작' },
  { year: '2008', event: '경제범죄·사기 전담 수사팀 근무, 기업 수사 전문성 확보' },
  { year: '2013', event: '실종·가출인 전담 수사 경험 — 소재 파악 기술 체계화' },
  { year: '2018', event: '수사 경력 15년 — 강력·경제·실종 전 분야 경험 완성' },
  { year: '2021', event: '공인탐정 자격 취득, 명진탐정사무소 설립' },
  { year: '2023', event: '누적 해결 사건 800건 돌파, 의뢰인 만족도 98% 달성' },
  { year: '2025', event: '누적 해결 사건 1,200건 돌파, 서울·경기 최다 의뢰 탐정사무소' },
]

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        title="회사 소개"
        subtitle="경찰 출신 전문 탐정이 설립한 신뢰할 수 있는 조사 기관"
      />

      {/* 소개 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <p className="text-accent text-sm tracking-widest uppercase mb-3">About Us</p>
              <h2 className="text-4xl font-bold font-serif text-primary mb-6">명진탐정사무소</h2>
              <p className="text-textprimary leading-relaxed mb-5">
                명진탐정사무소는 20년 이상의 경찰 수사 경력을 보유한 공인탐정이 설립한 조사 전문 기관입니다.
                강력범죄, 경제범죄, 실종 수사 등 다양한 분야에서 쌓은 현장 경험을 바탕으로
                의뢰인의 문제를 가장 빠르고 정확하게 해결합니다.
              </p>
              <p className="text-textprimary leading-relaxed mb-5">
                저희는 단순히 정보를 제공하는 것에 그치지 않습니다. 법적 절차 대응, 변호사 연계, 후속 조치까지
                의뢰인이 최종 목표를 달성할 수 있도록 처음부터 끝까지 함께합니다.
              </p>
              <div className="border-l-4 border-accent pl-6 py-2 bg-bgalt">
                <p className="text-textprimary font-medium leading-relaxed">
                  &ldquo;의뢰인의 아픔을 내 것으로 여기고, 진실을 밝히는 일에 최선을 다합니다.&rdquo;
                </p>
                <p className="text-accent text-sm mt-2 font-medium">— 명진탐정사무소 대표</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '1,200+', label: '해결 사건' },
                  { value: '20+', label: '수사 경력 (년)' },
                  { value: '98%', label: '의뢰인 만족도' },
                  { value: '전국', label: '출장 가능 지역' },
                ].map((s) => (
                  <div key={s.label} className="bg-bgalt border border-gray-200 p-6 text-center">
                    <p className="text-3xl font-bold font-serif text-accent mb-2">{s.value}</p>
                    <p className="text-textsecondary text-sm">{s.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="py-20 bg-bgalt">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold font-serif text-primary mb-2">핵심 가치</h2>
            <div className="w-12 h-1 bg-accent mb-12" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((v, i) => {
              const Icon = v.icon
              return (
                <ScrollReveal key={v.title} delay={0.1 * i}>
                  <div className="flex gap-5">
                    <div className="w-14 h-14 bg-primary flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-2">{v.title}</h3>
                      <p className="text-textsecondary text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 연혁 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold font-serif text-primary mb-2">연혁</h2>
            <div className="w-12 h-1 bg-accent mb-12" />
          </ScrollReveal>
          <div className="space-y-0">
            {HISTORY.map((h, i) => (
              <ScrollReveal key={h.year} delay={0.08 * i}>
                <div className="flex gap-8 py-5 border-b border-gray-100 last:border-0 items-center">
                  <span className="text-accent font-bold font-serif text-xl flex-shrink-0 w-16">{h.year}</span>
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <p className="text-textprimary">{h.event}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 업무 분야 요약 */}
      <section className="py-20 bg-bgalt">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold font-serif text-primary mb-2">주요 업무 분야</h2>
            <div className="w-12 h-1 bg-accent mb-12" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '배우자 불륜 조사', href: '/services/infidelity', desc: '미행·잠복·증거 수집으로 진실을 밝혀드립니다.' },
              { title: '소재/가출인 파악', href: '/services/missing-person', desc: '연락 끊긴 가족·채무자를 신속히 찾아드립니다.' },
              { title: '기업 신용조사', href: '/services/corporate', desc: '계약·투자 전 사기 피해를 사전에 방지합니다.' },
              { title: '증거 수집', href: '/services/evidence', desc: '소송 승소에 필요한 합법적 증거를 확보합니다.' },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <a href={item.href} className="block border border-gray-200 p-6 hover:border-accent hover:shadow-md transition-all duration-300 cursor-pointer group">
                  <h3 className="font-bold text-primary font-serif mb-3 group-hover:text-accent transition-colors duration-200">{item.title}</h3>
                  <p className="text-textsecondary text-sm leading-relaxed">{item.desc}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif mb-4">무료 상담을 받아보세요</h2>
          <p className="text-gray-300 mb-8">어떤 상황이든 솔직하게 말씀해 주시면 해결 방법을 찾아드립니다.</p>
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
