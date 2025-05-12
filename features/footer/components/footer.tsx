'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className='bg-[#150303] text-[#f8ae63] py-6'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0'>
          <div className='text-center md:text-left'>
            <div className='flex items-center justify-center md:justify-start mb-2'>
              <MapPin size={16} className='mr-2' />
              <p className='text-sm'>
                Calle Luis Pasteur N° 1953 B° AMEGUINO SUR.
              </p>
            </div>
            <p className='text-sm ml-6'>Altura de Av. Fuerza Aérea al 4000</p>
            <p className='text-sm ml-6'>(A 30 Mts. De La Ruta 20)</p>
            <p className='text-sm ml-6 mt-1'>CÓRDOBA CAPITAL -ARGENTINA</p>
          </div>

          <div className='text-center md:text-right'>
            <div className='flex items-center justify-center md:justify-end mb-1'>
              <Mail size={16} className='mr-2' />
              <Link
                href='mailto:hombucariddidojo@gmail.com'
                className='text-sm hover:underline'
              >
                hombucariddidojo@gmail.com
              </Link>
            </div>
            <div className='flex items-center justify-center md:justify-end'>
              <Phone size={16} className='mr-2' />
              <p className='text-sm'>
                Teléfono Fijo: 4460477 Celular: 3515156542
              </p>
            </div>
          </div>
        </div>

        <div className='text-center text-xs mt-6'>
          © HOMBU CARIDDI - DOJO Todos los derechos reservados by Yuli Riveros
        </div>
      </div>
    </footer>
  );
};
