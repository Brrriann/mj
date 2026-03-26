import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { CheckCircle, Clock } from 'lucide-react'

export const metadata = genMeta({
  title: '사건 사례',
  description: '명진탐정사무소의 실제 해결 사건 사례 20가지. 배우자 불륜 조사, 소재 파악, 기업신용조사, 증거 수집 사례.',
  pathname: '/cases/results',
})

const CASES = [
  {
    id: 1,
    category: '배우자 불륜 조사',
    title: '10년 차 부부, 불륜 증거 확보 후 위자료 소송 승소',
    summary: '잦은 야근을 핑계로 외출하는 배우자를 2주간 추적 조사. 불륜 현장 영상 및 사진 확보. 이혼 소송에서 위자료 4,000만 원 수령.',
    duration: '2주',
    result: '소송 승소',
    region: '서울',
  },
  {
    id: 2,
    category: '배우자 불륜 조사',
    title: '출장 핑계 반복 — 1년간 지속된 불륜 관계 적발',
    summary: '월 2~3회 지방 출장을 주장하는 배우자 조사. 출장지가 아닌 동일 여성의 아파트 방문 사실 확인. 3주간 잠복 및 미행으로 증거 영상 확보.',
    duration: '3주',
    result: '합의 이혼 + 위자료',
    region: '경기',
  },
  {
    id: 3,
    category: '배우자 불륜 조사',
    title: '재산 빼돌리기 + 불륜 동시 적발',
    summary: '이혼을 요구한 배우자 조사 중 불륜 관계와 함께 공동재산 해외 이전 정황 포착. 법원에 재산보전 가처분 신청으로 자산 동결. 재산분할 소송 진행 중.',
    duration: '4주',
    result: '자산보전 + 소송 진행',
    region: '서울',
  },
  {
    id: 4,
    category: '소재/가출인 파악',
    title: '3년간 행방불명 채무자, 9일 만에 소재 확인',
    summary: '3,000만 원을 빌려간 지인이 갑자기 연락을 끊고 주소지 이전. 9일간의 집중 조사로 경기도 소재 아파트 거주 확인. 강제집행 통해 채무 일부 회수.',
    duration: '9일',
    result: '채무 회수 성공',
    region: '경기',
  },
  {
    id: 5,
    category: '소재/가출인 파악',
    title: '가출 청소년 48시간 내 안전 귀가',
    summary: '가출한 고등학생 자녀 소재 파악 의뢰. 경찰과 병행 조사. 친구 집과 PC방 등 주요 거점 추적으로 48시간 내 안전하게 귀가 조치.',
    duration: '48시간',
    result: '안전 귀가',
    region: '대구',
  },
  {
    id: 6,
    category: '소재/가출인 파악',
    title: '15년 행방불명 형제, 부산에서 생존 확인',
    summary: '가족과 연락을 끊고 15년간 소식이 없던 형제 추적 의뢰. 광범위한 데이터베이스 조회 및 현장 조사로 부산 식당 운영 중 확인. 가족 상봉 성사.',
    duration: '3주',
    result: '가족 상봉',
    region: '부산',
  },
  {
    id: 7,
    category: '소재/가출인 파악',
    title: '치매 노인 실종, 3일 만에 발견',
    summary: '치매를 앓는 80대 부모님이 요양원에서 실종. 경찰 수사와 병행하여 주변 CCTV 분석 및 생활 패턴 분석으로 3일 만에 인근 지하철역에서 발견.',
    duration: '3일',
    result: '안전 발견',
    region: '서울',
  },
  {
    id: 8,
    category: '기업 신용조사',
    title: '10억 원 투자 전 페이퍼컴퍼니 사전 적발',
    summary: '대형 투자를 앞두고 상대 업체 신용조사 의뢰. 법인 실체 없이 사무실만 임대한 페이퍼컴퍼니 확인. 대표 사기 전과 3범 확인. 투자 취소로 10억 원 피해 예방.',
    duration: '5일',
    result: '10억 피해 예방',
    region: '서울',
  },
  {
    id: 9,
    category: '기업 신용조사',
    title: '프랜차이즈 본사 실태 조사로 창업 실패 예방',
    summary: '프랜차이즈 가맹 전 본사 조사 의뢰. 폐업률 65%, 분쟁조정 신청 다수, 재무 악화 확인. 가맹 계약 철회로 수천만 원 손해 예방.',
    duration: '1주',
    result: '계약 철회 성공',
    region: '광주',
  },
  {
    id: 10,
    category: '기업 신용조사',
    title: '협력사 대표 신원 도용 적발, 계약 파기',
    summary: '협력사 대표 신원 불일치 의심. 조사 결과 타인 명의 도용 사실 확인. 즉시 계약 파기 및 선금 전액 반환 요구. 경찰 고소 후 사기죄로 기소.',
    duration: '3일',
    result: '선금 전액 회수',
    region: '인천',
  },
  {
    id: 11,
    category: '기업 신용조사',
    title: '납품업체 부도 직전 상황 조기 포착',
    summary: '거래처 자금난 소문 확인 의뢰. 실제 어음 부도 기록 및 은행 여신 축소 확인. 미리 거래 중단 및 미수금 회수 조치. 2억 원 손해 예방.',
    duration: '4일',
    result: '2억 손해 예방',
    region: '경기',
  },
  {
    id: 12,
    category: '증거 수집',
    title: '직장 내 성희롱 증거 확보, 노동청 신고 승소',
    summary: '증거 없이 반복되는 직장 내 성희롱 피해. 합법적 음성 녹취와 메시지 확보. 노동청 신고 및 민사소송 동시 진행. 피해자 승소 및 손해배상 수령.',
    duration: '2주',
    result: '소송 승소',
    region: '서울',
  },
  {
    id: 13,
    category: '증거 수집',
    title: '스토킹 피해자 보호 — 접근금지 가처분 성공',
    summary: '전 남자친구의 지속적 스토킹 피해. 스토킹 패턴 기록 및 접근 증거 수집. 법원 접근금지 가처분 및 형사 고소 성공. 스토킹 완전 종료.',
    duration: '2주',
    result: '접근금지 가처분',
    region: '서울',
  },
  {
    id: 14,
    category: '증거 수집',
    title: '교통사고 과실 증거 확보 — 보험사 분쟁 해결',
    summary: '블랙박스 없는 교통사고 과실 분쟁. 주변 CCTV 영상 및 목격자 진술 확보. 보험사 과실 비율 조정으로 치료비 전액 + 위자료 수령.',
    duration: '1주',
    result: '전액 보상',
    region: '대전',
  },
  {
    id: 15,
    category: '증거 수집',
    title: '전세 사기 임대인 재산 은닉 증거 수집',
    summary: '보증금 반환 거부 임대인 조사. 다른 임차인 피해 사례 수집 및 재산 은닉 정황 확인. 법원 가압류 신청으로 보증금 전액 반환 성공.',
    duration: '10일',
    result: '전액 반환 성공',
    region: '서울',
  },
  {
    id: 16,
    category: '배우자 불륜 조사',
    title: '결혼 20년 차 배우자 불륜 확인 — 양육권 사수',
    summary: '이혼을 요구하는 배우자 조사. 6개월 불륜 관계 및 재산 이전 시도 동시 확인. 이혼 소송에서 세 자녀 양육권 확보 및 위자료 수령.',
    duration: '3주',
    result: '양육권 + 위자료',
    region: '경기',
  },
  {
    id: 17,
    category: '소재/가출인 파악',
    title: '해외 도주 채무자 국내 재입국 시점 포착',
    summary: '해외로 도주한 5,000만 원 채무자 추적. 국내 가족 및 지인 동향 모니터링. 채무자 국내 재입국 시점 포착 후 법적 조치 성공.',
    duration: '6주',
    result: '법적 조치 성공',
    region: '서울',
  },
  {
    id: 18,
    category: '기업 신용조사',
    title: 'M&A 대상 기업 실사 — 분식회계 적발',
    summary: '인수합병 대상 기업 실사 의뢰. 재무제표 조작 및 매출 부풀리기 정황 포착. 계약 파기 및 선금 반환 청구 성공.',
    duration: '2주',
    result: '계약 파기 성공',
    region: '서울',
  },
  {
    id: 19,
    category: '증거 수집',
    title: '음주운전 피의자 동선 확보 — 민사소송 승소',
    summary: '음주운전 사고 후 가해자가 음주 사실 부인. 사고 전후 동선 및 주변 술집 CCTV 확보. 민사소송 및 형사 고소 동시 성공.',
    duration: '1주',
    result: '소송 승소',
    region: '부산',
  },
  {
    id: 20,
    category: '배우자 불륜 조사',
    title: '신혼 1년 배우자 불륜 — 협의 이혼 합의',
    summary: '결혼 1년 만에 배우자 행동 변화 감지. 1주 조사로 결혼 전부터 지속된 불륜 관계 확인. 증거 제시 후 합의 이혼 및 위자료 지급 완료.',
    duration: '1주',
    result: '합의 이혼',
    region: '서울',
  },
]

export default function ResultsPage() {
  return (
    <>
      <PageHeader
        title="사건 사례"
        subtitle="명진탐정사무소가 해결한 실제 사건 사례입니다 (의뢰인 동의 하에 공개)"
      />

      {/* 통계 */}
      <section className="py-16 bg-bgalt border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '1,200+', label: '총 해결 사건' },
            { value: '20+', label: '공개 사례' },
            { value: '98%', label: '해결률' },
            { value: '전국', label: '조사 가능 지역' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold font-serif text-primary mb-1">{s.value}</p>
              <p className="text-textsecondary text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 사건 사례 목록 */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASES.map((c, i) => (
            <ScrollReveal key={c.id} delay={0.05 * (i % 4)}>
              <div className="border border-gray-200 hover:border-accent hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1">{c.category}</span>
                    <span className="text-xs text-textsecondary">{c.region}</span>
                  </div>
                  <h3 className="font-bold text-primary font-serif text-lg mb-3 group-hover:text-accent transition-colors duration-200">{c.title}</h3>
                  <p className="text-textsecondary text-sm leading-relaxed mb-5">{c.summary}</p>
                  <div className="flex gap-4 text-xs border-t border-gray-100 pt-4">
                    <span className="flex items-center gap-1 text-textsecondary"><Clock size={12} /> 조사기간: {c.duration}</span>
                    <span className="flex items-center gap-1 text-primary font-medium"><CheckCircle size={12} className="text-accent" /> {c.result}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif mb-4">비슷한 상황에 처해 계신가요?</h2>
          <p className="text-gray-300 mb-8">초기 상담은 무료이며 비밀이 완벽히 보장됩니다.</p>
          <a href="tel:01084182033" className="inline-flex items-center gap-2 bg-accent text-white font-bold px-10 py-4 hover:brightness-95 transition-all duration-200 cursor-pointer">
            지금 바로 상담하기
          </a>
        </div>
      </section>
    </>
  )
}
