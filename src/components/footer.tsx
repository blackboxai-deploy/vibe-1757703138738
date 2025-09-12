import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">⚖️</span>
              </div>
              <div>
                <span className="font-bold text-xl text-blue-400">AbogadosEC</span>
                <p className="text-sm text-gray-400">Portal Jurídico Ecuador</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              El directorio más completo de abogados verificados en Ecuador. 
              Conectamos ciudadanos con profesionales del derecho especializados y certificados.
            </p>
            <p className="text-sm text-gray-400">
              Transformando el acceso a la justicia en Ecuador
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-blue-400">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/abogados" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Directorio de Abogados
                </Link>
              </li>
              <li>
                <Link href="/especialidades" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Especialidades Legales
                </Link>
              </li>
              <li>
                <Link href="/registro" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Registro de Abogados
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Especialidades principales */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-blue-400">Especialidades</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/especialidades/penal" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Derecho Penal
                </Link>
              </li>
              <li>
                <Link href="/especialidades/civil" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Derecho Civil
                </Link>
              </li>
              <li>
                <Link href="/especialidades/laboral" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Derecho Laboral
                </Link>
              </li>
              <li>
                <Link href="/especialidades/familiar" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Derecho de Familia
                </Link>
              </li>
              <li>
                <Link href="/especialidades/tributario" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Derecho Tributario
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Información legal y contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-medium mb-3 text-blue-400">Información Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terminos" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3 text-blue-400">Contacto</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>📧 info@abogadosec.com</p>
              <p>📞 +593 2 123-4567</p>
              <p>📍 Quito, Ecuador</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3 text-blue-400">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">WhatsApp</span>
                💬
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-gray-700" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 AbogadosEC - Portal Jurídico Ecuador. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">
            Desarrollado con ⚖️ para la justicia ecuatoriana
          </p>
        </div>
      </div>
    </footer>
  );
}