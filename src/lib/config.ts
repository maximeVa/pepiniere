/**
 * Configuration de l'API Strapi
 */
export const STRAPI_CONFIG = {
  URL: process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337',
  API_TOKEN: process.env.STRAPI_API_TOKEN,
} as const;

// Log de la configuration en développement
if (typeof window === 'undefined' && process.env.NODE_ENV === 'development') {
  console.log('🔧 Configuration Strapi:', {
    URL: STRAPI_CONFIG.URL,
    hasApiToken: !!STRAPI_CONFIG.API_TOKEN,
    nodeEnv: process.env.NODE_ENV
  });
}

/**
 * Configuration générale de l'application
 */
export const APP_CONFIG = {
  SITE_NAME: 'Les Jardins St Michel',
  SITE_DESCRIPTION: 'Votre jardin, notre passion',
  CONTACT: {
    PHONE: '+32 10 65 54 44',
    ADDRESS: '1 Chaussée de Jodoigne, 1315 Glimes',
  },
} as const; 