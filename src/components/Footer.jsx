const footerLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Profesionales', href: '/proyectos' },
  { label: 'Empresas', href: '/proyectos-empresas' },
  { label: 'Blog', href: '/blog' },
  { label: 'Agenda', href: '/agenda' },
]

export default function Footer({ onNavigate }) {
  const go = (event, href) => {
    if (!onNavigate) return
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <footer className="text-center py-8 px-4 text-slate-400 text-sm">
      <nav aria-label="Enlaces del sitio" className="mb-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
        {footerLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(event) => go(event, link.href)}
            className="text-violet-400 hover:text-violet-600 transition-colors font-medium"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <p>© {new Date().getFullYear()} Luis Reyes Castro · Diseño webs para psicólogos en Chile</p>
      <p className="mt-1">
        <a
          href="https://wa.me/56922012534"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-400 hover:text-violet-600 transition-colors"
        >
          +56 9 2201 2534
        </a>
      </p>
    </footer>
  )
}
