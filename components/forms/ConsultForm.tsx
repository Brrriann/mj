'use client'
import { useState } from 'react'
import { INQUIRY_TYPES, SITE } from '@/lib/constants'

interface FormData {
  name: string
  phone: string
  inquiryType: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
}

const FORMSPREE_ID = 'REPLACE_WITH_FORMSPREE_ID'
const PHONE_REGEX = /^010-\d{4}-\d{4}$/

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (data.name.trim().length < 2) errors.name = '이름은 2자 이상 입력해 주세요.'
  if (!PHONE_REGEX.test(data.phone)) errors.phone = '010-XXXX-XXXX 형식으로 입력해 주세요.'
  return errors
}

interface ConsultFormProps {
  onSuccess: () => void
}

export default function ConsultForm({ onSuccess }: ConsultFormProps) {
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', inquiryType: INQUIRY_TYPES[0], message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [submitError, setSubmitError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (field: keyof FormData, value: string) => {
    const updated = { ...form, [field]: value }
    setForm(updated)
    if (touched[field]) setErrors(validate(updated))
  }

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors(validate(form))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, phone: true })
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setLoading(true)
    setSubmitError(false)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        onSuccess()
      } else {
        setSubmitError(true)
      }
    } catch {
      setSubmitError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* 이름 */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-textprimary mb-1">
          이름 <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          aria-label="이름"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          placeholder="홍길동"
          className={`w-full border rounded px-3 py-2 text-sm outline-none focus:border-primary transition-colors ${
            errors.name ? 'border-red-400' : 'border-gray-300'
          }`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* 연락처 */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-textprimary mb-1">
          연락처 <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          aria-label="연락처"
          value={form.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          onBlur={() => handleBlur('phone')}
          placeholder="010-1234-5678"
          className={`w-full border rounded px-3 py-2 text-sm outline-none focus:border-primary transition-colors ${
            errors.phone ? 'border-red-400' : 'border-gray-300'
          }`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      {/* 문의 유형 */}
      <div>
        <label htmlFor="inquiryType" className="block text-sm font-medium text-textprimary mb-1">문의 유형</label>
        <select
          id="inquiryType"
          value={form.inquiryType}
          onChange={(e) => handleChange('inquiryType', e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-primary transition-colors cursor-pointer"
        >
          {INQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      {/* 내용 */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-textprimary mb-1">문의 내용</label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="문의하실 내용을 자유롭게 작성해 주세요."
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      {submitError && (
        <p className="text-red-500 text-sm">
          전송에 실패했습니다. 전화({SITE.phone})로 문의해 주세요.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white py-3 rounded font-medium hover:bg-primary-dark transition-colors duration-200 disabled:opacity-50 cursor-pointer"
      >
        {loading ? '전송 중...' : '상담 신청'}
      </button>
    </form>
  )
}
