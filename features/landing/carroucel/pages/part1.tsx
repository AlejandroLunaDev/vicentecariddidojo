'use client';

import Image from 'next/image';
import { Navbar } from '../../navigation/components/navbar';

export default function InfoCardsPage({
  data
}: {
  data: { content: { cards: { title: string; content: string }[] } };
}) {
  // Use the provided data instead of importing
  const pageData = data.content;

  return (
    <section className='relative w-full flex justify-center items-center h-screen flex-col'>
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

      <div className='relative z-10 flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-7xl mx-auto mt-28'>
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
