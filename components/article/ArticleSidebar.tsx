'use client'

import { useEffect, useState } from 'react'
import type { Article } from '@/lib/articles'

export default function ArticleSidebar({ article }: { article: Article }) {
  const tocItems = article.body.filter((b) => b.type === 'h2') as Array<{ type: 'h2'; text: string; id: string }>
  const [activeId, setActiveId] = useState<string>(tocItems[0]?.id ?? '')

  useEffect(() => {
    if (tocItems.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 },
    )
    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [tocItems])

  if (tocItems.length === 0) return null

  return (
    <aside className="w-full lg:w-[196px] lg:sticky lg:top-[88px] lg:self-start">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="w-[18px] h-[18px] rounded-full bg-ink flex items-center justify-center" aria-hidden>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F6EFE6" strokeWidth="3" strokeLinecap="round">
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </span>
          <span className="font-display font-bold text-ink text-[20px] leading-none">
            {article.readMinutes} min read
          </span>
        </div>
        <div className="h-[3px] bg-paper-5 w-full" />
        <div className="flex flex-col gap-6">
          <h2 className="font-display font-bold text-ink text-[20px] leading-none">In this article</h2>
          <nav className="flex flex-col gap-6">
            {tocItems.map((item) => {
              const isActive = item.id === activeId
              return (
                
                  key={item.id}
                  href={`#${item.id}`}
                  className={`font-body font-semibold text-[14px] leading-[1.1] transition-colors ${
                    isActive ? 'text-mars-blue' : 'text-ink/80 hover:text-ink'
                  }`}
                >
                  {item.text}
                </a>
              )
            })}
          </nav>
        </div>
      </div>
    </aside>
  )
}
