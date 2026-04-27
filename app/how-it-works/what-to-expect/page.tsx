import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What to expect as a pet parent',
  description:
    'What you can expect from any of our hospitals, what to expect on cost, and a few simple things that help every visit go better.',
}

export default function WhatToExpectPage() {
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
            Pets are family.<br />
            <em className="not-italic" style={{ color: 'var(--teal)' }}>Their care should feel that way.</em>
          </h1>
          <p className="text-[17px] font-light leading-[1.75] mx-auto" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 640 }}>
            The best veterinary care happens when you and your veterinary team work together. You know your pet better than anyone. Our team brings the medical training, tools, and experience. Across every Banfield, BluePearl, and VCA hospital in our network, we hold ourselves to a clear standard for what that partnership should look like. Here's what you can expect from us, what to expect on cost, and a few simple things that help every visit go better.
          </p>
        </div>
      </section>

      {/* Section 2 — What we'll bring to every visit */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-6 leading-[1.2]" style={{ color: 'var(--navy)' }}>
            What we'll bring to every visit
          </h2>
          <p className="text-base leading-[1.8]" style={{ color: 'var(--gray-500)' }}>
            When you walk into any hospital in our network, here's what you can count on. A team that treats you and your pet with respect and compassion. Clear, honest information about your pet's health and the options in front of you. Time to ask questions, and answers in plain language. A safe and inclusive environment for every family. And follow-through, which means clear next steps, timely communication, and access to your pet's records when you ask for them. The vets and care teams at our hospitals are here because they love pets. That should be obvious from the moment you walk in.
          </p>
        </div>
      </section>

      {/* Section 3 — Predictable, transparent pricing */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-6 leading-[1.2]" style={{ color: 'var(--navy)' }}>
            Predictable, transparent pricing
          </h2>
          <p className="text-base leading-[1.8] mb-5" style={{ color: 'var(--gray-500)' }}>
            We know veterinary care can feel financially stressful, especially when costs come as a surprise. We're working to make the pricing experience in our network feel predictable and within your control.
          </p>
          <p className="text-base leading-[1.8]" style={{ color: 'var(--gray-500)' }}>
            That starts with clear estimates before treatment, so you know what you're agreeing to and there are no surprises at checkout. It includes flexible payment options at most locations, so you can spread costs in a way that fits your budget. And it includes options like Banfield's Optimum Wellness Plans, which bundle routine preventive care into a single predictable monthly payment with unlimited office visits and 24/7 access to a veterinary professional through Pet Chat. If cost is a concern for any visit, your care team would much rather you ask about it openly than worry quietly. They can usually walk through what's essential, what can wait, and what options exist.
          </p>
        </div>
      </section>

      {/* Section 4 — A few practical tips */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-6 leading-[1.2]" style={{ color: 'var(--navy)' }}>
            A few practical tips
          </h2>
          <p className="text-base leading-[1.8]" style={{ color: 'var(--gray-500)' }}>
            A little preparation goes a long way. Before a visit, jot down any symptoms, behavior changes, or questions you want to discuss. Bring a current list of your pet's medications, including doses. If your pet sees more than one practice, mention that, so records can be requested. Keep your own copy of important records (a folder on your phone is plenty), especially after major visits or when switching hospitals. And if you ever leave a visit unsure about a recommendation or a next step, call back. Your care team would much rather answer a follow-up question than have you guess.
          </p>
        </div>
      </section>

      {/* CTA block */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'var(--navy)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 120%, rgba(0,163,184,0.18) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-[clamp(26px,3vw,36px)] text-white mb-4 leading-[1.2]">
            Find your nearby team.
          </h2>
          <p className="text-[15px] leading-[1.7] mb-8 mx-auto" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 520 }}>
            Search for a hospital near you, or read more about how care connects across our network.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
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
              See how care is connected →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
