const leftCards = [
  {
    icon: '🧠',
    text: 'Entiendo el rubro desde adentro',
    sub: 'Psicólogo titulado UTalca',
  },
  {
    icon: '⚡',
    text: 'Entrega en 2 semanas',
    sub: 'Sin demoras ni excusas',
  },
  {
    icon: '📱',
    text: '100% responsive',
    sub: 'Perfecto en celular y desktop',
  },
]

const rightCards = [
  {
    icon: '🎯',
    text: 'Diseñado para captar pacientes',
    sub: 'No solo para "tener presencia"',
  },
  {
    icon: '🔒',
    text: 'Sitio seguro con HTTPS',
    sub: 'Profesional desde el día 1',
  },
  {
    icon: '💬',
    text: 'Soporte post-entrega',
    sub: 'No desaparezco al terminar',
  },
]

export default function Decorations() {
  return (
    <>
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-violet-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 right-1/3 w-64 h-64 bg-violet-100/40 rounded-full blur-2xl" />
        <div className="absolute top-2/3 -left-16 w-56 h-56 bg-pink-100/30 rounded-full blur-3xl" />
      </div>

      {/* Left floating cards */}
      <div className="hidden xl:flex flex-col gap-4 fixed left-6 top-1/2 -translate-y-1/2 w-48">
        {leftCards.map((card, i) => (
          <div
            key={i}
            className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-2xl p-4 shadow-sm"
            style={{ transform: `translateX(${i % 2 === 0 ? '0px' : '12px'})` }}
          >
            <span className="text-2xl block mb-1">{card.icon}</span>
            <p className="text-slate-700 font-semibold text-xs leading-tight">{card.text}</p>
            <p className="text-slate-400 text-xs mt-0.5">{card.sub}</p>
          </div>
        ))}
      </div>

      {/* Right floating cards */}
      <div className="hidden xl:flex flex-col gap-4 fixed right-6 top-1/2 -translate-y-1/2 w-48">
        {rightCards.map((card, i) => (
          <div
            key={i}
            className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-2xl p-4 shadow-sm"
            style={{ transform: `translateX(${i % 2 === 0 ? '0px' : '-12px'})` }}
          >
            <span className="text-2xl block mb-1">{card.icon}</span>
            <p className="text-slate-700 font-semibold text-xs leading-tight">{card.text}</p>
            <p className="text-slate-400 text-xs mt-0.5">{card.sub}</p>
          </div>
        ))}
      </div>
    </>
  )
}
