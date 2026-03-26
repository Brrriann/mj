import Link from 'next/link'
import { Phone, MessageCircle, ChevronRight, ArrowRight, BadgeCheck, Quote } from 'lucide-react'
import HeroSection from '@/components/ui/HeroSection'
import TrustSection from '@/components/ui/TrustSection'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CountUp from '@/components/ui/CountUp'
import { SITE } from '@/lib/constants'

const SERVICES = [
  {
    num: '01',
    title: '배우자 불륜 조사',
    desc: '배우자의 외도 여부를 법적으로 유효한 증거와 함께 확인해드립니다. 미행, 잠복, CCTV 분석, 통신 내역 추적 등 다양한 합법적 기법을 활용합니다.',
    detail: '법원 제출 가능 증거 수집 · 24시간 추적 가능 · 철저한 비밀 유지 · 평균 조사 기간 1~3주',
    href: '/services/infidelity',
    color: 'from-primary/10 to-transparent',
  },
  {
    num: '02',
    title: '소재/가출인 파악',
    desc: '연락이 끊긴 가족, 지인, 채무자의 현재 소재를 신속하게 파악해드립니다. 전직 경찰의 광범위한 인적 네트워크와 데이터베이스를 활용합니다.',
    detail: '전국 단위 조사 · 평균 2주 내 확인 · 소재지 및 생활 패턴 파악 · 법적 절차 연계 지원',
    href: '/services/missing-person',
    color: 'from-accent/10 to-transparent',
  },
  {
    num: '03',
    title: '기업 신용조사',
    desc: '거래처, 파트너사, 투자 대상의 실제 신용도와 재무 실태를 철저히 조사합니다. 사기 피해를 사전에 예방하고 안전한 비즈니스 환경을 만드세요.',
    detail: '법인 실태 조사 · 대표자 신원 확인 · 재무 현황 분석 · 사기 이력 조회',
    href: '/services/corporate',
    color: 'from-primary/10 to-transparent',
  },
  {
    num: '04',
    title: '증거 수집',
    desc: '민사·형사 사건에 필요한 합법적인 증거를 수집해드립니다. 불법 촬영, 명예훼손, 사기, 폭행 등 다양한 사건 유형에 대응합니다.',
    detail: '법원 인정 증거 · 영상/음성/문서 수집 · 진술서 작성 지원 · 전문가 증언 가능',
    href: '/services/evidence',
    color: 'from-accent/10 to-transparent',
  },
]

const STATS = [
  { value: 1200, suffix: '+', label: '해결 사건 수' },
  { value: 20, suffix: '년+', label: '조사 경력' },
  { value: 98, suffix: '%', label: '의뢰인 만족도' },
  { value: 24, suffix: '시간', label: '상담 가능' },
]

const PROCESS = [
  { step: '01', title: '무료 초기 상담', desc: '전화 또는 카카오톡으로 사건 개요를 말씀해주세요. 모든 상담은 비밀이 보장되며, 초기 상담은 무료입니다.' },
  { step: '02', title: '맞춤 조사 계획', desc: '의뢰 내용을 면밀히 분석하여 최적의 조사 방법, 예상 기간, 비용을 투명하게 안내드립니다.' },
  { step: '03', title: '전문가 조사 진행', desc: '경찰 출신 전문 탐정이 합법적이고 체계적인 방법으로 조사를 진행합니다. 진행 상황은 수시로 보고됩니다.' },
  { step: '04', title: '결과 보고서 제출', desc: '법적 효력 있는 증거와 함께 상세한 조사 결과 보고서를 제출합니다. 법적 절차 진행 시 전문가 자문도 제공합니다.' },
]

const REVIEWS = [
  { content: '배우자의 외도 사실을 법적 증거와 함께 확인받았습니다. 덕분에 이혼 소송에서 유리하게 진행되었고 위자료도 제대로 받을 수 있었습니다. 처음엔 의심스러웠는데 결과물이 정말 완벽했습니다.', author: '40대 여성', service: '배우자 불륜 조사', region: '서울' },
  { content: '2년간 연락이 끊긴 채무자를 불과 11일 만에 찾아주셨습니다. 소재지뿐 아니라 직장과 생활 패턴까지 파악해 주셔서 법적 절차 진행에 큰 도움이 됐습니다.', author: '50대 사업주', service: '소재 파악', region: '경기' },
  { content: '투자 전 거래처 신용조사를 맡겼는데, 해당 업체가 사실상 페이퍼컴퍼니임을 밝혀주셨습니다. 수억 원의 피해를 막을 수 있었습니다. 빠른 결과에 정말 감사합니다.', author: '60대 기업인', service: '기업 신용조사', region: '부산' },
]

const BENTO_FEATURES = [
  { col: 'col-span-2', bg: 'bg-primary text-white', title: '경찰 출신 20년 경력', desc: '전직 형사 출신으로 국내 최고 수준의 조사 전문성' },
  { col: 'col-span-1', bg: 'bg-accent text-white', title: '98% 만족도', desc: '의뢰인 사후 설문 기준' },
  { col: 'col-span-1', bg: 'bg-bgalt', title: '100% 비밀 보장', desc: '상담부터 결과까지 외부 유출 없음' },
  { col: 'col-span-1', bg: 'bg-bgalt', title: '24시간 상담', desc: '언제든 연락 가능' },
  { col: 'col-span-2', bg: 'bg-primary/5 border border-primary/20', title: '전국 출장 조사 가능', desc: '서울·경기·부산·대구·인천·광주 등 전국 어디든 출장 조사를 진행합니다.' },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* 카운터 통계 스트립 */}
      <section className="bg-accent">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="py-10 text-center border-r border-amber-400/40 last:border-0">
              <p className="text-3xl md:text-4xl font-bold font-serif text-white mb-1">
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="text-amber-100 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 업무분야 — 좌우 교차 + 3D 효과 */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="mb-20">
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Services</p>
              <h2 className="text-5xl font-bold font-serif text-primary">업무 분야</h2>
              <div className="w-16 h-1 bg-accent mt-4" />
            </div>
          </ScrollReveal>

          <div className="divide-y divide-gray-100">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.num} delay={0.1 * i} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`py-16 flex flex-col md:flex-row gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className={`bg-gradient-to-br ${s.color} p-8 rounded-none card-3d`}>
                      <span className="text-9xl font-bold font-serif text-primary/10 leading-none block">{s.num}</span>
                      <h3 className="text-2xl font-bold font-serif text-primary mt-2">{s.title}</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-textprimary leading-relaxed mb-4 text-lg">{s.desc}</p>
                    <p className="text-textsecondary text-sm mb-8 leading-relaxed">{s.detail}</p>
                    <Link href={s.href} className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all duration-300 cursor-pointer group">
                      자세히 보기 <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 벤토 그리드 — 핵심 강점 */}
      <section className="py-20 bg-bgalt">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="mb-12">
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Strengths</p>
              <h2 className="text-4xl font-bold font-serif text-primary">명진만의 강점</h2>
              <div className="w-16 h-1 bg-accent mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-3 gap-4 auto-rows-[180px]">
            {BENTO_FEATURES.map((f, i) => (
              <ScrollReveal key={f.title} delay={0.08 * i} className={f.col}>
                <div className={`${f.bg} p-8 h-full flex flex-col justify-end card-3d`}>
                  <h3 className="font-bold text-xl font-serif mb-2">{f.title}</h3>
                  <p className="text-sm opacity-75">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 왜 명진인가 */}
      <TrustSection />

      {/* 상담 프로세스 — Sticky 섹션 */}
      <section className="py-28 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="mb-20 text-center">
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">How It Works</p>
              <h2 className="text-4xl font-bold font-serif">상담부터 결과까지</h2>
              <p className="text-gray-400 mt-3">4단계의 체계적인 조사 프로세스</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-accent/20 via-accent to-accent/20" />
            {PROCESS.map((p, i) => (
              <ScrollReveal key={p.step} delay={0.15 * i} direction="up">
                <div className="text-center px-6 py-4">
                  <div className="w-20 h-20 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-6 bg-primary pulse-gold">
                    <span className="text-accent font-bold font-serif text-xl">{p.step}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 의뢰인 후기 — 인용 스타일 */}
      <section className="py-28 bg-bgalt">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Testimonials</p>
              <h2 className="text-4xl font-bold font-serif text-primary">의뢰인 후기</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="space-y-10">
            {REVIEWS.map((r, i) => (
              <ScrollReveal key={r.author} delay={0.1 * i}>
                <div className="relative pl-10 py-6">
                  <Quote size={32} className="absolute left-0 top-4 text-accent/30" />
                  <p className="text-textprimary leading-relaxed text-lg mb-6 italic">{r.content}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-px bg-accent" />
                    <div>
                      <p className="font-bold text-primary">{r.author}</p>
                      <p className="text-textsecondary text-sm">{r.service} · {r.region}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-14">
            <Link href="/cases/reviews" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-10 py-4 hover:bg-primary hover:text-white transition-all duration-300 font-medium cursor-pointer">
              전체 후기 보기 <ChevronRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="py-24 bg-white border-t-4 border-accent">
        <ScrollReveal className="max-w-3xl mx-auto px-4 text-center">
          <BadgeCheck size={52} className="text-accent mx-auto mb-6 float-anim" />
          <h2 className="text-5xl font-bold font-serif text-primary mb-4">지금 바로 무료 상담</h2>
          <p className="text-textsecondary mb-3 text-lg">모든 상담은 비밀이 보장됩니다.</p>
          <p className="text-textsecondary text-sm mb-12">초기 상담은 무료이며, 24시간 연락 가능합니다. 결과가 없으면 비용을 청구하지 않습니다.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center justify-center gap-3 bg-primary text-white font-bold px-12 py-5 text-lg hover:bg-primary-dark transition-all duration-200 cursor-pointer">
              <Phone size={20} /> {SITE.phone}
            </a>
            <a href={SITE.kakaoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#FEE500] text-[#3A1D1D] font-bold px-12 py-5 text-lg hover:brightness-95 transition-all duration-200 cursor-pointer">
              <MessageCircle size={20} /> 카카오톡 상담
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
