export default function Hero({ onNavigate }) {
  const whatsapp = 'https://wa.me/56922012534?text=' + encodeURIComponent('Hola Luis, vi tu página y quiero cotizar una web para mi negocio.')
  return (
    <section className="hero-section relative overflow-hidden">
      <div className="hero-pixel hero-pixel--one" aria-hidden="true" />
      <div className="hero-pixel hero-pixel--two" aria-hidden="true" />

      {/* Imagen de trabajo: comunica el servicio antes de presentar a la persona. */}
      <div className="hero-portrait hidden md:block absolute inset-y-7 right-7 w-[43%] lg:w-[42%] overflow-hidden border border-white/15 shadow-[0_32px_90px_-28px_rgba(2,8,23,0.7)]">
        <picture>
          <source srcSet="/hero-workspace.webp" type="image/webp" />
          <img
            src="/hero-workspace.jpg"
            alt="Escritorio con una laptop mostrando un sitio web diseñado por Luis Reyes"
            width="1000"
            height="750"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-[#06152e]/85 via-transparent to-transparent" />
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 border-t border-white/20 pt-4 text-white">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-cyan-300">Diseño + código + estrategia</p>
            <p className="mt-1 text-sm font-bold">Trabajo directo conmigo, sin intermediarios.</p>
          </div>
          <span className="hidden lg:inline-flex rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold text-emerald-200">Disponible</span>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-9 md:pt-9 md:pb-10">
        <div className="md:w-[55%] md:pr-10">
          <span className="eyebrow inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-brand-700 mb-5">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_0_5px_rgba(34,211,238,.15)]" /> Desarrollo web · Talca, Chile
          </span>

          <h1 className="font-display text-[2.45rem] sm:text-5xl lg:text-[3.15rem] font-extrabold tracking-[-0.045em] leading-[1.05] text-slate-950">
            Páginas web que hacen ver <span className="text-gradient">mejor a tu negocio</span>
          </h1>

          <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-xl">
            Diseño sitios rápidos, administrables y preparados para Google, adaptados a cómo vendes: por WhatsApp, agenda, cotizaciones o tienda online.
          </p>

          {/* Doble CTA */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="whatsapp_click_home"
              className="primary-cta inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 rounded-2xl text-sm transition-all shadow-[0_12px_30px_-12px_rgba(109,40,217,0.75)] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Cotizar por WhatsApp
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="/proyectos"
              onClick={(event) => {
                event.preventDefault()
                onNavigate('/proyectos')
              }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-slate-200/80 text-slate-700 font-semibold px-7 py-3.5 rounded-2xl text-sm transition-all hover:border-brand-300 hover:text-brand-700 hover:bg-white hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Ver proyectos
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-500">
            {['Atención directa', '100% adaptable', 'Primera reunión gratis'].map((item) => <span key={item} className="inline-flex items-center gap-1.5"><span className="text-emerald-500">✓</span>{item}</span>)}
          </div>

          {/* En móvil la imagen mantiene contexto sin desplazar los CTA. */}
          <div className="hero-portrait md:hidden mt-7 h-[21rem] overflow-hidden border border-white/15 shadow-[0_24px_60px_-28px_rgba(2,8,23,.75)]">
            <picture>
              <source srcSet="/hero-workspace.webp" type="image/webp" />
              <img
                src="/hero-workspace.jpg"
                alt="Escritorio con una laptop mostrando un sitio web diseñado por Luis Reyes"
                width="1000"
                height="750"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute inset-x-4 bottom-4 border-t border-white/20 pt-3 text-white">
              <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-cyan-300">Diseño + código + estrategia</p>
              <p className="mt-1 text-xs font-bold">Trabajo directo conmigo, sin intermediarios.</p>
            </div>
          </div>

          {/* Tira de credibilidad */}
          <div className="hero-signature mt-6 flex items-center gap-3 border border-white/80 bg-white/65 p-3 backdrop-blur-sm max-w-xl">
            <div className="hero-signature-mark flex-shrink-0" aria-hidden="true">LR</div>
            <div>
              <p className="text-sm text-slate-800 font-semibold leading-tight">
                Luis Reyes Castro · Desarrollo web para negocios y profesionales
              </p>
              <p className="text-sm text-slate-500 mt-0.5">
                Talca, Región del Maule · Atención directa, sin intermediarios
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
            {['Web para profesionales', 'Catálogos y tiendas', 'Empresas de servicios'].map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 shadow-sm">{item}</span>
            ))}
          </div>
          <a href="/diagnostico-web" onClick={(event) => { event.preventDefault(); onNavigate('/diagnostico-web') }} className="inline-flex mt-3 text-sm font-semibold text-brand-700 hover:text-brand-800">¿No sabes qué necesitas? Haz el diagnóstico web →</a>
        </div>
      </div>
    </section>
  )
}
