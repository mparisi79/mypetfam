'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { SEARCH_DATA } from '@/lib/constants'

const HINTS = [
  'Emergency care near me',
  'Banfield locations',
  'Preventive wellness',
  'VCA hospitals',
  'Referral process',
  'BluePearl specialty',
  'Nutrition',
]

interface Props {
  open: boolean
  onClose: () => void
}

export default function SearchOverlay({ open, onClose }: Props) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => inputRef.current?.focus(), 80)
    } else {
      document.body.style.overflow = ''
      setQuery('')
    }
  }, [open])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  const results = query.trim()
    ? SEARCH_DATA.filter(
        (d) =>
          d.title.toLowerCase().includes(query.toLowerCase()) ||
          d.sub.toLowerCase().includes(query.toLowerCase())
      )
    : []

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center pt-24 px-6"
      style={{ background: 'rgba(10,18,40,0.6)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden animate-drop-in">
        <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-100">
          <svg className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--gray-500)' }} viewBox="0 0 20 20" fill="none">
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.75" />
            <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search care, services, locations…"
            className="flex-1 text-lg outline-none bg-transparent"
            style={{ color: 'var(--gray-800)' }}
          />
          <button
            onClick={onClose}
            className="text-xs px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex-shrink-0"
            style={{ color: 'var(--gray-500)' }}
          >
            ESC
          </button>
        </div>

        {!query && (
          <div className="px-6 py-4">
            <span className="block text-[11px] font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gray-500)' }}>
              Try searching for
            </span>
            <div className="flex flex-wrap gap-2">
              {HINTS.map((h) => (
                <button
                  key={h}
                  onClick={() => setQuery(h)}
                  className="text-[13px] font-medium px-3.5 py-1.5 rounded-full bg-gray-100 hover:bg-[var(--teal-light)] hover:text-[var(--teal-dark)] transition-colors"
                  style={{ color: 'var(--gray-800)' }}
                >
                  {h}
                </button>
              ))}
            </div>
          </div>
        )}

        {query && (
          <div className="px-6 py-3 border-t border-gray-100">
            {results.length === 0 ? (
              <p className="text-sm py-4" style={{ color: 'var(--gray-500)' }}>
                No results found. Try a different search.
              </p>
            ) : (
              results.map((r) => (
                <Link
                  key={r.title}
                  href={r.href}
                  onClick={onClose}
                  className="flex items-center gap-3.5 py-3 border-b border-gray-100 last:border-none hover:pl-1 transition-all"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                    style={{ background: 'var(--teal-light)' }}
                  >
                    {r.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--navy)' }}>{r.title}</div>
                    <div className="text-xs mt-0.5" style={{ color: 'var(--gray-500)' }}>{r.sub}</div>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}
