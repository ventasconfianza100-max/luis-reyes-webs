const sections = [
  'Presentación profesional y enfoque clínico',
  'Especialidades o problemáticas que atiende',
  'Modalidad presencial, online o mixta',
  'Preguntas frecuentes para nuevos pacientes',
  'Contacto directo por WhatsApp',
]

const flow = [
  {
    title: 'Confianza inicial',
    text: 'La primera pantalla muestra quién es la profesional, su tono de atención y una invitación clara a consultar.',
  },
  {
    title: 'Información ordenada',
    text: 'El paciente encuentra especialidades, modalidad, valores referenciales y dudas frecuentes sin perderse.',
  },
  {
    title: 'Contacto simple',
    text: 'El cierre lleva a WhatsApp con un mensaje listo para iniciar la conversación de forma natural.',
  },
]

export default function ClinicalPsychologistProjectPage({ onNavigate }) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/60 p-8 md:p-10">
        <a
          href="/proyectos"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/proyectos')
          }}
          className="inline-flex items-center gap-2 text-violet-500 hover:text-violet-600 font-semibold text-sm mb-8"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
          Volver a proyectos
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-violet-400">
              Landing profesional
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 mt-3 mb-5">
              Sitio para psicóloga clínica
            </h1>
            <p className="text-slate-500 leading-relaxed mb-6">
              Una página pensada para que una psicóloga pueda presentarse con claridad, transmitir
              confianza y facilitar que un paciente dé el primer paso sin sentirse presionado.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Responsive', 'WhatsApp', 'SEO básico'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-violet-50 border border-violet-100 text-violet-500 text-sm font-semibold px-4 py-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-violet-100 bg-violet-50/70 p-6">
            <div className="rounded-2xl bg-white p-5 shadow-sm mb-4">
              <div className="w-14 h-14 rounded-full bg-violet-100 border-4 border-violet-200 mb-4" />
              <div className="h-4 w-2/3 rounded-full bg-slate-200 mb-3" />
              <div className="h-3 w-full rounded-full bg-slate-100 mb-2" />
              <div className="h-3 w-5/6 rounded-full bg-slate-100 mb-5" />
              <div className="h-10 w-36 rounded-xl bg-violet-500" />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Estructura visual sobria, cálida y enfocada en guiar al paciente desde la primera impresión
              hasta el contacto.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-violet-100 bg-white/70 p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Qué incluiría</h2>
            <ul className="space-y-3">
              {sections.map((section) => (
                <li key={section} className="flex items-start gap-3 text-slate-500 text-sm leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-violet-400 mt-2 flex-shrink-0" />
                  {section}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-violet-100 bg-white/70 p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Objetivo del diseño</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              No se trata solo de una página bonita. La idea es que la web ayude a que el paciente entienda
              si esa profesional puede acompañarlo, resuelva dudas básicas y tenga un camino simple para
              escribir sin fricción.
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          {flow.map((item) => (
            <article key={item.title} className="rounded-2xl border border-violet-100 bg-violet-50/60 p-5">
              <p className="text-violet-500 font-bold mb-2">{item.title}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/70 bg-white/70 p-6 text-center">
          <p className="text-slate-800 font-bold text-xl mb-2">
            ¿Quieres este estilo para tu consulta?
          </p>
          <p className="text-slate-500 text-sm mb-5">
            Podemos adaptarlo a tu especialidad, ciudad, modalidad de atención y forma de comunicarte.
          </p>
          <a
            href="https://wa.me/56922012534?text=Hola%20Luis%2C%20me%20interesa%20una%20web%20como%20el%20sitio%20para%20psic%C3%B3loga%20cl%C3%ADnica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-sm"
          >
            Cotizar este proyecto
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}
