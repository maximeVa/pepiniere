    import Link from "next/link";
    import Image from "next/image";
    import { playfair } from '../app/fonts';

    interface ServiceCard {
        title: string;
        image: string;
        href: string;
    }

    interface ServicesProps {
        services?: ServiceCard[];
    }

    const Services: React.FC<ServicesProps> = ({
        services = [
            {
                title: 'Landscaping works',
                image: '/services/landscaping.jpg',
                href: '/services/landscaping',
            },
            // ...
        ]
    }) => {
        return (
            <section id="services" className="py-8 md:py-16 px-2 sm:px-4 md:px-6 bg-white">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 ${playfair.className}`}>
                        Nos services
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Notre équipe allie expertise et créativité…
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
                    {services.map((svc, idx) => (
                        <div key={idx} className="mb-6 sm:mb-0">
                            <div className="group">
                                <Link
                                    href={svc.href}
                                    className="
    block relative overflow-hidden rounded-2xl cursor-pointer
    h-56               /* mobile */
    sm:h-80            /* tablette */
    md:h-96            /* laptop */
    lg:h-96     /* desktop large */
    mb-4
  "
                                >
                                    {/* Image de fond */}
                                    <Image
                                        src={svc.image}
                                        alt={svc.title}
                                        fill
                                        className="object-cover transition-all duration-150 group-hover:brightness-50"
                                    />

                                    {/* overlay gradient pour lisibilité */}
                                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />

                                    {/* Badge icône clic */}
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm w-10 h-10 rounded-full shadow-lg transition-all duration-300 group-hover:bg-white group-hover:scale-110 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="green" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.122 2.122" />
                                        </svg>
                                    </div>

                                    {/* contenu principal */}
                                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                                        <h3 className={`text-xl md:text-2xl ${playfair.className}`}>
                                            {svc.title}
                                        </h3>
                                        <span className="text-2xl transition-transform duration-150 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </div>

                                    {/* Overlay "En savoir plus" au hover */}
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-xl border border-white/20">
                                            <span className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                                En savoir plus
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Description en dessous */}
                            <div className="px-2">
                                <hr className="w-8 border-t-2 border-emerald-300 mb-3" />

                                {svc.title === 'Conseils à domicile' && (
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        Que vous ayez besoin d'un plan paysager complet, d'un croquis pour un parterre ou simplement de conseils d'aménagement ou d'entretien dans votre jardin, nous avons la formule qui vous convient.
                                    </p>
                                )}
                                {svc.title === 'Service de livraison' && (
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        Nous offrons un service de livraison pour les commandes volumineuses. Zone de livraison : tout le Brabant-Wallon, Bruxelles, le Namurois et la région de Hannut.
                                    </p>
                                )}
                                {svc.title === 'Location de plantes' && (
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        Vous souhaitez décorer un événement privé ou professionnel avec de belles plantes ? Nous avons l'habitude de louer des végétaux pour tout types d'événement.
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    };

    export default Services;
