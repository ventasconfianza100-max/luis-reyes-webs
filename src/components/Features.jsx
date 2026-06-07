const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-violet-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3"/>
      </svg>
    ),
    title: 'Diseño responsive',
    desc: 'Se ve perfecto en celular, tablet y escritorio. Tus pacientes te encuentran desde cualquier dispositivo.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-violet-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
      </svg>
    ),
    title: 'Formulario para citas',
    desc: 'Sistema de contacto y agendamiento integrado para que los pacientes te contacten fácilmente.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-violet-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
      </svg>
    ),
    title: 'Optimización SEO',
    desc: 'Configurado para aparecer en Google cuando alguien busca psicólogos en tu ciudad.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-violet-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
      </svg>
    ),
    title: 'Soporte post-entrega',
    desc: 'Acompañamiento después de lanzar tu sitio para ajustes y dudas que surjan.',
  },
]

export default function Features() {
  return (
    <section className="py-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-md border border-white/60 p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8">
          ¿Qué incluye tu página web para psicólogos?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0">
                {f.icon}
              </div>
              <div>
                <h3 className="font-semibold text-slate-700 mb-1">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-violet-100 pt-8">
          <div className="rounded-2xl bg-violet-50/70 border border-violet-100 p-6 text-center">
            <p className="font-semibold text-slate-800 mb-2">
              ¿Cuál es el valor de una página web?
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Tengo tres planes según tu momento, desde{' '}
              <strong className="text-violet-600">$90.000 CLP</strong>. Cada uno deja claro qué incluye,
              sin sorpresas.
            </p>
            <a
              href="#planes"
              className="inline-flex items-center gap-2 text-violet-600 font-semibold text-sm hover:text-violet-700 transition-colors"
            >
              Ver los planes
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
