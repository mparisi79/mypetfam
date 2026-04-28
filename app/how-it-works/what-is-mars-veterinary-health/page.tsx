import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What is the Mars Veterinary Health Network?',
  description:
    "Banfield, BluePearl, and VCA are coming together as one, complete network of care for your pet. Here's what that means and who stands behind it.",
}

const STATS = [
  { value: '8,300+', label: 'veterinarians across the network' },
  { value: '2,000+', label: 'locations nationwide' },
  { value: '21+', label: 'specialty areas, from oncology to dermatology' },
  { value: '3M+', label: 'pets seen each year, contributing to better care for all' },
  { value: '55,000+', label: 'Associates in the U.S. caring for your pet and their family' },
  { value: '$500M', label: 'invested by Mars Veterinary Health North America in higher wages, benefits, education, and career development for veterinary teams' },
  { value: '$31.5M+', label: 'granted by the Banfield Foundation, BluePearl Cares, and VCA Charities to expand access to veterinary care' },
]

export default function WhatIsMVHPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--navy)' }} className="text-center px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(0,163,184,0.18) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase mb-4 block" style={{ color: 'var(--teal)' }}>
            Our Network
          </span>
          <h1 className="font-serif text-[clamp(30px,4vw,52px)] text-white leading-[1.15] mb-5">
            Built around your pet,<br />
            <em className="not-italic" style={{ color: 'var(--teal)' }}>and the people who care for them.</em>
          </h1>
          <p className="text-[17px] font-light leading-[1.75] mx-auto" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 660 }}>
            Pets are family. They deserve veterinary care that treats them that way at every age and stage of their lives. Banfield, BluePearl, and VCA are three of the most trusted veterinary brands in the country, and together they form the Mars Veterinary Health network: a global network of hospitals, doctors, and care teams committed to giving your pet exceptional care from the first puppy visit through their senior years. More than 8,300 veterinarians. More than 2,000 locations. One shared commitment to making your pet's life better, healthier, and longer.
          </p>
        </div>
      </section>

      {/* Section 2 — What It Is */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-6 leading-[1.2]" style={{ color: 'var(--navy)' }}>
            What it is
          </h2>
          <p className="text-base leading-[1.8]" style={{ color: 'var(--gray-500)' }}>
            Mars Veterinary Health, or MVH for short, is a connected network of veterinary brands working together so your pet has access to the right care, in the right place, at every age and stage of life. In the United States, the network includes Banfield Pet Hospital for preventive and primary care, BluePearl Pet Hospital for specialty and 24/7 emergency care, and VCA Animal Hospitals for primary, urgent, specialty, and emergency care. Together, these three brands operate more than 2,000 hospitals nationwide and employ more than 8,300 veterinarians across 21+ specialty areas. They are united by a single Purpose: A Better World For Pets.
          </p>
        </div>
      </section>

      {/* Section 3 — Video */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'var(--navy)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,163,184,0.15) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-8">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 0 0 1px rgba(0,163,184,0.25), 0 20px 60px rgba(0,163,184,0.18)' }}
          >
            <video
              controls
              preload="metadata"
              playsInline
              className="w-full block"
            >
              <source src="https://s1ud1orntopx1m9c.public.blob.vercel-storage.com/what-is-mvh.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Section 4 — Backed by 90 Years of Caring for Pets */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-6 leading-[1.2]" style={{ color: 'var(--navy)' }}>
            Backed by 90 years of caring for pets
          </h2>
          <p className="text-base leading-[1.8] mb-5" style={{ color: 'var(--gray-500)' }}>
            Banfield, BluePearl, and VCA are all part of Mars Petcare, the pet-focused business of Mars, Incorporated. Mars is a privately held, family-owned company headquartered in McLean, Virginia, that has been providing pet nutrition, veterinary care, and science and diagnostic services for pets for over 90 years. You may know Mars from pet food brands like ROYAL CANIN®, PEDIGREE®, IAMS™, WHISKAS®, SHEBA®, and CESAR®, which are also part of Mars Petcare.
          </p>
          <p className="text-base leading-[1.8]" style={{ color: 'var(--gray-500)' }}>
            What Mars brings to our veterinary network is the same love, care and attention as any neighborhood vet. Plus the resources, science, and long-term commitment that smaller practices often can't access on their own. The WALTHAM Petcare Science Institute, with more than 60 years of pet-health research behind it, partners with our hospitals on clinical studies and evidence-based guidance. Through ongoing research partnerships with institutions like Johns Hopkins University, and insights drawn from the more than 3 million pets seen across our network each year, the team caring for your pet has access to the latest science as it emerges.
          </p>
        </div>
      </section>

      {/* Section 5 — Connected Care Built for Your Pet's Whole Life */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-6 leading-[1.2]" style={{ color: 'var(--navy)' }}>
            Connected care built for your pet's whole life
          </h2>
          <p className="text-base leading-[1.8] mb-5" style={{ color: 'var(--gray-500)' }}>
            Pets need different things at different times. A puppy needs first vaccines and wellness checks. A senior dog needs more careful monitoring. An emergency needs an ER team that's ready 24/7. A complex diagnosis may need a specialist. Inside our network, all of that is available under brands you can trust, working together so your pet's care moves with them.
          </p>
          <p className="text-base leading-[1.8]" style={{ color: 'var(--gray-500)' }}>
            The network is being built so that giving your pet the love, health, and happiness they deserve is easier, and more cost-effective. That includes same-day appointments, extended hours, tele-triage support, and a growing set of digital tools for managing your pet's care online. It also includes connected digital records designed to follow your pet across the network, so referrals to a specialist or a visit to a 24/7 ER don't mean starting over. We're committed to advancing this connected care model so that whenever and wherever your pet needs care, the right team has what they need to help.
          </p>
        </div>
      </section>

      {/* Section 6 — By the Numbers */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-10 leading-[1.2] text-center" style={{ color: 'var(--navy)' }}>
            Mars Veterinary Health, by the numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {STATS.map((s) => (
              <div
                key={s.value}
                className="bg-white rounded-2xl p-7 border transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: 'var(--gray-200)' }}
              >
                <div className="font-serif text-[34px] leading-[1.1] mb-2" style={{ color: 'var(--teal-dark)' }}>
                  {s.value}
                </div>
                <p className="text-[14px] leading-[1.6]" style={{ color: 'var(--gray-500)' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — A Better World For Pets */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-6 leading-[1.2]" style={{ color: 'var(--navy)' }}>
            A Better World For Pets
          </h2>
          <p className="text-base leading-[1.8] mb-5" style={{ color: 'var(--gray-500)' }}>
            Across every brand in our network, the Purpose is the same: A Better World For Pets. In practice, that shows up in three ways. We invest in the people who care for your pet, with higher wages, better benefits, and ongoing education for veterinary teams. We invest in the science that drives better outcomes, through clinical research and partnerships with leading institutions. And we invest in expanding access to care for the families and pets who need it most, through the work of our three charitable arms: the Banfield Foundation, BluePearl Cares, and VCA Charities.
          </p>
          <p className="text-base leading-[1.8]" style={{ color: 'var(--gray-500)' }}>
            What that means for you is straightforward. The team caring for your pet is part of a network that's putting real resources behind making veterinary care better, today and for the long term.
          </p>
        </div>
      </section>

      {/* CTA block */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'var(--navy)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 120%, rgba(0,163,184,0.18) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-[clamp(26px,3vw,36px)] text-white mb-4 leading-[1.2]">
            Get started.
          </h2>
          <p className="text-[15px] leading-[1.7] mb-8 mx-auto" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 540 }}>
            Find a nearby hospital, see how care is connected across the network, or meet our brands.
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
              href="/our-brands"
              className="inline-flex items-center text-[15px] font-semibold px-7 py-3.5 rounded-full text-white border transition-all hover:-translate-y-0.5"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Meet our brands →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
