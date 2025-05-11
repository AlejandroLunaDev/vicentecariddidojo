import Image from 'next/image';
import { HeroContent } from '@/features/hero/components/hero-content';
import { HeroLogos } from '@/features/hero/components/hero-logos';

export function Hero() {
  return (
    <section className='relative min-h-screen pb-20'>
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/templo-shuri.jpeg'
          alt='Templo Shuri'
          fill
          className='object-cover'
          priority
        />
      </div>
        <div className='absolute  inset-0 bg-black/60 z-20'></div>
        <div className='w-full relative'>
          <div className='absolute left-[300px] top-[100px] w-[150px] h-[150px]'>
            <Image
              src='/images/shoeiLeft.png'
              alt='Shoei'
              fill
              className='object-contain'
            />
          </div>
          <div className='absolute left-[380px] top-[100px] w-[150px] h-[150px]'>
            <Image
              src='/images/katsuyaRight.png'
              alt='Katsuya'
              fill
              className='object-contain'
            />
          </div>

        </div>
      <div className='relative z-50 container mx-auto px-4 pt-8 flex flex-col items-center'>

        <HeroContent />
        <HeroLogos />
        <div className='mt-16 md:mt-0 text-center text-white'>
          <h3 className='text-2xl md:text-5xl font-bold font-sofia mb-2 italic'>
            SENSEI VICENTE CARIDDI
          </h3>
          <p className='text-lg md:text-3xl font-arial font-semibold mb-8'>
            10° DAN DIRECTOR
          </p>

          <button  className='bg-[#260808] hover:bg-[#3a0c0c] font-arial text-yellow-300 hover:text-white px-8 py-2 rounded-md font-medium transition-colors duration-200'>
            Comienza Hoy
          </button>
        </div>
      </div>
      <div className='absolute right-24 z-20 bottom-8 w-[265px] h-[440px]'>
            <Image
              src='/images/cariddiHero.png'
              alt='Katsuya'
              fill
              className='object-contain'
            />
          </div>
    </section>
  );
}
