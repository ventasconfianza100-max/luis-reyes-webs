// Utilidades compartidas por las funciones de videos para clientes.
// Los videos viven en el bucket R2 enlazado como VIDEOS, bajo "videos/<id>".

// Hash SHA-256 de la clave del panel (el mismo que usa /admin).
// Se puede reemplazar con la variable de entorno ADMIN_HASH.
const DEFAULT_HASH = '3155e25041de4d7c2be0f8c8826f0d49bd4bc6e0c7eb44454511756bd3d0f56b'

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

// Devuelve una respuesta de error si la petición no trae la clave del panel.
export async function requireAdmin(request, env) {
  if (!env.VIDEOS) return json({ error: 'El almacenamiento de videos no está configurado.' }, 503)
  const auth = request.headers.get('authorization') || ''
  const key = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  if (!key || (await sha256(key)) !== (env.ADMIN_HASH || DEFAULT_HASH)) {
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
