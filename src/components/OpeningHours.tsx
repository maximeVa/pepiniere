"use client"

import { useEffect, useState } from 'react'
import { fetchOpeningHours, formatOpeningHours } from '@/lib/opening-hours'

export default function OpeningHours() {
  const [openingHours, setOpeningHours] = useState<string[]>(['Lun : Fermé', 'Mar : Fermé', 'Mer–Sam : 9h–18h', 'Dim : 9h–13h']);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHours = async () => {
      try {
        setIsLoading(true);
        const hours = await fetchOpeningHours();
        const formatted = formatOpeningHours(hours);
        setOpeningHours(formatted);
      } catch (error) {
        console.error('Erreur lors du chargement des horaires:', error);
        // Garder les horaires par défaut en cas d'erreur
      } finally {
        setIsLoading(false);
      }
    };
    fetchHours();
  }, []);

  return (
    <div className="text-sm leading-relaxed text-center">
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-1"></div>
          <div className="h-4 bg-gray-200 rounded mb-1"></div>
          <div className="h-4 bg-gray-200 rounded mb-1"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      ) : (
        openingHours.map((hour, index) => (
          <div key={index}>{hour}</div>
        ))
      )}
    </div>
  );
} 