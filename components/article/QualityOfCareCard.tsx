import type { ArticleBlock } from '@/lib/articles'

type CardBlock = Extract<ArticleBlock, { type: 'qualityOfCareCard' }>

const ACCENT_BG: Record<NonNullable<CardBlock['imageAccent']>, string> = {
  mint: 'bg-accent-mint',
  pink: 'bg-accent-pink',
  lavender: 'bg-accent-lavender',
}

export default function QualityOfCareCard({ block }: { block: CardBlock }) {
  const accent = ACCENT_BG[block.imageAccent] ?? 'bg-accent-mint'
  const isImageRight = block.imageSide === 'right'

  const imageBlock = (
    <div
      aria-hidden="true"
      className={`w-full md:w-[314px] h-[280px] md:h-[432px] rounded-[40px] flex-shrink-0 ${accent}`}
    />
  )

  const contentBlock = (
    <div className="flex flex-col gap-4 md:max-w-[550px]">
      <p className="font-body font-bold text-taupe text-[20px] leading-[1.4]">
        {block.eyebrow}
      </p>
      <h3 className="font-display font-extrabold text-ink text-[36px] md:text-[44px] lg:text-[48px] leading-[1.0] -mt-2">
        {block.title}
      </h3>
      <p className="font-body font-medium text-ink text-[18px] lg:text-[20px] leading-[1.4] mt-4">
        {block.body}
      </p>
    </div>
  )

  return (
    <div className="bg-paper-2 rounded-[40px] py-12 px-6 md:px-12 lg:px-16 -mx-6 md:-mx-12 lg:-mx-16">
      <div className={`flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-10 ${isImageRight ? 'md:flex-row-reverse' : ''}`}>
        {imageBlock}
        {contentBlock}
      </div>
    </div>
  )
}
