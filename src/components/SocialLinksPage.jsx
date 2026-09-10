const links = [
  {
    name: 'WhatsApp',
    label: 'Conversemos sobre tu proyecto',
    href: 'https://api.whatsapp.com/send/?phone=56922012534',
    color: 'social-link--whatsapp',
    icon: (
      <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.3-6.2-3.7-8.4Zm-8.2 18.2c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.8 1 1-3.7-.2-.4A9.8 9.8 0 0 1 2.3 12a9.9 9.9 0 0 1 16.9-7 9.8 9.8 0 0 1 2.9 7c0 5.4-4.4 9.7-9.8 9.7Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6L9.1 7c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.2 2.4 3.7 5.9 5.2 2.2.9 3 .9 4.1.8.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" /></svg>
    ),
  },
  {
    name: 'Instagram',
    label: '@luisreyesweb.cl',
    href: 'https://www.instagram.com/luisreyesweb.cl/',
    color: 'social-link--instagram',
    icon: (
      <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.2 1.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg>
    ),
  },
  {
    name: 'LinkedIn',
    label: 'Experiencia y red profesional',
    href: 'https://www.linkedin.com/in/luisreyeswebs/',
    color: 'social-link--linkedin',
    icon: (
      <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true"><path d="M5.3 7.9H1.2V21h4.1V7.9ZM3.3 1.3A2.4 2.4 0 1 0 3.3 6a2.4 2.4 0 0 0 0-4.7ZM21 13.5c0-4-2.1-5.9-5-5.9a4.3 4.3 0 0 0-3.9 2.2V7.9H8V21h4.1v-6.5c0-1.7.3-3.4 2.5-3.4 2.2 0 2.2 2 2.2 3.5V21H21v-7.5Z" /></svg>
    ),
  },
  {
    name: 'TikTok',
    label: '@luisreyesweb.cl',
    href: 'https://www.tiktok.com/@luisreyesweb.cl',
    color: 'social-link--tiktok',
    icon: (
      <svg className="tiktok-mark" viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
        <path d="M14.2 3.5v10.1a4.35 4.35 0 1 1-3.6-4.28v2.55a1.9 1.9 0 1 0 1.25 1.78V3.5h2.35c.38 2.15 1.65 3.45 3.8 3.9v2.4a7.1 7.1 0 0 1-3.8-1.55" stroke="#25f4ee" strokeWidth="2.45" strokeLinecap="round" strokeLinejoin="round" transform="translate(-.45 .35)" />
        <path d="M14.2 3.5v10.1a4.35 4.35 0 1 1-3.6-4.28v2.55a1.9 1.9 0 1 0 1.25 1.78V3.5h2.35c.38 2.15 1.65 3.45 3.8 3.9v2.4a7.1 7.1 0 0 1-3.8-1.55" stroke="#fe2c55" strokeWidth="2.45" strokeLinecap="round" strokeLinejoin="round" transform="translate(.45 -.2)" />
        <path d="M14.2 3.5v10.1a4.35 4.35 0 1 1-3.6-4.28v2.55a1.9 1.9 0 1 0 1.25 1.78V3.5h2.35c.38 2.15 1.65 3.45 3.8 3.9v2.4a7.1 7.1 0 0 1-3.8-1.55" stroke="#111827" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    label: 'Novedades de Luis Reyes Web',
    href: 'https://www.facebook.com/luisreyesweb.cl/',
    color: 'social-link--facebook',
    icon: (
      <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true"><path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12Z" /></svg>
    ),
  },
]

const Arrow = () => (
  <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

const criticalStyles = `
  html,body,#root{margin:0;min-height:100%;background:#f8fafc}
  *,*::before,*::after{box-sizing:border-box}
  .social-page{min-height:100svh;display:grid;place-items:center;padding:2.25rem 1rem;background:#f8fafc;color:#0f172a}
  .social-card{width:min(100%,34rem);text-align:center}
  .social-brand{display:inline-flex;align-items:center;gap:.55rem;color:#334155;text-decoration:none;font:700 .82rem system-ui,sans-serif}
  .social-brand-mark{display:grid;place-items:center;width:1.9rem;height:1.9rem;border-radius:.65rem;background:#0f172a;color:#fff;font-size:.65rem}
  .social-profile-wrap{position:relative;width:7.6rem;height:7.6rem;margin:1.55rem auto 1rem}
  .social-profile{position:relative;display:block;width:100%;height:100%;object-fit:cover;border:4px solid #fff;border-radius:2rem}
  .social-profile-ring{position:absolute;inset:-.35rem;border-radius:2.35rem;background:#7c3aed}
  .social-eyebrow{margin:0;color:#7c3aed;font:800 .68rem system-ui,sans-serif;letter-spacing:.18em;text-transform:uppercase}
  .social-card h1{margin:.45rem 0 0;font:800 clamp(2rem,7vw,2.7rem)/1.08 system-ui,sans-serif;letter-spacing:-.055em}
  .social-intro{max-width:29rem;margin:.8rem auto 1.5rem;color:#64748b;font:400 .94rem/1.6 system-ui,sans-serif}
  .social-links{display:grid;gap:.72rem}.social-link{display:grid;grid-template-columns:2.85rem 1fr 1.8rem;align-items:center;gap:.85rem;min-height:4.6rem;padding:.75rem 1rem;border:1px solid #e2e8f0;border-radius:1.25rem;background:#fff;text-align:left;text-decoration:none}
  .social-link-icon{display:grid;place-items:center;width:2.85rem;height:2.85rem;border-radius:.9rem;color:var(--social-color,#7c3aed);background:#f5f3ff}.social-link-icon svg{display:block;width:1.3rem;height:1.3rem;fill:currentColor}
  .social-link--website{--social-color:#7c3aed}.social-link--whatsapp{--social-color:#16a34a}.social-link--instagram{--social-color:#db2777}.social-link--linkedin{--social-color:#0a66c2}.social-link--tiktok{--social-color:#111827}.social-link--facebook{--social-color:#1877f2}.social-link--tiktok .tiktok-mark{width:1.45rem;height:1.45rem;fill:none}
  .social-link--whatsapp .social-link-icon{background:#f0fdf4}.social-link--instagram .social-link-icon{background:#fdf2f8}.social-link--linkedin .social-link-icon,.social-link--facebook .social-link-icon{background:#eff6ff}.social-link--tiktok .social-link-icon{background:#f8fafc}
  .social-link-copy{display:flex;min-width:0;flex-direction:column}.social-link-copy strong{color:#0f172a;font:700 .91rem system-ui,sans-serif}.social-link-copy small{color:#64748b;font:400 .74rem system-ui,sans-serif}
  .social-link-arrow svg{display:block;width:1.15rem;height:1.15rem}.social-footer{margin-top:1.35rem;color:#94a3b8;font:600 .68rem system-ui,sans-serif}
`

export default function SocialLinksPage({ onNavigate }) {
  return (
    <><style>{criticalStyles}</style><main className="social-page">
      <div className="social-orb social-orb--one" />
      <div className="social-orb social-orb--two" />
      <section className="social-card" aria-labelledby="social-title">
        <a href="/" onClick={(event) => { event.preventDefault(); onNavigate('/') }} className="social-brand" aria-label="Ir al inicio de Luis Reyes Web">
          <span className="social-brand-mark">LR</span>
          <span>Luis Reyes Web</span>
        </a>

        <div className="social-profile-wrap">
          <span className="social-profile-ring" aria-hidden="true" />
          <img className="social-profile" src="/profile.webp" alt="Luis Reyes Castro, diseñador y desarrollador web" width="160" height="160" />
          <span className="social-status" title="Disponible para nuevos proyectos"><span className="sr-only">Disponible para nuevos proyectos</span></span>
        </div>

        <p className="social-eyebrow">Diseño · Desarrollo · Estrategia</p>
        <h1 id="social-title">Hola, soy <span>Luis Reyes</span></h1>
        <p className="social-intro">Creo páginas web y soluciones digitales que ayudan a negocios y profesionales a verse bien, generar confianza y crecer.</p>

        <div className="social-links" aria-label="Enlaces de contacto y redes sociales">
          <a href="/" onClick={(event) => { event.preventDefault(); onNavigate('/') }} className="social-link social-link--website">
            <span className="social-link-icon"><svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0 0c2.2 0 4-4.5 4-10S14.2 2 12 2 8 6.5 8 12s1.8 10 4 10ZM2.5 9h19M2.5 15h19" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg></span>
            <span className="social-link-copy"><strong>Visita mi página web</strong><small>Conoce mis servicios y proyectos</small></span>
            <span className="social-link-arrow"><Arrow /></span>
          </a>
          {links.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className={`social-link ${link.color}`}>
              <span className="social-link-icon">{link.icon}</span>
              <span className="social-link-copy"><strong>{link.name}</strong><small>{link.label}</small></span>
              <span className="social-link-arrow"><Arrow /></span>
            </a>
          ))}
        </div>

        <p className="social-footer">Hecho con intención en Talca, Chile <span aria-hidden="true">✦</span></p>
      </section>
    </main></>
  )
}
