'use client'

import React from "react";
import { playfair } from '../app/fonts';

const masonryImages = [
  "/masonry/1.avif",
  "/masonry/2.avif",
  "/masonry/3.avif",
  "/masonry/4.avif",
  "/masonry/5.avif",
  "/masonry/6.avif",
  "/masonry/7.jpg",
  "/masonry/8.jpg",
  "/masonry/9.jpg",
  "/masonry/10.jpg",
];

const ImageGallery: React.FC = () => (
  <>
    <section className="px-4 md:px-6 py-8 md:py-16 mx-auto max-w-7xl">
      <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center mb-16">
        <h2 className={`mb-4 text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 text-center ${playfair.className}`}>
          Nos plantes d'exception
        </h2>
        <p className="mb-6 text-lg md:text-xl text-green-900 text-center max-w-2xl mx-auto leading-relaxed">
          <span className="font-semibold">L'une de nos spécialités</span> : les <span className="font-semibold">arbres d'ornement d'exception</span>.<br />
          Découvrez notre sélection unique d'<span className="font-semibold">acers</span>, <span className="font-semibold">oliviers</span>, <span className="font-semibold">palmiers</span> et <span className="font-semibold">cornus</span>, disponibles dans <span className="font-semibold">toutes les tailles</span> pour sublimer votre jardin.
        </p>
        <div className="flex flex-col items-center gap-4">
          <span className="text-base md:text-lg text-gray-700 text-center">Pour découvrir toutes nos familles de plantes et d'arbres, consultez notre catalogue complet !</span>
          <a
            href="/catalogue"
            className="inline-block px-6 py-3 rounded-lg bg-green-700 text-white font-semibold shadow-md hover:bg-green-800 transition-colors duration-200 text-base md:text-lg"
          >
            Voir le catalogue
          </a>
        </div>
      </div>
      <div className="w-full h-full select-none px-2 md:px-4">
        <div className="max-w-6xl mx-auto duration-1000 delay-300 opacity-0 select-none ease animate-fade-in-view" style={{opacity: 1}}>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {masonryImages.map((src, idx) => (
              <li key={src}>
                <img
                  src={src}
                  className="object-cover select-none w-full h-auto bg-gray-200 rounded aspect-square border border-gray-200 transition-transform duration-700 ease-in-out hover:scale-98 cursor-pointer"
                  alt={`photo gallery image ${idx + 1}`}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </>
);

export default ImageGallery; 