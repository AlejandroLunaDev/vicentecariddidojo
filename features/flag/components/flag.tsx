import React from 'react';
import Image from 'next/image';
import { Sofia_Sans } from 'next/font/google';
import flagData from '@/public/content/flag-data.json';
import { Button } from '@/components/ui/button';

const sofia = Sofia_Sans({ subsets: ['latin'] });

export default function Flag() {
  return (
    <section
      style={{
        backgroundImage: `url(${flagData.imageBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      className='relative w-full min-h-screen flex items-center justify-center'
    >
      <div className='container mx-auto px-4 sm:px-8 lg:px-16 xl:px-32 relative'>
        <div className='bg-[#ff9e3e] rounded-[2rem] p-8  relative'>
          {/* Card negra superpuesta */}
          <div
            className='absolute flex flex-col gap-2 -left-7 top-12 bg-[#260808] rounded-2xl px-[18px] pt-[50px] pb-[20px] w-[45%]'
            style={{ height: '527px' }}
          >
            <div className='relative h-full'>
              <Image
                src={flagData.image}
                alt='Bandera de Japón'
                fill
                className='object-cover rounded-xl'
                priority
              />
            </div>
            <div className='flex justify-center'>
              <Button
                className='bg-[#ff9e3e] text-black px-10 py-2 text-sm rounded-md hover:bg-black hover:text-white transition-all'
                type='button'
              >
                {flagData.buttonText}
              </Button>
            </div>
          </div>

          {/* Contenido */}
          <div className='grid grid-cols-2 gap-8'>
            <div className='invisible'>
              {/* Espacio para la card superpuesta */}
            </div>
            <div className='space-y-4 pt-2'>
              <h2
                className={`${sofia.className} text-3xl font-bold text-black`}
              >
                {flagData.title}
              </h2>
              <div className="space-y-2 font-['Arial'] text-sm">
                {flagData.content.map((paragraph, index) => (
                  <p key={index} className='text-black/90 leading-snug'>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
