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
    <header className={`fixed top-0 left-0 right-0 z-40 transition-colors ${scrolled ? 'bg-white/80 backdrop-blur border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600" />
            <span className="font-semibold text-lg">ShopForge</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('services')} className="text-gray-700 hover:text-blue-600">Usługi</button>
            <button onClick={() => scrollTo('pricing')} className="text-gray-700 hover:text-blue-600">Cennik</button>
            <button onClick={() => scrollTo('portfolio')} className="text-gray-700 hover:text-blue-600">Portfolio</button>
            <button onClick={() => scrollTo('contact')} className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">Kontakt</button>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <div className="w-6 h-0.5 bg-gray-800 mb-1" />
            <div className="w-6 h-0.5 bg-gray-800 mb-1" />
            <div className="w-6 h-0.5 bg-gray-800" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 flex flex-col gap-3">
            <button onClick={() => scrollTo('services')} className="text-left py-2">Usługi</button>
            <button onClick={() => scrollTo('pricing')} className="text-left py-2">Cennik</button>
            <button onClick={() => scrollTo('portfolio')} className="text-left py-2">Portfolio</button>
            <button onClick={() => scrollTo('contact')} className="text-left py-2 text-white bg-blue-600 rounded-md">Kontakt</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
