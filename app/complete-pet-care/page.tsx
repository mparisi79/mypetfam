import Link from 'next/link'
import type { Metadata } from 'next'
import { LIFECYCLE_STAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Complete Pet Care — MyPetfam',
  description: 'A lifetime of care — from your first puppy exam through preventive, primary, emergency, specialty, and end-of-life care.',
}

const CARE_STAGES = [
  {
    id: 'getting-started', emoji: '🐣', color: 'var(--teal-dark)', colorLight: 'var(--teal-light)',
    title: 'Getting Started', subtitle: 'New pet care & first visits',
    body: "Welcoming a new pet is one of life's great joys — and getting the first vet visit right sets the foundation for a lifetime of health. We help you establish care, understand your pet's baseline health, and build a relationship with a trusted vet team.",
    bullets: ['First wellness exam', 'Microchipping & registration', 'Parasite prevention', 'Puppy & kitten vaccination schedules'],
  },
  {
    id: 'healthy', emoji: '💉', color: '#5B3FA0', colorLight: '#F0EEFF',
    title: 'Staying Healthy', subtitle: 'Preventive care & wellness',
    body: "Prevention is the most powerful tool in veterinary medicine. Regular checkups catch problems early, keep vaccines up to date, and give your vet the ongoing visibility they need to support your pet through every life stage.",
    bullets: ['Annual wellness exams', 'Core & lifestyle vaccines', 'Dental cleanings', 'Nutritional counseling'],
  },
  {
    id: 'ongoing', emoji: '📋', color: 'var(--navy)', colorLight: 'var(--teal-light)',
    title: 'Ongoing Care Needs', subtitle: 'Primary & chronic care',
    body: "Pets with ongoing health needs — chronic conditions, behavioral concerns, or regular monitoring — deserve a care team that knows their history. Our connected network means no starting from scratch, ever.",
    bullets: ['Chronic disease management', 'Prescription refills', 'Behavioral health', 'Regular monitoring & labs'],
  },
  {
    id: 'emergency', emoji: '🚨', color: 'var(--coral)', colorLight: 'var(--coral-light)',
    title: 'Emergency Care', subtitle: "24/7 when it can't wait",
    body: "When something goes wrong, you need help immediately — and you need your pet's history available without delay. BluePearl's 24/7 emergency hospitals are part of the same network, so your records are already there when you arrive.",
    bullets: ['24/7 emergency services', 'Trauma & critical care', 'Immediate triage', 'Seamless record access'],
  },
  {
    id: 'specialized', emoji: '⭐', color: '#5B3FA0', colorLight: '#F0EEFF',
    title: 'Specialized Care', subtitle: 'Advanced expertise for complex needs',
    body: "Some conditions require the expertise of a veterinary specialist — a cardiologist, oncologist, or neurologist. Our referral network connects you directly, with your pet's full history already in their hands.",
    bullets: ['Cardiology', 'Oncology & radiation', 'Neurology', 'Orthopedic surgery', 'Dermatology', 'Internal medicine'],
  },
  {
    id: 'end-of-life', emoji: '🕊️', color: 'var(--navy)', colorLight: 'var(--teal-light)',
    title: 'End of Life Care', subtitle: 'Compassionate support when it matters most',
    body: "When a pet is nearing the end of their life, compassion and continuity of care are more important than ever. Our hospice and palliative care services — in-hospital and in-home — focus on quality of life and dignity.",
    bullets: ['Pain management', 'In-hospital hospice', 'In-home palliative care', 'Family support & guidance'],
  },
  {
    id: 'nutrition', emoji: '🥩', color: 'var(--gold)', colorLight: 'var(--gold-light)',
    title: 'Nutrition', subtitle: 'Science-backed diet for every stage',
    body: "Nutrition is the foundation of good health at every life stage. Through our partnership with Royal Canin, our vets can recommend tailored diets that align with your pet's specific health needs — from puppyhood through their senior years.",
    bullets: ['Life-stage appropriate diets', 'Therapeutic nutrition', 'Weight management', 'Royal Canin partnership'],
    isRoyalCanin: true,
  },
] as const

export default function CompletePetCarePage() {
  return (
    <>
      {/* Hero with lifecycle */}
      <section style={{ background: 'var(--navy)' }} className="text-center px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(0,163,184,0.18) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase mb-4 block" style={{ color: 'var(--gold)' }}>
            Complete Pet Care
          </span>
          <h1 className="font-serif text-[clamp(36px,5vw,56px)] text-white leading-[1.1] mb-5">
            A lifetime of care.<br />One trusted network.
          </h1>
          <p className="text-lg font-light leading-[1.7] mb-14" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 580, margin: '0 auto 56px' }}>
            From the first puppy exam to compassionate end-of-life support — we're built for the whole journey.
          </p>

          <div className="relative flex mt-14">
            <div className="absolute h-0.5 z-0" style={{ top: 40, left: 40, right: 40, background: 'linear-gradient(to right, var(--teal), var(--gold), var(--coral))' }} />
            {LIFECYCLE_STAGES.map((stage) => (
              <a key={stage.name} href={`#${stage.href.split('#')[1]}`} className="flex-1 flex flex-col items-center text-center relative z-10 px-2 group">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-4 transition-all group-hover:scale-110" style={{ background: 'rgba(255,255,255,0.08)', border: '2px solid rgba(255,255,255,0.15)' }}>
                  {stage.emoji}
                </div>
                <div className="text-[13px] font-semibold uppercase tracking-[0.06em] mb-1.5" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {stage.name}
                </div>
                <div className="text-[12px] leading-[1.5]" style={{ color: 'rgba(255,255,255,0.4)' }}>{stage.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Care stage sections */}
      {CARE_STAGES.map((stage, i) => (
        <section key={stage.id} id={stage.id} className="py-20" style={{ background: i % 2 === 0 ? 'white' : 'var(--cream)' }}>
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 gap-16 items-center">
              <div className={i % 2 !== 0 ? 'order-2' : ''}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6" style={{ background: stage.colorLight }}>
                  {stage.emoji}
                </div>
                {'isRoyalCanin' in stage && stage.isRoyalCanin && (
                  <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4" style={{ background: 'var(--gold-light)', color: 'var(--gold)' }}>
                    In partnership with Royal Canin
                  </div>
                )}
                <h2 className="font-serif text-[clamp(28px,3vw,40px)] mb-2 leading-[1.2]" style={{ color: 'var(--navy)' }}>
                  {stage.title}
                </h2>
                <p className="text-base font-medium mb-6" style={{ color: stage.color }}>{stage.subtitle}</p>
                <p className="text-[16px] leading-[1.8] mb-8" style={{ color: 'var(--gray-500)' }}>{stage.body}</p>
                <ul className="flex flex-col gap-2.5">
                  {stage.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[15px] font-medium" style={{ color: 'var(--gray-800)' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: stage.color }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href="/find-care" className="inline-flex items-center gap-2 mt-8 text-sm font-semibold px-6 py-3 rounded-full text-white transition-all hover:-translate-y-0.5" style={{ background: stage.color }}>
                  Find a hospital →
                </Link>
              </div>
              <div className={`rounded-2xl p-12 flex items-center justify-center ${i % 2 !== 0 ? 'order-1' : ''}`} style={{ background: stage.colorLight, minHeight: 320 }}>
                <span style={{ fontSize: 96 }}>{stage.emoji}</span>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
