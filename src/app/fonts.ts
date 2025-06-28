import { Playfair_Display } from 'next/font/google';

export const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
}); 