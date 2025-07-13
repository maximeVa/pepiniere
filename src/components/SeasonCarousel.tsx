'use client'

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { playfair } from '../app/fonts';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SeasonPhoto {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
}

interface SeasonCarouselProps {
  photos: SeasonPhoto[];
}

const arrowBase = "absolute top-1/2 transform -translate-y-1/2 z-30 bg-opacity-80 bg-white border border-green-900 shadow-lg rounded-full flex items-center justify-center w-12 h-12 transition-transform duration-200 hover:scale-102 cursor-pointer";

export default function SeasonCarousel({ photos }: SeasonCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="w-full max-w-5xl mx-auto my-12 bg-white rounded-xl overflow-hidden shadow-lg relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {photos.map((photo, idx) => (
            <div
              className="flex flex-col md:flex-row items-center justify-center min-w-0 flex-[0_0_100%]"
              key={idx}
              style={{ minHeight: 320, height: 380 }}
            >
              <div className="order-2 md:order-1 w-full md:w-1/2 px-4 py-6 md:py-8 bg-white border-t-0 md:border border-gray-200 rounded-b-lg md:rounded-l-lg md:rounded-br-none shadow-sm h-full z-10 relative flex flex-col gap-4">
                {photo.title && (
                  <>
                    <h2 className={`text-3xl md:text-5xl font-medium tracking-wide text-[#7C5A2A] mb-3 md:mb-5 leading-tight text-center md:text-left ${playfair.className} drop-shadow-md animate-fade-in`}>
                      {photo.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#B97A3A] to-[#7C5A2A] rounded-full mb-6 mx-auto md:mx-0"></div>
                  </>
                )}
                {photo.description && (
                  <p className="text-sm md:text-base text-green-900 font-medium leading-relaxed text-center md:text-left max-w-2xl mb-2 md:mb-0 animate-fade-in">
                    {photo.description.split(/(\*\*.+?\*\*)/g).map((part, i) =>
                      part.startsWith('**') && part.endsWith('**') ? (
                        <span key={i} className="font-bold text-green-900">{part.replace(/\*\*/g, '')}</span>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                  </p>
                )}
              </div>
              <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center items-center bg-white border-b-0 md:border border-gray-200 rounded-t-lg md:rounded-r-lg md:rounded-tl-none shadow-sm h-[220px] md:h-full relative">
                <img
                  src={photo.src}
                  alt={photo.alt || photo.title || ''}
                  className="rounded-lg object-cover border border-gray-200 w-full h-full"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flèches stylées en dehors du texte */}
      <button
        className={`${arrowBase} left-4 md:left-2 opacity-50 hover:opacity-100 focus:opacity-100`}
        onClick={scrollPrev}
        aria-label="Précédent"
      >
        <ChevronLeft size={24} className="text-green-900" />
      </button>
      <button
        className={`${arrowBase} right-4 md:right-2 opacity-50 hover:opacity-100 focus:opacity-100`}
        onClick={scrollNext}
        aria-label="Suivant"
      >
        <ChevronRight size={24} className="text-green-900" />
      </button>
    </div>
  );
}
