import React from 'react';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from '@/shared/ui/sheet';

const Navbar = () => {
  const menuItems = [
    { label: 'INICIO', path: '/' },
    { label: 'MAESTROS', path: '/maestros' },
    { label: 'BIOGRAFÍA', path: '/biografia' },
    { label: 'KARATE-DO', path: '/karate-do' },
    { label: 'INSTRUCTORES', path: '/instructores' },
    { label: 'KATA DE LA ESCUELA', path: '/kata' },
    { label: 'REFLEXIONES SENSEI', path: '/reflexiones' },
    { label: 'HISTORIA DE OKINAWA', path: '/historia' },
    { label: 'CONTACTO', path: '/contacto' }
  ];

  return (
    <header className='fixed bottom-0 left-0 right-0 bg-[#1A0806] z-50'>
      {/* Menú de escritorio - visible solo en pantallas md y superiores */}
      <div className='w-full mx-auto hidden md:block'>
        {/* Primera fila del navbar */}
        <ul className='flex justify-center items-center h-12'>
          {menuItems.slice(0, 7).map(item => (
            <li key={item.path}>
              <Link
                href={item.path}
                className='font-oswald text-karate-orange hover:text-white uppercase px-4 py-3 text-xl block'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Segunda fila del navbar */}
        <ul className='flex justify-center items-center h-12'>
          {menuItems.slice(7).map(item => (
            <li key={item.path}>
              <Link
                href={item.path}
                className='font-oswald text-karate-orange hover:text-white uppercase px-4 py-3 text-xl block'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Barra inferior móvil - visible solo en pantallas menores a md */}
      <div className='md:hidden h-24 flex items-center justify-between px-6'>
        <Link href='/' className='text-white font-oswald text-xl'>
          ESCUELA CARIDDI
        </Link>

        {/* Integración de Sheet para menú móvil */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className='text-karate-orange p-2 hover:bg-white/10 rounded-lg transition-colors'
              aria-label='Abrir menú'
            >
              <MenuIcon className='w-8 h-8' />
            </button>
          </SheetTrigger>
          <SheetContent
            side='left'
            className='bg-[#1A0806]/95 border-r-0 w-full sm:max-w-full p-0'
          >
            <div className='flex flex-col items-center justify-center h-full pt-10'>
              {/* Título requerido para accesibilidad */}
              <SheetTitle className='sr-only'>Menú de navegación</SheetTitle>

              {/* Enlaces del menú móvil */}
              <nav className='flex flex-col items-center gap-5 overflow-y-auto max-h-[70vh]'>
                {menuItems.map(item => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className='text-karate-orange font-oswald text-3xl tracking-wider hover:text-white transition-colors'
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Decoración/Footer */}
              <div className='absolute bottom-32 left-1/2 -translate-x-1/2'>
                <p className='text-white/60 font-oswald text-xl text-center'>
                  ESCUELA CARIDDI
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
