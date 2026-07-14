import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { inject, track } from '@vercel/analytics'

// Vercel Web Analytics — registra page views y navegación SPA (solo cliente).
inject()

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-analytics]')
  if (target) track(target.dataset.analytics)
})

const rootEl = document.getElementById('root')
const initialPath = window.location.pathname

const app = (
  <StrictMode>
    <App initialPath={initialPath} />
  </StrictMode>
)

// Si el HTML viene pre-renderizado (build de producción) hidratamos;
// en desarrollo el contenedor está vacío y montamos normalmente.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app)
} else {
  createRoot(rootEl).render(app)
}
