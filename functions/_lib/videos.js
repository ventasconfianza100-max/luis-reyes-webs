// Utilidades compartidas por las funciones de videos para clientes.
// Los videos viven en el bucket R2 enlazado como VIDEOS, bajo "videos/<id>".

// Hash SHA-256 de la clave del panel /admin. Solo vive en el servidor.
// Se puede reemplazar con la variable de entorno ADMIN_HASH.
const DEFAULT_HASH = 'ade736490d35726c05a6b1e740a1bd091b4f3cb303c3e908e0e44506dd62f681'

export const keyFor = (id) => `videos/${id}`

export const isValidId = (id) => /^[A-Za-z0-9_-]{16,40}$/.test(id || '')

export function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  })
}

async function sha256(value) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value))
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

export async function isAdminKey(key, env) {
  return Boolean(key) && (await sha256(key)) === (env.ADMIN_HASH || DEFAULT_HASH)
}

// Devuelve una respuesta de error si la petición no trae la clave del panel.
export async function requireAdmin(request, env) {
  if (!env.VIDEOS) return json({ error: 'El almacenamiento de videos no está configurado.' }, 503)
  const auth = request.headers.get('authorization') || ''
  if (!(await isAdminKey(auth.startsWith('Bearer ') ? auth.slice(7) : '', env))) {
    return json({ error: 'No autorizado.' }, 401)
  }
  return null
}

export function newId() {
  const bytes = crypto.getRandomValues(new Uint8Array(16))
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export function describe(object) {
  const meta = object.customMetadata || {}
  return {
    id: object.key.replace('videos/', ''),
    title: meta.title || 'Video',
    client: meta.client || '',
    fileName: meta.fileName || '',
    createdAt: meta.createdAt || object.uploaded?.toISOString?.() || '',
    size: object.size,
  }
}
