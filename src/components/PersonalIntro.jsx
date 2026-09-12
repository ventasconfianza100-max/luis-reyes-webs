export default function PersonalIntro({ onNavigate }) {
  const whatsapp = 'https://wa.me/56922012534?text=' + encodeURIComponent('Hola Luis, vi tu página y quiero conversar sobre mi proyecto web.')

  return (
    <section className="personal-intro-section decor-home-section px-6 py-12 md:py-16" aria-labelledby="personal-intro-title">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[.82fr_1.18fr] md:gap-12">
        <div className="relative mx-auto w-full max-w-[21rem]">
          <div className="absolute -inset-3 -z-10 rotate-3 rounded-[2rem] bg-gradient-to-br from-brand-200/70 to-cyan-100/70" aria-hidden="true" />
          <div className="relative aspect-[4/4.35] overflow-hidden rounded-[1.7rem] border-4 border-white bg-slate-100 shadow-[0_24px_60px_-28px_rgba(79,70,229,.55)]">
            <img src="/luis-reyes-retrato-2026.webp" alt="Retrato de Luis Reyes Castro, diseñador y desarrollador web en Talca" width="420" height="457" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/20 bg-slate-950/82 px-4 py-3 text-left text-white shadow-lg backdrop-blur-md">
              <p className="text-sm font-bold">Luis Reyes Castro</p>
              <p className="mt-0.5 text-[11px] font-medium text-slate-300">Psicólogo · Diseñador y desarrollador web</p>
            </div>
          </div>
          <div className="absolute -right-2 top-5 flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-3 py-2 text-[11px] font-bold text-slate-700 shadow-lg md:-right-7">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" /> Atención directa
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-[.18em] text-brand-600">La persona detrás de cada proyecto</p>
          <h2 id="personal-intro-title" className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
            Tu página la trabajo yo, de principio a fin.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Soy <strong className="font-semibold text-slate-900">Luis Reyes Castro</strong>, psicólogo y desarrollador web en Talca. Combino tecnología con una mirada centrada en las personas para crear sitios claros, confiables y fáciles de usar.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Trabajamos directamente, sin intermediarios: escucho tu idea, te explico cada decisión con palabras simples y continúo disponible después de publicar.
          </p>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-3">
            {['Comunicación clara', 'Proceso personalizado', 'Soporte posterior'].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-3 py-2.5 text-xs font-bold text-slate-700 shadow-sm">
                <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-emerald-50 text-emerald-600" aria-hidden="true">✓</span>{item}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="/sobre-luis" onClick={(event) => { event.preventDefault(); onNavigate('/sobre-luis') }} className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-brand-700">
              Conoce más sobre mí
            </a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-brand-200 bg-brand-50/70 px-5 py-3 text-sm font-bold text-brand-700 transition hover:-translate-y-0.5 hover:bg-brand-100">
              Hablemos de tu proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
