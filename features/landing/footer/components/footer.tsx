'use client';

import React from 'react';

export const Footer = () => {
  return (
    <footer className='bg-[#150303] text-[#f8ae63] py-6 font-bold'>

        <div className='flex justify-between px-10'>
          <div className='w-full text-left'>
            <p className='text-base md:text-lg mb-1'>
              Calle Luis Pasteur N° 1953 B° AMEGUINO SUR.
            </p>
            <p className='text-base md:text-lg mb-1'>
              Altura de Av. Fuerza Aérea al 4000
            </p>
            <p className='text-base md:text-lg mb-1'>
              (A 30 Mts. De La Ruta 20)
            </p>
            <p className='text-base md:text-lg mb-1'>
              CÓRDOBA CAPITAL -ARGENTINA
            </p>
          </div>
          <div className='w-full md:w-1/2 md:pr-8 mt-4 md:mt-0 text-left'>
            <p className='text-base md:text-lg mb-1'>
              Email: hombucariddidojo@gmail.com
            </p>
            <p className='text-base md:text-lg mb-1'>
              Teléfono Fijo: 4460477 Celular: 3515156542
            </p>
          </div>
        </div>
        <div className='text-center text-base md:text-lg mt-6 font-bold'>
          © HOMBU CARIDDI - DOJO Todos los derechos reservados by Yuli Riveros
        </div>
 
    </footer>
  );
};
