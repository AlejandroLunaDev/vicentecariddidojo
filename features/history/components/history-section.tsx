import Image from 'next/image';
import Link from 'next/link';
import content from '@/public/content/karate-history.json';

export function HistorySection() {
  return (
    <section className='relative bg-white py-16 overflow-hidden'>
      {/* Background karate fighter image */}
      <div className='absolute right-0 top-0 w-full h-full opacity-20 pointer-events-none'>
        <Image
          src='/images/karate-fighter.png'
          alt='Karate fighter silhouette'
          fill
          className='object-contain object-right'
          priority
        />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Título principal */}
        <h1 className='text-4xl font-sofia font-extrabold italic text-center mb-12'>
          "{content.mainTitle}"
        </h1>

        {/* Introducción */}
        <div className='mb-12'>
          <h2 className='font-sofia text-xl mb-4'>
            {content.introduction.title}
          </h2>
          <p className='font-arial text-gray-700 leading-relaxed mb-8'>
            {content.introduction.content}
          </p>
        </div>

        {/* Grid para cita e historia */}
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Columna izquierda: Cita y Karateka */}
          <div>
            {/* Cita */}
            <div className='mb-12 text-center px-24'>
              <blockquote className='font-playball text-2xl text-[#0c3b81] mb-2 leading-relaxed'>
                "{content.quote.text}"
              </blockquote>
              <cite className='font-oswald text-2xl block'>
                {content.quote.author}
              </cite>
            </div>
            {/* Imagen del karateka */}
            <div className='relative h-[400px] mt-8'>
              <Image
                src='/images/history.png'
                alt='Karate history illustration'
                fill
                className='object-contain object-left'
              />
            </div>
          </div>

          {/* Columna derecha: Título y contenido */}
          <div>
            {/* Título con fondo */}
            <div className='relative mb-8 flex justify-center'>
              <h2 className='font-sofia font-extrabold italic text-3xl inline-block px-4 py-2 relative z-10'>
                {content.history.title}
              </h2>
            </div>

            {/* Contenido de la historia */}
            <div className='space-y-4'>
              {content.history.content.map((paragraph, index) => (
                <p
                  key={index}
                  className='font-arial text-gray-700 leading-relaxed'
                >
                  {paragraph}
                </p>
              ))}
            </div>
              <div className='flex justify-end'>

            {/* Botón Leer más */}
            <Link
              href={content.cta.link}
              className='inline-block mt-8 px-12 py-3 bg-[#0c3b81] text-white font-sofia hover:bg-[#092a5c] transition-colors duration-200'
            >
              {content.cta.text}
            </Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
