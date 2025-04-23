'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  MenuIcon,
  ChevronDown,
  ChevronUp,
  Home,
  Users,
  User,
  Info,
  BookOpen,
  BookText,
  History,
  MessageSquare
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from '@/shared/ui/sheet';

const Navbar = () => {
  // Estado para controlar qué menú está desplegado en desktop
  const [openMenu, setOpenMenu] = useState(null);
  // Estado para tracking de menús expandidos en mobile
  const [expandedMobileMenus, setExpandedMobileMenus] = useState({});
  // Estado para controlar el comportamiento del navbar al hacer scroll
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar el scroll y cambiar la apariencia del navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Estructura de menú según la imagen proporcionada
  const menuStructure = [
    {
      id: 'inicio',
      label: 'Inicio',
      path: '/',
      icon: <Home className='w-5 h-5 mr-2' />,
      solo: true
    },
    {
      id: 'escuela',
      label: 'Sobre la Escuela',
      icon: <Info className='w-5 h-5 mr-2' />,
      children: [
        { label: 'Maestros', path: '/maestros' },
        { label: 'Instructores', path: '/instructores' },
        { label: 'Biografía', path: '/biografia' }
      ]
    },
    {
      id: 'karate',
      label: 'Karate',
      icon: <BookOpen className='w-5 h-5 mr-2' />,
      children: [
        { label: 'Karate-Do', path: '/karate-do' },
        { label: 'Kata de la Escuela', path: '/kata' },
        { label: 'Historia de Okinawa', path: '/historia' }
      ]
    },
    {
      id: 'filosofia',
      label: 'Filosofía',
      icon: <BookText className='w-5 h-5 mr-2' />,
      children: [{ label: 'Reflexiones Sensei', path: '/reflexiones' }]
    },
    {
      id: 'contacto',
      label: 'Contacto',
      path: '/contacto',
      icon: <MessageSquare className='w-5 h-5 mr-2' />,
      solo: true
    }
  ];

  // Función para manejar el despliegue de menús en desktop
  const handleMenuToggle = menuId => {
    if (openMenu === menuId) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menuId);
    }
  };

  // Función para toggle de menús en mobile
  const toggleMobileMenu = menuId => {
    setExpandedMobileMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1A0806] shadow-lg' : 'bg-[#1A0806]/90 backdrop-blur-sm'
      }`}
    >
      {/* Menú de escritorio - visible solo en pantallas md y superiores */}
      <div className='w-full mx-auto hidden md:block border-b border-[#ff9e3e]/20'>
        <ul className='flex justify-center items-center h-20'>
          {menuStructure.map(menuItem => (
            <li key={menuItem.id} className='relative mx-1'>
              {menuItem.solo ? (
                <Link
                  href={menuItem.path}
                  className='font-oswald text-[#ff9e3e] hover:text-white uppercase px-4 py-3 text-xl flex items-center'
                >
                  {menuItem.icon}
                  {menuItem.label}
                </Link>
              ) : (
                <div className='relative'>
                  <button
                    onClick={() => handleMenuToggle(menuItem.id)}
                    className='font-oswald text-[#ff9e3e] hover:text-white uppercase px-4 py-3 text-xl flex items-center cursor-pointer'
                  >
                    {menuItem.icon}
                    {menuItem.label}
                    {openMenu === menuItem.id ? (
                      <ChevronUp className='ml-2 w-5 h-5' />
                    ) : (
                      <ChevronDown className='ml-2 w-5 h-5' />
                    )}
                  </button>

                  {/* Menú desplegable */}
                  {openMenu === menuItem.id && (
                    <div className='absolute top-full left-0 bg-[#1A0806] border border-[#ff9e3e]/20 w-64 py-2 rounded-b-md shadow-lg'>
                      <ul>
                        {menuItem.children.map((child, index) => (
                          <li key={index}>
                            <Link
                              href={child.path}
                              className='font-oswald text-[#ff9e3e] hover:text-white block py-2 px-4 text-lg'
                            >
                              • {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Barra superior móvil - visible solo en pantallas menores a md */}
      <div className='md:hidden h-20 flex items-center justify-between px-6 border-b border-[#ff9e3e]/20'>
        <Link href='/' className='text-white font-oswald text-xl'>
          ESCUELA CARIDDI
        </Link>

        {/* Integración de Sheet para menú móvil */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className='text-[#ff9e3e] p-2 hover:bg-white/10 rounded-lg transition-colors'
              aria-label='Abrir menú'
            >
              <MenuIcon className='w-8 h-8' />
            </button>
          </SheetTrigger>
          <SheetContent
            side='right'
            className='bg-[#1A0806]/95 border-l-0 w-full sm:max-w-full p-0'
          >
            <div className='flex flex-col items-center justify-center h-full pt-10'>
              {/* Título requerido para accesibilidad */}
              <SheetTitle className='sr-only'>Menú de navegación</SheetTitle>

              {/* Enlaces del menú móvil */}
              <nav className='flex flex-col w-full px-8 py-4 overflow-y-auto max-h-[80vh]'>
                {/* Inicio - enlace individual */}
                <Link
                  href='/'
                  className='py-2 flex items-center text-[#ff9e3e] font-oswald text-2xl hover:text-white transition-colors'
                >
                  <Home className='w-5 h-5 mr-2' />
                  Inicio
                </Link>

                {/* Sobre la Escuela - menú desplegable */}
                <div className='mt-4 border-t border-[#ff9e3e]/10 pt-4'>
                  <div
                    className='flex justify-between items-center cursor-pointer'
                    onClick={() => toggleMobileMenu('escuela')}
                  >
                    <div className='flex items-center text-white font-oswald text-2xl'>
                      <Info className='w-5 h-5 mr-2' />
                      Sobre la Escuela
                    </div>
                    {expandedMobileMenus.escuela ? (
                      <ChevronUp className='text-[#ff9e3e] w-5 h-5' />
                    ) : (
                      <ChevronDown className='text-[#ff9e3e] w-5 h-5' />
                    )}
                  </div>

                  {expandedMobileMenus.escuela && (
                    <ul className='ml-7 mt-2 space-y-2'>
                      <li>
                        <Link
                          href='/maestros'
                          className='text-[#ff9e3e] font-oswald text-xl hover:text-white transition-colors flex items-center'
                        >
                          • Maestros
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/instructores'
                          className='text-[#ff9e3e] font-oswald text-xl hover:text-white transition-colors flex items-center'
                        >
                          • Instructores
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/biografia'
                          className='text-[#ff9e3e] font-oswald text-xl hover:text-white transition-colors flex items-center'
                        >
                          • Biografía
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>

                {/* Karate - menú desplegable */}
                <div className='mt-4 border-t border-[#ff9e3e]/10 pt-4'>
                  <div
                    className='flex justify-between items-center cursor-pointer'
                    onClick={() => toggleMobileMenu('karate')}
                  >
                    <div className='flex items-center text-white font-oswald text-2xl'>
                      <BookOpen className='w-5 h-5 mr-2' />
                      Karate
                    </div>
                    {expandedMobileMenus.karate ? (
                      <ChevronUp className='text-[#ff9e3e] w-5 h-5' />
                    ) : (
                      <ChevronDown className='text-[#ff9e3e] w-5 h-5' />
                    )}
                  </div>

                  {expandedMobileMenus.karate && (
                    <ul className='ml-7 mt-2 space-y-2'>
                      <li>
                        <Link
                          href='/karate-do'
                          className='text-[#ff9e3e] font-oswald text-xl hover:text-white transition-colors flex items-center'
                        >
                          • Karate-Do
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/kata'
                          className='text-[#ff9e3e] font-oswald text-xl hover:text-white transition-colors flex items-center'
                        >
                          • Kata de la Escuela
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/historia'
                          className='text-[#ff9e3e] font-oswald text-xl hover:text-white transition-colors flex items-center'
                        >
                          • Historia de Okinawa
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>

                {/* Filosofía - menú desplegable */}
                <div className='mt-4 border-t border-[#ff9e3e]/10 pt-4'>
                  <div
                    className='flex justify-between items-center cursor-pointer'
                    onClick={() => toggleMobileMenu('filosofia')}
                  >
                    <div className='flex items-center text-white font-oswald text-2xl'>
                      <BookText className='w-5 h-5 mr-2' />
                      Filosofía
                    </div>
                    {expandedMobileMenus.filosofia ? (
                      <ChevronUp className='text-[#ff9e3e] w-5 h-5' />
                    ) : (
                      <ChevronDown className='text-[#ff9e3e] w-5 h-5' />
                    )}
                  </div>

                  {expandedMobileMenus.filosofia && (
                    <ul className='ml-7 mt-2 space-y-2'>
                      <li>
                        <Link
                          href='/reflexiones'
                          className='text-[#ff9e3e] font-oswald text-xl hover:text-white transition-colors flex items-center'
                        >
                          • Reflexiones Sensei
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>

                {/* Contacto - enlace individual */}
                <div className='mt-4 border-t border-[#ff9e3e]/10 pt-4'>
                  <Link
                    href='/contacto'
                    className='py-2 flex items-center text-[#ff9e3e] font-oswald text-2xl hover:text-white transition-colors'
                  >
                    <MessageSquare className='w-5 h-5 mr-2' />
                    Contacto
                  </Link>
                </div>
              </nav>

              {/* Decoración/Footer */}
              <div className='absolute bottom-10 left-1/2 -translate-x-1/2'>
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
