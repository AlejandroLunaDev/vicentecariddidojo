import React from 'react';
import Image from 'next/image';
import { Sofia_Sans, Oswald } from 'next/font/google';

const sofia = Sofia_Sans({ subsets: ['latin'], weight: ['600', '700'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '500'] });

interface InstructorCardProps {
  name: string;
  rank: string;
  image: string;
  index: number;
}

export function InstructorCard({
  name,
  rank,
  image,
  index
}: InstructorCardProps) {
  return (
    <div
      className='relative w-full overflow-hidden rounded-xl'
      style={{
        boxShadow: '7px 7px 0px 0px #0c3b81',
        border: '2px solid #0c3b81'
      }}
    >
      {/* Imagen del instructor con relación de aspecto cuadrada */}
      <div className='relative aspect-square w-full bg-white'>
        <Image
          src={image}
          alt={name}
          width={320}
          height={350}
          className='object-cover object-center'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw'
          priority={index < 2}
        />
      </div>

      {/* Nombre con fondo azul */}
      <div className='px-16 mt-2'>

      <div className='bg-[#0c3b81] rounded-xl text-center py-1.5 px-2'>
        <h3
          className={`${sofia.className} text-white font-bold text-lg leading-tight`}
        >
          {name}
        </h3>
      </div>
      </div>

      {/* Rango con texto azul sobre fondo blanco */}
      <div className='bg-white text-center py-1 px-2'>
        <p className={`${oswald.className} text-[#0c3b81] text-sm font-medium`}>
          {rank}
        </p>
      </div>
    </div>
  );
}
