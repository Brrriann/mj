import { Shield, Lock, Scale, Phone } from 'lucide-react'

const TRUST_POINTS = [
  { icon: Shield, title: '경찰 출신 전문가', desc: '20년 이상 현장 경험의 전직 경찰 출신 탐정이 직접 조사합니다.' },
  { icon: Lock, title: '완벽한 비밀 보장', desc: '의뢰인의 모든 정보와 사건 내용은 철저히 비밀이 유지됩니다.' },
  { icon: Scale, title: '법적 효력 있는 증거', desc: '법원에서 인정되는 합법적인 방법으로만 증거를 수집합니다.' },
  { icon: Phone, title: '24시간 상담 가능', desc: '언제든지 전화 또는 카카오톡으로 빠른 상담을 받으실 수 있습니다.' },
]

export default function TrustSection() {
  return (
    <section className="py-20 bg-bgalt">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold font-serif text-primary mb-3">왜 명진탐정사무소인가요?</h2>
          <div className="w-16 h-1 bg-accent" />
        </div>
        <div className="divide-y divide-gray-200">
          {TRUST_POINTS.map((point) => {
            const Icon = point.icon
            return (
              <div key={point.title} className="flex items-start gap-6 py-8">
                <div className="text-primary flex-shrink-0 mt-1">
                  <Icon size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">{point.title}</h3>
                  <p className="text-textsecondary text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
