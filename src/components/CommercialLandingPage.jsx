import Section from './Section'
import ProjectProof from './ProjectProof'
import ClosingCta from './ClosingCta'

const content = {
  psychologist: {
    eyebrow: 'Diseño web para consultas · Chile',
    title: 'Páginas web para psicólogos y consultas en Chile',
    intro: 'Una web clara y humana para presentar tu forma de trabajar, resolver dudas y facilitar que un nuevo paciente te contacte.',
    items: ['Presentación profesional y enfoque terapéutico', 'Servicios, modalidad online o presencial y agendamiento', 'WhatsApp visible, versión móvil y SEO local', 'Información de privacidad y preguntas frecuentes'],
    link: '/blog/que-poner-en-la-web-de-tu-consulta-psicologica',
    linkText: 'Leer qué debería tener una web de consulta psicológica',
    message: 'Hola Luis, vi tu página para psicólogos y quiero cotizar.',
    proof: ['Psicóloga Andrea Martínez', 'Consulta real publicada'],
  },
  catalog: {
    eyebrow: 'Catálogo online · Chile',
    title: <>Catálogo online con <span className="text-brand-600">WhatsApp</span> para tu negocio</>,
    intro: 'Ordena tus productos en una página fácil de compartir, con fichas, categorías y consultas directas por WhatsApp.',
    items: ['Fichas de producto con fotos, precios y detalles', 'Categorías para que tus clientes encuentren rápido', 'Botón de WhatsApp con el producto prellenado', 'Panel de administración y stock según el alcance del proyecto'],
    link: '/tienda-online-chile',
    linkText: 'Comparar con una tienda online completa',
    message: 'Hola Luis, vi tu página de catálogo con WhatsApp y quiero cotizar.',
    proof: ['Cuchillos Bravo', 'Catálogo real publicado'],
  },
}

export default function CommercialLandingPage({ kind, onNavigate }) {
  const data = content[kind]
  const whatsapp = `https://wa.me/56922012534?text=${encodeURIComponent(data.message)}`
  const go = (event, href) => { event.preventDefault(); onNavigate(href) }

  return <main>
    <Section width="wide" spacing="pt-10 pb-10 md:pt-12 md:pb-12" className="page-hero bg-gradient-to-br from-white via-white to-brand-50/70">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{data.eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">{data.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">{data.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-10px_rgba(124,58,237,.6)] transition hover:-translate-y-0.5 hover:bg-brand-700">Cotizar por WhatsApp</a>
            <a href="/proyectos" onClick={(e) => go(e, '/proyectos')} className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700">Ver proyectos</a>
          </div>
        </div>
        <ProjectProof name={data.proof[0]} label={data.proof[1]} />
      </div>
    </Section>

    <Section>
      <div className="grid items-start gap-8 md:grid-cols-[1.05fr_.95fr] md:gap-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Funciones</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Qué puede incluir</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {data.items.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-4 text-sm leading-snug text-slate-700 shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 h-4 w-4 flex-none text-brand-500" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <aside className="rounded-3xl border border-slate-100 bg-white p-7 shadow-soft md:mt-10">
          <h2 className="font-display text-2xl font-bold text-slate-900">¿Catálogo o tienda?</h2>
          <p className="mt-3 leading-relaxed text-slate-600">La solución se define según cómo vendes. Un catálogo prioriza mostrar y conversar; una tienda puede sumar carrito, pagos y más automatización si el proyecto lo contempla.</p>
          <a href={data.link} onClick={(e) => go(e, data.link)} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-transform hover:translate-x-1">{data.linkText} <span aria-hidden="true">→</span></a>
        </aside>
      </div>
    </Section>

    <ClosingCta title="Conversemos sobre tu proyecto" text="Te explico el alcance y el precio orientativo según lo que realmente necesitas." whatsapp={whatsapp} onNavigate={onNavigate} />
  </main>
}
