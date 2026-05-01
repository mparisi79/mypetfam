import type { ArticleBlock } from '@/lib/articles'
import PullQuote from './PullQuote'
import QualityOfCareCard from './QualityOfCareCard'

type Theme = 'cream' | 'dark'

const THEME_CLASSES: Record<Theme, { heading: string; paragraph: string; link: string }> = {
  cream: {
    heading: 'text-ink',
    paragraph: 'text-ink',
    link: '[&_a]:text-link-teal [&_a]:underline [&_a]:font-medium',
  },
  dark: {
    heading: 'text-paper-1',
    paragraph: 'text-paper-1',
    link: '[&_a]:text-link-blue [&_a]:underline [&_a]:font-medium',
  },
}

export default function ArticleBody({
  blocks,
  theme = 'cream',
}: {
  blocks: ReadonlyArray<ArticleBlock>
  theme?: Theme
}) {
  const t = THEME_CLASSES[theme]

  return (
    <div className="flex flex-col gap-11">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={i}
                id={block.id}
                className={`font-display font-bold text-[26px] md:text-[30px] lg:text-[32px] leading-[1.2] scroll-mt-24 ${t.heading}`}
              >
                {block.text}
              </h2>
            )
          case 'paragraph':
            return (
              <p
                key={i}
                className={`font-body font-medium text-[18px] lg:text-[20px] leading-[1.4] ${t.paragraph} ${t.link}`}
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            )
          case 'pullQuote':
            return <PullQuote key={i} block={block} />
          case 'qualityOfCareCard':
            return <QualityOfCareCard key={i} block={block} />
          case 'darkSection':
            return (
              <div key={i} className="bg-ink rounded-[40px] px-6 md:px-12 lg:px-16 py-12 lg:py-16 -mx-6 md:-mx-12 lg:-mx-16">
                <ArticleBody blocks={block.blocks} theme="dark" />
              </div>
            )
        }
      })}
    </div>
  )
}
