'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export function NavbarMobile() {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const link = [
    { href: '/', label: 'INICIO', active: true },
    { href: '/maestros', label: 'MAESTROS' },
    { href: '/biografia', label: 'BIOGRAFÍA' },
    { href: '/#instructores', label: 'INSTRUCTORES' },
    { href: '/karate-do', label: 'KARATE-DO' },
    { href: '/kata-de-la-escuela', label: 'KATA DE LA ESCUELA' },
    { href: '/historia-de-okinawa', label: 'HISTORIA DE OKINAWA' },
    { href: '/reflexiones-de-sensei', label: 'REFLEXIONES DE SENSEI' },
    { href: '/#contacto', label: 'CONTACTO' }
  ];

  useEffect(() => {
    const navbar = navbarRef.current;
    const placeholder = placeholderRef.current;

    if (!navbar || !placeholder) return;

    // Create an Intersection Observer to detect when navbar reaches top of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the placeholder is not intersecting (out of view), make navbar sticky
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    // Observe the placeholder element
    observer.observe(placeholder);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* This invisible element marks the navbar's original position */}
      <div
        ref={placeholderRef}
        className='navbar-placeholder'
        style={{ height: 0 }}
      />

      <nav
        ref={navbarRef}
        className={`w-full z-50 bg-[#260808] shadow-lg ${
          isSticky ? 'fixed top-0 left-0 right-0' : 'relative'
        }`}
      >
        <div className='container mx-auto px-4 py-2'>
          <div className='flex flex-col justify-center gap-2'>
            {link.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={
                  l.active ? 'nav-link nav-link-active font-arial' : 'nav-link'
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
