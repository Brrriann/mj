import { generateMetadata, generateLocalBusinessJsonLd } from '@/lib/seo'

describe('generateMetadata', () => {
  it('기본 title과 description을 포함한다', () => {
    const meta = generateMetadata({ title: '회사 소개', description: '명진탐정사무소 소개' })
    expect(meta.title).toBe('회사 소개 | 명진탐정사무소')
    expect(meta.description).toBe('명진탐정사무소 소개')
  })

  it('OpenGraph title도 동일하게 설정된다', () => {
    const meta = generateMetadata({ title: '서비스', description: '조사 서비스' })
    expect((meta.openGraph as any).title).toBe('서비스 | 명진탐정사무소')
  })
})

describe('generateLocalBusinessJsonLd', () => {
  it('@type이 LocalBusiness이다', () => {
    const ld = generateLocalBusinessJsonLd()
    expect(ld['@type']).toBe('LocalBusiness')
  })

  it('전화번호가 포함된다', () => {
    const ld = generateLocalBusinessJsonLd()
    expect(ld.telephone).toBe('010-8418-2033')
  })
})
