import ProjectDetailPage from './ProjectDetailPage'

export default function ProfessionalProfileProjectPage({ onNavigate }) {
  return (
    <ProjectDetailPage
      badge="Presencia digital"
      title="Perfil profesional para redes"
      intro="Una página breve y elegante para usar como enlace principal en Instagram, LinkedIn o WhatsApp, reuniendo trayectoria, enfoque y contacto en un solo lugar."
      tags={['Link en bio', 'Perfil claro', 'Contacto rápido']}
      sections={[
        'Presentación breve y memorable',
        'Trayectoria, formación y áreas de trabajo',
        'Servicios o tipos de acompañamiento',
        'Links a redes y canales principales',
        'Botón de contacto siempre visible',
      ]}
      previewText="Una estructura tipo perfil profesional: simple, visual, rápida de leer y pensada para convertir visitas desde redes en conversaciones."
      objective="La meta es que una persona que llega desde redes entienda en segundos quién eres, qué haces y cuál es el siguiente paso para contactarte."
      flow={[
        {
          title: 'Primera impresión',
          text: 'El visitante aterriza desde redes y ve una presentación clara, humana y profesional.',
        },
        {
          title: 'Lectura rápida',
          text: 'La información se organiza en bloques breves para que sea fácil escanear desde el celular.',
        },
        {
          title: 'Un solo enlace útil',
          text: 'Todo queda reunido en una página que puedes usar como link principal en tus perfiles.',
        },
      ]}
      ctaTitle="¿Quieres ordenar tu presencia digital?"
      ctaText="Podemos diseñar una página perfil que se vea profesional y funcione perfecto como link en bio."
      ctaHref="https://wa.me/56922012534?text=Hola%20Luis%2C%20me%20interesa%20una%20web%20tipo%20perfil%20profesional%20para%20redes"
      onNavigate={onNavigate}
    />
  )
}
