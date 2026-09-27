import { useEffect, useState } from 'react'

const CHUNK = 20 * 1024 * 1024

const formatSize = (bytes) => (bytes > 1024 * 1024 * 1024 ? `${(bytes / 1024 / 1024 / 1024).toFixed(1)} GB` : `${Math.max(1, Math.round(bytes / 1024 / 1024))} MB`)
const formatDate = (iso) => (iso ? new Date(iso).toLocaleDateString('es-CL', { day: 'numeric', month: 'short', year: 'numeric' }) : '')

export default function AdminVideos({ adminKey }) {
  const [videos, setVideos] = useState([])
  const [error, setError] = useState('')
  const [title, setTitle] = useState('')
  const [client, setClient] = useState('')
  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(null)
  const [copied, setCopied] = useState('')

  const api = (path, options = {}) => fetch(path, { ...options, headers: { ...(options.headers || {}), authorization: `Bearer ${adminKey}` } }).then(async (res) => {
    const data = await res.json().catch(() => ({}))
    if (!res.ok) throw new Error(data.error || 'No se pudo completar la acción.')
    return data
  })

  const load = () => api('/api/videos').then((data) => setVideos(data.videos)).catch((e) => setError(e.message))

  useEffect(() => { load() }, [])

  const upload = async (event) => {
    event.preventDefault()
    if (!file) return
    setError('')
    setProgress(0)
    let started = null
    try {
      started = await api('/api/videos', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ title: title || file.name.replace(/\.[^.]+$/, ''), client, fileName: file.name, type: file.type || 'video/mp4' }),
      })
      const parts = []
      const total = Math.ceil(file.size / CHUNK)
      for (let i = 0; i < total; i += 1) {
        const part = await api(`/api/videos/${started.id}/part?uploadId=${encodeURIComponent(started.uploadId)}&part=${i + 1}`, {
          method: 'PUT',
          body: file.slice(i * CHUNK, (i + 1) * CHUNK),
        })
        parts.push({ partNumber: part.partNumber, etag: part.etag })
        setProgress(Math.round(((i + 1) / total) * 100))
      }
      await api(`/api/videos/${started.id}/complete`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ uploadId: started.uploadId, parts }),
      })
      setTitle('')
      setClient('')
      setFile(null)
      event.target.reset()
      await load()
    } catch (e) {
      setError(e.message)
      if (started) api(`/api/videos/${started.id}/complete`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ uploadId: started.uploadId, abort: true }) }).catch(() => {})
    } finally {
      setProgress(null)
    }
  }

  const link = (id) => `${window.location.origin}/video/${id}`

  const copy = async (id) => {
    await navigator.clipboard.writeText(link(id))
    setCopied(id)
    window.setTimeout(() => setCopied(''), 2000)
  }

  const remove = async (video) => {
    if (!window.confirm(`¿Borrar "${video.title}"? El enlace dejará de funcionar.`)) return
    try {
      await api(`/api/videos/${video.id}`, { method: 'DELETE' })
      await load()
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-8">
      <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <form onSubmit={upload} className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">Subir un video para un cliente</h2>
          <p className="mt-1 text-sm text-slate-500">Se genera un enlace privado para que el cliente lo vea desde tu página, sin YouTube.</p>
          <label className="mt-5 block text-sm font-medium text-slate-700">Título
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ej.: Recorrido por tu nueva tienda" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
          </label>
          <label className="mt-3 block text-sm font-medium text-slate-700">Cliente
            <input value={client} onChange={(e) => setClient(e.target.value)} placeholder="Ej.: RZ Juguetería" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
          </label>
          <label className="mt-3 block text-sm font-medium text-slate-700">Archivo de video
            <input type="file" accept="video/*" required onChange={(e) => setFile(e.target.files[0] || null)} className="mt-1 block w-full text-sm" />
          </label>
          {progress !== null && (
            <div className="mt-4">
              <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full bg-brand-600 transition-all" style={{ width: `${progress}%` }} /></div>
              <p className="mt-1 text-xs text-slate-500">Subiendo… {progress}% (no cierres esta pestaña)</p>
            </div>
          )}
          <button type="submit" disabled={!file || progress !== null} className="mt-5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">Subir video</button>
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        </form>

        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">Videos compartidos</h2>
          {videos.length === 0 && <p className="mt-3 text-sm text-slate-500">Todavía no hay videos.</p>}
          <ul className="mt-3 divide-y divide-slate-100">
            {videos.map((video) => (
              <li key={video.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
                <div className="min-w-0">
                  <p className="truncate font-semibold text-slate-900">{video.title}</p>
                  <p className="text-xs text-slate-500">{[video.client, formatDate(video.createdAt), formatSize(video.size)].filter(Boolean).join(' · ')}</p>
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => copy(video.id)} className="rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white">{copied === video.id ? '¡Copiado!' : 'Copiar enlace'}</button>
                  <a href={link(video.id)} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600">Ver</a>
                  <button type="button" onClick={() => remove(video)} className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600 hover:border-red-200 hover:text-red-700">Borrar</button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
