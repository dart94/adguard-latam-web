import { Shield, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

// ── Edita el contenido de la política aquí ──
const ULTIMA_ACTUALIZACION = '11 de mayo de 2026'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">

      {/* Header */}
      <header className="border-b border-zinc-800 px-6 py-4">
        <div className="mx-auto max-w-3xl flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center">
              <Shield className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-sm">AdGuard LATAM</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-extrabold mb-2">Política de Privacidad</h1>
        <p className="text-zinc-400 text-sm mb-10">Última actualización: {ULTIMA_ACTUALIZACION}</p>

        <div className="space-y-10 text-sm text-zinc-300 leading-relaxed">

          <Section titulo="Resumen">
            <p>
              AdGuard LATAM es una extensión de Chrome que valida configuraciones de Meta Ads Manager.
              <strong className="text-zinc-100"> No recopilamos datos personales, no accedemos a tu cuenta de Meta y no enviamos datos de tus campañas a ningún servidor externo.</strong>
            </p>
          </Section>

          <Section titulo="¿Qué información recopilamos?">
            <p className="mb-3">La extensión recopila únicamente telemetría anónima de fallos técnicos:</p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li>Versión de la extensión instalada</li>
              <li>Hash SHA-256 del pathname de la URL (no la URL completa — imposible revertir)</li>
              <li>Lista de detectores que fallaron (ej. "moneda", "objetivo")</li>
              <li>Timestamp del evento</li>
            </ul>
            <p className="mt-3 text-zinc-400">
              Esta telemetría se envía únicamente cuando un detector falla — no en cada escaneo — y se usa exclusivamente para mejorar la extensión cuando Meta actualiza su interfaz.
            </p>
          </Section>

          <Section titulo="¿Qué información NO recopilamos?">
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li>Datos de tu cuenta de Meta Ads (ID de cuenta, nombre, correo)</li>
              <li>Datos de campañas, presupuestos, audiencias o resultados</li>
              <li>Información de pago o facturación</li>
              <li>Historial de navegación</li>
              <li>Cookies o identificadores de usuario</li>
            </ul>
          </Section>

          <Section titulo="Almacenamiento local">
            <p>
              La extensión guarda en tu navegador (via <code className="bg-zinc-800 px-1 rounded text-xs">chrome.storage.local</code>):
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400 mt-3">
              <li>Historial de los últimos 20 escaneos (solo el resultado de validaciones, sin datos de cuenta)</li>
              <li>Configuración remota de reglas de validación (caché de 6 horas)</li>
            </ul>
            <p className="mt-3 text-zinc-400">
              Estos datos nunca salen de tu dispositivo, excepto la configuración remota que se descarga desde GitHub para mantener las reglas actualizadas.
            </p>
          </Section>

          <Section titulo="Servicios de terceros">
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li>
                <strong className="text-zinc-200">GitHub</strong> — se usa para descargar la configuración de reglas de validación (raw.githubusercontent.com). No enviamos datos de usuario.
              </li>
              <li>
                <strong className="text-zinc-200">Google Sheets (Apps Script)</strong> — recibe la telemetría anónima de fallos de detectores descrita arriba.
              </li>
            </ul>
          </Section>

          <Section titulo="Permisos de la extensión">
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li><code className="bg-zinc-800 px-1 rounded text-xs">storage</code> — para guardar el historial y la config remota en tu dispositivo</li>
              <li><code className="bg-zinc-800 px-1 rounded text-xs">alarms</code> — para sincronizar la configuración remota cada 6 horas</li>
              <li><code className="bg-zinc-800 px-1 rounded text-xs">host_permissions (adsmanager.facebook.com)</code> — para leer la interfaz de Meta Ads Manager</li>
            </ul>
          </Section>

          <Section titulo="Tus derechos">
            <p>
              Puedes borrar todos los datos locales de la extensión en cualquier momento desde{' '}
              <code className="bg-zinc-800 px-1 rounded text-xs">chrome://extensions</code> → AdGuard LATAM → Eliminar datos del sitio.
              Al desinstalar la extensión se eliminan todos los datos almacenados.
            </p>
          </Section>

          <Section titulo="Cambios a esta política">
            <p>
              Cualquier cambio relevante se comunicará actualizando la fecha al inicio de este documento.
              El uso continuado de la extensión después de cambios implica aceptación.
            </p>
          </Section>

          <Section titulo="Contacto">
            <p>
              Para preguntas sobre privacidad escríbenos a{' '}
              <a href="mailto:hola@adguardlatam.com" className="text-violet-400 hover:text-violet-300 transition-colors">
                hola@adguardlatam.com
              </a>
            </p>
          </Section>

        </div>
      </main>
    </div>
  )
}

function Section({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-base font-bold text-zinc-100 mb-3 pb-2 border-b border-zinc-800">{titulo}</h2>
      {children}
    </section>
  )
}
