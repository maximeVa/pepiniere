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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6  ">
        <div className="flex flex-col gap-10 md:grid md:grid-cols-4 md:gap-20">
          {/* Bloc Logo & Présentation */}
          <div className="flex flex-col items-center md:items-start order-1 md:order-none mt-2 mb-2">
            <Link href="/" className="block group">
              <Image
                src="/home/logo.png"
                alt="Les Jardins St Michel"
                width={180}
                height={70}
                className="w-40 h-auto mb-2 md:w-32 md:h-20 lg:w-40 xl:w-48 drop-shadow-lg rounded-lg border-2 border-white/80 transition-all duration-300 group-hover:border-white group-hover:scale-105"
                priority
              />
            </Link>
            <span className="text-green-800 font-semibold text-xl mt-1 text-center md:text-left">Votre jardin, notre passion</span>
            <span className="text-xs text-gray-400 mt-1">Depuis 2009</span>
          </div>
          {/* Bloc Contact */}
          <div className="order-3 md:order-none">
            <h3 className={`text-lg font-semibold text-gray-900 mb-4 ${playfair.className} text-center md:text-left`}>Contact</h3>
            <div className="flex flex-col gap-2 items-center md:items-start">
              <a
                href="https://maps.google.com/?q=1+Chaussée+de+Jodoigne+1315+Glimes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-gray-700 hover:text-green-700 transition-colors duration-200 group mb-1"
                aria-label="Voir l'adresse sur Google Maps"
              >
                <MdLocationOn className="mr-3 mt-0.5 text-green-700 text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm leading-relaxed">
                  1 Chaussée de Jodoigne,<br />1315 Glimes
                </span>
              </a>
              <div className="flex items-start text-gray-600 mb-1">
                <MdAccessTime className="mr-3 mt-0.5 text-green-700 text-lg flex-shrink-0" />
                <div className="text-sm leading-relaxed">
                  <div>Mer–Sam : 9h–18h</div>
                  <div>Dim : 9h–13h</div>
                </div>
              </div>
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
          {/* Bloc Liens */}
          <div className="order-4 md:order-none">
            <h3 className={`text-lg font-semibold text-gray-900 mb-4 ${playfair.className} text-center md:text-left`}>Liens utiles</h3>
            <nav aria-label="Liens utiles">
              <ul className="space-y-2 flex flex-col items-center md:items-start">
                <li>
                  <a href="/" className="text-gray-600 hover:text-green-700 transition-colors duration-200 text-sm block py-1">Accueil</a>
                </li>
                <li>
                  <a href="/galerie" className="text-gray-600 hover:text-green-700 transition-colors duration-200 text-sm block py-1">Galerie Plantes</a>
                </li>
                <li>
                  <a href="/services" className="text-gray-600 hover:text-green-700 transition-colors duration-200 text-sm block py-1">Services & Ateliers</a>
                </li>
                <li>
                  <a href="/plan-du-site" className="text-gray-600 hover:text-green-700 transition-colors duration-200 text-sm block py-1">Plan du site</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Séparateur mobile */}
          <div className="block md:hidden border-t border-dotted border-gray-200 my-2" />
          {/* Bloc Réseaux sociaux */}
          <div className="flex flex-col items-center md:items-start order-2 md:order-none">
            <h3 className={`text-lg font-semibold text-gray-900 mb-4 ${playfair.className} text-center md:text-left`}>Suivez-nous</h3>
            <div className="flex space-x-4 mb-4 justify-center md:justify-start">
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
            <div className="flex items-center text-gray-600 text-sm justify-center md:justify-start">
              <span className="flex items-center text-yellow-500 mr-1">
                <FaStar className="inline-block" />
                <FaStar className="inline-block" />
                <FaStar className="inline-block" />
                <FaStar className="inline-block" />
                <FaStarHalfAlt className="inline-block" />
              </span>
              <span>4,4 sur Google (66 avis)</span>
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