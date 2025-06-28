import Image from "next/image";
import { Phone, Clock, MapPin } from "lucide-react";
import clsx from "clsx";
import { playfair } from '../app/fonts';

interface WorkingHours {
    lundi: string;
    mardi: string;
    mercredi: string;
    jeudi: string;
    vendredi: string;
    samedi: string;
    dimanche: string;
}

interface AvailabilityBannerProps {
    /**
     * Absolute or relative URL of the background image (jpg / png / webp …).
     */
    imageUrl: string;
    /**
     * Main heading – e.g. "Our gardeners are available from Monday to Friday".
     */
    title: string;
    /**
     * Optional secondary line under the heading (can stay undefined).
     */
    subtitle?: string;
    /**
     * Phone number to display.
     */
    phone: string;
    /**
     * Working hours for each day.
     */
    workingHours?: WorkingHours;
    /**
     * Address to display.
     */
    address?: string;
    /**
     * Additional Tailwind classes you might want to inject.
     */
    className?: string;
}

/**
 * A responsive hero/CTA banner with a full‑width background image, a heading on the left
 * and a contact card on the right. Optimised for Next.js + Tailwind.
 */
export default function AvailabilityBanner({
    imageUrl,
    title,
    subtitle,
    phone,
    workingHours = {
        lundi: "fermé",
        mardi: "fermé",
        mercredi: "9h00 - 18h00",
        jeudi: "9h00 - 18h00",
        vendredi: "9h00 - 18h00",
        samedi: "9h00 - 18h00",
        dimanche: "9h00 - 13h00"
    },
    address = "1 Chaussée de Jodoigne 1315 Glimes",
    className,
}: AvailabilityBannerProps) {
    // Fonction pour formater les horaires de manière concise
    const formatWorkingHours = (hours: WorkingHours) => {
        const days = Object.entries(hours);
        const openDays = days.filter(([_, hours]) => hours !== "fermé");
        const closedDays = days.filter(([_, hours]) => hours === "fermé");
        
        if (openDays.length === 0) return "Fermé toute la semaine";
        if (closedDays.length === 0) return `Tous les jours : ${openDays[0][1]}`;
        
        // Regrouper les jours avec les mêmes horaires
        const groupedHours: { [key: string]: string[] } = {};
        openDays.forEach(([day, hours]) => {
            if (!groupedHours[hours]) groupedHours[hours] = [];
            groupedHours[hours].push(day);
        });
        
        // Si il n'y a qu'un seul groupe d'horaires, afficher normalement
        if (Object.keys(groupedHours).length === 1) {
            const [hours, days] = Object.entries(groupedHours)[0];
            const dayNames = days.map(day => day.charAt(0).toUpperCase() + day.slice(1));
            return `${dayNames.join(", ")} : ${hours}`;
        }
        
        // Si il y a plusieurs groupes d'horaires, afficher à la ligne
        const formattedGroups = Object.entries(groupedHours).map(([hours, days]) => {
            const dayNames = days.map(day => day.charAt(0).toUpperCase() + day.slice(1));
            return `${dayNames.join(", ")} : ${hours}`;
        });
        
        return formattedGroups.join("\n");
    };

    return (
        <section className={clsx(
            "relative isolate overflow-hidden",
            "my-4 sm:my-6 md:my-8",
            "rounded-none",
            "min-h-[280px] sm:min-h-[320px] md:min-h-[340px] lg:min-h-[360px]",
            className,
        )}>
            {/* Background image fills the component */}
            <Image
                src={imageUrl}
                alt="Background"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
                priority
                className="absolute inset-0 -z-20 object-cover"
            />

            {/* Gradient overlay for better text contrast */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

            {/* Content container */}
            <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between p-6 sm:p-8 md:p-10 lg:p-12">
                
                {/* Left side - Text content */}
                <div className="flex-1 text-white mb-8 lg:mb-0 lg:mr-8">
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold leading-tight mb-4 ${playfair.className}`}>
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-lg sm:text-xl text-white/90 font-light mb-6">
                            {subtitle}
                        </p>
                    )}
                    
                    {/* Working hours section */}
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <Clock className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-medium text-white mb-1">Horaires d'ouverture :</p>
                                <div className="text-sm text-white/80 leading-relaxed">
                                    {formatWorkingHours(workingHours).split('\n').map((line, index) => (
                                        <div key={index} className={index > 0 ? 'mt-1' : ''}>
                                            {line}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {address && (
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <p className="text-sm text-white/80">{address}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right side - Contact card */}
                <div className="w-full sm:w-auto">
                    <a 
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="block bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/98 group cursor-pointer"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 group-hover:rotate-12" />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs sm:text-sm text-gray-600 font-medium mb-1 transition-colors duration-300 group-hover:text-gray-700">Appelez-nous</p>
                                <span className="text-base sm:text-lg font-bold text-gray-900 transition-all duration-300 group-hover:text-green-600 block hover:scale-105">
                                    {phone}
                                </span>
                                <p className="text-xs sm:text-sm text-gray-500 mt-1 transition-colors duration-300 group-hover:text-gray-600">
                                    Disponible aux horaires d'ouverture
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
