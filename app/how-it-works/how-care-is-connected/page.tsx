import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How care is connected across the Mars Veterinary Health network',
  description:
    "From same-day appointments to shared records, here's how the Banfield, BluePearl, and VCA network works together for your pet.",
}

export default function HowCareIsConnectedPage() {
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
            One network. United in Care.<br />
            <em className="not-italic" style={{ color: 'var(--teal)' }}>Easier days for you and your pet.</em>
          </h1>
          <p className="text-[17px] font-light leading-[1.75] mx-auto" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 640 }}>
            Pets need a lot of things over a lifetime, and most of them shouldn't be hard. Booking an appointment shouldn't mean a week of phone tag. An emergency shouldn't mean explaining your pet's whole history from scratch. A referral to a specialist shouldn't mean starting over with a new clinic. Banfield, BluePearl, and VCA are coming together as a connected network of care so the everyday parts of caring for your pet feel easier, and the difficult parts feel less alone.
          </p>
        </div>
      </section>

      {/* Section 2 — What connected care means for you */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-6 leading-[1.2]" style={{ color: 'var(--navy)' }}>
            What connected care means for you
          </h2>
          <p className="text-base leading-[1.8]" style={{ color: 'var(--gray-500)' }}>
            Connected care is what happens when your pet's brands, teams, records, and tools all work together instead of in isolation. Inside our network, that shows up in three ways: in the everyday experience of caring for your pet, in the medical excellence available when you need it, and in clear, predictable pricing you can plan around. None of these on their own is revolutionary. Together, they add up to a better experience for the people and pets in our care.
          </p>
        </div>
      </section>

      {/* Section 3 — Easier access. Less friction. More time with your pet. */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-6 leading-[1.2]" style={{ color: 'var(--navy)' }}>
            Easier access. Less friction. More time with your pet.
          </h2>
          <p className="text-base leading-[1.8] mb-5" style={{ color: 'var(--gray-500)' }}>
            The biggest difference our network can make is in the things you do most often. Booking an appointment. Asking a quick question. Getting a follow-up. We're building toward an everyday experience that's designed for real life, not a 9-to-5 schedule.
          </p>
          <p className="text-base leading-[1.8]" style={{ color: 'var(--gray-500)' }}>
            That includes same-day and next-day appointments at a growing number of locations, extended hours that work around your day, and tele-triage support for moments when you're not sure if your pet needs to be seen. It includes online tools for booking visits, refilling prescriptions, and messaging your care team. With more than 2,000 network hospitals in neighborhoods across the U.S., there's likely one nearby, whether you're at home, at work, or traveling. And as the connected care experience expands, you'll be able to move between hospitals in our network with shared digital records designed to follow your pet, so the team you walk in to already has the picture of who your pet is and what they need.
          </p>
        </div>
      </section>

      {/* Section 4 — Expertise you can reach when your pet needs more */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-6 leading-[1.2]" style={{ color: 'var(--navy)' }}>
            Expertise you can reach when your pet needs more
          </h2>
          <p className="text-base leading-[1.8] mb-5" style={{ color: 'var(--gray-500)' }}>
            Most days, your pet's care can happen at one local hospital. But pets sometimes need things a primary-care team isn't set up to provide: an oncologist for a cancer diagnosis, a cardiologist for a heart condition, a 24/7 ER team after hours, or advanced imaging like MRI or CT.
          </p>
          <p className="text-base leading-[1.8] mb-5" style={{ color: 'var(--gray-500)' }}>
            Our network includes more than 8,300 veterinarians across 21+ specialty areas. That means a wide range of advanced care is available within the same family of brands you already know. When your primary-care vet refers your pet to a specialist or an emergency team in our network, the handoff is designed to be smooth: shared digital records help the receiving team prepare ahead of your visit, and the specialist communicates back to your primary-care vet to keep everyone on the same page. You're never alone in the harder moments, and you're not starting from scratch.
          </p>
          <p className="text-base leading-[1.8]" style={{ color: 'var(--gray-500)' }}>
            Our hospitals also benefit from network-wide investments in research and innovation, including clinical studies that have led to advances in earlier cancer and kidney disease detection, partnerships with the WALTHAM Petcare Science Institute and Johns Hopkins University, and insights drawn from the more than 3 million pets we see each year. The team treating your pet has access to the latest evidence as it emerges.
          </p>
        </div>
      </section>

      {/* Section 5 — Care you can plan around */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-6 leading-[1.2]" style={{ color: 'var(--navy)' }}>
            Care you can plan around
          </h2>
          <p className="text-base leading-[1.8] mb-5" style={{ color: 'var(--gray-500)' }}>
            Veterinary care can feel financially stressful, especially when costs come as a surprise. We're working to make pricing in our network feel predictable, transparent, and within your control.
          </p>
          <p className="text-base leading-[1.8]" style={{ color: 'var(--gray-500)' }}>
            That means clearer estimates before treatment, so you know what you're agreeing to. It means flexible payment options at most locations, so you can spread costs in a way that works for your budget. It means wellness plans like Banfield's Optimum Wellness Plans, which bundle routine preventive services into a single predictable monthly payment, with unlimited office visits and 24/7 access to a veterinary professional through Pet Chat. And it means honest conversations between you and your vet about what your pet needs, what it costs, and what options are available, so the decisions you make for your pet feel informed, not pressured.
          </p>
        </div>
      </section>

      {/* Section 6 — What it feels like */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-6 leading-[1.2]" style={{ color: 'var(--navy)' }}>
            What it feels like
          </h2>
          <p className="text-base leading-[1.8] mb-5" style={{ color: 'var(--gray-500)' }}>
            Most days, you won't think about the network at all. You'll go to your local Banfield for a wellness visit, schedule a checkup at your nearest VCA, or drop off a prescription refill. The team will feel like that hospital's team because it is.
          </p>
          <p className="text-base leading-[1.8] mb-5" style={{ color: 'var(--gray-500)' }}>
            Where the network shows up is in the moments that matter most. When your dog has a bad night and you need an emergency vet at 2 a.m., your nearest BluePearl is open 24/7 and ready. When a wellness exam turns up something that needs a specialist, your primary-care vet can refer you within the network so you're not searching strangers under stress. When you move to a new city, there's likely a hospital from one of our brands waiting, and your pet's care can pick up where it left off.
          </p>
          <p className="text-base leading-[1.8] italic" style={{ color: 'var(--gray-500)' }}>
            That's what connected care is for. Not for the ordinary days. For the days that aren't ordinary.
          </p>
        </div>
      </section>

      {/* CTA block */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'var(--navy)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 120%, rgba(0,163,184,0.18) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-[clamp(26px,3vw,36px)] text-white mb-4 leading-[1.2]">
            Keep going.
          </h2>
          <p className="text-[15px] leading-[1.7] mb-8 mx-auto" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 540 }}>
            Find a hospital nearby, see how referrals move through our network, or read about care at every life stage.
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
              href="/how-it-works/how-referrals-work"
              className="inline-flex items-center text-[15px] font-semibold px-7 py-3.5 rounded-full text-white border transition-all hover:-translate-y-0.5"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              How referrals work →
            </Link>
            <Link
              href="/complete-pet-care"
              className="inline-flex items-center text-[15px] font-semibold px-7 py-3.5 rounded-full text-white border transition-all hover:-translate-y-0.5"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Care at every life stage →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
