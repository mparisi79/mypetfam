import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How referrals work in the Mars Veterinary Health network',
  description:
    'A referral inside our network is designed to feel seamless, with shared records, expert specialists, and a clear next step for your pet.',
}

export default function HowReferralsWorkPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--navy)' }} className="text-center px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(0,163,184,0.18) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase mb-4 block" style={{ color: 'var(--teal)' }}>
            How Referrals Work
          </span>
          <h1 className="font-serif text-[clamp(30px,4vw,52px)] text-white leading-[1.15] mb-5">
            A clear next step.
          </h1>
          <p className="text-[17px] font-light leading-[1.75] mx-auto" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 640 }}>
            When your pet needs more than a checkup, a referral is how a primary-care vet hands them off to a specialist or emergency team. Inside our network, that handoff is designed to feel seamless. Shared digital records help the next team prepare before you arrive. Specialists across 21+ disciplines are available within the same family of brands you already know. And your primary-care vet stays in the loop the whole way through. You and your pet are never starting from scratch.
          </p>
        </div>
      </section>

      {/* Section 2 — When a Referral Comes Into Play */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-6 leading-[1.2]" style={{ color: 'var(--navy)' }}>
            When a referral comes into play
          </h2>
          <p className="text-base leading-[1.8]" style={{ color: 'var(--gray-500)' }}>
            Most of your pet's care can happen at one primary-care hospital. A referral comes into play when your pet needs something more advanced. The most common reasons are specialty care like oncology, cardiology, neurology, or complex surgery; advanced diagnostics like MRI, CT, or ultrasound; or 24/7 emergency and critical care. Sometimes it's a single consultation with a specialist. Sometimes it's ongoing treatment over weeks or months. Either way, your primary-care team stays involved, and the goal is the same: get your pet the right care, fast.
          </p>
        </div>
      </section>

      {/* Section 3 — A Smoother Path, by Design */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-6 leading-[1.2]" style={{ color: 'var(--navy)' }}>
            A smoother path, by design
          </h2>
          <p className="text-base leading-[1.8]" style={{ color: 'var(--gray-500)' }}>
            Inside the Mars Veterinary Health network, referrals are designed to remove the friction that usually comes with being handed off to a new team. Shared digital records mean the specialty or emergency team can review your pet's history before you walk in, so you don't have to repeat yourself. Seamless digital referrals between providers help the handoff happen quickly, especially in time-sensitive situations. Care coordinators at our specialty and emergency hospitals can help you book the appointment, prepare for the visit, and answer questions about what to expect. After the visit, the specialist sends a written summary back to your primary-care vet, so your everyday team stays fully up to speed for any follow-up.
          </p>
        </div>
      </section>

      {/* Section 4 — A Few Things You Can Do */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] mb-6 leading-[1.2]" style={{ color: 'var(--navy)' }}>
            A few things you can do
          </h2>
          <p className="text-base leading-[1.8]" style={{ color: 'var(--gray-500)' }}>
            A few small things on your end help every referral go smoothly. Bring a list of your pet's current medications, including doses. Write down any recent symptoms or changes you've noticed, since the specialist will want to hear them in your own words. If your pet sees more than one practice, mention that, so any additional records can be requested. And if you have questions about cost, timing, or what to expect, your primary-care team is usually the best first call. The specialty hospital's care coordinators are a great second.
          </p>
        </div>
      </section>

      {/* CTA block */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'var(--navy)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 120%, rgba(0,163,184,0.18) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-[clamp(26px,3vw,36px)] text-white mb-4 leading-[1.2]">
            Ready when your pet is.
          </h2>
          <p className="text-[15px] leading-[1.7] mb-8 mx-auto" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 520 }}>
            Find a specialty or emergency hospital nearby, or read more about what to expect as a pet parent in our network.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/find-care"
              className="inline-flex items-center text-[15px] font-semibold px-7 py-3.5 rounded-full text-white transition-all hover:-translate-y-0.5"
              style={{ background: 'var(--teal)' }}
            >
              Find a specialty or emergency hospital →
            </Link>
            <Link
              href="/how-it-works/what-to-expect"
              className="inline-flex items-center text-[15px] font-semibold px-7 py-3.5 rounded-full text-white border transition-all hover:-translate-y-0.5"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              What to expect as a pet parent →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
