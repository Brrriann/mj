import Link from 'next/link'
import { Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 items-end">
      {/* 전화 버튼 - 모바일만 */}
      <div className="lg:hidden">
        <a
          href={`tel:${SITE.phoneRaw}`}
          aria-label="전화 상담"
          className="flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg text-white hover:bg-primary-dark transition-colors duration-200 cursor-pointer"
        >
          <Phone size={22} />
        </a>
      </div>

      {/* 카카오톡 버튼 - 전 디바이스 */}
      <Link
        href={SITE.kakaoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="카카오톡 상담"
        className="flex items-center justify-center w-12 h-12 bg-[#FEE500] rounded-full shadow-lg hover:brightness-95 transition-all duration-200 cursor-pointer"
      >
        {/* 카카오 공식 아이콘 SVG */}
        <svg viewBox="0 0 24 24" fill="#3A1D1D" className="w-6 h-6" aria-hidden="true">
          <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.697 1.664 5.06 4.166 6.441L5.09 21l5.07-2.68A11.5 11.5 0 0012 18.5c5.523 0 10-3.477 10-7.5S17.523 3 12 3z" />
        </svg>
      </Link>
    </div>
  )
}
