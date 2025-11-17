function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden pt-28 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="w-[600px] h-[600px] rounded-full bg-blue-200 blur-3xl absolute -top-40 -left-40" />
        <div className="w-[500px] h-[500px] rounded-full bg-indigo-200 blur-3xl absolute -bottom-40 -right-40" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Projektujemy nowoczesne sklepy internetowe, które sprzedają
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Budujemy szybkie, konwertujące e-commerce na Shopify, WooCommerce i headless. Od projektu po wdrożenie — kompleksowo i bez zbędnego szumu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className="px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800">Zobacz portfolio</a>
            <button onClick={scrollToContact} className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Wyceń projekt</button>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div>⏱️ średni czas wdrożenia: 3-4 tygodnie</div>
            <div>🚀 Core Web Vitals 90+</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] bg-white rounded-xl shadow-xl ring-1 ring-black/5 flex items-center justify-center">
            <div className="p-6 text-center">
              <div className="text-6xl">🛍️</div>
              <p className="mt-3 text-gray-700 font-medium">Piękny design + wysokie konwersje</p>
              <p className="text-gray-500 text-sm">Responsywne, SEO-friendly, gotowe do sprzedaży</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
