import { useState } from 'react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '/proyectos', route: true },
  { label: 'Software', href: '/desarrollo-software-aplicaciones', route: true },
  { label: 'Blog', href: '/blog', route: true },
  { label: 'Planes', href: '#planes' },
  { label: 'Diagnóstico', href: '/diagnostico-web', route: true },
  { label: 'Contacto', href: 'https://wa.me/56922012534', external: true },
]

export default function Navbar({ onNavigate }) {
  const [open, setOpen] = useState(false)

  const handleClick = (event, link) => {
    if (link.route) {
      event.preventDefault()
      onNavigate(link.href)
    }
    setOpen(false)
  }

  return (
    <nav className="site-nav sticky top-0 z-50 border-b border-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[3.75rem] flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/')
            setOpen(false)
          }}
          className="group flex items-center gap-3 font-display font-bold text-slate-950 text-base sm:text-lg tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-[.65rem] bg-slate-950 text-[10px] font-extrabold tracking-widest text-white shadow-lg shadow-violet-900/20 transition-transform group-hover:-rotate-3">LR</span>
          <span>Luis Reyes <span className="text-brand-600">Castro</span><small className="hidden lg:block font-sans text-[10px] font-semibold uppercase tracking-[.18em] text-slate-400 mt-0.5">Diseño & desarrollo web</small></span>
        </a>

        {/* Links — desktop */}
        <div className="hidden items-center gap-0.5 rounded-2xl border border-white/80 bg-white/55 p-1 shadow-sm shadow-slate-900/5 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => handleClick(event, link)}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={`px-2.5 py-1.5 rounded-xl text-[13px] font-semibold transition-all ${
                link.external
                  ? 'bg-slate-950 text-white hover:bg-brand-700 ml-1 shadow-md shadow-slate-900/15'
                  : 'text-slate-600 hover:text-brand-700 hover:bg-white hover:shadow-sm'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Botón hamburguesa — móvil */}
        <button
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-700 hover:bg-brand-50"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Panel móvil */}
      {open && (
        <div className="rounded-b-2xl border-t border-slate-200/60 bg-white/95 shadow-xl shadow-slate-900/10 backdrop-blur-xl md:hidden">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => handleClick(event, link)}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  link.external
                    ? 'bg-brand-600 text-white hover:bg-brand-700 text-center mt-1'
                    : 'text-slate-700 hover:text-brand-700 hover:bg-brand-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
