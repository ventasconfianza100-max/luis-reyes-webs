const projects = [
  {
    href: '/proyectos/sitio-psicologa-clinica',
    title: 'Sitio para psicóloga clínica',
    category: 'Landing profesional',
    description:
      'Una página clara para presentar especialidades, enfoque terapéutico, modalidad de atención y contacto directo por WhatsApp.',
    points: ['Perfil profesional', 'Servicios principales', 'Contacto rápido'],
  },
  {
    href: '/proyectos',
    title: 'Consulta terapéutica online',
    category: 'Captación de pacientes',
    description:
      'Un sitio pensado para resolver dudas iniciales, transmitir confianza y acompañar al paciente hacia una primera conversación.',
    points: ['Diseño responsive', 'Secciones de confianza', 'Mensaje orientado al paciente'],
  },
  {
    href: '/proyectos',
    title: 'Perfil profesional para redes',
    category: 'Presencia digital',
    description:
      'Una web simple y elegante para reunir trayectoria, estilo de trabajo y canales de atención en un solo enlace.',
    points: ['Link para Instagram', 'Biografía profesional', 'SEO básico'],
  },
]

export default function ProjectsPage({ onNavigate }) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/60 p-8 md:p-10">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/')
          }}
          className="inline-flex items-center gap-2 text-violet-500 hover:text-violet-600 font-semibold text-sm mb-8"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
          Volver al inicio
        </a>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wide text-violet-400">
            Proyectos
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 mt-3 mb-4">
            Ejemplos de páginas web para profesionales
          </h1>
          <p className="text-slate-500 leading-relaxed">
            Ideas de sitios limpios, modernos y enfocados en que tus pacientes entiendan quién eres,
            cómo trabajas y cómo pueden contactarte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              onClick={(event) => {
                event.preventDefault()
                onNavigate(project.href)
              }}
              className="rounded-2xl border border-violet-100 bg-violet-50/60 p-5 flex flex-col transition-all hover:-translate-y-1 hover:shadow-md hover:border-violet-200"
            >
              <div className="w-12 h-12 rounded-2xl bg-white text-violet-500 flex items-center justify-center shadow-sm mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75A2.25 2.25 0 016 4.5h12a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0118 19.5H6a2.25 2.25 0 01-2.25-2.25V6.75z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3h5.25m-5.25 3h7.5"/>
                </svg>
              </div>
              <p className="text-xs font-semibold text-violet-500 mb-2">{project.category}</p>
              <h2 className="text-lg font-bold text-slate-800 mb-3">{project.title}</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
              <ul className="space-y-2">
                {project.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/70 bg-white/70 p-6 text-center">
          <p className="text-slate-800 font-bold text-xl mb-2">
            ¿Quieres una página parecida?
          </p>
          <p className="text-slate-500 text-sm mb-5">
            La adaptamos a tu especialidad, tono profesional y forma de atender.
          </p>
          <a
            href="https://wa.me/56922012534?text=Hola%20Luis%2C%20quiero%20una%20p%C3%A1gina%20web%20parecida%20a%20tus%20proyectos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-sm"
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
