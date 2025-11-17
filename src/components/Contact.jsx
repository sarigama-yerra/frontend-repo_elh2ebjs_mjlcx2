import { useState } from 'react'
import { motion } from 'framer-motion'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', services: '', message: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', msg: 'Wysyłanie...' })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Błąd wysyłki: ' + res.status)
      setStatus({ type: 'success', msg: 'Dziękujemy! Skontaktujemy się wkrótce.' })
      setForm({ name: '', email: '', company: '', budget: '', services: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', msg: err.message })
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold">Porozmawiajmy o Twoim sklepie</motion.h2>
            <p className="mt-3 text-gray-600">Opisz krótko potrzeby, budżet i termin. Wrócimy z propozycją i wyceną.</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>• E-mail: hello@shopforge.pl</li>
              <li>• Telefon: +48 500 000 000</li>
              <li>• Godziny: 9:00–17:00, pon–pt</li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="glass rounded-2xl p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Imię i nazwisko</label>
                <input required name="name" value={form.name} onChange={onChange} className="mt-1 w-full bg-white/70 border border-white/60 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
              </div>
              <div>
                <label className="block text-sm font-medium">E-mail</label>
                <input required type="email" name="email" value={form.email} onChange={onChange} className="mt-1 w-full bg-white/70 border border-white/60 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
              </div>
              <div>
                <label className="block text-sm font-medium">Firma</label>
                <input name="company" value={form.company} onChange={onChange} className="mt-1 w-full bg-white/70 border border-white/60 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
              </div>
              <div>
                <label className="block text-sm font-medium">Budżet</label>
                <select name="budget" value={form.budget} onChange={onChange} className="mt-1 w-full bg-white/70 border border-white/60 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400">
                  <option value="">Wybierz zakres</option>
                  <option value="do 5k">do 5 000 zł</option>
                  <option value="5-10k">5 000 – 10 000 zł</option>
                  <option value="10-20k">10 000 – 20 000 zł</option>
                  <option value=">20k">powyżej 20 000 zł</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Usługi</label>
                <input name="services" value={form.services} onChange={onChange} placeholder="np. Shopify + integracje + SEO" className="mt-1 w-full bg-white/70 border border-white/60 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Wiadomość</label>
                <textarea required name="message" rows="5" value={form.message} onChange={onChange} className="mt-1 w-full bg-white/70 border border-white/60 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
              </div>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-500 hover:opacity-90 text-white py-2 rounded-lg glow-soft">Wyślij</button>
            {status && (
              <div className={`text-sm ${status.type === 'success' ? 'text-emerald-600' : status.type === 'error' ? 'text-red-600' : 'text-gray-600'}`}>{status.msg}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
