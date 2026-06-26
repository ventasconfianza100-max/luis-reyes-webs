import Section from './Section'

// Escena cálida tipo escritorio recreada en CSS (sin imágenes pesadas):
// una laptop mostrando un sitio de ejemplo local + cuaderno con wireframe y
// una taza de café. Estética casera y cuidada, identidad morada como acento.
function WorkspaceScene() {
  return (
    <div className="relative">
      {/* Halo morado (identidad) + tono cálido detrás */}
      <div className="absolute -inset-8 bg-gradient-to-tr from-brand-200/40 via-amber-100/30 to-brand-300/20 blur-3xl rounded-[3rem] -z-10" />

      {/* Panel del "escritorio" */}
      <div className="relative rounded-[2rem] border border-stone-200/70 bg-gradient-to-br from-amber-50 via-stone-50 to-brand-50/60 shadow-lift p-6 sm:p-8 overflow-hidden">
        {/* Luz natural superior */}
        <div className="absolute -top-12 -right-8 w-44 h-44 rounded-full bg-white/60 blur-2xl" />
        {/* Veta de madera inferior */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-amber-900/10 to-transparent" />

        {/* Laptop */}
        <div className="relative mx-auto max-w-sm rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
          {/* Pantalla */}
          <div className="rounded-t-xl bg-stone-900 p-2 shadow-lift">
            <div className="rounded-md overflow-hidden bg-[#f7f3ec]">
              {/* Barra del navegador */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-stone-100 border-b border-stone-200">
                <span className="w-2 h-2 rounded-full bg-stone-300" />
                <span className="w-2 h-2 rounded-full bg-stone-300" />
                <span className="w-2 h-2 rounded-full bg-stone-300" />
                <div className="ml-2 flex-1 h-3.5 rounded bg-white/70 border border-stone-200 flex items-center px-2">
                  <span className="text-[7px] text-stone-400">pandebarrio.cl</span>
                </div>
              </div>

              {/* Sitio de ejemplo: panadería local */}
              <div className="p-3.5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-extrabold tracking-wide text-stone-700">PAN DE BARRIO</span>
                  <div className="flex gap-2">
                    {['INICIO', 'PRODUCTOS', 'PEDIDOS'].map((t) => (
                      <span key={t} className="text-[6px] font-semibold text-stone-400">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-3 items-center">
                  <div className="col-span-3">
                    <p className="text-[11px] font-extrabold leading-tight text-stone-800">
                      PAN ARTESANAL HECHO EN TALCA
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="h-1.5 w-full rounded bg-stone-200" />
                      <div className="h-1.5 w-3/4 rounded bg-stone-200" />
                    </div>
                    <div className="mt-2.5 inline-block rounded-md bg-amber-700/90 px-2.5 py-1 text-[7px] font-bold text-amber-50">
                      HACER UN PEDIDO
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="aspect-square rounded-lg bg-gradient-to-br from-amber-200 to-amber-500 flex items-center justify-center shadow-inner">
                      <div className="w-7 h-7 rounded-full bg-amber-800/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Base de la laptop */}
          <div className="h-3 rounded-b-xl bg-gradient-to-b from-stone-300 to-stone-400 mx-[-6px]">
            <div className="mx-auto w-16 h-1 rounded-b-md bg-stone-500/40" />
          </div>
        </div>

        {/* Cuaderno con wireframe */}
        <div className="absolute -bottom-2 left-3 w-28 rotate-[-7deg] rounded-md bg-white shadow-soft border border-stone-200 p-2 hidden sm:block">
          <p className="text-[7px] font-semibold tracking-wide text-stone-400 mb-1.5">PLANIFICACIÓN</p>
          <div className="space-y-1.5">
            <div className="mx-auto h-2.5 w-7 rounded-sm border border-stone-300" />
            <div className="flex justify-center gap-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-3 w-3.5 rounded-sm border border-stone-300" />
              ))}
            </div>
          </div>
        </div>

        {/* Taza de café */}
        <div className="absolute top-6 right-6 hidden sm:block">
          <div className="relative w-7 h-6 rounded-b-2xl rounded-t-sm bg-white border border-stone-200 shadow-soft">
            <div className="absolute -right-2 top-1 w-2.5 h-2.5 rounded-full border-2 border-stone-200" />
            <div className="mt-1 mx-auto w-4 h-1.5 rounded-full bg-amber-800/70" />
          </div>
        </div>
      </div>

      {/* Tarjeta flotante (identidad morada, señal de valor) */}
      <div className="absolute -bottom-5 -right-4 bg-white rounded-xl shadow-lift border border-slate-100 px-4 py-3 hidden sm:flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-brand-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
        </div>
        <div>
          <p className="text-slate-800 font-bold text-sm leading-none">+ Clientes</p>
          <p className="text-slate-400 text-xs mt-1">desde Google</p>
        </div>
      </div>
    </div>
  )
}

export default function Hero({ onNavigate }) {
  return (
    <Section
      width="wide"
      spacing="pt-16 pb-20 md:pt-24 md:pb-28"
      className="relative bg-gradient-to-br from-white via-white to-brand-50/70"
    >
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Columna texto */}
        <div>
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

          {/* Tira de credibilidad */}
          <div className="mt-11 flex items-center gap-4">
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

        {/* Columna visual */}
        <div className="md:pl-6">
          <WorkspaceScene />
        </div>
      </div>
    </Section>
  )
}
