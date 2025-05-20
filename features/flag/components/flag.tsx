'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sofia_Sans } from 'next/font/google';
import flagDataJson from '@/content/flag-data.json';
import { Button } from '@/components/ui/button';

const sofia = Sofia_Sans({ subsets: ['latin'] });

// Define an interface for the view data structure
interface ViewContent {
  id: string;
  title: string;
  content: string[];
  image: string;
  imageAlt: string;
  imageBackground: string;
  imageBackgroundAlt: string;
  buttonText: string;
}

// Type assertion for the imported JSON
const flagData = flagDataJson as { views: ViewContent[] };

export default function Flag() {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const currentView = flagData.views[currentViewIndex];

  const handleToggleView = () => {
    setCurrentViewIndex(prevIndex => (prevIndex === 0 ? 1 : 0));
  };

  return (
    <section
      className='relative w-full min-h-screen flex items-center justify-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url(${currentView.imageBackground})`
      }}
    >
      <div className='container mx-auto px-4 sm:px-8 lg:px-16 xl:px-32 py-10 relative'>
        <div className='bg-[#ff9e3e] rounded-[2rem] p-8 relative'>
          {/* Card negra superpuesta - solo visible en desktop */}
          <div className='hidden md:flex absolute flex-col gap-2 -left-7 top-8 bg-[#260808] rounded-2xl px-[18px] pt-[50px] pb-[20px] w-[45%] md:w-[40%] lg:w-[45%] min-h-[200px] h-auto aspect-[0.9/1]'>
            <div className='relative h-full flex-grow'>
              <Image
                src={currentView.image}
                alt={currentView.imageAlt}
                fill
                className='object-cover rounded-xl'
                priority
              />
            </div>
            <div className='flex justify-center mt-4'>
              <Button
                className='bg-[#ff9e3e] text-black px-10 py-2 text-sm rounded-md hover:bg-black hover:text-white transition-all'
                type='button'
                onClick={handleToggleView}
              >
                {currentView.buttonText}
              </Button>
            </div>
          </div>

          {/* Versión móvil de la bandera - solo visible en móvil */}
          <div className='md:hidden mb-6'>
            <div className='bg-[#260808] rounded-2xl p-4 max-w-[280px] mx-auto'>
              <div className='relative aspect-square w-full'>
                <Image
                  src={currentView.image}
                  alt={currentView.imageAlt}
                  fill
                  className='object-cover rounded-xl'
                  priority
                />
              </div>
              <div className='flex justify-center mt-4'>
                <Button
                  className='bg-[#ff9e3e] text-black px-10 py-2 text-sm rounded-md hover:bg-black hover:text-white transition-all'
                  type='button'
                  onClick={handleToggleView}
                >
                  {currentView.buttonText}
                </Button>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='invisible md:block'>
              {/* Espacio para la card superpuesta en desktop */}
            </div>
            <div className='space-y-4 pt-2 md:mt-0'>
              <h2
                className={`${sofia.className} text-2xl md:text-3xl font-bold text-black`}
              >
                {currentView.title}
              </h2>
              <div className="space-y-2 font-['Arial'] text-xs md:text-sm">
                {currentView.content.map((paragraph, index) => (
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
