const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Profesionales', href: '/proyectos', route: true },
  { label: 'Empresas', href: '/proyectos-empresas', route: true },
  { label: '¿Qué incluye?', href: '#incluye' },
  { label: 'Contacto', href: 'https://wa.me/56922012534', external: true },
]

export default function Navbar({ onNavigate }) {
  const handleClick = (event, link) => {
    if (!link.route) return

    event.preventDefault()
    onNavigate(link.href)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/50 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <span className="font-bold text-slate-800 text-lg">
          Luis <span className="text-violet-500">Reyes</span>
        </span>

        {/* Links — desktop */}
        <div className="hidden sm:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => handleClick(event, link)}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                link.external
                  ? 'bg-violet-500 text-white hover:bg-violet-600 ml-2'
                  : 'text-slate-600 hover:text-violet-600 hover:bg-violet-50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile — solo botón contacto */}
        <a
          href="/proyectos"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/proyectos')
          }}
          className="sm:hidden bg-violet-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-violet-600 transition-all"
        >
          Proyectos
        </a>
      </div>
    </nav>
  )
}
