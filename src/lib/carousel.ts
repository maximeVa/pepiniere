/**
 * API Carousel - Récupération et mapping des images du carousel depuis Strapi
 */
import { STRAPI_CONFIG } from './config';
import type { HomepageCarouselItem, StrapiResponse } from '../types/strapi';

export interface CarouselImage {
  src: string;
  alt: string;
}

/**
 * Récupère les images du carousel depuis Strapi, triées par ordre croissant
 * @returns Tableau d'objets CarouselImage prêts à l'emploi
 */
export async function fetchCarouselImages(): Promise<CarouselImage[]> {
  const apiUrl = `${STRAPI_CONFIG.URL}/api/homepage-images?populate=image&sort=order:asc`;
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      cache: 'no-store',
      signal: AbortSignal.timeout(10000),
      next: { revalidate: 0 }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
    }
    const data: StrapiResponse<HomepageCarouselItem> = await response.json();
    if (!Array.isArray(data.data)) return [];
    // Tri sécurisé (au cas où l'API ne le ferait pas)
    const sorted = [...data.data].sort((a, b) => {
      if (typeof a.order !== 'number') return 1;
      if (typeof b.order !== 'number') return -1;
      return a.order - b.order;
    });
    // Mapping robuste
    return sorted
      .filter(item => item.image && item.image.url)
      .map(item => ({
        src: item.image.url.startsWith('http') ? item.image.url : `${STRAPI_CONFIG.URL}${item.image.url}`,
        alt: item.alt || item.image.alternativeText || item.title || 'Image du carousel',
      }));
  } catch (error) {
    console.error('[Carousel] Erreur lors de la récupération des images :', error);
    return [];
  }
} 