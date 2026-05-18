import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import Features from './components/Features'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen py-6">
      <main className="max-w-4xl mx-auto">
        <Hero />
        <Services />
        <Stats />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
