'use client'
import { Phone, MessageCircle } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { useState, useEffect } from 'react'

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 items-end">
      {/* 전화 버튼 - 모바일만 */}
      <div className="lg:hidden">
        <a
          href={`tel:${SITE.phoneRaw}`}
          aria-label="전화 상담"
          className="flex items-center gap-2 bg-primary text-white font-bold px-4 py-3 shadow-lg hover:bg-primary-dark transition-all duration-200 cursor-pointer"
        >
          <Phone size={18} />
          <span className="text-sm">{SITE.phone}</span>
        </a>
      </div>

      {/* 카카오톡 버튼 - 전 디바이스 */}
      <a
        href={SITE.kakaoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="카카오톡 상담"
        className="flex items-center gap-2 bg-[#FEE500] text-[#3A1D1D] font-bold px-4 py-3 shadow-lg hover:brightness-95 transition-all duration-200 cursor-pointer"
      >
        <MessageCircle size={18} />
        <span className="text-sm">카카오 상담</span>
      </a>
    </div>
  )
}
