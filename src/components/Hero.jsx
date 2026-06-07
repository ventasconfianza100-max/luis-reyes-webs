import Section from './Section'

// Mockup de una web de psicólogo, renderizado en CSS dentro de un marco de
// navegador. Muestra "trabajo" sin cargar imágenes pesadas.
function BrowserMockup() {
  return (
    <div className="relative">
      {/* halo de color detrás */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-brand-200/50 to-brand-400/20 blur-2xl rounded-[2rem] -z-10" />

      <div className="rounded-2xl bg-white shadow-lift border border-slate-200/70 overflow-hidden rotate-1 hover:rotate-0 transition-transform duration-500">
        {/* Barra del navegador */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <div className="ml-3 flex-1 h-5 rounded-md bg-white border border-slate-200 text-[10px] text-slate-400 flex items-center px-2">
            tuconsulta.cl
          </div>
        </div>

        {/* "Sitio" de ejemplo */}
        <div className="p-5 bg-gradient-to-b from-brand-50 to-white">
          <div className="flex items-center justify-between mb-5">
            <div className="h-2.5 w-20 rounded bg-brand-300" />
            <div className="flex gap-1.5">
              <div className="h-2 w-8 rounded bg-slate-200" />
              <div className="h-2 w-8 rounded bg-slate-200" />
              <div className="h-2 w-10 rounded bg-brand-500" />
            </div>
          </div>

          <div className="flex flex-col items-center text-center py-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-300 to-brand-500 mb-3" />
            <div className="h-3 w-40 rounded bg-slate-700 mb-2" />
            <div className="h-2 w-52 rounded bg-slate-300 mb-1" />
            <div className="h-2 w-44 rounded bg-slate-300 mb-4" />
            <div className="h-7 w-32 rounded-lg bg-brand-500" />
          </div>

          <div className="grid grid-cols-3 gap-2 mt-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border border-slate-100 bg-white p-2.5">
                <div className="w-5 h-5 rounded bg-brand-100 mb-2" />
                <div className="h-1.5 w-full rounded bg-slate-200 mb-1" />
                <div className="h-1.5 w-2/3 rounded bg-slate-200" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tarjeta flotante de resultado */}
      <div className="absolute -bottom-5 -left-4 bg-white rounded-xl shadow-soft border border-slate-100 px-4 py-3 hidden sm:flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
        </div>
        <div>
          <p className="text-slate-800 font-bold text-sm leading-none">+ Pacientes</p>
          <p className="text-slate-400 text-xs mt-1">desde Google</p>
        </div>
      </div>
    </div>
  )
}

export default function Hero({ onNavigate }) {
  return (
    <Section width="wide" spacing="pt-14 pb-16 md:pt-20 md:pb-24">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Columna texto */}
        <div>
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 mb-5">
            Psicólogo + Diseñador web · Talca
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-slate-900">
            Webs para psicólogos que convierten visitas en{' '}
            <span className="text-brand-600">pacientes</span>.
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
            Soy Luis Reyes Castro, psicólogo titulado UTalca. Diseño sitios pensados
            desde la lógica del paciente que está decidiendo, para que tu web no solo
            se vea bien: que te llene la agenda.
          </p>

          {/* Doble CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/agenda"
              onClick={(event) => {
                event.preventDefault()
                onNavigate('/agenda')
              }}
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 rounded-2xl text-sm transition-all shadow-soft hover:shadow-lift hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Agenda una reunión
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="/proyectos"
              onClick={(event) => {
                event.preventDefault()
                onNavigate('/proyectos')
              }}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold px-7 py-3.5 rounded-2xl text-sm transition-all hover:border-brand-300 hover:text-brand-700 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Ver proyectos
            </a>
          </div>

          {/* Tira de credibilidad */}
          <div className="mt-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-200 shadow-sm flex-shrink-0">
              <picture>
                <source srcSet="/profile.webp" type="image/webp" />
                <img
                  src="/profile.jpg"
                  alt="Luis Reyes Castro, psicólogo y diseñador web en Talca"
                  width="48"
                  height="48"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5" aria-label="5 de 5 estrellas">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-amber-400">
                    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-600">
                <strong className="text-slate-800">Luis Reyes Castro</strong> · Psicólogo titulado UTalca
              </p>
            </div>
          </div>
        </div>

        {/* Columna visual */}
        <div className="md:pl-6">
          <BrowserMockup />
        </div>
      </div>
    </Section>
  )
}
