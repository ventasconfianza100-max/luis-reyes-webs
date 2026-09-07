export default function Hero({ onNavigate }) {
  const whatsapp = 'https://wa.me/56922012534?text=' + encodeURIComponent('Hola Luis, vi tu página y quiero cotizar una web para mi negocio.')
  return (
    <section className="hero-section relative overflow-hidden">
      {/* Imagen a sangre completa en la mitad derecha (desktop) */}
      <div className="hero-visual hidden md:block absolute inset-y-6 right-7 w-[46%] lg:w-[45%] rounded-[1.75rem] overflow-hidden border border-white/60 shadow-[0_32px_90px_-32px_rgba(15,23,42,0.55)]">
        <picture>
          <source srcSet="/hero-workspace.webp" type="image/webp" />
          <img
            src="/hero-workspace.jpg"
            alt="Escritorio de madera con una laptop mostrando un sitio web diseñado por Luis Reyes y un cuaderno con bocetos de wireframe — desarrollo web en Talca"
            width="1200"
            height="900"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </picture>
        {/* Fundido suave solo en el borde izquierdo: el texto se lee sin tapar la imagen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/35 via-transparent to-transparent" />
        <div className="absolute left-5 bottom-5 right-5 rounded-2xl bg-slate-950/82 backdrop-blur-xl border border-white/15 p-4 shadow-lg text-white">
          <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-cyan-300">Diseño con intención</p>
          <p className="mt-1 text-sm font-semibold">Una web que explica, convence y facilita el contacto.</p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-9 md:pt-9 md:pb-10">
        <div className="md:w-[52%] md:pr-8">
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

          {/* Imagen en móvil: a todo el ancho, debajo del texto */}
          <div className="md:hidden mt-7 -mx-6 h-52 overflow-hidden">
            <picture>
              <source srcSet="/hero-workspace.webp" type="image/webp" />
              <img
                src="/hero-workspace.jpg"
                alt="Escritorio de madera con una laptop mostrando un sitio web diseñado por Luis Reyes y un cuaderno con bocetos de wireframe — desarrollo web en Talca"
                width="1200"
                height="900"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>

          {/* Tira de credibilidad */}
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/55 p-3 backdrop-blur-sm max-w-xl">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-200 shadow-sm flex-shrink-0">
              <picture>
                <source srcSet="/profile.webp" type="image/webp" />
                <img
                  src="/profile.jpg"
                  alt="Luis Reyes Castro, desarrollador y diseñador web en Talca"
                  width="48"
                  height="48"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
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
