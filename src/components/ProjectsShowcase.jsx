import Section from './Section'
import { portfolioProjects } from '../portfolioProjects'

function Check() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand-500"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
}

function ProjectCard({ project }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift lg:col-span-3">
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-br ${project.glow}`} />
      <div className="relative p-3 sm:p-4">
        <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${project.name}`} className="block overflow-hidden rounded-2xl border border-white/90 bg-slate-100 shadow-sm">
          <img src={project.image} alt={project.alt} width="1200" height="833" loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]" />
        </a>
      </div>
      <div className="relative px-5 pb-6 pt-2 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className={`rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-[.12em] ${project.chip}`}>{project.type}</span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400"><span className="h-2 w-2 rounded-full bg-emerald-400" />Proyecto publicado</span>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-slate-950 sm:text-2xl">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.summary}</p>
        <ul className="mt-4 grid gap-2 border-t border-slate-100 pt-4 sm:grid-cols-2">
          {project.built.map((item) => <li key={item} className="flex gap-2 text-sm text-slate-600"><Check /><span>{item}</span></li>)}
        </ul>
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition-colors hover:text-brand-900">Ver proyecto en {project.domain}<span className="transition-transform group-hover:translate-x-1">↗</span></a>
      </div>
    </article>
  )
}

export default function ProjectsShowcase() {
  return (
    <Section>
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600">Portafolio real</span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Lo que he construido</h2>
        <p className="mt-3 text-slate-500">Negocios, tiendas y organizaciones que hoy funcionan en línea. Explora cada proyecto y comprueba el trabajo directamente.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        {portfolioProjects.map((project) => <ProjectCard key={project.name} project={project} />)}
      </div>
      <div className="mt-8 grid gap-3 rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white sm:grid-cols-3 sm:p-6">
        {[['Soluciones reales', 'Cada proyecto responde a una operación y una marca distinta.'], ['Diseño + desarrollo', 'Estrategia, interfaz, código, SEO y publicación en un solo proceso.'], ['Preparados para crecer', 'Experiencias rápidas, administrables y cuidadas en móvil.']].map(([title, text]) => <div key={title} className="rounded-2xl border border-white/10 bg-white/[.04] p-4"><p className="font-display font-bold text-cyan-300">{title}</p><p className="mt-1 text-sm leading-relaxed text-slate-300">{text}</p></div>)}
      </div>
    </Section>
  )
}
