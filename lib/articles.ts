// Article schema for Complete Pet Care educational articles.
// Articles are populated from Mars-affiliated source publications (Kinship, Royal Canin,
// IAMS, WALTHAM, VCA, etc.) for internal design-system stress testing.

export type ArticleBlock =
  | { type: 'h2'; text: string; id: string }
  | { type: 'paragraph'; html: string }
  | { type: 'pullQuote'; quote: string; attribution: string; avatarSrc?: string; placeholder?: boolean }
  | { type: 'qualityOfCareCard'; eyebrow: string; title: string; body: string; imageSide: 'left' | 'right'; imageAccent: 'mint' | 'pink' | 'lavender'; placeholder?: boolean }
  | { type: 'darkSection'; blocks: ArticleBlock[] }

export type ArticlePhase = 'all' | 'puppy' | 'adult' | 'senior' | 'end-of-life'

export type CareTypeId =
  | 'getting-started'
  | 'healthy'
  | 'ongoing'
  | 'emergency'
  | 'specialized'
  | 'end-of-life'
  | 'nutrition'

export type Article = {
  slug: string
  phase: ArticlePhase
  careType: CareTypeId
  title: string
  accentWordIndex?: number // 0-based index of word in title to highlight
  heroAccent?: 'pink' | 'mint' | 'lavender' // placeholder hero block color
  subtitle: string
  readMinutes: number
  sourceUrl: string
  sourcePublication: string
  mainTakeaways?: string[]
  body: ArticleBlock[]
  faqs?: { question: string; answer: string; placeholder?: boolean }[]
  relatedResources?: {
    kind: 'find-care' | 'related-guide'
    title: string
    description: string
    href: string
    placeholder?: boolean
  }[]
}

export const ARTICLES: Article[] = [
  {
    slug: 'is-grain-free-diet-good-for-dogs',
    phase: 'all',
    careType: 'nutrition',
    title: 'Is a Grain-Free Diet Good For Dogs?',
    accentWordIndex: 4, // "Good"
    heroAccent: 'lavender',
    subtitle:
      'We detail everything you need to know. Find out the scoop on whether a grain-free diet is the right choice for your pup.',
    readMinutes: 7,
    sourceUrl: 'https://www.kinship.com/dog-nutrition/is-grain-free-good-dogs',
    sourcePublication: 'Kinship',
    mainTakeaways: [
      'Grain-free diets have increased in popularity due to some clever marketing ploys.',
      'Because dogs are omnivores, they can get valuable nutrition from grains that need to be replaced by other ingredients in a grain-free diet to be complete and balanced.',
      'Dogs with grain allergies or intolerances are the only pups who truly require a grain-free diet, and these conditions are fairly rare.',
      "If you're considering a grain-free diet, speak to your veterinarian first to make sure it's right for your pup.",
    ],
    body: [
      {
        type: 'h2',
        text: 'Dog nutrition is a hot topic for dog parents.',
        id: 'dog-nutrition-hot-topic',
      },
      {
        type: 'paragraph',
        html: 'Dog nutrition is a hot topic for dog parents. They want to feed the best option to keep their pup as healthy and happy for as long as possible, which comes with a lot of questions. Is organic or natural food better? Do you feed kibble, fresh, or raw diets?',
      },
      {
        type: 'paragraph',
        html: "And then, of course, there's the grain free conundrum. Is grain-free the best food for dogs? The truth is that grain-free diets aren't necessary for the vast majority of dogs as grains provide many essential nutrients.",
      },
      {
        type: 'h2',
        text: 'What are grain-free dog foods?',
        id: 'what-are-grain-free-dog-foods',
      },
      {
        type: 'paragraph',
        html: 'Dog food that is considered grain-free doesn\'t include any grain. That means no wheat, corn, barley, oats, <a href="#">rice</a>, rye, or any of their byproducts. These are typically added to dog foods as sources of carbohydrates, protein, and fiber, so grain-free dog foods have to use other ingredients, such as potatoes, <a href="#">sweet potatoes</a>, lentils, and peas to replace them.',
      },
      {
        type: 'h2',
        text: 'Nutritional Aspects',
        id: 'nutritional-aspects',
      },
      {
        type: 'paragraph',
        html: "The big reason that dog parents switch their dogs to a grain-free diet is the belief that it is more nutritious and healthier than those that contain grains. This is such a broad statement that it can't be evaluated except on an individual basis. This means that some grain-free diets may be healthier when compared to some diets that contain grain and vice versa; it comes down to what exactly you're comparing.",
      },
      {
        type: 'paragraph',
        html: "Overall, grain-free diets aren't necessarily healthier as grains provide many benefits to a dog's diet, including being a carbohydrate, protein, and fiber source. However, either diet can be very nutritious if it is complete and balanced and contains whole food ingredients.",
      },
      {
        type: 'pullQuote',
        quote:
          "We can usually diagnose a cruciate tear in the exam room. The drawer test is very reliable — if the joint moves forward when we apply pressure, we know what we're dealing with.",
        attribution: 'Dr. Sarah Chen, Primary Care, BluePearl – Chicago',
        placeholder: true,
      },
      {
        type: 'h2',
        text: 'Popularity and marketing of grain-free dog foods',
        id: 'popularity-and-marketing',
      },
      {
        type: 'paragraph',
        html: "So, if grain-free dog foods aren't necessarily healthier than the alternatives, how did they get so much hype? It all boils down to marketing. With more and more people learning about gluten intolerance and other issues with the digestion of grains in humans, they tend to translate this to their dog's health as well. But the fact of the matter is dogs are omnivores. They require both meat and plant sources in their diet and are typically able to digest grains without issue.",
      },
      {
        type: 'paragraph',
        html: "With all of the dog food brands out there, it can be hard to stand out, so some brands have taken to producing grain-free diets as something they feel is new and different and sure to trigger some dog parents' sensitivities. If you ask most veterinarians, a grain-free diet is more of a marketing strategy than a healthier alternative for most dogs.",
      },
      {
        type: 'qualityOfCareCard',
        eyebrow: 'Quality of care',
        title: 'Unified teams, elevating care everywhere',
        body: "Our commitment to advancing care guides how we support our teams and shape the future of the veterinary profession. With the global strength of Mars Petcare behind us, we're able to raise clinical standards and drive meaningful innovation. Reaching more pets in more places than any other veterinary organization, Mars Veterinary Health is helping strengthen veterinary medicine and build a brighter future for pets and the people who care for them.",
        imageSide: 'left',
        imageAccent: 'mint',
        placeholder: true,
      },
      {
        type: 'qualityOfCareCard',
        eyebrow: 'Quality of care',
        title: 'Unified teams, elevating care everywhere',
        body: "Our commitment to advancing care guides how we support our teams and shape the future of the veterinary profession. With the global strength of Mars Petcare behind us, we're able to raise clinical standards and drive meaningful innovation. Reaching more pets in more places than any other veterinary organization, Mars Veterinary Health is helping strengthen veterinary medicine and build a brighter future for pets and the people who care for them.",
        imageSide: 'right',
        imageAccent: 'mint',
        placeholder: true,
      },
    ],
    faqs: [
      {
        question: 'Should I give my dog pain medication at home?',
        answer:
          'Always check with your veterinarian first. Many human pain medications are toxic to dogs, even in small doses. Your vet can recommend safe, dog-specific options if pain relief is needed.',
        placeholder: true,
      },
      {
        question: "How do I know if it's a sprain vs a break?",
        answer:
          "It can be hard to tell at home. Both can cause limping, swelling, and pain. If your dog won't bear weight on the leg or the limb looks deformed, see a vet promptly.",
        placeholder: true,
      },
      {
        question: 'Can limping wait until tomorrow?',
        answer:
          "Mild limping that improves with rest is usually safe to monitor overnight. Severe limping, refusal to bear weight, or visible injury warrant same-day care — don't wait.",
        placeholder: true,
      },
      {
        question: 'What will the vet actually do?',
        answer:
          'The vet will examine the leg, check range of motion, and may recommend X-rays. Treatment depends on the cause — rest and medication for sprains, sometimes surgery for fractures or ligament tears.',
        placeholder: true,
      },
    ],
    relatedResources: [
      {
        kind: 'find-care',
        title: 'Find care',
        description: 'Locate an orthopaedic specialist near you',
        href: '/find-care',
        placeholder: true,
      },
      {
        kind: 'related-guide',
        title: 'Related guide',
        description: 'What to expect after orthopaedic surgery',
        href: '#',
        placeholder: true,
      },
      {
        kind: 'related-guide',
        title: 'Related guide',
        description: 'My dog is limping — what do I do?',
        href: '#',
        placeholder: true,
      },
    ],
  },

  // ─── How It Works pages ───────────────────────────────────────────────────

  {
    slug: 'what-is-mars-veterinary-health',
    phase: 'all',
    careType: 'getting-started',
    title: 'What Is the Mars Veterinary Health Network?',
    accentWordIndex: 3,
    heroAccent: 'mint',
    subtitle:
      'Banfield, BluePearl, and VCA form the Mars Veterinary Health network — over 2,000 hospitals and 8,300+ veterinarians united by a single purpose: A Better World For Pets.',
    readMinutes: 6,
    sourceUrl: 'https://mypetfam.vercel.app/how-it-works/what-is-mars-veterinary-health',
    sourcePublication: 'Mars Veterinary Health',
    mainTakeaways: [
      'Mars Veterinary Health includes Banfield, BluePearl, and VCA — more than 2,000 hospitals and 8,300+ veterinarians across 21+ specialty areas.',
      'All three brands are part of Mars Petcare, a family-owned company with over 90 years of expertise in pet nutrition, care, and science.',
      "Connected digital records and seamless referrals mean your pet's care follows them, whether they need a wellness visit, a specialist, or 24/7 emergency care.",
      'A Better World For Pets means investing in the people, the science, and the access that make great veterinary care possible.',
    ],
    body: [
      { type: 'h2', text: 'What it is', id: 'what-it-is' },
      {
        type: 'paragraph',
        html: 'Mars Veterinary Health, or MVH for short, is a connected network of veterinary brands working together so your pet has access to the right care, in the right place, at every age and stage of life. In the United States, the network includes Banfield Pet Hospital for preventive and primary care, BluePearl Pet Hospital for specialty and 24/7 emergency care, and VCA Animal Hospitals for primary, urgent, specialty, and emergency care. Together, these three brands operate more than 2,000 hospitals nationwide and employ more than 8,300 veterinarians across 21+ specialty areas. They are united by a single Purpose: A Better World For Pets.',
      },
      { type: 'h2', text: 'Backed by 90 years of caring for pets', id: 'backed-by-90-years' },
      {
        type: 'paragraph',
        html: 'Banfield, BluePearl, and VCA are all part of Mars Petcare, the pet-focused business of Mars, Incorporated. Mars is a privately held, family-owned company headquartered in McLean, Virginia, that has been providing pet nutrition, veterinary care, and science and diagnostic services for pets for over 90 years. You may know Mars from pet food brands like ROYAL CANIN®, PEDIGREE®, IAMS™, WHISKAS®, SHEBA®, and CESAR®, which are also part of Mars Petcare.',
      },
      {
        type: 'paragraph',
        html: "What Mars brings to our veterinary network is the same love, care and attention as any neighborhood vet — plus the resources, science, and long-term commitment that smaller practices often can't access on their own. The WALTHAM Petcare Science Institute, with more than 60 years of pet-health research behind it, partners with our hospitals on clinical studies and evidence-based guidance. Through ongoing research partnerships with institutions like Johns Hopkins University, and insights drawn from the more than 3 million pets seen across our network each year, the team caring for your pet has access to the latest science as it emerges.",
      },
      { type: 'h2', text: "Connected care built for your pet's whole life", id: 'connected-care' },
      {
        type: 'paragraph',
        html: "Pets need different things at different times. A puppy needs first vaccines and wellness checks. A senior dog needs more careful monitoring. An emergency needs an ER team that's ready 24/7. A complex diagnosis may need a specialist. Inside our network, all of that is available under brands you can trust, working together so your pet's care moves with them.",
      },
      {
        type: 'paragraph',
        html: "The network is being built so that giving your pet the love, health, and happiness they deserve is easier, and more cost-effective. That includes same-day appointments, extended hours, tele-triage support, and a growing set of digital tools for managing your pet's care online. It also includes connected digital records designed to follow your pet across the network, so referrals to a specialist or a visit to a 24/7 ER don't mean starting over.",
      },
      { type: 'h2', text: 'The network, by the numbers', id: 'by-the-numbers' },
      {
        type: 'paragraph',
        html: 'More than 8,300 veterinarians. More than 2,000 locations nationwide. Over 21 specialty areas, from oncology to dermatology. More than 3 million pets seen each year across the network. More than 55,000 associates in the U.S. caring for your pet and their family. Mars Veterinary Health North America has invested $500 million in higher wages, benefits, education, and career development for veterinary teams. And the Banfield Foundation, BluePearl Cares, and VCA Charities have granted more than $31.5 million to expand access to veterinary care for the families and pets who need it most.',
      },
      { type: 'h2', text: 'A Better World For Pets', id: 'better-world-for-pets' },
      {
        type: 'paragraph',
        html: 'Across every brand in our network, the Purpose is the same: A Better World For Pets. In practice, that shows up in three ways. We invest in the people who care for your pet, with higher wages, better benefits, and ongoing education for veterinary teams. We invest in the science that drives better outcomes, through clinical research and partnerships with leading institutions. And we invest in expanding access to care for the families and pets who need it most, through the work of our three charitable arms: the Banfield Foundation, BluePearl Cares, and VCA Charities.',
      },
      {
        type: 'paragraph',
        html: "What that means for you is straightforward. The team caring for your pet is part of a network that's putting real resources behind making veterinary care better, today and for the long term.",
      },
    ],
  },

  {
    slug: 'how-referrals-work',
    phase: 'all',
    careType: 'specialized',
    title: 'How Referrals Work',
    accentWordIndex: 1,
    heroAccent: 'pink',
    subtitle:
      'When your pet needs more than a checkup, a referral is how a primary-care vet hands them off to a specialist or emergency team. Inside our network, that handoff is designed to be seamless.',
    readMinutes: 4,
    sourceUrl: 'https://mypetfam.vercel.app/how-it-works/how-referrals-work',
    sourcePublication: 'Mars Veterinary Health',
    mainTakeaways: [
      'A referral comes into play when your pet needs specialty care, advanced diagnostics, or 24/7 emergency and critical care.',
      "Shared digital records help the receiving team prepare before you arrive — no repeating yourself, no starting from scratch.",
      'Care coordinators at specialty and emergency hospitals can help you book, prepare, and know what to expect.',
      'After the visit, the specialist sends a written summary back to your primary-care vet to keep everyone on the same page.',
    ],
    body: [
      { type: 'h2', text: 'When a referral comes into play', id: 'when-a-referral' },
      {
        type: 'paragraph',
        html: "Most of your pet's care can happen at one primary-care hospital. A referral comes into play when your pet needs something more advanced. The most common reasons are specialty care like oncology, cardiology, neurology, or complex surgery; advanced diagnostics like MRI, CT, or ultrasound; or 24/7 emergency and critical care. Sometimes it's a single consultation with a specialist. Sometimes it's ongoing treatment over weeks or months. Either way, your primary-care team stays involved, and the goal is the same: get your pet the right care, fast.",
      },
      { type: 'h2', text: 'A smoother path, by design', id: 'a-smoother-path' },
      {
        type: 'paragraph',
        html: "Inside the Mars Veterinary Health network, referrals are designed to remove the friction that usually comes with being handed off to a new team. Shared digital records mean the specialty or emergency team can review your pet's history before you walk in, so you don't have to repeat yourself. Seamless digital referrals between providers help the handoff happen quickly, especially in time-sensitive situations. Care coordinators at our specialty and emergency hospitals can help you book the appointment, prepare for the visit, and answer questions about what to expect. After the visit, the specialist sends a written summary back to your primary-care vet, so your everyday team stays fully up to speed for any follow-up.",
      },
      { type: 'h2', text: 'A few things you can do', id: 'a-few-things' },
      {
        type: 'paragraph',
        html: "A few small things on your end help every referral go smoothly. Bring a list of your pet's current medications, including doses. Write down any recent symptoms or changes you've noticed, since the specialist will want to hear them in your own words. If your pet sees more than one practice, mention that, so any additional records can be requested. And if you have questions about cost, timing, or what to expect, your primary-care team is usually the best first call. The specialty hospital's care coordinators are a great second.",
      },
    ],
  },

  {
    slug: 'what-to-expect-as-a-pet-parent',
    phase: 'all',
    careType: 'getting-started',
    title: 'What to Expect as a Pet Parent',
    accentWordIndex: 2,
    heroAccent: 'lavender',
    subtitle:
      "The best veterinary care happens when you and your veterinary team work together. Here's what you can expect from any hospital in our network — on care, on cost, and on communication.",
    readMinutes: 4,
    sourceUrl: 'https://mypetfam.vercel.app/how-it-works/what-to-expect',
    sourcePublication: 'Mars Veterinary Health',
    mainTakeaways: [
      'Every hospital in our network is committed to treating you and your pet with respect, clear information, and real follow-through.',
      'Clear estimates before treatment, flexible payment options, and wellness plans make cost feel more predictable.',
      "Banfield's Optimum Wellness Plans bundle routine preventive care into a predictable monthly payment with unlimited office visits.",
      'A little preparation — a medication list, a note on recent symptoms — helps every visit go smoother.',
    ],
    body: [
      { type: 'h2', text: "What we'll bring to every visit", id: 'what-well-bring' },
      {
        type: 'paragraph',
        html: "When you walk into any hospital in our network, here's what you can count on. A team that treats you and your pet with respect and compassion. Clear, honest information about your pet's health and the options in front of you. Time to ask questions, and answers in plain language. A safe and inclusive environment for every family. And follow-through: clear next steps, timely communication, and access to your pet's records when you ask for them. The vets and care teams at our hospitals are here because they love pets. That should be obvious from the moment you walk in.",
      },
      { type: 'h2', text: 'Predictable, transparent pricing', id: 'predictable-pricing' },
      {
        type: 'paragraph',
        html: "We know veterinary care can feel financially stressful, especially when costs come as a surprise. We're working to make the pricing experience in our network feel predictable and within your control.",
      },
      {
        type: 'paragraph',
        html: "That starts with clear estimates before treatment, so you know what you're agreeing to and there are no surprises at checkout. It includes flexible payment options at most locations, so you can spread costs in a way that fits your budget. And it includes options like Banfield's Optimum Wellness Plans, which bundle routine preventive care into a single predictable monthly payment with unlimited office visits and 24/7 access to a veterinary professional through Pet Chat. If cost is a concern for any visit, your care team would much rather you ask about it openly than worry quietly.",
      },
      { type: 'h2', text: 'A few practical tips', id: 'practical-tips' },
      {
        type: 'paragraph',
        html: "A little preparation goes a long way. Before a visit, jot down any symptoms, behavior changes, or questions you want to discuss. Bring a current list of your pet's medications, including doses. If your pet sees more than one practice, mention that, so records can be requested. Keep your own copy of important records — a folder on your phone is plenty — especially after major visits or when switching hospitals. And if you ever leave a visit unsure about a recommendation or a next step, call back. Your care team would much rather answer a follow-up question than have you guess.",
      },
    ],
  },

  {
    slug: 'how-care-is-connected',
    phase: 'all',
    careType: 'ongoing',
    title: 'How Care Is Connected',
    accentWordIndex: 3,
    heroAccent: 'mint',
    subtitle:
      "Connected care is what happens when your pet's brands, teams, records, and tools all work together instead of in isolation — easier access, coordinated expertise, and pricing you can plan around.",
    readMinutes: 7,
    sourceUrl: 'https://mypetfam.vercel.app/how-it-works/how-care-is-connected',
    sourcePublication: 'Mars Veterinary Health',
    mainTakeaways: [
      'Connected care shows up in three ways: easier everyday access, specialist expertise when you need it, and pricing that feels predictable.',
      "Same-day appointments, extended hours, and tele-triage support are part of a network built for real life, not a 9-to-5 schedule.",
      'More than 8,300 veterinarians across 21+ specialty areas are available within the same family of brands you already know.',
      "Shared digital records are designed to follow your pet across the network, so you're never starting from scratch.",
    ],
    body: [
      { type: 'h2', text: 'What connected care means for you', id: 'what-it-means' },
      {
        type: 'paragraph',
        html: "Connected care is what happens when your pet's brands, teams, records, and tools all work together instead of in isolation. Inside our network, that shows up in three ways: in the everyday experience of caring for your pet, in the medical excellence available when you need it, and in clear, predictable pricing you can plan around. None of these on their own is revolutionary. Together, they add up to a better experience for the people and pets in our care.",
      },
      { type: 'h2', text: 'Easier access. Less friction. More time with your pet.', id: 'easier-access' },
      {
        type: 'paragraph',
        html: "The biggest difference our network can make is in the things you do most often. Booking an appointment. Asking a quick question. Getting a follow-up. We're building toward an everyday experience that's designed for real life, not a 9-to-5 schedule.",
      },
      {
        type: 'paragraph',
        html: "That includes same-day and next-day appointments at a growing number of locations, extended hours that work around your day, and tele-triage support for moments when you're not sure if your pet needs to be seen. It includes online tools for booking visits, refilling prescriptions, and messaging your care team. With more than 2,000 network hospitals in neighborhoods across the U.S., there's likely one nearby — whether you're at home, at work, or traveling. And as the connected care experience expands, you'll be able to move between hospitals in our network with shared digital records designed to follow your pet, so the team you walk in to already has the picture of who your pet is and what they need.",
      },
      { type: 'h2', text: 'Expertise you can reach when your pet needs more', id: 'expertise' },
      {
        type: 'paragraph',
        html: "Most days, your pet's care can happen at one local hospital. But pets sometimes need things a primary-care team isn't set up to provide: an oncologist for a cancer diagnosis, a cardiologist for a heart condition, a 24/7 ER team after hours, or advanced imaging like MRI or CT.",
      },
      {
        type: 'paragraph',
        html: "Our network includes more than 8,300 veterinarians across 21+ specialty areas. That means a wide range of advanced care is available within the same family of brands you already know. When your primary-care vet refers your pet to a specialist or an emergency team in our network, the handoff is designed to be smooth: shared digital records help the receiving team prepare ahead of your visit, and the specialist communicates back to your primary-care vet to keep everyone on the same page. You're never alone in the harder moments, and you're not starting from scratch.",
      },
      {
        type: 'paragraph',
        html: 'Our hospitals also benefit from network-wide investments in research and innovation, including clinical studies that have led to advances in earlier cancer and kidney disease detection, partnerships with the WALTHAM Petcare Science Institute and Johns Hopkins University, and insights drawn from the more than 3 million pets we see each year. The team treating your pet has access to the latest evidence as it emerges.',
      },
      { type: 'h2', text: 'Care you can plan around', id: 'plan-around' },
      {
        type: 'paragraph',
        html: "Veterinary care can feel financially stressful, especially when costs come as a surprise. We're working to make pricing in our network feel predictable, transparent, and within your control.",
      },
      {
        type: 'paragraph',
        html: "That means clearer estimates before treatment, so you know what you're agreeing to. It means flexible payment options at most locations, so you can spread costs in a way that works for your budget. It means wellness plans like Banfield's Optimum Wellness Plans, which bundle routine preventive services into a single predictable monthly payment, with unlimited office visits and 24/7 access to a veterinary professional through Pet Chat. And it means honest conversations between you and your vet about what your pet needs, what it costs, and what options are available, so the decisions you make for your pet feel informed, not pressured.",
      },
      { type: 'h2', text: 'What it feels like', id: 'what-it-feels-like' },
      {
        type: 'paragraph',
        html: "Most days, you won't think about the network at all. You'll go to your local Banfield for a wellness visit, schedule a checkup at your nearest VCA, or drop off a prescription refill. The team will feel like that hospital's team — because it is.",
      },
      {
        type: 'paragraph',
        html: "Where the network shows up is in the moments that matter most. When your dog has a bad night and you need an emergency vet at 2 a.m., your nearest BluePearl is open 24/7 and ready. When a wellness exam turns up something that needs a specialist, your primary-care vet can refer you within the network so you're not searching strangers under stress. When you move to a new city, there's likely a hospital from one of our brands waiting, and your pet's care can pick up where it left off.",
      },
      {
        type: 'paragraph',
        html: "That's what connected care is for. Not for the ordinary days. For the days that aren't ordinary.",
      },
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}

export function getAllArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug)
}

export function getArticlesByPhase(phase: ArticlePhase): Article[] {
  return ARTICLES.filter((a) => a.phase === phase)
}

export function getArticlesByCareType(careType: CareTypeId): Article[] {
  return ARTICLES.filter((a) => a.careType === careType)
}
