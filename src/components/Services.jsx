import { motion } from 'framer-motion'

function Services() {
  const items = [
    { title: 'Sklepy Shopify', desc: 'Szybkie wdrożenia, sprawdzone aplikacje, płatności i logistyka gotowe od ręki.', emoji: '🛒' },
    { title: 'WooCommerce', desc: 'Elastyczny WordPress + Woo dla sklepów, które rosną wraz z Twoim biznesem.', emoji: '⚙️' },
    { title: 'Headless e-commerce', desc: 'Nowoczesna architektura: Next.js, Shopify Hydrogen, Strapi, GraphQL.', emoji: '🧠' },
    { title: 'UX/UI + branding', desc: 'Projektujemy doświadczenia zakupowe, które zamieniają ruch w sprzedaż.', emoji: '🎨' },
    { title: 'Optymalizacja i SEO', desc: 'Lepsza szybkość, struktura i widoczność. Audyty i wdrożenia techniczne.', emoji: '⚡' },
    { title: 'Integracje', desc: 'Płatności, kurierskie, ERP, marketing automation i analityka.', emoji: '🔗' }
  ]

  const card = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07 } })
  }

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold">Usługi</motion.h2>
        <p className="mt-3 text-gray-600 max-w-2xl">Kompleksowo prowadzimy projekty e-commerce: od strategii i projektu po kod, integracje i rozwój.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i, idx) => (
            <motion.div key={i.title} variants={card} initial="hidden" whileInView="show" viewport={{ once: true }} custom={idx} className="p-6 rounded-2xl glass hover:glow-soft transition-all">
              <div className="text-3xl">{i.emoji}</div>
              <h3 className="mt-3 font-semibold text-lg">{i.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{i.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
