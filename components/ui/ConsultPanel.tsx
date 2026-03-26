'use client'
import { useState } from 'react'
import { X } from 'lucide-react'
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
      {/* 무료상담 버튼 - 좌측 하단 고정 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-4 z-50 bg-accent text-white font-bold px-5 py-3 rounded-full shadow-lg hover:brightness-95 transition-all duration-200 text-sm cursor-pointer"
      >
        무료 상담
      </button>

      {/* 오버레이 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* PC: 우측 사이드패널 */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[60] shadow-2xl transition-transform duration-300 hidden lg:block ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="무료 상담 신청"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-primary font-bold text-lg font-serif">무료 상담 신청</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-textsecondary hover:text-textprimary transition-colors duration-200 cursor-pointer"
            aria-label="패널 닫기"
          >
            <X size={24} />
          </button>
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
        className={`fixed bottom-0 left-0 right-0 bg-white z-[60] rounded-t-2xl shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="무료 상담 신청"
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-primary font-bold text-lg font-serif">무료 상담 신청</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-textsecondary hover:text-textprimary transition-colors duration-200 cursor-pointer"
            aria-label="패널 닫기"
          >
            <X size={24} />
          </button>
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
