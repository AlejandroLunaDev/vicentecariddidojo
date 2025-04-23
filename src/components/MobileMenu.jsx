import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const MobileMenu = ({ isOpen, onClose }) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    }
  };

  const menuItems = [
    { href: '/', label: 'INICIO' },
    { href: '/escuela', label: 'LA ESCUELA' },
    { href: '/sensei', label: 'EL SENSEI' },
    { href: '/estilos', label: 'ESTILOS' },
    { href: '/horarios', label: 'HORARIOS' },
    { href: '/contacto', label: 'CONTACTO' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial='closed'
          animate='open'
          exit='closed'
          variants={menuVariants}
          className='fixed inset-0 bg-black/95 z-50'
        >
          <div className='relative h-full w-full flex flex-col items-center justify-center px-6'>
            {/* Botón de cierre */}
            <button
              onClick={onClose}
              className='absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-lg transition-colors'
              aria-label='Cerrar menú'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-8 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>

            {/* Lista de enlaces */}
            <nav className='flex flex-col items-center gap-8 -mt-24'>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                >
                  <Link
                    href={item.href}
                    className='text-white font-oswald text-4xl tracking-wider hover:text-primary transition-colors'
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Decoración */}
            <motion.div
              className='absolute bottom-32 left-1/2 -translate-x-1/2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <p className='text-white/60 font-oswald text-xl text-center'>
                ESCUELA CARIDDI
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
