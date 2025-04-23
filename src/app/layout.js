import { Geist, Geist_Mono } from 'next/font/google';
import { Oswald } from 'next/font/google';
import './globals.css';
import Navbar from '@/shared/layout/navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata = {
  title: 'Escuela Cariddi de Karate-Do y Kobu-Do',
  description:
    'Escuela Cariddi de Karate-Do y Kobu-Do - Okinawa Shorin-Ryu Shidokan'
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased`}
      >
        <main>{children}</main>
        <Navbar />
      </body>
    </html>
  );
}
