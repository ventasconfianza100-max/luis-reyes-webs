import { describe, json, keyFor, newId, requireAdmin } from '../../_lib/videos.js'

// GET /api/videos → lista de videos subidos (solo panel).
export async function onRequestGet({ request, env }) {
  const denied = await requireAdmin(request, env)
  if (denied) return denied
  const listed = await env.VIDEOS.list({ prefix: 'videos/', include: ['customMetadata'] })
  const videos = listed.objects.map(describe).sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  return json({ videos })
}

// POST /api/videos → inicia una subida por partes. Body: { title, client, fileName, type }
export async function onRequestPost({ request, env }) {
  const denied = await requireAdmin(request, env)
  if (denied) return denied
  const body = await request.json().catch(() => ({}))
  const type = String(body.type || '')
  if (!type.startsWith('video/')) return json({ error: 'El archivo debe ser un video.' }, 400)
  const id = newId()
  const upload = await env.VIDEOS.createMultipartUpload(keyFor(id), {
    httpMetadata: { contentType: type },
    customMetadata: {
      title: String(body.title || '').slice(0, 120) || 'Video',
      client: String(body.client || '').slice(0, 120),
      fileName: String(body.fileName || '').slice(0, 200),
      createdAt: new Date().toISOString(),
    },
  })
  return json({ id, uploadId: upload.uploadId })
}
