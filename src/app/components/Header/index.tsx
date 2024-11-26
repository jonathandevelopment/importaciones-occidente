"use client";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="  text-white py-8 md:pt-28 md:pb-10 flex items-center px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        <div>
          <div className="flex items-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-amber-400 mb-2">
            Importaciones Occidente 
            </h2>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
          Calidad, Rapidez, Confianza
          </h1>
          <p className="font-[family-name:var(--font-geist-mono)]  mt-4 text-lg sm:text-xl lg:text-2xl font-light text-gray-300">
          Importamos lo mejor del mercado internacional directamente a tu puerta, garantizando excelencia y servicio a tiempo.
          </p>
          <div className="mt-8">
            <Link
              href="/#services"
              className="inline-block px-8 py-3 bg-orange-900 text-white text-lg font-semibold rounded-full hover:bg-orange-700 transition duration-300"
            >
              Servicios
            </Link>
            <Link
              href="/#contact"
              className="inline-block ml-2 px-8 py-3 bg-orange-900 text-white text-lg font-semibold rounded-full hover:bg-orange-700 transition duration-300"
            >
              Cotizar
            </Link>
          </div>
          
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/hero-image.jpg" // Update with your image path
            alt="Hero Image"
            width={800}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
