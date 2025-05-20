import React from 'react';
import { Sofia_Sans, Playfair_Display } from 'next/font/google';
import instructorsData from '@/content/instructors-data.json';
import { InstructorCard } from './instructor-card';
import Link from 'next/link';
import Image from 'next/image';

const sofia = Sofia_Sans({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export function InstructorsSection() {
  return (
    <section className='relative bg-white py-14 overflow-hidden'>
      <div className='container mx-auto px-4 max-w-6xl'>
        {/* Primera fila - 2 instructores con texto en el medio */}
        <div className='grid grid-cols-1 lg:grid-cols-11 gap-4 mb-8'>
          {/* Instructor izquierdo - 3 columnas */}
          <div className='lg:col-span-3 flex justify-center lg:justify-start'>
            <div className='w-full max-w-[320px]'>
              <InstructorCard
                name={instructorsData.instructors[0].name}
                rank={instructorsData.instructors[0].rank}
                image={instructorsData.instructors[0].image}
                index={0}
              />
            </div>
          </div>

          {/* Texto central - 5 columnas */}
          <div className='lg:col-span-5 flex flex-col justify-center items-center text-center px-4 py-6 lg:py-0'>
            <Image
              src={'/svgs/quote1.svg'}
              alt='Quote'
              width={20}
              height={20}
              className='mb-3'
            />
            <div
              className={`${playfair.className}  text-base italic mb-3 px-32`}
            >
              <h4 className='text-md font-playball'>
                &quot;{instructorsData.quote.text}&quot;
              </h4>
            </div>
            <h2
              className={`${sofia.className} text-3xl font-bold  text-[#0c3b81] mb-4`}
            >
              {instructorsData.title}
            </h2>
            <p className='text-gray-800 mb-5 text-sm max-w-[45%]'>
              {instructorsData.description}
            </p>
            <Link
              href={instructorsData.cta.link}
              className='bg-[#0c3b81] text-white text-sm py-2 px-6 inline-block hover:bg-[#08285d] transition-colors'
            >
              {instructorsData.cta.text}
            </Link>
            <Image
              src={'/svgs/quote2.svg'}
              alt='Quote'
              width={20}
              height={20}
              className='mt-3'
            />
          </div>

          {/* Instructor derecho - 3 columnas */}
          <div className='lg:col-span-3 flex justify-center lg:justify-end'>
            <div className='w-full max-w-[280px]'>
              <InstructorCard
                name={instructorsData.instructors[1].name}
                rank={instructorsData.instructors[1].rank}
                image={instructorsData.instructors[1].image}
                index={1}
              />
            </div>
          </div>
        </div>

        {/* Segunda fila - 3 instructores */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6'>
          {instructorsData.instructors.slice(2).map((instructor, index) => (
            <div key={index + 2} className='flex justify-center'>
              <div className='w-full max-w-[280px]'>
                <InstructorCard
                  name={instructor.name}
                  rank={instructor.rank}
                  image={instructor.image}
                  index={index + 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
