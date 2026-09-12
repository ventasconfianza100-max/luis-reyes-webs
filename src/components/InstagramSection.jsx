import Section from './Section'

const INSTAGRAM_URL = 'https://www.instagram.com/luisreyesweb.cl/'

export default function InstagramSection() {
  return (
    <Section id="instagram" className="instagram-section decor-section decor-instagram">
      <div className="grid items-center gap-7 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-bold uppercase tracking-[.16em] text-pink-600">Instagram</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-slate-950 md:text-4xl">Ideas, proyectos y avances en vivo</h2>
          <p className="mt-4 max-w-lg leading-relaxed text-slate-600">En <strong className="text-slate-900">@luisreyesweb.cl</strong> comparto procesos, decisiones de diseño y nuevas páginas para negocios y profesionales.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-pink-600 to-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-pink-900/15 transition-transform hover:-translate-y-0.5">
              Ver perfil en Instagram <span aria-hidden="true">↗</span>
            </a>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Perfil vinculado</span>
          </div>
        </div>

        <div className="instagram-frame relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-2 shadow-lift">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
          <iframe
            src="https://www.instagram.com/luisreyesweb.cl/embed"
            title="Publicaciones de Luis Reyes Web en Instagram"
            loading="lazy"
            allowtransparency="true"
            className="h-[510px] w-full rounded-2xl border-0 bg-white"
          />
          <noscript><a href={INSTAGRAM_URL}>Ver publicaciones de Luis Reyes Web en Instagram</a></noscript>
        </div>
      </div>
    </Section>
  )
}
