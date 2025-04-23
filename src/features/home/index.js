import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';

const Home = () => {
  // Número de WhatsApp con formato internacional
  const phoneNumber = '+549XXXXXXXXX'; // Reemplazar con el número real
  const whatsappUrl = `https://wa.me/${+5493515053743}?text=Hola%20Sensei%20Vicente%20Cariddi,%20me%20gustaría%20tener%20más%20información%20sobre%20la%20escuela.`;

  // Schema.org structured data para SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Escuela Cariddi de Karate-Do y Kobu-Do',
    alternateName: 'Okinawa Shorin-Ryu Shidokan',
    description:
      'Escuela de artes marciales tradicionales de Okinawa, liderada por el Sensei Vicente Cariddi',
    url: 'https://escuelacariddi.com',
    logo: 'https://escuelacariddi.com/img/landing/Ellipse1.png',
    founder: {
      '@type': 'Person',
      name: 'Vicente Cariddi',
      jobTitle: 'Sensei, 10° DAN',
      image: 'https://escuelacariddi.com/img/vicente.jpg'
    },
    sameAs: [
      'https://www.facebook.com/escuelacariddi',
      'https://www.instagram.com/escuelacariddi'
    ]
  };

  return (
    <>
      <Script
        id='schema-organization'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className='relative h-screen w-full overflow-hidden'>
        {/* Imagen de fondo */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/img/landing/templo.png'
            alt='Templo Shuri - Símbolo histórico del Karate de Okinawa'
            fill
            priority
            className='lg:object-fill object-cover'
          />
          <div className='absolute inset-0 bg-black/30'></div>
        </div>

        {/* Emblemas en las esquinas */}
        <div className='absolute top-20 left-8 w-24 h-24 md:w-28 md:h-28 z-10'>
          <Image
            src='/img/landing/Ellipse1.png'
            alt='Emblema de la Escuela Cariddi'
            width={112}
            height={112}
          />
        </div>
        <div className='absolute top-20 right-8 w-24 h-24 md:w-28 md:h-28 z-10'>
          <Image
            src='/img/landing/Ellipse2.png'
            alt='Emblema de la Tradición Shorin-Ryu Shidokan'
            width={500}
            height={500}
            className='object-cover w-[112px] h-[112px]'
          />
        </div>

        {/* Títulos centrados en la parte superior */}
        <div className='absolute top-58 lg:top-4 left-1/2 transform -translate-x-1/2 z-10 text-center w-full max-w-6xl px-4'>
          <h1 className='font-oswald text-[42px] sm:text-[32px] md:text-[48px] font-bold uppercase mb-2 text-white leading-tight'>
            ESCUELA CARIDDI DE KARATE-DO Y KOBU-DO
          </h1>
          <h2 className='font-oswald text-[28px] sm:text-[36px] md:text-[48px] uppercase text-white leading-tight'>
            OKINAWA SHORIN-RYU SHIDOKAN
          </h2>
        </div>

        {/* Información del Sensei */}
        <div className='absolute top-[60%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center text-center justify-center flex-col gap-2'>
          <h3 className='font-oswald text-2xl md:text-4xl uppercase font-bold text-white'>
            SENSEI VICENTE CARIDDI
          </h3>
          <p className='font-oswald text-xl md:text-3xl text-white'>10° DAN</p>
          <p className='font-oswald text-xl md:text-3xl text-white'>DIRECTOR</p>

          {/* Botón de WhatsApp */}
          <Link
            href={whatsappUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-4 bg-[#1A0806] hover:bg-[#2A1816] text-[#ff9e3e] font-oswald text-lg md:text-xl uppercase font-bold py-2 px-6 rounded-md shadow-lg border-2 border-[#ff9e3e]/30 transition-all duration-300 flex items-center'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 mr-2'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
            </svg>
            CONTACTAR POR WHATSAPP
          </Link>
        </div>

        {/* Imagen del Sensei posicionada pegada al navbar */}
        <div className='absolute right-2 sm:right-8 bottom-[96px] w-48 h-64 sm:w-56 sm:h-80 md:w-72 md:h-96 z-10'>
          <Image
            src='/img/landing/cariddi1.png'
            alt='Sensei Vicente Cariddi - Maestro de Karate-Do y Kobu-Do, 10° DAN'
            width={300}
            height={400}
            className='object-contain'
          />
        </div>
      </div>
    </>
  );
};

export default Home;
