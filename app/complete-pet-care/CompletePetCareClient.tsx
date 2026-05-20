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
    </a>
  )
}
