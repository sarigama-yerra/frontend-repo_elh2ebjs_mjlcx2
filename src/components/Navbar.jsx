import { useState, useEffect } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-sky-500 ring-glow" />
            <span className="font-semibold text-lg">ShopForge</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('services')} className="text-gray-700 hover:text-fuchsia-600">Usługi</button>
            <button onClick={() => scrollTo('pricing')} className="text-gray-700 hover:text-fuchsia-600">Cennik</button>
            <button onClick={() => scrollTo('portfolio')} className="text-gray-700 hover:text-fuchsia-600">Portfolio</button>
            <button onClick={() => scrollTo('contact')} className="text-white bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-500 hover:opacity-90 px-4 py-2 rounded-lg glow-soft">Kontakt</button>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <div className="w-6 h-0.5 bg-gray-800 mb-1" />
            <div className="w-6 h-0.5 bg-gray-800 mb-1" />
            <div className="w-6 h-0.5 bg-gray-800" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden glass border-t">
          <div className="px-4 py-3 flex flex-col gap-3">
            <button onClick={() => scrollTo('services')} className="text-left py-2">Usługi</button>
            <button onClick={() => scrollTo('pricing')} className="text-left py-2">Cennik</button>
            <button onClick={() => scrollTo('portfolio')} className="text-left py-2">Portfolio</button>
            <button onClick={() => scrollTo('contact')} className="text-left py-2 text-white bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-500 rounded-md">Kontakt</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
