"use client";

import React, { useMemo, useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { usePathname } from 'next/navigation';

export type PlantFamily = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  type: string;
  slug: string;
};

export type PlantCatalogProps = {
  families: PlantFamily[];
};

const ITEMS_PER_PAGE = 6;

export default function PlantCatalog({ families }: PlantCatalogProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const filtersRef = useRef<HTMLDivElement | null>(null);
  const searchBarRef = useRef<HTMLDivElement | null>(null);
  // Pour ignorer le scroll au premier rendu
  const isFirstRender = useRef(true);
  const pathname = usePathname();

  const CATEGORIES = useMemo(() => Array.from(new Set(families.map((p: PlantFamily) => p.category))), [families]);

  const filteredPlants = useMemo(() => {
    return families.filter((plant: PlantFamily) => {
      const matchSearch = (
        plant.title.toLowerCase().includes(search.toLowerCase()) ||
        plant.description.toLowerCase().includes(search.toLowerCase())
      );
      const matchCategory = category ? plant.category === category : true;
      return matchSearch && matchCategory;
    });
  }, [search, category, families]);

  // Pagination
  const totalPages = Math.ceil(filteredPlants.length / ITEMS_PER_PAGE);
  const paginatedPlants = filteredPlants.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // Reset page on filter/search change
  React.useEffect(() => { setPage(1); }, [search, category]);

  // Scroll to top of catalog on page change
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Utiliser setTimeout pour s'assurer que le DOM est mis à jour
    const scrollToTop = () => {
      if (searchBarRef.current) {
        // Récupère dynamiquement la hauteur du header sticky
        const header = document.querySelector('header');
        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        // On vise le haut de la barre de recherche, avec une marge supplémentaire (24px)
        const y = searchBarRef.current.getBoundingClientRect().top + window.scrollY - headerHeight - 24;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    // Petit délai pour s'assurer que le rendu est terminé
    const timeoutId = setTimeout(scrollToTop, 100);

    return () => clearTimeout(timeoutId);
  }, [page]);

  // Réinitialise le scroll ciblé à chaque navigation
  useEffect(() => {
    isFirstRender.current = true;
  }, [pathname]);

  // Pills style for filters
  const pillBase =
    "inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full font-medium bg-white border border-gray-200 shadow-sm transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700 hover:bg-green-50 hover:text-green-800 hover:shadow-lg hover:-translate-y-1 hover:ring-2 hover:ring-green-200 focus-visible:bg-green-50 focus-visible:text-green-800 focus-visible:shadow-lg focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-green-200 transition-all duration-300 ease-out";
  const pillActive =
    "!bg-green-600 !text-white !border-green-600 shadow-md";

  return (
    <section className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-12" aria-labelledby="catalogue-title">
      {/* Barre de recherche */}
      <div ref={searchBarRef} className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Rechercher par nom..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 text-base"
          aria-label="Rechercher une plante par nom"
        />
      </div>
      {/* Barre de filtres moderne en haut */}
      <div ref={filtersRef} className="mb-10 flex flex-wrap gap-3 justify-center">
        <button
          className={`${pillBase} ${!category ? pillActive : ""} text-sm md:text-base`}
          onClick={() => setCategory(null)}
          aria-pressed={!category}
        >
          Toutes
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`${pillBase} ${category === cat ? pillActive : ""} text-sm md:text-base`}
            onClick={() => setCategory(cat)}
            aria-pressed={category === cat}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Grille éditoriale corrigée pour desktop */}
      <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
        {paginatedPlants.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">
            Aucun résultat pour ces filtres.
          </div>
        ) : (
          paginatedPlants.map((plant: PlantFamily, idx) => (
            <div
              key={plant.id}
              className="w-full max-w-4xl mx-auto bg-white/95 rounded-2xl border border-gray-100 flex flex-col md:flex-row-reverse items-stretch md:items-center gap-0 md:gap-0 shadow-none overflow-hidden"
            >
              {/* Image au-dessus sur mobile, à droite sur desktop */}
              <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 md:bg-transparent p-0 md:p-0">
                <div className="w-full aspect-[4/3] md:aspect-[4/3] h-52 md:h-72 overflow-hidden flex items-center justify-center rounded-none md:rounded-3xl md:shadow-2xl">
                  <img
                    src={plant.image}
                    alt={plant.title}
                    className="w-full h-full object-cover object-center rounded-none md:rounded-3xl border-0"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Texte en dessous sur mobile, à gauche sur desktop */}
              <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8">
                <h3 className="text-xl md:text-3xl font-bold text-green-900 mb-2 md:mb-3 leading-tight">
                  {plant.title}
                </h3>
                <ReactMarkdown
                  components={{
                    ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-2" {...props} />,
                    ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-2" {...props} />,
                    li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                    strong: ({ node, ...props }) => <strong className="text-green-800 font-semibold" {...props} />,
                    em: ({ node, ...props }) => <em className="text-green-700" {...props} />,
                    p: ({ node, ...props }) => <p className="mb-2 text-sm md:text-base text-gray-800 leading-relaxed" {...props} />,
                  }}
                >
                  {plant.description}
                </ReactMarkdown>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Pagination optimisée et corrigée */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10">
          {/* Flèche précédente */}
          <button
            onClick={() => {
              const newPage = Math.max(1, page - 1);
              setPage(newPage);
              // Force le scroll
              setTimeout(() => {
                if (searchBarRef.current) {
                  const header = document.querySelector('header');
                  const headerHeight = header ? header.getBoundingClientRect().height : 0;
                  const y = searchBarRef.current.getBoundingClientRect().top + window.scrollY - headerHeight - 24;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }, 50);
            }}
            disabled={page === 1}
            aria-label="Page précédente"
            className="rounded-full w-10 h-10 flex items-center justify-center bg-white border border-gray-200 shadow-md text-green-800 transition-all duration-300 ease-out cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:bg-green-50 hover:shadow-lg hover:-translate-y-1 hover:ring-2 hover:ring-green-200 focus-visible:ring-2 focus-visible:ring-green-200 focus-visible:outline-none"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Numéros de page avec gestion intelligente */}
          {(() => {
            const pageNumbers = [];
            const showEllipsis = totalPages > 7;

            if (!showEllipsis) {
              // Afficher toutes les pages si moins de 8 pages
              for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
              }
            } else {
              // Logique pour les ellipses
              if (page <= 3) {
                // Début: 1, 2, 3, 4, ..., dernière
                pageNumbers.push(1, 2, 3, 4, '...', totalPages);
              } else if (page >= totalPages - 2) {
                // Fin: 1, ..., avant-avant-dernière, avant-dernière, dernière
                pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
              } else {
                // Milieu: 1, ..., page-1, page, page+1, ..., dernière
                pageNumbers.push(1, '...', page - 1, page, page + 1, '...', totalPages);
              }
            }

            return pageNumbers.map((pageNum, index) => {
              if (pageNum === '...') {
                return (
                  <span key={`ellipsis-${index}`} className="px-2 py-1 text-gray-500">
                    ...
                  </span>
                );
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum as number)}
                  aria-current={page === pageNum ? "page" : undefined}
                  className={`rounded-full w-10 h-10 flex items-center justify-center font-bold border transition-all duration-300 ease-out cursor-pointer focus:outline-none ${page === pageNum
                      ? 'bg-green-600 text-white border-green-600 shadow-xl transform scale-110'
                      : 'bg-white text-green-800 border-gray-200 shadow-md hover:bg-green-50 hover:shadow-lg hover:-translate-y-1 hover:ring-2 hover:ring-green-200 focus-visible:bg-green-50 focus-visible:text-green-800 focus-visible:shadow-lg focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-green-200'
                    }`}
                >
                  {pageNum}
                </button>
              );
            });
          })()}

          {/* Flèche suivante */}
          <button
            onClick={() => {
              const newPage = Math.min(totalPages, page + 1);
              setPage(newPage);
              // Force le scroll
              setTimeout(() => {
                if (searchBarRef.current) {
                  const header = document.querySelector('header');
                  const headerHeight = header ? header.getBoundingClientRect().height : 0;
                  const y = searchBarRef.current.getBoundingClientRect().top + window.scrollY - headerHeight - 24;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }, 50);
            }}
            disabled={page === totalPages}
            aria-label="Page suivante"
            className="rounded-full w-10 h-10 flex items-center justify-center bg-white border border-gray-200 shadow-md text-green-800 transition-all duration-300 ease-out cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:bg-green-50 hover:shadow-lg hover:-translate-y-1 hover:ring-2 hover:ring-green-200 focus-visible:ring-2 focus-visible:ring-green-200 focus-visible:outline-none"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>  
  );
}