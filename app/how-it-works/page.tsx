import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works — MyPetfam',
  description: "Learn how our connected network of 2,000+ hospitals shares your pet's health history.",
}

const GOOD_TO_KNOW = [
  { icon: '🚫', title: 'No repeated tests',       body: "If your pet has already had bloodwork, we won't run it again unnecessarily. Their results travel with them.", color: '#E8553E' },
  { icon: '🔗', title: 'Trusted referrals',        body: 'When your primary vet refers your pet to a specialist, that specialist is already part of the same trusted network.', color: '#5B3FA0' },
  { icon: '📄', title: 'Less paperwork',           body: "For complex or compassionate end-of-life situations, the last thing you need is more forms. We handle it.", color: '#1A2E5A' },
  { icon: '🚨', title: 'Emergency continuity',     body: "In an emergency, the vet team knows your pet's allergies, medications, and conditions — before you say a word.", color: '#E8553E' },
  { icon: '📦', title: 'Move anywhere',            body: "Relocating? Your pet's records move with you. Find a new hospital in our network and pick up right where you left off.", color: '#5B3FA0' },
  { icon: '🏥', title: 'One team, many locations', body: "Every hospital shares a commitment to the same standard of care — so you know what to expect, wherever you are.", color: '#1A2E5A' },
]

const FAQS = [
  {
    icon: '🔍',
    q: "Should I bring my pet's records when switching hospitals?",
    a: "No — if you're visiting any hospital within the Mars Veterinary Health network (Banfield, BluePearl, or VCA), your pet's records are already accessible. Just let the front desk know your pet's name and previous hospital.",
  },
  {
    icon: '🐾',
    q: 'How do I know if a hospital is in the network?',
    a: 'Use our Find Care tool to search by location. Any result showing a Banfield, BluePearl, or VCA badge is part of the connected network. You can also filter by brand.',
  },
  {
    icon: '🔒',
    q: "Is my pet's health information kept private?",
    a: "Yes. Your pet's records are protected and only accessible to licensed veterinary professionals within our network who are involved in their direct care. We follow strict data privacy standards.",
  },
  {
    icon: '📋',
    q: 'What if I visit a vet outside the network?',
    a: "Outside-network vets won't have automatic access to your pet's records, but you can request a copy of your pet's history at any time from any of our hospitals.",
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--navy)' }} className="text-center px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(0,163,184,0.18) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Image
            src="https://www.mypetfam.com/_next/image?url=%2Fimages%2Fhomepage%2Fhero-desktop.png&w=2048&q=85"
            alt="Pets"
            width={520}
            height={220}
            className="w-full max-w-[520px] h-[220px] object-cover object-top rounded-2xl mx-auto mb-9 opacity-90"
          />
          <h1 className="font-serif text-[clamp(30px,4vw,52px)] text-white leading-[1.15] mb-5">
            Your pet's care follows them —<br />
            <em className="not-italic" style={{ color: 'var(--teal-bright)' }}>wherever they go.</em>
          </h1>
          <p className="text-[17px] font-light leading-[1.75] mx-auto" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 620 }}>
            Our 2,000+ hospitals share your pet's health history so every vet they see is already up to speed.
            Less paperwork. Fewer repeated tests. A care team that always knows your pet's full picture.
          </p>
        </div>
      </section>

      {/* Three statements */}
      <section id="connected" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          {[
            { title: "Your pet's history is recorded once.", body: "At your first visit — whether that's a wellness check, an urgent appointment, or a specialist referral — your pet's records enter our shared system: vaccinations, diagnoses, medications, allergies, test results. From that moment on, every provider in the network has what they need." },
            { title: 'Every hospital in the network can see it.', body: "If your pet needs to see a specialist, visit an emergency hospital, or you move to a new city — any Mars Veterinary Health hospital can access their full history. No forms to fill in again. No explaining everything from scratch. Continuity of care, built in." },
            { title: 'Your vet team is always coordinated.', body: "When your primary vet refers your pet to a specialist, the specialist already has the referral notes, the background, and the test results. They can focus on what they need to do — not on gathering information you've already given once." },
          ].map((s, i) => (
            <div key={i} className="py-9 max-w-3xl" style={{ borderBottom: i < 2 ? '1px solid var(--gray-100)' : 'none' }}>
              <h2 className="font-serif text-[clamp(24px,3vw,36px)] mb-3.5 leading-[1.2]" style={{ color: 'var(--navy)' }}>{s.title}</h2>
              <p className="text-base leading-[1.8]" style={{ color: 'var(--gray-500)', maxWidth: 680 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Good to Know */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-10">
            <span className="block text-[13px] italic mb-2" style={{ color: 'var(--gray-500)' }}>What else?</span>
            <h2 className="font-serif text-[40px]" style={{ color: 'var(--navy)' }}>
              <span className="rounded px-3 py-0.5 text-white" style={{ background: 'var(--teal-bright)' }}>Good</span>{' '}to know
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {GOOD_TO_KNOW.map((card) => (
              <div key={card.title} className="rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl" style={{ background: card.color }}>
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="font-serif text-[22px] text-white mb-2.5 leading-[1.2]">{card.title}</h3>
                <p className="text-[14px] leading-[1.65]" style={{ color: 'rgba(255,255,255,0.75)' }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* United in care */}
      <section className="bg-white py-20" style={{ borderTop: '1px solid var(--gray-100)' }}>
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-serif text-[32px] text-center mb-12" style={{ color: 'var(--navy)' }}>United in care for the life of your pet.</h2>
          <div className="flex items-center justify-center">
            {[
              { logo: 'https://www.mypetfam.com/_next/image?url=%2Fapi%2Fmedia%2Ffile%2Fvca-tab-logo.png&w=256&q=85', name: 'VCA', desc: 'Comprehensive care from checkups to advanced treatments' },
              { logo: 'https://www.mypetfam.com/_next/image?url=%2Fapi%2Fmedia%2Ffile%2Fbanfield-tab-logo.png&w=256&q=85', name: 'Banfield', desc: 'Your partner for everyday wellness and early care' },
              { logo: 'https://www.mypetfam.com/_next/image?url=%2Fapi%2Fmedia%2Ffile%2Fbluepearl-tab-logo.png&w=256&q=85', name: 'BluePearl', desc: 'When your pet needs emergency or life-saving care' },
            ].map((brand, i, arr) => (
              <div key={brand.name} className="flex items-center flex-1">
                <div className="flex-1 text-center px-10">
                  <Image src={brand.logo} alt={brand.name} width={160} height={36} className="h-9 w-auto object-contain mx-auto mb-3.5" />
                  <p className="text-sm leading-[1.6]" style={{ color: 'var(--gray-500)' }}>{brand.desc}</p>
                </div>
                {i < arr.length - 1 && <div className="w-px h-20 flex-shrink-0" style={{ background: 'var(--gray-200)' }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-[36px] mb-8" style={{ color: 'var(--navy)' }}>Got questions?</h2>
          <div className="flex flex-col gap-2.5">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-2xl border overflow-hidden transition-colors" style={{ borderColor: 'var(--gray-200)' }}>
                <summary className="flex items-center gap-3 px-6 py-5 cursor-pointer list-none font-semibold text-[15px]" style={{ color: 'var(--navy)' }}>
                  <span className="text-base flex-shrink-0">{faq.icon}</span>
                  {faq.q}
                  <span className="ml-auto w-6 h-6 rounded-full flex items-center justify-center text-lg flex-shrink-0 group-open:rotate-45 transition-transform" style={{ background: 'var(--teal-light)', color: 'var(--teal)' }}>+</span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-[1.75]" style={{ color: 'var(--gray-500)', paddingLeft: 52 }}>{faq.a}</p>
              </details>
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

      {/* More resources */}
      <section className="bg-white py-20" style={{ borderTop: '1px solid var(--gray-100)' }}>
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-serif text-[30px] mb-8" style={{ color: 'var(--navy)' }}>More resources for you</h2>
          <div className="grid grid-cols-3 gap-5">
            {[
              { icon: '📍', title: 'Find care', desc: 'Locate a hospital or care center near you', link: '/find-care', label: 'Search locations →' },
              { icon: '🏷️', title: 'Our brands', desc: 'Learn about VCA, BluePearl, Banfield and more', link: '/our-brands', label: 'Meet our brands →' },
              { icon: '📁', title: 'Your records', desc: "Request or transfer your pet's health history", link: '/how-it-works#faqs', label: 'Get your records →' },
            ].map((r) => (
              <div key={r.title} className="rounded-2xl p-7 border transition-all hover:-translate-y-0.5 hover:shadow-md" style={{ background: 'var(--cream)', borderColor: 'var(--gray-200)' }}>
                <div className="text-3xl mb-3.5">{r.icon}</div>
                <h4 className="text-base font-bold mb-2" style={{ color: 'var(--navy)' }}>{r.title}</h4>
                <p className="text-[13px] leading-[1.6] mb-4" style={{ color: 'var(--gray-500)' }}>{r.desc}</p>
                <Link href={r.link} className="text-[13px] font-semibold" style={{ color: 'var(--teal)' }}>{r.label}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
