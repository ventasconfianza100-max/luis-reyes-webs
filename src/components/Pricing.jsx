import Section from './Section'

const WHATSAPP = '56922012534'

const wa = (plan) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Hola Luis, me interesa el ${plan} para mi página web. ¿Cómo avanzamos?`
  )}`

const plans = [
  {
    code: 'START / 01',
    name: 'Plan Esencial',
    price: '$90.000',
    pitch: 'Para el negocio o profesional que recién parte y necesita estar online ya.',
    features: [
      'Landing page de una sección, 100% responsive',
      'Botón de WhatsApp y formulario de contacto',
      'SEO básico para aparecer en Google',
      'Publicación y dominio configurados',
    ],
    cta: 'Quiero el Esencial',
    highlight: false,
  },
  {
    code: 'GROW / 02',
    name: 'Plan Profesional',
    price: '$190.000',
    pitch: 'El más elegido: pensado para captar clientes de verdad.',
    features: [
      'Sitio de 3-4 secciones a tu medida',
      'Agendamiento o cotización por WhatsApp',
      'SEO local + ficha de Google Business',
      'Textos escritos para convertir visitas en contactos',
      'Blog para posicionar en Google',
    ],
    cta: 'Quiero el Profesional',
    highlight: true,
  },
  {
    code: 'SCALE / 03',
    name: 'Plan Premium',
    price: '$320.000',
    pitch: 'Para tiendas, empresas y negocios que quieren destacar y escalar.',
    features: [
      'Sitio multi-página completo',
      'Agendamiento + integraciones a medida',
      'Copy persuasivo de toda la web',
      'SEO avanzado y optimización de velocidad',
      '1 mes de soporte y mejoras incluido',
    ],
    cta: 'Quiero el Premium',
    highlight: false,
  },
]

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <Section id="planes" className="pricing-section decor-section decor-pricing">
      <div className="text-center max-w-2xl mx-auto mb-9">
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
          Planes
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
          Planes claros, sin sorpresas
        </h2>
        <p className="text-slate-500">
          Elige el punto de partida que se ajusta a tu momento. Todos incluyen reunión inicial sin costo; el alcance final se confirma contigo.
        </p>
      </div>

      <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`pricing-card relative p-6 md:p-7 flex flex-col transition-all hover:-translate-y-1 ${
              plan.highlight
                ? 'pricing-card--featured bg-slate-950 text-white shadow-[0_28px_70px_-32px_rgba(15,23,42,.8)] border border-cyan-300/20'
                : 'bg-white/90 shadow-soft border border-slate-200/80'
            }`}
          >
            {plan.highlight && (
              <span className="pricing-recommended absolute right-5 top-5 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.13em] text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_0_4px_rgba(110,231,183,.1)]" /> Recomendado
              </span>
            )}

            <div className="mb-7 flex items-center justify-between gap-3">
              <span className={`font-mono text-[10px] font-bold tracking-[.17em] ${plan.highlight ? 'text-cyan-300' : 'text-brand-600'}`}>{plan.code}</span>
              {!plan.highlight && <span className="pricing-pixels" aria-hidden="true" />}
            </div>

            <h3 className={`font-display text-xl font-bold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
            <div className="mt-3 mb-2 flex items-baseline gap-2">
              <span className={`font-display text-4xl font-extrabold tracking-[-.055em] ${plan.highlight ? 'text-white' : 'text-slate-950'}`}>{plan.price}</span>
              <span className={`text-[10px] font-bold tracking-[.14em] ${plan.highlight ? 'text-slate-400' : 'text-slate-400'}`}>CLP</span>
            </div>
            <p className={`${plan.highlight ? 'text-slate-300' : 'text-slate-500'} text-sm leading-relaxed mb-6 min-h-[2.75rem]`}>{plan.pitch}</p>

            <div className={`mb-5 h-px ${plan.highlight ? 'bg-gradient-to-r from-cyan-300/35 via-brand-400/25 to-transparent' : 'bg-gradient-to-r from-slate-200 to-transparent'}`} />
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className={`flex gap-2.5 text-sm leading-snug ${plan.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                  {plan.highlight ? <span className="mt-0.5 text-cyan-300">✓</span> : <Check />}
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={wa(plan.name)}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics={`pricing_click_${plan.name.toLowerCase().replaceAll(' ', '_')}`}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all w-full ${
                plan.highlight
                  ? 'bg-white text-slate-950 hover:bg-cyan-50 shadow-lg shadow-black/20'
                  : 'bg-slate-950 text-white hover:bg-brand-700 border border-slate-950'
              }`}
            >
              {plan.cta}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>

      {/* Garantía / reversión de riesgo */}
      <div className="pricing-assurance mt-7 max-w-4xl mx-auto border border-brand-100/80 bg-white/60 p-5 flex items-start gap-3 backdrop-blur-sm">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-brand-500 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
        <p className="text-sm text-slate-600 leading-relaxed">
          <strong className="text-slate-800">Sin riesgo para ti:</strong> partimos con una reunión
          gratuita y sin compromiso. Incluyo revisiones hasta que tu web quede como la necesitas, y no
          desaparezco el día de la entrega.
        </p>
      </div>
    </Section>
  )
}
