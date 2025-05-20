import Image from "next/image"

export function HeroLogos() {
  return (
    <div className="flex justify-between w-full mb-8 z-20">
      <div className="w-24 h-24 md:w-32 md:h-32">
        <Image
          src="/images/escudokaridi.png"
          alt="Escuela Cariddi Logo"
          width={98}
          height={98}
          className="w-full h-full"
        />
      </div>
      <div className="w-24 h-24 md:w-32 md:h-32">
        <Image
          src="/images/ellipse.png"
          alt="Okinawa Shorin-Ryu Logo"
          width={98}
          height={98}
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
