import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Connected Care — MyPetfam',
  description: 'Real stories of how our connected veterinary network makes a difference for pets and families.',
}

const STORIES = [
  {
    emoji: '🩺', bg: 'var(--teal-light)',
    tag: 'Medical Excellence', tagColor: 'var(--teal-dark)', tagBg: 'var(--teal-light)',
    title: 'When every second counted',
    body: "BluePearl's 24/7 emergency team and Banfield's shared health records meant Max got immediate, informed care — without repeating a single test.",
  },
  {
    emoji: '👨‍⚕️', bg: 'var(--gold-light)',
    tag: 'Doctors as Heroes', tagColor: 'var(--gold)', tagBg: 'var(--gold-light)',
    title: "Dr. Patel's path: from VCA to specialty",
    body: "A day in the life of a veterinary specialist who trained across three of our brands — and why she says the network changed her career.",
  },
  {
    emoji: '🔗', bg: 'var(--sage-light)',
    tag: 'Referral Network', tagColor: 'var(--sage)', tagBg: 'var(--sage-light)',
    title: 'The referral that saved Luna',
    body: "A routine visit at Banfield flagged something unexpected. One call within the network, and Luna was in BluePearl's OR within hours.",
  },
  {
    emoji: '🤝', bg: 'var(--teal-light)',
    tag: 'How We Work Together', tagColor: 'var(--teal-dark)', tagBg: 'var(--teal-light)',
    title: 'Behind the scenes: one record, every vet',
    body: "Our shared system means a specialist in another city already knows your pet's history before you walk through the door. Here's how it works.",
  },
  {
    emoji: '🐕', bg: 'var(--coral-light)',
    tag: 'Real Pet Care Journeys', tagColor: 'var(--coral)', tagBg: 'var(--coral-light)',
    title: "Bella's journey: preventive to specialty and back",
    body: "From annual Banfield checkups to VCA oncology and back to wellness — how one dog's connected care record made every step smoother.",
  },
  {
    emoji: '🏆', bg: 'var(--gold-light)',
    tag: 'Medical Excellence', tagColor: 'var(--gold)', tagBg: 'var(--gold-light)',
    title: "Innovation in the OR: BluePearl's cardiology team",
    body: "How our cardiology specialists at BluePearl are pioneering minimally invasive procedures — and what it means for pets with heart conditions.",
  },
]

export default function ConnectedCarePage() {
  return (
    <>
      <section style={{ background: 'var(--navy)' }} className="text-center px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase mb-4 block" style={{ color: 'var(--teal)' }}>
            Connected Care in Action
          </span>
          <h1 className="font-serif text-[clamp(36px,5vw,60px)] text-white leading-[1.1] mb-5">
            Real stories. Real network.
          </h1>
          <p className="text-lg font-light leading-[1.7]" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560, margin: '0 auto' }}>
            Proof and storytelling about how our connected care model makes a difference for real pets and families.
          </p>
        </div>
      </section>

      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-3 gap-6">
            {STORIES.map((story) => (
              <Link
                key={story.title}
                href="#"
                className="bg-white rounded-2xl border overflow-hidden transition-all hover:-translate-y-1.5 hover:shadow-xl block"
                style={{ borderColor: 'var(--gray-200)' }}
              >
                <div className="w-full h-[200px] flex items-center justify-center text-6xl" style={{ background: story.bg }}>
                  {story.emoji}
                </div>
                <div className="p-7">
                  <span
                    className="inline-block text-[11px] font-semibold tracking-[0.06em] uppercase px-3 py-1 rounded-full mb-3.5"
                    style={{ background: story.tagBg, color: story.tagColor }}
                  >
                    {story.tag}
                  </span>
                  <h3 className="font-serif text-[20px] mb-2.5 leading-[1.3]" style={{ color: 'var(--navy)' }}>
                    {story.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7]" style={{ color: 'var(--gray-500)' }}>{story.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
