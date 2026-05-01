import type { ArticleBlock } from '@/lib/articles'

type PullQuoteBlock = Extract<ArticleBlock, { type: 'pullQuote' }>

export default function PullQuote({ block }: { block: PullQuoteBlock }) {
  const initials = block.attribution
    .split(',')[0]
    .replace(/^Dr\.\s*/i, '')
    .split(' ')
    .map((s) => s[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <figure className="py-8 flex flex-col md:flex-row items-start gap-6 md:gap-10">
      {block.avatarSrc ? (
        <img
          src={block.avatarSrc}
          alt=""
          className="w-[130px] h-[130px] rounded-full object-cover flex-shrink-0"
        />
      ) : (
        <div
          aria-hidden="true"
          className="w-[130px] h-[130px] rounded-full bg-accent-mint flex-shrink-0 flex items-center justify-center"
        >
          <span className="font-display font-extrabold text-ink text-[44px] leading-none">
            {initials}
          </span>
        </div>
      )}
      <div className="flex flex-col gap-3 flex-1">
        <blockquote className="font-display font-bold text-ink text-[24px] md:text-[28px] lg:text-[32px] leading-[1.1]">
          &ldquo;{block.quote}&rdquo;
        </blockquote>
        <figcaption className="font-body font-semibold text-ink text-[16px] leading-[1.4]">
          {block.attribution}
        </figcaption>
      </div>
    </figure>
  )
}
