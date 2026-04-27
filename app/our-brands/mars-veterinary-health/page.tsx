import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mars Veterinary Health — Our vet care family',
  description:
    'Mars Veterinary Health is a single network of hospitals and pet-loving Associates spanning preventive, general, specialty, and emergency care.',
}

const STATS = [
  { value: '4M+', label: 'Pets cared for annually' },
  { value: '430+', label: 'Board-certified specialists' },
  { value: '12,000+', label: 'Vets trained in nutrition' },
]

export default function MarsVeterinaryHealthPage() {
  return (
    <>
      {/* Hero — Our vet care family */}
      <section style={{ background: 'var(--navy)' }} className="text-center px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(0,163,184,0.18) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase mb-4 block" style={{ color: 'var(--teal)' }}>
            Our Brands
          </span>
          <h1 className="font-serif text-[clamp(30px,4vw,52px)] text-white leading-[1.15] mb-5">
            Our vet care family.
          </h1>
          <p className="text-[17px] font-light leading-[1.75] mx-auto mb-6" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 640 }}>
            Mars Veterinary Health is a single network of hospitals and pet-loving Associates spanning preventive, general, specialty, and emergency veterinary services. We deliver medical excellence and unrivalled care to millions of pets in neighborhoods across America.
          </p>
          <p className="text-[13px] font-semibold tracking-[0.1em] uppercase mb-8" style={{ color: 'var(--teal)' }}>
            All in service of our Purpose: A Better World For Pets
          </p>
          <Link
            href="/find-care"
            className="inline-flex items-center text-[15px] font-semibold px-7 py-3.5 rounded-full text-white transition-all hover:-translate-y-0.5"
            style={{ background: 'var(--teal)' }}
          >
            Find care →
          </Link>
        </div>
      </section>

      {/* Stats — Better care, backed by expertise */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-10 leading-[1.2] text-center" style={{ color: 'var(--navy)' }}>
            Better care, backed by expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STATS.map((s) => (
              <div
                key={s.value}
                className="rounded-2xl p-8 text-center transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ background: 'var(--cream)' }}
              >
                <div className="font-serif text-[44px] leading-[1.1] mb-2" style={{ color: 'var(--teal-dark)' }}>
                  {s.value}
                </div>
                <p className="text-[14px] leading-[1.5]" style={{ color: 'var(--gray-500)' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We love pets, and their people */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto px-8">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase mb-4 block" style={{ color: 'var(--teal-dark)' }}>
            We love pets, and their people
          </span>
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-6 leading-[1.2]" style={{ color: 'var(--navy)' }}>
            Caring for every age and stage of your pet's life
          </h2>
          <p className="text-base leading-[1.8]" style={{ color: 'var(--gray-500)' }}>
            We believe every pet deserves care that helps them thrive—not just today, but for all the moments ahead. Our teams are dedicated to supporting pets and the people who love them with trusted expertise, thoughtful guidance, and a commitment to wellbeing at every stage of life. That promise to care deeply and consistently is what drives us, every day, for every pet.
          </p>
        </div>
      </section>

      {/* Better care today, and tomorrow */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-8">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase mb-4 block" style={{ color: 'var(--teal-dark)' }}>
            Better care today, and tomorrow
          </span>
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-6 leading-[1.2]" style={{ color: 'var(--navy)' }}>
            United in care, advancing veterinary standards
          </h2>
          <p className="text-base leading-[1.8]" style={{ color: 'var(--gray-500)' }}>
            Our commitment to advancing care guides how we support our teams and shape the future of the veterinary profession. With the global strength of Mars Petcare behind us, we're able to raise clinical standards and drive meaningful innovation. Reaching more pets in more places than any other veterinary organization, Mars Veterinary Health is helping strengthen veterinary medicine and build a better world and a brighter future for pets and the people who love them.
          </p>
        </div>
      </section>

      {/* Better together in every way */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto px-8">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase mb-4 block" style={{ color: 'var(--teal-dark)' }}>
            Community
          </span>
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-6 leading-[1.2]" style={{ color: 'var(--navy)' }}>
            Better together in every way
          </h2>
          <p className="text-base leading-[1.8]" style={{ color: 'var(--gray-500)' }}>
            As part of the Mars Veterinary Health network, we're connected to teams who share knowledge, support one another, and work together to elevate care across the profession. This collaboration brings greater innovation, deeper insights, and resources that strengthen the care we provide and the experiences we create. Together, we're improving outcomes and building a more connected, compassionate future for every pet we serve.
          </p>
        </div>
      </section>

      {/* CTA block */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'var(--navy)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 120%, rgba(0,163,184,0.18) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-[clamp(26px,3vw,36px)] text-white mb-4 leading-[1.2]">
            Meet the network.
          </h2>
          <p className="text-[15px] leading-[1.7] mb-8 mx-auto" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 540 }}>
            Find a hospital nearby, see how care is connected across our brands, or learn more about who we are.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/find-care"
              className="inline-flex items-center text-[15px] font-semibold px-7 py-3.5 rounded-full text-white transition-all hover:-translate-y-0.5"
              style={{ background: 'var(--teal)' }}
            >
              Find a hospital →
            </Link>
            <Link
              href="/how-it-works/how-care-is-connected"
              className="inline-flex items-center text-[15px] font-semibold px-7 py-3.5 rounded-full text-white border transition-all hover:-translate-y-0.5"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              How care is connected →
            </Link>
            <Link
              href="/how-it-works/what-is-mars-veterinary-health"
              className="inline-flex items-center text-[15px] font-semibold px-7 py-3.5 rounded-full text-white border transition-all hover:-translate-y-0.5"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              What is MVH? →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
