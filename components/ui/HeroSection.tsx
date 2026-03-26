'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, MessageCircle, Award, Users, Star, ShieldCheck } from 'lucide-react'
import { SITE } from '@/lib/constants'

const BADGES = [
  { icon: Award, text: '경찰 출신 탐정' },
  { icon: ShieldCheck, text: '공인 민간조사 자격' },
  { icon: Users, text: '1,200+ 해결 사건' },
  { icon: Star, text: '만족도 98%' },
]

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const yFast = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center bg-primary overflow-hidden">
      {/* SVG 클리핑 배경 장식 */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A84C" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* 패럴랙스 배경 원형 */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: yFast }}
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-primary-light/20 blur-2xl pointer-events-none"
      />

      {/* 메인 콘텐츠 */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-12 w-full"
      >
        {/* 배지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {BADGES.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.span
                key={b.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="glass inline-flex items-center gap-2 text-accent text-xs font-medium px-4 py-2 rounded-full"
              >
                <Icon size={12} /> {b.text}
              </motion.span>
            )
          })}
        </motion.div>

        {/* 헤드라인 — 텍스트 마스크 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif text-white leading-tight mb-4">
            진실을 밝히는<br />
            <span className="text-mask">전문 탐정</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-gray-300 text-lg md:text-xl leading-relaxed mb-3 max-w-2xl"
        >
          20년 이상의 수사 현장 경험을 가진 전직 경찰 출신 탐정이 직접 조사합니다.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-accent/80 text-sm mb-12"
        >
          배우자 불륜 조사 · 소재파악 · 기업신용조사 · 증거수집 &nbsp;|&nbsp; 모든 의뢰 완벽 비밀 보장
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="pulse-gold inline-flex items-center justify-center gap-3 bg-accent text-white font-bold px-10 py-5 text-lg hover:brightness-95 transition-all duration-200 cursor-pointer"
          >
            <Phone size={20} /> 지금 전화 상담
          </a>
          <a
            href={SITE.kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#FEE500] text-[#3A1D1D] font-bold px-10 py-5 text-lg hover:brightness-95 transition-all duration-200 cursor-pointer"
          >
            <MessageCircle size={20} /> 카카오톡 무료 상담
          </a>
        </motion.div>
        <p className="text-gray-500 text-sm mt-5">초기 상담 무료 · 24시간 연락 가능 · 상담 내용 완전 비밀 보장</p>
      </motion.div>

      {/* 스크롤 힌트 */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 text-xs flex flex-col items-center gap-2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-gray-500" />
        SCROLL
      </motion.div>
    </section>
  )
}
