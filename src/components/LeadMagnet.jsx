import Section from './Section'

const WHATSAPP = '56922012534'

const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  'Hola Luis, quiero el checklist gratis: las 7 cosas que la web de un negocio necesita para conseguir clientes.'
)}`

const items = [
  'Qué secciones generan confianza en un cliente nuevo',
  'El error que hace que te escriban por Instagram y no compren ni coticen',
  'Cómo aparecer en Google cuando buscan lo que ofreces en tu ciudad',
]

export default function LeadMagnet() {
  return (
    <Section id="checklist" className="lead-section">
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-5 text-white shadow-[0_24px_70px_-40px_rgba(79,70,229,.6)] md:p-12">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" aria-hidden="true" />
        <div className="relative grid items-center gap-5 md:grid-cols-[1.05fr_.95fr] md:gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[.16em] text-cyan-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M9 3.75h6a2.25 2.25 0 012.25 2.25v12A2.25 2.25 0 0115 20.25H9A2.25 2.25 0 016.75 18V6A2.25 2.25 0 019 3.75z" />
              </svg>
              Recurso gratuito
            </span>
            <h2 className="mt-3 font-display md:mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">Checklist gratis para tu web</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300 md:text-base">
              Las 7 cosas que la web de un negocio necesita para convertir visitas en clientes. Te lo
              envío por WhatsApp, sin costo.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 md:mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-cyan-50"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-emerald-600">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pídeme el checklist gratis
            </a>
          </div>

          <ul className="space-y-2.5 rounded-2xl border border-white/10 bg-white/[.04] p-4 md:space-y-3 md:p-6">
            {items.map((it, index) => (
              <li key={it} className="flex gap-3 text-sm leading-snug text-slate-200">
                <span className="grid h-7 w-7 flex-none place-items-center rounded-lg bg-brand-500/15 text-[11px] font-extrabold text-brand-300">{String(index + 1).padStart(2, '0')}</span>
                <span className="pt-1">{it}</span>
              </li>
            ))}
            <li className="border-t border-white/10 pt-3 text-xs text-slate-400">+ 4 puntos más en el checklist completo</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
