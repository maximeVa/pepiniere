import React from "react";

interface MasonryImage {
  src: string;
  alt?: string;
}

interface MasonryGridProps {
  columns: MasonryImage[][];
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ columns }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {columns.map((col, i) => (
      <div className="grid gap-4" key={i}>
        {col.map((img, j) => (
          <div key={j} className="overflow-hidden rounded-lg">
            <img
              className="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              src={img.src}
              alt={img.alt || ''}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default MasonryGrid; 