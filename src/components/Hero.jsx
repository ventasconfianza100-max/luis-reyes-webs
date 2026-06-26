export default function Hero({ onNavigate }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-brand-50/70">
      {/* Imagen a sangre completa en la mitad derecha (desktop) */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-[55%] lg:w-[52%]">
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
        {/* Fundido a la izquierda para que el texto se lea perfecto */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
        {/* Toque cálido/lavanda en el borde inferior */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-50/40 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="md:w-[48%] md:pr-6">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 mb-5">
            Desarrollo web · Talca, Chile
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-slate-900">
            Sitios web que traen{' '}
            <span className="text-brand-600">clientes</span> a tu negocio.
          </h1>

          <p className="mt-7 text-lg text-slate-600 leading-relaxed max-w-xl">
            Soy Luis Reyes Castro. Diseño y programo sitios rápidos, que rankean en
            Google y están pensados para que tu negocio reciba más contactos —
            tiendas online, empresas de servicios y profesionales. Mi formación como
            psicólogo me ayuda a entender a quien decide del otro lado.
          </p>

          {/* Doble CTA */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/agenda"
              onClick={(event) => {
                event.preventDefault()
                onNavigate('/agenda')
              }}
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 rounded-2xl text-sm transition-all shadow-[0_8px_24px_-10px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Agenda una reunión
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

          {/* Imagen en móvil: a todo el ancho, debajo del texto */}
          <div className="md:hidden mt-10 -mx-6">
            <picture>
              <source srcSet="/hero-workspace.webp" type="image/webp" />
              <img
                src="/hero-workspace.jpg"
                alt="Escritorio de madera con una laptop mostrando un sitio web diseñado por Luis Reyes y un cuaderno con bocetos de wireframe — desarrollo web en Talca"
                width="1200"
                height="900"
                loading="eager"
                decoding="async"
                className="w-full object-cover"
              />
            </picture>
          </div>

          {/* Tira de credibilidad */}
          <div className="mt-10 md:mt-11 flex items-center gap-4">
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
        </div>
      </div>
    </section>
  )
}
