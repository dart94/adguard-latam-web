// ── Edita los stats y errores comunes aquí ──
const STATS = [
  { value: '73%', label: 'de campañas en LATAM tienen al menos un error de configuración evitable' },
  { value: '$340', label: 'USD promedio perdido por mes en campañas con presupuesto incorrecto' },
  { value: '2.4x', label: 'más CPM en campañas con moneda USD vs moneda local en LATAM' },
]

const ERRORES = [
  {
    icon: '💸',
    titulo: 'Moneda equivocada',
    desc: 'Usar USD en vez de MXN, COP o ARS infla el CPM y dificulta que el algoritmo optimice correctamente.',
  },
  {
    icon: '📡',
    titulo: 'Sin Píxel conectado',
    desc: 'Correr campañas de Ventas sin Píxel es optimizar a ciegas. Meta no puede encontrar a tus compradores reales.',
  },
  {
    icon: '👥',
    titulo: 'Audiencia demasiado pequeña',
    desc: 'Menos de 50K personas dispara el CPM y satura la frecuencia. El algoritmo no tiene escala para optimizar.',
  },
]

export default function Problem() {
  return (
    <section className="py-20 px-6 border-t border-zinc-800/50">
      <div className="mx-auto max-w-6xl">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold mb-3 tracking-tight">
            ¿Cuánto dinero estás perdiendo sin saberlo?
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Los errores de configuración son silenciosos — Meta sigue cobrando aunque tus anuncios no estén optimizados.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {STATS.map((s, i) => (
            <div key={i} className="card p-6 text-center">
              <div className="text-4xl font-extrabold gradient-text mb-2">{s.value}</div>
              <p className="text-zinc-400 text-sm leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Errores comunes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ERRORES.map((e, i) => (
            <div key={i} className="card p-6 flex flex-col gap-3">
              <span className="text-3xl">{e.icon}</span>
              <h3 className="font-bold text-base">{e.titulo}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
