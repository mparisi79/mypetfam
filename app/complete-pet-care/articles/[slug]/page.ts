import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  getArticleBySlug,
  getAllArticleSlugs,
  type ArticleBlock,
} from '@/lib/articles'

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const article = getArticleBySlug(params.slug)
  if (!article) return { title: 'Article not found — MyPetfam' }
  return {
    title: `${article.title} — MyPetfam`,
    description: article.subtitle,
  }
}

function renderBlock(block: ArticleBlock, i: number): React.ReactNode {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={i} id={block.id} style={{ marginTop: 32, fontSize: 24, fontWeight: 700 }}>
          {block.text}
        </h2>
      )
    case 'paragraph':
      return (
        <p
          key={i}
          style={{ margin: '12px 0', lineHeight: 1.6 }}
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      )
    case 'pullQuote':
      return (
        <blockquote
          key={i}
          style={{
            margin: '24px 0',
            padding: 16,
            borderLeft: '4px solid #ccc',
            background: '#f5f5f5',
          }}
        >
          <p>"{block.quote}"</p>
          <footer style={{ marginTop: 8, fontSize: 14, color: '#666' }}>
            — {block.attribution}
            {block.placeholder ? ' [PLACEHOLDER]' : ''}
          </footer>
        </blockquote>
      )
    case 'qualityOfCareCard':
      return (
        <div
          key={i}
          style={{
            margin: '24px 0',
            padding: 16,
            border: '1px dashed #999',
            background: '#fafafa',
          }}
        >
          <div style={{ fontSize: 12, color: '#888', textTransform: 'uppercase' }}>
            {block.eyebrow} (image side: {block.imageSide})
            {block.placeholder ? ' [PLACEHOLDER]' : ''}
          </div>
          <h3 style={{ margin: '8px 0', fontSize: 20 }}>{block.title}</h3>
          <p style={{ lineHeight: 1.6 }}>{block.body}</p>
        </div>
      )
    case 'darkSection':
      return (
        <div
          key={i}
          style={{
            margin: '24px 0',
            padding: 16,
            background: '#222',
            color: '#fafafa',
          }}
        >
          <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 8 }}>
            [DARK SECTION]
          </div>
          {block.blocks.map((b, j) => renderBlock(b, j))}
        </div>
      )
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  return (
    <article style={{ maxWidth: 760, margin: '0 auto', padding: '40px 24px' }}>
      <div style={{ fontSize: 12, color: '#888', marginBottom: 8 }}>
        STUB RENDERER — Phase B1 verification only. Visual components arrive in Phase B2.
      </div>
      <h1 style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.2 }}>
        {article.title}
      </h1>
      <p style={{ marginTop: 12, color: '#555' }}>{article.subtitle}</p>
      <p style={{ marginTop: 8, fontSize: 14, color: '#888' }}>
        {article.readMinutes} min read · Source: {article.sourcePublication} ·{' '}
        Phase: {article.phase} · Care type: {article.careType}
      </p>

      {article.mainTakeaways && (
        <section
          style={{
            marginTop: 24,
            padding: 16,
            border: '1px solid #ccc',
            background: '#fffbf4',
          }}
        >
          <h2 style={{ fontSize: 20, fontWeight: 700 }}>Main takeaways</h2>
          <ul style={{ marginTop: 8, paddingLeft: 20 }}>
            {article.mainTakeaways.map((t, i) => (
              <li key={i} style={{ marginBottom: 6 }}>{t}</li>
            ))}
          </ul>
        </section>
      )}

      <div style={{ marginTop: 32 }}>
        {article.body.map((b, i) => renderBlock(b, i))}
      </div>

      {article.faqs && (
        <section style={{ marginTop: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700 }}>Got questions?</h2>
          {article.faqs.map((f, i) => (
            <div key={i} style={{ marginTop: 12 }}>
              <strong>{f.question}</strong>
              {f.placeholder ? ' [PLACEHOLDER]' : ''}
              <p style={{ marginTop: 4, color: '#555' }}>{f.answer}</p>
            </div>
          ))}
        </section>
      )}

      {article.relatedResources && (
        <section style={{ marginTop: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700 }}>More resources for you</h2>
          {article.relatedResources.map((r, i) => (
            <div key={i} style={{ marginTop: 8 }}>
              <strong>{r.title}</strong>
              {r.placeholder ? ' [PLACEHOLDER]' : ''} — {r.description}{' '}
              <a href={r.href}>→</a>
            </div>
          ))}
        </section>
      )}
    </article>
  )
}
