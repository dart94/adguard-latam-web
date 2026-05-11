import { Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/llnjclkhoaamjlajedbhigmgmiklahjk'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center">
            <Shield className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-sm">AdGuard LATAM</span>
          <span className="text-zinc-600 text-xs ml-1">v0.3.0</span>
        </Link>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
          <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 transition-colors">Chrome Web Store</a>
          <Link to="/privacy" className="hover:text-zinc-100 transition-colors">Política de privacidad</Link>
          <a href="#contact" className="hover:text-zinc-100 transition-colors">Contacto</a>
        </nav>

        {/* Copyright */}
        <p className="text-zinc-600 text-xs text-center">
          © {new Date().getFullYear()} AdGuard LATAM · Hecho en México 🇲🇽
        </p>

      </div>
    </footer>
  )
}
