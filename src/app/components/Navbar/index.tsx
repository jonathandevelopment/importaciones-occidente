"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle between open and closed
  };

  return (
    <nav className="bg-zinc-900 p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Link to the main page */}
        <Link href="/" className="flex items-center text-white font-bold text-xl">
          <Image
            src="/images/logo-icon.png"
            alt="Tribü Digital Logo"
            width={100}
            height={100}
            className="ml-2"
          />
        </Link>

        {/* Navigation menu for large screens */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="font-[family-name:var(--font-geist-mono)] font-bold text-amber-400 hover:underline">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="font-[family-name:var(--font-geist-mono)] font-bold text-amber-400 hover:underline">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/#services" className="font-[family-name:var(--font-geist-mono)] font-bold text-amber-400 hover:underline">
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="font-[family-name:var(--font-geist-mono)] px-4 py-2 bg-orange-900 font-bold rounded-full hover:bg-orange-700 transition duration-300"
             
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* Menu button for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu that appears when isOpen is true */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-[60vh] bg-gradient-to-br from-gray-950 via-gray-950 to-amber-400 bg-opacity-90 p-8 z-50"
          style={{ transition: "opacity 0.3s ease-in-out" }}
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white hover:text-emerald-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <ul className="space-y-6 text-left">
            <li>
              <Link
                href="/"
                className="text-white text-lg font-semibold hover:text-emerald-600"
                onClick={toggleMenu}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="text-white text-lg font-semibold hover:text-emerald-600"
                onClick={toggleMenu}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-white text-lg font-semibold hover:text-emerald-600"
                onClick={toggleMenu}
              >
                Nosotros
              </Link>
            </li>
            
            <li>
              <Link
                href="/#contact"
                className="px-6 py-3 bg-orange-900 text-white text-lg font-semibold rounded-full hover:bg-orange-700 transition duration-300"
                onClick={toggleMenu}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
