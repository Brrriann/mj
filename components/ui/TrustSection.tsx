'use client'
import { Shield, Lock, Scale, Clock, CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const CREDENTIALS = [
  '경찰청 공인 민간조사 자격 보유',
  '전직 경찰관 출신 (형사 수사 전문)',
  '20년 이상 조사 현장 경력',
  '법원 제출 증거 전문 수집 경험',
  '개인정보보호법 준수 조사 진행',
  '전국 탐정 협회 정회원',
]

const REASONS = [
  { icon: Shield, title: '경찰 출신 전문가', desc: '전직 경찰관 출신으로 수사 기법, 법적 절차, 증거 수집 방법을 완벽하게 이해합니다. 일반 탐정과 차원이 다른 전문성을 제공합니다.' },
  { icon: Lock, title: '완벽한 비밀 보장', desc: '의뢰인의 이름, 사건 내용, 조사 결과 — 모든 정보가 외부에 절대 공개되지 않습니다. 상담 단계에서도 동일하게 적용됩니다.' },
  { icon: Scale, title: '법적 효력 있는 증거', desc: '불법 수집 증거는 법원에서 인정받지 못합니다. 저희는 법원에서 채택되는 합법적 방법만 사용하며 모든 증거에 법적 효력을 부여합니다.' },
  { icon: Clock, title: '신속하고 투명한 진행', desc: '24시간 상담 가능, 긴급 상황 당일 조사 시작. 조사 진행 상황은 수시로 보고드리며 비용도 사전에 투명하게 안내합니다.' },
]

export default function TrustSection() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <ScrollReveal direction="left">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Why Choose Us</p>
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">왜 명진탐정사무소인가요?</h2>
            <div className="w-16 h-1 bg-accent mb-12" />
            <div className="space-y-10">
              {REASONS.map((r) => {
                const Icon = r.icon
                return (
                  <div key={r.title} className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary flex items-center justify-center">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-2">{r.title}</h3>
                      <p className="text-textsecondary text-sm leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="glass-dark p-10 sticky top-24">
              <h3 className="text-accent font-bold text-xl mb-8 font-serif">대표 탐정 자격 사항</h3>
              <ul className="space-y-5 mb-10">
                {CREDENTIALS.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 text-sm leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/10 pt-8">
                <p className="text-gray-400 text-sm leading-relaxed italic">
                  &ldquo;경찰로서 수십 년간 범인을 추적하고 증거를 수집했습니다. 이제 그 경험을 의뢰인의 진실을 찾는 데 사용하겠습니다.&rdquo;
                </p>
                <p className="text-accent font-bold mt-4">— 명진탐정사무소 대표</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
