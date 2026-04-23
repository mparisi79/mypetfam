import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { BRANDS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Our Brands — MyPetfam',
  description: 'Meet Banfield, BluePearl, and VCA — the trusted brands that make up the Mars Veterinary Health network.',
}

export default function OurBrandsPage() {
  return (
    <>
      <section style={{ background: 'var(--navy)' }} className="text-center px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(0,163,184,0.15) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase mb-4 block" style={{ color: 'var(--teal)' }}>
            Our Brands
          </span>
          <h1 className="font-serif text-[clamp(36px,5vw,60px)] text-white leading-[1.1] mb-5">
            Our vet care family.
          </h1>
          <p className="text-lg font-light leading-[1.7]" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 600, margin: '0 auto' }}>
            Mars Veterinary Health is a network of hospitals and pet-loving Associates spanning preventive,
            general, specialty, and emergency veterinary services. We deliver care like no other to millions
            of pets each year in clinics across North America.
          </p>
          <p className="text-base font-semibold mt-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
            All in service of our Purpose:{' '}
            <span style={{ color: 'var(--gold)' }}>A BETTER WORLD FOR PETS.</span>
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 flex flex-col gap-14">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className={`grid grid-cols-2 rounded-2xl overflow-hidden border transition-all hover:shadow-2xl hover:-translate-y-0.5 ${brand.reverse ? '[direction:rtl]' : ''}`}
              style={{ borderColor: 'var(--gray-200)' }}
            >
              <div className={`relative h-[340px] ${brand.reverse ? '[direction:ltr]' : ''}`}>
                <Image src={brand.image} alt={brand.name} fill className="object-cover" />
              </div>
              <div
                className={`flex flex-col justify-center p-12 ${brand.reverse ? '[direction:ltr]' : ''}`}
                style={{ background: 'var(--cream)' }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={160}
                  height={36}
                  className="h-9 w-auto object-contain object-left mb-5"
                />
                <h2 className="font-serif text-2xl mb-4" style={{ color: 'var(--navy)' }}>{brand.tagline}</h2>
                <p className="text-[15px] leading-[1.75] mb-7" style={{ color: 'var(--gray-500)' }}>{brand.description}</p>
                <Link
                  href={`/find-care?brand=${brand.filter}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold border-[1.5px] px-5 py-2.5 rounded-full transition-all hover:bg-[var(--navy)] hover:text-white w-fit"
                  style={{ color: 'var(--navy)', borderColor: 'var(--navy)' }}
                >
                  {brand.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
