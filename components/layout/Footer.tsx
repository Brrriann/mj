import Link from 'next/link'
import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react'
import { SITE, NAV } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* 브랜드 */}
        <div className="md:col-span-1">
          <p className="text-accent font-bold text-xl font-serif mb-4">명진탐정사무소</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            경찰 출신 전문가의 정확하고 신속한 조사.<br />
            모든 의뢰는 철저한 비밀이 보장됩니다.
          </p>
          <div className="space-y-3">
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors duration-200 text-sm cursor-pointer">
              <Phone size={15} className="text-accent" /> {SITE.phone}
            </a>
            <a href={SITE.kakaoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors duration-200 text-sm cursor-pointer">
              <MessageCircle size={15} className="text-accent" /> 카카오톡 상담
            </a>
            <p className="flex items-center gap-3 text-gray-400 text-sm">
              <Clock size={15} className="text-accent" /> 24시간 상담 가능
            </p>
            <p className="flex items-start gap-3 text-gray-400 text-sm">
              <MapPin size={15} className="text-accent mt-0.5" /> {SITE.address}
            </p>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors duration-200 text-sm cursor-pointer">
              <Mail size={15} className="text-accent" /> {SITE.email}
            </a>
          </div>
        </div>

        {/* 서비스 메뉴 */}
        <div>
          <p className="text-accent font-bold mb-5 text-sm tracking-wider uppercase">업무분야</p>
          <ul className="space-y-3">
            {[
              { label: '배우자 불륜 조사', href: '/services/infidelity' },
              { label: '소재/가출인 파악', href: '/services/missing-person' },
              { label: '기업 신용조사', href: '/services/corporate' },
              { label: '증거 수집', href: '/services/evidence' },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-gray-400 hover:text-accent text-sm transition-colors duration-200 cursor-pointer">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 회사 정보 */}
        <div>
          <p className="text-accent font-bold mb-5 text-sm tracking-wider uppercase">회사 정보</p>
          <ul className="space-y-3">
            {[
              { label: '회사 소개', href: '/about/company' },
              { label: '대표 소개', href: '/about/ceo' },
              { label: '업무 프로세스', href: '/about/process' },
              { label: '사건 사례', href: '/cases/results' },
              { label: '의뢰인 후기', href: '/cases/reviews' },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-gray-400 hover:text-accent text-sm transition-colors duration-200 cursor-pointer">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 상담 안내 */}
        <div>
          <p className="text-accent font-bold mb-5 text-sm tracking-wider uppercase">상담 안내</p>
          <div className="bg-white/5 border border-white/10 p-5">
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">초기 상담은 무료이며 비밀이 보장됩니다. 지금 바로 연락주세요.</p>
            <a href={`tel:${SITE.phoneRaw}`} className="block w-full text-center bg-accent text-white font-bold py-3 text-sm hover:brightness-95 transition-all duration-200 cursor-pointer mb-2">
              전화 상담
            </a>
            <Link href="/contact/consult" className="block w-full text-center border border-white/30 text-gray-300 py-3 text-sm hover:bg-white/10 transition-all duration-200 cursor-pointer">
              온라인 상담
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} 명진탐정사무소. All rights reserved.</p>
          <p className="text-gray-600 text-xs">상호: 명진탐정사무소 | 대표: {SITE.ceo} | 사업자등록번호: {SITE.businessNumber} | 탐정사 1급 2023-003035</p>
        </div>
      </div>
    </footer>
  )
}
