import Section from './Section'
import { portfolioProjects } from '../portfolioProjects'

const stats = [
  { value: String(portfolioProjects.length), title: 'Sitios reales publicados', sub: 'Tiendas, empresas y profesionales, hoy en línea.' },
  { value: 'Talca', title: 'Clientes en todo Chile', sub: 'Reuniones por Meet, Zoom o WhatsApp.' },
  { value: '1 a 1', title: 'Trato directo', sub: 'Hablas conmigo, no con una agencia.' },
]

export default function Stats() {
  return (
    <Section spacing="py-6 md:py-8">
      <div className="stats-strip relative grid grid-cols-1 overflow-hidden rounded-3xl bg-slate-950 p-2 shadow-2xl shadow-violet-950/15 sm:grid-cols-3">
        <div className="pointer-events-none absolute -left-16 -top-24 h-56 w-72 rounded-full bg-brand-600/25 blur-3xl" aria-hidden="true" />
        {stats.map((s, index) => (
          <div key={s.title} className={`relative flex items-center gap-4 px-5 py-4 ${index > 0 ? 'border-t border-white/10 sm:border-l sm:border-t-0' : ''}`}>
            <p className="font-display text-3xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-brand-300 to-cyan-200 bg-clip-text text-transparent">{s.value}</span>
            </p>
            <div>
              <p className="text-sm font-semibold leading-tight text-white">{s.title}</p>
              <p className="mt-0.5 text-xs leading-snug text-slate-400">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
