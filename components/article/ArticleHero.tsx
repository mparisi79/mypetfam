import type { Article } from '@/lib/articles'

const ACCENT_BG: Record<NonNullable<Article['heroAccent']>, string> = {
  pink: 'bg-accent-pink',
  mint: 'bg-accent-mint',
  lavender: 'bg-accent-lavender',
}

export default function ArticleHero({ article }: { article: Article }) {
  const words = article.title.split(' ')
  const accentIndex = article.accentWordIndex ?? -1
  const accentClass = article.heroAccent ? ACCENT_BG[article.heroAccent] : 'bg-accent-lavender'

  return (
    <section className="bg-paper-1 px-6 md:px-16 lg:px-[268px] pt-16 pb-16">
      <div className="max-w-[904px] mx-auto flex flex-col gap-8">
        <h1 className="font-display font-extrabold text-ink leading-[1.04] text-[44px] md:text-[60px] lg:text-[72px]">
          {words.map((word, i) => (
            <span key={i} className="relative inline-block mr-[0.25em] last:mr-0">
              {i === accentIndex && (
                <span
                  aria-hidden="true"
                  className={`absolute left-[-4px] right-[-4px] top-[18%] bottom-[8%] ${accentClass} rounded-[8px] -z-10`}
                />
              )}
              <span className="relative">{word}</span>
            </span>
          ))}
        </h1>
        <p className="font-body font-medium text-ink text-[18px] md:text-[22px] lg:text-[24px] leading-[1.33]">
          {article.subtitle}
        </p>
        <div className="flex items-center gap-3" aria-label="Share this article">
          {['Share', 'Copy link', 'Email'].map((label) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="w-14 h-14 rounded-full flex items-center justify-center hover:bg-paper-5/40 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D2F30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
