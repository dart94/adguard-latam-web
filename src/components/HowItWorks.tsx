const PASOS = [
  {
    numero: '01',
    titulo: 'Instala la extensión',
    desc: 'Un clic en Chrome Web Store. Gratis, sin crear cuenta, en menos de 30 segundos.',
    icon: '🔧',
  },
  {
    numero: '02',
    titulo: 'Abre Meta Ads Manager',
    desc: 'Ve a tu campaña como siempre. AdGuard aparece automáticamente en la página.',
    icon: '📋',
  },
  {
    numero: '03',
    titulo: 'Ve tu score y correcciones',
    desc: 'Puntuación 0-100, errores marcados en rojo y explicaciones exactas de qué cambiar.',
    icon: '✅',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-zinc-900/30">
      <div className="mx-auto max-w-6xl">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold mb-3 tracking-tight">
            Funciona en 3 pasos
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Sin configuración, sin API keys, sin permisos de cuenta. Solo instala y abre Meta Ads Manager.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Línea conectora */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-violet-800/0 via-violet-600/50 to-violet-800/0" />

          {PASOS.map((paso, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-700/30 to-violet-900/30 border border-violet-700/40 flex items-center justify-center text-3xl">
                  {paso.icon}
                </div>
                <span className="absolute -top-2 -right-2 bg-violet-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">{paso.titulo}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{paso.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
