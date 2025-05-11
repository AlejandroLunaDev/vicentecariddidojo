import Image from "next/image"

export function HeroLogos() {
  return (
    <div className="flex justify-between w-full mb-8 z-20">
      <div className="w-24 h-24 md:w-28 md:h-28">
        <Image
          src="/images/escudokaridi.png"
          alt="Escuela Cariddi Logo"
          width={78}
          height={78}
          className="w-full h-full"
        />
      </div>
      <div className="w-24 h-24 md:w-28 md:h-28">
        <Image
          src="/images/ellipse.png"
          alt="Okinawa Shorin-Ryu Logo"
          width={78}
          height={78}
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
