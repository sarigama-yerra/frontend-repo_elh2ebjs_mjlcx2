import { useState } from 'react'

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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Porozmawiajmy o Twoim sklepie</h2>
            <p className="mt-3 text-gray-600">Opisz krótko potrzeby, budżet i termin. Wrócimy do Ciebie z propozycją rozwiązania i wyceną.</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>• E-mail: hello@shopforge.pl</li>
              <li>• Telefon: +48 500 000 000</li>
              <li>• Godziny: 9:00–17:00, pon–pt</li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="bg-white rounded-2xl p-6 border space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Imię i nazwisko</label>
                <input required name="name" value={form.name} onChange={onChange} className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">E-mail</label>
                <input required type="email" name="email" value={form.email} onChange={onChange} className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Firma</label>
                <input name="company" value={form.company} onChange={onChange} className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Budżet</label>
                <select name="budget" value={form.budget} onChange={onChange} className="mt-1 w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Wybierz zakres</option>
                  <option value="do 5k">do 5 000 zł</option>
                  <option value="5-10k">5 000 – 10 000 zł</option>
                  <option value="10-20k">10 000 – 20 000 zł</option>
                  <option value=">20k">powyżej 20 000 zł</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Usługi</label>
                <input name="services" value={form.services} onChange={onChange} placeholder="np. Shopify + integracje + SEO" className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Wiadomość</label>
                <textarea required name="message" rows="5" value={form.message} onChange={onChange} className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">Wyślij</button>
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
