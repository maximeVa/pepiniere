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
      <h2 className="text-4xl font-bold text-center mb-2 text-gray-800">Notre Equipe</h2>
      <p className="text-center max-w-2xl mx-auto text-gray-800 mb-10 text-lg px-4 py-4">
        Notre équipe est à votre service pour transmettre ses conseils sur l'aménagement de vos parterres et de votre jardin. N'hésitez pas à solliciter notre aide pour le choix des végétaux mais également pour toutes les questions relatives à la plantation, l'entretien, la lutte contre les maladies et les ravageurs, ...
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