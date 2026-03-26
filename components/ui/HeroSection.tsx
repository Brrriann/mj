export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_#C9A84C,_transparent_60%)]" />

      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="text-accent text-sm md:text-base font-medium mb-4 tracking-widest uppercase">
          Former Police Detective
        </p>
        <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-6">
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
            className="bg-accent text-white font-bold px-8 py-4 rounded hover:brightness-95 transition-all duration-200 cursor-pointer"
          >
            지금 전화 상담
          </a>
          <a
            href="/about/company"
            className="border border-white text-white font-medium px-8 py-4 rounded hover:bg-white hover:text-primary transition-all duration-200 cursor-pointer"
          >
            회사 소개 보기
          </a>
        </div>
      </div>
    </section>
  )
}
