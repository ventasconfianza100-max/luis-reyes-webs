import Navbar from './Navbar'
import Footer from './Footer'
import Section from './Section'
import ProjectProof from './ProjectProof'
import ClosingCta from './ClosingCta'
import { portfolioProjects } from '../portfolioProjects'
import { talcaFaq } from '../seo'

const WHATSAPP = 'https://wa.me/56922012534?text=' +
  encodeURIComponent('Hola Luis, quiero una página web para mi negocio en Talca. ¿Cómo avanzamos?')

const paraQuien = [
  {
    title: 'Tiendas y negocios con productos',
    text: 'Catálogo o tienda online para vender en Talca y despachar a todo Chile, con consulta directa por WhatsApp.',
  },
  {
    title: 'Empresas de servicios',
    text: 'Fumigación, mantención, salud, educación, servicios técnicos: webs que explican lo que haces y reciben cotizaciones.',
  },
  {
    title: 'Profesionales independientes',
    text: 'Consultores, especialistas, técnicos y oficios que necesitan transmitir confianza y facilitar el contacto.',
  },
]

const incluye = [
  'Diseño que se ve bien en el celular (donde te ven la mayoría)',
  'Optimización para Google: títulos, velocidad y estructura',
  'Botón de WhatsApp y formas de contacto directas',
  'Dominio y publicación configurados',
  'Acompañamiento después de la entrega',
]

const proyectosMaule = ['trabalengua', '7ma-control', 'escuela-rdlf', 'cuchillos-bravo', 'rz-jugueteria']

const planes = [
  { name: 'Esencial', price: '$90.000', text: 'Página de una sección con WhatsApp, formulario de contacto y SEO básico.' },
  { name: 'Profesional', price: '$190.000', text: 'Sitio de 3 a 4 secciones con SEO local y configuración de tu ficha de Google Business.' },
  { name: 'Premium', price: '$320.000', text: 'Sitio de varias páginas con SEO avanzado, integraciones y 1 mes de mejoras incluidas.' },
]

const comunas = ['Talca', 'Maule', 'San Clemente', 'Pencahue', 'Curicó', 'Linares', 'Constitución', 'San Javier', 'Molina', 'Cauquenes']

export default function DisenoWebTalcaPage({ onNavigate }) {
  const go = (event, href) => {
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <>
      <Navbar onNavigate={onNavigate} />

      <main>
        {/* Encabezado */}
        <Section width="wide" spacing="pt-10 pb-9 md:pt-12 md:pb-11" className="page-hero bg-gradient-to-br from-white via-white to-brand-50/70">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-12">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 mb-4">
                Diseño web · Talca, Región del Maule
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
                Diseño web en <span className="text-brand-600">Talca</span>: páginas web que traen clientes
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Soy Luis Reyes Castro, desarrollador web en Talca. Si buscas una página web en Talca
                para tu negocio, hago sitios rápidos y bien posicionados para tiendas, empresas de
                servicios y profesionales que quieren que los encuentren en Google y reciban más clientes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/agenda"
                  onClick={(e) => go(e, '/agenda')}
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 rounded-2xl text-sm transition-all shadow-[0_8px_24px_-10px_rgba(124,58,237,0.6)] hover:-translate-y-0.5"
                >
                  Agenda una reunión
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-slate-200/80 text-slate-700 font-semibold px-7 py-3.5 rounded-2xl text-sm transition-all hover:border-brand-300 hover:text-brand-700 hover:bg-white hover:-translate-y-0.5"
                >
                  Escríbeme por WhatsApp
                </a>
              </div>
            </div>
            <ProjectProof name="7ma Control" label="Proyecto real en el Maule" />
          </div>
        </Section>

        {/* Para quién */}
        <Section>
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Páginas web para negocios de Talca
            </h2>
            <p className="mt-3 text-slate-500 leading-relaxed">
              Cada negocio necesita un tipo de web distinto. Adapto la estructura y los textos a lo
              que vendes y a cómo te buscan tus clientes en la zona.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paraQuien.map((p) => (
              <div key={p.title} className="rounded-3xl bg-white border border-slate-100 shadow-soft p-6">
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Qué incluye */}
        <Section className="bg-gradient-to-b from-amber-50/40 via-white to-white">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Pensada para aparecer en Google
              </h2>
              <p className="text-slate-600 leading-relaxed">
                No basta con tener una web bonita: tiene que cargar rápido y estar bien armada para
                que Google la entienda y la muestre cuando alguien busca lo que ofreces en Talca.
                Eso viene cuidado desde el primer día, no como un agregado al final.
              </p>
              <a
                href="/proyectos"
                onClick={(e) => go(e, '/proyectos')}
                className="mt-6 inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:translate-x-1 transition-transform"
              >
                Ver el tipo de trabajo que hago
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <p className="mt-7 text-xs font-bold uppercase tracking-[.16em] text-slate-400">También te puede servir</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  ['Catálogo con WhatsApp', '/catalogo-online-con-whatsapp'],
                  ['SEO local en Talca', '/seo-local-talca'],
                  ['Páginas web para pymes', '/paginas-web-pymes-chile'],
                  ['Tienda online', '/tienda-online-chile'],
                ].map(([label, href]) => (
                  <a key={href} href={href} onClick={(e) => go(e, href)} className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700">
                    {label} <span aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
            <ul className="space-y-3">
              {incluye.map((item) => (
                <li key={item} className="flex gap-3 items-start bg-white rounded-2xl border border-slate-100 shadow-sm px-5 py-3.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-slate-700 text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Proyectos de la zona */}
        <Section>
          <div className="max-w-2xl mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Páginas web hechas en Talca y el Maule
            </h2>
            <p className="mt-3 text-slate-500 leading-relaxed">
              Negocios reales de la región que ya tienen su web funcionando. Entra a cada uno para ver qué se hizo.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {portfolioProjects.filter((p) => proyectosMaule.includes(p.slug)).map((p) => (
              <a key={p.slug} href={`/proyectos/${p.slug}`} onClick={(e) => go(e, `/proyectos/${p.slug}`)} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-brand-300">
                <img src={p.image} alt={p.alt} width="1200" height="833" loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover object-top" />
                <span className="block p-3.5"><strong className="block text-sm text-slate-900">{p.name}</strong><span className="text-xs text-slate-500">{p.type}</span></span>
              </a>
            ))}
          </div>
        </Section>

        {/* Precios */}
        <Section>
          <div className="max-w-2xl mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              ¿Cuánto cuesta una página web en Talca?
            </h2>
            <p className="mt-3 text-slate-500 leading-relaxed">
              Tres planes claros, sin letra chica. En una reunión gratuita vemos cuál le conviene a tu negocio.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {planes.map((plan) => (
              <div key={plan.name} className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[.14em] text-brand-600">{plan.name}</p>
                <p className="mt-2 font-display text-3xl font-extrabold text-slate-950">{plan.price}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{plan.text}</p>
              </div>
            ))}
          </div>
          <a href="/#planes" className="mt-5 inline-flex text-sm font-semibold text-brand-600">Ver qué incluye cada plan →</a>
        </Section>

        {/* Preguntas frecuentes */}
        <Section>
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Preguntas sobre tu página web en Talca
              </h2>
              <p className="mt-3 text-slate-500 leading-relaxed">Trabajo con negocios de toda la Región del Maule:</p>
              <p className="mt-3 flex flex-wrap gap-2">
                {comunas.map((c) => <span key={c} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">{c}</span>)}
              </p>
            </div>
            <div className="space-y-3">
              {talcaFaq.map((item) => (
                <details key={item.q} className="group rounded-2xl border border-slate-200 bg-white p-5">
                  <summary className="cursor-pointer list-none font-semibold text-slate-900">{item.q}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        <ClosingCta
          title="¿Tienes un negocio en Talca y aún no tienes web?"
          text="Conversemos sin compromiso. Te digo qué tipo de página te conviene y cuánto costaría, sin tecnicismos ni letra chica."
          whatsapp={WHATSAPP}
          onNavigate={onNavigate}
        />
      </main>

      <Footer onNavigate={onNavigate} />
    </>
  )
}
