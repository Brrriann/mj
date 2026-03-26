export const SITE = {
  name: '명진탐정사무소',
  ceo: '김민재',
  phone: '010-8418-2033',
  phoneRaw: '01084182033',
  email: 'mjdet@naver.com',
  kakaoUrl: 'https://pf.kakao.com/_PLACEHOLDER', // 실제 채널 URL로 교체 필요
  domain: 'https://mjdet.com',
  address: '서울 관악구 관악로 168, 409호',
  businessNumber: '878-61-01039',
}

export const NAV = [
  {
    label: '명진 소개',
    href: '/about/company',
    children: [
      { label: '회사 소개', href: '/about/company' },
      { label: '대표 소개', href: '/about/ceo' },
      { label: '업무 프로세스', href: '/about/process' },
    ],
  },
  {
    label: '업무분야',
    href: '/services/infidelity',
    children: [
      { label: '배우자 불륜 조사', href: '/services/infidelity' },
      { label: '소재/가출인 파악', href: '/services/missing-person' },
      { label: '기업 신용조사', href: '/services/corporate' },
      { label: '증거 수집', href: '/services/evidence' },
    ],
  },
  {
    label: '업무사례',
    href: '/cases/results',
    children: [
      { label: '사건 사례', href: '/cases/results' },
      { label: '의뢰인 후기', href: '/cases/reviews' },
    ],
  },
  {
    label: '고객센터',
    href: '/contact/consult',
    children: [
      { label: '상담 신청', href: '/contact/consult' },
      { label: '오시는 길', href: '/contact/location' },
    ],
  },
]

export const INQUIRY_TYPES = [
  '배우자 불륜 조사',
  '소재/가출인 파악',
  '기업 신용조사',
  '증거 수집',
  '기타',
] as const
