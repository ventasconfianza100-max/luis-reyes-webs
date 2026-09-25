import { useState } from 'react'

const projectTypes = ['Página web profesional', 'Tienda o catálogo online', 'Web para empresa de servicios', 'Software o app a medida', 'Mejorar mi web actual', 'Aún no estoy seguro']
// Espacios no separables: el corte de línea cae entre la frase y el monto, nunca dentro del monto.
const budgets = ['Hasta $150 mil', '$150 a $350 mil', 'Más de $350 mil', 'Software a medida', 'Prefiero conversarlo']

const steps = [
  ['Completas lo esencial', 'Tipo de proyecto, presupuesto y tu idea. Toma unos 2 minutos.'],
  ['Se abre WhatsApp con tu mensaje', 'Queda redactado y listo. Tú decides si lo envías.'],
  ['Te respondo personalmente', 'Revisamos juntos el alcance, los tiempos y el valor real.'],
]

function ChoiceGroup({ legend, name, options, value, onChange, className }) {
  return (
    <fieldset className="mt-4 md:mt-5">
      <legend className="quote-label">{legend} <b>*</b></legend>
      <div className={`mt-2.5 grid gap-2 ${className}`}>
        {options.map((option) => (
          <label key={option} className={`quote-choice ${value === option ? 'is-selected' : ''}`}>
            <input type="radio" name={name} value={option} required checked={value === option} onChange={() => onChange(option)} />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default function QuoteRequestForm() {
  const [projectType, setProjectType] = useState('')
  const [budget, setBudget] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      'Hola Luis, quiero solicitar una cotización desde tu página web.', '',
      `Nombre: ${data.get('name')}`,
      `Negocio o proyecto: ${data.get('business') || 'No indicado'}`,
      `Tipo de proyecto: ${data.get('projectType')}`,
      `Presupuesto estimado: ${data.get('budget')}`,
      `Detalle: ${data.get('details')}`,
    ].join('\n')
    window.open(`https://wa.me/56922012534?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="cotizacion" className="quote-section px-6 py-8 md:py-11" aria-labelledby="quote-title">
      <div className="quote-shell relative z-10 mx-auto grid max-w-6xl overflow-hidden border border-slate-200/80 bg-white shadow-[0_24px_70px_-40px_rgba(79,70,229,.45)] lg:grid-cols-[.78fr_1.22fr]">
        <div className="quote-aside relative flex flex-col overflow-hidden bg-slate-950 p-5 text-white md:p-8">
          <div className="quote-aside__glow" aria-hidden="true" />
          <div className="relative">
            <p className="text-[11px] font-extrabold uppercase tracking-[.2em] text-cyan-300">Cotización</p>
            <h2 id="quote-title" className="mt-2 font-display text-[1.75rem] font-extrabold sm:mt-3 sm:text-3xl leading-[1.1] tracking-[-.04em] md:text-[2.2rem]">Cuéntame qué quieres <span className="text-brand-300">construir</span></h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">Sin compromiso: con estos datos te puedo orientar desde el primer mensaje.</p>
          </div>

          <ol className="relative mt-7 hidden space-y-5 lg:block">
            {steps.map(([title, text], index) => (
              <li key={title} className="quote-step">
                <span className="quote-step__number">{index + 1}</span>
                <div>
                  <p className="text-sm font-bold text-white">{title}</p>
                  <p className="mt-0.5 text-[13px] leading-relaxed text-slate-400">{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="relative mt-4 flex items-center gap-3 border-t border-white/10 pt-4 lg:mt-auto lg:pt-5">
            <img src="/luis-reyes-retrato-2026.webp" alt="" width="44" height="44" loading="lazy" decoding="async" className="h-11 w-11 flex-none rounded-full border-2 border-brand-400/60 object-cover" />
            <div className="min-w-0">
              <p className="text-sm font-bold text-white">Luis Reyes Castro</p>
              <p className="text-xs text-slate-400">Tus datos no se guardan en el sitio.</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="quote-form p-5 md:p-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <label className="quote-field"><span className="quote-label">Tu nombre <b>*</b></span><input name="name" type="text" autoComplete="name" required placeholder="Ej: Carolina" /></label>
            <label className="quote-field"><span className="quote-label">Negocio o proyecto</span><input name="business" type="text" autoComplete="organization" placeholder="Opcional" /></label>
          </div>

          <ChoiceGroup legend="¿Qué necesitas?" name="projectType" options={projectTypes} value={projectType} onChange={setProjectType} className="grid-cols-2 sm:grid-cols-3" />
          <ChoiceGroup legend="Presupuesto estimado" name="budget" options={budgets} value={budget} onChange={setBudget} className="quote-budgets grid-cols-2 sm:grid-cols-5" />

          <label className="quote-field mt-4 md:mt-5"><span className="quote-label">Cuéntame brevemente tu idea <b>*</b></span><textarea name="details" required rows="3" placeholder="Qué haces, qué quieres lograr y si ya tienes una página o redes sociales…" /></label>

          <button type="submit" className="primary-cta mt-5 inline-flex md:mt-6 min-h-[3.1rem] w-full items-center justify-center gap-2.5 rounded-xl bg-brand-600 px-6 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-brand-700 active:translate-y-0">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Preparar mensaje en WhatsApp
          </button>
          <p className="mt-3 text-center text-xs text-slate-400 lg:hidden">Se abrirá WhatsApp con tu mensaje listo. Tú decides si lo envías.</p>
        </form>
      </div>
    </section>
  )
}
