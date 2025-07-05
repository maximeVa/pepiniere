'use client'
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import EmblaThumb from './EmblaThumb';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

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
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ ...options, loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi]);

  return (
    <div className={`w-full ${className || ''}`}>
      {/* Carousel principal */}
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