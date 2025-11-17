import { motion } from 'framer-motion'

function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <div className="aurora -z-10"></div>
      <div className="noise -z-10"></div>

      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute -top-40 -left-20 w-[700px] h-[700px] rounded-full blur-3xl bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 animate-[float_8s_ease-in-out_infinite]"/>
        <div className="absolute -bottom-40 -right-10 w-[600px] h-[600px] rounded-full blur-3xl bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200 animate-[float_10s_ease-in-out_infinite]"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-white/60 backdrop-blur border border-white/50 shadow-sm gradient-border">Nowoczesne e‑commerce studio</span>
            <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-br from-indigo-700 via-fuchsia-600 to-sky-600 bg-clip-text text-transparent drop-shadow-sm">Sklepy, które wyglądają jak jutro</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-2xl">
              Tworzymy pastelowe, świetliste doświadczenia zakupowe. Headless, Shopify, WooCommerce — lekkość, wydajność i konwersja.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#portfolio" className="px-5 py-3 rounded-xl glass ring-glow hover:shadow-lg transition-all">Zobacz portfolio</a>
              <button onClick={scrollToContact} className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-500 text-white hover:opacity-90 glow-soft transition-all">Wyceń projekt</button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass"><span>⏱️</span> <span>3–4 tygodnie</span></div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass"><span>🚀</span> <span>Core Web Vitals 90+</span></div>
            </div>
          </motion.div>
        </div>
        <div className="md:col-span-5 relative">
          <motion.div initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .1, duration: .7 }} className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-fuchsia-300/40 via-white/0 to-indigo-300/40 blur-2xl rounded-[2rem]"/>
            <div className="relative aspect-[4/3] rounded-2xl glass glow ring-glow overflow-hidden">
              <div className="absolute inset-0 shimmer opacity-20"/>
              <div className="p-6 h-full flex flex-col items-center justify-center text-center">
                <div className="text-6xl">✨</div>
                <p className="mt-3 text-gray-800 font-semibold">Pastelowy, świetlisty design</p>
                <p className="text-gray-600 text-sm">Interakcje i mikroruchy, które czuć</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
