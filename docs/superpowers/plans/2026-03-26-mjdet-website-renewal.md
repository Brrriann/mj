# 명진탐정사무소 홈페이지 리뉴얼 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 명진탐정사무소(mjdet.com)를 Next.js 14 + Tailwind CSS로 완전히 새로 구축하고 Cloudflare Pages에 배포한다.

**Architecture:** App Router 기반 Next.js 14를 사용하며, `@cloudflare/next-on-pages` 어댑터로 Edge Runtime에서 동작한다. 컴포넌트는 layout(헤더/푸터), ui(재사용 UI), forms(폼)로 분리하고, 페이지는 app/ 디렉토리에서 관리한다.

**Tech Stack:** Next.js 14 (App Router), Tailwind CSS, TypeScript, Jest + React Testing Library, @cloudflare/next-on-pages, Formspree, Lucide React

**Design System:** Trust & Authority 스타일. 컬러: 진녹색 `#1B4332` + 골드 `#C9A84C`. 타이포: Noto Serif KR (제목) + Noto Sans KR (본문). 이모지 아이콘 금지 - Lucide React SVG 사용. cursor-pointer 필수. 트랜지션 150-300ms.

---

## 파일 구조

```
/c/mj/
├── app/
│   ├── layout.tsx                    # 루트 레이아웃 (폰트, 전역 메타데이터, Header/Footer/FloatingButtons 포함)
│   ├── page.tsx                      # 홈 페이지
│   ├── sitemap.ts                    # 자동 sitemap.xml 생성
│   ├── robots.ts                     # robots.txt 생성
│   ├── about/
│   │   ├── company/page.tsx          # 회사 소개
│   │   ├── ceo/page.tsx              # 대표 소개
│   │   └── process/page.tsx          # 업무 프로세스
│   ├── services/
│   │   ├── infidelity/page.tsx       # 배우자 불륜 조사
│   │   ├── missing-person/page.tsx   # 소재/가출인 파악
│   │   ├── corporate/page.tsx        # 기업 신용조사
│   │   └── evidence/page.tsx         # 증거 수집
│   ├── cases/
│   │   ├── results/page.tsx          # 사건 사례
│   │   └── reviews/page.tsx          # 의뢰인 후기
│   └── contact/
│       ├── consult/page.tsx          # 상담 신청 페이지
│       └── location/page.tsx         # 오시는 길
├── components/
│   ├── layout/
│   │   ├── Header.tsx                # 고정 헤더 + 드롭다운 네비
│   │   ├── Footer.tsx                # 푸터
│   │   └── MobileMenu.tsx            # 모바일 슬라이드 메뉴
│   ├── ui/
│   │   ├── FloatingButtons.tsx       # 카카오톡 + 전화 플로팅 버튼
│   │   ├── ConsultPanel.tsx          # 상담 슬라이드 패널 (PC: 사이드, 모바일: 바텀시트)
│   │   ├── HeroSection.tsx           # 홈 히어로 섹션
│   │   ├── ServiceCard.tsx           # 서비스 카드
│   │   ├── TrustSection.tsx          # "왜 명진인가" 신뢰 섹션
│   │   ├── ReviewCard.tsx            # 후기 카드
│   │   └── PageHeader.tsx            # 내부 페이지 공통 헤더 배너
│   └── forms/
│       └── ConsultForm.tsx           # 상담 폼 (유효성 검사 + Formspree 연동)
├── lib/
│   ├── constants.ts                  # 전화번호, 카카오 URL, 네비 구조 데이터
│   └── seo.ts                        # 메타데이터 생성 헬퍼, JSON-LD 생성
├── __tests__/
│   ├── components/
│   │   ├── ConsultForm.test.tsx      # 폼 유효성 검사 테스트
│   │   └── FloatingButtons.test.tsx  # 모바일 전용 노출 테스트
│   └── lib/
│       └── seo.test.ts               # JSON-LD 생성 테스트
├── public/
│   └── images/                       # 이미지 플레이스홀더
├── next.config.js
├── tailwind.config.js
├── jest.config.js
├── jest.setup.js
├── wrangler.toml                     # Cloudflare 배포 설정
└── package.json
```

---

## Task 1: 프로젝트 초기 설정

**Files:**
- Create: `package.json`
- Create: `next.config.js`
- Create: `tailwind.config.js`
- Create: `jest.config.js`
- Create: `jest.setup.js`
- Create: `wrangler.toml`
- Create: `tsconfig.json`

- [ ] **Step 1: Next.js 14 프로젝트 생성**

`/c/mj` 디렉토리에서 실행:
```bash
cd /c/mj
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*" --no-git
```
프롬프트에서: TypeScript=Yes, ESLint=Yes, Tailwind=Yes, App Router=Yes

- [ ] **Step 2: 필수 패키지 설치**

```bash
npm install @cloudflare/next-on-pages lucide-react
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event ts-jest @types/jest
```

- [ ] **Step 3: next.config.js 설정 (Cloudflare 호환)**

`next.config.js` 내용을 다음으로 교체:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages는 정적 내보내기 또는 Edge Runtime 사용
  // next-on-pages가 빌드를 처리함
}

module.exports = nextConfig
```

- [ ] **Step 4: tailwind.config.js에 커스텀 컬러 추가**

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B4332',      // 진녹색
        'primary-dark': '#0F2D1F',
        accent: '#C9A84C',       // 골드
        'accent-light': '#D4B86A',
        bgalt: '#F8F8F6',        // 연회색 배경
        textprimary: '#1A1A1A',
        textsecondary: '#6B7280',
      },
      fontFamily: {
        sans: ['var(--font-noto)', 'var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 5: jest.config.js 설정**

```js
const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
```

- [ ] **Step 6: jest.setup.js 작성**

```js
import '@testing-library/jest-dom'
```

- [ ] **Step 7: wrangler.toml 작성**

```toml
name = "mjdet"
compatibility_date = "2024-01-01"
compatibility_flags = ["nodejs_compat"]

pages_build_output_dir = ".vercel/output/static"
```

- [ ] **Step 8: package.json scripts 수정**

package.json의 scripts를 다음으로 업데이트:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "build:cf": "npx @cloudflare/next-on-pages",
    "start": "next start",
    "lint": "next lint",
    "test": "jest --watchAll=false",
    "test:watch": "jest"
  }
}
```

- [ ] **Step 9: 빌드 확인**

```bash
npm run build
```
Expected: 빌드 성공, 에러 없음

- [ ] **Step 10: 커밋**

```bash
git init
git add .
git commit -m "feat: initialize Next.js 14 project with Tailwind and Cloudflare config"
```

---

## Task 2: 상수 & SEO 헬퍼

**Files:**
- Create: `lib/constants.ts`
- Create: `lib/seo.ts`
- Create: `__tests__/lib/seo.test.ts`

- [ ] **Step 1: lib/constants.ts 작성**

```typescript
export const SITE = {
  name: '명진탐정사무소',
  phone: '010-8418-2033',
  phoneRaw: '01084182033',
  kakaoUrl: 'https://pf.kakao.com/_PLACEHOLDER', // 실제 채널 URL로 교체 필요
  domain: 'https://mjdet.com',
  address: '서울특별시 (상세 주소 추가 예정)',
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
]
```

- [ ] **Step 2: 실패할 테스트 먼저 작성 (`__tests__/lib/seo.test.ts`)**

```typescript
import { generateMetadata, generateLocalBusinessJsonLd } from '@/lib/seo'

describe('generateMetadata', () => {
  it('기본 title과 description을 포함한다', () => {
    const meta = generateMetadata({ title: '회사 소개', description: '명진탐정사무소 소개' })
    expect(meta.title).toBe('회사 소개 | 명진탐정사무소')
    expect(meta.description).toBe('명진탐정사무소 소개')
  })

  it('OpenGraph title도 동일하게 설정된다', () => {
    const meta = generateMetadata({ title: '서비스', description: '조사 서비스' })
    expect((meta.openGraph as any).title).toBe('서비스 | 명진탐정사무소')
  })
})

describe('generateLocalBusinessJsonLd', () => {
  it('@type이 LocalBusiness이다', () => {
    const ld = generateLocalBusinessJsonLd()
    expect(ld['@type']).toBe('LocalBusiness')
  })

  it('전화번호가 포함된다', () => {
    const ld = generateLocalBusinessJsonLd()
    expect(ld.telephone).toBe('010-8418-2033')
  })
})
```

- [ ] **Step 3: 테스트 실패 확인**

```bash
npm test -- --testPathPattern=seo
```
Expected: FAIL (모듈 없음)

- [ ] **Step 4: lib/seo.ts 구현**

```typescript
import { Metadata } from 'next'
import { SITE } from './constants'

export function generateMetadata({
  title,
  description,
}: {
  title: string
  description: string
}): Metadata {
  const fullTitle = `${title} | ${SITE.name}`
  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: SITE.domain,
      siteName: SITE.name,
      locale: 'ko_KR',
      type: 'website',
    },
  }
}

export function generateLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    telephone: SITE.phone,
    url: SITE.domain,
    address: {
      '@type': 'PostalAddress',
      addressLocality: '서울특별시',
      addressCountry: 'KR',
    },
  }
}
```

- [ ] **Step 5: 테스트 통과 확인**

```bash
npm test -- --testPathPattern=seo
```
Expected: PASS (2 test suites, 4 tests)

- [ ] **Step 6: 커밋**

```bash
git add lib/ __tests__/lib/
git commit -m "feat: add site constants and SEO metadata helpers"
```

---

## Task 3: 루트 레이아웃 & 글로벌 스타일

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: app/globals.css 수정**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply text-textprimary font-sans;
  }
}
```

- [ ] **Step 2: app/layout.tsx 작성**

```typescript
import type { Metadata } from 'next'
import { Noto_Sans_KR, Inter } from 'next/font/google'
import './globals.css'
import { SITE } from '@/lib/constants'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/ui/FloatingButtons'

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | 경찰 출신 전문 탐정`,
    template: `%s | ${SITE.name}`,
  },
  description: '경찰 출신 전문가의 정확하고 신속한 조사. 배우자 불륜, 소재파악, 기업신용조사, 증거수집.',
  metadataBase: new URL(SITE.domain),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}
```

- [ ] **Step 3: 빌드 확인 (컴포넌트 플레이스홀더 필요)**

Header, Footer, FloatingButtons가 아직 없으므로 임시 파일 생성:
```bash
mkdir -p components/layout components/ui components/forms
echo "export default function Header() { return <header /> }" > components/layout/Header.tsx
echo "export default function Footer() { return <footer /> }" > components/layout/Footer.tsx
echo "export default function FloatingButtons() { return null }" > components/ui/FloatingButtons.tsx
```

```bash
npm run dev
```
Expected: http://localhost:3000 에서 빈 페이지 로드됨

- [ ] **Step 4: 커밋**

```bash
git add app/ components/
git commit -m "feat: setup root layout with fonts and placeholder components"
```

---

## Task 4: Header & 네비게이션

**Files:**
- Modify: `components/layout/Header.tsx`
- Create: `components/layout/MobileMenu.tsx`

- [ ] **Step 1: MobileMenu.tsx 작성**

```typescript
'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { NAV } from '@/lib/constants'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <div
      className={`fixed inset-0 z-50 bg-primary transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-end p-6">
        <button onClick={onClose} className="text-white text-3xl" aria-label="메뉴 닫기">
          ✕
        </button>
      </div>
      <nav className="px-8 py-4">
        {NAV.map((item) => (
          <div key={item.href} className="mb-6">
            <p className="text-accent font-bold text-lg mb-2">{item.label}</p>
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClose}
                className="block text-white py-2 text-base hover:text-accent transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </div>
  )
}
```

- [ ] **Step 2: Header.tsx 작성**

```typescript
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV } from '@/lib/constants'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const bgClass = isHome
    ? scrolled ? 'bg-primary shadow-md' : 'bg-transparent'
    : 'bg-primary shadow-md'

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${bgClass}`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          {/* 로고 */}
          <Link href="/" className="text-white font-bold text-xl">
            <span className="text-accent">명진</span>탐정사무소
          </Link>

          {/* PC 네비 */}
          <nav className="hidden lg:flex gap-8">
            {NAV.map((item) => (
              <div key={item.href} className="relative group">
                <button className="text-white hover:text-accent transition-colors py-4 font-medium">
                  {item.label}
                </button>
                {/* 드롭다운 */}
                <div className="absolute top-full left-0 w-44 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-3 text-textprimary hover:text-accent hover:bg-bgalt text-sm border-b border-gray-100 last:border-0"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* 모바일 햄버거 */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white text-2xl"
            aria-label="메뉴 열기"
          >
            ☰
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
```

- [ ] **Step 3: 개발 서버에서 헤더 확인**

```bash
npm run dev
```
- 홈에서 스크롤 시 헤더 배경 전환 확인
- 모바일 뷰에서 햄버거 메뉴 동작 확인

- [ ] **Step 4: 커밋**

```bash
git add components/layout/
git commit -m "feat: add Header with dropdown nav and mobile slide menu"
```

---

## Task 5: Footer

**Files:**
- Modify: `components/layout/Footer.tsx`

- [ ] **Step 1: Footer.tsx 작성**

```typescript
import Link from 'next/link'
import { SITE, NAV } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 브랜드 */}
        <div>
          <p className="text-accent font-bold text-lg mb-3">명진탐정사무소</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            경찰 출신 전문가의 정확하고 신속한 조사.<br />
            모든 의뢰는 철저한 비밀이 보장됩니다.
          </p>
        </div>

        {/* 메뉴 */}
        <div>
          <p className="text-accent font-bold mb-3">바로가기</p>
          <ul className="space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-gray-300 hover:text-accent text-sm transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 연락처 */}
        <div>
          <p className="text-accent font-bold mb-3">연락처</p>
          <p className="text-gray-300 text-sm mb-2">
            전화: <a href={`tel:${SITE.phoneRaw}`} className="hover:text-accent">{SITE.phone}</a>
          </p>
          <p className="text-gray-300 text-sm">{SITE.address}</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} 명진탐정사무소. All rights reserved.
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: 커밋**

```bash
git add components/layout/Footer.tsx
git commit -m "feat: add Footer with nav links and contact info"
```

---

## Task 6: 플로팅 버튼 (카카오톡 + 전화)

**Files:**
- Modify: `components/ui/FloatingButtons.tsx`
- Create: `__tests__/components/FloatingButtons.test.tsx`

- [ ] **Step 1: 실패할 테스트 작성**

```typescript
// __tests__/components/FloatingButtons.test.tsx
import { render, screen } from '@testing-library/react'
import FloatingButtons from '@/components/ui/FloatingButtons'

describe('FloatingButtons', () => {
  it('카카오톡 버튼이 렌더링된다', () => {
    render(<FloatingButtons />)
    expect(screen.getByLabelText('카카오톡 상담')).toBeInTheDocument()
  })

  it('전화 버튼의 href가 tel: 링크다', () => {
    render(<FloatingButtons />)
    const phoneBtn = screen.getByLabelText('전화 상담')
    expect(phoneBtn).toHaveAttribute('href', 'tel:01084182033')
  })

  it('전화 버튼은 lg:hidden 클래스를 가진다 (PC에서 숨김)', () => {
    render(<FloatingButtons />)
    const phoneBtn = screen.getByLabelText('전화 상담')
    expect(phoneBtn.closest('div') ?? phoneBtn).toHaveClass('lg:hidden')
  })
})
```

- [ ] **Step 2: 테스트 실패 확인**

```bash
npm test -- --testPathPattern=FloatingButtons
```
Expected: FAIL

- [ ] **Step 3: FloatingButtons.tsx 구현**

```typescript
import Link from 'next/link'
import { SITE } from '@/lib/constants'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 items-end">
      {/* 전화 버튼 - 모바일만 */}
      <div className="lg:hidden">
        <a
          href={`tel:${SITE.phoneRaw}`}
          aria-label="전화 상담"
          className="flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg text-white hover:bg-primary-dark transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
        </a>
      </div>

      {/* 카카오톡 버튼 - 전 디바이스 */}
      <Link
        href={SITE.kakaoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="카카오톡 상담"
        className="flex items-center justify-center w-12 h-12 bg-[#FEE500] rounded-full shadow-lg hover:brightness-95 transition-all"
      >
        {/* 카카오 아이콘 (SVG) */}
        <svg viewBox="0 0 24 24" fill="#3A1D1D" className="w-6 h-6">
          <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.697 1.664 5.06 4.166 6.441L5.09 21l5.07-2.68A11.5 11.5 0 0012 18.5c5.523 0 10-3.477 10-7.5S17.523 3 12 3z" />
        </svg>
      </Link>
    </div>
  )
}
```

- [ ] **Step 4: 테스트 통과 확인**

```bash
npm test -- --testPathPattern=FloatingButtons
```
Expected: PASS

- [ ] **Step 5: 커밋**

```bash
git add components/ui/FloatingButtons.tsx __tests__/components/FloatingButtons.test.tsx
git commit -m "feat: add floating KakaoTalk and mobile-only phone buttons"
```

---

## Task 7: 상담 슬라이드 패널 & 폼

**Files:**
- Create: `components/forms/ConsultForm.tsx`
- Modify: `components/ui/ConsultPanel.tsx`
- Create: `__tests__/components/ConsultForm.test.tsx`

- [ ] **Step 1: 실패할 폼 테스트 작성**

```typescript
// __tests__/components/ConsultForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ConsultForm from '@/components/forms/ConsultForm'

describe('ConsultForm 유효성 검사', () => {
  it('이름이 1자이면 에러를 표시한다', async () => {
    render(<ConsultForm onSuccess={() => {}} />)
    const nameInput = screen.getByLabelText('이름')
    await userEvent.type(nameInput, '김')
    fireEvent.blur(nameInput)
    await waitFor(() => {
      expect(screen.getByText('이름은 2자 이상 입력해 주세요.')).toBeInTheDocument()
    })
  })

  it('연락처 형식이 맞지 않으면 에러를 표시한다', async () => {
    render(<ConsultForm onSuccess={() => {}} />)
    const phoneInput = screen.getByLabelText('연락처')
    await userEvent.type(phoneInput, '1234')
    fireEvent.blur(phoneInput)
    await waitFor(() => {
      expect(screen.getByText('010-XXXX-XXXX 형식으로 입력해 주세요.')).toBeInTheDocument()
    })
  })

  it('필수 항목이 모두 비어있으면 제출이 안된다', async () => {
    const mockSuccess = jest.fn()
    render(<ConsultForm onSuccess={mockSuccess} />)
    fireEvent.click(screen.getByRole('button', { name: '상담 신청' }))
    await waitFor(() => {
      expect(mockSuccess).not.toHaveBeenCalled()
    })
  })
})
```

- [ ] **Step 2: 테스트 실패 확인**

```bash
npm test -- --testPathPattern=ConsultForm
```
Expected: FAIL

- [ ] **Step 3: ConsultForm.tsx 구현**

```typescript
'use client'
import { useState } from 'react'
import { INQUIRY_TYPES, SITE } from '@/lib/constants'

interface FormData {
  name: string
  phone: string
  inquiryType: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
}

const FORMSPREE_ID = 'REPLACE_WITH_FORMSPREE_ID'
const PHONE_REGEX = /^010-\d{4}-\d{4}$/

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (data.name.trim().length < 2) errors.name = '이름은 2자 이상 입력해 주세요.'
  if (!PHONE_REGEX.test(data.phone)) errors.phone = '010-XXXX-XXXX 형식으로 입력해 주세요.'
  return errors
}

interface ConsultFormProps {
  onSuccess: () => void
}

export default function ConsultForm({ onSuccess }: ConsultFormProps) {
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', inquiryType: INQUIRY_TYPES[0], message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [submitError, setSubmitError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (field: keyof FormData, value: string) => {
    const updated = { ...form, [field]: value }
    setForm(updated)
    if (touched[field]) setErrors(validate(updated))
  }

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors(validate(form))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const allTouched = { name: true, phone: true }
    setTouched(allTouched)
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setLoading(true)
    setSubmitError(false)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        onSuccess()
      } else {
        setSubmitError(true)
      }
    } catch {
      setSubmitError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* 이름 */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-textprimary mb-1">이름 <span className="text-red-500">*</span></label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          placeholder="홍길동"
          className={`w-full border rounded px-3 py-2 text-sm outline-none focus:border-primary ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* 연락처 */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-textprimary mb-1">연락처 <span className="text-red-500">*</span></label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          onBlur={() => handleBlur('phone')}
          placeholder="010-1234-5678"
          className={`w-full border rounded px-3 py-2 text-sm outline-none focus:border-primary ${errors.phone ? 'border-red-400' : 'border-gray-300'}`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      {/* 문의 유형 */}
      <div>
        <label htmlFor="inquiryType" className="block text-sm font-medium text-textprimary mb-1">문의 유형</label>
        <select
          id="inquiryType"
          value={form.inquiryType}
          onChange={(e) => handleChange('inquiryType', e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-primary"
        >
          {INQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      {/* 내용 */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-textprimary mb-1">문의 내용</label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="문의하실 내용을 자유롭게 작성해 주세요."
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-primary resize-none"
        />
      </div>

      {submitError && (
        <p className="text-red-500 text-sm">
          전송에 실패했습니다. 전화({SITE.phone})로 문의해 주세요.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white py-3 rounded font-medium hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {loading ? '전송 중...' : '상담 신청'}
      </button>
    </form>
  )
}
```

- [ ] **Step 4: 테스트 통과 확인**

```bash
npm test -- --testPathPattern=ConsultForm
```
Expected: PASS (3 tests)

- [ ] **Step 5: ConsultPanel.tsx 구현**

```typescript
'use client'
import { useState } from 'react'
import ConsultForm from '@/components/forms/ConsultForm'

export default function ConsultPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSuccess = () => {
    setSubmitted(true)
    setTimeout(() => {
      setIsOpen(false)
      setSubmitted(false)
    }, 2000)
  }

  return (
    <>
      {/* 무료상담 버튼 - 모든 페이지 좌측 하단 고정 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-4 z-50 bg-accent text-white font-bold px-5 py-3 rounded-full shadow-lg hover:brightness-95 transition-all text-sm"
      >
        무료 상담
      </button>

      {/* 오버레이 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* PC: 우측 사이드패널 */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 hidden lg:block ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-primary font-bold text-lg">무료 상담 신청</h2>
          <button onClick={() => setIsOpen(false)} className="text-textsecondary hover:text-textprimary text-2xl">✕</button>
        </div>
        <div className="p-6 overflow-y-auto h-full pb-24">
          {submitted ? (
            <p className="text-primary font-medium text-center py-8">
              접수되었습니다.<br />빠른 시간 내 연락드리겠습니다.
            </p>
          ) : (
            <ConsultForm onSuccess={handleSuccess} />
          )}
        </div>
      </div>

      {/* 모바일: 바텀시트 */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-2xl shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-primary font-bold text-lg">무료 상담 신청</h2>
          <button onClick={() => setIsOpen(false)} className="text-textsecondary text-2xl">✕</button>
        </div>
        <div className="p-5 overflow-y-auto max-h-[80vh]">
          {submitted ? (
            <p className="text-primary font-medium text-center py-8">
              접수되었습니다.<br />빠른 시간 내 연락드리겠습니다.
            </p>
          ) : (
            <ConsultForm onSuccess={handleSuccess} />
          )}
        </div>
      </div>
    </>
  )
}
```

- [ ] **Step 6: layout.tsx에 ConsultPanel 추가**

`app/layout.tsx`의 `<FloatingButtons />` 다음에 추가:
```typescript
import ConsultPanel from '@/components/ui/ConsultPanel'
// ...
<FloatingButtons />
<ConsultPanel />
```

- [ ] **Step 7: 커밋**

```bash
git add components/ __tests__/
git commit -m "feat: add consultation slide panel with form validation and Formspree integration"
```

---

## Task 8: 공통 UI 컴포넌트

**Files:**
- Create: `components/ui/PageHeader.tsx`
- Create: `components/ui/HeroSection.tsx`
- Create: `components/ui/ServiceCard.tsx`
- Create: `components/ui/TrustSection.tsx`
- Create: `components/ui/ReviewCard.tsx`

- [ ] **Step 1: PageHeader.tsx (내부 페이지 상단 배너)**

```typescript
interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumb?: string[]
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="bg-primary pt-32 pb-16 text-white text-center">
      {breadcrumb && (
        <p className="text-accent text-sm mb-2">{breadcrumb.join(' > ')}</p>
      )}
      <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
      {subtitle && <p className="text-gray-300 text-sm md:text-base">{subtitle}</p>}
    </section>
  )
}
```

- [ ] **Step 2: HeroSection.tsx (홈 히어로)**

```typescript
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_#C9A84C,_transparent_60%)]" />

      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="text-accent text-sm md:text-base font-medium mb-4 tracking-widest uppercase">
          Former Police Detective
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          경찰 출신 전문가의<br />
          <span className="text-accent">정확하고 신속한</span> 조사
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-10">
          20년 이상의 현장 경험으로 의뢰인의 진실을 밝혀드립니다.<br />
          모든 사건은 철저한 비밀이 보장됩니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:01084182033"
            className="bg-accent text-white font-bold px-8 py-4 rounded hover:brightness-95 transition-all"
          >
            지금 전화 상담
          </a>
          <a
            href="/about/company"
            className="border border-white text-white font-medium px-8 py-4 rounded hover:bg-white hover:text-primary transition-all"
          >
            회사 소개 보기
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: ServiceCard.tsx**

```typescript
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: string
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link href={href} className="group block border border-gray-200 rounded-lg p-6 hover:border-accent transition-all hover:shadow-md">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-primary font-bold text-lg mb-2 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-textsecondary text-sm leading-relaxed">{description}</p>
      <p className="text-accent text-sm font-medium mt-4">자세히 보기 →</p>
    </Link>
  )
}
```

- [ ] **Step 4: TrustSection.tsx**

카드 남발 금지. 리스트 + 구분선 레이아웃으로 구성.

```typescript
const TRUST_POINTS = [
  { icon: '🛡️', title: '경찰 출신 전문가', desc: '20년 이상 현장 경험의 전직 경찰 출신 탐정이 직접 조사합니다.' },
  { icon: '🔒', title: '완벽한 비밀 보장', desc: '의뢰인의 모든 정보와 사건 내용은 철저히 비밀이 유지됩니다.' },
  { icon: '⚖️', title: '법적 효력 있는 증거', desc: '법원에서 인정되는 합법적인 방법으로만 증거를 수집합니다.' },
  { icon: '📞', title: '24시간 상담 가능', desc: '언제든지 전화 또는 카카오톡으로 빠른 상담을 받으실 수 있습니다.' },
]

export default function TrustSection() {
  return (
    <section className="py-20 bg-bgalt">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-3">왜 명진탐정사무소인가요?</h2>
          <div className="w-16 h-1 bg-accent" />
        </div>
        <div className="divide-y divide-gray-200">
          {TRUST_POINTS.map((point) => (
            <div key={point.title} className="flex items-start gap-6 py-8">
              <span className="text-3xl flex-shrink-0 mt-1">{point.icon}</span>
              <div>
                <h3 className="font-bold text-primary text-lg mb-1">{point.title}</h3>
                <p className="text-textsecondary text-sm leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: ReviewCard.tsx**

```typescript
interface ReviewCardProps {
  content: string
  author: string
  service: string
}

export default function ReviewCard({ content, author, service }: ReviewCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
      <p className="text-accent text-lg mb-3">★★★★★</p>
      <p className="text-textprimary text-sm leading-relaxed mb-4">"{content}"</p>
      <div className="border-t border-gray-100 pt-3">
        <p className="text-textsecondary text-xs">{author} · {service}</p>
      </div>
    </div>
  )
}
```

- [ ] **Step 6: 커밋**

```bash
git add components/ui/
git commit -m "feat: add shared UI components (PageHeader, HeroSection, ServiceCard, TrustSection, ReviewCard)"
```

---

## Task 9: 홈 페이지

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: app/page.tsx 작성**

```typescript
import HeroSection from '@/components/ui/HeroSection'
import ServiceCard from '@/components/ui/ServiceCard'
import TrustSection from '@/components/ui/TrustSection'
import ReviewCard from '@/components/ui/ReviewCard'
import Link from 'next/link'

const SERVICES = [
  { title: '배우자 불륜 조사', description: '배우자의 외도 여부를 법적으로 유효한 증거와 함께 확인해드립니다.', href: '/services/infidelity', icon: '💍' },
  { title: '소재/가출인 파악', description: '연락이 끊긴 가족, 지인, 채무자의 현재 소재를 파악해드립니다.', href: '/services/missing-person', icon: '🔍' },
  { title: '기업 신용조사', description: '거래처나 파트너사의 신용도와 실태를 철저히 조사합니다.', href: '/services/corporate', icon: '🏢' },
  { title: '증거 수집', description: '민사·형사 사건에 필요한 합법적인 증거를 수집해드립니다.', href: '/services/evidence', icon: '📋' },
]

const REVIEWS = [
  { content: '빠른 조사와 명확한 증거 덕분에 소송에서 유리하게 진행할 수 있었습니다. 정말 감사합니다.', author: '의뢰인 A', service: '배우자 불륜 조사' },
  { content: '연락이 끊겼던 채무자를 2주 만에 찾아주셨습니다. 경찰 출신이라 그런지 믿음이 갔습니다.', author: '의뢰인 B', service: '소재 파악' },
  { content: '상담부터 결과 보고까지 친절하고 전문적이었습니다. 비밀도 완벽하게 지켜주셨어요.', author: '의뢰인 C', service: '증거 수집' },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* 서비스 섹션 */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-3">업무 분야</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4" />
          <p className="text-textsecondary">전문적이고 합법적인 방법으로 진실을 밝혀드립니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => <ServiceCard key={s.href} {...s} />)}
        </div>
        <div className="text-center mt-10">
          <Link href="/services/infidelity" className="border border-primary text-primary px-8 py-3 rounded hover:bg-primary hover:text-white transition-all font-medium">
            전체 서비스 보기
          </Link>
        </div>
      </section>

      <TrustSection />

      {/* 후기 섹션 */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-3">의뢰인 후기</h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => <ReviewCard key={r.author} {...r} />)}
        </div>
        <div className="text-center mt-10">
          <Link href="/cases/reviews" className="border border-primary text-primary px-8 py-3 rounded hover:bg-primary hover:text-white transition-all font-medium">
            더 많은 후기 보기
          </Link>
        </div>
      </section>

      {/* CTA 배너 */}
      <section className="bg-primary py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">지금 바로 무료 상담을 받아보세요</h2>
        <p className="text-gray-300 mb-8">모든 상담은 비밀이 보장되며, 부담 없이 문의하실 수 있습니다.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:01084182033" className="bg-accent text-white font-bold px-8 py-4 rounded hover:brightness-95 transition-all">
            ☎ 전화 상담
          </a>
          <Link href="/contact/consult" className="border border-white text-white font-medium px-8 py-4 rounded hover:bg-white hover:text-primary transition-all">
            온라인 상담 신청
          </Link>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: 개발 서버 확인**

```bash
npm run dev
```
브라우저에서 http://localhost:3000 열어 홈 페이지 전체 확인

- [ ] **Step 3: 커밋**

```bash
git add app/page.tsx
git commit -m "feat: build home page with hero, services, trust, reviews, and CTA sections"
```

---

## Task 10: About 페이지 (3개)

**Files:**
- Create: `app/about/company/page.tsx`
- Create: `app/about/ceo/page.tsx`
- Create: `app/about/process/page.tsx`

- [ ] **Step 1: app/about/company/page.tsx**

```typescript
import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = genMeta({
  title: '회사 소개',
  description: '경찰 출신 전문 탐정이 이끄는 명진탐정사무소를 소개합니다.',
})

export default function CompanyPage() {
  return (
    <>
      <PageHeader title="회사 소개" breadcrumb={['명진 소개', '회사 소개']} />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-primary mb-6">명진탐정사무소는</h2>
        <p className="text-textprimary leading-relaxed mb-6">
          명진탐정사무소는 경찰 출신 전문 탐정이 설립한 신뢰할 수 있는 조사 기관입니다.
          20년 이상의 현장 경험을 바탕으로 의뢰인의 진실을 밝혀드리며,
          모든 조사는 합법적인 방법으로만 진행합니다.
        </p>
        <div className="border-l-4 border-accent pl-6 py-2 bg-bgalt rounded-r">
          <p className="text-textprimary font-medium">
            "의뢰인의 아픔을 내 것으로 여기고, 진실을 밝히는 일에 최선을 다합니다."
          </p>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: app/about/ceo/page.tsx**

```typescript
import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = genMeta({
  title: '대표 소개',
  description: '경찰 출신 명진탐정사무소 대표를 소개합니다.',
})

export default function CeoPage() {
  return (
    <>
      <PageHeader title="대표 소개" breadcrumb={['명진 소개', '대표 소개']} />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-48 h-48 bg-bgalt rounded-lg flex-shrink-0 flex items-center justify-center text-textsecondary text-sm">
            대표 사진
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">홍길동 대표</h2>
            <p className="text-accent font-medium mb-4">경찰 출신 공인탐정</p>
            <ul className="space-y-2 text-textprimary text-sm">
              <li>• 전) 서울지방경찰청 수사과 근무 (20년)</li>
              <li>• 공인탐정 자격 취득</li>
              <li>• 명진탐정사무소 설립 및 운영</li>
            </ul>
            <p className="mt-6 text-textprimary leading-relaxed text-sm">
              (실제 대표 소개 내용으로 교체 예정)
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 3: app/about/process/page.tsx**

```typescript
import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = genMeta({
  title: '업무 프로세스',
  description: '명진탐정사무소의 체계적인 업무 진행 프로세스를 안내합니다.',
})

const STEPS = [
  { step: '01', title: '무료 상담', desc: '전화 또는 카카오톡으로 현황을 말씀해 주시면 해결 방법을 안내드립니다.' },
  { step: '02', title: '계약 체결', desc: '조사 범위와 비용을 협의 후 계약서를 작성합니다. 비밀 유지 계약 포함.' },
  { step: '03', title: '조사 진행', desc: '전문 탐정이 합법적인 방법으로 조사를 진행합니다.' },
  { step: '04', title: '결과 보고', desc: '조사 결과를 법적 효력이 있는 형태로 보고서와 함께 전달해드립니다.' },
]

export default function ProcessPage() {
  return (
    <>
      <PageHeader title="업무 프로세스" breadcrumb={['명진 소개', '업무 프로세스']} />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {STEPS.map((s, i) => (
            <div key={s.step} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                {s.step}
              </div>
              <div className="pt-2">
                <h3 className="text-primary font-bold text-lg mb-1">{s.title}</h3>
                <p className="text-textprimary text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 4: 커밋**

```bash
git add app/about/
git commit -m "feat: add About pages (company, CEO, process)"
```

---

## Task 11: 서비스 페이지 (4개)

**Files:**
- Create: `app/services/infidelity/page.tsx`
- Create: `app/services/missing-person/page.tsx`
- Create: `app/services/corporate/page.tsx`
- Create: `app/services/evidence/page.tsx`

- [ ] **Step 1: 공통 서비스 페이지 구조 정의**

각 서비스 페이지는 동일한 구조:
1. PageHeader (제목 + 브레드크럼)
2. 서비스 설명 섹션
3. 조사 포함 내용 (체크리스트)
4. CTA 배너

- [ ] **Step 2: app/services/infidelity/page.tsx**

```typescript
import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import Link from 'next/link'

export const metadata: Metadata = genMeta({
  title: '배우자 불륜 조사',
  description: '경찰 출신 전문 탐정이 법적으로 유효한 증거와 함께 배우자의 외도 여부를 조사합니다.',
})

const INCLUDES = ['미행 및 잠복 조사', '사진/영상 증거 수집', '행동 패턴 분석', '법원 제출 가능한 보고서 작성']

export default function InfidelityPage() {
  return (
    <>
      <PageHeader title="배우자 불륜 조사" subtitle="합법적인 방법으로 진실을 밝혀드립니다" breadcrumb={['업무분야', '배우자 불륜 조사']} />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-textprimary leading-relaxed mb-10">
          배우자의 외도가 의심된다면 혼자 고민하지 마세요. 명진탐정사무소는 법적 효력이 있는
          증거를 합법적인 방법으로 수집하여 이혼 소송이나 위자료 청구에 도움을 드립니다.
          모든 조사는 비밀이 보장됩니다.
        </p>
        <h3 className="text-primary font-bold text-lg mb-4">조사 포함 내용</h3>
        <ul className="space-y-3 mb-12">
          {INCLUDES.map((item) => (
            <li key={item} className="flex items-center gap-3 text-textprimary">
              <span className="text-accent font-bold">✓</span> {item}
            </li>
          ))}
        </ul>
        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <p className="text-lg font-bold mb-4">지금 바로 무료 상담을 받아보세요</p>
          <a href="tel:01084182033" className="inline-block bg-accent text-white font-bold px-8 py-3 rounded hover:brightness-95 transition-all">
            ☎ 010-8418-2033
          </a>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 3: 나머지 3개 서비스 페이지 작성**

동일한 패턴으로 작성 (title, description, INCLUDES 내용만 변경):

**app/services/missing-person/page.tsx**
- title: '소재/가출인 파악'
- description: '연락이 끊긴 가족, 지인, 채무자의 현재 소재를 신속히 파악해드립니다.'
- INCLUDES: ['소재 파악 조사', '생활 패턴 분석', '지인 탐문 조사', '결과 보고서 제공']

**app/services/corporate/page.tsx**
- title: '기업 신용조사'
- description: '거래처나 파트너사의 신용도와 실태를 철저히 조사하여 사업 리스크를 줄여드립니다.'
- INCLUDES: ['기업 재무상태 조사', '대표자 신원 확인', '실제 영업 실태 파악', '종합 신용 보고서']

**app/services/evidence/page.tsx**
- title: '증거 수집'
- description: '민사·형사 사건에 필요한 합법적인 증거를 수집하여 법적 분쟁에서 유리한 위치를 만들어드립니다.'
- INCLUDES: ['사진/영상 증거 수집', '목격자 진술 확보', '디지털 증거 분석 지원', '법원 제출용 보고서']

- [ ] **Step 4: 커밋**

```bash
git add app/services/
git commit -m "feat: add 4 service detail pages"
```

---

## Task 12: 사례 & 고객센터 페이지

**Files:**
- Create: `app/cases/results/page.tsx`
- Create: `app/cases/reviews/page.tsx`
- Create: `app/contact/consult/page.tsx`
- Create: `app/contact/location/page.tsx`

- [ ] **Step 1: app/cases/results/page.tsx**

```typescript
import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = genMeta({
  title: '사건 사례',
  description: '명진탐정사무소의 실제 조사 사례를 확인해보세요.',
})

const CASES = [
  { category: '배우자 불륜 조사', title: '3주 만에 증거 확보 성공', summary: '장기 잠복 조사를 통해 법원에서 인정된 영상 증거를 확보하여 이혼 소송에서 유리한 결과를 이끌어냈습니다.' },
  { category: '소재 파악', title: '1개월째 연락 두절된 채무자 소재 파악', summary: '탐문 조사와 행동 패턴 분석으로 10일 만에 채무자의 현재 거주지를 파악했습니다.' },
  { category: '기업 신용조사', title: '허위 실적 기업 사전 적발', summary: '계약 체결 전 의뢰를 통해 상대 기업의 실제 영업 실태와 재무 허위 신고를 사전에 파악했습니다.' },
]

export default function CaseResultsPage() {
  return (
    <>
      <PageHeader title="사건 사례" subtitle="실제 조사 사례를 통해 전문성을 확인하세요" breadcrumb={['업무사례', '사건 사례']} />
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-6">
        {CASES.map((c) => (
          <div key={c.title} className="border border-gray-100 rounded-lg p-6 hover:border-accent transition-colors">
            <p className="text-accent text-sm font-medium mb-2">{c.category}</p>
            <h3 className="text-primary font-bold text-lg mb-3">{c.title}</h3>
            <p className="text-textprimary text-sm leading-relaxed">{c.summary}</p>
          </div>
        ))}
      </section>
    </>
  )
}
```

- [ ] **Step 2: app/cases/reviews/page.tsx**

```typescript
import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import ReviewCard from '@/components/ui/ReviewCard'

export const metadata: Metadata = genMeta({
  title: '의뢰인 후기',
  description: '명진탐정사무소를 이용한 의뢰인들의 실제 후기입니다.',
})

const REVIEWS = [
  { content: '빠른 조사와 명확한 증거 덕분에 소송에서 유리하게 진행할 수 있었습니다.', author: '의뢰인 A', service: '배우자 불륜 조사' },
  { content: '연락이 끊겼던 채무자를 2주 만에 찾아주셨습니다. 믿음이 갔습니다.', author: '의뢰인 B', service: '소재 파악' },
  { content: '상담부터 결과 보고까지 친절하고 전문적이었습니다. 비밀도 완벽하게 지켜주셨어요.', author: '의뢰인 C', service: '증거 수집' },
  { content: '계약 전 거래처 신용조사를 의뢰했는데 결정적인 문제를 발견해주셨습니다.', author: '의뢰인 D', service: '기업 신용조사' },
]

export default function ReviewsPage() {
  return (
    <>
      <PageHeader title="의뢰인 후기" subtitle="의뢰인들의 진솔한 이야기" breadcrumb={['업무사례', '의뢰인 후기']} />
      <section className="max-w-4xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {REVIEWS.map((r) => <ReviewCard key={r.author} {...r} />)}
      </section>
    </>
  )
}
```

- [ ] **Step 3: app/contact/consult/page.tsx**

```typescript
import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import ConsultForm from '@/components/forms/ConsultForm'

export const metadata: Metadata = genMeta({
  title: '상담 신청',
  description: '명진탐정사무소에 온라인으로 무료 상담을 신청하세요.',
})

// 페이지에서 사용할 ConsultForm 래퍼 (onSuccess는 클라이언트에서만 동작)
import ConsultPageForm from './ConsultPageForm'

export default function ConsultPage() {
  return (
    <>
      <PageHeader title="상담 신청" subtitle="무료 상담을 신청하시면 빠른 시간 내 연락드립니다" breadcrumb={['고객센터', '상담 신청']} />
      <section className="max-w-xl mx-auto px-4 py-16">
        <ConsultPageForm />
      </section>
    </>
  )
}
```

- [ ] **Step 4: app/contact/consult/ConsultPageForm.tsx (클라이언트 래퍼)**

```typescript
'use client'
import { useState } from 'react'
import ConsultForm from '@/components/forms/ConsultForm'

export default function ConsultPageForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="text-primary text-xl font-bold mb-2">접수되었습니다.</p>
        <p className="text-textsecondary">빠른 시간 내 연락드리겠습니다.</p>
      </div>
    )
  }

  return <ConsultForm onSuccess={() => setSubmitted(true)} />
}
```

- [ ] **Step 5: app/contact/location/page.tsx**

```typescript
import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = genMeta({
  title: '오시는 길',
  description: '명진탐정사무소 위치 및 오시는 방법을 안내합니다.',
})

export default function LocationPage() {
  return (
    <>
      <PageHeader title="오시는 길" breadcrumb={['고객센터', '오시는 길']} />
      <section className="max-w-3xl mx-auto px-4 py-16">
        {/* 지도 플레이스홀더 - 실제 주소 확정 후 Google Maps/네이버지도 embed 교체 */}
        <div className="w-full h-80 bg-bgalt rounded-lg flex items-center justify-center text-textsecondary mb-8 border border-gray-200">
          지도 (실제 주소 확정 후 embed 교체 예정)
        </div>
        <div className="space-y-3">
          <div className="flex gap-4">
            <span className="text-accent font-bold w-20 flex-shrink-0">주소</span>
            <span className="text-textprimary">{SITE.address}</span>
          </div>
          <div className="flex gap-4">
            <span className="text-accent font-bold w-20 flex-shrink-0">전화</span>
            <a href={`tel:${SITE.phoneRaw}`} className="text-textprimary hover:text-accent">{SITE.phone}</a>
          </div>
          <div className="flex gap-4">
            <span className="text-accent font-bold w-20 flex-shrink-0">운영시간</span>
            <span className="text-textprimary">24시간 상담 가능</span>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 6: 커밋**

```bash
git add app/cases/ app/contact/
git commit -m "feat: add cases and contact pages"
```

---

## Task 13: SEO (Sitemap, Robots, JSON-LD)

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`
- Modify: `app/layout.tsx` (JSON-LD 추가)

- [ ] **Step 1: app/sitemap.ts**

```typescript
import { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about/company',
    '/about/ceo',
    '/about/process',
    '/services/infidelity',
    '/services/missing-person',
    '/services/corporate',
    '/services/evidence',
    '/cases/results',
    '/cases/reviews',
    '/contact/consult',
    '/contact/location',
  ]

  return routes.map((route) => ({
    url: `${SITE.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
```

- [ ] **Step 2: app/robots.ts**

```typescript
import { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE.domain}/sitemap.xml`,
  }
}
```

- [ ] **Step 3: app/layout.tsx에 JSON-LD 추가**

`<body>` 태그 안에 추가:
```typescript
import { generateLocalBusinessJsonLd } from '@/lib/seo'

// <body> 안에:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessJsonLd()) }}
/>
```

- [ ] **Step 4: SEO 확인**

```bash
npm run build
```
빌드 후 `.next/server/app/sitemap.xml/route.js` 존재 확인

- [ ] **Step 5: 커밋**

```bash
git add app/sitemap.ts app/robots.ts app/layout.tsx
git commit -m "feat: add sitemap, robots.txt, and JSON-LD LocalBusiness schema"
```

---

## Task 14: GitHub 푸시 & Cloudflare Pages 배포

**Files:**
- No code changes, deployment configuration

- [ ] **Step 1: GitHub 원격 저장소 연결**

```bash
git remote add origin https://github.com/Brrriann/mj.git
git branch -M main
git push -u origin main
```

- [ ] **Step 2: Cloudflare Pages 프로젝트 설정**

Cloudflare Dashboard → Pages → Create a project → Connect to Git:
- 저장소: `Brrriann/mj`
- 빌드 명령어: `npx @cloudflare/next-on-pages`
- 출력 디렉토리: `.vercel/output/static`
- Node.js 버전: 20
- 환경 변수: `NODE_VERSION=20`

- [ ] **Step 3: Cloudflare 빌드 확인**

Cloudflare Dashboard에서 빌드 로그 확인
Expected: 빌드 성공, Pages URL 발급

- [ ] **Step 4: 커스텀 도메인 연결**

Cloudflare Pages → Custom domains → mjdet.com 추가
DNS 설정 확인 (CNAME 또는 직접 연결)

- [ ] **Step 5: 배포 전 체크리스트 완료 확인**

- [ ] Formspree 계정 생성 → 폼 ID 발급 → `ConsultForm.tsx`의 `FORMSPREE_ID` 교체
- [ ] 카카오톡 비즈니스 채널 URL 확인 → `constants.ts`의 `kakaoUrl` 교체
- [ ] 실제 주소 확인 → `constants.ts`의 `address` 업데이트
- [ ] 대표 사진 준비 → `public/images/ceo.jpg` 추가 후 CeoPage 이미지 교체
- [ ] 실제 콘텐츠(서비스 설명, 후기) 교체

- [ ] **Step 6: 최종 커밋**

```bash
git add .
git commit -m "feat: complete mjdet.com website renewal - ready for production"
git push origin main
```

---

## 배포 전 필수 완료 항목

| 항목 | 파일 | 상태 |
|---|---|---|
| Formspree 폼 ID | `components/forms/ConsultForm.tsx:FORMSPREE_ID` | 교체 필요 |
| 카카오톡 채널 URL | `lib/constants.ts:kakaoUrl` | 교체 필요 |
| 실제 주소 | `lib/constants.ts:address` | 업데이트 필요 |
| 지도 embed | `app/contact/location/page.tsx` | 교체 필요 |
| 대표 사진 | `public/images/` + `app/about/ceo/page.tsx` | 추가 필요 |
| 실제 콘텐츠 | 서비스 페이지, 후기, 사례 | 교체 필요 |
