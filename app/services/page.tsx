import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { BRANDS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services — MyPetfam',
  description:
    'A complete range of veterinary care — urgent, emergency, preventive, primary, specialty, and hospice. Learn about each level of care and find a provider.',
}

type ServiceTier = {
  id: string
  emoji: string
  title: string
  tagline: string
  color: string
  colorLight: string
  bullets?: readonly string[]
  longBody?: string
}

type ServiceGroup = {
  id: string
  kicker: string
  heading: string
  sub: string
  tiers: readonly ServiceTier[]
}

const SERVICE_GROUPS: readonly ServiceGroup[] = [
  {
    id: 'immediate',
    kicker: 'Immediate & unplanned',
    heading: 'Immediate & unplanned care.',
    sub: "For when something's wrong and can't wait.",
    tiers: [
      {
        id: 'urgent',
        emoji: '⏱️',
        title: 'Urgent',
        tagline: 'Same-day help for sudden issues.',
        color: 'var(--gold)',
        colorLight: 'var(--gold-light)',
        bullets: ['Limping', 'Ear infections', 'Persistent vomiting'],
      },
      {
        id: 'emergency',
        emoji: '🚨',
        title: 'Emergency',
        tagline: 'Life-saving treatment when it counts.',
        color: 'var(--coral)',
        colorLight: 'var(--coral-light)',
        bullets: ['Serious injuries', 'Breathing trouble', 'Unresponsiveness'],
      },
    ],
  },
  {
    id: 'everyday',
    kicker: 'Everyday & ongoing',
    heading: 'Everyday & ongoing care.',
    sub: 'For keeping pets healthy or managing regular health needs.',
    tiers: [
      {
        id: 'preventive',
        emoji: '💉',
        title: 'Preventive',
        tagline: 'Wellness visits to keep your pet thriving.',
        color: 'var(--teal-dark)',
        colorLight: 'var(--teal-light)',
        bullets: ['Regular exams', 'Vaccinations', 'Health screenings', 'Virtual care'],
      },
      {
        id: 'primary',
        emoji: '🏥',
        title: 'Primary',
        tagline: 'Everyday medical care for your pet.',
        color: 'var(--navy)',
        colorLight: 'var(--teal-light)',
        bullets: [
          'Diagnosis and treatment for common illnesses',
          'Minor surgery',
          'Chronic conditions',
        ],
      },
    ],
  },
  {
    id: 'specialized',
    kicker: 'Specialized & advanced',
    heading: 'Specialized & advanced care.',
    sub: 'For complex, specific, or compassionate end-of-life situations.',
    tiers: [
      {
        id: 'specialty',
        emoji: '⭐',
        title: 'Specialty',
        tagline: 'Advanced expertise for complex needs.',
        color: '#5B3FA0',
        colorLight: '#F0EEFF',
        bullets: ['Surgery', 'Oncology', 'Cardiology'],
      },
      {
        id: 'hospice',
        emoji: '🕊️',
        title: 'Hospice',
        tagline: "Comfort and compassion at life's end.",
        color: 'var(--sage)',
        colorLight: 'var(--sage-light)',
        longBody:
          'Gentle support, both in-hospital and in-home, focused on quality of life for pets with terminal or advanced illness.',
      },
    ],
  },
] as const

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{ background: 'var(--navy)' }}
        className="text-center px-8 py-20 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% -20%, rgba(0,163,184,0.18) 0%, transparent 65%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span
            className="text-xs font-semibold tracking-[0.1em] uppercase mb-4 block"
            style={{ color: 'var(--teal)' }}
          >
            Services
          </span>
          <h1 className="font-serif text-[clamp(36px,5vw,56px)] text-white leading-[1.1] mb-5">
            A complete range of{' '}
            <em className="not-italic" style={{ color: 'var(--teal)' }}>
              care.
            </em>
          </h1>
          <p
            className="text-[17px] font-light leading-[1.75] mx-auto"
            style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 620 }}
          >
            Not sure what kind of care you need? Explore our services to learn about each level of
            care and find a provider.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            {SERVICE_GROUPS.flatMap((g) => g.tiers).map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="text-[13px] font-medium px-4 py-2 rounded-full border transition-all hover:-translate-y-0.5"
                style={{
                  borderColor: 'rgba(255,255,255,0.2)',
                  color: 'rgba(255,255,255,0.85)',
                  background: 'rgba(255,255,255,0.04)',
                }}
              >
                <span className="mr-1.5">{t.emoji}</span>
                {t.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service groups */}
      {SERVICE_GROUPS.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className="py-20"
          style={{
            background: gi % 2 === 0 ? 'var(--cream)' : '#fff',
            borderTop: gi === 0 ? 'none' : '1px solid var(--gray-100)',
          }}
        >
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <span
                className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-3 block"
                style={{ color: 'var(--teal-dark)' }}
              >
                {group.kicker}
              </span>
              <h2
                className="font-serif text-[clamp(28px,3.5vw,40px)] mb-3"
                style={{ color: 'var(--navy)' }}
              >
                {group.heading}
              </h2>
              <p className="text-[15px] mx-auto" style={{ color: 'var(--gray-500)', maxWidth: 560 }}>
                {group.sub}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {group.tiers.map((tier) => (
                <div
                  key={tier.id}
                  id={tier.id}
                  className="rounded-2xl p-8 border bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: 'var(--gray-200)' }}
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

                  {tier.bullets && (
                    <ul className="mb-6 space-y-2">
                      {tier.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-[14px] leading-[1.6]"
                          style={{ color: 'var(--gray-800)' }}
                        >
                          <span
                            className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ background: tier.color }}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {tier.longBody && (
                    <p
                      className="text-[14px] leading-[1.7] mb-6"
                      style={{ color: 'var(--gray-500)' }}
                    >
                      {tier.longBody}
                    </p>
                  )}

                  <Link
                    href="/find-care"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold"
                    style={{ color: tier.color }}
                  >
                    Find {tier.title.toLowerCase()} care <span aria-hidden>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* United in care — brands */}
      <section className="bg-white py-20" style={{ borderTop: '1px solid var(--gray-100)' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-[36px]" style={{ color: 'var(--navy)' }}>
              United in care for the life of your pet.
            </h2>
            <p className="text-[15px] mt-3" style={{ color: 'var(--gray-500)' }}>
              Three trusted brands. One connected network.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {BRANDS.map((brand) => (
              <Link
                key={brand.id}
                href={`/our-brands#${brand.id}`}
                className="rounded-2xl p-8 border bg-white text-center transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: 'var(--gray-200)' }}
              >
                <div
                  className="w-full h-20 mb-5 flex items-center justify-center rounded-xl"
                  style={{ background: 'var(--cream)' }}
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={140}
                    height={48}
                    className="max-h-12 w-auto object-contain"
                    unoptimized
                  />
                </div>
                <p className="text-[14px] leading-[1.6]" style={{ color: 'var(--gray-500)' }}>
                  {brand.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Find Care CTA */}
      <section
        className="py-14 border-t-2"
        style={{ background: 'var(--teal-light)', borderColor: 'var(--teal)' }}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center gap-10">
          <Image
            src="https://www.mypetfam.com/_next/image?url=%2Fimages%2Flocation-module%2Ffallback-dog.png&w=640&q=85"
            alt="Dog"
            width={160}
            height={160}
            className="w-40 h-40 object-cover object-top rounded-full flex-shrink-0 border-4 border-white shadow-lg"
            unoptimized
          />
          <div>
            <h3 className="font-serif text-[28px] mb-2.5" style={{ color: 'var(--navy)' }}>
              Find the right care from vets you can trust — nearby.
            </h3>
            <p
              className="text-[15px] leading-[1.7] mb-5 max-w-xl"
              style={{ color: 'var(--gray-500)' }}
            >
              Over 2,000 locations working together to care for your pet.
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
