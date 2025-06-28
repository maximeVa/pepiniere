import Carousel from '@/components/Carousel'
import { playfair } from './layout'
import Team from '@/components/Team'
import MasonryGrid from '@/components/MasonryGrid'
import Services from '@/components/Services'
import AvailabilityBanner from '@/components/AvailabilityBanner'

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero Section avec Carousel en fond */}
      <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          <Carousel />
        </div>
        {/* Hero Content Overlay */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 lg:px-12 w-full h-full">
          <div className="max-w-6xl mx-auto">
            <h1 className={`
              text-white text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 
              font-normal leading-tight sm:leading-tight md:leading-tight lg:leading-tight
              drop-shadow-2xl mb-4 sm:mb-6 md:mb-8
              animate-in fade-in duration-1000 slide-in-from-bottom-4
              ${playfair.className}
            `}>
              Votre partenaire pour un jardin plein de vie.
            </h1>
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
        </div>
        {/* Decorative Elements */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Section Services - NOUVEAU */}
      <Services
        services={[
          {
            title: 'Conseils à domicile',
            image: '/background.jpg',
            href: '/services/amenagement',
          },
          {
            title: 'Service de livraison',
            image: '/backgroundV2.jpg',
            href: '/services/conseils',
          },
          {
            title: 'Location de plantes',
            image: '/background.jpg',
            href: '/services/plantation',
          },
        ]}
      />

      <AvailabilityBanner
        imageUrl="/home/availabilityBanner.jpg"
        title="Nos experts sont disponibles pour vous accompagner"
        subtitle="Profitez de nos conseils personnalisés et de notre expertise"
        phone="0474 55 93 73"
        workingHours={{
          lundi: "fermé",
          mardi: "fermé",
          mercredi: "9h00 - 18h00",
          jeudi: "9h00 - 18h00",
          vendredi: "9h00 - 18h00",
          samedi: "9h00 - 18h00",
          dimanche: "9h00 - 13h00"
        }}
        address="1 Chaussée de Jodoigne 1315 Glimes"
      />

      {/* Section Team (Notre Équipe) */}
      <Team />

      {/* Titre galerie masonry */}
      <div className="w-full flex flex-col items-center mt-12 mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">La pépinière en quelque photos ...</h2>
      </div>

      {/* Section Galerie Masonry */}
      <section className="py-12 md:py-20">
        <MasonryGrid
          images={[
            { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" },
            { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" },
            { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" },
            { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" },
            { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" },
            { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" },
            { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" },
            { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" },
            { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" },
            { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" },
            { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" },
            { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" },
          ]}
        />
      </section>
    </main>
  )
}