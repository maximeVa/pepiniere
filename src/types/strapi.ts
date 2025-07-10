/**
 * Types génériques pour les réponses Strapi
 */
export interface StrapiResponse<T> {
  data: T[];
  meta?: any;
}

/**
 * Type pour une image Strapi (media)
 */
export interface StrapiImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes?: number;
}

export interface StrapiImage {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats?: {
    large?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    small?: StrapiImageFormat;
    thumbnail?: StrapiImageFormat;
    [key: string]: StrapiImageFormat | undefined;
  };
  url: string;
  previewUrl?: string | null;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
}

/**
 * Type pour un item du carousel homepage-image
 */
export interface HomepageCarouselItem {
  id: number;
  title: string;
  alt?: string;
  order: number;
  image: StrapiImage;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

/**
 * Types pour les horaires d'ouverture
 */
export interface DayHours {
  isClosed: boolean;
  startTime: string;
  endTime: string;
}

export interface OpeningHours {
  id: number;
  attributes: {
    monday: DayHours;
    tuesday: DayHours;
    wednesday: DayHours;
    thursday: DayHours;
    friday: DayHours;
    saturday: DayHours;
    sunday: DayHours;
  };
} 