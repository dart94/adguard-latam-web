import { Chrome, ArrowRight } from 'lucide-react'

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/llnjclkhoaamjlajedbhigmgmiklahjk'

// Mockup del popup de la extensión
function ExtensionMockup() {
  return (
    <div className="w-[300px] rounded-2xl overflow-hidden shadow-2xl shadow-violet-900/30 border border-zinc-700/50 font-sans text-sm">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-800 to-violet-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-base">🛡️</span>
          <div>
            <div className="text-white font-bold text-xs">AdGuard LATAM</div>
            <div className="text-violet-200 text-[10px]">Validador de Meta Ads</div>
          </div>
        </div>
        <span className="text-[10px] font-semibold bg-white/15 text-white/80 px-2 py-0.5 rounded-full">v0.3.0</span>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-zinc-700 bg-zinc-900">
        <div className="flex-1 py-2 text-center text-[11px] font-semibold text-violet-400 border-b-2 border-violet-500">Validación</div>
        <div className="flex-1 py-2 text-center text-[11px] text-zinc-500">Historial</div>
      </div>

      {/* Status */}
      <div className="bg-zinc-900 px-4 py-2 flex items-center gap-2 border-b border-zinc-800 text-[11px] text-zinc-400">
        <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(22,163,74,0.2)]"></span>
        Meta Ads Manager activo
        <span className="ml-auto text-zinc-500">hace 2s</span>
      </div>

      {/* Score */}
      <div className="bg-zinc-900 px-4 pt-3 pb-1 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full border-[2.5px] border-amber-400 bg-amber-400/10 flex items-center justify-center font-extrabold text-amber-400 text-base flex-shrink-0">72</div>
        <div className="flex-1">
          <div className="text-[10px] text-zinc-400 mb-1">Puntuación de campaña</div>
          <div className="h-1.5 bg-zinc-700 rounded-full overflow-hidden">
            <div className="h-full w-[72%] bg-amber-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mx-3 mt-2 rounded-lg bg-red-950/40 border border-red-900/40 px-3 py-2 flex items-center gap-2">
        <span className="text-sm">🚨</span>
        <div>
          <div className="text-red-400 font-bold text-[11px]">2 errores críticos</div>
          <div className="text-zinc-400 text-[10px]">y 1 advertencia</div>
        </div>
      </div>

      {/* Rows */}
      <div className="px-4 py-2 bg-zinc-900 space-y-0">
        {[
          { icon: '✅', msg: 'Objetivo: Ventas', ok: true },
          { icon: '❌', msg: 'Presupuesto bajo para "Ventas"', ok: false },
          { icon: '⚠️', msg: 'Audiencia estrecha (32K)', ok: null },
          { icon: '❌', msg: 'Sin píxel conectado', ok: false },
          { icon: '✅', msg: 'Edad: 25–45', ok: true },
        ].map((row, i) => (
          <div key={i} className="flex items-center gap-2 py-1.5 border-b border-zinc-800 last:border-0">
            <span className="text-xs flex-shrink-0">{row.icon}</span>
            <span className="text-[11px] text-zinc-300">{row.msg}</span>
            {!row.ok && row.ok !== null && <span className="ml-auto text-zinc-600 text-xs">›</span>}
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="px-4 py-3 bg-zinc-900 border-t border-zinc-800">
        <div className="w-full py-2 bg-gradient-to-r from-violet-700 to-violet-600 rounded-lg text-center text-white text-[11px] font-semibold">🔄 Escanear ahora</div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-16">

        {/* Copy */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-violet-950/60 border border-violet-800/50 rounded-full px-4 py-1.5 text-xs text-violet-300 font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
            Disponible gratis en Chrome Web Store
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-5 tracking-tight">
            Valida tu Meta Ads{' '}
            <span className="gradient-text">antes de quemar dinero</span>
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            AdGuard LATAM detecta errores en tu campaña en segundos — con un score de 0 a 100 y explicaciones exactas de qué corregir.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 transition-colors text-white font-semibold px-6 py-3 rounded-xl text-sm"
            >
              <Chrome className="w-4 h-4" />
              Instalar gratis en Chrome
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition-colors text-zinc-200 font-semibold px-6 py-3 rounded-xl text-sm"
            >
              Ver cómo funciona
            </a>
          </div>

          <p className="mt-4 text-xs text-zinc-500">Gratis para siempre en el plan básico · Sin tarjeta requerida</p>
        </div>

        {/* Mockup */}
        <div className="flex-shrink-0">
          <ExtensionMockup />
        </div>

      </div>
    </section>
  )
}
