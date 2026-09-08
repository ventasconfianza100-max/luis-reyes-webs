// Fuente única de datos del panel interno: prestador, retención de honorarios
// y plantillas de los documentos comerciales (cotizaciones, contrato, entrega).

export const PRESTADOR = {
  nombre: 'Luis Fernando Reyes Castro',
  rut: '20.171.111-8',
  giro: 'Diseño y desarrollo web',
  ciudad: 'Talca, Región del Maule',
  email: 'contacto@luisreyesweb.cl',
  sitio: 'www.luisreyesweb.cl',
}

// Retención legal de boletas de honorarios (Ley 21.133, aumento gradual).
export const TASAS_RETENCION = {
  2024: 0.1375,
  2025: 0.145,
  2026: 0.1525,
  2027: 0.16,
  2028: 0.17,
}

export const ANIO_ACTUAL = 2026

export const tasaDe = (anio) => TASAS_RETENCION[anio] ?? TASAS_RETENCION[ANIO_ACTUAL]

// Un monto líquido (lo que quiero recibir) se convierte en el bruto de la boleta.
export const brutoDesdeLiquido = (liquido, tasa) => Math.round(Number(liquido || 0) / (1 - tasa))
export const liquidoDesdeBruto = (bruto, tasa) => Math.round(Number(bruto || 0) * (1 - tasa))
export const retencionDe = (bruto, tasa) => Math.round(Number(bruto || 0) * tasa)

export const clp = (valor) => {
  const n = Number(valor)
  if (!Number.isFinite(n)) return '$0'
  return '$' + Math.round(n).toLocaleString('es-CL')
}

export const hoy = () => new Date().toISOString().slice(0, 10)

export const fechaLarga = (iso) => {
  if (!iso) return '__/__/____'
  const [a, m, d] = iso.split('-')
  return `${d}/${m}/${a}`
}

// ── Conceptos de boleta sugeridos por tipo de pago ──────────
export const CONCEPTOS_BOLETA = {
  anticipo: 'Abono inicial por diseño y desarrollo de página web',
  saldo: 'Pago final por diseño y desarrollo de página web',
  mantencion: 'Servicio mensual de mantenimiento de página web',
  unico: 'Diseño y desarrollo de página web',
  otro: 'Servicio de desarrollo web',
}

export const ESTADOS_PAGO = ['pendiente', 'cobrado', 'boleta emitida']

// ── Plantillas de documentos ────────────────────────────────
// Cada plantilla recibe el contexto {cliente, proyecto} y devuelve
// las secciones renderizables e imprimibles del documento.

const condiciones = (p) => [
  `Plazo estimado: ${p.plazo || '10 a 20'} días hábiles, contado desde la recepción completa del contenido y el abono inicial.`,
  'Valores expresados como montos líquidos a recibir. Se emitirá boleta de honorarios electrónica.',
  'El cliente entrega textos, imágenes, accesos y datos necesarios, salvo que esta propuesta indique lo contrario.',
  'Cambios fuera del alcance se cotizan previamente y solo se ejecutan con aprobación del cliente.',
  `Vigencia de esta cotización: ${p.vigencia || 15} días corridos.`,
]

const firmaCliente = {
  tipo: 'firma',
  titulo: 'Aceptación',
  lineas: [
    ['Nombre', 'RUT'],
    ['Firma', 'Fecha'],
  ],
}

const firmaAmbos = {
  tipo: 'firma',
  titulo: 'Firmas',
  lineas: [
    ['Cliente', `Prestador: ${PRESTADOR.nombre}`],
    ['Firma', 'Firma'],
    ['Fecha', 'Fecha'],
  ],
}

export const TIPOS_DOC = [
  {
    id: 'cotizacion-web',
    nombre: 'Cotización · Página web',
    prefijo: 'LRW',
    subtitulo:
      'Una presencia digital clara, profesional y preparada para convertir visitas en contactos.',
    build: ({ proyecto: p }) => [
      {
        tipo: 'parrafo',
        titulo: 'Objetivo del proyecto',
        texto:
          p.descripcion ||
          '[Descripción breve del negocio, público y resultado que se busca conseguir con la página.]',
      },
      {
        tipo: 'lista',
        titulo: 'Incluye',
        items: [
          'Diseño visual personalizado y adaptable a celular, tablet y computador.',
          'Estructura de inicio, servicios, acerca de, contacto y secciones acordadas.',
          'Botón de WhatsApp y formulario de contacto.',
          'Configuración inicial de dominio, publicación y seguridad HTTPS.',
          'SEO básico: títulos, descripciones, estructura y sitemap.',
          `${p.revisiones || 2} rondas de ajustes sobre la propuesta presentada.`,
        ],
      },
      {
        tipo: 'tabla',
        titulo: 'Inversión',
        encabezados: ['Concepto', 'Monto', 'Condición'],
        filas: [
          [
            'Diseño y desarrollo de página web',
            `${clp(p.total)} líquidos`,
            `${clp(p.cuota1)} al iniciar + ${clp(p.cuota2)} antes de publicar`,
          ],
          [
            'Mantención mensual opcional',
            `${clp(p.mantencion)} líquidos`,
            'Se cobra desde el mes siguiente a la entrega',
          ],
        ],
      },
      { tipo: 'lista', titulo: 'Condiciones comerciales', items: condiciones(p) },
      firmaCliente,
    ],
  },
  {
    id: 'cotizacion-planes',
    nombre: 'Cotización · Planes web',
    prefijo: 'LRW-PLANES',
    subtitulo: 'Tres niveles de inversión según el momento y las necesidades del negocio.',
    build: ({ proyecto: p }) => [
      {
        tipo: 'tabla',
        titulo: 'Alternativas',
        encabezados: ['Concepto', 'Monto', 'Condición'],
        filas: [
          ['Plan Esencial', '$90.000 líquidos', 'Landing page, WhatsApp, formulario, SEO básico y publicación'],
          ['Plan Profesional', '$190.000 líquidos', '3-4 secciones, textos, SEO local, blog y contacto'],
          ['Plan Premium', '$320.000 líquidos', 'Sitio multipágina, integraciones, copy, SEO avanzado y 1 mes de soporte'],
        ],
      },
      {
        tipo: 'lista',
        titulo: 'Incluido en todos los planes',
        items: [
          'Diseño adaptable a dispositivos móviles.',
          'Atención directa con Luis Reyes, sin intermediarios.',
          'Reunión inicial y revisión del avance.',
          'Publicación y boleta de honorarios electrónica.',
        ],
      },
      {
        tipo: 'parrafo',
        titulo: 'Forma de pago',
        texto:
          '50% para reservar e iniciar el proyecto y 50% antes de la publicación definitiva. Si el alcance cambia, se entrega una actualización por escrito antes de continuar.',
      },
      { tipo: 'lista', titulo: 'Condiciones comerciales', items: condiciones(p) },
      firmaCliente,
    ],
  },
  {
    id: 'cotizacion-tienda',
    nombre: 'Cotización · Tienda online',
    prefijo: 'LRW-TIENDA',
    subtitulo: 'Una plataforma propia para ordenar productos, recibir pedidos y facilitar la compra.',
    build: ({ proyecto: p }) => [
      {
        tipo: 'lista',
        titulo: 'Solución propuesta',
        items: [
          'Catálogo organizado por categorías y productos.',
          'Buscador, filtros y fichas de producto.',
          'Carrito de compras o solicitud directa por WhatsApp.',
          'Panel de administración para gestionar productos, precios y stock, si se contrata.',
          'Configuración de dominio, seguridad y publicación.',
          'Integración de pagos o envíos cotizada según proveedor y requisitos técnicos.',
        ],
      },
      {
        tipo: 'tabla',
        titulo: 'Inversión',
        encabezados: ['Concepto', 'Monto', 'Condición'],
        filas: [
          [
            'Diseño y desarrollo base',
            `${clp(p.total)} líquidos`,
            `${clp(p.cuota1)} al iniciar + ${clp(p.cuota2)} antes de publicar`,
          ],
          [
            'Carga inicial de productos',
            `Incluida hasta ${p.productos || '[N°]'}`,
            'Productos adicionales se cotizan aparte',
          ],
          [
            'Mantención y soporte',
            `${clp(p.mantencion)} líquidos/mes`,
            'Alcance definido en plan de mantención',
          ],
        ],
      },
      {
        tipo: 'lista',
        titulo: 'No incluido salvo indicación expresa',
        items: [
          'Comisiones de Webpay u otros medios de pago.',
          'Tarifas de empresas de despacho.',
          'Compra o renovación del dominio.',
          'Fotografía profesional y carga masiva no indicada.',
        ],
      },
      {
        tipo: 'lista',
        titulo: 'Condiciones comerciales',
        items: [
          `Plazo estimado: ${p.plazo || '20 a 40'} días hábiles, contado desde la recepción completa del contenido y el abono inicial.`,
          ...condiciones(p).slice(1),
        ],
      },
      firmaCliente,
    ],
  },
  {
    id: 'mantencion',
    nombre: 'Plan de mantención web',
    prefijo: 'LRW-MANT',
    subtitulo: 'Soporte mensual para mantener el sitio operativo, actualizado y acompañado.',
    build: ({ proyecto: p }) => [
      {
        tipo: 'lista',
        titulo: `Plan básico · ${clp(p.mantencion)} líquidos al mes`,
        items: [
          'Revisión general del funcionamiento del sitio.',
          'Cambios menores de textos, fotografías, horarios o datos de contacto.',
          'Respaldo o control técnico según la infraestructura del proyecto.',
          'Soporte por WhatsApp dentro de horario laboral.',
          'Prioridad frente a solicitudes aisladas.',
        ],
      },
      {
        tipo: 'lista',
        titulo: 'Límites del servicio',
        items: [
          'Hasta 30 minutos de cambios menores por mes; el tiempo no utilizado no se acumula.',
          'No incluye nuevas secciones, rediseños, funciones, integraciones ni carga masiva.',
          'Trabajos adicionales se cotizan y aprueban antes de ejecutarse.',
          'Servicios externos, dominio, correo y plataformas de terceros se pagan por separado.',
        ],
      },
      {
        tipo: 'parrafo',
        titulo: 'Pago y continuidad',
        texto:
          'El pago se realiza mensualmente contra boleta de honorarios electrónica. Cualquiera de las partes puede terminar el plan avisando con 15 días de anticipación. Las urgencias y tiempos de respuesta especiales deben acordarse por escrito.',
      },
      firmaCliente,
    ],
  },
  {
    id: 'contrato',
    nombre: 'Acuerdo de prestación de servicios',
    prefijo: 'LRW-CONTRATO',
    subtitulo: 'Documento base para formalizar alcance, pagos, responsabilidades y entrega.',
    build: ({ cliente: c, proyecto: p }) => [
      {
        tipo: 'parrafo',
        titulo: '1. Partes',
        texto: `Prestador: ${PRESTADOR.nombre}, RUT ${PRESTADOR.rut}, en adelante "el Prestador". Cliente: ${c.nombre || '[nombre/razón social]'}, RUT ${c.rut || '[RUT]'}, en adelante "el Cliente".`,
      },
      {
        tipo: 'parrafo',
        titulo: '2. Servicio y alcance',
        texto: `El Prestador desarrollará ${p.descripcion || '[descripción del proyecto]'} conforme a la cotización N.° ${p.numero || '[N°]'}, que se entiende incorporada a este acuerdo. Todo elemento no descrito se considera fuera de alcance y requiere cotización adicional.`,
      },
      {
        tipo: 'parrafo',
        titulo: '3. Precio y pagos',
        texto: `Precio total: ${clp(p.total)} líquidos. Forma de pago: ${clp(p.cuota1)} al iniciar y ${clp(p.cuota2)} antes de la publicación. Cada pago será respaldado mediante boleta de honorarios electrónica. El trabajo comienza una vez recibido el abono inicial.`,
      },
      {
        tipo: 'parrafo',
        titulo: '4. Plazos y colaboración',
        texto: `Plazo estimado: ${p.plazo || '[N°]'} días hábiles desde que el Cliente entregue el contenido y accesos solicitados. Los retrasos del Cliente suspenden proporcionalmente el calendario. Las fechas de terceros no dependen del Prestador.`,
      },
      {
        tipo: 'parrafo',
        titulo: '5. Revisiones y cambios',
        texto: `Se incluyen ${p.revisiones || 2} rondas de revisión. Una ronda corresponde a una lista consolidada de observaciones. Cambios estructurales, nuevas funciones o solicitudes posteriores a la aprobación se cotizan por separado.`,
      },
      {
        tipo: 'parrafo',
        titulo: '6. Propiedad, accesos y publicación',
        texto:
          'Una vez pagado el total, el Cliente recibe acceso y derecho de uso sobre el sitio entregado. Licencias, tipografías, fotografías y servicios de terceros conservan sus términos. El Prestador puede mostrar el proyecto en su portafolio, salvo acuerdo escrito distinto.',
      },
      {
        tipo: 'parrafo',
        titulo: '7. Garantía y mantención',
        texto: `Durante ${p.garantia || 30} días posteriores a la entrega se corregirán sin costo errores atribuibles al desarrollo entregado. La garantía no cubre cambios del Cliente, terceros, credenciales comprometidas o nuevas necesidades. La mantención posterior es opcional y se contrata separadamente.`,
      },
      {
        tipo: 'parrafo',
        titulo: '8. Terminación',
        texto:
          'Si el Cliente desiste después de iniciado el trabajo, el abono remunera la reserva, planificación y avance realizado y no es reembolsable en la medida correspondiente al trabajo efectivamente ejecutado. Las partes procurarán dejar por escrito el estado y los archivos entregables.',
      },
      firmaAmbos,
    ],
  },
  {
    id: 'brief',
    nombre: 'Ficha inicial del proyecto',
    prefijo: 'LRW-BRIEF',
    subtitulo:
      'Información necesaria para diseñar una web alineada con el negocio y evitar retrasos.',
    build: () => [
      {
        tipo: 'campos',
        titulo: 'Datos del negocio',
        campos: [
          'Nombre comercial',
          'RUT / razón social',
          'Persona de contacto',
          'WhatsApp y correo',
          'Ciudad y zona de atención',
        ],
      },
      {
        tipo: 'campos',
        titulo: 'Objetivo y clientes',
        campos: [
          '¿Qué debería lograr la página?',
          '¿Quién es el cliente ideal?',
          '¿Qué problema resuelve el negocio?',
          '¿Cuál es el principal llamado a la acción?',
        ],
      },
      {
        tipo: 'campos',
        titulo: 'Contenido y estructura',
        campos: [
          'Servicios o productos principales',
          'Secciones necesarias',
          'Páginas de referencia que le gustan',
          'Textos, logotipo y fotografías disponibles',
        ],
      },
      {
        tipo: 'campos',
        titulo: 'Funciones',
        campos: [
          'WhatsApp / formulario / agenda',
          'Catálogo / carrito / pagos',
          'Panel de administración',
          'Otras integraciones',
        ],
      },
      {
        tipo: 'campos',
        titulo: 'Accesos y fechas',
        campos: [
          'Dominio y proveedor',
          'Redes sociales',
          'Fecha deseada de publicación',
          'Responsable de aprobar avances',
        ],
      },
      {
        tipo: 'parrafo',
        titulo: 'Confirmación de alcance',
        texto:
          'La información de esta ficha orientará la propuesta y deberá validarse en la cotización final.',
      },
    ],
  },
  {
    id: 'entrega',
    nombre: 'Acta de entrega y conformidad',
    prefijo: 'LRW-ENTREGA',
    subtitulo: 'Registro final de publicación, accesos, pendientes y aprobación del proyecto.',
    build: ({ proyecto: p }) => [
      {
        tipo: 'tabla',
        titulo: 'Proyecto entregado',
        encabezados: ['Concepto', 'Detalle', 'Referencia'],
        filas: [
          ['Sitio / sistema', p.titulo || '[Nombre del proyecto]', `URL: ${p.url || '[enlace]'}`],
          ['Fecha de publicación', fechaLarga(p.fechaEntrega), `Versión: ${p.version || '1'}`],
          ['Garantía técnica', `${p.garantia || 30} días`, `Hasta: ${fechaLarga(p.fechaGarantia)}`],
        ],
      },
      {
        tipo: 'lista',
        titulo: 'Elementos entregados',
        items: [
          'Sitio publicado y revisado en computador y celular.',
          'Dominio y certificado de seguridad configurados.',
          'Formularios, WhatsApp y enlaces principales probados.',
          'Credenciales o invitaciones administrativas entregadas de forma segura.',
          'Indicaciones básicas de uso explicadas al Cliente.',
        ],
      },
      {
        tipo: 'campos',
        titulo: 'Accesos y responsables',
        campos: [
          'Dominio (proveedor / titular)',
          'Hosting o plataforma (proveedor / titular)',
          'Panel administrador (correo autorizado)',
        ],
        nota: 'Importante: no escribir contraseñas en esta acta; entregarlas mediante un canal seguro.',
      },
      {
        tipo: 'parrafo',
        titulo: 'Pendientes acordados',
        texto: p.pendientes || 'Sin pendientes.',
      },
      {
        tipo: 'parrafo',
        titulo: 'Conformidad',
        texto:
          'El Cliente declara haber revisado la entrega y recibirla conforme, sin perjuicio de la garantía técnica indicada. Nuevas funciones o cambios posteriores serán evaluados y cotizados por separado.',
      },
      firmaAmbos,
    ],
  },
]

export const docPorId = (id) => TIPOS_DOC.find((d) => d.id === id) || TIPOS_DOC[0]
