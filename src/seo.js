import { blogPosts } from './blogPosts.js'
import { portfolioProjects } from './portfolioProjects.js'

// URL base del sitio
export const SITE_URL = 'https://www.luisreyesweb.cl'

export const metaByPath = {
  '/': {
    title: 'Diseño y Desarrollo Web en Talca, Chile | Luis Reyes Castro',
    description:
      'Diseño y programación de páginas web para negocios en Chile: tiendas online, empresas de servicios y profesionales. Sitios rápidos, optimizados para Google y pensados para captar clientes. Talca, Región del Maule.',
  },
  '/redes': {
    title: 'Luis Reyes Web | Contacto y redes sociales',
    description: 'Encuentra la página web, WhatsApp, Instagram, TikTok, LinkedIn y Facebook de Luis Reyes, diseñador y desarrollador web en Talca, Chile.',
  },
  '/diseno-web-talca': {
    title: 'Diseño Web en Talca | Páginas web para negocios — Luis Reyes Castro',
    description:
      'Diseño y desarrollo de páginas web en Talca: tiendas online, empresas de servicios y profesionales. Sitios rápidos, optimizados para Google y pensados para captar clientes en Talca y la Región del Maule.',
  },
  '/tienda-online-chile': {
    title: 'Tienda Online en Chile | Catálogo y e-commerce a medida — Luis Reyes Castro',
    description:
      'Tiendas online y catálogos a medida en Chile: categorías, tallas, stock, carrito o consulta por WhatsApp y panel de administración propio, sin mensualidades. Envíos a todo Chile.',
  },
  '/paginas-web-empresas-servicios': {
    title: 'Páginas Web para Empresas de Servicios en Chile | Luis Reyes Castro',
    description:
      'Páginas web para empresas de servicios en Chile: fumigación, mantención, salud, educación, limpieza y servicios técnicos. Sitios multipágina con SEO local que captan cotizaciones por WhatsApp.',
  },
  '/desarrollo-software-aplicaciones': {
    title: 'Desarrollo de Software y Aplicaciones a Medida en Chile | Luis Reyes Castro',
    description:
      'Creación de software, programas y aplicaciones a medida en Chile: sistemas de gestión, apps web, automatizaciones e integraciones para tu negocio. Desarrollo propio, sin plantillas.',
  },
  '/catalogo-online-con-whatsapp': {
    title: 'Catálogo online con WhatsApp en Chile | Luis Reyes Web',
    description:
      'Catálogo online con fichas, categorías, precios y consulta por WhatsApp. Una alternativa simple a una tienda con pago online para negocios en Chile.',
  },
  '/paginas-web-pymes-chile': {
    title: 'Páginas Web para Pymes en Chile | Luis Reyes Castro',
    description: 'Diseño páginas web profesionales para pymes en Chile: rápidas, claras, optimizadas para Google y preparadas para captar consultas por WhatsApp.',
  },
  '/seo-local-talca': {
    title: 'SEO Local en Talca | Posicionamiento Web para Negocios',
    description: 'SEO local en Talca para empresas y negocios: optimización técnica, contenido, estructura y medición para mejorar tu presencia en Google.',
  },
  '/sobre-luis': {
    title: 'Sobre Luis Reyes | Diseñador y desarrollador web en Talca',
    description: 'Conoce a Luis Reyes Castro, diseñador y desarrollador web en Talca. Creo páginas claras, estratégicas y orientadas a generar confianza y oportunidades.',
  },
  '/diagnostico-web': {
    title: 'Diagnóstico web para tu negocio | Luis Reyes Web',
    description: 'Responde tres preguntas y recibe orientación para saber qué tipo de página web necesita tu negocio en Chile.',
  },
  '/proyectos': {
    title: 'Portafolio de Proyectos Web Reales | Luis Reyes Castro',
    description:
      'Conoce proyectos web reales de Luis Reyes Castro: Trabalengua, 7ma Control, Munay Cueros, Escuela RDLF, Cuchillos Bravo y Psicóloga Andrea Martínez.',
  },
  '/agenda': {
    title: 'Agenda una reunión — Meet, Zoom o WhatsApp | Luis Reyes Castro',
    description:
      'Agenda una reunión sin compromiso con Luis Reyes Castro por Google Meet, Zoom o WhatsApp para cotizar la página web o solución digital de tu negocio.',
  },
  '/blog': {
    title: 'Blog sobre diseño web, negocios y presencia online | Luis Reyes Castro',
    description:
      'Artículos prácticos sobre diseño web, precios, presencia digital y cómo captar más clientes para tu negocio en Chile. Tiendas online, empresas y profesionales.',
  },
}

// Agrega automáticamente una entrada de meta por cada artículo del blog.
for (const post of blogPosts) {
  metaByPath[`/blog/${post.slug}`] = {
    title: `${post.title} | Luis Reyes Castro`,
    description: post.description,
  }
}

// Rutas privadas: no se prerenderizan ni entran al sitemap, y van noindex.
export const privateMetaByPath = {
  '/admin': {
    title: 'Panel interno | Luis Reyes Web',
    description: 'Panel privado de cotizaciones, documentos y boletas de honorarios.',
    noindex: true,
  },
}

export const ROUTES = Object.keys(metaByPath)
export const PRIVATE_ROUTES = Object.keys(privateMetaByPath)

export function getMeta(path) {
  return metaByPath[path] || privateMetaByPath[path] || { title: 'Página no encontrada | Luis Reyes Web', description: 'La página solicitada no existe.', noindex: true }
}

export function canonicalFor(path) {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`
}

// Tipo de Open Graph: los artículos del blog son "article", el resto "website".
export function ogTypeFor(path) {
  return path.startsWith('/blog/') ? 'article' : 'website'
}

// Etiquetas <meta> específicas de artículo (fechas y autor) para blog posts.
// Devuelve string vacío si la ruta no es un artículo.
export function articleMetaTagsFor(path) {
  if (!path.startsWith('/blog/')) return ''
  const slug = path.replace('/blog/', '')
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return ''
  const modified = post.dateModified || post.datePublished
  return [
    `<meta property="article:published_time" content="${post.datePublished}" />`,
    `<meta property="article:modified_time" content="${modified}" />`,
    `<meta property="article:author" content="Luis Reyes Castro" />`,
    `<meta property="article:section" content="${post.category}" />`,
  ].join('\n    ')
}

// ─────────────────────────────────────────────────────────────
// Datos estructurados (JSON-LD)
// ─────────────────────────────────────────────────────────────

// 👉 Cuando crees tu ficha de Google Business Profile, copia aquí la URL
//    pública (la que aparece al hacer clic en tu negocio en Maps) para
//    conectar el sitio con la ficha. Déjalo vacío si aún no la tienes.
const GOOGLE_BUSINESS_URL = 'https://www.google.com/search?kgmid=/g/11z7ktq60d'

const SAME_AS = [
  'https://www.facebook.com/luisreyesweb.cl/',
  'https://www.linkedin.com/in/luisreyeswebs/',
  'https://www.instagram.com/luisreyesweb.cl/',
  'https://www.tiktok.com/@luisreyesweb.cl',
  GOOGLE_BUSINESS_URL,
].filter(Boolean)

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#luis-reyes`,
  name: 'Luis Reyes Castro',
  url: `${SITE_URL}/sobre-luis`,
  image: `${SITE_URL}/luis-reyes-retrato-2026.jpg`,
  jobTitle: 'Diseñador y desarrollador web',
  description: 'Diseñador y desarrollador de páginas web, tiendas online y software a medida para empresas, negocios y profesionales en Chile.',
  alumniOf: { '@type': 'EducationalOrganization', name: 'Universidad de Talca' },
  worksFor: { '@id': `${SITE_URL}/#business` },
  knowsAbout: ['Diseño web', 'Desarrollo web', 'SEO local', 'Tiendas online', 'Experiencia de usuario', 'Desarrollo de software'],
  sameAs: SAME_AS,
}

// Negocio principal — se incluye en todas las páginas
const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#business`,
  name: 'Luis Reyes Castro — Diseño y Desarrollo Web',
  description:
    'Diseño y desarrollo de sitios web para negocios en Chile: tiendas online, empresas de servicios y profesionales. Talca, Región del Maule.',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/luis-reyes-retrato-2026.jpg`,
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
    name: 'Servicios de diseño y desarrollo web',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Página web para profesionales independientes',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tienda online / e-commerce con panel de administración',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sitio web para empresas y negocios de servicios',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Desarrollo de software, programas y aplicaciones a medida',
        },
      },
    ],
  },
  founder: {
    '@id': `${SITE_URL}/#luis-reyes`,
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
      name: '¿Cuánto cuesta una página web en Chile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El valor depende del tipo de proyecto. Una página web profesional parte desde $90.000 CLP, y una tienda online o sitio multipágina tiene un valor mayor según el alcance. Agendemos una reunión gratuita para cotizar según lo que necesitas.',
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
      name: '¿Qué tipo de páginas web haces?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hago sitios para profesionales independientes, tiendas online con carrito y panel de administración, y webs multipágina para empresas de servicios con SEO local. He desarrollado proyectos reales en estos tres rubros.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo tener una página web si estoy en Talca o en regiones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutamente. Trabajo con clientes de todo Chile de forma 100% online. La reunión de coordinación también es por videollamada o WhatsApp.',
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
  '/redes': 'Contacto y redes sociales',
  '/diseno-web-talca': 'Diseño web en Talca',
  '/tienda-online-chile': 'Tienda online en Chile',
  '/paginas-web-empresas-servicios': 'Páginas web para empresas de servicios',
  '/desarrollo-software-aplicaciones': 'Desarrollo de software y aplicaciones',
  '/catalogo-online-con-whatsapp': 'Catálogo online con WhatsApp',
  '/paginas-web-pymes-chile': 'Páginas web para pymes en Chile',
  '/seo-local-talca': 'SEO local en Talca',
  '/sobre-luis': 'Sobre Luis',
  '/diagnostico-web': 'Diagnóstico web',
  '/proyectos': 'Portafolio de proyectos web',
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
      jobTitle: 'Desarrollador y Diseñador Web',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Luis Reyes Castro — Diseño y Desarrollo Web',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/luis-reyes-retrato-2026.jpg` },
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
      'Artículos sobre diseño web, precios, presencia digital y cómo captar más clientes para tu negocio en Chile.',
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

const serviceNames = {
  '/diseno-web-talca': 'Diseño y desarrollo de páginas web en Talca',
  '/tienda-online-chile': 'Diseño de tiendas online y e-commerce en Chile',
  '/paginas-web-empresas-servicios': 'Páginas web para empresas de servicios',
  '/desarrollo-software-aplicaciones': 'Desarrollo de software y aplicaciones a medida',
  '/catalogo-online-con-whatsapp': 'Catálogos online con ventas por WhatsApp',
  '/paginas-web-pymes-chile': 'Diseño de páginas web para pymes en Chile',
  '/seo-local-talca': 'SEO local y posicionamiento web en Talca',
}

function serviceSchema(path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalFor(path)}#service`,
    name: serviceNames[path],
    description: getMeta(path).description,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: [
      { '@type': 'Country', name: 'Chile' },
      { '@type': 'City', name: 'Talca' },
      { '@type': 'AdministrativeArea', name: 'Región del Maule' },
    ],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: canonicalFor(path),
      servicePhone: { '@type': 'ContactPoint', telephone: '+56922012534', contactType: 'sales', availableLanguage: 'Spanish' },
    },
    url: canonicalFor(path),
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
  const schemas = [businessSchema, personSchema, {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Luis Reyes Web',
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#business` },
    inLanguage: 'es-CL',
  }]

  if (path === '/') {
    schemas.push(faqSchema)
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: getMeta(path).title,
      description: getMeta(path).description,
      url: SITE_URL,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      inLanguage: 'es-CL',
    })
    return schemas
  }

  const bc = breadcrumbSchema(path)
  if (bc) schemas.push(bc)
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: getMeta(path).title,
    description: getMeta(path).description,
    url: canonicalFor(path),
    isPartOf: { '@id': `${SITE_URL}/#website` },
    inLanguage: 'es-CL',
  })

  if (serviceNames[path]) schemas.push(serviceSchema(path))

  if (path === '/sobre-luis') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      '@id': `${canonicalFor(path)}#profile`,
      name: 'Sobre Luis Reyes Castro',
      url: canonicalFor(path),
      mainEntity: { '@id': `${SITE_URL}/#luis-reyes` },
    })
  }

  if (path === '/proyectos') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: getMeta(path).title,
      description: getMeta(path).description,
      url: canonicalFor(path),
      isPartOf: { '@id': `${SITE_URL}/#website` },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: portfolioProjects.length,
        itemListElement: portfolioProjects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'WebSite',
            name: project.name,
            url: project.url,
            description: project.summary,
            image: `${SITE_URL}${project.image}`,
            creator: { '@id': `${SITE_URL}/#luis-reyes` },
          },
        })),
      },
    })
  }

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
