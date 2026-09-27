import Section from './Section'

const INSTAGRAM_URL = 'https://www.instagram.com/luisreyesweb.cl/'
const INSTAGRAM_DM = 'https://ig.me/m/luisreyesweb.cl'

const topics = [
  { title: 'Procesos reales', text: 'Cómo nace una página, de la idea al sitio publicado.' },
  { title: 'Antes y después', text: 'Cambios concretos en webs de negocios reales.' },
  { title: 'Consejos simples', text: 'Ideas prácticas para vender más con tu web.' },
]

function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function InstagramSection() {
  return (
    <Section id="instagram" className="instagram-section">
      <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <span className="ig-badge inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-bold uppercase tracking-[.16em] text-pink-600">
            <InstagramIcon className="h-3.5 w-3.5" /> Instagram
          </span>
          <h2 className="mt-3 font-display md:mt-4 text-3xl font-bold text-slate-950 md:text-4xl">Mira cómo trabajo, <span className="ig-gradient-text">día a día</span></h2>
          <p className="mt-3 max-w-lg md:mt-4 leading-relaxed text-slate-600">En <strong className="text-slate-900">@luisreyesweb.cl</strong> muestro los proyectos mientras se construyen, con ideas que puedes aplicar a tu propio negocio.</p>

          <ul className="mt-5 grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {topics.map((topic) => (
              <li key={topic.title} className="ig-topic rounded-2xl border border-slate-200 bg-white p-3.5">
                <strong className="block text-sm text-slate-900">{topic.title}</strong>
                <span className="mt-1 block text-xs leading-relaxed text-slate-500">{topic.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" data-analytics="instagram_follow" className="ig-button inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
              <InstagramIcon className="h-4 w-4" /> Seguir en Instagram
            </a>
            <a href={INSTAGRAM_DM} target="_blank" rel="noopener noreferrer" data-analytics="instagram_dm" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-pink-300 hover:text-pink-600">
              Escríbeme por DM <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="ig-stage relative">
          <div className="ig-glow" aria-hidden="true" />
          <div className="instagram-frame ig-frame relative overflow-hidden rounded-[1.75rem] bg-white p-2">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 pb-3 pt-2 sm:px-4">
              <span className="ig-story-ring flex-none rounded-full p-[2px]">
                <img src="/luis-reyes-retrato-2026.webp" alt="" width="44" height="44" loading="lazy" decoding="async" className="h-11 w-11 rounded-full border-2 border-white object-cover" />
              </span>
              <span className="min-w-0 flex-1">
                <strong className="block truncate text-sm text-slate-900">@luisreyesweb.cl</strong>
                <span className="block truncate text-xs text-slate-500">Luis Reyes · Páginas web</span>
              </span>
              <span className="ig-button flex-none rounded-xl px-3.5 py-2 text-xs font-bold text-white">Seguir</span>
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
      </div>
    </Section>
  )
}
