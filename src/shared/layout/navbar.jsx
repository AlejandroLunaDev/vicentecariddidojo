import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const topMenuItems = [
    { label: 'INICIO', path: '/' },
    { label: 'MAESTROS', path: '/maestros' },
    { label: 'BIOGRAFÍA', path: '/biografia' },
    { label: 'KARATE-DO', path: '/karate-do' },
    { label: 'INSTRUCTORES', path: '/instructores' },
    { label: 'KATA DE LA ESCUELA', path: '/kata' },
    { label: 'REFLEXIONES SENSEI', path: '/reflexiones' }
  ];

  const bottomMenuItems = [
    { label: 'HISTORIA DE OKINAWA', path: '/historia' },
    { label: 'CONTACTO', path: '/contacto' }
  ];

  return (
    <nav className='fixed bottom-0 left-0 w-full bg-[#1A0806] z-50'>
      <div className='w-full mx-auto'>
        {/* Primera fila del navbar */}
        <ul className='flex justify-center items-center h-12'>
          {topMenuItems.map(item => (
            <li key={item.path}>
              <Link
                href={item.path}
                className='font-oswald text-karate-orange hover:text-white uppercase tracking-wide px-4 py-3 text-sm block'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Segunda fila del navbar */}
        <ul className='flex justify-center items-center h-12'>
          {bottomMenuItems.map(item => (
            <li key={item.path}>
              <Link
                href={item.path}
                className='font-oswald text-karate-orange hover:text-white uppercase tracking-wide px-4 py-3 text-sm block'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
