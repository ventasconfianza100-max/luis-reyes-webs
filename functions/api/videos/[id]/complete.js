import { isValidId, json, keyFor, requireAdmin } from '../../../_lib/videos.js'

// POST /api/videos/:id/complete → cierra la subida. Body: { uploadId, parts }
// Con { uploadId, abort: true } cancela una subida a medias.
export async function onRequestPost({ request, env, params }) {
  const denied = await requireAdmin(request, env)
  if (denied) return denied
  if (!isValidId(params.id)) return json({ error: 'Video no válido.' }, 400)
  const body = await request.json().catch(() => ({}))
  if (!body.uploadId) return json({ error: 'Falta la subida.' }, 400)
  const upload = env.VIDEOS.resumeMultipartUpload(keyFor(params.id), body.uploadId)
  if (body.abort) {
    await upload.abort()
    return json({ ok: true })
  }
  await upload.complete(body.parts || [])
  return json({ ok: true, id: params.id })
}
