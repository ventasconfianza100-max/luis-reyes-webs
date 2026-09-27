import { portfolioProjects } from '../portfolioProjects'
import CountUp from './CountUp'

const stats = [
  { value: portfolioProjects.length, label: 'proyectos publicados' },
  { value: '6', label: 'rubros distintos' },
  { value: '100%', label: 'hechos a medida' },
]

export default function ProjectsPage({ onNavigate }) {
  const go = (event, href) => { event.preventDefault(); onNavigate(href) }

  return (
    <main className="projects-page">
      <section className="page-hero px-5 py-8 md:py-12">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Migas de pan" className="mb-5 flex items-center gap-2 text-sm"><a href="/" onClick={(event) => go(event, '/')} className="font-semibold text-brand-700 hover:text-brand-800">Inicio</a><span className="text-slate-300">/</span><span className="text-slate-500">Proyectos</span></nav>
          <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_.9fr]">
            <div>
              <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[.16em] text-brand-700">Trabajo seleccionado</span>
              <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-.04em] text-slate-950 md:text-5xl">Proyectos reales, publicados y <span className="text-gradient">listos para explorar</span></h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">Una selección de plataformas, catálogos y sitios comerciales creados para operaciones muy distintas. Cada tarjeta enlaza al proyecto en línea.</p>
              <dl className="projects-stats mt-6 grid max-w-xl grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="projects-stat-value font-display text-2xl font-extrabold text-slate-950 md:text-3xl"><CountUp value={stat.value} /></dd>
                    <dd className="text-xs text-slate-500">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <ul className="projects-index grid grid-cols-2 gap-2 rounded-3xl border border-white/80 bg-white/70 p-3 shadow-soft backdrop-blur">
              {portfolioProjects.map((project, index) => (
                <li key={project.name}><a href={`/proyectos/${project.slug}`} onClick={(event) => go(event, `/proyectos/${project.slug}`)} className="flex h-full items-start gap-2.5 rounded-2xl px-3 py-2.5 transition-colors hover:bg-brand-50"><span className="projects-index-num mt-0.5 text-[10px] font-bold text-brand-600">{String(index + 1).padStart(2, '0')}</span><span className="flex flex-col"><span className="text-sm font-bold text-slate-900">{project.name}</span><span className="text-xs text-slate-500">{project.type}</span></span></a></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:py-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {portfolioProjects.map((project, index) => (
            <article key={project.name} className={`project-tile group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift ${index === 0 ? 'md:col-span-2 md:grid md:grid-cols-[1.25fr_.75fr]' : ''}`}>
              <a href={`/proyectos/${project.slug}`} onClick={(event) => go(event, `/proyectos/${project.slug}`)} className={`project-tile__media relative block bg-gradient-to-br ${project.glow} p-3 sm:p-4`}>
                <div className="project-window h-full overflow-hidden rounded-2xl border border-white/80 bg-white shadow-sm">
                  <div className="project-window__bar flex items-center gap-1.5 px-3 py-2"><i /><i /><i /><span className="ml-2 truncate text-[10px] font-medium text-slate-400">{project.domain}</span></div>
                  <img src={project.image} alt={project.alt} width="1200" height="833" loading={index === 0 ? 'eager' : 'lazy'} decoding="async" className={`w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] ${index === 0 ? 'aspect-[16/9]' : 'aspect-[16/10]'}`} />
                </div>
              </a>
              <div className="relative flex flex-col justify-center p-5 sm:p-6">
                <span className="project-tile__num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span className={`w-fit rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-[.12em] ${project.chip}`}>{project.type}</span>
                <h2 className="mt-3 font-display text-2xl font-bold text-slate-950">{project.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">{project.built.map((item) => <span key={item} className="project-tag rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600">{item}</span>)}</div>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2"><a href={`/proyectos/${project.slug}`} onClick={(event) => go(event, `/proyectos/${project.slug}`)} className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-sm font-bold text-white hover:bg-brand-700">Ver proyecto<span className="transition-transform group-hover:translate-x-1">→</span></a><a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-brand-700">Abrir {project.domain} ↗</a></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-14 md:pb-16"><div className="projects-cta relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 overflow-hidden rounded-3xl bg-slate-950 p-7 text-white md:flex-row md:items-center md:p-9"><div className="relative"><p className="text-xs font-bold uppercase tracking-[.18em] text-cyan-300">Tu proyecto puede ser el siguiente</p><h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">Construyamos una presencia digital a la altura de tu negocio</h2><p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">Definimos una solución clara, profesional y preparada para crecer contigo.</p></div><a href="https://wa.me/56922012534?text=Hola%20Luis%2C%20quiero%20conversar%20sobre%20una%20web%20para%20mi%20negocio" target="_blank" rel="noopener noreferrer" className="relative shrink-0 rounded-2xl bg-brand-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-500">Hablemos por WhatsApp</a></div></section>
    </main>
  )
}
