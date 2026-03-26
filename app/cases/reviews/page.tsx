import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Quote, Star } from 'lucide-react'

export const metadata = genMeta({
  title: '의뢰인 후기',
  description: '명진탐정사무소 실제 의뢰인들의 생생한 후기입니다. 배우자 불륜 조사, 소재 파악, 기업 신용조사, 증거 수집 사례들.',
  pathname: '/cases/reviews',
})

const REVIEWS = [
  {
    id: 1,
    service: '배우자 불륜 조사',
    rating: 5,
    content: '남편의 잦은 야근과 출장이 의심스러워 의뢰했습니다. 2주간의 조사 끝에 불륜 사실을 법원에 제출 가능한 증거와 함께 확인받았습니다. 이혼 소송에서 위자료 5,000만 원을 받아내는 데 결정적인 역할을 했습니다. 처음엔 정말 힘들었지만 명진탐정사무소 덕분에 새 출발을 할 수 있었습니다.',
    author: '40대 여성 A씨',
    region: '서울 강남구',
    date: '2025년 11월',
  },
  {
    id: 2,
    service: '소재/가출인 파악',
    rating: 5,
    content: '3년간 연락이 끊긴 채무자를 찾아달라고 의뢰했습니다. 불과 9일 만에 현재 거주지와 직장, 재산 현황까지 파악해 주셨습니다. 덕분에 강제집행 신청을 통해 채무 변제를 받을 수 있었습니다. 경찰 출신이라 접근 방법이 일반 탐정과 다르다는 것을 느꼈습니다.',
    author: '50대 사업주 B씨',
    region: '경기 성남시',
    date: '2025년 10월',
  },
  {
    id: 3,
    service: '기업 신용조사',
    rating: 5,
    content: '대규모 투자를 앞두고 거래 업체 신용조사를 맡겼습니다. 조사 결과 해당 업체 대표가 과거 사기 전과자였고 법인도 부채가 자산을 훨씬 초과하는 상태였습니다. 10억 원 이상의 피해를 사전에 막을 수 있었습니다. 투자 전에 꼭 이런 조사를 받으시길 강력히 추천합니다.',
    author: '60대 기업인 C씨',
    region: '부산 해운대구',
    date: '2025년 9월',
  },
  {
    id: 4,
    service: '증거 수집',
    rating: 5,
    content: '직장 내 성희롱 피해를 당했지만 증거가 없어 신고하기 어려웠습니다. 명진탐정사무소에 증거 수집을 의뢰한 후 음성 녹취와 문자 메시지 등 결정적인 증거를 확보했습니다. 노동청 신고와 민사소송에서 모두 승소했습니다. 증거 수집의 합법성도 완벽히 검증해 주셔서 신뢰가 갔습니다.',
    author: '30대 직장인 D씨',
    region: '서울 마포구',
    date: '2025년 8월',
  },
  {
    id: 5,
    service: '배우자 불륜 조사',
    rating: 5,
    content: '아내가 특정 동료와 지나치게 가깝다는 느낌이 들어 의뢰했습니다. 결과적으로 불륜 사실이 없음을 확인받았고, 오히려 제 의심이 잘못된 것임을 알게 됐습니다. 처음엔 결과가 아쉬웠지만 불필요한 의심으로 가정이 무너지지 않아서 지금은 감사합니다. 비용 처리도 합리적이었습니다.',
    author: '40대 남성 E씨',
    region: '인천 남동구',
    date: '2025년 7월',
  },
  {
    id: 6,
    service: '소재/가출인 파악',
    rating: 5,
    content: '갑자기 연락이 끊긴 고등학생 자녀를 찾아달라고 했습니다. 48시간 내에 친구 집에 머물고 있다는 것을 파악해 주셨고 안전하게 귀가시킬 수 있었습니다. 경찰 신고와 병행했지만 민간에서 훨씬 빠르게 찾아주셨습니다. 부모님이라면 주저하지 말고 의뢰하세요.',
    author: '40대 학부모 F씨',
    region: '대구 수성구',
    date: '2025년 6월',
  },
  {
    id: 7,
    service: '기업 신용조사',
    rating: 5,
    content: '프랜차이즈 가맹계약을 앞두고 본사 신용조사를 의뢰했습니다. 알고 보니 가맹점 폐업률이 60%가 넘고 분쟁 조정 신청이 다수 있었습니다. 덕분에 수천만 원의 손해를 막았습니다. 계약서 한 번 더 검토하는 것도 도와주셔서 정말 감사했습니다.',
    author: '30대 창업 준비생 G씨',
    region: '광주 서구',
    date: '2025년 5월',
  },
  {
    id: 8,
    service: '증거 수집',
    rating: 5,
    content: '전 남자친구의 스토킹으로 일상생활이 불가능했습니다. 명진탐정사무소에서 스토킹 패턴을 파악하고 접근 사실을 기록한 증거를 모아주셨습니다. 이 증거로 접근금지 가처분과 형사 고소를 동시에 진행했고 스토킹이 완전히 멈췄습니다. 정말 제 인생을 되찾았습니다.',
    author: '20대 여성 H씨',
    region: '서울 강서구',
    date: '2025년 4월',
  },
  {
    id: 9,
    service: '배우자 불륜 조사',
    rating: 5,
    content: '결혼 20년 차에 갑자기 이혼을 요구하는 남편이 의심스러웠습니다. 조사 결과 6개월간 지속된 불륜 관계와 공동 재산 빼돌리기 정황까지 포착됐습니다. 재산 분할 소송에서 결정적인 역할을 한 증거가 됐고, 세 자녀의 양육권도 지킬 수 있었습니다. 고맙습니다.',
    author: '50대 여성 I씨',
    region: '경기 수원시',
    date: '2025년 3월',
  },
  {
    id: 10,
    service: '소재/가출인 파악',
    rating: 5,
    content: '오랫동안 행방불명이었던 형제를 찾아달라는 어머니의 부탁으로 의뢰했습니다. 15년 만에 부산에서 식당을 운영 중이라는 사실을 찾아주셨습니다. 가족 상봉이 이루어졌고, 오랜 소원이 풀렸습니다. 얼마나 감사한지 말로 표현이 안 됩니다.',
    author: '50대 남성 J씨',
    region: '서울 노원구',
    date: '2025년 2월',
  },
  {
    id: 11,
    service: '기업 신용조사',
    rating: 5,
    content: '납품 업체 중 한 곳이 최근 자금난에 빠졌다는 소문이 돌았습니다. 신용조사를 의뢰한 결과 실제로 부도 직전 상태임을 확인했습니다. 미리 계약을 해지하고 다른 업체를 발굴할 수 있었습니다. 매출 2억 원어치의 미수금을 막은 셈입니다.',
    author: '40대 제조업체 대표 K씨',
    region: '경기 안산시',
    date: '2025년 1월',
  },
  {
    id: 12,
    service: '증거 수집',
    rating: 5,
    content: '교통사고 후 상대방이 과실을 부인하고 블랙박스도 없었습니다. 명진탐정사무소에서 인근 CCTV와 목격자를 확보해 주셨습니다. 보험사 과실 비율 분쟁에서 유리한 결과를 얻었고 치료비 전액을 보상받았습니다. 기대 이상의 결과였습니다.',
    author: '30대 남성 L씨',
    region: '대전 유성구',
    date: '2024년 12월',
  },
  {
    id: 13,
    service: '배우자 불륜 조사',
    rating: 5,
    content: '남편이 출장을 핑계로 주말을 혼자 보내는 일이 잦아졌습니다. 3주 조사 끝에 불륜 상대가 직장 후배임을 확인했습니다. 증거 영상과 사진으로 이혼 소송을 제기했고 위자료와 재산 분할에서 원하는 결과를 얻었습니다. 과정 내내 세심하게 배려해 주셔서 감사했습니다.',
    author: '30대 여성 M씨',
    region: '서울 송파구',
    date: '2024년 11월',
  },
  {
    id: 14,
    service: '소재/가출인 파악',
    rating: 5,
    content: '대여금 3,000만 원을 떼이고 연락이 끊긴 지인을 찾아달라고 했습니다. 일주일 만에 강원도 시골에서 생활 중이라는 사실을 파악했습니다. 내용증명 발송과 법적 절차를 통해 절반 이상을 회수했습니다. 포기했던 돈을 되찾을 수 있어서 정말 다행입니다.',
    author: '40대 자영업자 N씨',
    region: '경기 의정부시',
    date: '2024년 10월',
  },
  {
    id: 15,
    service: '기업 신용조사',
    rating: 5,
    content: '협력사 대표가 본명이 아닌 것 같다는 의심이 들었습니다. 신원 조회 결과 실제로 다른 사람 명의를 도용한 사실이 밝혀졌습니다. 즉시 계약을 파기하고 선금을 돌려받았습니다. 조금만 늦었으면 수억 원 사기를 당했을 것입니다. 빠른 판단에 감사드립니다.',
    author: '50대 무역업자 O씨',
    region: '인천 중구',
    date: '2024년 9월',
  },
  {
    id: 16,
    service: '증거 수집',
    rating: 5,
    content: '임대인이 보증금 반환을 거부하며 적반하장으로 나왔습니다. 명진탐정사무소에서 임대인의 다른 임차인 피해 사례와 재산 은닉 정황을 수집해 주셨습니다. 법원 가압류 신청을 통해 보증금 전액을 돌려받았습니다. 덕분에 전세 사기 피해를 면했습니다.',
    author: '20대 직장인 P씨',
    region: '서울 관악구',
    date: '2024년 8월',
  },
]

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        title="의뢰인 후기"
        subtitle="명진탐정사무소를 믿고 의뢰해주신 분들의 실제 이야기입니다"
      />

      {/* 요약 통계 */}
      <section className="py-16 bg-bgalt border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '1,200+', label: '총 해결 사건' },
            { value: '16+', label: '등록된 후기' },
            { value: '98%', label: '의뢰인 만족도' },
            { value: '★ 5.0', label: '평균 평점' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold font-serif text-primary mb-1">{s.value}</p>
              <p className="text-textsecondary text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 후기 목록 */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="space-y-12">
          {REVIEWS.map((r, i) => (
            <ScrollReveal key={r.id} delay={0.05 * (i % 6)}>
              <div className="border-l-4 border-accent pl-8 py-2">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-primary text-accent text-xs font-medium px-3 py-1">{r.service}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <span className="text-textsecondary text-xs ml-auto">{r.date}</span>
                </div>
                <Quote size={24} className="text-accent/20 mb-3" />
                <p className="text-textprimary leading-relaxed mb-5 text-base">{r.content}</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-accent" />
                  <p className="font-bold text-primary text-sm">{r.author}</p>
                  <span className="text-textsecondary text-xs">&middot; {r.region}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif mb-4">당신의 사건도 해결해 드립니다</h2>
          <p className="text-gray-300 mb-8">초기 상담은 무료이며 비밀이 완벽히 보장됩니다.</p>
          <a href="tel:01084182033" className="inline-flex items-center gap-2 bg-accent text-white font-bold px-10 py-4 hover:brightness-95 transition-all duration-200 cursor-pointer">
            무료 상담 신청
          </a>
        </div>
      </section>
    </>
  )
}
