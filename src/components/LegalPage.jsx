import Navbar from './Navbar'
import Footer from './Footer'

const ACTUALIZADO = '27 de septiembre de 2026'
const WHATSAPP = 'https://wa.me/56922012534'

const pages = {
  privacidad: {
    title: 'Política de privacidad',
    intro: 'Esta política explica qué datos se tratan cuando visitas luisreyesweb.cl o contratas un servicio, para qué se usan y cuáles son tus derechos. Se rige por la ley chilena de protección de la vida privada (Ley N° 19.628) y sus modificaciones.',
    sections: [
      ['Responsable', ['Luis Reyes Castro, diseñador y desarrollador web independiente, con domicilio en Talca, Región del Maule, Chile. Puedes contactarme por WhatsApp al +56 9 2201 2534.']],
      ['Qué datos se recogen en este sitio', [
        'Este sitio no tiene formularios que guarden tus datos. Cuando usas el cotizador, el diagnóstico o cualquier botón de contacto, se prepara un mensaje que tú decides enviar por WhatsApp; esa conversación queda sujeta a las políticas de WhatsApp.',
        'Se usan datos de navegación anónimos (páginas visitadas, tipo de dispositivo, ciudad aproximada) mediante Google Analytics, para saber qué contenidos son útiles y mejorar el sitio.',
      ]],
      ['Datos de clientes', [
        'Si contratas un servicio, uso los datos que me entregas (nombre o razón social, RUT, contacto, correo, teléfono y datos del proyecto) solo para cotizar, ejecutar el trabajo, emitir documentos y boletas, y darte soporte.',
        'Estos datos se guardan de forma privada, con acceso protegido por clave, y no se venden ni se comparten con terceros, salvo cuando la ley lo exige (por ejemplo, obligaciones tributarias).',
        'Los videos que comparto con clientes se alojan de forma privada y solo son accesibles mediante el enlace que envío; no se publican ni se indexan en buscadores, y los retiro cuando ya no son necesarios o cuando me lo pides.',
      ]],
      ['Servicios de terceros', [
        'Para funcionar, el sitio usa proveedores externos que pueden recibir datos técnicos de tu visita (como tu dirección IP): Cloudflare (alojamiento y seguridad), Google Analytics (estadísticas), Google Fonts (tipografías), Instagram (vista de publicaciones) y WhatsApp (contacto). Cada uno tiene su propia política de privacidad.',
      ]],
      ['Cookies y almacenamiento local', [
        'Google Analytics e Instagram pueden usar cookies para medir visitas o mostrar su contenido. El sitio guarda en tu navegador solo preferencias, como el tema claro u oscuro. Puedes borrar o bloquear las cookies desde la configuración de tu navegador; el sitio seguirá funcionando.',
      ]],
      ['Tus derechos', [
        'Puedes pedir en cualquier momento saber qué datos tuyos tengo, corregirlos, eliminarlos u oponerte a su uso. Escríbeme por WhatsApp y te respondo a la brevedad.',
      ]],
      ['Cambios a esta política', ['Si esta política cambia, publicaré la nueva versión en esta misma página con su fecha de actualización.']],
    ],
  },
  terminos: {
    title: 'Términos y condiciones',
    intro: 'Estos términos describen cómo trabajo y las condiciones generales de los servicios de diseño y desarrollo web. Cada proyecto se formaliza con una cotización, que prevalece sobre estos términos en lo que indique de forma distinta.',
    sections: [
      ['Uso del sitio', [
        'El contenido de luisreyesweb.cl (textos, diseño, imágenes y código) pertenece a Luis Reyes Castro, salvo las capturas y marcas de proyectos de clientes, que se muestran como portafolio y pertenecen a sus respectivos dueños. No está permitido copiarlo para fines comerciales sin autorización.',
        'Los precios publicados son referenciales y pueden cambiar. El valor final de cada proyecto es el indicado en su cotización.',
      ]],
      ['Cotización y alcance', [
        'Cada proyecto parte con una cotización que detalla el alcance, el valor, los plazos y las rondas de revisión incluidas. Las cotizaciones tienen una vigencia indicada en el mismo documento.',
        'Los cambios o funciones que no estén en el alcance acordado se cotizan por separado antes de realizarse.',
      ]],
      ['Pagos', [
        'Salvo que la cotización diga otra cosa, el pago se hace en dos partes: un anticipo para comenzar el trabajo y el saldo al momento de la entrega o publicación. Los servicios se documentan con boleta de honorarios.',
      ]],
      ['Plazos y colaboración', [
        'Los plazos se cuentan en días hábiles desde que se confirma el proyecto y se cuenta con los textos, imágenes y accesos necesarios. Los retrasos en la entrega de estos materiales pueden mover la fecha de entrega.',
      ]],
      ['Entrega, garantía y soporte', [
        'Después de publicar el sitio hay un período de garantía, indicado en la cotización, en el que corrijo sin costo cualquier error de funcionamiento de lo entregado. Los cambios nuevos, contenidos adicionales o mantenciones periódicas se acuerdan aparte.',
      ]],
      ['Servicios de terceros', [
        'Algunos servicios dependen de proveedores externos, como dominios, alojamiento, pagos en línea o redes sociales. Su funcionamiento, precios y condiciones dependen de cada proveedor.',
      ]],
      ['Contacto', ['Para cualquier consulta sobre estos términos, escríbeme por WhatsApp al +56 9 2201 2534.']],
    ],
  },
}

export default function LegalPage({ kind, onNavigate }) {
  const page = pages[kind]
  const go = (event, href) => { event.preventDefault(); onNavigate(href) }

  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <main className="page-hero px-5 py-10 md:py-14">
        <article className="mx-auto max-w-3xl">
          <nav aria-label="Migas de pan" className="mb-5 flex items-center gap-2 text-sm"><a href="/" onClick={(e) => go(e, '/')} className="font-semibold text-brand-700">Inicio</a><span className="text-slate-300">/</span><span className="text-slate-500">{page.title}</span></nav>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">{page.title}</h1>
          <p className="mt-2 text-sm text-slate-500">Última actualización: {ACTUALIZADO}</p>
          <p className="mt-6 leading-relaxed text-slate-600">{page.intro}</p>
          {page.sections.map(([heading, paragraphs]) => (
            <section key={heading} className="mt-8">
              <h2 className="font-display text-xl font-bold text-slate-900">{heading}</h2>
              {paragraphs.map((text) => <p key={text} className="mt-3 leading-relaxed text-slate-600">{text}</p>)}
            </section>
          ))}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
            ¿Dudas? <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 underline underline-offset-2">Escríbeme por WhatsApp</a>
            {' · '}
            <a href={kind === 'privacidad' ? '/terminos' : '/privacidad'} onClick={(e) => go(e, kind === 'privacidad' ? '/terminos' : '/privacidad')} className="font-semibold text-brand-700 underline underline-offset-2">{kind === 'privacidad' ? 'Términos y condiciones' : 'Política de privacidad'}</a>
          </div>
        </article>
      </main>
      <Footer onNavigate={onNavigate} />
    </>
  )
}
