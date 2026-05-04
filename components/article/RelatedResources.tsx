import Link from 'next/link'
import type { Article } from '@/lib/articles'

type Resource = NonNullable<Article['relatedResources']>[number]

export default function RelatedResources({ resources }: { resources: ReadonlyArray<Resource> }) {
  return (
    <div className="bg-paper-2 rounded-[40px] px-6 md:px-12 lg:px-16 py-12 lg:py-16">
      <h2 className="font-display font-extrabold text-ink text-[36px] md:text-[42px] lg:text-[48px] leading-none text-center mb-10 lg:mb-12">
        More resources for you
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {resources.map((r, i) => (
          <Link
            key={i}
            href={r.href}
            className="bg-paper-3 rounded-[27px] p-6 lg:p-8 flex flex-col gap-3 group transition-shadow hover:shadow-lg"
          >
            <h3 className="font-display font-bold text-ink text-[26px] md:text-[30px] lg:text-[32px] leading-[1.2]">
              {r.title}
            </h3>
            <div className="flex items-end justify-between gap-4 mt-auto pt-6">
              <p className="font-body font-semibold text-ink/80 text-[18px] lg:text-[20px] leading-[1.4]">
                {r.description}
              </p>
              <span
                aria-hidden="true"
                className="w-10 h-10 rounded-full bg-mars-blue flex items-center justify-center flex-shrink-0 group-hover:translate-x-1 transition-transform"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
