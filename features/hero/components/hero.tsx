import Image from 'next/image';
import { HeroContent } from '@/features/hero/components/hero-content';
import { HeroLogos } from '@/features/hero/components/hero-logos';

export function Hero() {
  return (
    <section className='relative h-[calc(100vh-84px)] overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/templo-shuri.jpeg'
          alt='Templo Shuri'
          fill
          className='object-cover'
          priority
        />
      </div>
      <div className='absolute inset-0 bg-black/60 z-20 '></div>
      <div className='w-full relative'>
        <div className='absolute left-[220px] top-[100px] w-[200px] h-[200px]'>
          <Image
            src='/images/shoeiLeft.png'
            alt='Shoei'
            fill
            className='object-contain'
          />
        </div>
        <div className='absolute left-[330px] top-[100px] w-[200px] h-[200px]'>
          <Image
            src='/images/katsuyaRight.png'
            alt='Katsuya'
            fill
            className='object-contain'
          />
        </div>
      </div>
      <div className='relative z-50  px-4 pt-8 flex flex-col items-center justify-between h-full  pb-64'>
        <div className="flex flex-col w-full  items-center  px-12">
          <HeroContent />
          <HeroLogos />
        </div>
        <div className='text-center text-white'>
          <h3 className='text-2xl md:text-5xl font-bold font-sofia mb-2 italic'>
            SENSEI VICENTE CARIDDI
          </h3>
          <p className='text-lg md:text-3xl font-arial font-semibold mb-8'>
            10° DAN DIRECTOR
          </p>

          <button className='bg-[#260808] hover:bg-[#3a0c0c] font-arial text-yellow-300 hover:text-white px-8 py-2 rounded-md font-medium transition-colors duration-200'>
            Comienza Hoy
          </button>
        </div>
      </div>
      <div className='absolute right-24 z-20 bottom-0 w-[265px] h-[480px] flex items-end'>
        <Image
          src='/images/cariddiHero.png'
          alt='Sensei Cariddi'
          fill
          className='object-contain object-bottom'
        />
      </div>
    </section>
  );
}
