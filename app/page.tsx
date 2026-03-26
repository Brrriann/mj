import Link from 'next/link'
import { Phone, MessageCircle, ChevronRight, BadgeCheck, ArrowRight } from 'lucide-react'
import HeroSection from '@/components/ui/HeroSection'
import TrustSection from '@/components/ui/TrustSection'
import { SITE } from '@/lib/constants'

const SERVICES = [
  {
    num: '01',
    title: '배우자 불륜 조사',
    desc: '배우자의 외도 여부를 법적으로 유효한 증거와 함께 확인해드립니다. 미행, 잠복, CCTV 분석 등 다양한 기법을 활용합니다.',
    detail: '법원 제출 가능한 증거 수집 · 24시간 추적 가능 · 철저한 비밀 유지',
    href: '/services/infidelity',
  },
  {
    num: '02',
    title: '소재/가출인 파악',
    desc: '연락이 끊긴 가족, 지인, 채무자의 현재 소재를 신속하게 파악해드립니다. 전직 경찰의 인적 네트워크를 활용합니다.',
    detail: '전국 단위 조사 가능 · 평균 2주 내 확인 · 소재지 및 생활 패턴 파악',
    href: '/services/missing-person',
  },
  {
    num: '03',
    title: '기업 신용조사',
    desc: '거래처, 파트너사, 투자 대상의 실제 신용도와 재무 실태를 철저히 조사합니다. 사기 피해를 사전에 예방하세요.',
    detail: '법인 실태 조사 · 대표자 신원 확인 · 재무 현황 분석',
    href: '/services/corporate',
  },
  {
    num: '04',
    title: '증거 수집',
    desc: '민사·형사 사건에 필요한 합법적인 증거를 수집해드립니다. 불법 촬영, 명예훼손, 사기 사건에 활용됩니다.',
    detail: '법원 인정 증거 · 영상/음성/문서 · 진술서 작성 지원',
    href: '/services/evidence',
  },
]

const STATS = [
  { value: '1,200+', label: '해결 사건' },
  { value: '20년+', label: '현장 경험' },
  { value: '98%', label: '의뢰인 만족도' },
  { value: '24시간', label: '상담 가능' },
]

const PROCESS = [
  { step: '01', title: '무료 초기 상담', desc: '전화 또는 카카오톡으로 사건 개요를 말씀해주세요. 비밀이 보장됩니다.' },
  { step: '02', title: '조사 계획 수립', desc: '의뢰 내용을 분석하여 최적의 조사 방법과 예상 기간을 안내드립니다.' },
  { step: '03', title: '전문가 조사 진행', desc: '경찰 출신 전문가가 합법적이고 체계적인 방법으로 조사를 진행합니다.' },
  { step: '04', title: '결과 보고서 제출', desc: '법적 효력 있는 증거와 함께 상세한 조사 결과 보고서를 제출합니다.' },
]

const REVIEWS = [
  { content: '배우자의 외도 사실을 법적 증거와 함께 확인받았습니다. 덕분에 이혼 소송에서 유리하게 진행할 수 있었고, 위자료도 제대로 받을 수 있었습니다. 끝까지 비밀을 지켜주셔서 정말 감사합니다.', author: '40대 여성 의뢰인', service: '배우자 불륜 조사', region: '서울' },
  { content: '2년째 연락이 끊겼던 채무자를 2주 만에 찾아주셨습니다. 전직 경찰이라 그런지 접근 방식이 달랐습니다. 소재지뿐 아니라 생활 패턴까지 파악해 주셔서 법적 절차 진행에 큰 도움이 됐습니다.', author: '50대 사업주 의뢰인', service: '소재 파악', region: '경기' },
  { content: '투자 전 거래처 실태를 조사받았는데, 알고 보니 페이퍼컴퍼니였습니다. 조사 덕분에 수억 원의 피해를 막을 수 있었습니다. 전문적이고 신속한 대응에 감사드립니다.', author: '60대 기업인 의뢰인', service: '기업 신용조사', region: '부산' },
]

export default function HomePage() {
  return (
    <>
      {/* 히어로 */}
      <HeroSection />

      {/* 숫자 통계 스트립 */}
      <section className="bg-accent">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="py-8 text-center border-r border-amber-400 last:border-0">
              <p className="text-3xl md:text-4xl font-bold font-serif text-white mb-1">{s.value}</p>
              <p className="text-amber-100 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 업무분야 — 좌우 교차 레이아웃 */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Services</p>
            <h2 className="text-4xl font-bold font-serif text-primary">업무 분야</h2>
            <div className="w-16 h-1 bg-accent mt-4" />
          </div>

          <div className="divide-y divide-gray-100">
            {SERVICES.map((s, i) => (
              <div key={s.num} className={`py-12 flex flex-col md:flex-row gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/3 flex-shrink-0">
                  <span className="text-8xl font-bold font-serif text-gray-100 leading-none block">{s.num}</span>
                  <h3 className="text-2xl font-bold font-serif text-primary -mt-6 relative">{s.title}</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-textprimary leading-relaxed mb-4">{s.desc}</p>
                  <p className="text-textsecondary text-sm mb-6">{s.detail}</p>
                  <Link href={s.href} className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-200 cursor-pointer">
                    자세히 보기 <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 왜 명진인가 */}
      <TrustSection />

      {/* 상담 프로세스 — 번호 단계 레이아웃 */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16 text-center">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">How It Works</p>
            <h2 className="text-4xl font-bold font-serif">상담부터 결과까지</h2>
            <p className="text-gray-400 mt-3">4단계로 진행되는 명진탐정사무소의 체계적인 조사 프로세스입니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            {/* 연결선 */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-accent/30" />
            {PROCESS.map((p) => (
              <div key={p.step} className="relative text-center px-6 py-4">
                <div className="w-20 h-20 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-6 bg-primary">
                  <span className="text-accent font-bold font-serif text-xl">{p.step}</span>
                </div>
                <h3 className="font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 의뢰인 후기 — 전체 너비 세로 스택 */}
      <section className="py-24 bg-bgalt">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-16 text-center">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Testimonials</p>
            <h2 className="text-4xl font-bold font-serif text-primary">의뢰인 후기</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4" />
          </div>
          <div className="space-y-8">
            {REVIEWS.map((r) => (
              <div key={r.author} className="border-l-4 border-accent pl-8 py-4">
                <p className="text-textprimary leading-relaxed text-lg mb-6 italic">&ldquo;{r.content}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-bold text-primary">{r.author}</p>
                    <p className="text-textsecondary text-sm">{r.service} · {r.region}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/cases/reviews" className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-white transition-all duration-200 font-medium cursor-pointer">
              더 많은 후기 보기 <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <BadgeCheck size={48} className="text-accent mx-auto mb-6" />
          <h2 className="text-4xl font-bold font-serif text-primary mb-4">지금 바로 무료 상담을 받아보세요</h2>
          <p className="text-textsecondary mb-4">모든 상담은 비밀이 보장됩니다.</p>
          <p className="text-textsecondary text-sm mb-10">초기 상담은 무료이며, 24시간 연락 가능합니다. 부담 없이 먼저 연락주세요.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-10 py-4 hover:bg-primary-dark transition-all duration-200 cursor-pointer">
              <Phone size={18} /> 전화 상담 {SITE.phone}
            </a>
            <a href={SITE.kakaoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#FEE500] text-[#3A1D1D] font-bold px-10 py-4 hover:brightness-95 transition-all duration-200 cursor-pointer">
              <MessageCircle size={18} /> 카카오톡 상담
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
