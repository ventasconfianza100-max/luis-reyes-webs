import { useState } from 'react'

const budgets = ['Menos de $500.000', 'Entre $500.000 y $1.000.000', 'Entre $1.000.000 y $2.000.000', 'Más de $2.000.000', 'Prefiero conversarlo']
const projectTypes = ['Página web profesional', 'Tienda o catálogo online', 'Web para empresa de servicios', 'Software o aplicación a medida', 'Mejorar una página existente', 'Aún no estoy seguro']

export default function QuoteRequestForm() {
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
    <section id="cotizacion" className="quote-section px-6 py-12 md:py-16" aria-labelledby="quote-title">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_24px_70px_-40px_rgba(79,70,229,.45)] lg:grid-cols-[.78fr_1.22fr]">
        <div className="relative overflow-hidden bg-slate-950 p-7 text-white md:p-9">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-600/30 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-brand-300">Cuéntame tu idea</p>
            <h2 id="quote-title" className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">Solicita una cotización clara y sin compromiso.</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">Completa los datos esenciales. Se preparará un mensaje en WhatsApp para que revisemos juntos el alcance, los tiempos y el valor real de tu proyecto.</p>
            <div className="mt-7 space-y-3 text-sm">
              {['Respuesta directa de Luis', 'Orientación según tu presupuesto', 'Tus datos no quedan almacenados'].map((item) => (
                <p key={item} className="flex items-center gap-3"><span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-emerald-400/15 text-xs text-emerald-300">✓</span><span className="text-slate-200">{item}</span></p>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="quote-form p-6 md:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="quote-field"><span>Tu nombre <b>*</b></span><input name="name" type="text" autoComplete="name" required placeholder="¿Cómo te llamas?" /></label>
            <label className="quote-field"><span>Negocio o proyecto</span><input name="business" type="text" autoComplete="organization" placeholder="Nombre de tu negocio" /></label>
          </div>

          <label className="quote-field mt-5"><span>¿Qué necesitas? <b>*</b></span><select name="projectType" required defaultValue=""><option value="" disabled>Selecciona una opción</option>{projectTypes.map((option) => <option key={option}>{option}</option>)}</select></label>

          <fieldset className="mt-5">
            <legend className="text-sm font-bold text-slate-800">Presupuesto estimado <b className="text-brand-600">*</b></legend>
            <p className="mt-1 text-xs text-slate-500">Esto me permite recomendarte una solución realista desde el comienzo.</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {budgets.map((option) => (
                <label key={option} className={`quote-budget ${budget === option ? 'is-selected' : ''}`}>
                  <input type="radio" name="budget" value={option} required checked={budget === option} onChange={() => setBudget(option)} />
                  <span className="quote-radio" aria-hidden="true" /><span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="quote-field mt-5"><span>Cuéntame brevemente tu idea <b>*</b></span><textarea name="details" required rows="4" placeholder="Qué haces, qué quieres lograr y si ya tienes una página o redes sociales…" /></label>
          <button type="submit" className="primary-cta mt-6 inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-brand-900/20 transition hover:-translate-y-0.5 hover:bg-brand-700 active:translate-y-0">
            Preparar solicitud por WhatsApp
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </button>
          <p className="mt-3 text-center text-[11px] leading-relaxed text-slate-400">Al continuar se abrirá WhatsApp con tu solicitud lista. Tú decides si la envías.</p>
        </form>
      </div>
    </section>
  )
}
