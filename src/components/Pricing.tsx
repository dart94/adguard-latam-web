import { Check, X } from 'lucide-react'

// ── Edita precios y features de cada plan aquí ──
const PLANES = [
  {
    nombre: 'Free',
    precio: '$0',
    periodo: 'para siempre',
    desc: 'Para empezar a validar tus campañas sin costo.',
    cta: 'Instalar gratis',
    ctaHref: 'https://chromewebstore.google.com/detail/llnjclkhoaamjlajedbhigmgmiklahjk',
    destacado: false,
    features: [
      { texto: '8 validaciones básicas', incluido: true },
      { texto: 'Últimos 3 escaneos guardados', incluido: true },
      { texto: 'Panel en Meta Ads Manager', incluido: true },
      { texto: 'Score 0–100', incluido: false },
      { texto: 'Explicaciones detalladas', incluido: false },
      { texto: 'Historial ilimitado', incluido: false },
      { texto: '15 validaciones completas', incluido: false },
    ],
  },
  {
    nombre: 'Pro',
    precio: '$99',
    periodo: 'MXN / mes',
    desc: 'Para freelancers y negocios que gestionan sus propias campañas.',
    cta: 'Empezar Pro',
    ctaHref: '#', // ← Reemplaza con tu link de Gumroad/Stripe
    destacado: true,
    badge: 'Más popular',
    features: [
      { texto: '15 validaciones completas', incluido: true },
      { texto: 'Historial ilimitado', incluido: true },
      { texto: 'Score 0–100 por campaña', incluido: true },
      { texto: 'Explicaciones detalladas', incluido: true },
      { texto: 'Panel en Meta Ads Manager', incluido: true },
      { texto: 'Actualizaciones automáticas', incluido: true },
      { texto: 'Múltiples cuentas', incluido: false },
    ],
  },
  {
    nombre: 'Agencia',
    precio: '$249',
    periodo: 'MXN / mes',
    desc: 'Para agencias y equipos que manejan múltiples clientes.',
    cta: 'Contactar',
    ctaHref: 'mailto:hola@adguardlatam.com', // ← Cambia tu email
    destacado: false,
    features: [
      { texto: 'Todo lo de Pro', incluido: true },
      { texto: 'Hasta 3 cuentas de Meta', incluido: true },
      { texto: 'Export de reportes PDF', incluido: true },
      { texto: 'Soporte prioritario', incluido: true },
      { texto: 'Onboarding personalizado', incluido: true },
      { texto: 'Factura fiscal (CFDI)', incluido: true },
      { texto: 'API de validaciones', incluido: false },
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-zinc-900/30">
      <div className="mx-auto max-w-6xl">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold mb-3 tracking-tight">
            Precios simples, sin sorpresas
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Cancela cuando quieras. Sin contratos ni compromisos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANES.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 flex flex-col gap-5 ${
                plan.destacado
                  ? 'bg-violet-950/50 border-2 border-violet-600 shadow-lg shadow-violet-900/20'
                  : 'bg-zinc-900 border border-zinc-800'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="font-bold text-base mb-1">{plan.nombre}</h3>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-3xl font-extrabold">{plan.precio}</span>
                  <span className="text-zinc-400 text-sm mb-1">{plan.periodo}</span>
                </div>
                <p className="text-zinc-400 text-sm">{plan.desc}</p>
              </div>

              <ul className="flex flex-col gap-2.5">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm">
                    {f.incluido
                      ? <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      : <X className="w-4 h-4 text-zinc-600 flex-shrink-0" />
                    }
                    <span className={f.incluido ? 'text-zinc-200' : 'text-zinc-500'}>{f.texto}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                target={plan.ctaHref.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`mt-auto block text-center font-semibold text-sm py-3 rounded-xl transition-colors ${
                  plan.destacado
                    ? 'bg-violet-600 hover:bg-violet-500 text-white'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-500 text-xs mt-8">
          Precios en pesos mexicanos (MXN) · Pagos procesados de forma segura · Cancela en cualquier momento
        </p>

      </div>
    </section>
  )
}
