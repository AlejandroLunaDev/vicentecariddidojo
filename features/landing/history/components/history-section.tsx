'use client';

import React from 'react';
import Image from 'next/image';
import content from '@/content/karate-history.json';
import { HistoryModal } from './history-modal';

export function HistorySection() {
  const previewUntil = 'espíritu.';
  const previewIndex = content.history.content.findIndex((p) =>
    p.includes(previewUntil)
  );
  const previewParagraphs = content.history.content.slice(0, previewIndex + 1);

  return (
    <section className='relative bg-white py-16 overflow-hidden'>
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
        <h1 className='text-4xl font-sofia font-extrabold italic text-center mb-12'>
          {content.mainTitle}
        </h1>

        <div className='mb-12'>
          <h2 className='font-sofia text-xl mb-4'>
            {content.introduction.title}
          </h2>
          <p className='font-arial text-gray-700 leading-relaxed mb-8'>
            {content.introduction.content}
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <div className='mb-12 text-center px-4 sm:px-12 md:px-24'>
              <blockquote className='font-playball text-2xl text-[#0c3b81] mb-2 leading-relaxed'>
                &quot;{content.quote.text}&quot;
              </blockquote>
              <cite className='font-oswald text-2xl block'>
                {content.quote.author}
              </cite>
            </div>
            <div className='relative w-full' style={{ height: '400px' }}>
              <Image
                src='/images/history.png'
                alt='Karate history illustration'
                fill
                className='object-contain object-left'
                priority
              />
            </div>
          </div>

          <div>
            <div className='relative mb-8 flex justify-center'>
              <h2 className='font-sofia font-extrabold italic text-3xl inline-block px-4 py-2 relative z-10'>
                {content.history.title}
              </h2>
            </div>

            <div className='space-y-4'>
              {previewParagraphs.map((paragraph, index) => (
                <p key={index} className='font-arial text-gray-700 leading-relaxed'>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className='flex justify-end'>
              <HistoryModal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
