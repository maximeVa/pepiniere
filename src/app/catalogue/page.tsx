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
      <PlantCatalog families={plantFamilies} />
    </main>
  );
} 