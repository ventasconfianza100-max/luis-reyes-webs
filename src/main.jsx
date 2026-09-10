import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'

const rootEl = document.getElementById('root')
const initialPath = window.location.pathname

function mount(app) {
  if (rootEl.hasChildNodes()) hydrateRoot(rootEl, app)
  else createRoot(rootEl).render(app)
}

async function boot() {
  const normalizedPath = initialPath.replace(/\/+$/, '') || '/'

  // /redes es una entrada móvil liviana: no descarga el resto del sitio.
  if (normalizedPath === '/redes') {
    const { default: SocialLinksPage } = await import('./components/SocialLinksPage.jsx')
    mount(
      <StrictMode>
        <SocialLinksPage onNavigate={(path) => window.location.assign(path)} />
      </StrictMode>
    )
  } else {
    const { default: App } = await import('./App.jsx')
    mount(<StrictMode><App initialPath={initialPath} /></StrictMode>)
  }
}

boot()

// La analítica no compite con el contenido ni con la respuesta táctil inicial.
const startAnalytics = () => import('@vercel/analytics').then(({ inject, track }) => {
  inject()
  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-analytics]')
    if (target) track(target.dataset.analytics)
  })
})

if ('requestIdleCallback' in window) window.requestIdleCallback(startAnalytics, { timeout: 2500 })
else window.setTimeout(startAnalytics, 1200)
