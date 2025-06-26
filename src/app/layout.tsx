import './globals.css';
import { Roboto, Playfair_Display } from 'next/font/google'
import type { Metadata } from 'next'
import Header from '@/components/Header'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: 'Pépinière Saint-Michel',
    template: '%s | Pépinière Saint-Michel'
  },
  description: 'Pépinière familiale spécialisée dans les conseils personnalisés pour vos projets de jardin. Passion, nature et expertise à votre service.',
  keywords: ['pépinière', 'jardin', 'plantes', 'conseil', 'Saint-Michel', 'jardinage'],
  authors: [{ name: 'Pépinière Saint-Michel' }],
  openGraph: {
    title: 'Pépinière Saint-Michel',
    description: 'Votre partenaire pour un jardin plein de vie',
    type: 'website',
    locale: 'fr_FR',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${roboto.variable} ${playfair.variable}`}>
      <body className={`${roboto.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

export { playfair }