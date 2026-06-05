import { blogPosts } from './blogPosts'

// URL base del sitio
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
  '/blog': {
    title: 'Blog para psicólogos: más pacientes y presencia online | Luis Reyes Castro',
    description:
      'Artículos prácticos sobre cómo conseguir más pacientes, presencia digital y diseño web para psicólogos y terapeutas en Chile. Escrito por un psicólogo.',
  },
}

// Agrega automáticamente una entrada de meta por cada artículo del blog.
for (const post of blogPosts) {
  metaByPath[`/blog/${post.slug}`] = {
    title: `${post.title} | Luis Reyes Castro`,
    description: post.description,
  }
}

export const ROUTES = Object.keys(metaByPath)

export function getMeta(path) {
  return metaByPath[path] || metaByPath['/']
}

export function canonicalFor(path) {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`
}

// ─────────────────────────────────────────────────────────────
// Datos estructurados (JSON-LD)
// ─────────────────────────────────────────────────────────────

// 👉 Cuando crees tu ficha de Google Business Profile, copia aquí la URL
//    pública (la que aparece al hacer clic en tu negocio en Maps) para
//    conectar el sitio con la ficha. Déjalo vacío si aún no la tienes.
const GOOGLE_BUSINESS_URL = ''

const SAME_AS = [
  'https://www.linkedin.com/in/luis-reyes-castro-959261339/',
  'https://www.instagram.com/luis.rey3z/',
  GOOGLE_BUSINESS_URL,
].filter(Boolean)

// Negocio principal — se incluye en todas las páginas
const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#business`,
  name: 'Luis Reyes Castro — Diseño Web para Psicólogos',
  description:
    'Diseño de sitios web profesionales para psicólogos en Chile. Psicólogo titulado por la Universidad de Talca que entiende el rubro desde adentro.',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/profile.jpg`,
  telephone: '+56922012534',
  priceRange: '$$',
  currenciesAccepted: 'CLP',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Talca',
    addressRegion: 'Región del Maule',
    addressCountry: 'CL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -35.4264,
    longitude: -71.6554,
  },
  areaServed: [
    { '@type': 'Country', name: 'Chile' },
    { '@type': 'City', name: 'Talca' },
    { '@type': 'AdministrativeArea', name: 'Región del Maule' },
  ],
  knowsLanguage: 'es',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+56922012534',
    contactType: 'sales',
    availableLanguage: 'Spanish',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de diseño web para psicólogos',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Página web para psicólogos y terapeutas',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Página web para clínicas y centros de atención',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Perfil profesional para redes (link en bio)',
        },
      },
    ],
  },
  founder: {
    '@type': 'Person',
    name: 'Luis Reyes Castro',
    jobTitle: 'Psicólogo y Diseñador Web',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Universidad de Talca',
    },
  },
  sameAs: SAME_AS,
}

// FAQ — SOLO en la home, que es donde se muestra el contenido visible.
// (Google pide que el FAQ estructurado solo esté en páginas que lo muestran.)
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta una página web para psicólogos en Chile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El valor depende del tipo de proyecto. Una página web profesional para psicólogos o terapeutas parte desde $90.000 CLP. Agendemos una reunión gratuita para cotizar según lo que necesitas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo tarda en estar lista mi página web?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tiempo promedio de entrega es 2 semanas desde que confirmamos el proyecto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué contratar a un psicólogo para diseñar mi web?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Porque entiendo el rubro desde adentro. Sé cómo piensa un paciente cuando busca psicólogo online, qué le genera confianza y cómo redactar tu perfil para que conecte de verdad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo tener una página web si soy psicólogo independiente en Talca o regiones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutamente. Trabajo con psicólogos de todo Chile de forma 100% online. He atendido profesionales en Talca, Santiago, Concepción y otras ciudades.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Mi página web va a aparecer en Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Todas las páginas incluyen optimización SEO básica: título, descripción, palabras clave y configuración técnica para que Google pueda indexarla correctamente.',
      },
    },
  ],
}

// Etiquetas legibles para construir las migas de pan (breadcrumbs)
const breadcrumbLabels = {
  '/proyectos': 'Proyectos para profesionales',
  '/proyectos-empresas': 'Proyectos para empresas',
  '/proyectos/sitio-psicologa-clinica': 'Sitio para psicóloga clínica',
  '/proyectos/consulta-terapeutica-online': 'Consulta terapéutica online',
  '/proyectos/perfil-profesional-redes': 'Perfil profesional para redes',
  '/proyectos-empresas/clinica-centro-atencion': 'Clínica y centro de atención',
  '/agenda': 'Agenda una reunión',
  '/blog': 'Blog',
}

// Etiqueta de cada artículo para las migas de pan.
for (const post of blogPosts) {
  breadcrumbLabels[`/blog/${post.slug}`] = post.title
}

// Convierte los bloques de un artículo en texto plano (para articleBody).
function blocksToPlainText(blocks) {
  return blocks
    .map((b) => {
      if (b.t === 'ul' || b.t === 'ol') return b.items.join(' ')
      return b.text || ''
    })
    .join(' ')
    .replace(/\*\*/g, '')
}

function blogPostSchema(post) {
  const url = `${SITE_URL}/blog/${post.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    articleBody: blocksToPlainText(post.blocks),
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    inLanguage: 'es-CL',
    image: `${SITE_URL}/og-image.jpg`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    author: {
      '@type': 'Person',
      name: 'Luis Reyes Castro',
      jobTitle: 'Psicólogo y Diseñador Web',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Luis Reyes Castro — Diseño Web para Psicólogos',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/profile.jpg` },
    },
  }
}

function blogIndexSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/blog#blog`,
    name: 'Blog — Luis Reyes Castro',
    description:
      'Artículos sobre cómo conseguir más pacientes, presencia digital y diseño web para psicólogos en Chile.',
    url: `${SITE_URL}/blog`,
    inLanguage: 'es-CL',
    publisher: { '@id': `${SITE_URL}/#business` },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.datePublished,
      url: `${SITE_URL}/blog/${post.slug}`,
    })),
  }
}

function breadcrumbSchema(path) {
  if (path === '/') return null

  const items = [{ name: 'Inicio', url: SITE_URL }]
  const segments = path.split('/').filter(Boolean)
  let acc = ''
  for (const seg of segments) {
    acc += `/${seg}`
    items.push({
      name: breadcrumbLabels[acc] || seg,
      url: `${SITE_URL}${acc}`,
    })
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }
}

// Devuelve el array de objetos JSON-LD que corresponde a cada ruta.
export function jsonLdFor(path) {
  const schemas = [businessSchema]

  if (path === '/') {
    schemas.push(faqSchema)
    return schemas
  }

  const bc = breadcrumbSchema(path)
  if (bc) schemas.push(bc)

  if (path === '/blog') {
    schemas.push(blogIndexSchema())
  } else if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '')
    const post = blogPosts.find((p) => p.slug === slug)
    if (post) schemas.push(blogPostSchema(post))
  }

  return schemas
}

// Genera las etiquetas <script> de JSON-LD listas para inyectar en el HTML.
export function jsonLdScriptsFor(path) {
  return jsonLdFor(path)
    .map(
      (schema) =>
        `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
    )
    .join('\n    ')
}
