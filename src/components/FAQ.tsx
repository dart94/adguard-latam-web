import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// ── Edita las preguntas y respuestas aquí ──
const PREGUNTAS = [
  {
    pregunta: '¿AdGuard accede a mis datos de cuenta o campañas?',
    respuesta: 'No. La extensión solo lee la interfaz visible de Meta Ads Manager — exactamente lo que tú ves en pantalla. No accede a tu cuenta, no envía datos de campañas a ningún servidor y no necesita permisos de API de Meta.',
  },
  {
    pregunta: '¿Funciona con cualquier cuenta de Meta Ads Manager?',
    respuesta: 'Sí, con cualquier cuenta en adsmanager.facebook.com o business.facebook.com/adsmanager. Funciona sin importar el tamaño de la cuenta, el país o el objetivo de campaña.',
  },
  {
    pregunta: '¿Qué pasa si Meta actualiza su interfaz?',
    respuesta: 'Las reglas de validación se actualizan remotamente sin que reinstales nada. Si Meta cambia su estructura de DOM y algún detector falla, lo detectamos automáticamente a través de telemetría anónima y corregimos en horas.',
  },
  {
    pregunta: '¿Las validaciones son específicas para LATAM?',
    respuesta: 'Sí. Los presupuestos mínimos, monedas válidas y benchmarks de audiencia están calibrados para México, Colombia, Argentina, Brasil, Chile y Perú. No usamos los mismos estándares que para campañas en EE.UU. o Europa.',
  },
  {
    pregunta: '¿Puedo cancelar el plan Pro o Agencia cuando quiera?',
    respuesta: 'Sí, cancelas en cualquier momento desde tu cuenta de pago. Sin períodos mínimos, sin penalizaciones. Sigues teniendo acceso hasta el final del período pagado.',
  },
  {
    pregunta: '¿Emiten facturas fiscales (CFDI)?',
    respuesta: 'Sí, el plan Agencia incluye factura fiscal CFDI. Para el plan Pro, contáctanos y lo gestionamos manualmente. Estamos en proceso de automatizar la facturación.',
  },
]

function FAQItem({ pregunta, respuesta }: { pregunta: string; respuesta: string }) {
  const [abierto, setAbierto] = useState(false)

  return (
    <div className="border-b border-zinc-800 last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={() => setAbierto(!abierto)}
      >
        <span className="font-medium text-sm text-zinc-100">{pregunta}</span>
        <ChevronDown
          className={`w-4 h-4 text-zinc-400 flex-shrink-0 transition-transform duration-200 ${abierto ? 'rotate-180' : ''}`}
        />
      </button>
      {abierto && (
        <p className="pb-5 text-sm text-zinc-400 leading-relaxed">{respuesta}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-6">
      <div className="mx-auto max-w-2xl">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-3 tracking-tight">Preguntas frecuentes</h2>
          <p className="text-zinc-400 text-sm">¿Algo no está claro? Escríbenos a hola@adguardlatam.com</p>
        </div>

        <div className="card px-6">
          {PREGUNTAS.map((item, i) => (
            <FAQItem key={i} pregunta={item.pregunta} respuesta={item.respuesta} />
          ))}
        </div>

      </div>
    </section>
  )
}
