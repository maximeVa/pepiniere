import Image from 'next/image'
import Link from 'next/link'
import { playfair } from '@/app/layout'
import { FaceSmileIcon, AdjustmentsHorizontalIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
import CtaBanner from "@/components/CtaBanner";
import { ArrowRight, Phone } from "lucide-react";
import Footer from '@/components/Footer';
import EmblaCarousel from '@/components/EmblaCarousel';

export default function EuroserrePage() {
    return (
        <main className="w-full min-h-screen bg-white">
            {/* Section Hero optimisée avec contenu intégré */}
            <section className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-32 mb-8 sm:mb-10 md:mb-12">
                <Image
                    src="/carousel/heruSectionBackground.jpg"
                    alt="Serre Euroserre dans un jardin"
                    fill
                    sizes="100vw"
                    className="object-cover brightness-75"
                    priority
                    quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
                <div className="relative z-10 text-center w-full px-4 sm:px-6 max-w-4xl mx-auto">
                    <h1 className={`text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl ${playfair.className} mb-4 sm:mb-6`}>
                        Euroserre
                    </h1>
                    <p className="text-white text-lg sm:text-xl md:text-2xl opacity-95 max-w-2xl mx-auto drop-shadow-lg mb-6 sm:mb-8">
                        Des serres <span className="font-semibold">made in Belgium</span>
                    </p>
                    
                    {/* Image du cœur centrée */}
                    <div className="mb-6 sm:mb-8 flex justify-center">
                        <Image
                            src="/euroserre/heartT.png"
                            alt="Cœur Belgique"
                            width={120}
                            height={120}
                            className="drop-shadow-lg w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                            sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                        />
                    </div>
                    
                    {/* Bouton CTA */}
                    <Link
                        href="https://euroserre.com/portal/configurator/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-full text-white font-semibold bg-white/10 backdrop-blur-sm hover:bg-white hover:text-green-800 hover:border-white transition-all duration-300 text-base sm:text-lg cursor-pointer shadow-lg hover:shadow-xl"
                    >
                        Configurer ma serre & obtenir un devis
                    </Link>
                </div>
            </section>

            {/* Carousel Euroserre */}
            <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
                <div className="mb-10 text-center">
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-4 ${playfair.className}`}>Découvrez quelques réalisations Euroserre</h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">Voici un aperçu de différentes serres Euroserre installées chez nos clients. Inspirez-vous pour votre futur projet&nbsp;!</p>
                </div>
                <EmblaCarousel
                    images={[
                        { src: '/euroserre/1.jpg', alt: 'Serre Euroserre 1' },
                        { src: '/euroserre/2.jpg', alt: 'Serre Euroserre 2' },
                        { src: '/euroserre/3.jpg', alt: 'Serre Euroserre 3' },
                        { src: '/euroserre/4.jpg', alt: 'Serre Euroserre 4' },
                        { src: '/euroserre/5.jpg', alt: 'Serre Euroserre 5' },
                    ]}
                />
            </section>

            {/* Features Section optimisée */}
            <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center transition-all duration-300">
                        <div className="mb-4 sm:mb-6">
                            <CheckBadgeIcon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800" />
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-black">QUALITÉ</h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            La qualité des Serres 'Euroserre' est bien supérieure à ce qui se trouve ailleurs sur le marché.<br />
                            Un investissement dont vous profiterez à vie.<br />
                            Découvrez nos deux modèles d'exposition à la pépinière.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center transition-all duration-300">
                        <div className="mb-4 sm:mb-6">
                            <AdjustmentsHorizontalIcon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800" />
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-black">SUR MESURE</h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Tout est personnalisable : le modèle, les dimensions, le nombre et l'emplacement des portes et fenêtres, les accessoires comme des étagères, des bacs de culture, des voiles d'ombrage ou encore une moustiquaire.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center transition-all duration-300">
                        <div className="mb-4 sm:mb-6">
                            <FaceSmileIcon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800" />
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-black">SERVICE APRÈS VENTE</h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Nous vous garantissons un excellent service après-vente en pépinière avec un suivi de qualité et une bonne communication.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bannière CTA Euroserre - Pleine largeur */}
            <CtaBanner
                imageUrl="/home/availabilityBanner.jpg"
                title="Prêt à créer votre espace de jardinage idéal ?"
                subtitle="Obtenez un devis personnalisé en quelques clics ou contactez nos experts"
                buttons={[
                    {
                        label: "Configurer ma serre",
                        icon: <ArrowRight className="w-5 h-5" />,
                        href: "https://euroserre.com/portal/configurator/"
                    },
                    {
                        label: "Nous contacter",
                        icon: <Phone className="w-5 h-5" />,
                        href: "/contact"
                    }
                ]}
            />

            <Footer />
        </main>
    )
}