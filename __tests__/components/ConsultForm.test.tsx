import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ConsultForm from '@/components/forms/ConsultForm'

describe('ConsultForm 유효성 검사', () => {
  it('이름이 1자이면 에러를 표시한다', async () => {
    render(<ConsultForm onSuccess={() => {}} />)
    const nameInput = screen.getByLabelText('이름')
    await userEvent.type(nameInput, '김')
    fireEvent.blur(nameInput)
    await waitFor(() => {
      expect(screen.getByText('이름은 2자 이상 입력해 주세요.')).toBeInTheDocument()
    })
  })

  it('연락처 형식이 맞지 않으면 에러를 표시한다', async () => {
    render(<ConsultForm onSuccess={() => {}} />)
    const phoneInput = screen.getByLabelText('연락처')
    await userEvent.type(phoneInput, '1234')
    fireEvent.blur(phoneInput)
    await waitFor(() => {
      expect(screen.getByText('010-XXXX-XXXX 형식으로 입력해 주세요.')).toBeInTheDocument()
    })
  })

  it('필수 항목이 모두 비어있으면 제출이 안된다', async () => {
    const mockSuccess = jest.fn()
    render(<ConsultForm onSuccess={mockSuccess} />)
    fireEvent.click(screen.getByRole('button', { name: '상담 신청' }))
    await waitFor(() => {
      expect(mockSuccess).not.toHaveBeenCalled()
    })
  })
})
