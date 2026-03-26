import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { BadgeCheck, Briefcase, Quote, Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = genMeta({
  title: '대표 소개',
  description: '경찰 출신 공인탐정 명진탐정사무소 대표를 소개합니다. 20년 수사 경력, 강력·경제·실종 수사 전문가.',
  pathname: '/about/ceo',
})

const CAREER = [
  { period: '2003 – 2008', role: '서울지방경찰청 수사과', desc: '강력범죄 수사 전담. 살인·강도·폭력 사건 수사 담당. 범인 추적 및 잠복 수사 전문성 확립.' },
  { period: '2008 – 2014', role: '경제범죄 수사팀', desc: '사기·횡령·배임 등 경제범죄 수사 전담. 기업 분식회계, 사기 투자 사건 수사. 증거 수집 및 분석 역량 강화.' },
  { period: '2014 – 2018', role: '실종수사팀', desc: '실종·가출인 수사 전담. 광범위한 네트워크와 데이터베이스 활용으로 수백 명의 실종자 소재 파악. 가족 상봉 성사.' },
  { period: '2018 – 2021', role: '수사 컨설팅 및 자격 취득', desc: '경찰 퇴직 후 공인탐정 자격 취득. 법률 전문가 및 변호사와의 협력 네트워크 구축. 명진탐정사무소 설립 준비.' },
  { period: '2021 – 현재', role: '명진탐정사무소 대표', desc: '배우자 불륜 조사, 소재 파악, 기업 신용조사, 증거 수집 전 분야 직접 담당. 누적 의뢰 1,200건 이상 해결.' },
]

const EXPERTISE = [
  '배우자 외도 증거 수집 및 이혼 소송 지원',
  '실종자·채무자·가출인 소재 파악',
  '기업 신용조사 및 사기 피해 예방',
  '민·형사 소송을 위한 합법적 증거 수집',
  '스토킹·접근금지 가처분 증거 확보',
  '법원 제출용 조사 보고서 작성',
]

export default function CeoPage() {
  return (
    <>
      <PageHeader
        title="대표 소개"
        subtitle="20년 경찰 수사 경력, 경찰청 출신 공인탐정"
      />

      {/* 대표 소개 메인 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <ScrollReveal direction="left" className="lg:col-span-2">
              {/* 프로필 영역 */}
              <div className="bg-bgalt border border-gray-200 p-8 text-center">
                <div className="w-32 h-32 bg-primary/10 border-2 border-accent mx-auto mb-6 flex items-center justify-center">
                  <BadgeCheck size={48} className="text-accent" />
                </div>
                <h2 className="text-2xl font-bold font-serif text-primary mb-1">대표 탐정</h2>
                <p className="text-accent font-medium text-sm mb-4">공인탐정 · 전 경찰청 수사관</p>
                <div className="text-left space-y-2 mt-6 border-t border-gray-200 pt-6">
                  {[
                    '공인탐정 자격증 보유',
                    '前 서울지방경찰청 수사관',
                    '수사 경력 20년 이상',
                    '해결 사건 1,200건+',
                  ].map((item) => (
                    <p key={item} className="flex items-center gap-2 text-sm text-textprimary">
                      <BadgeCheck size={14} className="text-accent flex-shrink-0" /> {item}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-3">
              <p className="text-accent text-sm tracking-widest uppercase mb-3">CEO Introduction</p>
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">진실을 밝히는 일에 인생을 걸었습니다</h2>
              <p className="text-textprimary leading-relaxed mb-5">
                20년간 경찰관으로 근무하면서 수많은 피해자를 만났습니다. 증거가 없어서, 법을 몰라서, 방법을 몰라서
                억울하게 피해를 당하고도 아무것도 할 수 없었던 분들입니다. 그 분들을 위해 무언가를 해야겠다는 생각으로
                명진탐정사무소를 설립했습니다.
              </p>
              <p className="text-textprimary leading-relaxed mb-5">
                경찰 수사와 민간 탐정 조사는 다릅니다. 경찰은 범죄를 수사하지만, 탐정은 의뢰인의 문제를 해결합니다.
                20년의 수사 경험이 탐정 업무에서 얼마나 강력한 무기가 되는지, 매일 의뢰인의 문제를 해결하면서 실감하고 있습니다.
              </p>
              <div className="border-l-4 border-accent pl-6 py-3 bg-bgalt mb-6">
                <Quote size={20} className="text-accent/30 mb-2" />
                <p className="text-textprimary leading-relaxed font-medium">
                  &ldquo;의뢰인이 밤잠을 설칠 때, 저도 함께 자지 않습니다. 사건이 해결될 때까지 포기하지 않겠다는 것이 제 약속입니다.&rdquo;
                </p>
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

      {/* 경력 타임라인 */}
      <section className="py-20 bg-bgalt">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold font-serif text-primary mb-2">경력 및 이력</h2>
            <div className="w-12 h-1 bg-accent mb-12" />
          </ScrollReveal>
          <div className="space-y-8">
            {CAREER.map((c, i) => (
              <ScrollReveal key={c.period} delay={0.1 * i}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent mt-1" />
                  <div className="flex-1 pb-8 border-b border-gray-200 last:border-0">
                    <div className="flex flex-wrap gap-4 items-center mb-2">
                      <span className="text-accent text-sm font-bold">{c.period}</span>
                      <div className="flex items-center gap-2">
                        <Briefcase size={14} className="text-primary" />
                        <span className="font-bold text-primary">{c.role}</span>
                      </div>
                    </div>
                    <p className="text-textsecondary text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 철학 */}
      <section className="py-20">
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
          <h2 className="text-3xl font-bold font-serif mb-4">직접 상담하세요</h2>
          <p className="text-gray-300 mb-8">대표 탐정이 직접 상담합니다. 어떤 사건이든 솔직하게 말씀해 주세요.</p>
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
