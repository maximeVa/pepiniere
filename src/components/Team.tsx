'use client'

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useInView } from "@/lib/useInView";

const team = [
  {
    name: "Benoît Bourguignon",
    role: "Gérant",
        image: "/team/profil1.avif",
  },
  {
    name: "Marie-Anne Swanet",
    role: "Gérante - paysagiste",
      image: "/team/profil2.avif",
  },
  {
    name: "Denis Roisin",
    role: "Pépiniériste",
      image: "/team/profil3.avif",
  },
  {
    name: "Yvan Bega",
    role: "Pépiniériste",
      image: "/team/profil4.avif",
  },
];

export default function Team() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <section
      ref={ref}
      className={`w-full py-16 bg-white flex flex-col items-center transition-all duration-700
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2 text-green-700">Notre Équipe</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-700 rounded-full mb-4"></div>
      <p className="text-lg md:text-xl text-center text-gray-700 max-w-2xl mb-2 font-medium">
        Rencontrez notre équipe passionnée
      </p>
      <p className="text-base text-center text-gray-500 max-w-2xl mb-10">
        Chez <span className="font-semibold text-green-700">Pépinière Saint-Michel</span>, chaque membre partage la même passion : vous accompagner dans la création d'un jardin qui vous ressemble.<br />
        Profitez de nos conseils personnalisés, de notre expertise et de notre amour des plantes pour faire fleurir tous vos projets.
      </p>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl px-2 sm:px-4 md:px-6">
          {team.map((member, idx) => (
            <Card
              key={member.name}
              className="flex flex-col items-center p-8 bg-white/90 border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="w-44 h-44 mb-4 rounded-full overflow-hidden border-4 border-gray-200 transition-transform duration-300 hover:scale-105 will-change-transform shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={176}
                  height={176}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-16 border-b border-gray-200 mb-4" />
              <CardContent className="flex flex-col items-center p-0">
                <span className="text-xl font-bold text-gray-800 text-center leading-tight">
                  {member.name}
                </span>
                <span className="text-sm text-gray-500 mt-2 text-center">
                  {member.role}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 