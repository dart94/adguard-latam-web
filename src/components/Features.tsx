// ── Edita las features aquí ──
const FEATURES = [
  {
    icon: '🛡️',
    titulo: '15 validaciones automáticas',
    desc: 'Objetivo, moneda, presupuesto, píxel, evento, audiencia, ubicaciones, género, edad, placements, fecha de fin, CBO, frecuencia y más.',
  },
  {
    icon: '📊',
    titulo: 'Score 0–100',
    desc: 'Una puntuación clara por campaña. Sabes de inmediato si tu configuración es sólida o si hay problemas críticos.',
  },
  {
    icon: '💡',
    titulo: 'Explicaciones accionables',
    desc: 'Cada error incluye el porqué y cómo corregirlo. No solo te dice qué está mal — te dice cómo arreglarlo.',
  },
  {
    icon: '📚',
    titulo: 'Historial de campañas',
    desc: 'Guarda los últimos 20 escaneos con score y detalle. Ve cómo mejoran tus campañas con el tiempo.',
  },
  {
    icon: '🌎',
    titulo: 'Calibrado para LATAM',
    desc: 'Presupuestos mínimos, monedas válidas y benchmarks de audiencia ajustados para México, Colombia, Argentina, Brasil, Chile y Perú.',
  },
  {
    icon: '🔄',
    titulo: 'Siempre actualizado',
    desc: 'Las reglas de validación se sincronizan remotamente. Si Meta cambia su interfaz, actualizamos sin que reinstales nada.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold mb-3 tracking-tight">
            Todo lo que necesitas para no quemar presupuesto
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Una extensión que actúa como un experto de Meta Ads en tiempo real — sin salir del Administrador de Anuncios.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div key={i} className="card p-6 hover:border-violet-700/50 transition-colors group">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-base mb-2 group-hover:text-violet-300 transition-colors">{f.titulo}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
