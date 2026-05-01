export const NAV_ITEMS = [
  {
    label: 'How It Works',
    href: '/how-it-works',
 links: [
      { label: 'What is the Mars Veterinary Health Network?', href: '/how-it-works/what-is-mars-veterinary-health' },
      { label: 'Our Services', href: '/services' },
      { label: 'How Referrals Work', href: '/how-it-works/how-referrals-work' },
      { label: 'What to Expect as a Pet Parent', href: '/how-it-works/what-to-expect' },
      { label: 'How Care Is Connected', href: '/how-it-works/how-care-is-connected' },
    ],
  },
  {
    label: 'Our Brands',
    href: '/our-brands',
    links: [
      { label: 'Mars Veterinary Health', href: '/our-brands' },
      { label: 'Veterinary Network', href: '/our-brands#network' },
      { divider: true },
      { label: 'Nutrition', href: '/nutrition' },
    ],
  },
  {
    label: 'Connected Care',
    href: '/connected-care',
    links: [
      { label: 'Referral stories', href: '/connected-care#referrals' },
      { label: 'Doctors as Heroes: Our veterinarians', href: '/connected-care#doctors' },
      { label: 'Real Pet Care Journeys', href: '/connected-care#journeys' },
      { label: 'How We Work Together', href: '/connected-care#together' },
    ],
  },
  {
    label: 'Complete Pet Care',
    href: '/complete-pet-care',
    links: [
      { label: 'Getting Started', href: '/complete-pet-care#getting-started' },
      { label: 'Staying Healthy', href: '/complete-pet-care#healthy' },
      { label: 'Ongoing Care Needs', href: '/complete-pet-care#ongoing' },
      { label: 'Emergency Care', href: '/complete-pet-care#emergency' },
      { label: 'Specialized Care', href: '/complete-pet-care#specialized' },
      { label: 'End of Life Care', href: '/complete-pet-care#end-of-life' },
    ],
  },
] as const

export const BRANDS = [
  {
    id: 'banfield',
    name: 'Banfield',
    tagline: 'Preventive care for every stage of life',
    description: '1,000+ locations. Optimum Wellness Plans®, virtual visits, and Pet Chat™ 24/7. Your partner for proactive pet health.',
    image: 'https://www.mypetfam.com/_next/image?url=%2Fapi%2Fmedia%2Ffile%2Fbrands_banfield_image_v2.png&w=2048&q=85',
    logo: 'https://www.mypetfam.com/_next/image?url=%2Fapi%2Fmedia%2Ffile%2Fbanfield-tab-logo.png&w=640&q=85',
    cta: 'Find a Banfield',
    filter: 'banfield',
    reverse: false,
  },
  {
    id: 'bluepearl',
    name: 'BluePearl',
    tagline: 'Specialty and emergency medicine, 24/7',
    description: 'Nearly 100 hospitals. 20+ specialties. 24/7 emergency care with compassion — and community support through BluePearl Cares.',
    image: 'https://www.mypetfam.com/_next/image?url=%2Fapi%2Fmedia%2Ffile%2Fbrands_bluepearl_image.png&w=2048&q=85',
    logo: 'https://www.mypetfam.com/_next/image?url=%2Fapi%2Fmedia%2Ffile%2Fbluepearl-tab-logo.png&w=640&q=85',
    cta: 'Find a BluePearl',
    filter: 'blue_pearl',
    reverse: true,
  },
  {
    id: 'vca',
    name: 'VCA',
    tagline: 'Comprehensive care, nationwide',
    description: "North America's largest veterinary network. 4M+ pets annually. From wellness to emergency — VCA is here for every moment.",
    image: 'https://www.mypetfam.com/_next/image?url=%2Fapi%2Fmedia%2Ffile%2FOurBrands_VCA_02.png&w=2048&q=85',
    logo: 'https://www.mypetfam.com/_next/image?url=%2Fapi%2Fmedia%2Ffile%2Fvca-tab-logo.png&w=256&q=85',
    cta: 'Find a VCA',
    filter: 'vca',
    reverse: false,
  },
] as const

export const NUTRITION_BRANDS = [
  { name: 'Royal Canin', slug: 'royal-canin', tagline: 'Health through nutrition, tailored to your pet', desc: 'Precise, science-backed nutrition tailored to breed, size, and health needs.', bg: '#FFF7ED', wordmarkColor: '#E2231A', reverse: false, pills: ['Vet diet'] },
  { name: 'Pedigree', slug: 'pedigree', tagline: 'Complete, balanced meals for every dog', desc: "The world's #1 dog food brand. Complete, balanced meals for happy, active dogs.", bg: '#FEFCE8', wordmarkColor: '#C8102E', reverse: true, pills: ['Dog'] },
  { name: 'Iams', slug: 'iams', tagline: 'Quality nutrition for lifelong vitality', desc: 'Quality ingredients for strong muscles, healthy skin, and lifelong vitality.', bg: '#EFF6FF', wordmarkColor: '#E2231A', reverse: false, pills: ['Dog', 'Cat'] },
  { name: 'Whiskas', slug: 'whiskas', tagline: 'Crafted to help every cat purr more', desc: 'Wet and dry recipes crafted to help all cats purr more, from kitten to adult.', bg: '#FDF2F8', wordmarkColor: '#5C2D91', reverse: true, pills: ['Cat'] },
  { name: 'Sheba', slug: 'sheba', tagline: 'Premium meals cats instinctively love', desc: 'Irresistibly crafted premium meals that cats instinctively love.', bg: '#FAF5FF', wordmarkColor: '#1A1A1A', reverse: false, pills: ['Cat', 'Premium'] },
  { name: 'Cesar', slug: 'cesar', tagline: 'Gourmet recipes made for small dogs', desc: 'Gourmet wet and dry food designed for the tastes and needs of small dogs.', bg: '#FFF7ED', wordmarkColor: '#1A1A1A', reverse: true, pills: ['Dog', 'Small breed'] },
  { name: 'Nutro', slug: 'nutro', tagline: 'Clean, natural recipes with real protein', desc: 'Clean recipes with non-GMO ingredients and real protein sources.', bg: '#ECFDF5', wordmarkColor: '#1A4D1A', reverse: false, pills: ['Natural'] },
  { name: 'Eukanuba', slug: 'eukanuba', tagline: 'Performance nutrition for active dogs', desc: 'Performance-driven nutrition for active dogs and working breeds.', bg: '#EFF6FF', wordmarkColor: '#C8102E', reverse: true, pills: ['Dog', 'Premium'] },
  { name: 'Crave', slug: 'crave', tagline: 'High-protein meals inspired by ancestry', desc: 'High-protein, grain-free recipes inspired by the ancestral diet of dogs and cats.', bg: '#FEF2F2', wordmarkColor: '#1A1A1A', reverse: false, pills: ['High-protein'] },
  { name: 'Orijen', slug: 'orijen', tagline: 'Whole-prey nutrition for peak vitality', desc: 'Whole-prey ratios with fresh, regional ingredients for peak nourishment.', bg: '#ECFDF5', wordmarkColor: '#5B2A1F', reverse: true, pills: ['Premium', 'Natural'] },
  { name: 'Acana', slug: 'acana', tagline: 'Wholesome recipes from regional ingredients', desc: 'Thoughtfully crafted with locally sourced ingredients pets were meant to eat.', bg: '#F0F9FF', wordmarkColor: '#002344', reverse: false, pills: ['Natural'] },
] as const

export const LIFECYCLE_STAGES = [
  { emoji: '🐣', name: 'New Pet',    desc: 'Wellness & first exams',  href: '/complete-pet-care#getting-started' },
  { emoji: '💉', name: 'Preventive', desc: 'Vaccines & checkups',     href: '/complete-pet-care#healthy' },
  { emoji: '🏥', name: 'Primary',    desc: 'Everyday illness & care', href: '/complete-pet-care#ongoing' },
  { emoji: '📋', name: 'Ongoing',    desc: 'Chronic conditions',      href: '/complete-pet-care#ongoing' },
  { emoji: '🚨', name: 'Emergency',  desc: '24/7 critical care',      href: '/complete-pet-care#emergency' },
  { emoji: '⭐', name: 'Specialty',  desc: 'Advanced treatment',      href: '/complete-pet-care#specialized' },
  { emoji: '🕊️', name: 'End of Life', desc: 'Hospice & comfort',     href: '/complete-pet-care#end-of-life' },
] as const

export const SEARCH_DATA = [
  { icon: '🚨', title: 'Emergency Care',         sub: 'Immediate, life-saving treatment',            href: '/find-care' },
  { icon: '💉', title: 'Preventive & Wellness',  sub: 'Vaccines, checkups, Optimum Wellness Plans®', href: '/find-care' },
  { icon: '⭐', title: 'Specialty Care',         sub: 'Surgery, oncology, cardiology & more',        href: '/find-care' },
  { icon: '🏥', title: 'Find a Hospital',        sub: 'Search 2,000+ locations near you',            href: '/find-care' },
  { icon: '🐾', title: 'Banfield Pet Hospital',  sub: 'Preventive care & wellness plans',            href: '/our-brands' },
  { icon: '💙', title: 'BluePearl Pet Hospital', sub: 'Emergency & specialty, 24/7',                 href: '/our-brands' },
  { icon: '🔴', title: 'VCA Animal Hospitals',   sub: 'Comprehensive care, nationwide',              href: '/our-brands' },
  { icon: '🏥', title: 'Mars Veterinary Health', sub: 'The umbrella network behind our brands',      href: '/our-brands/mars-veterinary-health' },
  { icon: '📖', title: 'What is MVH?',           sub: 'Backed by 90 years of caring for pets',       href: '/how-it-works/what-is-mars-veterinary-health' },
  { icon: '🔗', title: 'How care is connected',  sub: 'Shared records across the network',           href: '/how-it-works/how-care-is-connected' },
  { icon: '↗',  title: 'How referrals work',     sub: 'From primary care to specialty and back',     href: '/how-it-works/how-referrals-work' },
  { icon: '👋', title: 'What to expect',         sub: 'Your first visit and beyond',                 href: '/how-it-works/what-to-expect' },
  { icon: '🕊️', title: 'End of Life Care',      sub: 'Hospice & compassionate support',             href: '/complete-pet-care#end-of-life' },
  { icon: '🥩', title: 'Nutrition',              sub: 'Royal Canin partnership & diet guidance',     href: '/nutrition' },
  { icon: '🩺', title: 'Services',               sub: 'Urgent, preventive, specialty & hospice care', href: '/services' },
  { icon: '❓', title: 'FAQs & Support',         sub: 'Common pet care questions answered',          href: '/how-it-works' },
] as const
