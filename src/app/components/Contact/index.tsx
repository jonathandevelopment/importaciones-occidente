"use client";
import { useState } from "react";
import { FaTruck, FaHandshake, FaClock, FaShieldAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mpwzypgq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Hubo un problema al enviar el formulario. Inténtalo nuevamente.");
    }
  };

  const closePopup = () => {
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className=" text-white py-20 px-4"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Formulario de contacto */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-10 rounded-lg shadow-lg space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-gray-300 text-lg">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-1 rounded bg-gray-900 border border-gray-700 text-white text-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 text-lg">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-1 rounded bg-gray-900 border border-gray-700 text-white text-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 text-lg">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-1 rounded bg-gray-900 border border-gray-700 text-white text-lg"
              rows={4}
              required
              placeholder="Ingrese aquí la información del producto que desea importar, ubicación, compañia, cantidad, etc..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-amber-400 rounded text-black font-semibold text-lg hover:bg-amber-500 transition duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
         {/* Información sobre la empresa */}
         <div className="space-y-4">
          <div className="flex items-center">
            <h2 className="text-4xl font-bold text-amber-400">
              Contáctanos
            </h2>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            En <span className="text-amber-400 font-semibold">Importaciones Occidente</span>, ofrecemos un servicio confiable y ágil para conectar tu negocio con los mejores productos del mercado internacional.
          </p>

          {/* Valores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start space-x-4 bg-gray-800 p-4 rounded-lg">
              <FaTruck className="text-amber-400 w-10 h-10" />
              <div>
                <h3 className="text-xl font-semibold text-amber-400">
                  Rapidez
                </h3>
                <p className="text-gray-300">
                  Garantizamos entregas eficientes para mantener tu negocio en movimiento.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-gray-800 p-4 rounded-lg">
              <FaHandshake className="text-amber-400 w-10 h-10" />
              <div>
                <h3 className="text-xl font-semibold text-amber-400">
                  Confianza
                </h3>
                <p className="text-gray-300">
                  Construimos relaciones sólidas basadas en la transparencia.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-gray-800 p-4 rounded-lg">
              <FaClock className="text-amber-400 w-10 h-10" />
              <div>
                <h3 className="text-xl font-semibold text-amber-400">
                  Puntualidad
                </h3>
                <p className="text-gray-300">
                  Respetamos tus tiempos para que nunca pierdas oportunidades.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-gray-800 p-4 rounded-lg">
              <FaShieldAlt className="text-amber-400 w-10 h-10" />
              <div>
                <h3 className="text-xl font-semibold text-amber-400">
                  Seguridad
                </h3>
                <p className="text-gray-300">
                  Protegemos tus productos desde el origen hasta la entrega final.
                </p>
              </div>
            </div>
          </div>

          <div className="text-lg mt-8">
            <p className="text-gray-300">
              <strong>Email:</strong> contacto@importacionesoccidente.com
            </p>
            <p className="text-gray-300">
              <strong>Dirección:</strong> Alajuela, Costa Rica
            </p>
          </div>
        </div>
      </div>

      {/* Popup de confirmación */}
      {submitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center space-y-4">
            <p className="text-xl font-semibold">¡Mensaje enviado correctamente!</p>
            <p>Gracias por contactarnos. Nos pondremos en contacto contigo pronto.</p>
            <button
              onClick={closePopup}
              className="px-4 py-2 bg-amber-400 rounded text-white font-semibold hover:bg-amber-500 transition duration-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
