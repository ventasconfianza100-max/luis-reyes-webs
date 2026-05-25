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

export default function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

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
      <Navbar />
      <main className="max-w-2xl mx-auto px-4">
        <section id="inicio">
          <Hero />
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
