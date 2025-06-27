import React from "react";

interface MasonryImage {
  src: string;
  alt?: string;
}

interface MasonryGridProps {
  images?: MasonryImage[];
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ images = [] }) => (
  <div className="w-full px-4 md:px-25 lg:px-40 xl:px-80 columns-2 md:columns-3 lg:columns-4 gap-4">
    {images.map((img, i) => (
      <img
        key={i}
        src={img.src}
        alt={img.alt || ''}
        className="mb-4 rounded-xl shadow-md w-full break-inside-avoid transition-transform duration-300 ease-in-out transform hover:scale-95 hover:shadow-lg"
        loading="lazy"
      />
    ))}
  </div>
);

export default MasonryGrid; 