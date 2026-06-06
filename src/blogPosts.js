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
  {
    slug: 'cuanto-cuesta-una-pagina-web-para-psicologos',
    title: '¿Cuánto cuesta una página web para psicólogos en Chile?',
    description:
      '¿Cuánto vale una página web para psicólogos en Chile? Te explico los rangos de precio, de qué depende y qué incluye una web profesional pensada para captar pacientes.',
    category: 'Precios',
    datePublished: '2026-06-05',
    dateModified: '2026-06-05',
    readingMinutes: 6,
    excerpt:
      'El precio de una web para psicólogos varía según lo que necesites. Te muestro los rangos reales en Chile y qué debería incluir para que valga la pena.',
    blocks: [
      {
        t: 'p',
        text: 'Es la primera pregunta que se hace casi todo psicólogo que quiere su web: "¿cuánto me va a costar?". La respuesta honesta es que **depende de lo que necesites**, pero sí puedo darte rangos reales y, sobre todo, ayudarte a entender qué estás pagando para que no te cobren de más ni de menos.',
      },
      { t: 'h2', text: 'Rangos de precio en Chile' },
      {
        t: 'ul',
        items: [
          '**Plantilla genérica o tú mismo (Wix, etc.):** desde gratis hasta ~$50.000, pero te lleva tiempo y rara vez convierte bien.',
          '**Web profesional para un psicólogo independiente:** suele ir desde **$90.000** aprox., con diseño a medida, optimización y enfoque en captar pacientes.',
          '**Web para clínica o centro con varios profesionales:** más alta, según cantidad de páginas, equipo y funcionalidades.',
        ],
      },
      { t: 'h2', text: '¿De qué depende el precio?' },
      {
        t: 'ol',
        items: [
          '**Cantidad de páginas:** no es lo mismo una web de una sola página que una con blog y casos.',
          '**Diseño a medida vs. plantilla:** lo hecho para ti transmite más confianza.',
          '**SEO incluido:** que esté optimizada para aparecer en Google marca una gran diferencia a largo plazo.',
          '**Textos:** redactar para que conecten con el paciente es parte del valor.',
        ],
      },
      { t: 'h2', text: 'El error más caro: mirar solo el precio' },
      {
        t: 'p',
        text: 'Una web barata que no aparece en Google ni transmite confianza no te trae pacientes: es plata perdida. Una web bien hecha se paga sola con **uno o dos pacientes nuevos**. La pregunta correcta no es "cuánto cuesta", sino "cuánto me va a devolver".',
      },
      {
        t: 'quote',
        text: 'Una web no es un gasto, es una inversión que trabaja por ti las 24 horas, incluso mientras atiendes o duermes.',
      },
      {
        t: 'p',
        text: 'Soy Luis Reyes Castro, psicólogo titulado UTalca, y diseño páginas web para psicólogos pensadas desde la lógica del paciente que está decidiendo. Si quieres un valor exacto para tu caso, agenda una reunión sin compromiso y lo conversamos.',
      },
    ],
  },
  {
    slug: 'como-conseguir-mas-pacientes-como-psicologo',
    title: 'Cómo conseguir más pacientes como psicólogo (guía práctica)',
    description:
      '¿Cómo conseguir más pacientes siendo psicólogo en Chile? Estrategias reales de presencia online, Google, redes y web para llenar tu agenda sin depender solo del boca a boca.',
    category: 'Captar pacientes',
    datePublished: '2026-06-05',
    dateModified: '2026-06-05',
    readingMinutes: 7,
    excerpt:
      'El boca a boca es valioso, pero impredecible. Te muestro cómo construir un sistema para que lleguen pacientes de forma constante, sin depender de la suerte.',
    blocks: [
      {
        t: 'p',
        text: 'Muchos psicólogos excelentes tienen la agenda a medias, no por falta de talento, sino porque dependen solo del boca a boca, que es valioso pero impredecible. La buena noticia: conseguir pacientes se puede volver **un sistema**, no una lotería. Aquí van las estrategias que de verdad funcionan.',
      },
      { t: 'h2', text: '1. Aparece donde la gente busca: Google' },
      {
        t: 'p',
        text: 'Cuando alguien decide buscar ayuda, escribe en Google "psicólogo + su problema" o "psicólogo + su ciudad". Si no estás ahí, no existes para esa persona. Necesitas dos cosas: una **ficha de Google Business** y una **página web** que pueda posicionarse.',
      },
      { t: 'h2', text: '2. Ten una web que transmita confianza' },
      {
        t: 'p',
        text: 'Elegir psicólogo es una decisión íntima. Antes de escribirte, la persona quiere ver tu cara, tu enfoque y sentir que es un espacio serio. Un perfil de Instagram no basta para eso; una web propia sí. Es la diferencia entre "lo pensaré" y "le escribo".',
      },
      { t: 'h2', text: '3. Usa las redes para acercar, no para vender' },
      {
        t: 'ul',
        items: [
          'Comparte contenido que ayude (no solo promociones).',
          'Muestra tu forma de trabajar y tu personalidad.',
          'Pon siempre el enlace a tu web en la bio, para no perder a quien quiere dar el paso.',
        ],
      },
      { t: 'h2', text: '4. Facilita al máximo el primer contacto' },
      {
        t: 'p',
        text: 'Cada paso extra pierde personas. Un botón directo de WhatsApp, un agendamiento simple y una respuesta rápida convierten muchísimo más que un formulario largo o un correo que tardas días en responder.',
      },
      { t: 'h2', text: '5. Pide reseñas' },
      {
        t: 'p',
        text: 'Las opiniones en Google son una de las cosas que más influye en quién te elige. Pídeselas con naturalidad a pacientes con los que tengas confianza: suman muchísimo a tu visibilidad y a tu credibilidad.',
      },
      {
        t: 'quote',
        text: 'No necesitas estar en todos lados. Necesitas estar bien en los pocos lugares donde tu próximo paciente te está buscando.',
      },
      {
        t: 'p',
        text: 'Como psicólogo que diseña webs para psicólogos, entiendo este recorrido desde adentro. Si quieres una web que trabaje para llenar tu agenda, conversémoslo en una reunión sin compromiso.',
      },
    ],
  },
  {
    slug: 'como-aparecer-en-google-siendo-psicologo',
    title: 'Cómo aparecer en Google cuando buscan un psicólogo',
    description:
      '¿Quieres que tus pacientes te encuentren en Google? Te explico, en simple, qué necesitas para aparecer en las búsquedas de "psicólogo": ficha de Google, web y SEO.',
    category: 'SEO',
    datePublished: '2026-06-05',
    dateModified: '2026-06-05',
    readingMinutes: 6,
    excerpt:
      'Aparecer en Google no es magia ni suerte. Te explico, sin tecnicismos, los pasos para que te encuentren cuando alguien busca un psicólogo.',
    blocks: [
      {
        t: 'p',
        text: 'Si cuando buscas tu nombre o "psicólogo + tu ciudad" no apareces, no estás solo: le pasa a la mayoría de los profesionales. La buena noticia es que aparecer en Google sigue una lógica clara, y aquí te la explico sin tecnicismos.',
      },
      { t: 'h2', text: '1. Crea tu ficha de Google Business' },
      {
        t: 'p',
        text: 'Es gratis y es lo primero. Es esa tarjeta que aparece a la derecha con tu nombre, foto, teléfono y reseñas. Si atiendes online, puedes crearla como negocio de área de servicio. Sin ficha, es muy difícil salir en las búsquedas locales.',
      },
      { t: 'h2', text: '2. Ten una página web propia' },
      {
        t: 'p',
        text: 'Google necesita "algo tuyo" que mostrar y posicionar. Tu perfil de Instagram casi nunca aparece en una búsqueda de "psicólogo ansiedad"; una web bien hecha sí puede. Es la pieza que te permite competir por esas búsquedas.',
      },
      { t: 'h2', text: '3. Optimiza lo básico (SEO)' },
      {
        t: 'ul',
        items: [
          '**Títulos y descripciones claros** en cada página, con las palabras que usan tus pacientes.',
          '**Contenido útil:** un blog que responda las dudas frecuentes te hace aparecer en más búsquedas.',
          '**Datos estructurados** que le digan a Google quién eres y qué haces.',
          '**Velocidad y versión móvil:** Google favorece los sitios rápidos y que se ven bien en el celular.',
        ],
      },
      { t: 'h2', text: '4. Consigue reseñas y enlaces' },
      {
        t: 'p',
        text: 'Las reseñas en Google y los enlaces desde otros sitios (directorios, redes, colaboraciones) le dicen a Google que eres confiable. Mientras más señales, más arriba apareces.',
      },
      {
        t: 'quote',
        text: 'Aparecer en Google no es cuestión de suerte: es la suma de una ficha, una web y señales de confianza, trabajadas con constancia.',
      },
      {
        t: 'p',
        text: 'Soy Luis Reyes Castro, psicólogo y diseñador web. Cada web que hago incluye el SEO básico para que Google pueda encontrarte. Si quieres aparecer cuando buscan un psicólogo como tú, agendemos una reunión.',
      },
    ],
  },
]

export const blogPostsBySlug = Object.fromEntries(
  blogPosts.map((p) => [p.slug, p])
)
