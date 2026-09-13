import { blogPosts } from '../blogPosts'

function formatDate(iso) {
  try {
    return new Date(iso + 'T00:00:00').toLocaleDateString('es-CL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return iso
  }
}

// Convierte **negrita** en <strong> dentro de un texto plano.
function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="text-slate-800 font-semibold">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

function Block({ block }) {
  switch (block.t) {
    case 'h2':
      return <h2 className="text-2xl font-extrabold text-slate-800 mt-10 mb-4">{block.text}</h2>
    case 'h3':
      return <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">{block.text}</h3>
    case 'ul':
      return (
        <ul className="list-disc pl-5 space-y-2 mb-5 text-slate-600 leading-relaxed">
          {block.items.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol className="list-decimal pl-5 space-y-2 mb-5 text-slate-600 leading-relaxed">
          {block.items.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ol>
      )
    case 'quote':
      return (
        <blockquote className="border-l-4 border-brand-300 bg-brand-50/60 rounded-r-xl px-5 py-4 my-6 text-slate-700 italic">
          {renderInline(block.text)}
        </blockquote>
      )
    case 'p':
    default:
      return <p className="text-slate-600 leading-relaxed mb-5">{renderInline(block.text)}</p>
  }
}

export default function BlogPostPage({ slug, onNavigate }) {
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-extrabold text-slate-800 mb-4">Artículo no encontrado</h1>
        <a
          href="/blog"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/blog')
          }}
          className="text-brand-500 hover:text-brand-600 font-semibold"
        >
          ← Volver al blog
        </a>
      </main>
    )
  }

  const relatedPosts = blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3)

  return (
    <main className="max-w-2xl mx-auto px-4 py-8 md:py-12">
      <article className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/60 p-7 md:p-10">
        <nav aria-label="Migas de pan" className="mb-7 flex flex-wrap items-center gap-2 text-sm">
          <a href="/" onClick={(event) => { event.preventDefault(); onNavigate('/') }} className="font-semibold text-brand-600 hover:text-brand-700">Inicio</a>
          <span className="text-slate-300">/</span>
          <a href="/blog" onClick={(event) => { event.preventDefault(); onNavigate('/blog') }} className="font-semibold text-brand-600 hover:text-brand-700">Blog</a>
          <span className="text-slate-300">/</span>
          <span className="text-slate-500" aria-current="page">{post.category}</span>
        </nav>

        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-500">
              {post.category}
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-400">{formatDate(post.datePublished)}</span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-400">{post.readingMinutes} min de lectura</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {post.title}
          </h1>
        </header>

        <div className="prose-content">
          {post.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        <aside className="mt-9 border-t border-slate-200 pt-7" aria-labelledby="related-title">
          <h2 id="related-title" className="font-display text-xl font-bold text-slate-900">También te puede servir</h2>
          <div className="mt-4 grid gap-3">
            {relatedPosts.map((related) => (
              <a
                key={related.slug}
                href={`/blog/${related.slug}`}
                onClick={(event) => { event.preventDefault(); onNavigate(`/blog/${related.slug}`) }}
                className="group rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition-colors hover:border-brand-300 hover:bg-brand-50"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">{related.category}</span>
                <span className="mt-1 flex items-center justify-between gap-3 font-semibold text-slate-800 group-hover:text-brand-800">
                  {related.title}<span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </div>
        </aside>

        {/* Autor */}
        <div className="mt-10 flex items-center gap-4 rounded-2xl border border-brand-100 bg-brand-50/50 p-5">
          <picture>
            <source srcSet="/luis-reyes-retrato-2026.webp" type="image/webp" />
            <img
              src="/luis-reyes-retrato-2026.jpg"
              alt="Luis Reyes Castro, diseñador y desarrollador web"
              width="56"
              height="56"
              loading="lazy"
              className="w-14 h-14 rounded-full object-cover border-2 border-brand-200 shrink-0"
            />
          </picture>
          <div>
            <p className="font-bold text-slate-800 text-sm">Luis Reyes Castro</p>
            <p className="text-slate-500 text-sm">
              Diseñador y desarrollador web para empresas, negocios y profesionales en Chile.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-8 overflow-hidden rounded-2xl bg-slate-950 p-7 text-center text-white">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-600/30 blur-3xl" aria-hidden="true" />
          <p className="relative font-display text-xl font-bold mb-2">¿Hablamos de tu página web?</p>
          <p className="relative text-slate-300 text-sm mb-5">
            Una reunión sin compromiso para ver cómo atraer más oportunidades desde Google.
          </p>
          <a
            href="/agenda"
            onClick={(event) => {
              event.preventDefault()
              onNavigate('/agenda')
            }}
            className="relative inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all"
          >
            Agenda una reunión
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </article>
    </main>
  )
}
