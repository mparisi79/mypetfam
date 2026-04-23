'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { NAV_ITEMS } from '@/lib/constants'
import SearchOverlay from './SearchOverlay'

export default function Nav() {
  const pathname = usePathname()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-8 h-[68px] flex items-center gap-1">
          <Link href="/" className="flex items-center mr-6 flex-shrink-0">
            <Image
              src="https://www.mypetfam.com/images/mypetfam-logo.svg"
              alt="MyPetfam"
              width={120}
              height={32}
              className="h-8 w-auto"
              unoptimized
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                const fallback = target.nextElementSibling as HTMLElement
                if (fallback) fallback.style.display = 'block'
              }}
            />
            <span className="hidden font-serif font-bold text-xl" style={{ color: 'var(--navy)' }}>
              MyPetfam
            </span>
          </Link>

          {NAV_ITEMS.map((item, i) => {
            const isActive = pathname.startsWith(item.href)
            const isOpen = openIndex === i
            return (
              <div key={item.label} className="relative">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive || isOpen
                      ? 'text-[var(--teal-dark)] bg-[var(--teal-light)]'
                      : 'text-[var(--gray-800)] hover:bg-[var(--gray-100)] hover:text-[var(--navy)]'
                  }`}
                >
                  {item.label}
                  <svg
                    className={`w-3 h-3 opacity-50 transition-transform ${isOpen ? 'rotate-180 opacity-100' : ''}`}
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute top-[calc(100%+6px)] left-0 bg-white border border-gray-200 rounded-2xl shadow-xl p-2 min-w-[230px] z-50 animate-drop-in">
                    <span className="block text-[10px] font-bold tracking-widest uppercase px-3 py-2 pb-1" style={{ color: 'var(--gray-500)' }}>
                      {item.label}
                    </span>
                    {item.links.map((link, j) =>
                      'divider' in link ? (
                        <div key={j} className="h-px bg-gray-100 my-1.5 mx-2" />
                      ) : (
                        <Link
                          key={j}
                          href={link.href}
                          onClick={() => setOpenIndex(null)}
                          className="block text-[13.5px] px-3 py-2 rounded-xl hover:bg-[var(--teal-light)] hover:text-[var(--teal-dark)] transition-all whitespace-nowrap"
                          style={{ color: 'var(--gray-800)' }}
                        >
                          {link.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            )
          })}

          <div className="ml-auto flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center transition-all hover:border-[var(--teal-dark)] hover:text-[var(--teal-dark)] hover:bg-[var(--teal-light)]"
              style={{ color: 'var(--gray-800)' }}
              aria-label="Search"
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.75" />
                <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </button>
            <Link
              href="/find-care"
              className="text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap hover:bg-[var(--teal-dark)]"
              style={{ background: 'var(--navy)' }}
            >
              Find Care
            </Link>
          </div>
        </div>
      </nav>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
