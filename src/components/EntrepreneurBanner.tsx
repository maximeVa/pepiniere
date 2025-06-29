'use client'

import Image from "next/image";
import { Button } from "./ui/button";
import clsx from "clsx";
import { playfair } from '../app/fonts';
import { useRouter } from "next/navigation";
import { UserCheck } from "lucide-react";

interface EntrepreneurBannerProps {
    imageUrl: string;
    className?: string;
}

export default function EntrepreneurBanner({
    imageUrl,
    className,
}: EntrepreneurBannerProps) {
    const router = useRouter();
    return (
        <section className={clsx(
            "relative isolate overflow-hidden flex items-center",
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
            <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between lg:justify-center lg:items-center p-6 sm:p-8 md:p-10 lg:p-12">
                
                {/* Left side - Text content */}
                <div className="flex-1 text-white lg:mr-8">
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold leading-tight mb-4 ${playfair.className}`}>
                        Entrepreneur ?
                    </h2>
                    <p className="text-lg sm:text-xl text-white/90 font-light mb-6">
                        Enregistrez vous dans notre base de données<br/>
                        (avec numéro de TVA) et bénéficiez de nos<br/>
                        conditions entrepreneurs.
                    </p>
                </div>

                {/* Right side - CTA card */}
                <div className="w-full sm:w-auto">
                    <button 
                        onClick={() => router.push("/enregistrement-entrepreneur")}
                        className="block bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-green-400/40 hover:shadow-2xl hover:bg-white group cursor-pointer w-full sm:w-auto relative overflow-hidden focus:ring-2 focus:ring-green-500"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl animate-pulse group-hover:animate-none">
                                    <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 group-hover:rotate-12" />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs sm:text-sm text-gray-600 font-medium mb-1 transition-colors duration-300 group-hover:text-gray-700">Enregistrement</p>
                                <span className="text-base sm:text-lg font-bold text-gray-900 transition-all duration-300 group-hover:text-green-600 block">
                                    Entrepreneur
                                </span>
                            </div>
                        </div>
                        {/* Texte incitatif affiché en permanence */}
                        <div className="flex items-center justify-center mt-2 text-green-700 font-semibold text-xs sm:text-sm">
                            Cliquez ici pour vous enregistrer
                            <svg className="ml-2 w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
} 