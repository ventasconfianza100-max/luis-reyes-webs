// ─────────────────────────────────────────────────────────────
// Artículos del blog
// ─────────────────────────────────────────────────────────────
// Datos PLANOS (sin JSX) para que puedan usarse tanto en el render de
// React como en el prerender (Node) y en los datos estructurados.
//
// Cada artículo tiene "blocks": una lista de bloques de contenido.
// Tipos soportados por el renderer (ver BlogPostPage.jsx):
//   { t: 'p',  text }            → párrafo
//   { t: 'h2', text }            → subtítulo
//   { t: 'h3', text }            → sub-subtítulo
//   { t: 'ul', items: [..] }     → lista con viñetas
//   { t: 'ol', items: [..] }     → lista numerada
//   { t: 'quote', text }         → cita / destacado
// Dentro de "text" e "items" puedes usar **negrita** con dobles asteriscos.
//
// Para agregar un artículo nuevo: copia un objeto, cambia el "slug"
// (debe ser único, sin tildes ni espacios) y su contenido. El resto
// del sitio (rutas, sitemap, schema) se actualiza solo.

export const blogPosts = [
  {
    slug: 'pagina-web-o-instagram-psicologos',
    title: '¿Necesito una página web si ya tengo Instagram? (psicólogos)',
    description:
      '¿Basta con Instagram para captar pacientes, o un psicólogo necesita página web propia? Diferencias reales en confianza, posicionamiento en Google y control de tu presencia.',
    category: 'Presencia digital',
    datePublished: '2026-06-04',
    dateModified: '2026-06-04',
    readingMinutes: 6,
    excerpt:
      'Instagram te da alcance, pero no aparece bien en Google ni transmite la misma seriedad. Te explico cuándo basta con redes y cuándo necesitas una web.',
    blocks: [
      {
        t: 'p',
        text: 'Es la pregunta que más me hacen los psicólogos: "Si ya tengo Instagram con seguidores, ¿para qué quiero una página web?". Es una duda razonable. La respuesta corta es que **no compiten, se complementan**, pero cada uno cumple un rol muy distinto. Veámoslo.',
      },
      { t: 'h2', text: 'Lo que Instagram hace bien' },
      {
        t: 'ul',
        items: [
          'Te da **alcance**: gente nueva puede descubrirte a través de reels y recomendaciones.',
          'Permite mostrar tu personalidad y crear cercanía con contenido constante.',
          'Es ideal para mantener el vínculo con quienes ya te siguen.',
        ],
      },
      { t: 'h2', text: 'Lo que Instagram NO puede darte' },
      {
        t: 'p',
        text: 'Aquí está el punto que casi nadie considera hasta que pierde pacientes por ello.',
      },
      {
        t: 'ul',
        items: [
          '**No aparece bien en Google.** Cuando alguien busca "psicólogo ansiedad" en Google, tu perfil de Instagram casi nunca sale. Una página web sí puede posicionarse.',
          '**No es tuyo.** Si Instagram cambia su algoritmo, te suspende la cuenta o simplemente deja de mostrar tu contenido, pierdes el acceso a tu audiencia de la noche a la mañana.',
          '**Transmite menos seriedad para una decisión clínica.** Un perfil social está bien para descubrirte, pero a la hora de confiarte su salud mental, muchas personas esperan ver un espacio profesional propio.',
          '**Obliga a competir con distracciones.** En Instagram, junto a tu post está el de un influencer y un meme. En tu web, la persona está enfocada solo en ti.',
        ],
      },
      { t: 'h2', text: 'La forma correcta de pensarlo' },
      {
        t: 'p',
        text: 'No es "web o Instagram". Es entender que cada uno es una etapa del recorrido del paciente:',
      },
      {
        t: 'ol',
        items: [
          '**Descubrimiento:** te encuentran en Instagram, en una recomendación o en Google.',
          '**Evaluación:** revisan quién eres y si les das confianza.',
          '**Decisión:** dan el paso y te escriben.',
        ],
      },
      {
        t: 'p',
        text: 'Instagram brilla en la primera etapa. Pero la evaluación y la decisión ocurren mucho mejor en una página web, porque ahí controlas el mensaje, la calma y el paso a seguir. Por eso lo ideal es que tu Instagram lleve a tu web, y tu web cierre la conversación.',
      },
      {
        t: 'quote',
        text: 'Instagram es donde te conocen. Tu página web es donde te eligen.',
      },
      { t: 'h2', text: '¿Entonces necesito una web?' },
      {
        t: 'p',
        text: 'Si solo quieres mantener presencia y compartir contenido, Instagram puede bastarte. Pero si quieres **aparecer en Google, proyectar más profesionalismo y no depender de un algoritmo ajeno**, una página web propia deja de ser un lujo y pasa a ser tu base. Lo bueno es que no tiene por qué ser cara ni complicada: una página simple y bien pensada ya marca la diferencia.',
      },
    ],
  },

  {
    slug: 'que-debe-tener-pagina-web-psicologo',
    title: 'Qué debe tener la página web de un psicólogo para generar confianza',
    description:
      'Los elementos que toda página web de psicólogo necesita para transmitir confianza y convertir visitas en pacientes: enfoque claro, rostro visible, contacto simple y SEO.',
    category: 'Diseño web',
    datePublished: '2026-06-04',
    dateModified: '2026-06-04',
    readingMinutes: 6,
    excerpt:
      'Una web bonita no sirve si no genera confianza. Estos son los elementos que hacen que un visitante decida escribirte a ti y no a otro profesional.',
    blocks: [
      {
        t: 'p',
        text: 'Una página web de psicólogo no se trata de verse "bonita". Se trata de que una persona que está pasando por un momento difícil sienta, en pocos segundos, que **puede confiar en ti**. Estos son los elementos que de verdad marcan la diferencia entre una web que decora y una que genera confianza.',
      },
      { t: 'h2', text: '1. Tu rostro y tu nombre, visibles de inmediato' },
      {
        t: 'p',
        text: 'Escribirle a un psicólogo desconocido genera ansiedad. Ver tu cara, tu nombre y tu título reduce esa barrera al instante. Una foto cálida y profesional es uno de los elementos que más confianza transmite en todo el sitio.',
      },
      { t: 'h2', text: '2. Tu enfoque explicado en lenguaje humano' },
      {
        t: 'p',
        text: 'El error más común es llenar la web de tecnicismos. El paciente no busca "intervención psicoterapéutica de corte integrativo": busca dejar de sentirse ansioso, dormir mejor o superar una ruptura. Habla de lo que la persona vive, no del nombre técnico de lo que tú haces.',
      },
      {
        t: 'ul',
        items: [
          'Explica **a quién ayudas** (ansiedad, duelo, parejas, adolescentes...).',
          'Describe **cómo es trabajar contigo**, para que sepan qué esperar.',
          'Evita la jerga clínica; usa las palabras que usaría el paciente.',
        ],
      },
      { t: 'h2', text: '3. Un solo paso de contacto, imposible de perder' },
      {
        t: 'p',
        text: 'Cada clic extra o cada duda sobre "cómo lo contacto" hace que pierdas personas. Lo ideal es un **botón claro y siempre visible**: WhatsApp o un sistema de agenda. Sin formularios eternos, sin buscar el correo en letra chica.',
      },
      {
        t: 'quote',
        text: 'Si el paciente tiene que pensar cómo contactarte, ya perdiste parte del impulso que lo llevó a tu web.',
      },
      { t: 'h2', text: '4. Señales de profesionalismo y respaldo' },
      {
        t: 'ul',
        items: [
          'Tu **formación y título** (universidad, especialidad).',
          'Modalidad de atención (online, presencial, ciudad).',
          'Opcional pero potente: **testimonios o reseñas** de pacientes (cuidando siempre la confidencialidad).',
        ],
      },
      { t: 'h2', text: '5. Que cargue rápido y se vea bien en el celular' },
      {
        t: 'p',
        text: 'La mayoría de tus visitas llegan desde el teléfono. Si la web tarda en cargar o se ve desordenada en móvil, la persona se va antes de leerte. Una web liviana y ordenada en celular no es un detalle técnico: es directamente cuántos pacientes te escriben.',
      },
      { t: 'h2', text: '6. SEO básico para que Google te encuentre' },
      {
        t: 'p',
        text: 'De nada sirve una web perfecta si nadie llega a ella. Necesita lo mínimo para que Google la entienda: un título y descripción claros, palabras clave que usan tus pacientes, datos estructurados y una buena velocidad. Eso es lo que hace que aparezcas cuando alguien busca un psicólogo como tú.',
      },
      { t: 'h2', text: 'En resumen' },
      {
        t: 'p',
        text: 'Una buena web de psicólogo combina **confianza humana** (tu cara, tu enfoque, tu cercanía) con **claridad práctica** (un contacto simple, carga rápida y buen SEO). Cuando esos elementos están bien resueltos, la web deja de ser una tarjeta de presentación y se convierte en una fuente constante de pacientes.',
      },
    ],
  },
]

export const blogPostsBySlug = Object.fromEntries(
  blogPosts.map((p) => [p.slug, p])
)
