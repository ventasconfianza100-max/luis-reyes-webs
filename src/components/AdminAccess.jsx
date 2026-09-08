import { useEffect, useState } from 'react'
import AdminPanel from './AdminPanel'

const SESSION_KEY = 'lrw-admin-unlocked'
const PASSWORD_HASH = '3155e25041de4d7c2be0f8c8826f0d49bd4bc6e0c7eb44454511756bd3d0f56b'

async function hash(value) {
  const bytes = new TextEncoder().encode(value)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('')
}

export default function AdminAccess() {
  const [unlocked, setUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setUnlocked(window.sessionStorage.getItem(SESSION_KEY) === 'yes')
  }, [])

  const submit = async (event) => {
    event.preventDefault()
    if (await hash(password) !== PASSWORD_HASH) {
      setError('La clave no es correcta. Inténtalo nuevamente.')
      setPassword('')
      return
    }
    window.sessionStorage.setItem(SESSION_KEY, 'yes')
    setUnlocked(true)
  }

  const logout = () => {
    window.sessionStorage.removeItem(SESSION_KEY)
    setUnlocked(false)
    setPassword('')
  }

  if (unlocked) return <AdminPanel onLogout={logout} />

  return (
    <main className="admin-login grid min-h-screen place-items-center overflow-hidden bg-slate-950 px-5 py-10">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,.28),transparent_32%),radial-gradient(circle_at_85%_85%,rgba(6,182,212,.18),transparent_30%)]" />
      <section className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-white/[.97] p-7 shadow-2xl shadow-black/30 sm:p-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-brand-700">← Volver al sitio</a>
        <div className="mt-7 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 font-display text-xs font-extrabold tracking-widest text-white shadow-lg">LR</div>
        <p className="mt-5 text-xs font-bold uppercase tracking-[.16em] text-brand-600">Acceso privado</p>
        <h1 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-950">Panel administrativo</h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">Ingresa tu clave para gestionar clientes, documentos, pagos y boletas.</p>
        <form onSubmit={submit} className="mt-6">
          <label className="block text-sm font-semibold text-slate-700" htmlFor="admin-password">Clave de acceso</label>
          <div className="relative mt-2">
            <input id="admin-password" type={visible ? 'text' : 'password'} value={password} onChange={(event) => { setPassword(event.target.value); setError('') }} autoComplete="current-password" autoFocus className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-16 text-base text-slate-950 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100" />
            <button type="button" onClick={() => setVisible((value) => !value)} className="absolute inset-y-0 right-3 text-xs font-semibold text-slate-500 hover:text-brand-700">{visible ? 'Ocultar' : 'Ver'}</button>
          </div>
          {error && <p role="alert" className="mt-2 text-sm font-medium text-red-600">{error}</p>}
          <button type="submit" className="mt-4 w-full rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:-translate-y-0.5 hover:bg-brand-700">Entrar al panel</button>
        </form>
        <p className="mt-5 border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-400">La sesión se cierra al terminar la sesión del navegador. Los datos permanecen guardados solamente en este dispositivo.</p>
      </section>
    </main>
  )
}
