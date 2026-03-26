'use client'
import { useState } from 'react'
import ConsultForm from '@/components/forms/ConsultForm'

export default function ConsultPageForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="text-primary text-xl font-bold font-serif mb-2">접수되었습니다.</p>
        <p className="text-textsecondary">빠른 시간 내 연락드리겠습니다.</p>
      </div>
    )
  }

  return <ConsultForm onSuccess={() => setSubmitted(true)} />
}
