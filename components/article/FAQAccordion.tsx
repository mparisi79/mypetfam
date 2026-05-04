'use client'

import { useState } from 'react'
import type { Article } from '@/lib/articles'

type FAQ = NonNullable<Article['faqs']>[number]

export default function FAQAccordion({ faqs }: { faqs: ReadonlyArray<FAQ> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className="bg-paper-4 border-[3px] border-ink/10 rounded-[24px] overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full px-6 lg:px-8 py-4 flex items-center gap-6 text-left"
            >
              <span className="flex-1 font-body font-bold text-ink text-[20px] lg:text-[24px] leading-[1.2]">
                {faq.question}
              </span>
              <span
                aria-hidden="true"
                className="w-10 h-10 rounded-full bg-ink flex items-center justify-center flex-shrink-0"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FAF0E5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="px-6 lg:px-8 pb-6 pt-1 font-body font-medium text-ink/80 text-[16px] lg:text-[18px] leading-[1.5]">
                {faq.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
