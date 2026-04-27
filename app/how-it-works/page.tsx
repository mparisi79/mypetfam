import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works — MyPetfam',
  description:
    'What Mars Veterinary Health is, how care connects across the network, how referrals work, and what to expect as a pet parent.',
}

const HUB_CARDS = [
  {
    icon: '🏥',
    title: 'What is Mars Veterinary Health?',
    body:
      "Banfield, BluePearl, and VCA are coming together as a single network of care for your pet. Here's what that means and who stands behind it.",
    href: '/how-it-works/what-is-mars-veterinary-health',
    color: '#1A2E5A',
  },
  {
    icon: '🔗',
    title: 'How care is connected',
    body:
      "From same-day appointments to shared records, here's how the Banfield, BluePearl, and VCA network works together for your pet.",
    href: '/how-it-works/how-care-is-connected',
    color: '#00A3B8',
  },
  {
    icon: '🔄',
    title: 'How referrals work',
    body:
      'A referral inside our network is designed to feel seamless, with shared records, expert specialists, and a clear next step for your pet.',
    href: '/how-it-works/how-referrals-work',
    color: '#5B3FA0',
  },
  {
    icon: '🐾',
    title: 'What to expect as a pet parent',
    body:
      'What you can expect from any of our hospitals, what to expect on cost, and a few simple things that help every visit go better.',
    href: '/how-it-works/what-to-expect',
    color: '#E8553E',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--navy)' }} className="text-center px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(0,163,184,0.18) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase mb-4 block" style={{ color: 'var(--teal)' }}>
            How It Works
          </span>
          <h1 className="font-serif text-[clamp(30px,4vw,52px)] text-white leading-[1.15] mb-5">
            How it works,{' '}
            <em className="not-italic" style={{ color: 'var(--teal)' }}>from first visit to follow-up.</em>
          </h1>
          <p className="text-[17px] font-light leading-[1.75] mx-auto" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 620 }}>
            Four short reads that cover what our network is, how care connects across it, how referrals work, and what to expect as a pet parent.
          </p>
        </div>
      </section>

      {/* Four-card hub grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-5">
            {HUB_CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="rounded-2xl p-10 block transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ background: card.color }}
              >
                <div className="text-4xl mb-5">{card.icon}</div>
                <h2 className="font-serif text-[26px] text-white mb-3 leading-[1.2]">{card.title}</h2>
                <p className="text-[15px] leading-[1.65] mb-5" style={{ color: 'rgba(255,255,255,0.8)' }}>{card.body}</p>
                <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-white">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Still need help */}
      <section id="support" className="py-14 border-t-2" style={{ background: 'var(--gold-light)', borderColor: 'var(--gold)' }}>
        <div className="max-w-7xl mx-auto px-8 flex items-center gap-10">
          <Image src="https://www.mypetfam.com/_next/image?url=%2Fimages%2Flocation-module%2Ffallback-dog.png&w=640&q=85" alt="Dog" width={160} height={160} className="w-40 h-40 object-cover object-top rounded-full flex-shrink-0 border-4 border-white shadow-lg" />
          <div>
            <h3 className="font-serif text-[28px] mb-2.5" style={{ color: 'var(--navy)' }}>Still need help?</h3>
            <p className="text-[15px] leading-[1.7] mb-5 max-w-xl" style={{ color: 'var(--gray-500)' }}>If you can't find the answer you're looking for, your local veterinary team is the best resource. Contact a nearby hospital for advice, availability, or to book care.</p>
            <Link href="/find-care" className="inline-flex items-center text-[15px] font-semibold px-7 py-3.5 rounded-full text-white transition-all hover:-translate-y-0.5" style={{ background: 'var(--navy)' }}>
              Find a nearby hospital →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
