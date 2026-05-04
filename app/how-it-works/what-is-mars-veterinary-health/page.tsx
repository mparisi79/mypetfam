import type { Metadata } from 'next'
import { getArticleBySlug } from '@/lib/articles'
import ArticleHero from '@/components/article/ArticleHero'
import ArticleSidebar from '@/components/article/ArticleSidebar'
import MainTakeaways from '@/components/article/MainTakeaways'
import ArticleBody from '@/components/article/ArticleBody'
import FAQAccordion from '@/components/article/FAQAccordion'
import RelatedResources from '@/components/article/RelatedResources'

const SLUG = 'what-is-mars-veterinary-health'

export function generateMetadata(): Metadata {
  const article = getArticleBySlug(SLUG)
  if (!article) return { title: 'Article not found — MyPetfam' }
  return { title: `${article.title} — MyPetfam`, description: article.subtitle }
}

export default function WhatIsMVHPage() {
  const article = getArticleBySlug(SLUG)!

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
        <div className="max-w-[904px] mx-auto">
          <ArticleBody blocks={article.body} theme="cream" />
        </div>
      </div>

      {article.faqs && (
        <section className="bg-paper-1 px-6 md:px-16 py-16">
          <div className="max-w-[1376px] mx-auto px-2 md:px-8">
            <h2 className="font-display font-extrabold text-ink text-[36px] md:text-[42px] lg:text-[48px] leading-none mb-10">
              Got questions?
            </h2>
            <FAQAccordion faqs={article.faqs} />
          </div>
        </section>
      )}

      {article.relatedResources && (
        <section className="bg-paper-1 px-6 md:px-16 pt-12 pb-20">
          <div className="max-w-[1376px] mx-auto">
            <RelatedResources resources={article.relatedResources} />
          </div>
        </section>
      )}
    </article>
  )
}
