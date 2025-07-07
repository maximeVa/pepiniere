'use client'
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import EmblaThumb from './EmblaThumb';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface CarouselImage {
  src: string;
  alt?: string;
}

interface EmblaCarouselProps {
  images: CarouselImage[];
  options?: any;
  className?: string;
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ images, options, className }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // Créer une référence pour l'autoplay
  const autoplayRef = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ ...options, loop: true }, [autoplayRef.current]);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
      // Remettre le délai de l'autoplay à zéro
      if (autoplayRef.current && autoplayRef.current.reset) {
        autoplayRef.current.reset();
      }
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi]);

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) {
      emblaMainApi.scrollPrev();
      // Remettre le délai de l'autoplay à zéro
      if (autoplayRef.current && autoplayRef.current.reset) {
        autoplayRef.current.reset();
      }
    }
  }, [emblaMainApi]);

  const scrollNext = useCallback(() => {
    if (emblaMainApi) {
      emblaMainApi.scrollNext();
      // Remettre le délai de l'autoplay à zéro
      if (autoplayRef.current && autoplayRef.current.reset) {
        autoplayRef.current.reset();
      }
    }
  }, [emblaMainApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    return () => {
      emblaMainApi.off('select', onSelect);
    };
  }, [emblaMainApi, onSelect]);

  return (
    <div className={`w-full ${className || ''}`}>
      {/* Carousel principal avec flèches positionnées relativement */}
      <div className="relative">
        <div className="overflow-hidden rounded-2xl px-0 lg:px-32 xl:px-60 w-full" ref={emblaMainRef}>
          <div className="flex">
            {images.map((img, idx) => (
              <div
                className="px-1 will-change-transform flex-[0_0_100%] min-w-0 lg:flex-[0_0_90%] xl:flex-[0_0_60%] transition-all"
                key={idx}
              >
                <Image
                  src={img.src}
                  alt={img.alt || `Image ${idx + 1}`}
                  width={2000}
                  height={1200}
                  className="w-full h-64 sm:h-96 lg:h-[700px] xl:h-[700px] object-cover rounded-2xl aspect-[16/9] bg-gray-100"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Flèches de navigation - positionnées par rapport au carousel */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 lg:left-8 xl:left-16 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl border border-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          aria-label="Image précédente"
        >
          <ChevronLeftIcon className="w-5 h-5 lg:w-6 lg:h-6 text-green-800 group-hover:text-green-900 transition-colors duration-300" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-2 lg:right-8 xl:right-16 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl border border-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          aria-label="Image suivante"
        >
          <ChevronRightIcon className="w-5 h-5 lg:w-6 lg:h-6 text-green-800 group-hover:text-green-900 transition-colors duration-300" />
        </button>
      </div>

      {/* Thumbnails : visibles uniquement sur mobile/tablette */}
      <div className="mt-4 block lg:hidden">
        <div className="overflow-x-auto" ref={emblaThumbsRef}>
          <div className="flex">
            {images.map((img, idx) => (
              <EmblaThumb
                key={idx}
                onClick={() => onThumbClick(idx)}
                selected={idx === selectedIndex}
                index={idx}
                image={img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel; 