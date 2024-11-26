"use client";
import { FaGlobe, FaTruck, FaHandshake, FaShieldAlt } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="bg-gray-900 text-white py-28 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Título */}
        <h2 className="text-4xl sm:text-5xl font-bold text-amber-400 mb-8">
          Nuestros Servicios
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-12">
          En <span className="text-amber-400 font-semibold">Importaciones Occidente</span>, 
          hacemos más que mover mercancías. Conectamos tu negocio con el mundo, asegurando un servicio 
          confiable, rápido y adaptado a tus necesidades. Aquí está cómo lo hacemos:
        </p>

        {/* Lista de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Beneficio 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg">
            <FaGlobe className="text-amber-400 w-16 h-16 mb-4" />
            <h3 className="text-2xl font-semibold text-amber-400 mb-2">
              Alcance Global
            </h3>
            <p className="text-gray-300">
              Nos encargamos de conectar tu negocio con los mejores proveedores internacionales. 
              Desde cualquier rincón del mundo, traemos lo que necesitas.
            </p>
          </div>

          {/* Beneficio 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg">
            <FaTruck className="text-amber-400 w-16 h-16 mb-4" />
            <h3 className="text-2xl font-semibold text-amber-400 mb-2">
              Logística Eficiente
            </h3>
            <p className="text-gray-300">
              Coordinamos cada etapa del proceso: desde el origen hasta tu destino. Olvídate de las complicaciones, nosotros lo hacemos simple.
            </p>
          </div>

          {/* Beneficio 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg">
            <FaHandshake className="text-amber-400 w-16 h-16 mb-4" />
            <h3 className="text-2xl font-semibold text-amber-400 mb-2">
              Relaciones de Confianza
            </h3>
            <p className="text-gray-300">
              Trabajamos de la mano contigo para garantizar que cada importación sea transparente, eficiente y satisfactoria.
            </p>
          </div>

          {/* Beneficio 4 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg">
            <FaShieldAlt className="text-amber-400 w-16 h-16 mb-4" />
            <h3 className="text-2xl font-semibold text-amber-400 mb-2">
              Seguridad Garantizada
            </h3>
            <p className="text-gray-300">
              Tu mercancía está en las mejores manos. Desde embalaje hasta transporte, priorizamos la protección de tus productos.
            </p>
          </div>

          {/* Beneficio 5 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg">
            <FaTruck className="text-amber-400 w-16 h-16 mb-4" />
            <h3 className="text-2xl font-semibold text-amber-400 mb-2">
              Puntualidad
            </h3>
            <p className="text-gray-300">
              Entregamos a tiempo, siempre. Sabemos lo importante que es la puntualidad para tu negocio.
            </p>
          </div>

          {/* Beneficio 6 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg">
            <FaHandshake className="text-amber-400 w-16 h-16 mb-4" />
            <h3 className="text-2xl font-semibold text-amber-400 mb-2">
              Soporte Personalizado
            </h3>
            <p className="text-gray-300">
              Nuestro equipo está disponible para responder tus dudas y acompañarte en cada paso del proceso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
