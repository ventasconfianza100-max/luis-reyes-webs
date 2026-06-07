import Section from './Section'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-brand-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3"/>
      </svg>
    ),
    title: 'Diseño responsive',
    desc: 'Se ve perfecto en celular, tablet y escritorio. Tus pacientes te encuentran desde cualquier dispositivo.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-brand-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
      </svg>
    ),
    title: 'Formulario para citas',
    desc: 'Sistema de contacto y agendamiento integrado para que los pacientes te contacten fácilmente.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-brand-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
      </svg>
    ),
    title: 'Optimización SEO',
    desc: 'Configurado para aparecer en Google cuando alguien busca psicólogos en tu ciudad.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-brand-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
      </svg>
    ),
    title: 'Soporte post-entrega',
    desc: 'Acompañamiento después de lanzar tu sitio para ajustes y dudas que surjan.',
  },
]

export default function Features() {
  return (
    <Section>
      <div className="bg-white rounded-3xl shadow-soft border border-slate-100 p-8 md:p-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
            Qué incluye
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Todo lo que tu página web necesita
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          {features.map((f, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                {f.icon}
              </div>
              <div>
                <h3 className="font-semibold text-slate-700 mb-1">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
