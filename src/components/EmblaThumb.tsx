'use client'
import React from 'react';
import Image from 'next/image';

interface ThumbProps {
  selected: boolean;
  index: number;
  onClick: () => void;
  image: { src: string; alt?: string };
}

export const EmblaThumb: React.FC<ThumbProps> = ({ selected, index, onClick, image }) => (
  <div className={`px-1 flex-1 ${selected ? 'opacity-100' : 'opacity-60'}`}>
    <button
      onClick={onClick}
      type="button"
      className={`w-full rounded-xl overflow-hidden border-2 transition-all duration-200 ${
        selected ? 'border-green-700 ring-2 ring-green-300' : 'border-gray-200'
      }`}
      tabIndex={selected ? 0 : -1}
      aria-label={`Voir la photo ${index + 1}`}
    >
      <Image
        src={image.src}
        alt={image.alt || `Miniature ${index + 1}`}
        width={160}
        height={120}
        className="object-cover w-full h-16 sm:h-20 aspect-[4/3] bg-gray-100"
      />
    </button>
  </div>
);

export default EmblaThumb; 