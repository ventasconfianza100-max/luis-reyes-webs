import Navbar from './Navbar'
import Footer from './Footer'
import Section from './Section'
import ClosingCta from './ClosingCta'
import { portfolioProjects } from '../portfolioProjects'
import { rubroByPath, rubrosTalca } from '../rubrosTalca'

export default function RubroTalcaPage({ path, onNavigate }) {
  const rubro = rubroByPath[path]
  const projects = portfolioProjects.filter((p) => rubro.projects.includes(p.slug))
  const others = rubrosTalca.filter((r) => r.path !== path)
  const whatsapp = `https://wa.me/56922012534?text=${encodeURIComponent(`Hola Luis, quiero una página web para mi ${rubro.label.toLowerCase()} en Talca.`)}`
  const go = (event, href) => { event.preventDefault(); onNavigate(href) }

  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <main>
        <Section width="wide" spacing="pt-10 pb-10 md:pt-12 md:pb-12" className="page-hero">
          <nav aria-label="Migas de pan" className="mb-5 flex flex-wrap items-center gap-2 text-sm"><a href="/" onClick={(e) => go(e, '/')} className="font-semibold text-brand-700">Inicio</a><span className="text-slate-300">/</span><a href="/diseno-web-talca" onClick={(e) => go(e, '/diseno-web-talca')} className="font-semibold text-brand-700">Diseño web en Talca</a><span className="text-slate-300">/</span><span className="text-slate-500">{rubro.label}</span></nav>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{rubro.eyebrow}</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.08] text-slate-900">{rubro.h1}</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{rubro.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white">Cotizar por WhatsApp →</a>
              <a href="/agenda" onClick={(e) => go(e, '/agenda')} className="inline-flex items-center rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700">Agenda una reunión gratis</a>
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Lo que suele pasar sin una buena web</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {rubro.problems.map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid items-start gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900">Qué incluye tu página</h2>
              <ul className="mt-6 space-y-3">
                {rubro.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm text-slate-700"><span className="text-brand-600">✓</span>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900">{projects.length > 1 ? 'Proyectos reales del rubro' : 'Un proyecto real del rubro'}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {projects.map((p) => (
                  <a key={p.slug} href={`/proyectos/${p.slug}`} onClick={(e) => go(e, `/proyectos/${p.slug}`)} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-brand-300">
                    <img src={p.image} alt={p.alt} width="1200" height="833" loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover object-top" />
                    <span className="block p-4"><strong className="block text-slate-900">{p.name}</strong><span className="mt-1 block text-sm text-slate-500">{p.summary}</span><span className="mt-2 inline-block text-sm font-semibold text-brand-600">Ver qué se hizo →</span></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900">Preguntas frecuentes</h2>
              <p className="mt-3 text-slate-600">¿Buscas otro tipo de página? Mira <a href="/diseno-web-talca" onClick={(e) => go(e, '/diseno-web-talca')} className="font-semibold text-brand-700 underline underline-offset-2">diseño web en Talca</a> o estos rubros:</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {others.map((r) => <a key={r.path} href={r.path} onClick={(e) => go(e, r.path)} className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-brand-300">{r.label} →</a>)}
              </div>
            </div>
            <div className="space-y-3">
              {rubro.faq.map((item) => (
                <details key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <summary className="cursor-pointer list-none font-semibold text-slate-900">{item.q}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        <ClosingCta title="Conversemos sobre tu página" text="Te digo qué necesita tu negocio y cuánto costaría, sin compromiso y sin tecnicismos." whatsapp={whatsapp} onNavigate={onNavigate} />
      </main>
      <Footer onNavigate={onNavigate} />
    </>
  )
}
