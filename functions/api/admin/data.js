import { json, requireAdmin } from '../../_lib/videos.js'

// Datos del panel (clientes, cotizaciones, boletas) guardados en R2.
// Cada guardado deja además una copia fechada en admin/historial/ (máximo una por hora).
const KEY = 'admin/datos.json'

// GET /api/admin/data → { data, updatedAt } o { data: null } si aún no hay copia.
export async function onRequestGet({ request, env }) {
  const denied = await requireAdmin(request, env)
  if (denied) return denied
  const object = await env.VIDEOS.get(KEY)
  if (!object) return json({ data: null, updatedAt: null })
  return json(await object.json())
}

// PUT /api/admin/data → guarda. Body: { data, updatedAt, baseAt }
// baseAt es la versión de la nube sobre la que se editó: si la nube ya tiene una
// más nueva (guardada desde otro equipo), se rechaza para no pisarla.
export async function onRequestPut({ request, env }) {
  const denied = await requireAdmin(request, env)
  if (denied) return denied
  const body = await request.json().catch(() => null)
  if (!Array.isArray(body?.data?.proyectos)) return json({ error: 'Datos no válidos.' }, 400)
  const current = await env.VIDEOS.get(KEY)
  if (current) {
    const { updatedAt } = await current.json()
    if (updatedAt && (body.baseAt || '') < updatedAt) return json({ error: 'Hay cambios más nuevos guardados desde otro equipo.', updatedAt }, 409)
  }
  const payload = JSON.stringify({ data: body.data, updatedAt: body.updatedAt || new Date().toISOString() })
  const hour = new Date().toISOString().slice(0, 13)
  await Promise.all([
    env.VIDEOS.put(KEY, payload, { httpMetadata: { contentType: 'application/json' } }),
    env.VIDEOS.put(`admin/historial/${hour}.json`, payload, { httpMetadata: { contentType: 'application/json' } }),
  ])
  return json({ ok: true })
}
