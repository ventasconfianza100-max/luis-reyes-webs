const projects = [
  { href: '/paginas-web-empresas-servicios', title: 'Empresa de servicios', category: 'Sitio multipágina + SEO local', text: 'Una estructura clara para explicar servicios, ganar confianza y recibir cotizaciones desde Google o WhatsApp.', image: '/portfolio-servicios.webp', color: 'from-cyan-500/20 to-blue-500/5' },
  { href: '/tienda-online-chile', title: 'Tienda online', category: 'E-commerce a medida', text: 'Catálogo, categorías, carrito y administración propia para vender sin depender de una plantilla genérica.', image: '/portfolio-tienda.webp', color: 'from-amber-400/25 to-orange-500/5' },
  { href: '/diseno-web-talca', title: 'Marca profesional', category: 'Presencia digital + captación', text: 'Una web personal con servicios, experiencia y contacto directo para profesionales de distintos rubros.', image: '/portfolio-profesional.webp', color: 'from-violet-500/20 to-fuchsia-500/5' },
]

export default function ProjectsPage({ onNavigate }) {
  return (
    <main>
      <section className="page-hero px-5 py-11 md:py-14">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Migas de pan" className="mb-6 flex items-center gap-2 text-sm">
            <a href="/" onClick={(event) => { event.preventDefault(); onNavigate('/') }} className="font-semibold text-brand-700 hover:text-brand-800">Inicio</a>
            <span className="text-slate-300">/</span><span className="text-slate-500">Proyectos</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[.16em] text-brand-700">Trabajo seleccionado</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-.04em] text-slate-950 md:text-5xl">Proyectos pensados para negocios que quieren avanzar</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">Soluciones reales para ordenar una oferta, presentar una marca con claridad y convertir visitas en oportunidades comerciales.</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-11 md:py-14">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <a key={project.title} href={project.href} onClick={(event) => { event.preventDefault(); onNavigate(project.href) }} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift">
              <div className={`bg-gradient-to-br ${project.color} p-3`}><div className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-sm"><img src={project.image} alt={`Vista del proyecto ${project.title} desarrollado por Luis Reyes`} width="1360" height="900" loading="lazy" className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]" /></div></div>
              <div className="p-5"><p className="text-xs font-bold uppercase tracking-[.14em] text-brand-600">{project.category}</p><h2 className="mt-2 font-display text-xl font-bold text-slate-950">{project.title}</h2><p className="mt-2 text-sm leading-relaxed text-slate-600">{project.text}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-700">Conocer la solución <span className="transition-transform group-hover:translate-x-1">→</span></span></div>
            </a>
          ))}
        </div>
      </section>

      <section className="px-5 pb-14 md:pb-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 rounded-3xl bg-slate-950 p-7 text-white md:flex-row md:items-center md:p-9">
          <div><p className="text-xs font-bold uppercase tracking-[.18em] text-cyan-300">Tu proyecto puede ser el siguiente</p><h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">Conversemos sobre lo que necesita tu negocio</h2><p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">Te ayudo a definir una solución clara, realista y preparada para crecer.</p></div>
          <a href="https://wa.me/56922012534?text=Hola%20Luis%2C%20quiero%20conversar%20sobre%20una%20web%20para%20mi%20negocio" target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-2xl bg-brand-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-500">Hablemos por WhatsApp</a>
        </div>
      </section>
    </main>
  )
}
