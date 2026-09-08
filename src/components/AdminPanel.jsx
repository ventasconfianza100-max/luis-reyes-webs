import { useEffect, useMemo, useState } from 'react'
import {
  ANIO_ACTUAL,
  CONCEPTOS_BOLETA,
  ESTADOS_PAGO,
  PRESTADOR,
  TASAS_RETENCION,
  TIPOS_DOC,
  brutoDesdeLiquido,
  clp,
  docPorId,
  fechaLarga,
  hoy,
  liquidoDesdeBruto,
  retencionDe,
  tasaDe,
} from '../adminDocs'

const STORAGE_KEY = 'lrw-admin-v1'

const nuevoId = () => Math.random().toString(36).slice(2, 10)

const proyectoVacio = () => ({
  id: nuevoId(),
  creado: hoy(),
  cliente: { nombre: '', rut: '', contacto: '', email: '', telefono: '', ciudad: '' },
  proyecto: {
    titulo: '',
    descripcion: '',
    url: '',
    numero: '',
    fecha: hoy(),
    total: 120000,
    cuota1: 60000,
    cuota2: 60000,
    mantencion: 10000,
    plazo: '10 a 20',
    revisiones: 2,
    vigencia: 15,
    garantia: 30,
    productos: '',
    version: '1',
    fechaEntrega: '',
    fechaGarantia: '',
    pendientes: '',
  },
  pagos: [],
  docId: 'cotizacion-web',
})

const estadoInicial = () => ({ anio: ANIO_ACTUAL, proyectos: [proyectoVacio()], activo: null })

function cargar() {
  if (typeof window === 'undefined') return estadoInicial()
  try {
    const crudo = window.localStorage.getItem(STORAGE_KEY)
    if (!crudo) return estadoInicial()
    const datos = JSON.parse(crudo)
    if (!datos?.proyectos?.length) return estadoInicial()
    return { anio: datos.anio || ANIO_ACTUAL, proyectos: datos.proyectos, activo: datos.activo || datos.proyectos[0].id }
  } catch {
    return estadoInicial()
  }
}

// ── Campos de formulario ────────────────────────────────────
function Campo({ label, valor, onChange, tipo = 'text', ancho = '' }) {
  return (
    <label className={`block ${ancho}`}>
      <span className="mb-1 block text-xs font-medium text-slate-500">{label}</span>
      <input
        type={tipo}
        value={valor ?? ''}
        onChange={(e) => onChange(tipo === 'number' ? Number(e.target.value) : e.target.value)}
        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
      />
    </label>
  )
}

function Area({ label, valor, onChange, filas = 3 }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-slate-500">{label}</span>
      <textarea
        rows={filas}
        value={valor ?? ''}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
      />
    </label>
  )
}

function Tarjeta({ titulo, children, acciones }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-display text-base font-semibold text-slate-900">{titulo}</h2>
        {acciones}
      </div>
      {children}
    </section>
  )
}

// ── Documento imprimible ────────────────────────────────────
function DocumentoVista({ doc, registro }) {
  const { cliente: c, proyecto: p } = registro
  const secciones = doc.build(registro)
  const numero = p.numero || `${doc.prefijo}-${new Date().getFullYear()}-001`

  return (
    <article className="doc-hoja">
      <header className="doc-encabezado">
        <div>
          <p className="doc-marca">{PRESTADOR.nombre}</p>
          <p className="doc-marca-sub">
            RUT {PRESTADOR.rut} · {PRESTADOR.giro} · {PRESTADOR.ciudad}
          </p>
          <p className="doc-marca-sub">
            {PRESTADOR.email} · {PRESTADOR.sitio}
          </p>
        </div>
        <p className="doc-folio">{numero}</p>
      </header>

      <h1 className="doc-titulo">{doc.nombre}</h1>
      <p className="doc-subtitulo">{doc.subtitulo}</p>

      <table className="doc-tabla">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>RUT</th>
            <th>Fecha</th>
            <th>Documento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{c.nombre || '[Nombre o razón social]'}</td>
            <td>{c.rut || '[RUT]'}</td>
            <td>{fechaLarga(p.fecha)}</td>
            <td>{numero}</td>
          </tr>
        </tbody>
      </table>

      {secciones.map((s, i) => (
        <section key={i} className="doc-seccion">
          <h2 className="doc-h2">{s.titulo}</h2>

          {s.tipo === 'parrafo' && <p className="doc-parrafo">{s.texto}</p>}

          {s.tipo === 'lista' && (
            <ul className="doc-lista">
              {s.items.map((t, j) => (
                <li key={j}>{t}</li>
              ))}
            </ul>
          )}

          {s.tipo === 'tabla' && (
            <table className="doc-tabla">
              <thead>
                <tr>
                  {s.encabezados.map((h, j) => (
                    <th key={j}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {s.filas.map((fila, j) => (
                  <tr key={j}>
                    {fila.map((celda, k) => (
                      <td key={k}>{celda}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {s.tipo === 'campos' && (
            <>
              <div className="doc-campos">
                {s.campos.map((campo, j) => (
                  <p key={j}>
                    <span>{campo}:</span>
                    <span className="doc-linea" />
                  </p>
                ))}
              </div>
              {s.nota && <p className="doc-nota">{s.nota}</p>}
            </>
          )}

          {s.tipo === 'firma' && (
            <div className="doc-firmas">
              {s.lineas.map((par, j) => (
                <p key={j}>
                  {par.map((etiqueta, k) => (
                    <span key={k}>
                      {etiqueta}: <span className="doc-linea" />
                    </span>
                  ))}
                </p>
              ))}
            </div>
          )}
        </section>
      ))}

      <footer className="doc-pie">
        {PRESTADOR.nombre} · RUT {PRESTADOR.rut} · {PRESTADOR.email} · {PRESTADOR.sitio}
      </footer>
    </article>
  )
}

// ── Panel ───────────────────────────────────────────────────
export default function AdminPanel() {
  const [estado, setEstado] = useState(estadoInicial)
  const [listo, setListo] = useState(false)
  const [pestana, setPestana] = useState('proyecto')

  useEffect(() => {
    setEstado(cargar())
    setListo(true)
  }, [])

  useEffect(() => {
    if (!listo) return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(estado))
  }, [estado, listo])

  const activo = useMemo(() => {
    const encontrado = estado.proyectos.find((p) => p.id === estado.activo)
    return encontrado || estado.proyectos[0]
  }, [estado])

  const tasa = tasaDe(estado.anio)

  const actualizar = (cambios) =>
    setEstado((prev) => ({
      ...prev,
      proyectos: prev.proyectos.map((p) => (p.id === activo.id ? { ...p, ...cambios } : p)),
    }))

  const setCliente = (campo, valor) => actualizar({ cliente: { ...activo.cliente, [campo]: valor } })
  const setProyecto = (campo, valor) => actualizar({ proyecto: { ...activo.proyecto, [campo]: valor } })

  const crearProyecto = () => {
    const nuevo = proyectoVacio()
    setEstado((prev) => ({ ...prev, proyectos: [...prev.proyectos, nuevo], activo: nuevo.id }))
    setPestana('proyecto')
  }

  const eliminarProyecto = () => {
    if (estado.proyectos.length === 1) return
    if (!window.confirm(`¿Eliminar "${activo.cliente.nombre || 'sin nombre'}" y sus pagos?`)) return
    setEstado((prev) => {
      const restantes = prev.proyectos.filter((p) => p.id !== activo.id)
      return { ...prev, proyectos: restantes, activo: restantes[0].id }
    })
  }

  // Genera el plan de boletas a partir de los montos líquidos acordados.
  const generarPagos = () => {
    const p = activo.proyecto
    const base = [
      { concepto: CONCEPTOS_BOLETA.anticipo, liquido: p.cuota1, tipo: 'anticipo' },
      { concepto: CONCEPTOS_BOLETA.saldo, liquido: p.cuota2, tipo: 'saldo' },
    ]
    if (p.mantencion > 0) {
      base.push({ concepto: CONCEPTOS_BOLETA.mantencion, liquido: p.mantencion, tipo: 'mantencion' })
    }
    actualizar({
      pagos: base.map((b) => ({ id: nuevoId(), fecha: hoy(), estado: 'pendiente', boleta: '', ...b })),
    })
  }

  const agregarPago = (tipo = 'mantencion') =>
    actualizar({
      pagos: [
        ...activo.pagos,
        {
          id: nuevoId(),
          concepto: CONCEPTOS_BOLETA[tipo],
          liquido: tipo === 'mantencion' ? activo.proyecto.mantencion : 0,
          tipo,
          fecha: hoy(),
          estado: 'pendiente',
          boleta: '',
        },
      ],
    })

  const setPago = (id, campo, valor) =>
    actualizar({ pagos: activo.pagos.map((x) => (x.id === id ? { ...x, [campo]: valor } : x)) })

  const quitarPago = (id) => actualizar({ pagos: activo.pagos.filter((x) => x.id !== id) })

  const totales = useMemo(() => {
    const liquido = activo.pagos.reduce((a, x) => a + Number(x.liquido || 0), 0)
    const bruto = activo.pagos.reduce((a, x) => a + brutoDesdeLiquido(x.liquido, tasa), 0)
    const emitido = activo.pagos
      .filter((x) => x.estado === 'boleta emitida')
      .reduce((a, x) => a + Number(x.liquido || 0), 0)
    return { liquido, bruto, retencion: bruto - liquido, emitido, pendiente: liquido - emitido }
  }, [activo.pagos, tasa])

  const exportar = () => {
    const blob = new Blob([JSON.stringify(estado, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `respaldo-admin-${hoy()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const importar = (evento) => {
    const archivo = evento.target.files?.[0]
    if (!archivo) return
    const lector = new FileReader()
    lector.onload = () => {
      try {
        const datos = JSON.parse(String(lector.result))
        if (datos?.proyectos?.length) setEstado({ ...datos, activo: datos.proyectos[0].id })
      } catch {
        window.alert('El archivo no es un respaldo válido.')
      }
    }
    lector.readAsText(archivo)
    evento.target.value = ''
  }

  if (!listo) return <div className="p-10 text-sm text-slate-400">Cargando panel…</div>

  const p = activo.proyecto
  const c = activo.cliente
  const doc = docPorId(activo.docId)

  const pestanas = [
    ['proyecto', 'Cliente y proyecto'],
    ['documentos', 'Documentos'],
    ['boletas', 'Boletas y pagos'],
    ['datos', 'Respaldo'],
  ]

  return (
    <div className="admin-root min-h-screen bg-slate-50">
      <header className="admin-oculto-impresion border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <div>
            <p className="font-display text-lg font-semibold text-slate-900">Panel interno</p>
            <p className="text-xs text-slate-500">
              Documentos y boletas de honorarios · retención {(tasa * 100).toFixed(2)}% ({estado.anio})
            </p>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={estado.activo || activo.id}
              onChange={(e) => setEstado((prev) => ({ ...prev, activo: e.target.value }))}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
            >
              {estado.proyectos.map((x) => (
                <option key={x.id} value={x.id}>
                  {x.cliente.nombre || 'Cliente sin nombre'} — {x.proyecto.titulo || 'sin título'}
                </option>
              ))}
            </select>
            <button
              onClick={crearProyecto}
              className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white hover:bg-brand-700"
            >
              Nuevo
            </button>
            <button
              onClick={eliminarProyecto}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
            >
              Eliminar
            </button>
          </div>
        </div>
        <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5">
          {pestanas.map(([id, label]) => (
            <button
              key={id}
              onClick={() => setPestana(id)}
              className={`whitespace-nowrap border-b-2 px-3 py-2 text-sm ${
                pestana === id
                  ? 'border-brand-600 font-medium text-brand-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-6xl space-y-5 px-5 py-6">
        {pestana === 'proyecto' && (
          <>
            <Tarjeta titulo="Datos del cliente">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Campo label="Nombre o razón social" valor={c.nombre} onChange={(v) => setCliente('nombre', v)} />
                <Campo label="RUT" valor={c.rut} onChange={(v) => setCliente('rut', v)} />
                <Campo label="Persona de contacto" valor={c.contacto} onChange={(v) => setCliente('contacto', v)} />
                <Campo label="Correo" valor={c.email} onChange={(v) => setCliente('email', v)} />
                <Campo label="WhatsApp / teléfono" valor={c.telefono} onChange={(v) => setCliente('telefono', v)} />
                <Campo label="Ciudad" valor={c.ciudad} onChange={(v) => setCliente('ciudad', v)} />
              </div>
            </Tarjeta>

            <Tarjeta titulo="Proyecto">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Campo label="Título del proyecto" valor={p.titulo} onChange={(v) => setProyecto('titulo', v)} />
                <Campo label="N° de documento" valor={p.numero} onChange={(v) => setProyecto('numero', v)} />
                <Campo label="Fecha" tipo="date" valor={p.fecha} onChange={(v) => setProyecto('fecha', v)} />
                <Campo label="URL del sitio" valor={p.url} onChange={(v) => setProyecto('url', v)} />
                <Campo label="Plazo (días hábiles)" valor={p.plazo} onChange={(v) => setProyecto('plazo', v)} />
                <Campo label="Rondas de revisión" tipo="number" valor={p.revisiones} onChange={(v) => setProyecto('revisiones', v)} />
              </div>
              <div className="mt-3">
                <Area label="Objetivo / descripción" valor={p.descripcion} onChange={(v) => setProyecto('descripcion', v)} />
              </div>
            </Tarjeta>

            <Tarjeta titulo="Montos líquidos acordados">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Campo label="Total líquido" tipo="number" valor={p.total} onChange={(v) => setProyecto('total', v)} />
                <Campo label="1ª cuota (anticipo)" tipo="number" valor={p.cuota1} onChange={(v) => setProyecto('cuota1', v)} />
                <Campo label="2ª cuota (saldo)" tipo="number" valor={p.cuota2} onChange={(v) => setProyecto('cuota2', v)} />
                <Campo label="Mantención mensual" tipo="number" valor={p.mantencion} onChange={(v) => setProyecto('mantencion', v)} />
              </div>
              <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-xs text-brand-800">
                Con retención {(tasa * 100).toFixed(2)}%: para recibir {clp(p.total)} líquidos debes emitir boletas por{' '}
                {clp(brutoDesdeLiquido(p.total, tasa))} brutos ({clp(brutoDesdeLiquido(p.total, tasa) - p.total)} de
                retención). Anticipo: {clp(brutoDesdeLiquido(p.cuota1, tasa))} bruto · Mantención:{' '}
                {clp(brutoDesdeLiquido(p.mantencion, tasa))} bruto.
              </p>
            </Tarjeta>

            <Tarjeta titulo="Entrega y garantía">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Campo label="Garantía (días)" tipo="number" valor={p.garantia} onChange={(v) => setProyecto('garantia', v)} />
                <Campo label="Vigencia cotización (días)" tipo="number" valor={p.vigencia} onChange={(v) => setProyecto('vigencia', v)} />
                <Campo label="Fecha de publicación" tipo="date" valor={p.fechaEntrega} onChange={(v) => setProyecto('fechaEntrega', v)} />
                <Campo label="Garantía hasta" tipo="date" valor={p.fechaGarantia} onChange={(v) => setProyecto('fechaGarantia', v)} />
                <Campo label="Versión entregada" valor={p.version} onChange={(v) => setProyecto('version', v)} />
                <Campo label="Productos incluidos (tienda)" valor={p.productos} onChange={(v) => setProyecto('productos', v)} />
              </div>
              <div className="mt-3">
                <Area label="Pendientes acordados" valor={p.pendientes} onChange={(v) => setProyecto('pendientes', v)} filas={2} />
              </div>
            </Tarjeta>
          </>
        )}

        {pestana === 'documentos' && (
          <>
            <Tarjeta
              titulo="Documento a generar"
              acciones={
                <button
                  onClick={() => window.print()}
                  className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
                >
                  Imprimir / guardar PDF
                </button>
              }
            >
              <div className="flex flex-wrap gap-2">
                {TIPOS_DOC.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => actualizar({ docId: d.id })}
                    className={`rounded-full border px-3 py-1.5 text-sm ${
                      activo.docId === d.id
                        ? 'border-brand-600 bg-brand-50 font-medium text-brand-700'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {d.nombre}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-xs text-slate-500">
                El documento usa los datos de la pestaña anterior. Para PDF: imprimir y elegir "Guardar como PDF".
              </p>
            </Tarjeta>

            <div className="doc-contenedor">
              <DocumentoVista doc={doc} registro={activo} />
            </div>
          </>
        )}

        {pestana === 'boletas' && (
          <>
            <Tarjeta titulo="Calculadora de boleta de honorarios">
              <div className="mb-4 flex flex-wrap items-end gap-3">
                <label className="block">
                  <span className="mb-1 block text-xs font-medium text-slate-500">Año de emisión</span>
                  <select
                    value={estado.anio}
                    onChange={(e) => setEstado((prev) => ({ ...prev, anio: Number(e.target.value) }))}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
                  >
                    {Object.keys(TASAS_RETENCION).map((a) => (
                      <option key={a} value={a}>
                        {a} — {(TASAS_RETENCION[a] * 100).toFixed(2)}%
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-sm">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wide text-slate-500">
                      <th className="pb-2">Quiero recibir (líquido)</th>
                      <th className="pb-2">Boleta bruta</th>
                      <th className="pb-2">Retención</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[p.cuota1, p.total, p.mantencion].map((valor, i) => {
                      const bruto = brutoDesdeLiquido(valor, tasa)
                      return (
                        <tr key={i}>
                          <td className="py-2 font-medium text-slate-900">{clp(valor)}</td>
                          <td className="py-2 text-brand-700">{clp(bruto)}</td>
                          <td className="py-2 text-slate-500">{clp(bruto - valor)}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Si el cliente es empresa, retiene y te deposita el líquido. Si no retiene, recibes el bruto y debes
                reservar {clp(retencionDe(brutoDesdeLiquido(p.total, tasa), tasa))} para el SII. Un pago bruto de{' '}
                {clp(p.total)} deja {clp(liquidoDesdeBruto(p.total, tasa))} en tu bolsillo.
              </p>
            </Tarjeta>

            <Tarjeta
              titulo="Boletas del proyecto"
              acciones={
                <div className="flex gap-2">
                  <button
                    onClick={generarPagos}
                    className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white hover:bg-brand-700"
                  >
                    Generar plan de pagos
                  </button>
                  <button
                    onClick={() => agregarPago('mantencion')}
                    className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                  >
                    + Mantención
                  </button>
                </div>
              }
            >
              {activo.pagos.length === 0 ? (
                <p className="text-sm text-slate-500">
                  Sin boletas registradas. Genera el plan de pagos a partir de los montos del proyecto.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[860px] text-sm">
                    <thead>
                      <tr className="text-left text-xs uppercase tracking-wide text-slate-500">
                        <th className="pb-2">Concepto</th>
                        <th className="pb-2">Fecha</th>
                        <th className="pb-2">Líquido</th>
                        <th className="pb-2">Bruto boleta</th>
                        <th className="pb-2">Retención</th>
                        <th className="pb-2">Estado</th>
                        <th className="pb-2">N° boleta</th>
                        <th className="pb-2" />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {activo.pagos.map((pago) => {
                        const bruto = brutoDesdeLiquido(pago.liquido, tasa)
                        return (
                          <tr key={pago.id}>
                            <td className="py-2 pr-2">
                              <input
                                value={pago.concepto}
                                onChange={(e) => setPago(pago.id, 'concepto', e.target.value)}
                                className="w-64 rounded border border-slate-200 px-2 py-1"
                              />
                            </td>
                            <td className="py-2 pr-2">
                              <input
                                type="date"
                                value={pago.fecha}
                                onChange={(e) => setPago(pago.id, 'fecha', e.target.value)}
                                className="rounded border border-slate-200 px-2 py-1"
                              />
                            </td>
                            <td className="py-2 pr-2">
                              <input
                                type="number"
                                value={pago.liquido}
                                onChange={(e) => setPago(pago.id, 'liquido', Number(e.target.value))}
                                className="w-28 rounded border border-slate-200 px-2 py-1"
                              />
                            </td>
                            <td className="py-2 pr-2 font-medium text-brand-700">{clp(bruto)}</td>
                            <td className="py-2 pr-2 text-slate-500">{clp(bruto - Number(pago.liquido || 0))}</td>
                            <td className="py-2 pr-2">
                              <select
                                value={pago.estado}
                                onChange={(e) => setPago(pago.id, 'estado', e.target.value)}
                                className="rounded border border-slate-200 px-2 py-1"
                              >
                                {ESTADOS_PAGO.map((e) => (
                                  <option key={e} value={e}>
                                    {e}
                                  </option>
                                ))}
                              </select>
                            </td>
                            <td className="py-2 pr-2">
                              <input
                                value={pago.boleta}
                                onChange={(e) => setPago(pago.id, 'boleta', e.target.value)}
                                placeholder="folio"
                                className="w-24 rounded border border-slate-200 px-2 py-1"
                              />
                            </td>
                            <td className="py-2 text-right">
                              <button
                                onClick={() => quitarPago(pago.id)}
                                className="text-xs text-slate-400 hover:text-red-600"
                              >
                                quitar
                              </button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ['Total líquido', totales.liquido],
                  ['Total bruto boletas', totales.bruto],
                  ['Retención acumulada', totales.retencion],
                  ['Pendiente de emitir', totales.pendiente],
                ].map(([label, valor]) => (
                  <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="font-display text-lg font-semibold text-slate-900">{clp(valor)}</p>
                  </div>
                ))}
              </div>
            </Tarjeta>

            <Tarjeta titulo="Texto sugerido para cotizaciones">
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="rounded-lg bg-slate-50 px-3 py-2">
                  Valor del servicio: {clp(p.total)} líquidos, pagaderos en dos cuotas de {clp(p.cuota1)} y{' '}
                  {clp(p.cuota2)}. Se emitirá boleta de honorarios.
                </li>
                <li className="rounded-lg bg-slate-50 px-3 py-2">
                  Mantención mensual: {clp(p.mantencion)} líquidos. Se emitirá boleta de honorarios.
                </li>
              </ul>
            </Tarjeta>
          </>
        )}

        {pestana === 'datos' && (
          <Tarjeta titulo="Respaldo de la información">
            <p className="mb-4 text-sm text-slate-600">
              Los datos se guardan solo en este navegador. Exporta un respaldo antes de limpiar el historial o cambiar
              de equipo.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={exportar}
                className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
              >
                Exportar respaldo JSON
              </button>
              <label className="cursor-pointer rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50">
                Importar respaldo
                <input type="file" accept="application/json" onChange={importar} className="hidden" />
              </label>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              {estado.proyectos.length} proyecto(s) guardado(s) · último editado: {activo.cliente.nombre || 'sin nombre'}
            </p>
          </Tarjeta>
        )}
      </main>
    </div>
  )
}
