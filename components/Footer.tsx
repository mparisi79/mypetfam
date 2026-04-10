import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)' }} className="text-white/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-4 gap-12 mb-12">
          <div>
            <Image
              src="https://www.mypetfam.com/images/mypetfam-logo.svg"
              alt="MyPetfam"
              width={120}
              height={32}
              className="h-8 w-auto mb-4 brightness-0 invert"
              unoptimized
              onError={(e) => {
                const t = e.target as HTMLImageElement
                t.style.display = 'none'
                const fb = t.nextElementSibling as HTMLElement
                if (fb) fb.style.display = 'block'
              }}
            />
            <span className="hidden font-serif font-bold text-xl text-white block mb-4">MyPetfam</span>
            <p className="text-sm leading-relaxed max-w-[260px]">
              A platform connecting pet owners with trusted veterinary care across the Mars Veterinary Health network.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-4">Services</h4>
            {['Urgent Care', 'Emergency Care', 'Preventive Care', 'Specialty Care', 'Virtual Care', 'Hospice'].map((s) => (
              <Link key={s} href="/find-care" className="block text-sm text-white/55 mb-2.5 hover:text-white transition-colors">
                {s}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-4">Our Brands</h4>
            {['Banfield', 'BluePearl', 'VCA', 'Mars Veterinary Health'].map((b) => (
              <Link key={b} href="/our-brands" className="block text-sm text-white/55 mb-2.5 hover:text-white transition-colors">
                {b}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-4">Support</h4>
            {[
              { label: 'Find a Hospital', href: '/find-care' },
              { label: 'FAQs', href: '/how-it-works#faqs' },
              { label: 'Contact Us', href: '/how-it-works#support' },
              { label: 'Accessibility', href: '#' },
              { label: 'Privacy Policy', href: '#' },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="block text-sm text-white/55 mb-2.5 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex justify-between items-center text-xs text-white/30">
          <span>© 2025 MyPetfam. BluePearl, Banfield, and VCA are affiliated companies of Mars, Inc.</span>
          <span>A Better World For Pets</span>
        </div>
      </div>
    </footer>
  )
}
