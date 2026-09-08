import { Suspense, lazy, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
// import Testimonials from './components/Testimonials' // oculto hasta tener reseñas reales
import Features from './components/Features'
import Pricing from './components/Pricing'
import LeadMagnet from './components/LeadMagnet'
import ProjectsShowcase from './components/ProjectsShowcase'
import WhyChooseMe from './components/WhyChooseMe'
import Process from './components/Process'
import Reveal from './components/Reveal'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Decorations from './components/Decorations'
import ProjectsPage from './components/ProjectsPage'
import SchedulePage from './components/SchedulePage'
import BlogPage from './components/BlogPage'
import BlogPostPage from './components/BlogPostPage'
import DisenoWebTalcaPage from './components/DisenoWebTalcaPage'
import TiendaOnlineChilePage from './components/TiendaOnlineChilePage'
import EmpresasServiciosPage from './components/EmpresasServiciosPage'
import SoftwareAplicacionesPage from './components/SoftwareAplicacionesPage'
import CommercialLandingPage from './components/CommercialLandingPage'
import NotFoundPage from './components/NotFoundPage'
import AboutPage from './components/AboutPage'
import DiagnosticPage from './components/DiagnosticPage'
import InstagramSection from './components/InstagramSection'
import GrowthLandingPage from './components/GrowthLandingPage'

// Panel interno: se carga aparte para no pesar en el bundle publico.
const AdminPanel = lazy(() => import('./components/AdminPanel'))

import { getMeta, canonicalFor } from './seo'

const normalizePath = (value) => {
  if (!value || value === '/') return '/'
  return value.replace(/\/+$/, '') || '/'
}

export default function App({ initialPath }) {
  const [path, setPath] = useState(
    normalizePath(initialPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/'))
  )

  useEffect(() => {
    const handlePopState = () => setPath(normalizePath(window.location.pathname))

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    const meta = getMeta(path)
    document.title = meta.title

    const setTag = (selector, attr, value) => {
      const el = document.head.querySelector(selector)
      if (el) el.setAttribute(attr, value)
    }

    const canonicalUrl = canonicalFor(path)
    setTag('meta[name="description"]', 'content', meta.description)
    setTag('link[rel="canonical"]', 'href', canonicalUrl)
    setTag('link[rel="alternate"][hreflang="es-CL"]', 'href', canonicalUrl)
    setTag('link[rel="alternate"][hreflang="x-default"]', 'href', canonicalUrl)
    setTag('meta[property="og:title"]', 'content', meta.title)
    setTag('meta[property="og:description"]', 'content', meta.description)
    setTag('meta[property="og:url"]', 'content', canonicalUrl)
    setTag('meta[name="robots"]', 'content', meta.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
  }, [path])

  const navigateTo = (nextPath) => {
    const normalized = normalizePath(nextPath)
    window.history.pushState({}, '', normalized)
    setPath(normalized)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // El panel interno vive fuera del layout publico (sin navbar, footer ni WhatsApp).
  if (path === '/admin') {
    return (
      <Suspense fallback={<div className="p-10 text-sm text-slate-400">Cargando panel…</div>}>
        <AdminPanel />
      </Suspense>
    )
  }

  let content
  if (path === '/diseno-web-talca') {
    content = <DisenoWebTalcaPage onNavigate={navigateTo} />
  } else if (path === '/tienda-online-chile') {
    content = <TiendaOnlineChilePage onNavigate={navigateTo} />
  } else if (path === '/paginas-web-empresas-servicios') {
    content = <EmpresasServiciosPage onNavigate={navigateTo} />
  } else if (path === '/desarrollo-software-aplicaciones') {
    content = <SoftwareAplicacionesPage onNavigate={navigateTo} />
  } else if (path === '/catalogo-online-con-whatsapp') {
    content = <><Navbar onNavigate={navigateTo} /><CommercialLandingPage kind="catalog" onNavigate={navigateTo} /><Footer onNavigate={navigateTo} /></>
  } else if (path === '/paginas-web-pymes-chile') {
    content = <GrowthLandingPage kind="pymes" onNavigate={navigateTo} />
  } else if (path === '/seo-local-talca') {
    content = <GrowthLandingPage kind="seo" onNavigate={navigateTo} />
  } else if (path === '/sobre-luis') {
    content = <AboutPage onNavigate={navigateTo} />
  } else if (path === '/diagnostico-web') {
    content = <DiagnosticPage onNavigate={navigateTo} />
  } else if (path === '/agenda') {
    content = <SchedulePage onNavigate={navigateTo} />
  } else if (path === '/blog') {
    content = <><Navbar onNavigate={navigateTo} /><BlogPage onNavigate={navigateTo} /><Footer onNavigate={navigateTo} /></>
  } else if (path.startsWith('/blog/')) {
    content = <><Navbar onNavigate={navigateTo} /><BlogPostPage slug={path.replace('/blog/', '')} onNavigate={navigateTo} /><Footer onNavigate={navigateTo} /></>
  } else if (path === '/proyectos') {
    content = <><Navbar onNavigate={navigateTo} /><ProjectsPage onNavigate={navigateTo} /><Footer onNavigate={navigateTo} /></>
  } else if (path === '/proyectos-empresas') {
    content = <><Navbar onNavigate={navigateTo} /><ProjectsPage onNavigate={navigateTo} /><Footer onNavigate={navigateTo} /></>
  } else if (path === '/') {
    content = (
      <><Navbar onNavigate={navigateTo} /><main><div id="inicio"><Hero onNavigate={navigateTo} /></div><Reveal><Stats /></Reveal><Reveal><div id="servicios"><Services onNavigate={navigateTo} /></div></Reveal><Reveal><ProjectsShowcase /></Reveal><WhyChooseMe /><Reveal><Process /></Reveal><Reveal><div id="incluye"><Features /></div></Reveal><Reveal><Pricing /></Reveal><Reveal><InstagramSection /></Reveal><Reveal><FAQ /></Reveal><Reveal><LeadMagnet /></Reveal></main><Footer onNavigate={navigateTo} /></>
    )
  } else {
    content = <><Navbar onNavigate={navigateTo} /><NotFoundPage onNavigate={navigateTo} /><Footer onNavigate={navigateTo} /></>
  }

  return (
    <div className="site-shell min-h-screen">
      <Decorations />
      {content}
      <FloatingWhatsApp />
    </div>
  )
}
