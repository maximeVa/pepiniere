
'use client'

import React, { useState, useEffect } from "react";

interface MasonryImage {
  src: string;
  alt?: string;
}

interface MasonryGridProps {
  images?: MasonryImage[];
}

const DEFAULT_IMAGES: MasonryImage[] = [
  { src: "/masonry/1.avif", alt: "Pépinière - Image 1" },
  { src: "/masonry/2.avif", alt: "Pépinière - Image 2" },
  { src: "/masonry/3.avif", alt: "Pépinière - Image 3" },
  { src: "/masonry/4.avif", alt: "Pépinière - Image 4" },
  { src: "/masonry/5.avif", alt: "Pépinière - Image 5" },
  { src: "/masonry/6.avif", alt: "Pépinière - Image 6" },
  { src: "/masonry/7.jpg", alt: "Pépinière - Image 7" },
  { src: "/masonry/8.jpg", alt: "Pépinière - Image 8" },
  { src: "/masonry/9.jpg", alt: "Pépinière - Image 9" },
  { src: "/masonry/10.jpg", alt: "Pépinière - Image 10" }
];

const POSSIBLE_HEIGHTS = [220, 260, 300, 240, 280, 320, 200, 250, 290, 270];

const MasonryGrid: React.FC<MasonryGridProps> = ({ images }) => {
  const imagesToUse = images && images.length > 0 ? images : DEFAULT_IMAGES;
  const [imageHeights, setImageHeights] = useState<number[]>([]);

  useEffect(() => {
    setImageHeights(
      imagesToUse.map((_, idx) => POSSIBLE_HEIGHTS[idx % POSSIBLE_HEIGHTS.length])
    );
  }, [imagesToUse]);

  // Répartition équilibrée des images dans les colonnes
  const distributeImages = (colCount: number) => {
    const columns: { img: MasonryImage; height: number; index: number }[][] = Array.from({ length: colCount }, () => []);
    const colHeights = Array(colCount).fill(0);
    imagesToUse.forEach((img, idx) => {
      const height = imageHeights[idx] || 250;
      const minCol = colHeights.indexOf(Math.min(...colHeights));
      columns[minCol].push({ img, height, index: idx });
      colHeights[minCol] += height + 16; // 16px gap
    });
    return { columns, colHeights };
  };

  // Calcule la hauteur totale de chaque colonne
  const getColHeights = (columns: { img: MasonryImage; height: number; index: number }[][]) =>
    columns.map(col => col.reduce((sum, item) => sum + item.height + 16, 0)); // 16 = gap

  if (imageHeights.length === 0) {
    return <div className="w-full h-64 flex items-center justify-center">Chargement...</div>;
  }

  // Responsive: 2 colonnes mobile, 3 tablette, 4 desktop
  const { columns: mobileColumns, colHeights: mobileColHeights } = distributeImages(2);
  const { columns: tabletColumns, colHeights: tabletColHeights } = distributeImages(3);
  const { columns: desktopColumns, colHeights: desktopColHeights } = distributeImages(4);

  const mobileMaxHeight = Math.max(...mobileColHeights);
  const tabletMaxHeight = Math.max(...tabletColHeights);
  const desktopMaxHeight = Math.max(...desktopColHeights);

  // Ajoute des ghost blocks en haut et en bas pour aligner visuellement
  const renderColumn = (
    column: { img: MasonryImage; height: number; index: number }[],
    colHeight: number,
    maxHeight: number
  ) => {
    const topGhost = (maxHeight - colHeight) / 2;
    const bottomGhost = maxHeight - colHeight - topGhost;
    return (
      <div className="flex flex-col gap-4" style={{ position: 'relative' }}>
        {topGhost > 0 && <div style={{ height: `${topGhost}px` }} />}
        {column.map(({ img, height, index }) => (
          <div key={index} className="relative overflow-hidden rounded-xl shadow-md group">
            <img
              src={img.src}
              alt={img.alt || `Image ${index + 1}`}
              className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              style={{ height: `${height}px` }}
              loading="lazy"
            />
          </div>
        ))}
        {bottomGhost > 0 && <div style={{ height: `${bottomGhost}px` }} />}
      </div>
    );
  };

  return (
    <div className="w-full px-4 md:px-25 lg:px-40 xl:px-80">
      {/* Mobile: 2 colonnes */}
      <div className="md:hidden grid grid-cols-2 gap-4">
        {mobileColumns.map((column, idx) => (
          <div key={`mobile-${idx}`}>{renderColumn(column, mobileColHeights[idx], mobileMaxHeight)}</div>
        ))}
      </div>
      {/* Tablet: 3 colonnes */}
      <div className="hidden md:grid lg:hidden grid-cols-3 gap-4">
        {tabletColumns.map((column, idx) => (
          <div key={`tablet-${idx}`}>{renderColumn(column, tabletColHeights[idx], tabletMaxHeight)}</div>
        ))}
      </div>
      {/* Desktop: 4 colonnes */}
      <div className="hidden lg:grid grid-cols-4 gap-4">
        {desktopColumns.map((column, idx) => (
          <div key={`desktop-${idx}`}>{renderColumn(column, desktopColHeights[idx], desktopMaxHeight)}</div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;