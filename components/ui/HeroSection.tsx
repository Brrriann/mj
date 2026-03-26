import { Phone, MessageCircle, Award, Users, Star } from 'lucide-react'
import { SITE } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-primary overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,168,76,0.15),_transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-12 w-full">
        <div className="max-w-3xl">
          {/* 뱃지 */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent text-xs font-medium px-3 py-1.5 rounded-full">
              <Award size={12} /> 경찰 출신 전문 탐정
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              <Users size={12} /> 1,200+ 사건 해결
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              <Star size={12} /> 의뢰인 만족도 98%
            </span>
          </div>

          {/* 헤드라인 */}
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-white leading-tight mb-6">
            진실을 밝히는<br />
            <span className="text-accent">전문 탐정</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4">
            20년 이상의 현장 경험을 가진 경찰 출신 탐정이 직접 조사합니다.
          </p>
          <p className="text-gray-400 text-base mb-10">
            배우자 불륜 조사 · 소재파악 · 기업신용조사 · 증거수집<br />
            <span className="text-accent/80">모든 의뢰는 철저한 비밀이 보장됩니다.</span>
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center justify-center gap-3 bg-accent text-white font-bold px-8 py-4 text-lg hover:brightness-95 transition-all duration-200 cursor-pointer">
              <Phone size={20} /> 지금 전화 상담
            </a>
            <a href={SITE.kakaoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#FEE500] text-[#3A1D1D] font-bold px-8 py-4 text-lg hover:brightness-95 transition-all duration-200 cursor-pointer">
              <MessageCircle size={20} /> 카카오톡 상담
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4">초기 상담 무료 · 24시간 연락 가능</p>
        </div>
      </div>

      {/* 하단 스크롤 힌트 */}
      <div className="relative z-10 pb-8 text-center">
        <div className="inline-flex flex-col items-center gap-2 text-gray-500 text-xs">
          <div className="w-px h-12 bg-gray-600" />
          스크롤
        </div>
      </div>
    </section>
  )
}
