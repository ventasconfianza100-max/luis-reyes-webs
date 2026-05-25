const projects = [
  {
    title: 'Sitio para clínica o centro de atención',
    category: 'Web institucional',
    description:
      'Una página profesional para presentar servicios, equipo, ubicación y canales de contacto de forma clara.',
    points: ['Servicios por área', 'Equipo profesional', 'Contacto directo'],
  },
  {
    title: 'Página para negocio local',
    category: 'Presencia comercial',
    description:
      'Un sitio simple y moderno para mostrar lo que ofrece tu negocio, generar confianza y recibir consultas.',
    points: ['Información ordenada', 'Botón de WhatsApp', 'Diseño responsive'],
  },
  {
    title: 'Landing para servicio específico',
    category: 'Captación de clientes',
    description:
      'Una página enfocada en explicar una oferta concreta y guiar al visitante hacia una cotización o reunión.',
    points: ['Mensaje comercial', 'Secciones de confianza', 'CTA claro'],
  },
]

export default function BusinessProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/60 p-8 md:p-10">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-600 font-semibold text-sm mb-8"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
          Volver al inicio
        </a>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            Empresas
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 mt-3 mb-4">
            Ejemplos de páginas web para negocios
          </h1>
          <p className="text-slate-500 leading-relaxed">
            Sitios pensados para ordenar tu oferta, presentar tu marca con confianza y convertir visitas
            en conversaciones reales con clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-white text-emerald-500 flex items-center justify-center shadow-sm mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 14.15A23.978 23.978 0 0012 15.75c2.648 0 5.195-.429 7.577-1.22"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.144V5.25A2.25 2.25 0 0110.5 3h3a2.25 2.25 0 012.25 2.25v.894"/>
                </svg>
              </div>
              <p className="text-xs font-semibold text-emerald-500 mb-2">{project.category}</p>
              <h2 className="text-lg font-bold text-slate-800 mb-3">{project.title}</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
              <ul className="space-y-2">
                {project.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/70 bg-white/70 p-6 text-center">
          <p className="text-slate-800 font-bold text-xl mb-2">
            ¿Quieres una web para tu empresa?
          </p>
          <p className="text-slate-500 text-sm mb-5">
            La adaptamos al rubro, objetivos comerciales y estilo visual de tu marca.
          </p>
          <a
            href="https://wa.me/56922012534?text=Hola%20Luis%2C%20quiero%20una%20p%C3%A1gina%20web%20para%20mi%20empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-sm"
          >
            Escríbeme por WhatsApp
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}
