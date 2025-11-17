import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  { id: 1, name: 'Minimal Store', tag: 'Shopify', color: 'from-indigo-100 to-fuchsia-100' },
  { id: 2, name: 'Organic Market', tag: 'WooCommerce', color: 'from-emerald-100 to-teal-100' },
  { id: 3, name: 'Tech Gear', tag: 'Headless', color: 'from-rose-100 to-orange-100' },
  { id: 4, name: 'Home Decor', tag: 'Shopify', color: 'from-sky-100 to-cyan-100' },
]

function Portfolio() {
  const [active, setActive] = useState(null)

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold">Portfolio</h2>
            <p className="mt-3 text-gray-600">Kliknij projekt, aby zobaczyć szczegóły</p>
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${p.color} aspect-[4/3] ring-1 ring-black/5 hover:shadow-xl`}
            >
              <div className="absolute inset-0">
                <div className="absolute -inset-8 bg-gradient-to-br from-white/40 to-white/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-700">{p.tag}</div>
                  <div className="font-semibold text-gray-900 text-lg">{p.name}</div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-fuchsia-700 text-sm mt-2">Kliknij, aby zobaczyć</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setActive(null)}>
              <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }} className="bg-white rounded-2xl max-w-lg w-full p-6 relative">
                <button onClick={() => setActive(null)} className="absolute right-3 top-3 text-gray-500 hover:text-gray-800">✕</button>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-gray-500">{active.tag}</div>
                    <h3 className="text-2xl font-bold">{active.name}</h3>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 text-sm">
                  Opis projektu: migracja z WooCommerce do Shopify, customowy motyw, integracje płatności i fulfillment. Wzrost konwersji o 28% w 3 miesiące.
                </p>
                <div className="mt-6 flex gap-3">
                  <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-500 text-white rounded-lg glow-soft">Chcę podobny sklep</a>
                  <button onClick={() => setActive(null)} className="px-4 py-2 glass rounded-lg">Zamknij</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio
