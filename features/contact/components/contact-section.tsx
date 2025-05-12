'use client';

import React from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaWhatsapp,
  FaTiktok,
  FaInstagram
} from 'react-icons/fa';

export const ContactSection = () => {
  return (
    <section
      id='contacto'
      className='relative bg-white/40 text-black py-16 overflow-hidden'
    >
      {/* Imagen de fondo con opacidad */}
      <div className='absolute inset-0 z-0 opacity-20'>
        <Image
          src='/images/contact/DOJO.png'
          alt='Fondo Templo'
          fill
          className='object-cover'
          priority
        />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='flex justify-between items-center mb-8'>
          {/* Logo izquierdo */}
          <div className='w-24 h-24 relative hidden md:block'>
            <Image
              src='/images/escudokaridi.png'
              alt='Escudo Kariddi'
              width={96}
              height={96}
            />
          </div>

          {/* Título central */}
          <div className='text-center flex-grow'>
            <h2 className='text-3xl font-bold'>CONTACTANOS</h2>
          </div>

          {/* Logo derecho */}
          <div className='w-24 h-24 relative hidden md:block'>
            <Image
              src='/images/ellipse.png'
              alt='Logo Templo'
              width={96}
              height={96}
              className='rounded-full'
            />
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8 items-center'>
          {/* Left side - Dojo Image */}
          <div className='relative'>
            <div className='flex justify-center mb-4'>
              <div className='relative'>
                {/*              <Image
                  src='/images/ellipse.png'
                  alt='Background'
                  width={300}
                  height={300}
                  className='mx-auto'
                /> */}
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <Image
                    src='/images/escudokaridi.png'
                    alt='Escudo Caridi'
                    width={200}
                    height={200}
                    className='mx-auto'
                  />
                </div>
              </div>
            </div>
            <div className='mt-8'>
              <Image
                src='/images/contact/DOJO.png'
                alt='Dojo'
                width={500}
                height={350}
                className='rounded-lg mx-auto'
              />
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div>
            <h3 className='text-xl mb-6 text-center'>"HOMBU CARIDDI - DOJO"</h3>
            <p className='mb-6 text-center'>
              Escribanos y responderemos su consulta
            </p>

            <form className='space-y-4'>
              <div className='bg-[#f8ae63]  rounded-xl overflow-hidden flex items-center px-4 shadow-md'>
                <FaUser className='mr-2 text-black' />
                <Input
                  type='text'
                  placeholder='Nombre'
                  className='border-none bg-transparent placeholder-white text-white'
                />
              </div>
              <div className='bg-[#f8ae63] rounded-xl overflow-hidden flex items-center px-4 shadow-md'>
                <FaEnvelope className='mr-2 text-black' />
                <Input
                  type='email'
                  placeholder='Email'
                  className='border-none bg-transparent placeholder-white text-white'
                />
              </div>
              <div className='bg-[#f8ae63] rounded-xl overflow-hidden flex items-center px-4 shadow-md'>
                <FaMapMarkerAlt className='mr-2 text-black' />
                <Input
                  type='text'
                  placeholder='Dirección'
                  className='border-none bg-transparent placeholder-white text-white'
                />
              </div>
              <div className='text-center'>
                <Button className='bg-[#3b0c0c] hover:bg-[#550f0f] rounded-full text-white px-10 py-6 text-xl'>
                  Enviar
                </Button>
              </div>
            </form>

            <div className='flex justify-center space-x-6 mt-8'>
              <Link
                href='https://www.facebook.com/profile.php?id=100063556275407'
                target='_blank'
                aria-label='Facebook'
              >
                <div className='bg-[#3b0b0b] rounded-full p-2'>
                  <FaFacebookF className='text-white' size={24} />
                </div>
              </Link>
              <Link
                href='https://wa.me/543515156542'
                target='_blank'
                aria-label='WhatsApp'
              >
                <div className='bg-[#f8ae63] rounded-full p-2'>
                  <FaWhatsapp className='text-white' size={24} />
                </div>
              </Link>
              <Link href='#' target='_blank' aria-label='TikTok'>
                <div className='bg-[#1d1a1a] rounded-full p-2'>
                  <FaTiktok className='text-white' size={24} />
                </div>
              </Link>
              <Link href='#' target='_blank' aria-label='Instagram'>
                <div className='bg-[#b13232] rounded-full p-2'>
                  <FaInstagram className='text-white' size={24} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
