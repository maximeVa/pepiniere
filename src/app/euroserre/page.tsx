import Image from 'next/image'
import Link from 'next/link'
import { playfair } from '@/app/layout'
import { FaceSmileIcon, AdjustmentsHorizontalIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
import CtaBanner from "@/components/CtaBanner";
import { ArrowRight, Phone } from "lucide-react";
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';

export default function EuroserrePage() {
    return (
        <main className="w-full min-h-screen bg-white">
            {/* Section Hero optimisée */}
            <section className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-32 mb-8 sm:mb-10 md:mb-12">
                <Image
                    src="/carousel/heruSectionBackground.jpg"
                    alt="Serre Euroserre dans un jardin"
                    fill
                    sizes="100vw"
                    className="object-cover brightness-75"
                    priority
                    quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
                <div className="relative z-10 text-center w-full px-4 sm:px-6">
                    <h1 className={`text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-2xl ${playfair.className} mb-2 sm:mb-3`}>
                        Euroserre
                    </h1>
                    <p className="text-white text-base sm:text-lg md:text-xl opacity-90 max-w-sm sm:max-w-md md:max-w-xl mx-auto drop-shadow-lg">
                        Des serres haut de gamme, made in Belgium
                    </p>
                </div>
            </section>

            {/* Hero Section optimisée */}
            <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center max-w-7xl mx-auto">
                    {/* Content Card */}
                    <div className="bg-gray-50 rounded-3xl p-10 flex flex-col justify-center items-center shadow-xl border border-gray-100 transition hover:shadow-2xl text-center">
                        <h1 className={`text-4xl lg:text-5xl font-bold mb-4 text-gray-900 ${playfair.className}`}>Euroserre</h1>
                        <p className="text-lg text-gray-700 mb-6">Des serres <span className="font-medium">made in Belgium</span></p>
                        <div className="mb-6 flex justify-center items-center w-full">
                            <Image
                                src="/euroserre/heartT.png"
                                alt="Cœur Belgique"
                                width={96}
                                height={96}
                                className="drop-shadow-md w-16 h-16 sm:w-24 sm:h-24"
                                sizes="(max-width: 640px) 64px, 96px"
                            />
                        </div>
                        <Link
                            href="https://euroserre.com/portal/configurator/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-green-700 rounded-full text-green-900 font-semibold bg-white hover:bg-green-700 hover:text-white hover:border-green-800 transition-colors duration-300 text-sm sm:text-base cursor-pointer"
                        >
                            Configurer ma serre & obtenir un devis
                        </Link>
                    </div>

                    {/* Hero Image */}
                    <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl border border-gray-100 aspect-[4/3] sm:aspect-video flex items-center justify-center bg-gray-100 transition-all duration-300">
                        <Image
                            src="/euroserre/Euroserre.avif"
                            alt="Serre Euroserre dans un jardin"
                            width={800}
                            height={600}
                            className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                            priority
                            quality={85}
                        />
                    </div>
                </div>
            </section>

            {/* Features Section optimisée */}
            <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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

            {/* Carousel Euroserre */}
            <section className="w-full max-w-3xl mx-auto mb-10">
                <Carousel
                    images={[
                        { src: '/euroserre/1.jpg', alt: 'Serre Euroserre 1' },
                        { src: '/euroserre/2.jpg', alt: 'Serre Euroserre 2' },
                        { src: '/euroserre/3.jpg', alt: 'Serre Euroserre 3' },
                        { src: '/euroserre/4.jpg', alt: 'Serre Euroserre 4' },
                        { src: '/euroserre/5.jpg', alt: 'Serre Euroserre 5' },
                    ]}
                    className="w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-lg"
                />
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