'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { NAV } from '@/lib/constants'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const bgClass = isHome
    ? scrolled ? 'bg-primary shadow-md' : 'bg-transparent'
    : 'bg-primary shadow-md'

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${bgClass}`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          {/* 로고 */}
          <Link href="/" className="text-white font-bold text-xl font-serif">
            <span className="text-accent">명진</span>탐정사무소
          </Link>

          {/* PC 네비 */}
          <nav className="hidden lg:flex gap-8">
            {NAV.map((item) => (
              <div key={item.href} className="relative group">
                <button className="text-white hover:text-accent transition-colors duration-200 py-4 font-medium cursor-pointer">
                  {item.label}
                </button>
                {/* 드롭다운 */}
                <div className="absolute top-full left-0 w-44 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-3 text-textprimary hover:text-accent hover:bg-bgalt text-sm border-b border-gray-100 last:border-0 transition-colors duration-200"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* 모바일 햄버거 */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white hover:text-accent transition-colors duration-200 cursor-pointer"
            aria-label="메뉴 열기"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
