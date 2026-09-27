import { isValidId, json, keyFor, requireAdmin } from '../../../_lib/videos.js'

// PUT /api/videos/:id/part?uploadId=…&part=N → sube un trozo del video.
export async function onRequestPut({ request, env, params }) {
  const denied = await requireAdmin(request, env)
  if (denied) return denied
  if (!isValidId(params.id)) return json({ error: 'Video no válido.' }, 400)
  const url = new URL(request.url)
  const uploadId = url.searchParams.get('uploadId')
  const partNumber = Number(url.searchParams.get('part'))
  if (!uploadId || !Number.isInteger(partNumber) || partNumber < 1) return json({ error: 'Parte no válida.' }, 400)
  const upload = env.VIDEOS.resumeMultipartUpload(keyFor(params.id), uploadId)
  const part = await upload.uploadPart(partNumber, request.body)
  return json(part)
}
