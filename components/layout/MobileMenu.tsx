'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { NAV } from '@/lib/constants'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <div
      className={`fixed inset-0 z-50 bg-primary transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-end p-6">
        <button
          onClick={onClose}
          className="text-white hover:text-accent transition-colors cursor-pointer"
          aria-label="메뉴 닫기"
        >
          <X size={32} />
        </button>
      </div>
      <nav className="px-8 py-4">
        {NAV.map((item) => (
          <div key={item.href} className="mb-6">
            <p className="text-accent font-bold text-lg mb-2">{item.label}</p>
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClose}
                className="block text-white py-2 text-base hover:text-accent transition-colors duration-200"
              >
                {child.label}
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </div>
  )
}
