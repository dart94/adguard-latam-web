import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

// ── Reemplaza con tu endpoint de Formspree: https://formspree.io ──
// Crea una cuenta gratis, nuevo form, y pega el ID aquí
const FORMSPREE_ID = 'xvzllpnp' 

type Estado = 'idle' | 'enviando' | 'enviado' | 'error'

export default function Contact() {
  const [estado, setEstado] = useState<Estado>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEstado('enviando')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setEstado('enviado')
        form.reset()
      } else {
        setEstado('error')
      }
    } catch {
      setEstado('error')
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-zinc-900/30">
      <div className="mx-auto max-w-xl">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold mb-3 tracking-tight">¿Tienes preguntas?</h2>
          <p className="text-zinc-400 text-sm">
            Escríbenos y te respondemos en menos de 24 horas.
          </p>
        </div>

        {estado === 'enviado' ? (
          <div className="card p-10 flex flex-col items-center gap-3 text-center">
            <CheckCircle className="w-10 h-10 text-green-500" />
            <h3 className="font-bold text-base">¡Mensaje enviado!</h3>
            <p className="text-zinc-400 text-sm">Te respondemos en menos de 24 horas.</p>
            <button
              onClick={() => setEstado('idle')}
              className="mt-2 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card p-6 flex flex-col gap-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-zinc-400">Nombre</label>
                <input
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-violet-600 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-zinc-400">Correo</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-violet-600 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-zinc-400">Asunto</label>
              <select
                name="asunto"
                required
                className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-violet-600 transition-colors"
              >
                <option value="">Selecciona un tema</option>
                <option value="soporte">Soporte técnico</option>
                <option value="ventas">Planes y precios</option>
                <option value="facturacion">Facturación</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-zinc-400">Mensaje</label>
              <textarea
                name="mensaje"
                required
                rows={4}
                placeholder="¿En qué te podemos ayudar?"
                className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-violet-600 transition-colors resize-none"
              />
            </div>

            {estado === 'error' && (
              <p className="text-red-400 text-xs">Hubo un error al enviar. Intenta de nuevo o escríbenos a hola@adguardlatam.com</p>
            )}

            <button
              type="submit"
              disabled={estado === 'enviando'}
              className="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white font-semibold text-sm py-3 rounded-xl"
            >
              <Send className="w-4 h-4" />
              {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            <p className="text-center text-xs text-zinc-500">
              O escríbenos directo a{' '}
              <a href="mailto:hola@adguardlatam.com" className="text-violet-400 hover:text-violet-300 transition-colors">
                hola@adguardlatam.com
              </a>
            </p>

          </form>
        )}

      </div>
    </section>
  )
}
