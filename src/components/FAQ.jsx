import { useState } from 'react'
import Section from './Section'

const faqs = [
  {
    q: '¿Cuánto cuesta una página web en Chile?',
    a: 'Trabajo con tres planes claros: Esencial ($90.000), Profesional ($190.000) y Premium ($320.000), según lo que necesites. Una tienda online o un sitio multipágina se cotiza aparte según el alcance. Todos parten con una reunión gratuita, sin sorpresas en el precio.',
  },
  {
    q: '¿Cuánto tiempo tarda en estar lista mi página web?',
    a: 'El tiempo promedio de entrega es 2 semanas desde que confirmamos el proyecto. Trabajo de forma organizada para cumplir los plazos sin apuros de último minuto.',
  },
  {
    q: '¿Qué tipo de páginas web haces?',
    a: 'Sitios para profesionales independientes, tiendas online con carrito y panel de administración, y webs multipágina para empresas de servicios con SEO local. He desarrollado proyectos reales en estos tres rubros; en una reunión puedo mostrarte ejemplos según lo que necesites.',
  },
  {
    q: '¿Puedo tener una página web si estoy en Talca o en regiones?',
    a: 'Absolutamente. Trabajo con clientes de todo Chile de forma 100% online. La reunión de coordinación es por videollamada o WhatsApp, así que la distancia no es problema.',
  },
  {
    q: '¿Qué pasa después de que me entregan la página web?',
    a: 'Ofrezco soporte post-entrega. Si algo no funciona, si quieres cambiar un texto o tienes dudas, puedes escribirme. No desaparezco el día de la entrega.',
  },
  {
    q: '¿Mi página web va a aparecer en Google?',
    a: 'Sí. Todas las páginas que diseño incluyen optimización SEO básica: título, descripción, palabras clave y configuración técnica para que Google pueda indexarla. El posicionamiento orgánico toma tiempo, pero partimos con todo bien configurado.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <Section id="faq" spacing="py-8 md:py-11" className="faq-section decor-section decor-faq">
      <div className="faq-panel grid overflow-hidden border border-slate-200/80 bg-white/85 shadow-[0_24px_70px_-40px_rgba(15,23,42,.38)] backdrop-blur-sm lg:grid-cols-[.72fr_1.28fr]">
        <div className="faq-intro relative overflow-hidden bg-slate-950 p-6 text-white md:p-8">
          <div className="relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-[.18em] text-cyan-300 mb-3">
            Preguntas frecuentes
          </span>
          <h2 className="font-display text-3xl md:text-[2.65rem] font-bold tracking-[-.045em] leading-[1.08] text-white">
            Respuestas claras,<br className="hidden lg:block" /> antes de empezar.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">Lo esencial sobre precios, tiempos, alcance y soporte para que puedas decidir con tranquilidad.</p>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs text-slate-400 mb-3">¿Tu pregunta no aparece aquí?</p>
            <a
              href="https://wa.me/56922012534?text=Hola%20Luis%2C%20tengo%20una%20consulta%20sobre%20tu%20servicio%20de%20dise%C3%B1o%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-cyan-50"
            >
              Conversemos por WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </div>
          </div>
        </div>

        <div className="faq-list p-4 md:p-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item overflow-hidden border-b border-slate-200/80 last:border-b-0 ${open === i ? 'is-open' : ''}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                className="group w-full text-left px-3 py-4 flex items-center justify-between gap-4 transition-colors hover:text-brand-700"
              >
                <span className="flex items-start gap-3 font-semibold text-slate-800 text-sm leading-snug">
                  <span className="font-mono text-[10px] font-bold tracking-wider text-brand-400">0{i + 1}</span>{faq.q}
                </span>
                <span className={`faq-toggle flex-shrink-0 ${open === i ? 'is-open' : ''}`} aria-hidden="true" />
              </button>
              {open === i && (
                <div id={`faq-answer-${i}`} className="faq-answer px-3 pb-4 pl-[3.15rem]">
                  <p className="max-w-2xl text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
