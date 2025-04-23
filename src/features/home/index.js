import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      {/* Imagen de fondo */}
      <div className='absolute inset-0 z-0'>
        <Image src='/img/landing/templo.png' alt='Templo Shuri' fill priority />
        <div className='absolute inset-0 bg-black/30'></div>
      </div>

      {/* Emblemas en las esquinas */}
      <div className='absolute top-20 left-8 w-24 h-24 md:w-28 md:h-28 z-10'>
        <Image
          src='/img/landing/Ellipse1.png'
          alt='Emblema Izquierdo'
          width={112}
          height={112}
        />
      </div>
      <div className='absolute top-20 right-8 w-24 h-24 md:w-28 md:h-28 z-10'>
        <Image
          src='/img/landing/Ellipse2.png'
          alt='Emblema Derecho'
          width={112}
          height={112}
        />
      </div>

      {/* Títulos centrados en la parte superior */}
      <div className='absolute top-4 left-1/2 transform -translate-x-1/2 z-10 text-center w-full max-w-6xl px-4'>
        <h1 className='font-oswald text-[22px] sm:text-[32px] md:text-[48px] font-bold uppercase mb-2 text-white leading-tight'>
          ESCUELA CARIDDI DE KARATE-DO Y KOBU-DO
        </h1>
        <h2 className='font-oswald text-[28px] sm:text-[36px] md:text-[48px] uppercase text-white leading-tight'>
          OKINAWA SHORIN-RYU SHIDOKAN
        </h2>
      </div>

      {/* Información del Sensei */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center flex-col gap-2'>
        <h3 className='font-oswald text-2xl md:text-4xl uppercase font-bold text-white'>
          SENSEI VICENTE CARIDDI
        </h3>
        <p className='font-oswald text-xl md:text-3xl text-white'>10° DAN</p>
        <p className='font-oswald text-xl md:text-3xl text-white'>DIRECTOR</p>
      </div>

      {/* Imagen del Sensei posicionada pegada al navbar */}
      <div className='absolute right-2 sm:right-8 bottom-[96px] w-48 h-64 sm:w-56 sm:h-80 md:w-72 md:h-96 z-10'>
        <Image
          src='/img/landing/cariddi1.png'
          alt='Sensei Vicente Cariddi'
          width={300}
          height={400}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default Home;
