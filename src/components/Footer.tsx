import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="bg-white border-t border-gray-100 py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & description */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-green-600 text-2xl mr-2">
                {/* Simple leaf icon */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M3 21s9-3 13-7 7-13 7-13-9 3-13 7S3 21 3 21z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="text-2xl font-bold text-gray-900">Les jardins saint pépinière</span>
            </div>
            <p className="text-gray-500 mb-4">Libérez tout le potentiel de<br/>votre espace extérieur.</p>
            <div className="flex space-x-4 text-green-600 text-xl">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
          {/* Entreprise */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-3">Entreprise</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-700 transition">Accueil</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-700 transition">À propos</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-700 transition">Contact</a></li>
            </ul>
          </div>
          {/* Autres pages */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-3">Autres pages</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-700 transition">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-700 transition">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-700 transition">404</a></li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-3">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-700 transition">Conseils à domicile</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-700 transition">Service de livraison</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-700 transition">Location de plantes</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-white border-t border-gray-100 py-4 text-center text-gray-400 text-sm">
        © 2025 Les jardins saint pépinière. Tous droits réservés.
      </div>
    </div>
  );
} 