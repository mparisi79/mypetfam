'use client'

import { useState } from 'react'
import Link from 'next/link'

const NUTRITION_BRANDS = [
  { name: 'Royal Canin', slug: 'royal-canin', icon: '👑', type: 'Veterinary diets', desc: 'Precise, science-backed nutrition tailored to breed, size, and health needs.', bg: '#FFF7ED' },
  { name: 'Pedigree', slug: 'pedigree', icon: '🐕', type: 'Dog food', desc: "The world's #1 dog food brand. Complete, balanced meals for happy, active dogs.", bg: '#FEFCE8' },
  { name: 'Iams', slug: 'iams', icon: '🦴', type: 'Dog & cat food', desc: 'Quality ingredients for strong muscles, healthy skin, and lifelong vitality.', bg: '#EFF6FF' },
  { name: 'Whiskas', slug: 'whiskas', icon: '🐱', type: 'Cat food', desc: 'Wet and dry recipes crafted to help all cats purr more, from kitten to adult.', bg: '#FDF2F8' },
  { name: 'Sheba', slug: 'sheba', icon: '✨', type: 'Premium cat food', desc: 'Irresistibly crafted premium meals that cats instinctively love.', bg: '#FAF5FF' },
  { name: 'Cesar', slug: 'cesar', icon: '🍽', type: 'Small dog food', desc: 'Gourmet wet and dry food designed for the tastes and needs of small dogs.', bg: '#FFF7ED' },
  { name: 'Nutro', slug: 'nutro', icon: '🌿', type: 'Natural food', desc: 'Clean recipes with non-GMO ingredients and real protein sources.', bg: '#ECFDF5' },
  { name: 'Eukanuba', slug: 'eukanuba', icon: '🏆', type: 'Premium dog food', desc: 'Performance-driven nutrition for active dogs and working breeds.', bg: '#EFF6FF' },
  { name: 'Crave', slug: 'crave', icon: '🥩', type: 'High-protein food', desc: 'High-protein, grain-free recipes inspired by the ancestral diet of dogs and cats.', bg: '#FEF2F2' },
  { name: 'Orijen', slug: 'orijen', icon: '🌎', type: 'Biologically appropriate', desc: 'Whole-prey ratios with fresh, regional ingredients for peak nourishment.', bg: '#ECFDF5' },
  { name: 'Acana', slug: 'acana', icon: '🏔', type: 'Regional ingredients', desc: 'Thoughtfully crafted with locally sourced ingredients pets were meant to eat.', bg: '#F0F9FF' },
]

export default function NutritionWheel() {
  const [active, setActive] = useState<number | null>(null)
  const count = NUTRITION_BRANDS.length
  const radius = 200
  const cx = 260
  const cy = 260

  return (
    <div className="flex flex-col items-center">
      {/* Wheel */}
      <div className="relative" style={{ width: 520, height: 520 }}>
        {/* Connectors */}
        {NUTRITION_BRANDS.map((_, i) => {
          const angle = (i * (360 / count) - 90) * (Math.PI / 180)
          const dx = radius * Math.cos(angle)
          const dy = radius * Math.sin(angle)
          const len = Math.sqrt(dx * dx + dy * dy) - 60
          const deg = Math.atan2(dy, dx) * 180 / Math.PI
          return (
            <div
              key={`line-${i}`}
              className="absolute transition-colors duration-300"
              style={{
                top: cy,
                left: cx,
                width: len,
                height: 1,
                transformOrigin: '0 0',
                transform: `rotate(${deg}deg)`,
                background: active === i ? 'var(--teal)' : 'var(--gray-200)',
              }}
            />
          )
        })}

        {/* Center hub */}
        <div
          className="absolute z-10 flex flex-col items-center justify-center rounded-full"
          style={{
            width: 120,
            height: 120,
            top: cy - 60,
            left: cx - 60,
            background: 'var(--navy)',
          }}
        >
          <span className="font-serif text-[15px] font-medium text-white leading-tight text-center">Nutrition</span>
          <span className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>{count} brands</span>
        </div>

        {/* Brand nodes */}
        {NUTRITION_BRANDS.map((brand, i) => {
          const angle = (i * (360 / count) - 90) * (Math.PI / 180)
          const x = cx + radius * Math.cos(angle) - 44
          const y = cy + radius * Math.sin(angle) - 44
          const isActive = active === i
          return (
            <Link
              key={brand.slug}
              href={`/nutrition/${brand.slug}`}
              className="absolute flex flex-col items-center justify-center rounded-full border-2 no-underline transition-all duration-300"
              style={{
                width: 88,
                height: 88,
                left: x,
                top: y,
                background: brand.bg,
                borderColor: isActive ? 'var(--teal)' : 'transparent',
                transform: isActive ? 'scale(1.15)' : 'scale(1)',
                zIndex: isActive ? 3 : 1,
                boxShadow: isActive ? '0 0 0 4px rgba(0,163,184,0.15)' : 'none',
              }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <span className="text-[22px] mb-0.5">{brand.icon}</span>
              <span
                className="text-[11px] font-medium text-center leading-tight transition-colors duration-300"
                style={{ color: isActive ? 'var(--teal-dark)' : 'var(--gray-800)' }}
              >
                {brand.name}
              </span>
              <span className="text-[9px] text-center mt-px" style={{ color: 'var(--gray-500)' }}>{brand.type}</span>
            </Link>
          )
        })}
      </div>

      {/* Detail bar */}
      <div
        className="mt-6 text-center rounded-2xl transition-all duration-300"
        style={{
          padding: active !== null ? '14px 28px' : '0 28px',
          maxWidth: 420,
          background: active !== null ? 'var(--cream)' : 'transparent',
          opacity: active !== null ? 1 : 0,
          transform: active !== null ? 'translateY(0)' : 'translateY(4px)',
          minHeight: active !== null ? 72 : 0,
        }}
      >
        {active !== null && (
          <>
            <p className="font-serif text-[18px] font-medium" style={{ color: 'var(--navy)' }}>
              {NUTRITION_BRANDS[active].name}
            </p>
            <p className="text-[13px] mt-1 leading-relaxed" style={{ color: 'var(--gray-500)' }}>
              {NUTRITION_BRANDS[active].desc}
            </p>
            <p className="text-[12px] font-semibold mt-1.5" style={{ color: 'var(--teal-dark)' }}>
              Explore {NUTRITION_BRANDS[active].name} →
            </p>
          </>
        )}
      </div>
    </div>
  )
}
