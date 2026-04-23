import Image from 'next/image'
import Link from 'next/link'
import { BRANDS, LIFECYCLE_STAGES } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[calc(100vh-68px)] grid"
        style={{ background: 'var(--navy)', gridTemplateColumns: '1fr 1fr' }}
      >
        <div className="flex flex-col justify-center px-20 py-20">
          <div
            className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.04em] px-4 py-2 rounded-full mb-7 w-fit"
            style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.9)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--teal)' }} />
            2,000+ hospitals nationwide
          </div>
          <h1 className="font-serif text-[clamp(40px,5vw,64px)] font-bold text-white leading-[1.1] mb-6">
            Find the right care<br />for your pet.{' '}
            <em className="not-italic" style={{ color: 'var(--teal)' }}>Fast.</em>
          </h1>
          <p className="text-lg text-white/70 leading-[1.7] max-w-md mb-10 font-light">
            No matter what kind of care your pet needs, we connect you quickly with a doctor or hospital.
            Our network gives you the care you need right now — and referrals you can trust.
          </p>
          <div className="flex gap-4 items-center">
            <Link
              href="/find-care"
              className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
              style={{ background: 'var(--teal)', color: 'white' }}
            >
              Find care near me →
            </Link>
            <Link href="/how-it-works" className="text-[15px] font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>
              How it works ↓
            </Link>
          </div>
          <div className="flex gap-10 mt-14 pt-10" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
            {[['2,000+', 'Hospitals'], ['3', 'Trusted brands'], ['70K+', 'Associates']].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-4xl font-bold text-white leading-none mb-1">{n}</div>
                <div className="text-[13px]" style={{ color: 'rgba(255,255,255,0.5)' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-[120px] z-10" style={{ background: 'linear-gradient(to right, var(--navy), transparent)' }} />
          <Image
            src="https://www.mypetfam.com/_next/image?url=%2Fimages%2Fhomepage%2Fhero-desktop.png&w=2048&q=85"
            alt="Happy pets"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.1em] uppercase mb-4 block" style={{ color: 'var(--teal)' }}>Our Veterinary Services</span>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-bold leading-[1.2] mb-4" style={{ color: 'var(--navy)' }}>A complete range of care.</h2>
            <p className="text-lg leading-[1.7] font-light" style={{ color: 'var(--gray-500)' }}>From routine wellness to life-saving emergencies — find out why great vet care begins with us.</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                icon: '🚨', bg: 'var(--coral-light)', title: 'Immediate & Unplanned', sub: "For when something's wrong and can't wait.",
                items: [{ name: 'Urgent Care', tags: ['Limping', 'Ear infections', 'Vomiting'] }, { name: 'Emergency Care', tags: ['Serious injuries', 'Breathing trouble', '24/7'] }],
              },
              {
                icon: '💙', bg: 'var(--teal-light)', title: 'Everyday & Ongoing', sub: 'For keeping pets healthy or managing regular needs.',
                items: [{ name: 'Preventive Care', tags: ['Wellness exams', 'Vaccinations'] }, { name: 'Primary Care', tags: ['Illness', 'Chronic conditions'] }, { name: 'Virtual Care', tags: ['Online consult', 'Pet Chat™ 24/7'] }],
              },
              {
                icon: '⭐', bg: 'var(--gold-light)', title: 'Specialized & Advanced', sub: 'For complex or end-of-life situations.',
                items: [{ name: 'Specialty Care', tags: ['Surgery', 'Oncology', 'Cardiology'] }, { name: 'Hospice Care', tags: ['In-hospital', 'In-home'] }],
              },
            ].map((group) => (
              <div key={group.title} className="bg-white rounded-2xl border overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl" style={{ borderColor: 'var(--gray-200)' }}>
                <div className="px-7 pt-7 pb-5" style={{ borderBottom: '1px solid var(--gray-100)' }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ background: group.bg }}>{group.icon}</div>
                  <div className="font-serif text-xl font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>{group.title}</div>
                  <div className="text-sm" style={{ color: 'var(--gray-500)' }}>{group.sub}</div>
                </div>
                <div className="px-7 py-5">
                  {group.items.map((item) => (
                    <div key={item.name} className="py-4" style={{ borderBottom: '1px solid var(--gray-100)' }}>
                      <div className="text-[15px] font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>{item.name}</div>
                      <div className="flex gap-1.5 flex-wrap">
                        {item.tags.map((t) => (
                          <span key={t} className="text-[12px] px-2.5 py-1 rounded-full" style={{ background: 'var(--gray-100)', color: 'var(--gray-500)' }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="py-24" style={{ background: 'var(--navy)' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.1em] uppercase mb-4 block" style={{ color: 'var(--gold)' }}>Complete Pet Care</span>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-bold leading-[1.2] mb-4 text-white">A lifetime of care.<br />One trusted network.</h2>
            <p className="text-lg leading-[1.7] font-light" style={{ color: 'rgba(255,255,255,0.6)' }}>From the first puppy exam to compassionate end-of-life support.</p>
          </div>
          <div className="relative flex">
            <div className="absolute h-0.5 z-0" style={{ top: 40, left: 40, right: 40, background: 'linear-gradient(to right, var(--teal), var(--gold), var(--coral))' }} />
            {LIFECYCLE_STAGES.map((stage) => (
              <Link key={stage.name} href={stage.href} className="flex-1 flex flex-col items-center text-center relative z-10 px-2 group">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-4 transition-all group-hover:scale-110" style={{ background: 'rgba(255,255,255,0.08)', border: '2px solid rgba(255,255,255,0.15)' }}>
                  {stage.emoji}
                </div>
                <div className="text-[13px] font-semibold uppercase tracking-[0.06em] mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>{stage.name}</div>
                <div className="text-[12px] leading-[1.5]" style={{ color: 'rgba(255,255,255,0.4)' }}>{stage.desc}</div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/complete-pet-care" className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5" style={{ background: 'var(--teal)', color: 'white' }}>
              Explore complete pet care →
            </Link>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.1em] uppercase mb-4 block" style={{ color: 'var(--teal)' }}>Our Brands</span>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-bold leading-[1.2] mb-4" style={{ color: 'var(--navy)' }}>Our vet care family.</h2>
            <p className="text-lg leading-[1.7] font-light" style={{ color: 'var(--gray-500)' }}>Mars Veterinary Health — spanning preventive, general, specialty, and emergency care across North America.</p>
          </div>
          <div className="flex flex-col gap-12">
            {BRANDS.map((brand) => (
              <div key={brand.id} className={`grid grid-cols-2 rounded-2xl overflow-hidden border transition-all hover:shadow-2xl hover:-translate-y-0.5 ${brand.reverse ? '[direction:rtl]' : ''}`} style={{ borderColor: 'var(--gray-200)' }}>
                <div className={`relative h-[340px] ${brand.reverse ? '[direction:ltr]' : ''}`}>
                  <Image src={brand.image} alt={brand.name} fill className="object-cover" />
                </div>
                <div className={`flex flex-col justify-center p-12 ${brand.reverse ? '[direction:ltr]' : ''}`} style={{ background: 'var(--cream)' }}>
                  <Image src={brand.logo} alt={brand.name} width={160} height={36} className="h-9 w-auto object-contain object-left mb-5" />
                  <h3 className="font-serif text-2xl mb-4" style={{ color: 'var(--navy)' }}>{brand.tagline}</h3>
                  <p className="text-[15px] leading-[1.75] mb-7" style={{ color: 'var(--gray-500)' }}>{brand.description}</p>
                  <Link href={`/find-care?brand=${brand.filter}`} className="inline-flex items-center gap-2 text-sm font-semibold border-[1.5px] px-5 py-2.5 rounded-full transition-all hover:bg-[var(--navy)] hover:text-white w-fit" style={{ color: 'var(--navy)', borderColor: 'var(--navy)' }}>
                    {brand.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center" style={{ background: 'linear-gradient(135deg, var(--teal-dark) 0%, var(--navy) 100%)' }}>
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-serif text-4xl text-white mb-3">Ready to find care for your pet?</h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>Over 2,000 locations. Three trusted brands. One connected network.</p>
          <Link href="/find-care" className="inline-flex items-center text-[17px] font-semibold px-9 py-4 rounded-full transition-all hover:-translate-y-0.5" style={{ background: 'var(--teal)', color: 'white' }}>
            Find a hospital near you →
          </Link>
        </div>
      </section>
    </>
  )
}
