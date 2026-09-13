import { portfolioProjects } from '../portfolioProjects'

// Capturas con fotografía al centro: se reconocen mejor en miniatura.
const proofProjects = ['Munay Cueros Chile', 'Cuchillos Bravo', 'Psicóloga Andrea Martínez'].map((name) => portfolioProjects.find((project) => project.name === name))

export default function Hero({ onNavigate }) {
  const whatsapp = 'https://wa.me/56922012534?text=' + encodeURIComponent('Hola Luis, vi tu página y quiero cotizar una web para mi negocio.')
  return (
    <section className="hero-section relative overflow-hidden">
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
          <span className="eyebrow inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-brand-700 mb-3 sm:mb-5">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_0_5px_rgba(34,211,238,.15)]" /> Desarrollo web · Talca, Chile
          </span>

          <h1 className="font-display text-[2.45rem] sm:text-5xl lg:text-[3.15rem] font-extrabold tracking-[-0.045em] leading-[1.05] text-slate-950">
            Páginas web que hacen ver <span className="text-gradient">mejor a tu negocio</span>
          </h1>

          <p className="mt-3 sm:mt-5 text-base text-slate-600 leading-relaxed max-w-xl">
            Diseño sitios rápidos, administrables y preparados para Google, adaptados a cómo vendes: por WhatsApp, agenda, cotizaciones o tienda online.
          </p>

          {/* Doble CTA */}
          <div className="mt-5 flex gap-2 sm:mt-6 sm:flex-wrap sm:gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="whatsapp_click_home"
              className="primary-cta inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap sm:flex-none bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 rounded-2xl text-[13px] sm:text-sm transition-all shadow-[0_12px_30px_-12px_rgba(109,40,217,0.75)] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Cotizar por WhatsApp
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="hidden w-4 h-4 sm:block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="/proyectos"
              onClick={(event) => {
                event.preventDefault()
                onNavigate('/proyectos')
              }}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-white/80 backdrop-blur border border-slate-200/80 text-slate-700 font-semibold px-7 py-3.5 rounded-2xl text-[13px] sm:text-sm transition-all hover:border-brand-300 hover:text-brand-700 hover:bg-white hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Ver proyectos
            </a>
          </div>

          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-semibold sm:mt-4 sm:gap-x-5 sm:gap-y-2 sm:text-xs text-slate-500">
            {['Atención directa', '100% adaptable', 'Primera reunión gratis'].map((item) => <span key={item} className="inline-flex items-center gap-1.5"><span className="text-emerald-500">✓</span>{item}</span>)}
          </div>

          {/* En móvil la imagen mantiene contexto sin desplazar los CTA. */}
          <div className="hero-portrait md:hidden mt-5 aspect-[16/10] overflow-hidden border border-white/15 shadow-[0_24px_60px_-28px_rgba(2,8,23,.75)]">
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#06152e]/90 via-[#06152e]/20 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 border-t border-white/20 pt-3 text-white">
              <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-cyan-300">Diseño + código + estrategia</p>
              <p className="mt-1 text-xs font-bold">Trabajo directo conmigo, sin intermediarios.</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2.5 sm:mt-6">
            <a href="/proyectos" onClick={(event) => { event.preventDefault(); onNavigate('/proyectos') }} className="group inline-flex items-center gap-3 rounded-2xl border border-white/80 bg-white/70 py-2 pl-2 pr-4 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand-200">
              <span className="flex -space-x-3" aria-hidden="true">
                {proofProjects.map((project) => (
                  <img key={project.name} src={project.image} alt="" width="40" height="40" loading="eager" decoding="async" className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm" />
                ))}
              </span>
              <span className="text-left leading-tight">
                <span className="block text-sm font-bold text-slate-900">{portfolioProjects.length} sitios reales publicados</span>
                <span className="block text-xs font-semibold text-brand-700 transition group-hover:text-brand-800">Ver portafolio →</span>
              </span>
            </a>
            <a href="/diagnostico-web" onClick={(event) => { event.preventDefault(); onNavigate('/diagnostico-web') }} className="text-sm font-semibold text-slate-600 underline decoration-brand-300 decoration-2 underline-offset-4 transition hover:text-brand-700">¿No sabes qué necesitas? Haz el diagnóstico</a>
          </div>
        </div>
      </div>
    </section>
  )
}
