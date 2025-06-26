import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'
import { playfair } from './layout'

export default function HomePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel />
      </div>

      {/* Hero Content Overlay */}
      <section className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className={`
            text-white text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 
            font-normal leading-tight sm:leading-tight md:leading-tight lg:leading-tight
            drop-shadow-2xl mb-4 sm:mb-6 md:mb-8
            animate-in fade-in duration-1000 slide-in-from-bottom-4
            ${playfair.className}
          `}>
            Votre partenaire pour un jardin plein de vie.
          </h1>

          {/* Subtitle */}
          <p className={`
            text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
            font-light leading-relaxed max-w-4xl mx-auto
            drop-shadow-xl opacity-90
            animate-in fade-in duration-1000 slide-in-from-bottom-6 delay-300
            ${playfair.className}
          `}>
            Bienvenue aux Jardins St Michel, une pépinière familiale où passion,
            nature et conseils personnalisés s'unissent pour donner vie à vos projets de jardin.
          </p>

          {/* Optional CTA Button */}
          <div className="mt-8 sm:mt-10 md:mt-12 animate-in fade-in duration-1000 slide-in-from-bottom-8 delay-600">
            <button className={`
              px-6 sm:px-8 py-3 sm:py-4 
              bg-white/10 hover:bg-white/20 
              border-2 border-white/30 hover:border-white/50
              text-white font-medium text-sm sm:text-base
              rounded-lg backdrop-blur-sm
              transition-all duration-300 hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-white/50
              ${playfair.className}
            `}>
              Découvrir nos services
            </button>
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </main>
  )
}