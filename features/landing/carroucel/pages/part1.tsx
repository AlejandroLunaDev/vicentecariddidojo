'use client';

import Image from 'next/image';
import data from '@/content/carroucel-data.json';
import { Navbar } from '../../navigation/components/navbar';
type Card = {
    title: string;
    content: string;
  };
  
  type PageContent = {
    id: string;
    cards: Card[];
  };
  
  type Props = {
    data: {
      content: PageContent;
    };
  };

export default function InfoCardsPage({ data}: Props) {
  // Use the first page data which contains the three cards we need
  const pageData = data.content;

  return (
    <section className='relative w-full px-4 md:px-20  flex flex-col  justify-center items-center min-h-screen'>
      <div className='absolute top-0 left-0 w-full h-full'>
          <Navbar />
        <Image
          src='/images/carroucel/fondocintos.png'
          alt='fondo'
          fill
          className='object-cover'
        />
      </div>
      <div className='absolute bg-white/50 w-full h-full'></div>

      <div className='relative z-10 flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-7xl mx-auto mt-20'>
        {pageData.cards.map((card, index) => (
          <article
            key={index}
            className='bg-orange-400 text-neutral-900 p-6 rounded-lg shadow-xl w-full md:w-1/3 flex flex-col space-y-4 max-w-md'
          >
            <h3 className='text-xl font-bold text-center'>{card.title}</h3>
            <p className='text-sm whitespace-pre-line'>{card.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
