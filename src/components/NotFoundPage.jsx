const shortcuts = [
  ['Ver proyectos', '/proyectos'],
  ['Leer el blog', '/blog'],
  ['Agendar una reunión', '/agenda'],
]

export default function NotFoundPage({ onNavigate }) {
  const go = (event, href) => { event.preventDefault(); onNavigate(href) }

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <section className="max-w-xl text-center">
        <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[.16em] text-brand-700">Error 404</p>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-4">Esta página no existe</h1>
        <p className="mt-5 text-slate-600 leading-relaxed">La dirección puede estar escrita de forma incorrecta o el contenido fue movido.</p>
        <a href="/" onClick={(e) => go(e, '/')} className="inline-flex mt-8 rounded-2xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-10px_rgba(124,58,237,.6)] transition hover:-translate-y-0.5 hover:bg-brand-700">Volver al inicio</a>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {shortcuts.map(([label, href]) => (
            <a key={href} href={href} onClick={(e) => go(e, href)} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700">{label}</a>
          ))}
        </div>
      </section>
    </main>
  )
}
