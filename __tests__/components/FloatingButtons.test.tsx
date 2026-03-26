import { render, screen } from '@testing-library/react'
import FloatingButtons from '@/components/ui/FloatingButtons'

describe('FloatingButtons', () => {
  it('카카오톡 버튼이 렌더링된다', () => {
    render(<FloatingButtons />)
    expect(screen.getByLabelText('카카오톡 상담')).toBeInTheDocument()
  })

  it('전화 버튼의 href가 tel: 링크다', () => {
    render(<FloatingButtons />)
    const phoneBtn = screen.getByLabelText('전화 상담')
    expect(phoneBtn).toHaveAttribute('href', 'tel:01084182033')
  })

  it('전화 버튼은 lg:hidden 클래스를 가진다 (PC에서 숨김)', () => {
    render(<FloatingButtons />)
    const phoneBtn = screen.getByLabelText('전화 상담')
    expect(phoneBtn.closest('div') ?? phoneBtn).toHaveClass('lg:hidden')
  })
})
