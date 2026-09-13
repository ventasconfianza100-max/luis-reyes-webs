import Section from './Section'

const INSTAGRAM_URL = 'https://www.instagram.com/luisreyesweb.cl/'

export default function InstagramSection() {
  return (
    <Section id="instagram" className="instagram-section">
      <div className="grid items-center gap-5 md:gap-7 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-bold uppercase tracking-[.16em] text-pink-600">Instagram</span>
          <h2 className="mt-3 font-display md:mt-4 text-3xl font-bold text-slate-950 md:text-4xl">Ideas, proyectos y avances en vivo</h2>
          <p className="mt-3 max-w-lg md:mt-4 leading-relaxed text-slate-600">En <strong className="text-slate-900">@luisreyesweb.cl</strong> comparto procesos, decisiones de diseño y nuevas páginas para negocios y profesionales.</p>
          <div className="mt-4 flex flex-wrap gap-3 md:mt-6">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-pink-600 to-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-pink-900/15 transition-transform hover:-translate-y-0.5">
              Ver perfil en Instagram <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="instagram-frame relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-2 shadow-lift">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 pb-3 pt-2 sm:px-4">
            <span className="flex-none rounded-full bg-gradient-to-tr from-orange-400 via-pink-500 to-fuchsia-600 p-[2px]">
              <img src="/luis-reyes-retrato-2026.webp" alt="" width="44" height="44" loading="lazy" decoding="async" className="h-11 w-11 rounded-full border-2 border-white object-cover" />
            </span>
            <span className="min-w-0 flex-1">
              <strong className="block truncate text-sm text-slate-900">@luisreyesweb.cl</strong>
              <span className="block truncate text-xs text-slate-500">Luis Reyes · Páginas web</span>
            </span>
            <span className="flex-none rounded-xl bg-slate-950 px-3.5 py-2 text-xs font-bold text-white transition hover:bg-pink-600">Seguir</span>
          </a>
          <div className="instagram-feed overflow-hidden rounded-2xl bg-white">
            <iframe
              src="https://www.instagram.com/luisreyesweb.cl/embed"
              title="Publicaciones de Luis Reyes Web en Instagram"
              loading="lazy"
              allowtransparency="true"
              className="block w-full border-0 bg-white"
            />
          </div>
          <noscript><a href={INSTAGRAM_URL}>Ver publicaciones de Luis Reyes Web en Instagram</a></noscript>
        </div>
      </div>
    </Section>
  )
}
