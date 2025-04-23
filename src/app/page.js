import HomeFeature from '@/features/home';

export const metadata = {
  title: 'Inicio | Escuela Cariddi de Karate-Do y Kobu-Do',
  description:
    'Bienvenido a la Escuela Cariddi de Karate-Do y Kobu-Do, tradición Okinawa Shorin-Ryu Shidokan dirigida por el Sensei Vicente Cariddi, 10° DAN.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Inicio | Escuela Cariddi de Karate-Do y Kobu-Do',
    description:
      'Bienvenido a la Escuela Cariddi de Karate-Do y Kobu-Do, tradición Okinawa Shorin-Ryu Shidokan dirigida por el Sensei Vicente Cariddi, 10° DAN.'
  }
};

export default function Home() {
  return <HomeFeature />;
}
