import Link from "next/link"

export function NavLinks() {
  const topRowLinks = [
    { href: "/", label: "INICIO", active: true },
    { href: "/maestros", label: "MAESTROS" },
    { href: "/biografia", label: "BIOGRAFÍA" },
    { href: "/instructores", label: "INSTRUCTORES" },
    { href: "/karate-do", label: "KARATE-DO" },
    { href: "/kata-de-la-escuela", label: "KATA DE LA ESCUELA" },
    { href: "/historia-de-okinawa", label: "HISTORIA DE OKINAWA" },
  ]

  const bottomRowLinks = [
    { href: "/reflexiones-de-sensei", label: "REFLEXIONES DE SENSEI" },
    { href: "/#contacto", label: "CONTACTO" },
  ]

  return (
    <>
      <div className="flex flex-wrap justify-center mb-1">
        {topRowLinks.map((link) => (
          <Link key={link.href} href={link.href} className={link.active ? "nav-link nav-link-active font-arial" : "nav-link"}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        {bottomRowLinks.map((link) => (
          <Link key={link.href} href={link.href} className="nav-link font-arial">
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )
}
