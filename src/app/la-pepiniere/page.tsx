import Image from 'next/image';
import Team from '@/components/Team';
import { playfair } from '../layout';
import Footer from '@/components/Footer';
import MasonryGrid from '@/components/MasonryGrid';

export default function LaPepiniere() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Section Hero */}
      <section className="relative w-full h-[320px] md:h-[420px] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        <Image
          src="/carousel/heruSectionBackground.jpg"
          alt="La pépinière Saint-Michel"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="relative z-10 text-center w-full">
          <h1 className={`text-white text-3xl md:text-5xl font-bold drop-shadow-lg ${playfair.className}`}>La pépinière</h1>
          <p className="text-white text-lg mt-2 opacity-80 max-w-xl mx-auto">
            Une histoire de passion et de nature depuis 2009
          </p>
        </div>
      </section>

      {/* Bloc alterné 1 : histoire */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className={`text-2xl md:text-3xl font-semibold text-green-800 mb-4 ${playfair.className}`}>Petite histoire de la pépinière</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              La <span className="text-green-700 font-semibold">pépinière Saint-Michel</span> est créée en <span className="font-semibold">2009</span> par <span className="font-semibold">Benoît Bourguignon</span>, fraichement diplômé de l'école d'horticulture de Gembloux, à l'emplacement d'une ancienne exploitation agricole laissée à l'abandon.<br /><br />
              Sur place, il y a un petit hangar, un bâtiment (l'actuel magasin) et un terrain en friche. D'importants travaux sont entrepris pour réhabiliter le site avec l'implantation d'une serre de 500 m², d'un parking, d'allées en gravier, de jauges pour les plantes, de canalisations pour l'arrosage, ...<br /><br />
              Les premières années, la pépinière n'est ouverte que les week-ends mais petit à petit Benoît élargit les horaires et quand sa femme, <span className="font-semibold">Marie-Anne</span>, le rejoint dans l'aventure en <span className="font-semibold">2014</span>, ils décident d'en faire leur activité principale.
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <Image src="/masonry/1.avif" alt="Premiers travaux en 2009" width={400} height={240} className="rounded-2xl shadow-xl object-cover w-72 h-48 md:w-96 md:h-60" />
          </div>
        </div>
      </section>

      {/* Bloc alterné 2 : aujourd'hui */}
      <section className="w-full py-16 bg-green-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src="/masonry/2.avif" alt="Vue d'ensemble de la pépinière" width={400} height={240} className="rounded-2xl shadow-xl object-cover w-72 h-48 md:w-96 md:h-60" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className={`text-2xl md:text-3xl font-semibold text-green-800 mb-4 ${playfair.className}`}>La pépinière aujourd'hui</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Aujourd'hui, la pépinière compte <span className="font-semibold">4 personnes à plein temps</span> et s'étend sur plus de <span className="text-green-700 font-semibold">2 ha de terrain</span>.<br /><br />
              Elle offre une impressionnante collection de plantes qui ne cesse de s'étoffer au fil des ans. Vous y retrouverez plus de <span className="text-green-700 font-semibold">200 variétés d'hortensias</span>, la collection de rosiers anglais David Austin et les rosiers Delbard, les fruitiers anciens labellisés Certifruit, des arbres palissés, des bambous, des arbustes à fleurs et arbres indigènes et nous suivons bien entendu les saisons avec les plantes vivaces, les annuelles, les chrysanthèmes et les sapins de Noël.<br /><br />
              L'une de nos spécialités sont les <span className="font-semibold">arbres d'ornement d'exception</span> tels que les acers, les oliviers centenaires, les palmiers, les bonsaïs et les cornus que vous trouverez dans toutes les tailles.
            </p>
            <blockquote className="italic text-green-800 border-l-4 border-green-400 pl-4 my-6 text-lg">
              "Notre passion : vous accompagner dans la création d'un jardin vivant, durable et unique."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Section équipe avant la galerie */}
      <section className="w-full py-16 bg-white">
        <Team />
      </section>

      {/* Galerie masonry en bas */}
      <section className="w-full py-16 bg-green-50">
        <h2 className={`text-2xl md:text-3xl font-semibold text-center text-green-900 mb-8 ${playfair.className}`}>La pépinière en quelques photos ...</h2>
        <div className="py-12 md:py-20">
          <MasonryGrid
            images={[
              { src: "/masonry/1.avif" },
              { src: "/masonry/2.avif" },
              { src: "/masonry/3.avif" },
              { src: "/masonry/4.avif" },
              { src: "/masonry/5.avif" },
              { src: "/masonry/6.avif" },
              { src: "/masonry/7.jpg" },
              { src: "/masonry/8.jpg" },
              { src: "/masonry/9.jpg" },
              { src: "/masonry/10.jpg" },
              { src: "/masonry/4.avif" },
              { src: "/masonry/6.avif" },
            ]}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
} 