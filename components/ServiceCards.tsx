'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { ServiceTier } from '@/lib/services'

export default function ServiceCards({ tiers }: { tiers: readonly ServiceTier[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setExpandedId((current) => (current === id ? null : id))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tiers.map((tier) => {
        const isExpanded = expandedId === tier.id
        const panelId = `service-panel-${tier.id}`

        return (
          <div
            key={tier.id}
            id={tier.id}
            className="rounded-2xl border bg-white transition-all duration-200 overflow-hidden"
            style={{
              borderColor: isExpanded ? tier.color : 'var(--gray-200)',
              boxShadow: isExpanded ? '0 12px 32px rgba(26,46,90,0.10)' : 'none',
            }}
          >
            {/* Card header — clickable toggle */}
            <button
              type="button"
              onClick={() => toggle(tier.id)}
              aria-expanded={isExpanded}
              aria-controls={panelId}
              className="w-full text-left p-8 transition-transform"
              style={{
                transform: !isExpanded ? undefined : 'translateY(0)',
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: tier.colorLight }}
              >
                {tier.emoji}
              </div>
              <h3
                className="font-serif text-[26px] mb-1.5 leading-tight"
                style={{ color: tier.color }}
              >
                {tier.title}
              </h3>
              <p
                className="text-[15px] font-medium mb-5 leading-[1.5]"
                style={{ color: 'var(--gray-800)' }}
              >
                {tier.tagline}
              </p>

              {tier.summary && (
                <ul className="mb-6 space-y-2">
                  {tier.summary.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-[14px] leading-[1.6]"
                      style={{ color: 'var(--gray-800)' }}
                    >
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: tier.color }}
                        aria-hidden
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {tier.summaryLong && (
                <p
                  className="text-[14px] leading-[1.7] mb-6"
                  style={{ color: 'var(--gray-500)' }}
                >
                  {tier.summaryLong}
                </p>
              )}

              <span
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold"
                style={{ color: tier.color }}
              >
                {isExpanded ? 'Show less' : 'Learn more'}
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-200"
                  style={{
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  ↓
                </span>
              </span>
            </button>

            {/* Expanded region — animated open/close via grid-template-rows */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={`${panelId}-heading`}
              className="grid transition-[grid-template-rows] duration-300 ease-in-out"
              style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div
                  className="px-8 pb-8 pt-2 flex flex-col gap-6 border-t"
                  style={{ borderColor: 'var(--gray-200)' }}
                >
                  <span id={`${panelId}-heading`} className="sr-only">
                    Details for {tier.title}
                  </span>

                  {/* What it is */}
                  <section className="mt-6">
                    <h4
                      className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-3"
                      style={{ color: 'var(--gray-500)' }}
                    >
                      What it is
                    </h4>
                    <p
                      className="text-[15px] leading-[1.75]"
                      style={{ color: 'var(--gray-800)' }}
                    >
                      {tier.whatItIs}
                    </p>
                  </section>

                  {/* When to use it */}
                  {tier.whenToUse && tier.whenToUse.length > 0 && (
                    <section>
                      <h4
                        className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-3"
                        style={{ color: 'var(--gray-500)' }}
                      >
                        When to use it
                      </h4>
                      {tier.whenToUseIntro && (
                        <p
                          className="text-[14.5px] leading-[1.7] mb-3"
                          style={{ color: 'var(--gray-800)' }}
                        >
                          {tier.whenToUseIntro}
                        </p>
                      )}
                      <ul className="flex flex-col gap-2">
                        {tier.whenToUse.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-[14px] leading-[1.6]"
                            style={{ color: 'var(--gray-800)' }}
                          >
                            <span
                              className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ background: tier.color }}
                              aria-hidden
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* What it covers — clustered layout (Specialty) */}
                  {tier.clusters && tier.clusters.length > 0 && (
                    <section>
                      <h4
                        className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-3"
                        style={{ color: 'var(--gray-500)' }}
                      >
                        What it covers
                      </h4>
                      {tier.includesIntro && (
                        <p
                          className="text-[14.5px] leading-[1.7] mb-5"
                          style={{ color: 'var(--gray-800)' }}
                        >
                          {tier.includesIntro}
                        </p>
                      )}
                      <div className="flex flex-col gap-5">
                        {tier.clusters.map((cluster) => (
                          <div key={cluster.name}>
                            <h5
                              className="text-[10.5px] font-semibold tracking-[0.12em] uppercase mb-2.5"
                              style={{ color: 'var(--teal-dark)' }}
                            >
                              {cluster.name}
                            </h5>
                            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3">
                              {cluster.items.map((item) => (
                                <div key={item.label}>
                                  <dt
                                    className="text-[14px] font-semibold leading-tight mb-0.5"
                                    style={{ color: tier.color }}
                                  >
                                    {item.label}
                                  </dt>
                                  <dd
                                    className="text-[13px] leading-[1.5]"
                                    style={{ color: 'var(--gray-500)' }}
                                  >
                                    {item.desc}
                                  </dd>
                                </div>
                              ))}
                            </dl>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* What it covers — flat layout (kept for any tier still using the old shape) */}
                  {tier.includes && tier.includes.length > 0 && (
                    <section>
                      <h4
                        className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-3"
                        style={{ color: 'var(--gray-500)' }}
                      >
                        What it covers
                      </h4>
                      {tier.includesIntro && (
                        <p
                          className="text-[14.5px] leading-[1.7] mb-4"
                          style={{ color: 'var(--gray-800)' }}
                        >
                          {tier.includesIntro}
                        </p>
                      )}
                      <dl className="flex flex-col gap-3.5">
                        {tier.includes.map((item) => (
                          <div key={item.label}>
                            <dt
                              className="text-[14.5px] font-semibold mb-0.5"
                              style={{ color: tier.color }}
                            >
                              {item.label}
                            </dt>
                            <dd
                              className="text-[14px] leading-[1.6]"
                              style={{ color: 'var(--gray-800)' }}
                            >
                              {item.desc}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </section>
                  )}

                  {/* Note */}
                  {tier.note && (
                    <aside
                      className="rounded-xl px-4 py-3.5 text-[13.5px] leading-[1.6]"
                      style={{
                        background: 'var(--cream)',
                        border: '1px solid var(--gray-200)',
                        color: 'var(--gray-800)',
                      }}
                    >
                      {tier.note}
                    </aside>
                  )}

                  {/* CTAs */}
                  <div className="flex items-center gap-4 flex-wrap pt-1">
                    <Link
                      href="/find-care"
                      className="inline-flex items-center gap-2 text-[13px] font-semibold px-5 py-2.5 rounded-full text-white transition-all hover:-translate-y-0.5"
                      style={{ background: tier.color }}
                    >
                      Find {tier.title.toLowerCase()} care{' '}
                      <span aria-hidden>→</span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggle(tier.id)}
                      className="text-[13px] font-semibold"
                      style={{ color: 'var(--gray-500)' }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
