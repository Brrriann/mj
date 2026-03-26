import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Phone, MessageCircle, Clock, Shield } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = genMeta({
  title: '상담 신청',
  description: '명진탐정사무소 무료 상담 신청. 전화, 카카오톡, 온라인 양식으로 언제든지 연락주세요. 비밀 보장.',
  pathname: '/contact/consult',
})

export default function ConsultPage() {
  return (
    <>
      <PageHeader title="상담 신청" subtitle="초기 상담은 무료입니다. 편한 방법으로 연락주세요." />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* 왼쪽: 상담 방법 */}
            <ScrollReveal direction="left">
              <h2 className="text-3xl font-bold font-serif text-primary mb-3">상담 방법</h2>
              <div className="w-12 h-1 bg-accent mb-10" />

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-primary flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-1">전화 상담</h3>
                    <a href={`tel:${SITE.phoneRaw}`} className="text-accent font-bold text-xl cursor-pointer hover:brightness-75 transition-all">{SITE.phone}</a>
                    <p className="text-textsecondary text-sm mt-1">24시간 연결 가능 · 통화 내용 비밀 보장</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-[#FEE500] flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} className="text-[#3A1D1D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-1">카카오톡 상담</h3>
                    <a href={SITE.kakaoUrl} target="_blank" rel="noopener noreferrer" className="text-accent font-bold cursor-pointer hover:brightness-75 transition-all">명진탐정사무소 채널</a>
                    <p className="text-textsecondary text-sm mt-1">텍스트로 조심스럽게 상담 가능</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-bgalt flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-1">상담 가능 시간</h3>
                    <p className="text-textprimary">평일 · 주말 · 공휴일 24시간</p>
                    <p className="text-textsecondary text-sm mt-1">긴급 상황 즉시 대응 가능</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-primary/5 border-l-4 border-accent p-6">
                <div className="flex items-start gap-3">
                  <Shield size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-primary mb-2">비밀 보장 약속</p>
                    <p className="text-textsecondary text-sm leading-relaxed">상담 내용은 절대 외부에 공개되지 않습니다. 의뢰인의 이름, 연락처, 사건 내용 모두 비밀이 보장됩니다. 두려움 없이 연락주세요.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 오른쪽: 온라인 양식 */}
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-bold font-serif text-primary mb-3">온라인 상담 신청</h2>
              <div className="w-12 h-1 bg-accent mb-10" />
              <form className="space-y-5" action="https://formspree.io/f/PLACEHOLDER" method="POST">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">이름 *</label>
                  <input id="name" name="name" type="text" required placeholder="홍길동" className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">연락처 *</label>
                  <input id="phone" name="phone" type="tel" required placeholder="010-0000-0000" className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-primary mb-2">상담 분야 *</label>
                  <select id="service" name="service" required className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors">
                    <option value="">선택해주세요</option>
                    <option>배우자 불륜 조사</option>
                    <option>소재/가출인 파악</option>
                    <option>기업 신용조사</option>
                    <option>증거 수집</option>
                    <option>기타</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">문의 내용</label>
                  <textarea id="message" name="message" rows={5} placeholder="간단하게 상황을 설명해주세요. 자세한 내용은 상담 시 말씀해 주셔도 됩니다." className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-primary text-white font-bold py-4 hover:bg-primary-dark transition-all duration-200 cursor-pointer">
                  상담 신청하기
                </button>
                <p className="text-textsecondary text-xs text-center">모든 내용은 비밀이 보장됩니다. 영업일 기준 24시간 내 연락드립니다.</p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
