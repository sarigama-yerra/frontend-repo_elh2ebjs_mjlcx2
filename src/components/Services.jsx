function Services() {
  const items = [
    {
      title: 'Sklepy Shopify',
      desc: 'Szybkie wdrożenia, sprawdzone aplikacje, płatności i logistyka gotowe od ręki.',
      emoji: '🛒'
    },
    {
      title: 'WooCommerce',
      desc: 'Elastyczny WordPress + Woo dla sklepów, które rosną wraz z Twoim biznesem.',
      emoji: '⚙️'
    },
    {
      title: 'Headless e-commerce',
      desc: 'Nowoczesna architektura: Next.js, Shopify Hydrogen, Strapi, GraphQL.',
      emoji: '🧠'
    },
    {
      title: 'UX/UI + branding',
      desc: 'Projektujemy doświadczenia zakupowe, które zamieniają ruch w sprzedaż.',
      emoji: '🎨'
    },
    {
      title: 'Optymalizacja i SEO',
      desc: 'Lepsza szybkość, struktura i widoczność. Audyty i wdrożenia techniczne.',
      emoji: '⚡'
    },
    {
      title: 'Integracje',
      desc: 'Płatności, kurierskie, ERP, marketing automation i analityka.',
      emoji: '🔗'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Usługi</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">Kompleksowo prowadzimy projekty e-commerce: od strategii i projektu po kod, integracje i rozwój.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="p-6 rounded-xl border bg-white hover:shadow-md transition-shadow">
              <div className="text-3xl">{i.emoji}</div>
              <h3 className="mt-3 font-semibold text-lg">{i.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
