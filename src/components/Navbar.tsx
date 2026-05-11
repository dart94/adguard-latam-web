import { Shield } from 'lucide-react'

// ── Edita el link de Chrome Web Store aquí ──
const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/llnjclkhoaamjlajedbhigmgmiklahjk'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-sm tracking-tight">AdGuard LATAM</span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          <a href="#features" className="hover:text-zinc-100 transition-colors">Características</a>
          <a href="#pricing" className="hover:text-zinc-100 transition-colors">Precios</a>
          <a href="#faq" className="hover:text-zinc-100 transition-colors">FAQ</a>
        </nav>

        {/* CTA */}
        <a
          href={CHROME_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 transition-colors text-white text-sm font-semibold px-4 py-2 rounded-lg"
        >
          Instalar gratis
        </a>

      </div>
    </header>
  )
}
