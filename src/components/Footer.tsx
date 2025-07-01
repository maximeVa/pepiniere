import Logo from './Logo'
import { playfair } from '@/app/layout'
import { FaFacebookF, FaInstagram, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdLocationOn, MdAccessTime, MdPhone } from "react-icons/md";
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-green-50/80 via-white/90 to-white/95 shadow-2xl rounded-t-3xl overflow-hidden animate-fade-in">
      {/* Overlay décoratif (optionnel) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-start text-center">
          {/* Bloc Logo & Présentation */}
          <div className="flex flex-col items-center justify-center mb-8 md:mb-0">
            <Link href="/" className="block group">
              <Image
                src="/home/logo.png"
                alt="Les Jardins St Michel"
                width={140}
                height={55}
                className="w-28 h-auto mb-2 md:w-24 md:h-16 lg:w-28 xl:w-32 drop-shadow-lg rounded-lg border border-gray-400/60 transition-all duration-300 group-hover:border-gray-600/60 group-hover:scale-105"
                priority
              />
            </Link>
            <span className="text-green-800 font-semibold text-xl mt-1">Votre jardin, notre passion</span>
            <span className="text-xs text-gray-400 mt-1">Depuis 2009</span>
          </div>
          {/* Bloc Contact */}
          <div className="flex flex-col items-center justify-center mb-8 md:mb-0">
            <h3 className={`text-lg font-semibold text-gray-900 mb-3 ${playfair.className}`}>Contact</h3>
            <div className="flex flex-col gap-2 items-center">
              <a
                href="https://maps.google.com/?q=1+Chaussée+de+Jodoigne+1315+Glimes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-gray-700 hover:text-green-700 transition-colors duration-200 group mb-1"
                aria-label="Voir l'adresse sur Google Maps"
              >
                <MdLocationOn className="mr-3 mt-0.5 text-green-700 text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm leading-relaxed text-left">
                  1 Chaussée de Jodoigne,<br />1315 Glimes
                </span>
              </a>
              <a
                href="tel:+3210655444"
                className="flex items-center text-green-700 hover:text-green-800 hover:underline transition-colors duration-200 group"
                aria-label="Appeler la pépinière"
              >
                <MdPhone className="mr-3 text-green-700 text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm font-medium">+32 10 65 54 44</span>
              </a>
            </div>
          </div>
          {/* Bloc Horaires */}
          <div className="flex flex-col items-center justify-center mb-8 md:mb-0">
            <h3 className={`text-lg font-semibold text-gray-900 mb-3 ${playfair.className}`}>Horaires</h3>
            <div className="flex items-start justify-center text-gray-600 mb-1">
              <MdAccessTime className="mr-2 mt-0.5 text-green-700 text-lg flex-shrink-0" />
              <div className="text-sm leading-relaxed text-left">
                <div>Mer–Sam : 9h–18h</div>
                <div>Dim : 9h–13h</div>
              </div>
            </div>
          </div>
          {/* Bloc Suivez-nous */}
          <div className="flex flex-col items-center justify-center">
            <h3 className={`text-lg font-semibold text-gray-900 mb-3 ${playfair.className}`}>Suivez-nous</h3>
            <div className="flex space-x-4 mb-2 justify-center">
              <a
                href="#"
                aria-label="Visitez notre page Facebook"
                className="text-green-700 hover:text-green-800 text-xl hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Suivez-nous sur Instagram"
                className="text-green-700 hover:text-green-800 text-xl hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-200"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        {/* Bas de page */}
        <div className="mt-6 border-t pt-2 flex flex-wrap items-center justify-center text-center text-xs text-gray-500 gap-2">
          <span>© 2025 Les Jardins Saint‑Michel</span>
          <span>|</span>
          <a href="/mentions-legales" className="hover:text-green-700 hover:underline transition-colors duration-200">Mentions légales</a>
          <span>|</span>
          <a href="/politique-confidentialite" className="hover:text-green-700 hover:underline transition-colors duration-200">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
}