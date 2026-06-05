import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import Features from './components/Features'
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

const SITE_URL = 'https://www.luisreyesweb.cl'

const metaByPath = {
  '/': {
    title: 'Diseño Web para Psicólogos en Chile | Luis Reyes Castro — Talca',
    description:
      'Psicólogo titulado UTalca que diseña sitios web para psicólogos en Chile. Páginas web profesionales pensadas desde la lógica del paciente que está decidiendo. Talca, Región del Maule.',
  },
  '/proyectos': {
    title: 'Proyectos de páginas web para psicólogos | Luis Reyes Castro',
    description:
      'Ejemplos reales de sitios web para psicólogos y terapeutas en Chile: consulta clínica, terapia online y perfil profesional para redes. Mira los proyectos.',
  },
  '/proyectos-empresas': {
    title: 'Páginas web para clínicas y centros de salud | Luis Reyes Castro',
    description:
      'Diseño web para clínicas, centros de atención psicológica y empresas de salud en Chile. Sitios profesionales que generan confianza y captan pacientes.',
  },
  '/proyectos/sitio-psicologa-clinica': {
    title: 'Sitio web para psicóloga clínica — Proyecto | Luis Reyes Castro',
    description:
      'Caso de diseño web para una psicóloga clínica: estructura, enfoque y contacto pensados desde la lógica del paciente que está eligiendo profesional.',
  },
  '/proyectos/consulta-terapeutica-online': {
    title: 'Web para consulta terapéutica online — Proyecto | Luis Reyes Castro',
    description:
      'Caso de diseño web para terapia y consulta psicológica 100% online en Chile, optimizada para agendar sesiones y transmitir confianza.',
  },
  '/proyectos/perfil-profesional-redes': {
    title: 'Perfil profesional para redes — Proyecto | Luis Reyes Castro',
    description:
      'Página breve y elegante tipo link en bio para psicólogos: reúne trayectoria, enfoque y contacto para usar en Instagram, LinkedIn o WhatsApp.',
  },
  '/proyectos-empresas/clinica-centro-atencion': {
    title: 'Web para clínica y centro de atención — Proyecto | Luis Reyes Castro',
    description:
      'Caso de diseño web para una clínica o centro de atención psicológica en Chile: servicios, equipo y agendamiento en un sitio profesional.',
  },
  '/agenda': {
    title: 'Agenda una reunión — Meet, Zoom o WhatsApp | Luis Reyes Castro',
    description:
      'Agenda una reunión sin compromiso con Luis Reyes Castro por Google Meet, Zoom o WhatsApp para cotizar la página web de tu consulta psicológica.',
  },
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    const meta = metaByPath[path] || metaByPath['/']
    document.title = meta.title

    const setTag = (selector, attr, value) => {
      const el = document.head.querySelector(selector)
      if (el) el.setAttribute(attr, value)
    }

    const canonicalUrl = path === '/' ? SITE_URL : `${SITE_URL}${path}`
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

  if (isSchedulePage) {
    return (
      <div className="min-h-screen">
        <Decorations />
        <SchedulePage onNavigate={navigateTo} />
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
      <main className="max-w-2xl mx-auto px-4">
        <section id="inicio">
          <Hero onNavigate={navigateTo} />
        </section>
        <section id="servicios">
          <Services onNavigate={navigateTo} />
        </section>
        <Stats />
        <section id="incluye">
          <Features />
        </section>
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
