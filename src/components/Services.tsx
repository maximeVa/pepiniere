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
        <section className="py-16 md:py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 ${playfair.className}`}>
                    Nos services
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Notre équipe allie expertise et créativité…
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                {services.map((svc, idx) => (
                    <Link
                        key={idx}
                        href={svc.href}
                        className="
    group block relative overflow-hidden rounded-2xl
    h-56               /* mobile */
    sm:h-80            /* tablette */
    md:h-96            /* laptop */
    lg:h-96     /* desktop large */
  "
                    >
                        {/* 1. Le parent a un ratio fixe via aspect-* */}
                        <Image
                            src={svc.image}
                            alt={svc.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* overlay gradient pour lisibilité */}
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />

                        {/* contenu */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                            <h3 className={`text-xl md:text-2xl ${playfair.className}`}>
                                {svc.title}
                            </h3>
                            <span className="text-2xl transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Services;
