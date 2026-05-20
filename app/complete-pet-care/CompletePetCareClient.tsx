'use client'

import { useState } from 'react'
import Link from 'next/link'

type Species = 'dog' | 'cat'
type StageId =
  | 'getting-started'
  | 'healthy'
  | 'ongoing'
  | 'emergency'
  | 'specialized'
  | 'end-of-life'

type Article = {
  title: string
  source?: string
  url?: string
  species: Species
  stage: StageId
}

type Stage = {
  id: StageId
  emoji: string
  color: string
  colorLight: string
  title: string
  subtitle: string
  body: string
}

const CARE_STAGES: readonly Stage[] = [
  {
    id: 'getting-started',
    emoji: '🐣',
    color: 'var(--teal)',
    colorLight: 'var(--teal-light)',
    title: 'Getting Started',
    subtitle: 'New pet care & first visits',
    body:
      "Welcoming a new pet is one of life's great joys, and getting the first vet visit right sets the foundation for a lifetime of health. We help you establish care, understand your pet's baseline, and build a relationship with a trusted vet team.",
  },
  {
    id: 'healthy',
    emoji: '💉',
    color: '#5B3FA0',
    colorLight: '#F0EEFF',
    title: 'Staying Healthy',
    subtitle: 'Preventive care & wellness',
    body:
      "Prevention is the most powerful tool in veterinary medicine. Regular checkups catch problems early, keep vaccines up to date, and give your vet the ongoing visibility they need to support your pet through every life stage.",
  },
  {
    id: 'ongoing',
    emoji: '📋',
    color: 'var(--navy)',
    colorLight: 'var(--teal-light)',
    title: 'Ongoing Care Needs',
    subtitle: 'Primary & chronic care',
    body:
      "Pets with ongoing health needs deserve a care team that knows their history. From managing weight to navigating the changes that come with age, our connected network is built to meet you and your pet where you are.",
  },
  {
    id: 'emergency',
    emoji: '🚨',
    color: 'var(--coral)',
    colorLight: 'var(--coral-light)',
    title: 'Emergency Care',
    subtitle: "24/7 when it can't wait",
    body:
      "When something goes wrong, you need help right away. BluePearl's 24/7 emergency hospitals are part of the same network as your primary-care vet, so the team can move fast on what your pet needs.",
  },
  {
    id: 'specialized',
    emoji: '⭐',
    color: '#5B3FA0',
    colorLight: '#F0EEFF',
    title: 'Specialized Care',
    subtitle: 'Advanced expertise for complex needs',
    body:
      "Some conditions need the expertise of a veterinary specialist, like a cardiologist, oncologist, or neurologist. Our referral network connects you to the right expert, with your primary-care vet staying involved the whole way.",
  },
  {
    id: 'end-of-life',
    emoji: '🕊️',
    color: 'var(--navy)',
    colorLight: 'var(--teal-light)',
    title: 'End of Life Care',
    subtitle: 'Compassionate support when it matters most',
    body:
      "When a pet is nearing the end of their life, compassion and continuity of care are more important than ever. Our hospice and palliative services focus on quality of life and dignity, in-hospital and at home.",
  },
] as const

const ARTICLES: readonly Article[] = [
  // Getting Started (Puppy)
  {
    title: 'Puppy Nutrition 101: What Should You Feed a Puppy?',
    species: 'dog',
    stage: 'getting-started',
  },
  {
    title: 'What Is The Best Puppy Food For Your Puppy?',
    source: 'IAMS',
    species: 'dog',
    stage: 'getting-started',
  },
  {
    title: "Researchers set safe maximum levels of vitamin A in puppies' diet",
    source: 'WALTHAM',
    species: 'dog',
    stage: 'getting-started',
  },

  // Staying Healthy (All ages + Toxic Foods)
  {
    title: 'What Seasonings Can Dogs Have? Safe and Unsafe Spices',
    source: 'Kinship',
    species: 'dog',
    stage: 'healthy',
  },
  {
    title: "8 Foods You've Been Told Your Dog Can't Eat But Actually Can",
    source: 'Kinship',
    species: 'dog',
    stage: 'healthy',
  },
  {
    title: 'Best Human Foods for Dogs: Superfoods that Promote Health',
    source: 'Kinship',
    species: 'dog',
    stage: 'healthy',
  },
  {
    title: 'Is a Grain-Free Diet Good For Dogs?',
    source: 'Kinship',
    species: 'dog',
    stage: 'healthy',
  },
  {
    title: 'Nutrition: General Feeding Guidelines for Dogs',
    source: 'VCA Animal Hospitals',
    species: 'dog',
    stage: 'healthy',
  },
  {
    title: "10 Toxic Foods You Shouldn't Give Your Dog",
    source: 'Royal Canin',
    url: 'https://www.royalcanin.com/us/dogs/health-and-wellbeing/10-toxic-foods-you-shouldnt-give-your-dog',
    species: 'dog',
    stage: 'healthy',
  },
  {
    title: 'What Can Cats Eat Besides Cat Food?',
    source: 'Kinship',
    species: 'cat',
    stage: 'healthy',
  },

  // Ongoing Care (Adult + Senior)
  {
    title: 'Is your dog constipated?',
    source: 'Royal Canin',
    species: 'dog',
    stage: 'ongoing',
  },
  {
    title: "Your dog's diet and their digestive health",
    source: 'Royal Canin',
    species: 'dog',
    stage: 'ongoing',
  },
  {
    title: "How your dog's diet affects their skin",
    source: 'Royal Canin',
    species: 'dog',
    stage: 'ongoing',
  },
  {
    title: "How to maintain your dog's healthy weight",
    species: 'dog',
    stage: 'ongoing',
  },
  {
    title: "How your dog's nutrition needs change with age",
    source: 'Royal Canin',
    species: 'dog',
    stage: 'ongoing',
  },
  {
    title: 'How should I care for my aging dog?',
    source: 'Royal Canin',
    species: 'dog',
    stage: 'ongoing',
  },
  {
    title: 'Signs your dog is getting old',
    source: 'Royal Canin',
    url: 'https://www.royalcanin.com/us/dogs/health-and-wellbeing/signs-your-dog-is-getting-old',
    species: 'dog',
    stage: 'ongoing',
  },
  {
    title: 'When Should You Switch Your Senior Dog to Soft Food?',
    species: 'dog',
    stage: 'ongoing',
  },
  {
    title: 'Nutrition and Diet Needs of Senior Dogs',
    source: 'IAMS',
    species: 'dog',
    stage: 'ongoing',
  },

  // End of Life
  {
    title: "Your dog's end of life care",
    source: 'Royal Canin',
    species: 'dog',
    stage: 'end-of-life',
  },
]

export default function CompletePetCareClient() {
  const [species, setSpecies] = useState<Species>('dog')

  return (
    <>
      {/* Hero — no timeline graphic, species-agnostic copy */}
      <section
        style={{ background: 'var(--navy)' }}
        className="text-center px-8 py-24 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% -20%, rgba(0,163,184,0.18) 0%, transparent 65%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span
            className="text-xs font-semibold tracking-[0.1em] uppercase mb-4 block"
            style={{ color: 'var(--gold)' }}
          >
            Complete Pet Care
          </span>
          <h1 className="font-serif text-[clamp(36px,5vw,56px)] text-white leading-[1.1] mb-5">
            A lifetime of care.
            <br />
            One trusted network.
          </h1>
          <p
            className="text-lg font-light leading-[1.7]"
            style={{
              color: 'rgba(255,255,255,0.65)',
              maxWidth: 580,
              margin: '0 auto',
            }}
          >
            From your first exam to compassionate end-of-life support, we're
            built for every stage of your pet's life. Browse articles by topic,
            for the pet you love.
          </p>
        </div>
      </section>

      {/* Sticky species toggle — persists through deep-links */}
      <div
        className="sticky z-30 backdrop-blur-md border-b"
        style={{
          top: 68,
          background: 'rgba(255,255,255,0.92)',
          borderColor: 'var(--gray-200)',
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between gap-6 flex-wrap">
          <span
            className="text-xs font-semibold uppercase tracking-[0.08em]"
            style={{ color: 'var(--gray-500)' }}
          >
            Showing content for
          </span>
          <div
            className="inline-flex rounded-full p-1 gap-1"
            style={{ background: 'var(--gray-100)' }}
            role="tablist"
            aria-label="Filter articles by pet"
          >
            <button
              onClick={() => setSpecies('dog')}
              aria-selected={species === 'dog'}
              role="tab"
              className="px-6 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background:
                  species === 'dog' ? 'var(--navy)' : 'transparent',
                color: species === 'dog' ? 'white' : 'var(--gray-700)',
              }}
            >
              🐕 Dogs
            </button>
            <button
              onClick={() => setSpecies('cat')}
              aria-selected={species === 'cat'}
              role="tab"
              className="px-6 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background:
                  species === 'cat' ? 'var(--navy)' : 'transparent',
                color: species === 'cat' ? 'white' : 'var(--gray-700)',
              }}
            >
              🐈 Cats
            </button>
          </div>
        </div>
      </div>

      {/* Stage sections — restacked: intro on top, articles below */}
      {CARE_STAGES.map((stage, i) => {
        const stageArticles = ARTICLES.filter(
          (a) => a.stage === stage.id && a.species === species
        )

        return (
          <section
            key={stage.id}
            id={stage.id}
            className="py-20 scroll-mt-[140px]"
            style={{ background: i % 2 === 0 ? 'white' : 'var(--cream)' }}
          >
            <div className="max-w-7xl mx-auto px-8">
              {/* Stage header */}
              <div className="flex items-start gap-6 mb-12 max-w-3xl">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: stage.colorLight }}
                >
                  {stage.emoji}
                </div>
                <div>
                  <h2
                    className="font-serif text-[clamp(28px,3vw,40px)] mb-2 leading-[1.2]"
                    style={{ color: 'var(--navy)' }}
                  >
                    {stage.title}
                  </h2>
                  <p
                    className="text-base font-medium mb-4"
                    style={{ color: stage.color }}
                  >
                    {stage.subtitle}
                  </p>
                  <p
                    className="text-[16px] leading-[1.7]"
                    style={{ color: 'var(--gray-600)' }}
                  >
                    {stage.body}
                  </p>
                </div>
              </div>

              {/* Articles grid OR empty state */}
              {stageArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {stageArticles.map((article) => (
                    <ArticleCard
                      key={article.title}
                      article={article}
                      stage={stage}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState stage={stage} species={species} />
              )}
            </div>
          </section>
        )
      })}
    </>
  )
}

function ArticleCard({
  article,
  stage,
}: {
  article: Article
  stage: Stage
}) {
  const href = article.url ?? '#'
  const isExternal = !!article.url
  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group block rounded-2xl p-6 bg-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
      style={{ border: '1px solid var(--gray-200)' }}
    >
      <div
        className="text-[11px] font-semibold tracking-[0.08em] uppercase mb-3"
        style={{ color: stage.color }}
      >
        {article.source ?? 'Article'}
      </div>
      <h3
        className="font-serif text-[20px] leading-[1.3] mb-5"
        style={{ color: 'var(--gray-800)' }}
      >
        {article.title}
      </h3>
      <div
        className="text-sm font-semibold inline-flex items-center gap-1.5"
        style={{ color: stage.color }}
      >
        Read article
        <span className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </Link>
  )
}

function EmptyState({
  stage,
  species,
}: {
  stage: Stage
  species: Species
}) {
  return (
    <div
      className="rounded-2xl py-16 px-8 text-center"
      style={{
        background: stage.colorLight,
        border: `1px dashed ${stage.color}33`,
      }}
    >
      <div className="text-5xl mb-4 opacity-50">{stage.emoji}</div>
      <p
        className="text-sm font-semibold uppercase tracking-[0.06em] mb-2"
        style={{ color: stage.color }}
      >
        Coming soon
      </p>
      <p
        className="text-[15px] max-w-md mx-auto"
        style={{ color: 'var(--gray-600)' }}
      >
        We're building out {species === 'dog' ? 'dog' : 'cat'} content for{' '}
        {stage.title.toLowerCase()}. Check back soon.
      </p>
    </div>
  )
}
