/**
 * API Opening Hours - Récupération et mapping des horaires d'ouverture depuis Strapi
 */
import { STRAPI_CONFIG } from './config';
import type { OpeningHours, StrapiResponse } from '../types/strapi';

/**
 * Récupère les horaires d'ouverture depuis Strapi
 * @returns L'objet OpeningHours ou null si erreur
 */
export async function fetchOpeningHours(): Promise<OpeningHours | null> {
  const apiUrl = `${STRAPI_CONFIG.URL}/api/opening-hours?populate=*`;
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
    const data: StrapiResponse<OpeningHours> = await response.json();
    if (Array.isArray(data.data) && data.data.length > 0) {
      return data.data[0];
    }
    return null;
  } catch (error) {
    console.error('[OpeningHours] Erreur lors de la récupération :', error);
    return null;
  }
}

/**
 * Formate les horaires d'ouverture pour l'affichage avec groupement des jours similaires
 * @param openingHours - Les horaires d'ouverture depuis Strapi
 * @returns string[] - Tableau des horaires formatés pour l'affichage
 */
export function formatOpeningHours(openingHours: any): string[] {
  if (!openingHours) {
    console.warn('[OpeningHours] Donnée reçue inattendue ou vide :', openingHours);
    return [
      "Nous afficherons bientôt les nouveaux horaires adaptés."
    ];
  }
  const days = [
    { key: 'monday', label: 'Lun' },
    { key: 'tuesday', label: 'Mar' },
    { key: 'wednesday', label: 'Mer' },
    { key: 'thursday', label: 'Jeu' },
    { key: 'friday', label: 'Ven' },
    { key: 'saturday', label: 'Sam' },
    { key: 'sunday', label: 'Dim' },
  ];
  const formattedHours: string[] = [];
  let currentGroup: { start: string; end: string; days: string[] } | null = null;
  days.forEach((day) => {
    const dayData = openingHours[day.key];
    if (!dayData) {
      if (currentGroup !== null) {
        const { days: groupDays, start, end } = currentGroup as { days: string[]; start: string; end: string };
        if (groupDays.length === 1) {
          formattedHours.push(`${groupDays[0]} : ${start}–${end}`);
        } else {
          formattedHours.push(`${groupDays[0]}–${groupDays[groupDays.length - 1]} : ${start}–${end}`);
        }
        currentGroup = null;
      }
      formattedHours.push(`${day.label} : Fermé`);
      return;
    }
    if (dayData.isClosed) {
      if (currentGroup !== null) {
        const { days: groupDays, start, end } = currentGroup as { days: string[]; start: string; end: string };
        if (groupDays.length === 1) {
          formattedHours.push(`${groupDays[0]} : ${start}–${end}`);
        } else {
          formattedHours.push(`${groupDays[0]}–${groupDays[groupDays.length - 1]} : ${start}–${end}`);
        }
        currentGroup = null;
      }
      formattedHours.push(`${day.label} : Fermé`);
    } else {
      const startTime = dayData.startTime?.slice(0, 5) || '--:--';
      const endTime = dayData.endTime?.slice(0, 5) || '--:--';
      if (!currentGroup) {
        currentGroup = { start: startTime, end: endTime, days: [day.label] };
      } else if (currentGroup.start === startTime && currentGroup.end === endTime) {
        currentGroup.days.push(day.label);
      } else {
        const { days: groupDays, start, end } = currentGroup as { days: string[]; start: string; end: string };
        if (groupDays.length === 1) {
          formattedHours.push(`${groupDays[0]} : ${start}–${end}`);
        } else {
          formattedHours.push(`${groupDays[0]}–${groupDays[groupDays.length - 1]} : ${start}–${end}`);
        }
        currentGroup = { start: startTime, end: endTime, days: [day.label] };
      }
    }
  });
  if (currentGroup !== null) {
    const { days: groupDays, start, end } = currentGroup as { days: string[]; start: string; end: string };
    if (groupDays.length === 1) {
      formattedHours.push(`${groupDays[0]} : ${start}–${end}`);
    } else {
      formattedHours.push(`${groupDays[0]}–${groupDays[groupDays.length - 1]} : ${start}–${end}`);
    }
  }
  return formattedHours;
} 