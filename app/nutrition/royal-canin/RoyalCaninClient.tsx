'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  ROYAL_CANIN_PRODUCTS,
  HEALTH_CONCERN_LABELS,
  LIFE_STAGE_LABELS,
  BREED_SIZE_LABELS,
  PRODUCT_LINE_STYLES,
  type RoyalCaninProduct,
  type HealthConcern,
} from '@/lib/royalCaninProducts'

type Species = 'dog' | 'cat'

// Order arrays drive the order options render in the filter bar.
const LIFE_STAGE_ORDER: RoyalCaninProduct['lifeStage'][] = ['puppy', 'kitten', 'adult', 'senior']
const BREED_SIZE_ORDER: RoyalCaninProduct['breedSize'][] = ['extra-small', 'small', 'medium', 'large', 'giant', 'all-sizes']
const HEALTH_CONCERN_ORDER: HealthConcern[] = [
  'general-wellness', 'breed-specific', 'digestive', 'urinary', 'skin-coat',
  'joint-mobility', 'weight', 'dental', 'food-sensitivity', 'hairball',
]

export default function RoyalCaninClient({ initialSpecies }: { initialSpecies: Species }) {
  const [species, setSpecies] = useState<Species>(initialSpecies)
  const [lifeStages, setLifeStages] = useState<Set<string>>(new Set())
  const [sizes, setSizes] = useState<Set<string>>(new Set())
  const [concerns, setConcerns] = useState<Set<string>>(new Set())

  // Products for the current species
  const speciesProducts = useMemo(
    () => ROYAL_CANIN_PRODUCTS.filter((p) => p.species === species),
    [species]
  )

  // Available filter options derived from the current species' products
  const availableLifeStages = useMemo(
    () => LIFE_STAGE_ORDER.filter((s) => speciesProducts.some((p) => p.lifeStage === s)),
    [speciesProducts]
  )
  const availableSizes = useMemo(
    () => BREED_SIZE_ORDER.filter((s) => speciesProducts.some((p) => p.breedSize === s)),
    [speciesProducts]
  )
  const availableConcerns = useMemo(
    () => HEALTH_CONCERN_ORDER.filter((c) => speciesProducts.some((p) => p.healthConcerns.includes(c))),
    [speciesProducts]
  )

  // Apply filters
  const filtered = useMemo(() => {
    return speciesProducts.filter((p) => {
      if (lifeStages.size > 0 && !lifeStages.has(p.lifeStage)) return false
      if (sizes.size > 0 && !sizes.has(p.breedSize)) return false
      if (concerns.size > 0 && !p.healthConcerns.some((c) => concerns.has(c))) return false
      return true
    })
  }, [speciesProducts, lifeStages, sizes, concerns])

  const hasActiveFilters = lifeStages.size > 0 || sizes.size > 0 || concerns.size > 0

  function toggle(set: Set<string>, value: string, setter: (s: Set<string>) => void) {
    const next = new Set(set)
    next.has(value) ? next.delete(value) : next.add(value)
    setter(next)
  }

  function clearAll() {
    setLifeStages(new Set())
    setSizes(new Set())
    setConcerns(new Set())
  }

  // When user toggles species, clear filters since the option universe changes
  function switchSpecies(next: Species) {
    setSpecies(next)
    clearAll()
  }

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--navy)' }} className="text-center px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(0,163,184,0.18) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase mb-4 block" style={{ color: 'var(--teal)' }}>
            Royal Canin
          </span>
          <h1 className="font-serif text-[clamp(36px,5vw,56px)] text-white leading-[1.1] mb-5">
            Health through nutrition,<br />
            <em className="not-italic" style={{ color: 'var(--teal)' }}>tailored to your pet.</em>
          </h1>
          <p className="text-[17px] font-light leading-[1.75] mx-auto mb-9" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 620 }}>
            Precise nutrition shaped by 60+ years of research. Every formula is designed for a specific
            breed, size, life stage, or health need.
          </p>

          {/* Species toggle */}
          <div role="tablist" aria-label="Choose species" className="inline-flex p-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <button
              role="tab"
              aria-selected={species === 'dog'}
              onClick={() => switchSpecies('dog')}
              className="px-7 py-2 text-sm font-semibold rounded-full transition-all"
              style={{
                background: species === 'dog' ? 'var(--teal)' : 'transparent',
                color: species === 'dog' ? 'white' : 'rgba(255,255,255,0.7)',
              }}
            >
              For dogs
            </button>
            <button
              role="tab"
              aria-selected={species === 'cat'}
              onClick={() => switchSpecies('cat')}
              className="px-7 py-2 text-sm font-semibold rounded-full transition-all"
              style={{
                background: species === 'cat' ? 'var(--teal)' : 'transparent',
                color: species === 'cat' ? 'white' : 'rgba(255,255,255,0.7)',
              }}
            >
              For cats
            </button>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-white py-10" style={{ borderBottom: '1px solid var(--gray-100)' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-baseline justify-between mb-6 flex-wrap gap-3">
            <h2 className="font-serif text-[22px]" style={{ color: 'var(--navy)' }}>Filter products</h2>
            {hasActiveFilters && (
              <button onClick={clearAll} className="text-[13px] font-semibold underline" style={{ color: 'var(--teal-dark, #006574)' }}>
                Clear all filters
              </button>
            )}
          </div>

          <div className="flex flex-col gap-5">
            <FilterGroup label="Life stage">
              {availableLifeStages.map((stage) => (
                <Chip
                  key={stage}
                  label={LIFE_STAGE_LABELS[stage]}
                  active={lifeStages.has(stage)}
                  onClick={() => toggle(lifeStages, stage, setLifeStages)}
                />
              ))}
            </FilterGroup>

            {availableSizes.length > 1 && (
              <FilterGroup label="Breed size">
                {availableSizes.map((size) => (
                  <Chip
                    key={size}
                    label={BREED_SIZE_LABELS[size]}
                    active={sizes.has(size)}
                    onClick={() => toggle(sizes, size, setSizes)}
                  />
                ))}
              </FilterGroup>
            )}

            <FilterGroup label="Health focus">
              {availableConcerns.map((concern) => (
                <Chip
                  key={concern}
                  label={HEALTH_CONCERN_LABELS[concern]}
                  active={concerns.has(concern)}
                  onClick={() => toggle(concerns, concern, setConcerns)}
                />
              ))}
            </FilterGroup>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-16" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-[14px] mb-7" style={{ color: 'var(--gray-500)' }}>
            Showing <span style={{ color: 'var(--navy)', fontWeight: 600 }}>{filtered.length}</span> of {speciesProducts.length} products
          </p>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed py-16 text-center" style={{ borderColor: 'var(--gray-200)', background: 'white' }}>
              <p className="font-serif text-[22px] mb-2" style={{ color: 'var(--navy)' }}>No products match those filters</p>
              <p className="text-[14px] mb-5" style={{ color: 'var(--gray-500)' }}>Try removing a filter or starting over.</p>
              <button onClick={clearAll} className="inline-flex items-center text-sm font-semibold px-5 py-2.5 rounded-full border-[1.5px] transition-all hover:bg-[var(--navy)] hover:text-white" style={{ color: 'var(--navy)', borderColor: 'var(--navy)' }}>
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Talk to your vet CTA */}
      <section className="py-14" style={{ background: 'white', borderTop: '1px solid var(--gray-100)' }}>
        <div className="max-w-7xl mx-auto px-8 flex items-center gap-10 flex-wrap">
          <div className="flex-1 min-w-[280px]">
            <span className="block text-[13px] italic mb-2" style={{ color: 'var(--gray-500)' }}>Not sure where to start?</span>
            <h3 className="font-serif text-[28px] mb-2.5" style={{ color: 'var(--navy)' }}>Your vet can help you choose.</h3>
            <p className="text-[15px] leading-[1.7] mb-5 max-w-xl" style={{ color: 'var(--gray-500)' }}>
              Royal Canin Veterinary Diets are prescription-only. For these and any nutrition question,
              your veterinarian can recommend the right formula for your pet&apos;s breed, age, and health.
            </p>
            <Link
              href="/find-care"
              className="inline-flex items-center text-[15px] font-semibold px-7 py-3.5 rounded-full text-white transition-all hover:-translate-y-0.5"
              style={{ background: 'var(--navy)' }}
            >
              Find a nearby hospital →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 flex-wrap">
      <span className="text-[12px] font-semibold uppercase tracking-wider pt-2 w-28 flex-shrink-0" style={{ color: 'var(--gray-500)' }}>
        {label}
      </span>
      <div className="flex flex-wrap gap-2 flex-1">{children}</div>
    </div>
  )
}

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className="text-[13px] font-semibold px-4 py-2 rounded-full border-[1.5px] transition-all"
      style={{
        background: active ? 'var(--navy)' : 'transparent',
        color: active ? 'white' : 'var(--navy)',
        borderColor: 'var(--navy)',
      }}
    >
      {label}
    </button>
  )
}

function ProductCard({ product }: { product: RoyalCaninProduct }) {
  const style = PRODUCT_LINE_STYLES[product.productLine]
  return (
    <Link
      href={product.productUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl overflow-hidden border bg-white transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col"
      style={{ borderColor: 'var(--gray-200)' }}
    >
      {/* Image area (placeholder — swap with real product photography when assets are available) */}
      <div
        className="relative h-[240px] flex flex-col items-center justify-center px-6"
        style={{ background: `linear-gradient(135deg, ${style.bg} 0%, white 100%)` }}
      >
        <span className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: style.accent }}>
          {product.productLine}
        </span>
        <span className="font-serif text-[26px] text-center leading-tight" style={{ color: 'var(--navy)' }}>
          {product.name}
        </span>
        {product.isVeterinary && (
          <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white" style={{ background: style.accent }}>
            Rx
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-[14px] leading-[1.6] flex-1" style={{ color: 'var(--gray-500)' }}>
          {product.description}
        </p>
        <span className="text-[13px] font-semibold mt-4 inline-flex items-center gap-1 transition-all group-hover:gap-2" style={{ color: 'var(--navy)' }}>
          View on royalcanin.com →
        </span>
      </div>
    </Link>
  )
}
