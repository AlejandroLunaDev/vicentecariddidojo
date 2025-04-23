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

// Configuración base para metadatos
const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://escuelacariddi.com';

export const metadata = {
  title: 'Escuela Cariddi de Karate-Do y Kobu-Do | Sensei Vicente Cariddi',
  description:
    'Escuela de artes marciales tradicionales de Okinawa, liderada por el Sensei Vicente Cariddi, 10° DAN. Enseñamos Karate-Do y Kobu-Do según la tradición Okinawa Shorin-Ryu Shidokan.',
  keywords: [
    'karate',
    'kobu-do',
    'okinawa',
    'shorin-ryu',
    'shidokan',
    'vicente cariddi',
    'artes marciales',
    'escuela de karate'
  ],
  authors: [{ name: 'Sensei Vicente Cariddi' }],
  creator: 'Escuela Cariddi',
  publisher: 'Escuela Cariddi de Karate-Do y Kobu-Do',
  formatDetection: {
    email: false,
    telephone: false,
    address: false
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'Escuela Cariddi de Karate-Do y Kobu-Do | Sensei Vicente Cariddi',
    description:
      'Escuela de artes marciales tradicionales de Okinawa, liderada por el Sensei Vicente Cariddi, 10° DAN. Enseñamos Karate-Do y Kobu-Do según la tradición Okinawa Shorin-Ryu Shidokan.',
    url: '/',
    siteName: 'Escuela Cariddi de Karate-Do y Kobu-Do',
    images: [
      {
        url: '/img/vicente.jpg',
        width: 800,
        height: 600,
        alt: 'Sensei Vicente Cariddi - 10° DAN'
      }
    ],
    locale: 'es_AR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escuela Cariddi de Karate-Do y Kobu-Do | Sensei Vicente Cariddi',
    description:
      'Escuela de artes marciales tradicionales de Okinawa, liderada por el Sensei Vicente Cariddi, 10° DAN',
    images: ['/img/vicente.jpg']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='canonical' href={baseUrl} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased`}
      >
        <main>{children}</main>
        <Navbar />
      </body>
    </html>
  );
}
