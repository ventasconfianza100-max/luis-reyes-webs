import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
// import Testimonials from './components/Testimonials' // oculto hasta tener reseñas reales
import Features from './components/Features'
import Pricing from './components/Pricing'
import LeadMagnet from './components/LeadMagnet'
import ProjectsShowcase from './components/ProjectsShowcase'
import WhyPsychologist from './components/WhyPsychologist'
import Reveal from './components/Reveal'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Decorations from './components/Decorations'
import ProjectsPage from './components/ProjectsPage'
import BusinessProjectsPage from './components/BusinessProjectsPage'
import ClinicalPsychologistProjectPage from './components/ClinicalPsychologistProjectPage'
import TherapyOnlineProjectPage from './components/TherapyOnlineProjectPage'
import ProfessionalProfileProjectPage from './components/ProfessionalProfileProjectPage'
import ClinicBusinessProjectPage from './components/ClinicBusinessProjectPage'
import SchedulePage from './components/SchedulePage'
import BlogPage from './components/BlogPage'
import BlogPostPage from './components/BlogPostPage'

import { getMeta, canonicalFor } from './seo'

export default function App({ initialPath }) {
  const [path, setPath] = useState(
    initialPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/')
  )

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)

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
    setTag('meta[property="og:title"]', 'content', meta.title)
    setTag('meta[property="og:description"]', 'content', meta.description)
    setTag('meta[property="og:url"]', 'content', canonicalUrl)
  }, [path])

  const navigateTo = (nextPath) => {
    window.history.pushState({}, '', nextPath)
    setPath(nextPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isProjectsPage = path === '/proyectos'
  const isBusinessProjectsPage = path === '/proyectos-empresas'
  const isClinicalProjectPage = path === '/proyectos/sitio-psicologa-clinica'
  const isTherapyOnlineProjectPage = path === '/proyectos/consulta-terapeutica-online'
  const isProfessionalProfileProjectPage = path === '/proyectos/perfil-profesional-redes'
  const isClinicBusinessProjectPage = path === '/proyectos-empresas/clinica-centro-atencion'
  const isSchedulePage = path === '/agenda'
  const isBlogIndex = path === '/blog'
  const isBlogPost = path.startsWith('/blog/')

  if (isSchedulePage) {
    return (
      <div className="min-h-screen">
        <Decorations />
        <SchedulePage onNavigate={navigateTo} />
      </div>
    )
  }

  if (isBlogIndex) {
    return (
      <div className="min-h-screen">
        <Decorations />
        <BlogPage onNavigate={navigateTo} />
      </div>
    )
  }

  if (isBlogPost) {
    return (
      <div className="min-h-screen">
        <Decorations />
        <BlogPostPage slug={path.replace('/blog/', '')} onNavigate={navigateTo} />
      </div>
    )
  }

  if (isClinicalProjectPage) {
    return (
      <div className="min-h-screen">
        <Decorations />
        <ClinicalPsychologistProjectPage onNavigate={navigateTo} />
      </div>
    )
  }

  if (isTherapyOnlineProjectPage) {
    return (
      <div className="min-h-screen">
        <Decorations />
        <TherapyOnlineProjectPage onNavigate={navigateTo} />
      </div>
    )
  }

  if (isProfessionalProfileProjectPage) {
    return (
      <div className="min-h-screen">
        <Decorations />
        <ProfessionalProfileProjectPage onNavigate={navigateTo} />
      </div>
    )
  }

  if (isClinicBusinessProjectPage) {
    return (
      <div className="min-h-screen">
        <Decorations />
        <ClinicBusinessProjectPage onNavigate={navigateTo} />
      </div>
    )
  }

  if (isProjectsPage) {
    return (
      <div className="min-h-screen">
        <Decorations />
        <ProjectsPage onNavigate={navigateTo} />
      </div>
    )
  }

  if (isBusinessProjectsPage) {
    return (
      <div className="min-h-screen">
        <Decorations />
        <BusinessProjectsPage onNavigate={navigateTo} />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Decorations />
      <Navbar onNavigate={navigateTo} />
      <main>
        <div id="inicio">
          <Hero onNavigate={navigateTo} />
        </div>
        <Reveal>
          <Stats />
        </Reveal>
        <Reveal>
          <div id="servicios">
            <Services onNavigate={navigateTo} />
          </div>
        </Reveal>
        <Reveal>
          <ProjectsShowcase onNavigate={navigateTo} />
        </Reveal>
        {/* Sección oscura de contraste (ritmo premium) */}
        <WhyPsychologist />
        {/* Testimonios ocultos hasta tener reseñas REALES. Para reactivar,
            quita el comentario y reemplaza el contenido en Testimonials.jsx. */}
        {/* <Testimonials /> */}
        <Reveal>
          <div id="incluye">
            <Features />
          </div>
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal>
          <LeadMagnet />
        </Reveal>
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  )
}
