import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { NUTRITION_BRANDS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Nutrition — MyPetfam',
  description: 'Explore 11 trusted Mars pet nutrition brands — from veterinary diets to premium whole-prey recipes.',
}

const CATEGORIES = [
  {
    icon: '🩺',
    title: 'Veterinary diets',
    body: 'Clinically formulated recipes developed with veterinarians to manage specific health conditions — from kidney care to digestive support.',
    brands: 'Royal Canin',
    color: 'var(--teal-dark)',
  },
  {
    icon: '🐕',
    title: 'Everyday dog nutrition',
    body: 'Complete and balanced meals for every breed, size, and life stage — from puppy to senior.',
    brands: 'Pedigree, Iams, Cesar, Eukanuba',
    color: 'var(--navy)',
  },
  {
    icon: '🐱',
    title: 'Cat nutrition',
    body: 'Wet, dry, and premium recipes crafted to meet the unique dietary needs of cats and kittens.',
    brands: 'Whiskas, Sheba, Iams',
    color: 'var(--coral)',
  },
  {
    icon: '🌿',
    title: 'Natural & high-protein',
    body: 'Clean-label, grain-free, and ancestral-diet-inspired recipes using real meat and whole ingredients.',
    brands: 'Nutro, Crave, Orijen, Acana',
    color: 'var(--sage)',
  },
]

const WHY_ITEMS = [
  { icon: '🔬', title: 'Backed by Waltham', body: 'Every Mars nutrition brand is guided by research from the Waltham Petcare Science Institute — 60+ years of advancing pet health through science.' },
  { icon: '🤝', title: 'Vet-connected', body: 'Our nutrition brands work hand-in-hand with the Mars Veterinary Health network. Your vet can recommend the right diet as part of your pet\'s care plan.' },
  { icon: '🌍', title: 'Trusted worldwide', body: 'Mars Pet Nutrition feeds half the world\'s pets. From everyday meals to specialized veterinary diets, our brands serve pets in over 130 countries.' },
]

export default function NutritionPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--navy)' }} className="text-center px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(0,163,184,0.18) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase mb-4 block" style={{ color: 'var(--teal)' }}>
            Nutrition
          </span>
          <h1 className="font-serif text-[clamp(36px,5vw,56px)] text-white leading-[1.1] mb-5">
            The right food for every pet,<br />
            <em className="not-italic" style={{ color: 'var(--teal)' }}>at every stage.</em>
          </h1>
          <p className="text-[17px] font-light leading-[1.75] mx-auto" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 620 }}>
            From everyday nutrition to specialized veterinary diets, Mars Pet Nutrition offers 11 trusted brands —
            all backed by decades of science from the Waltham Petcare Science Institute.
          </p>
        </div>
      </section>

      {/* Brand cards */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <span className="block text-[13px] italic mb-2" style={{ color: 'var(--gray-500)' }}>Explore our brands</span>
            <h2 className="font-serif text-[40px]" style={{ color: 'var(--navy)' }}>
              <span className="rounded px-3 py-0.5 text-white" style={{ background: 'var(--teal)' }}>11</span>{' '}nutrition brands
            </h2>
            <p className="text-[15px] mt-3 mx-auto leading-relaxed" style={{ color: 'var(--gray-500)', maxWidth: 480 }}>
              Each developed for a specific need — from veterinary diets to natural, high-protein recipes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NUTRITION_BRANDS.map((brand) => (
              <div
                key={brand.slug}
                className="rounded-2xl overflow-hidden border transition-all hover:shadow-2xl hover:-translate-y-0.5 flex flex-col"
                style={{ borderColor: 'var(--gray-200)' }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{ background: brand.bg, height: 160 }}
                >
                  <span className="text-[64px]" role="img" aria-label={brand.name}>{brand.icon}</span>
                </div>
                <div className="flex flex-col flex-1 p-7" style={{ background: 'var(--cream)' }}>
                  <h3 className="font-serif text-[22px] mb-1 leading-tight" style={{ color: 'var(--navy)' }}>
                    {brand.name}
                  </h3>
                  <p className="text-[13px] italic mb-3" style={{ color: 'var(--gray-500)' }}>
                    {brand.type}
                  </p>
                  <p className="text-[14px] leading-[1.7] mb-6 flex-1" style={{ color: 'var(--gray-500)' }}>
                    {brand.desc}
                  </p>
                  <Link
                    href={`/nutrition/${brand.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold border-[1.5px] px-5 py-2.5 rounded-full transition-all hover:bg-[var(--navy)] hover:text-white w-fit"
                    style={{ color: 'var(--navy)', borderColor: 'var(--navy)' }}
                  >
                    See Products →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-[36px]" style={{ color: 'var(--navy)' }}>Nutrition by category</h2>
            <p className="text-[15px] mt-2" style={{ color: 'var(--gray-500)' }}>Every pet has different needs. We have a brand for each.</p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl p-8 border transition-all hover:-translate-y-0.5 hover:shadow-md bg-white"
                style={{ borderColor: 'var(--gray-200)' }}
              >
                <div className="text-3xl mb-4">{cat.icon}</div>
                <h3 className="font-serif text-[22px] mb-2.5 leading-tight" style={{ color: cat.color }}>{cat.title}</h3>
                <p className="text-[14px] leading-[1.7] mb-4" style={{ color: 'var(--gray-500)' }}>{cat.body}</p>
                <p className="text-[12px] font-semibold tracking-wide uppercase" style={{ color: 'var(--gray-800)' }}>
                  {cat.brands}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mars Nutrition */}
      <section className="bg-white py-20" style={{ borderTop: '1px solid var(--gray-100)' }}>
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-serif text-[36px] text-center mb-12" style={{ color: 'var(--navy)' }}>Why Mars Pet Nutrition?</h2>
          <div className="grid grid-cols-3 gap-6">
            {WHY_ITEMS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ background: 'var(--navy)' }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-[20px] text-white mb-2.5 leading-tight">{item.title}</h3>
                <p className="text-[14px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.65)' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talk to your vet CTA */}
      <section className="py-14 border-t-2" style={{ background: 'var(--teal-light)', borderColor: 'var(--teal)' }}>
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
            <h3 className="font-serif text-[28px] mb-2.5" style={{ color: 'var(--navy)' }}>Not sure which food is right?</h3>
            <p className="text-[15px] leading-[1.7] mb-5 max-w-xl" style={{ color: 'var(--gray-500)' }}>
              Your veterinarian can help you choose the best nutrition plan for your pet's breed, age, and health needs.
              Find a hospital near you to get personalized diet guidance.
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

      {/* More resources */}
      <section className="bg-white py-20" style={{ borderTop: '1px solid var(--gray-100)' }}>
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-serif text-[30px] mb-8" style={{ color: 'var(--navy)' }}>More resources for you</h2>
          <div className="grid grid-cols-3 gap-5">
            {[
              { icon: '🏥', title: 'Complete pet care', desc: 'Nutrition is one part of the picture — explore every stage of your pet\'s health journey', link: '/complete-pet-care', label: 'View care stages →' },
              { icon: '🔗', title: 'How it works', desc: 'Learn how our connected network coordinates care across 2,000+ hospitals', link: '/how-it-works', label: 'Learn more →' },
              { icon: '📍', title: 'Find care', desc: 'Locate a hospital or care center near you for nutrition consultations', link: '/find-care', label: 'Search locations →' },
            ].map((r) => (
              <div key={r.title} className="rounded-2xl p-7 border transition-all hover:-translate-y-0.5 hover:shadow-md" style={{ background: 'var(--cream)', borderColor: 'var(--gray-200)' }}>
                <div className="text-3xl mb-3.5">{r.icon}</div>
                <h4 className="text-base font-bold mb-2" style={{ color: 'var(--navy)' }}>{r.title}</h4>
                <p className="text-[13px] leading-[1.6] mb-4" style={{ color: 'var(--gray-500)' }}>{r.desc}</p>
                <Link href={r.link} className="text-[13px] font-semibold" style={{ color: 'var(--teal-dark)' }}>{r.label}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
