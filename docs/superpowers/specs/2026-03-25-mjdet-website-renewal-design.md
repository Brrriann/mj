# 명진탐정사무소 홈페이지 리뉴얼 설계 문서

**날짜:** 2026-03-25
**프로젝트:** mjdet.com 홈페이지 완전 리뉴얼
**저장소:** https://github.com/Brrriann/mj
**배포:** Cloudflare Pages

---

## 1. 프로젝트 개요

경찰 출신 명진탐정사무소(mjdet.com)의 홈페이지를 완전히 새로 제작한다. 기존 imweb 기반 사이트에서 Next.js 기반의 독립 사이트로 전환하며, 깔끔하고 모던한 디자인과 SEO 최적화를 핵심 목표로 한다.

### 핵심 목표
- 검색 노출(SEO) 극대화
- 신뢰감 있는 고급 디자인 (골드 + 진녹색)
- 모바일 최적화
- 상담 전환율 향상 (카카오톡/전화/폼)

### 비즈니스 정보
- **대표 전화:** 010-8418-2033
- **카카오톡 채널명:** 명진탐정사무소 (채널 URL은 구현 시 카카오 비즈니스 채널에서 확인)
- **도메인:** mjdet.com

---

## 2. 기술 스택

| 항목 | 선택 | 이유 |
|---|---|---|
| 프레임워크 | Next.js 14 (App Router) | SSR/SSG로 SEO 최적화, Cloudflare Pages 지원 |
| 스타일링 | Tailwind CSS | 빠른 개발, 반응형 용이 |
| 배포 | Cloudflare Pages | 빠른 글로벌 CDN, 무료 플랜 충분 |
| 저장소 | GitHub (Brrriann/mj) | CI/CD 연동 |
| 폼 처리 | Formspree (무료 50건/월, 필요시 유료 전환) | 별도 서버 없이 이메일 수신 |
| SEO | next/metadata, sitemap, robots.txt | 자동 생성 |
| 런타임 | Edge Runtime (@cloudflare/next-on-pages 어댑터) | Cloudflare Pages 호환 필수 |

### Cloudflare Pages 배포 필수 설정
- `@cloudflare/next-on-pages` 패키지 설치 필수
- `next.config.js`에 Cloudflare 어댑터 설정
- Node.js 전용 API 사용 금지 (Edge Runtime 제약)
- `package.json` build 스크립트: `"build": "next-on-pages"`

---

## 3. 디자인 시스템

### 컬러 팔레트

| 역할 | 색상 | HEX |
|---|---|---|
| Primary | 진녹색 | `#1B4332` |
| Accent | 골드 | `#C9A84C` |
| Background Light | 흰색 | `#FFFFFF` |
| Background Alt | 연회색 | `#F8F8F6` |
| Text Primary | 다크 | `#1A1A1A` |
| Text Secondary | 그레이 | `#6B7280` |

### 타이포그래피
- 한글: Noto Sans KR (Google Fonts, `font-display: swap`, 필요 weight만 로드)
- 영문/숫자: Inter (Google Fonts, `font-display: swap`)
- 헤딩: 진녹색 또는 골드 강조

### 컴포넌트 원칙
- 카드 기반 레이아웃
- 골드 언더라인/보더 포인트 컬러로 사용
- 그림자보다 보더 활용으로 모던함 표현

---

## 4. 사이트 구조

```
/ (홈 - 메인)
  - 히어로 섹션 (슬로건 + 상담 CTA)
  - 서비스 요약 카드 4개
  - 왜 명진인가 (신뢰 포인트: 경찰 출신, 비밀보장, 법적 증거)
  - 최근 사례/후기 미리보기
  - 상담 유도 배너

/about (명진 소개)
  /about/company     회사 소개
  /about/ceo         대표 소개 (경찰 출신 강조)
  /about/process     업무 프로세스 (단계별 설명)

/services (업무분야)
  /services/infidelity      배우자 불륜 조사
  /services/missing-person  소재/가출인 파악
  /services/corporate       기업 신용조사
  /services/evidence        증거 수집

/cases (업무사례)
  /cases/results    사건 사례
  /cases/reviews    의뢰인 후기

/contact (고객센터)
  /contact/consult  상담 신청
  /contact/location 오시는 길
```

---

## 5. 주요 기능 명세

### 5-1. 네비게이션
- **PC**: 상단 고정 헤더, 드롭다운 서브메뉴
- **모바일**: 햄버거 버튼 → 풀스크린 슬라이드 메뉴
- **스크롤 효과**: 홈 페이지에서만 투명 → 진녹색 전환. 내부 페이지는 항상 진녹색 배경 헤더

### 5-2. 상담 신청 슬라이드 패널
- 모든 페이지에서 고정 버튼("무료 상담")으로 접근 가능
- **PC**: 우측에서 슬라이드 인/아웃되는 사이드패널
- **모바일**: 하단에서 슬라이드 업되는 바텀시트
- 입력 필드:
  - 이름 (필수, 최소 2자)
  - 연락처 (필수, 한국 휴대폰 형식: 010-XXXX-XXXX)
  - 문의 유형 (드롭다운: 배우자 불륜 조사 / 소재파악 / 기업 신용조사 / 증거 수집 / 기타)
  - 문의 내용 (선택, textarea)
- 제출: Formspree 연동 (폼 ID는 Formspree 계정 생성 후 적용)
- 제출 성공: "접수되었습니다. 빠른 시간 내 연락드리겠습니다." 메시지 표시 후 패널 닫기
- 제출 실패: "전송에 실패했습니다. 전화(010-8418-2033)로 문의해 주세요." 메시지 표시
- 유효성 검사: 클라이언트 측 실시간 검사, 오류 시 해당 필드 하단에 빨간 메시지 표시

### 5-3. 카카오톡 플로팅 버튼
- 우측 하단 고정 (PC + 모바일)
- 카카오톡 채널 "명진탐정사무소" 링크 연결 (구현 시 실제 채널 URL 적용)
- 노란 배경 + 카카오 아이콘

### 5-4. 전화 연결 버튼
- **모바일에서만 표시** (PC: CSS `hidden`, 모바일: `flex`)
- 우측 하단, 카카오톡 버튼 위에 위치
- `tel:010-8418-2033` 링크로 즉시 전화 연결
- 진녹색 배경 + 전화 아이콘

### 5-5. SEO
- 페이지별 `next/metadata`로 title, description 개별 설정
- Open Graph 태그 (카카오/페이스북 공유 최적화)
- JSON-LD 구조화 데이터 (`LocalBusiness` 스키마, 전화번호 포함)
- `/sitemap.xml` 자동 생성
- `/robots.txt` 설정

---

## 6. 반응형 브레이크포인트 (Tailwind 기준, min-width)

| 구간 | Tailwind 접두사 | 범위 |
|---|---|---|
| 모바일 (기본) | (없음) | 0px ~ |
| 태블릿 | `md:` | 768px ~ |
| 데스크탑 | `lg:` | 1024px ~ |

---

## 7. 배포 파이프라인

1. 개발 → GitHub `main` 브랜치 푸시
2. Cloudflare Pages가 자동으로 빌드/배포 (`next-on-pages` 빌드)
3. 커스텀 도메인 mjdet.com 연결

---

## 8. 콘텐츠 (플레이스홀더)

초기 구현 시 플레이스홀더 텍스트로 시작. 실제 콘텐츠(서비스 설명, 사례, 대표 소개)는 별도로 제공받아 교체.

- 히어로 슬로건 예시: "경찰 출신 전문가의 정확하고 신속한 조사"
- 서비스 설명: 각 서비스 페이지에 200~400자 설명
- 후기: 3~5개 샘플 후기로 시작

---

## 9. 성공 기준

- Lighthouse SEO 점수 90점 이상
- Lighthouse Performance 점수 85점 이상 (Core Web Vitals: LCP < 2.5s, CLS < 0.1)
- 모바일/PC 완전 반응형
- 상담 폼, 카카오톡, 전화 버튼 모두 정상 작동
- 전화 버튼 모바일에서만 노출 확인
- Cloudflare Pages 빌드 성공 후 mjdet.com 배포
- 카카오톡 채널 실제 URL 적용 및 연결 확인 (배포 전 필수)
- Formspree 폼 ID 적용 및 실제 전송 테스트 완료 (배포 전 필수)
