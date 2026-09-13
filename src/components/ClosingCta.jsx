import Section from './Section'

// Cierre común de las páginas internas: reunión gratis como acción principal y WhatsApp como alternativa.
export default function ClosingCta({ title, text, whatsapp, onNavigate }) {
  return (
    <Section spacing="pt-3 pb-12 md:pb-16">
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 px-7 py-10 text-white shadow-[0_24px_70px_-40px_rgba(79,70,229,.6)] md:px-12 md:py-12">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
            <p className="mt-3 leading-relaxed text-slate-300">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <a
              href="/agenda"
              onClick={(event) => { event.preventDefault(); onNavigate('/agenda') }}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-500"
            >
              Agenda una reunión gratis
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Escríbeme por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
