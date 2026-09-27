import { isValidId, json, keyFor, requireAdmin } from '../../../_lib/videos.js'

// GET /api/videos/:id → el video, con soporte de rangos para poder adelantar.
export async function onRequestGet({ request, env, params }) {
  if (!env.VIDEOS || !isValidId(params.id)) return new Response('No encontrado', { status: 404 })
  const object = await env.VIDEOS.get(keyFor(params.id), { range: request.headers })
  if (!object) return new Response('No encontrado', { status: 404 })

  const headers = new Headers()
  object.writeHttpMetadata(headers)
  headers.set('etag', object.httpEtag)
  headers.set('accept-ranges', 'bytes')
  headers.set('cache-control', 'private, max-age=3600')
  headers.set('x-robots-tag', 'noindex, nofollow')

  const range = object.range
  if (range && request.headers.has('range')) {
    const hasSuffix = range.suffix !== undefined
    const offset = hasSuffix ? object.size - range.suffix : range.offset || 0
    const length = hasSuffix ? range.suffix : range.length ?? object.size - offset
    headers.set('content-range', `bytes ${offset}-${offset + length - 1}/${object.size}`)
    headers.set('content-length', String(length))
    return new Response(object.body, { status: 206, headers })
  }
  headers.set('content-length', String(object.size))
  return new Response(object.body, { headers })
}

// DELETE /api/videos/:id → borra el video (solo panel).
export async function onRequestDelete({ request, env, params }) {
  const denied = await requireAdmin(request, env)
  if (denied) return denied
  if (!isValidId(params.id)) return json({ error: 'Video no válido.' }, 400)
  await env.VIDEOS.delete(keyFor(params.id))
  return json({ ok: true })
}
