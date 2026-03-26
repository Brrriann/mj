import { generateMetadata as genMeta } from '@/lib/seo'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { MapPin, Phone, Clock, Train, Car } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = genMeta({
  title: '오시는 길',
  description: '명진탐정사무소 위치 및 교통편 안내.',
  pathname: '/contact/location',
})

export default function LocationPage() {
  return (
    <>
      <PageHeader title="오시는 길" subtitle="방문 상담도 환영합니다. 사전 예약 후 방문해주세요." />

      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal direction="left">
            <h2 className="text-3xl font-bold font-serif text-primary mb-3">사무소 위치</h2>
            <div className="w-12 h-1 bg-accent mb-8" />
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-primary mb-1">주소</p>
                  <p className="text-textprimary text-sm">{SITE.address}</p>
                  <p className="text-textsecondary text-xs mt-1">상세 주소는 예약 후 안내드립니다 (보안 유지)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-primary mb-1">전화</p>
                  <a href={`tel:${SITE.phoneRaw}`} className="text-accent font-bold cursor-pointer">{SITE.phone}</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-primary mb-1">운영 시간</p>
                  <p className="text-textprimary text-sm">24시간 · 365일 상담 가능</p>
                  <p className="text-textsecondary text-xs mt-1">방문 상담: 사전 예약 필수</p>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-5">
              <div className="flex gap-4 items-start">
                <Train size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-primary mb-1">대중교통</p>
                  <p className="text-textsecondary text-sm">예약 후 상세 안내 제공</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Car size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-primary mb-1">자가용</p>
                  <p className="text-textsecondary text-sm">주차 가능 · 예약 시 안내</p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-primary/5 border border-primary/20 p-6">
              <p className="text-sm text-textprimary leading-relaxed">
                <strong className="text-primary">방문 전 꼭 전화 또는 카카오톡으로 예약해주세요.</strong><br />
                사무소 위치는 의뢰인 보안을 위해 예약자에게만 안내드립니다.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-gray-200 h-80 flex items-center justify-center mb-8">
              <p className="text-textsecondary text-sm">지도는 예약 후 제공됩니다</p>
            </div>
            <div className="bg-primary text-white p-8">
              <h3 className="font-bold text-accent font-serif text-xl mb-4">방문 상담 예약</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">방문 상담 시 더 자세하고 편안한 상담이 가능합니다. 아래로 연락주시면 예약을 도와드립니다.</p>
              <a href={`tel:${SITE.phoneRaw}`} className="block w-full text-center bg-accent text-white font-bold py-3 hover:brightness-95 transition-all duration-200 cursor-pointer mb-3">{SITE.phone}</a>
              <a href={SITE.kakaoUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center border border-white/30 text-gray-300 py-3 hover:bg-white/10 transition-all duration-200 cursor-pointer">카카오톡으로 예약</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
