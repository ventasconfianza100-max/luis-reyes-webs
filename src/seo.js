export const SITE_URL = 'https://www.luisreyesweb.cl'

export const metaByPath = {
  '/': {
    title: 'Diseño Web para Psicólogos en Chile | Luis Reyes Castro — Talca',
    description:
      'Psicólogo titulado UTalca que diseña sitios web para psicólogos en Chile. Páginas web profesionales pensadas desde la lógica del paciente que está decidiendo. Talca, Región del Maule.',
  },
  '/proyectos': {
    title: 'Proyectos de páginas web para psicólogos | Luis Reyes Castro',
    description:
      'Ejemplos reales de sitios web para psicólogos y terapeutas en Chile: consulta clínica, terapia online y perfil profesional para redes. Mira los proyectos.',
  },
  '/proyectos-empresas': {
    title: 'Páginas web para clínicas y centros de salud | Luis Reyes Castro',
    description:
      'Diseño web para clínicas, centros de atención psicológica y empresas de salud en Chile. Sitios profesionales que generan confianza y captan pacientes.',
  },
  '/proyectos/sitio-psicologa-clinica': {
    title: 'Sitio web para psicóloga clínica — Proyecto | Luis Reyes Castro',
    description:
      'Caso de diseño web para una psicóloga clínica: estructura, enfoque y contacto pensados desde la lógica del paciente que está eligiendo profesional.',
  },
  '/proyectos/consulta-terapeutica-online': {
    title: 'Web para consulta terapéutica online — Proyecto | Luis Reyes Castro',
    description:
      'Caso de diseño web para terapia y consulta psicológica 100% online en Chile, optimizada para agendar sesiones y transmitir confianza.',
  },
  '/proyectos/perfil-profesional-redes': {
    title: 'Perfil profesional para redes — Proyecto | Luis Reyes Castro',
    description:
      'Página breve y elegante tipo link en bio para psicólogos: reúne trayectoria, enfoque y contacto para usar en Instagram, LinkedIn o WhatsApp.',
  },
  '/proyectos-empresas/clinica-centro-atencion': {
    title: 'Web para clínica y centro de atención — Proyecto | Luis Reyes Castro',
    description:
      'Caso de diseño web para una clínica o centro de atención psicológica en Chile: servicios, equipo y agendamiento en un sitio profesional.',
  },
  '/agenda': {
    title: 'Agenda una reunión — Meet, Zoom o WhatsApp | Luis Reyes Castro',
    description:
      'Agenda una reunión sin compromiso con Luis Reyes Castro por Google Meet, Zoom o WhatsApp para cotizar la página web de tu consulta psicológica.',
  },
}

export const ROUTES = Object.keys(metaByPath)

export function getMeta(path) {
  return metaByPath[path] || metaByPath['/']
}

export function canonicalFor(path) {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`
}
