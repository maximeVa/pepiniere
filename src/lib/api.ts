import { STRAPI_CONFIG } from './config';

const STRAPI_URL = STRAPI_CONFIG.URL;

/**
 * Interface pour les images du carousel
 */
export interface CarouselImage {
  id: number;
  attributes: {
    image: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
    alt?: string;
    order: number;
  };
}

/**
 * Interface pour la réponse de l'API des images du carousel
 */
export interface CarouselImagesResponse {
  data: CarouselImage[];
}

/**
 * Récupère les images du carousel depuis l'API Strapi
 * @returns Promise<CarouselImage[]> - Les images du carousel triées par ordre
 */
export async function getCarouselImages(): Promise<any[]> {
  try {
    const apiUrl = `${STRAPI_URL}/api/homepage-images?populate=image&sort=order:asc`;
    console.log('🔍 Tentative de connexion à Strapi:', apiUrl);
    
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

    const data = await response.json();
    console.log('✅ Images récupérées depuis Strapi:', data.data?.length || 0, 'images');
    if (data.data && Array.isArray(data.data)) {
      data.data.forEach((item: any, idx: number) => {
        console.log(`Item[${idx}] structure:`, JSON.stringify(item));
      });
      // Tri sécurisé sur order à la racine
      const sortedImages = data.data.sort((a: any, b: any) => {
        const aOrder = a.order;
        const bOrder = b.order;
        if (typeof aOrder !== 'number') return 1;
        if (typeof bOrder !== 'number') return -1;
        return aOrder - bOrder;
      });
      console.log('📊 Images triées par ordre:', sortedImages.map((img: any) => img.order));
      return sortedImages;
    }
    
    console.log('⚠️ Aucune image trouvée dans la réponse Strapi');
    return [];
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des images du carousel:', error);
    if (error instanceof Error) {
      console.error('🔍 Détails de l\'erreur:', {
        message: error.message,
        name: error.name,
        stack: error.stack,
        strapiUrl: STRAPI_URL
      });
    }
    return [];
  }
}

export function formatCarouselImages(images: any[]): Array<{src: string, alt: string}> {
  return images.map((image: any) => ({
    src: image.image?.url ? `${STRAPI_URL}${image.image.url}` : '',
    alt: image.alt || image.image?.alternativeText || 'Image du carousel',
  })).filter((img: {src: string, alt: string}) => !!img.src);
} 