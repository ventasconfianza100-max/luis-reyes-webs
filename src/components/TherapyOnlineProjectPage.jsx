import ProjectDetailPage from './ProjectDetailPage'

export default function TherapyOnlineProjectPage({ onNavigate }) {
  return (
    <ProjectDetailPage
      badge="Captación de pacientes"
      title="Consulta terapéutica online"
      intro="Una página orientada a explicar cómo funciona la atención online, reducir dudas antes del primer contacto y mostrar una experiencia profesional desde cualquier ciudad."
      tags={['Agenda online', 'Confianza', 'Mobile first']}
      sections={[
        'Explicación clara de la modalidad online',
        'Beneficios y límites de la atención remota',
        'Proceso para agendar una primera sesión',
        'Bloque de dudas frecuentes antes de consultar',
        'Contacto directo con mensaje preparado',
      ]}
      previewText="Un diseño pensado para que el paciente entienda rápido el proceso, se sienta acompañado y pueda consultar desde celular sin fricción."
      objective="El foco es transformar una visita curiosa en una consulta real. La página ordena la información sensible, baja la ansiedad del primer contacto y hace que agendar se sienta simple."
      flow={[
        {
          title: 'Entender la modalidad',
          text: 'La web explica qué esperar de una sesión online y cómo prepararse para el primer encuentro.',
        },
        {
          title: 'Resolver dudas',
          text: 'Se anticipan preguntas sobre privacidad, duración, pago y forma de trabajo terapéutico.',
        },
        {
          title: 'Agendar fácil',
          text: 'El cierre lleva a una acción concreta para escribir, coordinar y avanzar sin vueltas.',
        },
      ]}
      ctaTitle="¿Quieres captar pacientes online?"
      ctaText="Podemos crear una página clara para explicar tu modalidad, tus horarios y tu forma de acompañar."
      ctaHref="https://wa.me/56922012534?text=Hola%20Luis%2C%20me%20interesa%20una%20web%20para%20consulta%20terap%C3%A9utica%20online"
      onNavigate={onNavigate}
    />
  )
}
