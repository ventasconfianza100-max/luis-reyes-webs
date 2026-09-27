import { portfolioProjects } from '../portfolioProjects'
import NotFoundPage from './NotFoundPage'

export default function ProjectCaseStudyPage({ slug, onNavigate }) {
  const project = portfolioProjects.find((item) => item.slug === slug)
  if (!project) return <NotFoundPage onNavigate={onNavigate} />
  const others = portfolioProjects.filter((item) => item.slug !== slug)
  const go = (event, href) => { event.preventDefault(); onNavigate(href) }

  return (
    <main>
      <section className="page-hero px-5 py-8 md:py-10">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Migas de pan" className="mb-5 flex flex-wrap items-center gap-2 text-sm"><a href="/" onClick={(e) => go(e, '/')} className="font-semibold text-brand-700 hover:text-brand-800">Inicio</a><span className="text-slate-300">/</span><a href="/proyectos" onClick={(e) => go(e, '/proyectos')} className="font-semibold text-brand-700 hover:text-brand-800">Proyectos</a><span className="text-slate-300">/</span><span className="text-slate-500">{project.name}</span></nav>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[.14em] ${project.chip}`}>{project.type}</span>
              <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-.04em] text-slate-950 md:text-5xl">{project.name}</h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3"><a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-brand-700">Ver proyecto en vivo ↗</a><a href="/proyectos" onClick={(e) => go(e, '/proyectos')} className="inline-flex items-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:border-brand-300">← Todos los proyectos</a></div>
            </div>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className={`block rounded-3xl bg-gradient-to-br ${project.glow} p-3`}><div className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-soft"><img src={project.image} alt={project.alt} width="1200" height="833" loading="eager" decoding="async" className="aspect-[16/10] w-full object-cover object-top" /></div></a>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:py-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-950">El desafío</h2>
            <p className="mt-3 leading-relaxed text-slate-600">{project.challenge}</p>
            <h2 className="mt-10 font-display text-2xl font-bold text-slate-950">Qué se hizo</h2>
            <div className="mt-4 space-y-4">
              {project.sections.map(([title, text], index) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                  <h3 className="flex items-center gap-3 font-display text-lg font-bold text-slate-950"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">{index + 1}</span>{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"><h2 className="text-xs font-bold uppercase tracking-[.16em] text-slate-500">Lo que incluye</h2><ul className="mt-3 space-y-2 text-sm text-slate-700">{project.built.map((item) => <li key={item} className="flex gap-2"><span className="text-brand-600">✓</span>{item}</li>)}</ul></div>
            <div className="rounded-2xl bg-slate-950 p-5 text-white"><h2 className="text-xs font-bold uppercase tracking-[.16em] text-cyan-300">Resultado</h2><ul className="mt-3 space-y-2 text-sm">{project.results.map((item) => <li key={item}>{item}</li>)}</ul><a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-bold text-cyan-300 hover:text-white">Visitar {project.domain} ↗</a></div>
          </aside>
        </div>
      </section>

      <section className="px-5 pb-14 md:pb-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-xl font-bold text-slate-950">Otros proyectos</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((item) => (
              <a key={item.slug} href={`/proyectos/${item.slug}`} onClick={(e) => go(e, `/proyectos/${item.slug}`)} className="rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-brand-300"><span className="block text-sm font-bold text-slate-900">{item.name}</span><span className="text-xs text-slate-500">{item.type}</span></a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
