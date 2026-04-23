export type ServiceDetailItem = {
  label: string
  desc: string
}

export type ServiceTier = {
  id: string
  emoji: string
  title: string
  tagline: string
  color: string
  colorLight: string
  summary?: readonly string[]
  summaryLong?: string
  whatItIs: string
  whenToUseIntro?: string
  whenToUse?: readonly string[]
  includesIntro?: string
  includes?: readonly ServiceDetailItem[]
  note?: string
}

export type ServiceGroup = {
  id: string
  kicker: string
  heading: string
  sub: string
  tiers: readonly ServiceTier[]
}

export const SERVICE_GROUPS: readonly ServiceGroup[] = [
  {
    id: 'immediate',
    kicker: 'Immediate & unplanned',
    heading: 'Immediate & unplanned care.',
    sub: "For when something's wrong and can't wait.",
    tiers: [
      {
        id: 'urgent',
        emoji: '⏱️',
        title: 'Urgent',
        tagline: 'Same-day help for sudden issues.',
        color: 'var(--gold)',
        colorLight: 'var(--gold-light)',
        summary: ['Limping', 'Ear infections', 'Persistent vomiting'],
        whatItIs:
          "Urgent care is for health issues that need attention today but aren't immediately life-threatening. It's the middle ground between a routine visit and the emergency room — same-day help for problems that shouldn't wait.",
        whenToUseIntro:
          "Urgent care is the right fit when something's clearly off but your pet is stable. Common reasons to come in include:",
        whenToUse: [
          'Limping or sudden lameness',
          'Ear infections or eye irritation',
          'Persistent vomiting or diarrhea',
          'Minor cuts, skin rashes, or allergic reactions',
          'Loss of appetite or unusual lethargy',
        ],
        note: 'If your pet is having trouble breathing, is collapsed, has been poisoned, or is bleeding heavily, this is an emergency — head to the nearest emergency hospital instead.',
      },
      {
        id: 'emergency',
        emoji: '🚨',
        title: 'Emergency',
        tagline: 'Life-saving treatment when it counts.',
        color: 'var(--coral)',
        colorLight: 'var(--coral-light)',
        summary: ['Serious injuries', 'Breathing trouble', 'Unresponsiveness'],
        whatItIs:
          'Emergency care is 24/7 life-saving veterinary medicine for critical situations. A specialized team stabilizes your pet, runs urgent diagnostics, and performs surgery or intensive care when every minute counts.',
        whenToUseIntro: 'Go directly to an emergency hospital for:',
        whenToUse: [
          'Serious injuries — hit by car, falls, fights',
          'Trouble breathing or collapse',
          'Seizures or loss of consciousness',
          'Suspected poisoning or toxic ingestion',
          'Severe bleeding or trauma',
          'Bloat, especially in large-breed dogs — swollen abdomen and unproductive retching',
        ],
        note: "BluePearl operates emergency hospitals across the network. Because your pet's records are shared across the Mars Veterinary Health network, the emergency team already has their medical history before you arrive.",
      },
    ],
  },
  {
    id: 'everyday',
    kicker: 'Everyday & ongoing',
    heading: 'Everyday & ongoing care.',
    sub: 'For keeping pets healthy or managing regular health needs.',
    tiers: [
      {
        id: 'preventive',
        emoji: '💉',
        title: 'Preventive',
        tagline: 'Wellness visits to keep your pet thriving.',
        color: 'var(--teal-dark)',
        colorLight: 'var(--teal-light)',
        summary: ['Regular exams', 'Vaccinations', 'Health screenings', 'Virtual care'],
        whatItIs:
          "Preventive care keeps healthy pets healthy. Regular checkups catch problems early — when they're easier and cheaper to treat — and protect against the illnesses most likely to affect your pet's life stage and lifestyle.",
        whenToUseIntro:
          'Wellness visits are the foundation of good care. They typically include:',
        whenToUse: [
          'Nose-to-tail physical exams, usually annually — or twice a year for senior pets',
          'Core and lifestyle vaccinations kept up to date',
          'Parasite prevention — fleas, ticks, and heartworm',
          'Dental health checks and professional cleanings',
          'Weight, nutrition, and behavior guidance',
          'Baseline bloodwork and health screenings',
        ],
        note: "Many of our hospitals offer virtual visits for quick questions and minor concerns — useful when you're not sure if an in-person visit is needed.",
      },
      {
        id: 'primary',
        emoji: '🏥',
        title: 'Primary',
        tagline: 'Everyday medical care for your pet.',
        color: 'var(--navy)',
        colorLight: 'var(--teal-light)',
        summary: [
          'Diagnosis and treatment for common illnesses',
          'Minor surgery',
          'Chronic conditions',
        ],
        whatItIs:
          "Primary care is your pet's everyday medicine. It covers the ongoing needs of pets with common illnesses, minor injuries, and chronic conditions — the kind of care you'd expect from a family doctor.",
        whenToUseIntro: 'Primary vets handle the majority of day-to-day health needs:',
        whenToUse: [
          'Diagnosing new symptoms and common illnesses',
          'Treating infections, skin problems, and GI issues',
          'Managing chronic conditions like diabetes, arthritis, and thyroid disease',
          'Prescribing and refilling medications',
          'Minor surgery and routine procedures',
          'Coordinating referrals to specialists when needed',
        ],
        note: 'A primary vet who knows your pet over time is one of the most valuable pieces of their care. Building that relationship pays off when something changes.',
      },
    ],
  },
  {
    id: 'specialized',
    kicker: 'Specialized & advanced',
    heading: 'Specialized & advanced care.',
    sub: 'For complex, specific, or compassionate end-of-life situations.',
    tiers: [
      {
        id: 'specialty',
        emoji: '⭐',
        title: 'Specialty',
        tagline: 'Advanced expertise for complex needs.',
        color: '#5B3FA0',
        colorLight: '#F0EEFF',
        summary: ['Surgery', 'Oncology', 'Cardiology'],
        whatItIs:
          'Specialty care comes from veterinarians with years of additional training in a single discipline — similar to how a cardiologist in human medicine has trained beyond a general practitioner. Specialists see the rare, complex, and serious cases your primary vet refers to them.',
        includesIntro: 'The most common specialties include:',
        includes: [
          {
            label: 'Surgery',
            desc: 'Complex procedures beyond routine — orthopedic repair (like ACL injuries), soft tissue surgery, minimally invasive techniques, and reconstructive work.',
          },
          {
            label: 'Oncology',
            desc: 'Diagnosing and treating cancer in pets. Treatment plans may include chemotherapy, radiation, or surgery, with a strong focus on quality of life throughout.',
          },
          {
            label: 'Cardiology',
            desc: 'Heart and circulatory system conditions — murmurs, arrhythmias, congenital defects, and heart failure. Diagnosis typically involves echocardiograms and specialized imaging.',
          },
          {
            label: 'Neurology',
            desc: 'Problems affecting the brain, spinal cord, and nerves — seizures, unexplained weakness, spinal injuries, and neurological pain.',
          },
          {
            label: 'Dermatology',
            desc: "Chronic skin and ear conditions that haven't responded to routine treatment, including severe allergies and autoimmune skin diseases.",
          },
          {
            label: 'Internal medicine',
            desc: "Complex, systemic illnesses that don't have an obvious diagnosis — often the go-to specialty when a pet is sick in ways that cross multiple body systems.",
          },
        ],
        note: "You typically reach a specialist through a referral from your primary vet. Within our network, the specialist already has your pet's full medical history before you arrive — no repeating tests or re-explaining what's happened.",
      },
      {
        id: 'hospice',
        emoji: '🕊️',
        title: 'Hospice',
        tagline: "Comfort and compassion at life's end.",
        color: 'var(--sage)',
        colorLight: 'var(--sage-light)',
        summaryLong:
          'Gentle support, both in-hospital and in-home, focused on quality of life for pets with terminal or advanced illness.',
        whatItIs:
          'Hospice care shifts the goal from curing illness to supporting quality of life. For pets with terminal or advanced conditions, it focuses on comfort, dignity, and time together on the best possible terms.',
        whenToUseIntro: 'Hospice and palliative care may include:',
        whenToUse: [
          'Pain management and symptom relief',
          'Quality-of-life assessments to guide decisions',
          'In-home visits so pets can stay in familiar surroundings',
          'In-hospital support when conditions need closer monitoring',
          'Nutritional guidance and mobility support',
          'Compassionate, unhurried humane euthanasia when the time comes',
        ],
        note: 'Hospice is as much for families as it is for pets. Our teams support you through the decisions that come with this stage, at your pace.',
      },
    ],
  },
] as const

export function getServiceBySlug(
  slug: string,
): { group: ServiceGroup; tier: ServiceTier } | null {
  for (const group of SERVICE_GROUPS) {
    const tier = group.tiers.find((t) => t.id === slug)
    if (tier) return { group, tier }
  }
  return null
}

export const ALL_SERVICE_SLUGS: readonly string[] = SERVICE_GROUPS.flatMap((g) =>
  g.tiers.map((t) => t.id),
)
