import Image from "next/image";
import { Button } from "./ui/button";
import clsx from "clsx";
import { playfair } from '../app/fonts';
import React from "react";

interface CtaBannerButton {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

interface CtaBannerProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  buttons: CtaBannerButton[];
  className?: string;
}

export default function CtaBanner({
  imageUrl,
  title,
  subtitle,
  buttons,
  className,
}: CtaBannerProps) {
  return (
    <section
      className={clsx(
        "relative isolate overflow-hidden",
        "my-4 sm:my-6 md:my-8",
        "rounded-none",
        "min-h-[280px] sm:min-h-[320px] md:min-h-[340px] lg:min-h-[360px]",
        className
      )}
    >
      {/* Background image fills the component */}
      <Image
        src={imageUrl}
        alt="Background CTA"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
        priority
        className="absolute inset-0 -z-20 object-cover"
      />
      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 sm:p-10 md:p-14 lg:p-20 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        {/* Text content */}
        <div className="w-full max-w-3xl flex flex-col items-center text-center">
          <h2 className={`text-2xl text-white/90 sm:text-xl md:text-4xl lg:text-4xl font-extrabold leading-tight mb-6 drop-shadow-xl ${playfair.className} animate-in fade-in duration-1000 slide-in-from-bottom-4`}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg sm:text-lg md:text-2xl font-light text-white/90 mb-8 max-w-2xl animate-in fade-in duration-1000 slide-in-from-bottom-6 delay-300 drop-shadow-lg">
              {subtitle}
            </p>
          )}
          {/* CTA buttons, centered below text */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full mt-2 animate-in fade-in duration-1000 slide-in-from-bottom-8 delay-600">
            {buttons.map((btn, idx) =>
              btn.href ? (
                <a
                  key={idx}
                  href={btn.href}
                  target={btn.href.startsWith('http') ? '_blank' : undefined}
                  rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="cta"
                  >
                    {btn.icon}
                    {btn.label}
                  </Button>
                </a>
              ) : (
                <Button
                  key={idx}
                  size="lg"
                  variant="cta"
                  onClick={btn.onClick}
                >
                  {btn.icon}
                  {btn.label}
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 