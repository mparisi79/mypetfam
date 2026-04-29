import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import {
  getArticleBySlug,
  getAllArticleSlugs,
  type ArticleBlock,
} from '@/lib/articles'
import ArticleHero from '@/components/article/ArticleHero'
import ArticleSidebar from '@/components/article/ArticleSidebar'
import MainTakeaways from '@/components/article/MainTakeaways'

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug)
  if (!article) return { title: 'Article not found — MyPetfam' }
  return { title: `${article.title} — MyPetfam`, description: article.subtitle }
}

function renderBlock(block: ArticleBlock, i: number): ReactNode {
  switch (block.type) {
    case 'h2':
      return (
        <h2
          key={i}
          id={block.id}
          className="font-display font-bold text-ink text-[26px] md:text-[30px] lg:text-[32px] leading-[1.2] scroll-mt-24"
        >
          {block.text}
        </h2>
      )
    case 'paragraph':
      return (
        <p
          key={i}
          className="font-body font-medium text-ink text-[18px] lg:text-[20px] leading-[1.4] [&_a]:text-link-teal [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      )
    case 'pullQuote':
      return (
        <blockquote key={i} className="my-8 p-4 border-l-4 border-paper-5 bg-paper-2 rounded-r-2xl">
          <p className="font-display font-bold text-ink text-[24px] leading-[1.1]">"{block.quote}"</p>
          <footer className="mt-2 font-body font-semibold text-ink text-[16px]">
            — {block.attribution}
            {block.placeholder ? <span className="text-taupe italic"> [placeholder]</span> : null}
          </footer>
        </blockquote>
      )
    case 'qualityOfCareCard':
      return (
        <div key={i} className="my-8 p-6 bg-paper-2 border border-dashed border-taupe/40 rounded-3xl">
          <div className="text-[12px] uppercase tracking-wide text-taupe">
            {block.eyebrow} (image: {block.imageSide})
            {block.placeholder ? ' [placeholder]' : ''}
          </div>
          <h3 className="mt-2 font-display font-extrabold text-ink text-[28px]">{block.title}</h3>
          <p className="mt-3 font-body text-ink text-[18px] leading-[1.4]">{block.body}</p>
        </div>
      )
    case 'darkSection':
      return (
        <div key={i} className="my-8 p-6 bg-ink text-paper-1 rounded-3xl">
          <div className="text-[12px] opacity-70 mb-2">[dark section]</div>
          {block.blocks.map((b, j) => renderBlock(b, j))}
        </div>
      )
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  return (
    <article className="bg-paper-1">
      <ArticleHero article={article} />

      <div className="bg-paper-1 px-6 md:px-16 lg:px-[268px] pb-12">
        <div className="max-w-[904px] mx-auto flex flex-col lg:flex-row gap-12">
          <ArticleSidebar article={article} />
          <div className="flex-1 min-w-0">
            {article.mainTakeaways && <MainTakeaways takeaways={article.mainTakeaways} />}
          </div>
        </div>
      </div>

      <div className="bg-paper-1 px-6 md:px-16 lg:px-[267px] py-12">
        <div className="max-w-[904px] mx-auto flex flex-col gap-8">
          {article.body.map((b, i) => renderBlock(b, i))}
        </div>
      </div>

      {article.faqs && (
        <section className="bg-paper-1 px-6 md:px-16 py-12">
          <div className="max-w-[1376px] mx-auto">
            <h2 className="font-display font-extrabold text-ink text-[40px] lg:text-[48px] leading-none mb-8">Got questions?</h2>
            <div className="flex flex-col gap-4">
              {article.faqs.map((f, i) => (
                <div key={i} className="bg-paper-4 border-[3px] border-ink/10 rounded-3xl px-6 py-4">
                  <strong className="font-body font-bold text-ink text-[20px]">{f.question}</strong>
                  {f.placeholder && <span className="text-taupe italic text-sm"> [placeholder]</span>}
                  <p className="mt-2 font-body text-ink/80">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {article.relatedResources && (
        <section className="bg-paper-1 px-6 md:px-16 pt-20 pb-12">
          <div className="max-w-[1376px] mx-auto bg-paper-2 rounded-[40px] p-12">
            <h2 className="font-display font-extrabold text-ink text-[40px] lg:text-[48px] leading-none text-center mb-10">More resources for you</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {article.relatedResources.map((r, i) => (
                <a key={i} href={r.href} className="bg-paper-3 rounded-3xl p-6 hover:shadow-md transition-shadow">
                  <div className="font-display font-bold text-ink text-[24px]">{r.title}</div>
                  <p className="mt-2 font-body font-semibold text-ink/80">{r.description}</p>
                  {r.placeholder && <span className="text-taupe italic text-sm">[placeholder]</span>}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
