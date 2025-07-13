'use client'

import React, { useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import { playfair } from '../app/fonts';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ReactMarkdown from "react-markdown";

interface SeasonPhoto {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
}

interface SeasonCarouselProps {
  photos: SeasonPhoto[];
}

const arrowBase = "absolute top-1/2 transform -translate-y-1/2 z-10 md:z-30 flex items-center justify-center w-16 h-10 bg-white/70 rounded-full transition hover:bg-white/90 cursor-pointer";

export default function SeasonCarousel({ photos }: SeasonCarouselProps) {
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [autoplayRef.current]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="w-full max-w-6xl mx-auto my-12 bg-white rounded-xl overflow-hidden shadow-lg relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {photos.map((photo, idx) => (
            <div
              className="flex flex-col md:flex-row items-center justify-center min-w-0 flex-[0_0_100%]"
              key={idx}
            >
              <div className="order-2 md:order-1 w-full md:w-1/2 px-2 md:px-4 py-4 md:py-8 bg-white border-t-0 md:border border-gray-200 rounded-b-lg md:rounded-l-lg md:rounded-br-none shadow-sm h-full z-10 relative flex flex-col gap-2 md:gap-4">
                {photo.title && (
                  <>
                    <h2 className={`text-2xl md:text-5xl font-medium tracking-wide text-[#7C5A2A] mb-2 md:mb-5 leading-tight text-center md:text-left ${playfair.className} drop-shadow-md animate-fade-in`}>
                      {photo.title}
                    </h2>
                    <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#B97A3A] to-[#7C5A2A] rounded-full mb-4 md:mb-6 mx-auto md:mx-0"></div>
                  </>
                )}
                {photo.description && (
                  <div className="text-base md:text-lg text-green-900 font-medium leading-relaxed text-center md:text-left max-w-3xl mb-2 md:mb-0 animate-fade-in">
                    <ReactMarkdown
                      components={{
                        ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-2" {...props} />,
                        ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-2" {...props} />,
                        li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                        strong: ({ node, ...props }) => <strong className="text-green-800 font-semibold" {...props} />,
                        em: ({ node, ...props }) => <em className="text-green-700" {...props} />,
                        p: ({ node, ...props }) => <p className="mb-2 text-base md:text-lg text-green-900 leading-relaxed" {...props} />,
                      }}
                    >
                      {photo.description}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
              <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center items-center bg-white border-b-0 md:border border-gray-200 rounded-t-lg md:rounded-r-lg md:rounded-tl-none shadow-sm h-[250px] md:h-[440px] relative">
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
        className={`${arrowBase} -left-px opacity-50 hover:opacity-100 focus:opacity-100 rounded-l-none`}
        onClick={scrollPrev}
        aria-label="Précédent"
      >
        <ArrowLeft size={24} className="text-black" />
      </button>
      <button
        className={`${arrowBase} -right-px opacity-50 hover:opacity-100 focus:opacity-100 rounded-r-none`}
        onClick={scrollNext}
        aria-label="Suivant"
      >
        <ArrowRight size={24} className="text-black" />
      </button>
    </div>
  );
}
