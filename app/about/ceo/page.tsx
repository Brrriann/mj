import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { BadgeCheck, Briefcase, Quote, Phone, Shield, Star } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = genMeta({
  title: '대표 소개',
  description: '전직 경찰 출신 대표탐정 김민재. 서울경찰청 대통령 경호경찰 출신, 법무법인·노무법인 자문위원 역임.',
  pathname: '/about/ceo',
})

const CAREER = [
  {
    category: '경찰 경력',
    color: 'bg-primary',
    items: [
      { role: '서울 영등포경찰서 현장경찰', desc: '지역 현장 경찰관으로 시민 안전 보호 및 범죄 예방 활동. 각종 사건 수사 및 현장 대응 경험 축적.' },
      { role: '서울 용산경찰서 대통령 교통경호경찰', desc: '대통령 동선에 따른 교통 통제 및 경호 지원. 최고 수준의 보안 프로토콜 적용 및 VIP 경호 전문성 보유.' },
      { role: '서울 경찰청 제5기동단 대통령 경호지원경찰', desc: '서울경찰청 직속 기동단으로서 국가 최고 지도자 경호 지원. 위기 대응 및 상황 판단 능력 고도화.' },
      { role: '서울 관악경찰서 수사팀', desc: '수사 전담팀 근무. 각종 형사 사건 수사 진행, 증거 수집 및 피의자 검거. 민간 조사에 직접 적용되는 실전 수사 역량 완성.' },
    ],
  },
  {
    category: '법무·전문 자문',
    color: 'bg-accent',
    items: [
      { role: '법무법인 인율 전문·자문위원', desc: '법률 전문가들과의 협력 네트워크 구축. 탐정 조사와 법률 절차의 연계, 법원 제출용 증거 수집 기준 정립.' },
      { role: '노무법인 권익 자문위원', desc: '노동·고용 관련 조사 자문. 직장 내 부정 행위, 횡령, 비위 조사 등 기업 내부 조사 분야 협력.' },
      { role: '직진법무사사무소 자문위원', desc: '법무사 실무와 연계한 민사·가사 사건 증거 수집 자문. 이혼 소송, 재산 분쟁 등 다양한 민사 분야 협력.' },
    ],
  },
]

const EXPERTISE = [
  '배우자 외도 증거 수집 및 이혼 소송 지원',
  '실종자·채무자·가출인 소재 파악',
  '기업 신용조사 및 사기 피해 예방',
  '민·형사 소송을 위한 합법적 증거 수집',
  '스토킹·접근금지 가처분 증거 확보',
  '법원 제출용 조사 보고서 작성',
]

const CREDENTIALS = [
  { icon: Shield, label: '탐정사 1급 자격증', sub: '등록번호 2023-003035' },
  { icon: BadgeCheck, label: '대통령 경호 경찰 출신', sub: '서울 용산·경찰청 제5기동단' },
  { icon: Star, label: '3개 법무·노무 기관 자문위원', sub: '법무법인인율 · 노무법인권익 · 직진법무사' },
  { icon: Briefcase, label: '서울 관악경찰서 수사팀', sub: '형사 수사 전문 경력' },
]

export default function CeoPage() {
  return (
    <>
      <PageHeader
        title="대표 소개"
        subtitle="전직 경찰 출신 대표탐정 김민재"
      />

      {/* 대표 소개 메인 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <ScrollReveal direction="left" className="lg:col-span-2">
              {/* 프로필 카드 */}
              <div className="bg-primary text-white p-8 text-center relative overflow-hidden">
                {/* 배경 패턴 */}
                <div className="absolute inset-0 opacity-5">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="ceo-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#C9A84C" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#ceo-grid)" />
                  </svg>
                </div>
                <div className="relative z-10">
                  {/* 배지 아이콘 */}
                  <div className="w-28 h-28 border-2 border-accent mx-auto mb-6 flex items-center justify-center bg-white/5">
                    <Shield size={44} className="text-accent" />
                  </div>
                  <div className="inline-block bg-accent/20 text-accent text-xs px-3 py-1 mb-3 tracking-widest uppercase">
                    전직 경찰 출신
                  </div>
                  <h2 className="text-3xl font-bold font-serif mb-1">김민재</h2>
                  <p className="text-gray-300 text-sm mb-6">대표탐정 · 탐정사 1급</p>
                  <div className="text-left space-y-3 border-t border-white/20 pt-6">
                    {CREDENTIALS.map((c) => {
                      const Icon = c.icon
                      return (
                        <div key={c.label} className="flex items-start gap-3">
                          <Icon size={14} className="text-accent flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-white font-medium">{c.label}</p>
                            <p className="text-xs text-gray-400">{c.sub}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-3">
              <p className="text-accent text-sm tracking-widest uppercase mb-3">CEO Introduction</p>
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">대통령 경호 출신 탐정이 직접 해결합니다</h2>
              <p className="text-textprimary leading-relaxed mb-5">
                서울 경찰청 제5기동단 대통령 경호지원경찰, 용산경찰서 대통령 교통경호경찰을 거치며 대한민국
                최고 수준의 보안·경호 체계를 몸으로 익혔습니다. 현장 경찰에서 시작해 수사팀에 이르기까지
                다양한 분야의 실전 경험을 쌓았습니다.
              </p>
              <p className="text-textprimary leading-relaxed mb-5">
                퇴직 이후에는 법무법인 인율, 노무법인 권익, 직진법무사사무소의 자문위원으로 활동하며
                법률 전문가들과의 폭넓은 협력 네트워크를 구축했습니다. 단순한 조사에서 그치지 않고
                법적 효력이 있는 증거와 결과물을 의뢰인에게 제공하는 것이 저의 원칙입니다.
              </p>
              <div className="border-l-4 border-accent pl-6 py-3 bg-bgalt mb-6">
                <Quote size={20} className="text-accent/30 mb-2" />
                <p className="text-textprimary leading-relaxed font-medium">
                  &ldquo;경찰에서 배운 것은 진실은 반드시 드러난다는 것입니다. 명진탐정사무소는 그 진실을
                  의뢰인을 위해 찾아드립니다.&rdquo;
                </p>
                <p className="text-accent text-sm mt-2 font-semibold">— 대표탐정 김민재</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {EXPERTISE.map((e) => (
                  <span key={e} className="text-xs bg-primary/5 text-primary border border-primary/20 px-3 py-1">{e}</span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 경력 타임라인 — 카테고리별 */}
      <section className="py-20 bg-bgalt">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-accent text-sm tracking-widest uppercase mb-2">Career</p>
            <h2 className="text-3xl font-bold font-serif text-primary mb-2">주요 경력</h2>
            <div className="w-12 h-1 bg-accent mb-12" />
          </ScrollReveal>

          <div className="space-y-16">
            {CAREER.map((cat, ci) => (
              <ScrollReveal key={cat.category} delay={0.1 * ci}>
                <div className="flex gap-4 items-start mb-6">
                  <div className={`${cat.color} text-white text-xs font-bold px-4 py-1 tracking-wider`}>
                    {cat.category}
                  </div>
                </div>
                <div className="space-y-6 ml-4 border-l-2 border-gray-200 pl-8">
                  {cat.items.map((item, i) => (
                    <ScrollReveal key={item.role} delay={0.08 * i}>
                      <div className="relative">
                        <div className="absolute -left-10 top-1.5 w-4 h-4 rounded-full bg-accent border-2 border-white" />
                        <div className="flex items-start gap-3 mb-1">
                          <Briefcase size={14} className="text-primary mt-0.5 flex-shrink-0" />
                          <h3 className="font-bold text-primary">{item.role}</h3>
                        </div>
                        <p className="text-textsecondary text-sm leading-relaxed pl-5">{item.desc}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 협력 기관 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-accent text-sm tracking-widest uppercase mb-2">Partners</p>
            <h2 className="text-3xl font-bold font-serif text-primary mb-2">협력 기관</h2>
            <div className="w-12 h-1 bg-accent mb-4" />
            <p className="text-textsecondary mb-12">법적 효력 있는 조사를 위해 전문 법무·노무 기관과 긴밀히 협력합니다.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: '법무법인 인율',
                role: '전문·자문위원',
                desc: '민사·형사·가사 소송 전반에 걸친 법률 자문. 탐정 조사 결과물의 법적 효력 검토 및 소송 연계.',
                color: 'border-primary',
                tag: 'Law Firm',
              },
              {
                name: '노무법인 권익',
                role: '자문위원',
                desc: '직장 내 부정 행위, 횡령·비위, 직원 신원 조사 등 기업 관련 조사 분야 협력.',
                color: 'border-accent',
                tag: 'Labor Firm',
              },
              {
                name: '직진법무사사무소',
                role: '자문위원',
                desc: '이혼·재산 분쟁·채권 회수 등 민사 관련 증거 수집 및 서류 작성 지원 협력.',
                color: 'border-primary',
                tag: 'Legal Office',
              },
            ].map((p) => (
              <ScrollReveal key={p.name}>
                <div className={`border-t-4 ${p.color} bg-bgalt p-6 h-full`}>
                  <div className="text-xs text-accent font-medium tracking-wider mb-3">{p.tag}</div>
                  <h3 className="text-xl font-bold font-serif text-primary mb-1">{p.name}</h3>
                  <p className="text-accent text-xs font-medium mb-4">{p.role}</p>
                  <p className="text-textsecondary text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 조사 철학 */}
      <section className="py-20 bg-bgalt">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold font-serif text-primary mb-2">조사 철학</h2>
            <div className="w-12 h-1 bg-accent mb-12" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '의뢰인 우선', desc: '모든 결정의 기준은 의뢰인의 이익입니다. 조사 결과가 의뢰인에게 불리하더라도 사실 그대로 전달합니다. 거짓 희망을 주지 않습니다.' },
              { title: '합법적 수사', desc: '불법 수사는 증거 무효화는 물론 의뢰인에게도 법적 책임이 생길 수 있습니다. 모든 조사는 법적 유효성을 먼저 검토하고 시작합니다.' },
              { title: '완벽한 비밀', desc: '의뢰인의 정보는 어떠한 경우에도 외부에 공개하지 않습니다. 조사가 끝난 후에도 관련 자료는 안전하게 관리하거나 폐기합니다.' },
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

      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-accent text-sm tracking-widest uppercase mb-3">Direct Consultation</p>
          <h2 className="text-3xl font-bold font-serif mb-4">대표탐정 김민재와 직접 상담</h2>
          <p className="text-gray-300 mb-8">대표가 직접 상담하고 직접 조사합니다. 어떤 사건이든 솔직하게 말씀해 주세요.</p>
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
