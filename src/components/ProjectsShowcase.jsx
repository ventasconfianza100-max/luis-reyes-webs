import Section from './Section'

const projects = [
  {
    name: 'Consulta clínica',
    type: 'Psicóloga clínica',
    result: 'Pensada para captar pacientes desde Google',
    href: '/proyectos/sitio-psicologa-clinica',
    accent: 'from-brand-300 to-brand-500',
    chip: 'bg-brand-50 text-brand-600 border-brand-200',
  },
  {
    name: 'Terapia online',
    type: 'Consulta 100% online',
    result: 'Optimizada para agendar por videollamada',
    href: '/proyectos/consulta-terapeutica-online',
    accent: 'from-emerald-300 to-emerald-500',
    chip: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  },
  {
    name: 'Perfil para redes',
    type: 'Link en bio',
    result: 'Trayectoria y contacto en un solo enlace',
    href: '/proyectos/perfil-profesional-redes',
    accent: 'from-sky-300 to-sky-500',
    chip: 'bg-sky-50 text-sky-600 border-sky-200',
  },
]

function MiniMock({ accent }) {
  return (
    <div className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-soft">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 border-b border-slate-200">
        <span className="w-2 h-2 rounded-full bg-red-300" />
        <span className="w-2 h-2 rounded-full bg-amber-300" />
        <span className="w-2 h-2 rounded-full bg-green-300" />
      </div>
      <div className="p-4">
        <div className={`h-20 rounded-lg bg-gradient-to-br ${accent} mb-3`} />
        <div className="h-2 w-3/4 rounded bg-slate-200 mb-2" />
        <div className="h-2 w-1/2 rounded bg-slate-200 mb-3" />
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-8 rounded bg-slate-100" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsShowcase({ onNavigate }) {
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
          Proyectos
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
          Trabajo pensado para tu rubro
        </h2>
        <p className="text-slate-500">
          Ejemplos de sitios diseñados desde la lógica del paciente que está decidiendo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.href}
            href={p.href}
            onClick={(event) => {
              event.preventDefault()
              onNavigate(p.href)
            }}
            className="group block rounded-3xl bg-white border border-slate-100 shadow-soft p-5 transition-all hover:-translate-y-1.5 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            <MiniMock accent={p.accent} />
            <div className="mt-5">
              <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border ${p.chip} mb-3`}>
                {p.type}
              </span>
              <h3 className="font-display text-lg font-bold text-slate-900">{p.name}</h3>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">{p.result}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-brand-600 font-semibold text-sm transition-transform group-hover:translate-x-1">
                Ver proyecto
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
