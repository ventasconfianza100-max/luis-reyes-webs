import { useEffect, useRef, useState } from 'react'

// Sincroniza los datos del panel (localStorage) con la nube.
// Al entrar trae la copia más reciente; luego sube cada cambio a los pocos segundos.
const STORAGE_KEY = 'lrw-admin-v1'
const META_KEY = 'lrw-admin-sync'

export default function useCloudSync(adminKey) {
  const [readyKey, setReadyKey] = useState(null)
  const [status, setStatus] = useState({ state: 'cargando', at: null })
  const lastSynced = useRef(null)

  useEffect(() => {
    if (!adminKey) { setReadyKey(''); return undefined }
    const headers = { authorization: `Bearer ${adminKey}`, 'content-type': 'application/json' }
    let cancelled = false

    const push = async (raw) => {
      const updatedAt = new Date().toISOString()
      try {
        const baseAt = window.localStorage.getItem(META_KEY) || ''
        const res = await fetch('/api/admin/data', { method: 'PUT', headers, body: JSON.stringify({ data: JSON.parse(raw), updatedAt, baseAt }) })
        if (res.status === 409) {
          lastSynced.current = raw
          setStatus({ state: 'conflicto', at: null })
          return
        }
        if (!res.ok) throw new Error()
        lastSynced.current = raw
        window.localStorage.setItem(META_KEY, updatedAt)
        setStatus({ state: 'guardado', at: updatedAt })
      } catch {
        setStatus((prev) => ({ ...prev, state: 'error' }))
      }
    }

    const start = async () => {
      const local = window.localStorage.getItem(STORAGE_KEY)
      const localAt = window.localStorage.getItem(META_KEY) || ''
      try {
        const res = await fetch('/api/admin/data', { headers })
        if (!res.ok) throw new Error()
        const cloud = await res.json()
        const valid = Array.isArray(cloud.data?.proyectos) && cloud.data.proyectos.every((p) => p?.cliente && p?.proyecto && Array.isArray(p?.pagos))
        if (valid && (!local || (cloud.updatedAt || '') > localAt)) {
          const raw = JSON.stringify(cloud.data)
          window.localStorage.setItem(STORAGE_KEY, raw)
          window.localStorage.setItem(META_KEY, cloud.updatedAt)
          lastSynced.current = raw
          setStatus({ state: 'guardado', at: cloud.updatedAt })
        } else if (local) {
          await push(local)
        } else {
          setStatus({ state: 'guardado', at: null })
        }
      } catch {
        lastSynced.current = local
        setStatus({ state: 'error', at: null })
      }
      if (!cancelled) setReadyKey(adminKey)
    }

    start()
    const timer = window.setInterval(() => {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw && raw !== lastSynced.current) push(raw)
    }, 4000)
    return () => { cancelled = true; window.clearInterval(timer) }
  }, [adminKey])

  return { ready: readyKey === adminKey, status }
}
