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
    <section className="py-4">
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-white/60 p-5 text-center flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center">
              {s.icon}
            </div>
            <p className="text-xl font-bold text-slate-800 leading-tight">{s.value}</p>
            <p className="text-slate-400 text-xs leading-tight">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
