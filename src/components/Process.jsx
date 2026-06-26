import Section from './Section'

const steps = [
  {
    n: '01',
    title: 'Reunión sin compromiso',
    text: 'Conversamos por Meet, Zoom o WhatsApp sobre tu negocio, tus clientes y qué necesitas. Sin costo y sin presión.',
  },
  {
    n: '02',
    title: 'Diseño a tu medida',
    text: 'Creo tu web pensada desde la lógica del cliente: estructura, textos y diseño que generan confianza y contactos.',
  },
  {
    n: '03',
    title: 'Revisiones contigo',
    text: 'Te muestro avances y ajustamos juntos hasta que quede como la necesitas. Tu opinión guía el resultado.',
  },
  {
    n: '04',
    title: 'Entrega y soporte',
    text: 'Publico tu sitio con dominio y SEO listos. Y no desaparezco: te acompaño después con dudas y mejoras.',
  },
]

export default function Process() {
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
          Cómo trabajamos
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
          Simple, claro y sin sorpresas
        </h2>
        <p className="text-slate-500">
          De la primera conversación a tu web publicada, en un proceso ordenado.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s) => (
          <div
            key={s.n}
            className="relative rounded-3xl bg-white border border-slate-100 shadow-soft p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="font-display text-4xl font-extrabold text-brand-100">{s.n}</span>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-2 mb-2">{s.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
