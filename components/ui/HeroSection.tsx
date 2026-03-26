'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, MessageCircle, Award, Users, Star, ShieldCheck, Shield } from 'lucide-react'
import { SITE } from '@/lib/constants'

const BADGES = [
  { icon: Award, text: '탐정사 1급 자격' },
  { icon: ShieldCheck, text: '대통령 경호 출신' },
  { icon: Users, text: '1,200+ 해결 사건' },
  { icon: Star, text: '만족도 98%' },
]

const CEO_CAREER = [
  '서울 영등포경찰서 현장경찰',
  '서울 용산경찰서 대통령 교통경호경찰',
  '서울 경찰청 제5기동단 대통령 경호지원경찰',
  '서울 관악경찰서 수사팀',
  '법무법인 인율 전문·자문위원',
  '노무법인 권익 자문위원',
  '직진법무사사무소 자문위원',
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 좌측 — 텍스트 */}
          <div>
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white leading-tight mb-4">
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
              전직 경찰 출신 대표탐정 <strong className="text-accent">{SITE.ceo}</strong>이 직접 조사합니다.
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
          </div>

          {/* 우측 — 대표 프로필 카드 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="glass border border-accent/30 p-8 relative">
              {/* 상단 강조 */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-16 h-16 bg-accent/20 border border-accent flex items-center justify-center flex-shrink-0">
                  <Shield size={30} className="text-accent" />
                </div>
                <div>
                  <p className="text-accent text-xs tracking-widest uppercase mb-1">전직 경찰 출신</p>
                  <h2 className="text-white text-2xl font-bold font-serif">{SITE.ceo}</h2>
                  <p className="text-gray-400 text-sm">대표탐정 · 탐정사 1급</p>
                </div>
              </div>

              {/* 주요 경력 리스트 */}
              <p className="text-accent/80 text-xs tracking-wider uppercase mb-4">주요 경력</p>
              <ul className="space-y-2">
                {CEO_CAREER.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + 0.07 * i }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* 자격증 배지 */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="bg-accent/10 border border-accent/30 px-4 py-3 text-center">
                  <p className="text-accent text-xs font-medium tracking-widest">탐정사 1급 · 등록번호 2023-003035</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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
