import { motion } from 'framer-motion'

function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-24 bg-gradient-to-r from-indigo-200 via-fuchsia-200 to-sky-200 blur-3xl opacity-70" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-500 bg-clip-text text-transparent">Gotowi, by zwiększyć sprzedaż?</h3>
          <p className="opacity-80 mt-3">Zbudujmy razem sklep, który klienci pokochają, a marketing doceni.</p>
          <a href="#contact" className="inline-flex mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-500 text-white rounded-xl glow-soft">Porozmawiajmy</a>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
