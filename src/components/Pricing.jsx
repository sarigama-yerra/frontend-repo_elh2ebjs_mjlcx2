import { motion } from 'framer-motion'

function Pricing() {
  const tiers = [
    { name: 'Starter', price: '4 900 zł', highlight: false, features: ['Gotowy motyw + personalizacja', 'Do 10 podstron', 'Integracja płatności', 'Podstawowa analityka', 'Czas realizacji: 2 tyg.'] },
    { name: 'Growth', price: '9 900 zł', highlight: true, features: ['Projekt szyty na miarę', 'Do 30 podstron', 'Integracje (kurier, ERP, marketing)', 'Rozszerzona analityka + tag manager', 'Czas realizacji: 3-4 tyg.'] },
    { name: 'Pro', price: 'od 18 900 zł', highlight: false, features: ['Headless / Next.js', 'Zaawansowane integracje', 'Audyt SEO + wydajność', 'Wsparcie wdrożeniowe i SLA', 'Czas realizacji: 5-8 tyg.'] }
  ]

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold">Cennik</motion.h2>
        <p className="mt-3 text-gray-600 max-w-2xl">Przejrzyste pakiety dopasowane do etapu rozwoju Twojego sklepu.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`rounded-2xl p-6 glass ${t.highlight ? 'ring-2 ring-fuchsia-400 bg-white/70' : ''}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-500 bg-clip-text text-transparent">{t.price}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {t.features.map(f => (
                  <li key={f} className="flex items-start gap-2"><span>🌟</span><span>{f}</span></li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-block w-full text-center bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-500 hover:opacity-90 text-white py-2 rounded-lg glow-soft">Wybierz pakiet</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
