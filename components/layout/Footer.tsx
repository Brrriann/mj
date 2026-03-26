import Link from 'next/link'
import { SITE, NAV } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 브랜드 */}
        <div>
          <p className="text-accent font-bold text-lg mb-3 font-serif">명진탐정사무소</p>
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
                <Link href={item.href} className="text-gray-300 hover:text-accent text-sm transition-colors duration-200">
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
            전화: <a href={`tel:${SITE.phoneRaw}`} className="hover:text-accent transition-colors duration-200">{SITE.phone}</a>
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
