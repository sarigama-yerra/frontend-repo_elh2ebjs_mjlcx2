import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import CTA from './components/CTA'

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Portfolio />
        <CTA />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} ShopForge — studiu e‑commerce. Wszelkie prawa zastrzeżone.
      </footer>
    </div>
  )
}

export default App
