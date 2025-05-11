import type React from 'react';
import type { Metadata } from 'next';
import { Oswald, Sofia_Sans_Extra_Condensed, Playball } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald'
});

const sofiaSansExtraCondensed = Sofia_Sans_Extra_Condensed({
  subsets: ['latin'],
  variable: '--font-sofia'
});

const playball = Playball({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-playball'
});

export const metadata: Metadata = {
  title: 'Escuela Cariddi de Karate-Do y Kobu-Do',
  description: 'Okinawa Shorin-Ryu Shidokan',
  generator: 'v0.dev'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body
        className={`${oswald.variable} ${sofiaSansExtraCondensed.variable} ${playball.variable} font-arial`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
