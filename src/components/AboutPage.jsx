import Navbar from './Navbar'
import Footer from './Footer'
import Section from './Section'
import ClosingCta from './ClosingCta'
import { portfolioProjects } from '../portfolioProjects'

const principles = [
  ['Claridad antes que adorno', 'Primero ordenamos la oferta, el público y la acción que quieres que realice la visita.'],
  ['Diseño con propósito', 'Cada sección debe responder una duda, demostrar algo o acercar el contacto.'],
  ['Trabajo directo', 'Hablas conmigo durante el proceso, sin capas innecesarias entre tu negocio y quien construye la web.'],
]

const facts = [
  [String(portfolioProjects.length), 'proyectos reales publicados'],
  ['Talca', 'con clientes en todo Chile'],
  ['1 a 1', 'sin agencias ni intermediarios'],
]

const services = [
  ['Diseño web en Talca', '/diseno-web-talca', 'Páginas para negocios, profesionales y empresas de la Región del Maule.'],
  ['Tiendas online', '/tienda-online-chile', 'Catálogos y tiendas con carrito, stock y pago o pedido por WhatsApp.'],
  ['Software a medida', '/desarrollo-software-aplicaciones', 'Sistemas de gestión, portales y herramientas internas para tu negocio.'],
  ['SEO local', '/seo-local-talca', 'Para que te encuentren en Google cuando buscan lo que ofreces en tu zona.'],
]

const whatsapp = `https://wa.me/56922012534?text=${encodeURIComponent('Hola Luis, leí sobre ti y quiero conversar sobre mi proyecto web.')}`

export default function AboutPage({ onNavigate }) {
  const go = (event, href) => { event.preventDefault(); onNavigate(href) }

  return <><Navbar onNavigate={onNavigate} /><main>
    <section className="page-hero px-6 py-12 md:py-16 bg-gradient-to-br from-white via-white to-brand-50/70"><div className="max-w-5xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-9 items-center">
      <div className="relative mx-auto w-60 md:w-72">
        <div className="absolute -inset-3 -z-10 rotate-3 rounded-[2.4rem] bg-gradient-to-br from-brand-200/70 to-cyan-100/70" aria-hidden="true" />
        <div className="aspect-square overflow-hidden rounded-[2rem] border-4 border-white bg-slate-100 shadow-[0_24px_60px_-28px_rgba(79,70,229,.55)]"><img src="/luis-reyes-retrato-2026.webp" alt="Retrato de Luis Reyes Castro, diseñador y desarrollador web en Talca" width="320" height="320" className="w-full h-full object-cover" /></div>
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Sobre Luis</p>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-3">Diseño webs pensando en las personas que deben decidir.</h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">Soy Luis Reyes Castro, psicólogo y desarrollador web. Esa combinación me ayuda a trabajar la claridad, la confianza y el camino que sigue una persona antes de escribir, agendar o comprar.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/diagnostico-web" onClick={(e) => go(e, '/diagnostico-web')} className="inline-flex rounded-2xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-10px_rgba(124,58,237,.6)] transition hover:-translate-y-0.5 hover:bg-brand-700">Cuéntame qué necesitas</a>
          <a href="/proyectos" onClick={(e) => go(e, '/proyectos')} className="inline-flex rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700">Ver proyectos</a>
        </div>
      </div>
    </div></section>

    <Section spacing="py-10 md:py-12">
      <div className="grid gap-3 rounded-3xl border border-slate-100 bg-white p-3 shadow-soft sm:grid-cols-3">
        {facts.map(([value, label]) => (
          <div key={label} className="rounded-2xl bg-slate-50/80 px-5 py-5 text-center">
            <p className="font-display text-3xl font-extrabold tracking-tight text-slate-900">{value}</p>
            <p className="mt-1 text-sm text-slate-500">{label}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section spacing="pb-11 md:pb-14">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Mi historia</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">De la psicología al diseño web</h2>
          <div className="mt-5 space-y-4 leading-relaxed text-slate-600">
            <p>Soy psicólogo titulado de la Universidad de Talca. En la psicología aprendí algo que hoy aplico en cada página: las personas deciden cuando entienden rápido, sienten confianza y saben cuál es el siguiente paso.</p>
            <p>Con el tiempo empecé a diseñar y programar sitios web, primero para colegas y luego para negocios de Talca y otras ciudades de Chile. Hoy trabajo de forma independiente como diseñador y desarrollador web y de software, desde Talca, con clientes de distintos rubros: tiendas, empresas de servicios, escuelas deportivas y profesionales de la salud.</p>
            <p>No uso plantillas ni plataformas con mensualidad. Cada sitio se construye a la medida del negocio, pensando en cómo lo buscan sus clientes en Google y en qué necesitan ver antes de escribir por WhatsApp o comprar.</p>
            <p>Trabajo directamente con cada cliente, sin intermediarios: tú hablas conmigo desde la primera reunión hasta la publicación, y también después, cuando necesitas ajustes o quieres seguir creciendo.</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">En qué te puedo ayudar</p>
          <ul className="mt-4 space-y-3">
            {services.map(([label, href, text]) => (
              <li key={href}><a href={href} onClick={(e) => go(e, href)} className="block rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-brand-300"><strong className="block text-slate-900">{label} <span aria-hidden="true">→</span></strong><span className="mt-1 block text-sm text-slate-500">{text}</span></a></li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    <Section spacing="pb-11 md:pb-14">
      <div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Cómo trabajo</p><h2 className="mt-2 font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Tres principios en cada proyecto</h2></div>
      <div className="mt-8 grid md:grid-cols-3 gap-5">
        {principles.map(([title, text], index) => (
          <article key={title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft"><p className="text-xs font-bold text-brand-600">0{index + 1}</p><h3 className="font-display text-xl font-bold mt-3 text-slate-900">{title}</h3><p className="mt-2 text-sm text-slate-600 leading-relaxed">{text}</p></article>
        ))}
      </div>
    </Section>

    <Section spacing="pb-11 md:pb-14">
      <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Trabajo reciente</p><h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900">Algunos proyectos publicados</h2></div><a href="/proyectos" onClick={(e) => go(e, '/proyectos')} className="text-sm font-semibold text-brand-700 transition-transform hover:translate-x-1">Ver todos <span aria-hidden="true">→</span></a></div>
      <div className="mt-7 grid gap-5 md:grid-cols-3">
        {portfolioProjects.slice(0, 3).map((project) => (
          <a key={project.name} href={`/proyectos/${project.slug}`} onClick={(e) => go(e, `/proyectos/${project.slug}`)} className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
            <img src={project.image} alt={project.alt} width="1200" height="833" loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover object-top" />
            <div className="p-5"><p className="text-[11px] font-bold uppercase tracking-[.14em] text-brand-600">{project.type}</p><p className="mt-1 font-display text-lg font-bold text-slate-900">{project.name}</p><p className="mt-1 text-xs font-semibold text-brand-600">Ver qué se hizo →</p></div>
          </a>
        ))}
      </div>
    </Section>

    <ClosingCta title="¿Conversamos sobre tu proyecto?" text="Cuéntame qué vendes y a quién. Te respondo yo, con una recomendación clara y sin compromiso." whatsapp={whatsapp} onNavigate={onNavigate} />
  </main><Footer onNavigate={onNavigate} /></>
}
