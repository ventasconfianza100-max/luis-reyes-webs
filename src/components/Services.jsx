const services = [
  {
    id: 'profesionales',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
      </svg>
    ),
    iconBg: 'bg-violet-400',
    tag: 'Proyecto Disponible',
    tagStyle: 'bg-violet-50 text-violet-500 border border-violet-200',
    title: 'Páginas web para profesionales',
    description:
      'Diseños pensados para psicólogos, terapeutas y profesionales independientes que buscan captar clientes online',
    cta: 'Ver ejemplos',
    ctaHref: '#ejemplos',
    available: true,
  },
  {
    id: 'empresas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/>
      </svg>
    ),
    iconBg: 'bg-emerald-400',
    tag: 'Próximamente',
    tagStyle: 'bg-slate-50 text-slate-400 border border-slate-200',
    title: 'Páginas web para empresas',
    description:
      'Soluciones web profesionales para negocios, clínicas y empresas que quieren destacar en el mercado',
    cta: 'Ver ejemplos',
    ctaHref: '#ejemplos-empresas',
    available: false,
  },
]

export default function Services() {
  return (
    <section className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.id} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-md border border-white/60 p-7 flex flex-col relative">
            {/* Tag */}
            <span className={`absolute top-5 right-5 text-xs font-medium px-3 py-1 rounded-full ${s.tagStyle}`}>
              {s.tag}
            </span>

            {/* Icon */}
            <div className={`w-14 h-14 rounded-2xl ${s.iconBg} flex items-center justify-center mb-5 shadow-sm`}>
              {s.icon}
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-slate-800 mb-3">{s.title}</h2>

            {/* Description */}
            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{s.description}</p>

            {/* CTA */}
            <a
              href={s.ctaHref}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all w-fit ${
                s.available
                  ? 'bg-violet-500 text-white hover:bg-violet-600 shadow-sm hover:shadow-md'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none'
              }`}
            >
              {s.cta}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
