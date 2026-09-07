import { portfolioProjects } from '../portfolioProjects'

export default function ProjectsPage({ onNavigate }) {
  return (
    <main>
      <section className="page-hero px-5 py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Migas de pan" className="mb-5 flex items-center gap-2 text-sm"><a href="/" onClick={(event) => { event.preventDefault(); onNavigate('/') }} className="font-semibold text-brand-700 hover:text-brand-800">Inicio</a><span className="text-slate-300">/</span><span className="text-slate-500">Proyectos</span></nav>
          <div className="max-w-3xl"><span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[.16em] text-brand-700">Trabajo seleccionado</span><h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-.04em] text-slate-950 md:text-5xl">Proyectos reales, publicados y listos para explorar</h1><p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">Una selección de plataformas, catálogos y sitios comerciales creados para operaciones muy distintas. Cada tarjeta enlaza al proyecto en línea.</p></div>
        </div>
      </section>

      <section className="px-5 py-10 md:py-12">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {portfolioProjects.map((project, index) => (
            <article key={project.name} className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift ${index === 0 ? 'md:col-span-2 md:grid md:grid-cols-[1.25fr_.75fr]' : ''}`}>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className={`block bg-gradient-to-br ${project.glow} p-3`}><div className="h-full overflow-hidden rounded-2xl border border-white/80 bg-white shadow-sm"><img src={project.image} alt={project.alt} width="1200" height="833" loading={index === 0 ? 'eager' : 'lazy'} decoding="async" className={`w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025] ${index === 0 ? 'aspect-[16/9] h-full' : 'aspect-[16/10]'}`} /></div></a>
              <div className="flex flex-col justify-center p-5 sm:p-6"><span className={`w-fit rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-[.12em] ${project.chip}`}>{project.type}</span><h2 className="mt-3 font-display text-2xl font-bold text-slate-950">{project.name}</h2><p className="mt-2 text-sm leading-relaxed text-slate-600">{project.summary}</p><div className="mt-4 flex flex-wrap gap-2">{project.built.map((item) => <span key={item} className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600">{item}</span>)}</div><a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-700">Abrir {project.domain}<span className="transition-transform group-hover:translate-x-1">↗</span></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-14 md:pb-16"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 rounded-3xl bg-slate-950 p-7 text-white md:flex-row md:items-center md:p-9"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-cyan-300">Tu proyecto puede ser el siguiente</p><h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">Construyamos una presencia digital a la altura de tu negocio</h2><p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">Definimos una solución clara, profesional y preparada para crecer contigo.</p></div><a href="https://wa.me/56922012534?text=Hola%20Luis%2C%20quiero%20conversar%20sobre%20una%20web%20para%20mi%20negocio" target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-2xl bg-brand-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-500">Hablemos por WhatsApp</a></div></section>
    </main>
  )
}
