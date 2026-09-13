import Section from './Section'
import { portfolioProjects } from '../portfolioProjects'

const stats = [
  { value: String(portfolioProjects.length), title: 'Sitios reales publicados', sub: 'Tiendas, empresas y profesionales, hoy en línea.' },
  { value: 'Talca', title: 'Clientes en todo Chile', sub: 'Reuniones por Meet, Zoom o WhatsApp.' },
  { value: '1 a 1', title: 'Trato directo', sub: 'Hablas conmigo, no con una agencia.' },
]

export default function Stats() {
  return (
    <Section spacing="py-4 md:py-8">
      <div className="stats-strip relative grid overflow-hidden rounded-3xl bg-slate-950 p-1.5 shadow-2xl shadow-violet-950/15 grid-cols-3 sm:p-2">
        <div className="pointer-events-none absolute -left-16 -top-24 h-56 w-72 rounded-full bg-brand-600/25 blur-3xl" aria-hidden="true" />
        {stats.map((s, index) => (
          <div key={s.title} className={`relative flex flex-col items-center gap-0.5 px-1.5 py-3 text-center sm:flex-row sm:gap-4 sm:px-5 sm:py-4 sm:text-left ${index > 0 ? 'border-l border-white/10' : ''}`}>
            <p className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              <span className="bg-gradient-to-r from-brand-300 to-cyan-200 bg-clip-text text-transparent">{s.value}</span>
            </p>
            <div>
              <p className="text-[11px] font-semibold leading-tight text-white sm:text-sm">{s.title}</p>
              <p className="mt-0.5 hidden text-xs leading-snug text-slate-400 sm:block">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
