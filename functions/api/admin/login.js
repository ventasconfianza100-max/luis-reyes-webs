import { isAdminKey, json } from '../../_lib/videos.js'

// POST /api/admin/login → valida la clave del panel en el servidor. Body: { key }
export async function onRequestPost({ request, env }) {
  const body = await request.json().catch(() => ({}))
  if (await isAdminKey(String(body.key || ''), env)) return json({ ok: true })
  await new Promise((resolve) => setTimeout(resolve, 800))
  return json({ ok: false }, 401)
}
