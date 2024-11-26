"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-gray-300 py-10 px-4">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Sobre la empresa */}
        <div>
          <h3 className="text-2xl font-bold text-amber-400 mb-4">Importaciones Occidente</h3>
          <p className="text-gray-400">
            Tu socio de confianza para conectar con mercados internacionales. Ofrecemos soluciones integrales para que tus importaciones lleguen rápido y seguro.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div>
          <h3 className="text-xl font-bold text-amber-400 mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-amber-400 transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-amber-400 transition">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-amber-400 transition">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-amber-400 transition">
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Redes sociales */}
        <div>
          <h3 className="text-xl font-bold text-amber-400 mb-4">Síguenos</h3>
          <p className="text-gray-400 mb-4">
            Mantente conectado con nosotros en nuestras redes sociales:
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition"
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition"
            >
              <FaTwitter size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Importaciones Occidente. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
