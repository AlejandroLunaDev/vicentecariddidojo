'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const articles = [
  {
    title: '"EL ESCUELA"',
    image: '/images/carroucel/DOJO.png',
    slug: 'escuela',
  },
  {
    title: '"EL MAESTRO"',
    image: '/images/carroucel/elmaestro.png',
    slug: 'maestro',
  },
  {
    title: '"KARATE-DO"',
    image: '/images/carroucel/karateka.png',
    slug: 'karate-do',
  },
  {
    title: '"EL ALUMNO"',
    image: '/images/carroucel/kihones.png',
    slug: 'alumno',
  },
  {
    title: '"EL TRAJE"',
    image: '/images/carroucel/KIMONO.png',
    slug: 'traje',
  },
  {
    title: '"EL CINTURÓN"',
    image: '/images/carroucel/fondocintos.png',
    slug: 'cinturon',
  },
]

export default function ArticlesCarousel() {
  const router = useRouter()

  return (
    <section className="relative w-full px-20 py-12 flex justify-center items-center h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image src="/images/carroucel/fondocintos.png" alt="fondo" fill className="object-cover" />
      </div>
      <div className="absolute bg-white/50 w-full h-full" />
      <Carousel className="w-full">
        <CarouselContent className="flex">
          {articles.map((article, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
              <div className="bg-white dark:bg-neutral-900 overflow-hidden shadow-lg w-[350px] h-[500px] flex flex-col">
                <div className="relative h-96 w-full">
                  <Image src={article.image} alt={article.title} fill className="object-cover" />
                </div>
                <div className="bg-orange-400 px-4 py-6 text-center flex flex-col gap-4 flex-grow">
                  <h3 className="font-bold text-lg text-neutral-900">{article.title}</h3>
                  <button
                    onClick={() => router.push(`/articulos/${article.slug}`)}
                    className="bg-[#260808] text-orange-400 py-2 px-4 rounded hover:opacity-90 transition"
                  >
                    Leer artículo
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 gap-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  )
}
