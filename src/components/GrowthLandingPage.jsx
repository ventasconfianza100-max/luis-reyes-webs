import Navbar from './Navbar'
import Footer from './Footer'
import Section from './Section'

const pages = {
  pymes: {
    eyebrow: 'Páginas web para pymes · Chile',
    title: <>Una página web profesional para hacer crecer tu <span className="text-brand-600">pyme</span></>,
    intro: 'Diseño sitios claros, rápidos y fáciles de usar para pequeñas y medianas empresas que necesitan mostrar mejor sus servicios, generar confianza y convertir visitas en consultas reales.',
    message: 'Hola Luis, necesito una página web para mi pyme. Quiero cotizar.',
    sectionTitle: 'Una web pensada para vender y comunicar mejor',
    sectionText: 'La página se construye alrededor de tu negocio, tus clientes y tus objetivos. Cada sección ayuda a explicar, responder dudas y acercar al visitante al contacto.',
    cards: [['Propuesta clara', 'Ordenamos tus servicios, ventajas y llamados a la acción para que se entienda rápido por qué elegirte.'], ['SEO desde el inicio', 'Preparo títulos, contenido, estructura técnica y rendimiento para que Google pueda rastrear e interpretar el sitio.'], ['Contacto sin fricción', 'WhatsApp, formularios y botones estratégicos permiten cotizar desde celular sin pasos innecesarios.']],
    bullets: ['Diseño adaptable a celulares, tablets y computadores', 'Páginas de servicios con textos orientados a búsquedas reales', 'Dominio, publicación, analítica y configuración técnica', 'Portafolio, testimonios o casos reales según tu negocio', 'Acompañamiento para actualizar y hacer crecer el sitio'],
    related: [['Diseño web en Talca', '/diseno-web-talca'], ['Web para empresas de servicios', '/paginas-web-empresas-servicios'], ['Ver proyectos reales', '/proyectos']],
  },
  seo: {
    eyebrow: 'SEO local · Talca y Región del Maule',
    title: <>SEO local para que encuentren tu negocio en <span className="text-brand-600">Google</span></>,
    intro: 'Mejoro la estructura, el contenido y las señales locales de tu sitio para conectar tu negocio con personas que buscan tus servicios en Talca y la Región del Maule.',
    message: 'Hola Luis, quiero mejorar el SEO local de mi negocio en Talca.',
    sectionTitle: 'Más visibilidad con una base sólida',
    sectionText: 'El posicionamiento requiere una web útil, técnicamente ordenada, contenido relevante y coherencia con tu presencia local. Trabajo esos elementos de forma conjunta.',
    cards: [['Revisión técnica', 'Analizo indexación, velocidad, títulos, enlaces, experiencia móvil y datos estructurados para detectar obstáculos.'], ['Contenido local', 'Creo una arquitectura que responde a lo que tus posibles clientes buscan y a las zonas donde realmente trabajas.'], ['Medición y mejora', 'Dejo configuradas las bases para observar visitas, consultas y oportunidades de crecimiento orgánico.']],
    bullets: ['Páginas con títulos y descripciones únicos', 'Sitemap, robots, canonicals y marcado estructurado', 'Enlazado interno entre servicios, proyectos y contenidos', 'Optimización para búsquedas locales y dispositivos móviles', 'Orientación para Google Business Profile y Search Console'],
    related: [['Diseño web en Talca', '/diseno-web-talca'], ['Páginas web para pymes', '/paginas-web-pymes-chile'], ['Leer artículos del blog', '/blog']],
  },
}

export default function GrowthLandingPage({ kind, onNavigate }) {
  const page = pages[kind]
  const whatsapp = `https://wa.me/56922012534?text=${encodeURIComponent(page.message)}`
  const go = (event, href) => { event.preventDefault(); onNavigate(href) }

  return <><Navbar onNavigate={onNavigate} /><main>
    <Section width="wide" spacing="pt-10 pb-10 md:pt-12 md:pb-12" className="page-hero bg-gradient-to-br from-white via-brand-50/25 to-amber-50/60">
      <div className="max-w-4xl"><p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{page.eyebrow}</p><h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.08] text-slate-900">{page.title}</h1><p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{page.intro}</p><div className="mt-7 flex flex-wrap gap-3"><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-10px_rgba(124,58,237,.6)] transition hover:-translate-y-0.5 hover:bg-brand-700">Cotizar por WhatsApp</a><a href="/agenda" onClick={(e) => go(e, '/agenda')} className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700">Agendar una reunión</a></div></div>
    </Section>
    <Section><div className="max-w-3xl"><h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">{page.sectionTitle}</h2><p className="mt-3 leading-relaxed text-slate-600">{page.sectionText}</p></div><div className="mt-8 grid gap-5 md:grid-cols-3">{page.cards.map(([title, text], index) => <article key={title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft"><span className="text-xs font-bold text-brand-500">0{index + 1}</span><h3 className="mt-3 font-display text-xl font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p></article>)}</div></Section>
    <Section className="bg-gradient-to-b from-slate-50/80 to-white"><div className="grid items-start gap-9 md:grid-cols-[1.05fr_.95fr]"><div><p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Qué incluye</p><h2 className="mt-2 font-display text-3xl font-bold text-slate-900">Un trabajo completo, no solo una portada bonita</h2><ul className="mt-6 space-y-3">{page.bullets.map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-3.5 text-sm text-slate-700"><span className="font-bold text-brand-600">✓</span>{item}</li>)}</ul></div><aside className="rounded-3xl bg-ink p-8 text-white"><p className="text-sm font-semibold uppercase tracking-wider text-brand-300">También te puede servir</p><nav className="mt-5 flex flex-col gap-3" aria-label="Servicios relacionados">{page.related.map(([label, href]) => <a key={href} href={href} onClick={(e) => go(e, href)} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-semibold transition hover:border-brand-400/50 hover:bg-white/10">{label} <span aria-hidden="true">→</span></a>)}</nav></aside></div></Section>
    <Section spacing="pt-3 pb-12 md:pb-16"><div className="rounded-3xl border border-brand-100 bg-brand-50/70 p-8 text-center md:p-11"><h2 className="font-display text-3xl font-bold text-slate-900">Conversemos sobre tu próximo paso</h2><p className="mx-auto mt-3 max-w-xl text-slate-600">Te daré una recomendación clara según tu negocio, sin compromiso y sin soluciones innecesarias.</p><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-2xl bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-700">Quiero una evaluación</a></div></Section>
  </main><Footer onNavigate={onNavigate} /></>
}
