import Section from './Section'

const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-violet-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    value: '100%',
    label: 'Proyectos Entregados',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-violet-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
      </svg>
    ),
    value: '2 semanas',
    label: 'Tiempo Promedio',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-violet-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
      </svg>
    ),
    value: 'Diseños',
    label: 'Modernos y Funcionales',
  },
]

export default function Stats() {
  return (
    <Section spacing="py-6 md:py-8">
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-soft border border-slate-100 p-5 md:p-7 text-center flex flex-col items-center gap-2">
            <div className="w-11 h-11 rounded-full bg-brand-50 flex items-center justify-center">
              {s.icon}
            </div>
            <p className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">{s.value}</p>
            <p className="text-slate-400 text-xs md:text-sm leading-tight">{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
