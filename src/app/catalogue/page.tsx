import PlantCatalog from '@/components/PlantCatalog';
import { plantFamilies } from '@/data/plant-catalog';
import Image from 'next/image';
import { playfair } from '../layout';

export default function CataloguePage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Section Hero Catalogue */}
      <section className="relative w-full h-[320px] md:h-[420px] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        <Image
          src="/carousel/heruSectionBackground.jpg"
          alt="Catalogue de la pépinière Saint-Michel"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="relative z-10 text-center w-full">
          <h1 className={`text-white text-3xl md:text-5xl font-bold drop-shadow-lg ${playfair.className}`}>Catalogue</h1>
          <p className="text-white text-lg mt-2 opacity-80 max-w-xl mx-auto">
            Découvrez toutes nos familles de plantes et d'arbres sélectionnées avec passion.
          </p>
        </div>
      </section>
      {/* Intro catalogue */}
      <div className="w-full flex justify-center mt-10 mb-8 px-4">
        <h2 className={`text-green-900 text-2xl md:text-3xl font-semibold text-center max-w-2xl mx-auto leading-snug ${playfair.className}`}
            style={{letterSpacing: '-0.01em'}}>
          Avec plus de 7000 espèces, notre pépinière est un véritable écrin de biodiversité.<br className="hidden md:block" /> En voici un aperçu.
        </h2>
      </div>
      <PlantCatalog families={plantFamilies} />
    </main>
  );
} 