function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '4 900 zł',
      highlight: false,
      features: [
        'Gotowy motyw + personalizacja',
        'Do 10 podstron',
        'Integracja płatności',
        'Podstawowa analityka',
        'Czas realizacji: 2 tyg.'
      ]
    },
    {
      name: 'Growth',
      price: '9 900 zł',
      highlight: true,
      features: [
        'Projekt szyty na miarę',
        'Do 30 podstron',
        'Integracje (kurier, ERP, marketing)',
        'Rozszerzona analityka + tag manager',
        'Czas realizacji: 3-4 tyg.'
      ]
    },
    {
      name: 'Pro',
      price: 'od 18 900 zł',
      highlight: false,
      features: [
        'Headless / Next.js',
        'Zaawansowane integracje',
        'Audyt SEO + wydajność',
        'Wsparcie wdrożeniowe i SLA',
        'Czas realizacji: 5-8 tyg.'
      ]
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Cennik</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">Przejrzyste pakiety dopasowane do etapu rozwoju Twojego sklepu.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl p-6 border bg-white ${t.highlight ? 'ring-2 ring-blue-600 shadow-lg' : ''}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <div className="text-2xl font-bold text-blue-600">{t.price}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {t.features.map(f => (
                  <li key={f} className="flex items-start gap-2"><span>✅</span><span>{f}</span></li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">Wybierz pakiet</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
