import { useEffect, useRef, useState } from 'react'
import Section from './Section'
import { portfolioProjects } from '../portfolioProjects'

const projectPalettes = [
  ['#fb7185', '#fb923c', '#fff1f2'], ['#ef4444', '#22d3ee', '#fff1f2'],
  ['#d97706', '#facc15', '#fffbeb'], ['#10b981', '#84cc16', '#ecfdf5'],
  ['#f97316', '#f59e0b', '#fff7ed'], ['#c084fc', '#fb7185', '#faf5ff'],
]

function Arrow({ direction = 'right' }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d={direction === 'left' ? 'M15 18l-6-6 6-6' : 'M9 6l6 6-6 6'} /></svg>
}

function ExternalArrow() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18v4.5M18 6l-7.5 7.5M15 13.5V18H6V9h4.5" /></svg>
}

function Check() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 h-3.5 w-3.5 flex-none"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
}

function shuffleProjects(projects) {
  const shuffled = [...projects]
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]]
  }
  return shuffled
}

export default function ProjectsShowcase() {
  const [projects, setProjects] = useState(portfolioProjects)
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStart = useRef(null)
  const activeProject = projects[activeIndex]
  const palette = projectPalettes[portfolioProjects.findIndex(({ name }) => name === activeProject.name)] || projectPalettes[0]

  useEffect(() => {
    setProjects(shuffleProjects(portfolioProjects))
    setActiveIndex(0)
  }, [])

  const showProject = (nextIndex) => setActiveIndex((nextIndex + projects.length) % projects.length)
  const onTouchEnd = (event) => {
    if (touchStart.current === null) return
    const distance = event.changedTouches[0].clientX - touchStart.current
    if (Math.abs(distance) > 45) showProject(activeIndex + (distance < 0 ? 1 : -1))
    touchStart.current = null
  }

  return (
    <Section className="portfolio-stage" width="wide" spacing="py-10 md:py-12" containerClassName="portfolio-stage__container">
      <div className="portfolio-experience" style={{ '--project-primary': palette[0], '--project-secondary': palette[1], '--project-soft': palette[2] }} onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') showProject(activeIndex - 1)
        if (event.key === 'ArrowRight') showProject(activeIndex + 1)
      }}>
        <div className="portfolio-aura" aria-hidden="true" />
        <header className="portfolio-heading">
          <div><span className="portfolio-kicker"><span /> Portafolio real</span><h2>Lo que he construido</h2></div>
          <p>Proyectos reales que hoy están funcionando. Desliza, explora y entra a conocer cada experiencia.</p>
        </header>
        <div className="portfolio-viewport" onTouchStart={(event) => { touchStart.current = event.touches[0].clientX }} onTouchEnd={onTouchEnd}>
          <div className="portfolio-track" style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}>
            {projects.map((project, index) => (
              <article className={`portfolio-slide ${index === activeIndex ? 'is-active' : ''}`} key={project.name} aria-hidden={index !== activeIndex}>
                <a className="portfolio-visual" href={project.url} target="_blank" rel="noopener noreferrer" tabIndex={index === activeIndex ? 0 : -1} aria-label={`Abrir ${project.name}`}>
                  <img src={project.image} alt={project.alt} width="1200" height="833" loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
                  <span className="portfolio-visual__hint">Ver sitio en vivo <ExternalArrow /></span>
                </a>
                <div className="portfolio-story">
                  <div className="portfolio-story__topline"><span className="portfolio-number">{String(index + 1).padStart(2, '0')}</span><span className="portfolio-type">{project.type}</span><span className="portfolio-status"><i /> En línea</span></div>
                  <h3>{project.name}</h3><p>{project.summary}</p>
                  <ul>{project.built.map((item) => <li key={item}><Check /><span>{item}</span></li>)}</ul>
                  <a className="portfolio-cta" href={project.url} target="_blank" rel="noopener noreferrer" tabIndex={index === activeIndex ? 0 : -1}>Explorar {project.domain} <ExternalArrow /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <nav className="portfolio-controls" aria-label="Navegación de proyectos">
          <button type="button" onClick={() => showProject(activeIndex - 1)} aria-label="Proyecto anterior"><Arrow direction="left" /></button>
          <div className="portfolio-tabs">{projects.map((project, index) => <button type="button" key={project.name} className={index === activeIndex ? 'is-active' : ''} onClick={() => showProject(index)} aria-label={`Ver ${project.name}`} aria-current={index === activeIndex ? 'true' : undefined}><span>{String(index + 1).padStart(2, '0')}</span><strong>{project.name}</strong></button>)}</div>
          <button type="button" onClick={() => showProject(activeIndex + 1)} aria-label="Proyecto siguiente"><Arrow /></button>
        </nav>
        <p className="portfolio-swipe-hint">Desliza para descubrir <span aria-hidden="true">→</span></p>
      </div>
    </Section>
  )
}
