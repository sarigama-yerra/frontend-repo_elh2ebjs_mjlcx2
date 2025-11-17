import { useState } from 'react'

const projects = [
  { id: 1, name: 'Minimal Store', tag: 'Shopify', image: '', color: 'from-blue-100 to-indigo-100' },
  { id: 2, name: 'Organic Market', tag: 'WooCommerce', image: '', color: 'from-emerald-100 to-teal-100' },
  { id: 3, name: 'Tech Gear', tag: 'Headless', image: '', color: 'from-rose-100 to-orange-100' },
  { id: 4, name: 'Home Decor', tag: 'Shopify', image: '', color: 'from-purple-100 to-pink-100' },
]

function Portfolio() {
  const [active, setActive] = useState(null)

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Portfolio</h2>
            <p className="mt-3 text-gray-600">Kliknij projekt, aby zobaczyć szczegóły</p>
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              className={`group relative rounded-xl overflow-hidden bg-gradient-to-br ${p.color} aspect-[4/3] ring-1 ring-black/5 hover:shadow-lg`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-700">{p.tag}</div>
                  <div className="font-semibold text-gray-900 text-lg">{p.name}</div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-700 text-sm mt-2">Kliknij, aby zobaczyć</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {active && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setActive(null)}>
            <div className="bg-white rounded-2xl max-w-lg w-full p-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-gray-500">{active.tag}</div>
                  <h3 className="text-2xl font-bold">{active.name}</h3>
                </div>
                <button onClick={() => setActive(null)} className="text-gray-500 hover:text-gray-800">✕</button>
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                Opis projektu: migracja z WooCommerce do Shopify, customowy motyw, integracje płatności i fulfillment. Wzrost konwersji o 28% w 3 miesiące.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Chcę podobny sklep</a>
                <button onClick={() => setActive(null)} className="px-4 py-2 bg-gray-100 rounded-lg">Zamknij</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio
