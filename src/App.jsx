import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import Features from './components/Features'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Decorations from './components/Decorations'

export default function App() {
  return (
    <div className="min-h-screen">
      <Decorations />
      <Navbar />
      <main className="max-w-2xl mx-auto px-4">
        <section id="inicio">
          <Hero />
        </section>
        <section id="servicios">
          <Services />
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
