'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import {
  FaUser,
  FaEnvelope,
  FaCommentAlt,
  FaFacebookF,
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
  FaCheckCircle
} from 'react-icons/fa';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await fetch('https://formspree.io/f/mnnanarl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ firstname: '', email: '', message: '' });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };
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
          className='object-cover object-bottom'
          priority
        />
      </div>

      <div className='px-4 md:px-16 relative z-10'>
        <div className='w-full flex flex-col md:flex-row justify-between items-center mb-8'>
          <div className='w-24 h-24 md:w-36 md:h-36 relative hidden md:block'>
            <Image
              src='/images/escudokaridi.png'
              alt='Escudo Kariddi'
              width={120}
              height={120}
            />
          </div>

          <div className='text-center flex-grow'>
            <h2 className='text-2xl md:text-3xl font-bold'>CONTACTANOS</h2>
          </div>

          <div className='w-24 h-24 md:w-36 md:h-36 relative hidden md:block'>
            <Image
              src='/images/ellipse.png'
              alt='Logo Templo'
              width={120}
              height={120}
              className='rounded-full'
            />
          </div>
        </div>

        <div className='px-4 md:px-[80px] flex flex-col md:flex-row justify-center gap-10 items-center'>
          <div className='w-full md:w-1/2'>
            <div className=''>
              <Image
                src='/images/contact/DOJO.png'
                alt='Dojo'
                width={300}
                height={300}
                className='rounded-lg w-full h-full object-cover'
              />
            </div>
          </div>

          <div className='w-full md:w-1/2 px-4 md:px-32'>
            <h3 className='text-xl md:text-2xl mb-4 md:mb-6 font-bold text-center'>
              "HOMBU CARIDDI - DOJO"
            </h3>
            <p className='mb-4 md:mb-6 font-bold text-lg md:text-xl text-center'>
              Escribanos y responderemos su consulta
            </p>

            {submitted ? (
              <div className='bg-green-100 rounded-xl p-4 md:p-6 text-center'>
                <FaCheckCircle
                  className='mx-auto text-green-600 mb-4'
                  size={48}
                />
                <h4 className='text-lg md:text-xl font-semibold text-green-800 mb-2'>
                  ¡Mensaje Enviado!
                </h4>
                <p className='text-green-700'>
                  Gracias por contactarnos. Responderemos a la brevedad.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className='mt-4 bg-[#3b0c0c] hover:bg-[#550f0f] rounded-full text-white px-4 md:px-6 py-2'
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-4'>
                {error && (
                  <div className='bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-center'>
                    Hubo un error al enviar el mensaje. Por favor, intente
                    nuevamente.
                  </div>
                )}
                <div className='bg-[#f8ae63] rounded-xl overflow-hidden flex items-center px-4 shadow-md'>
                  <FaUser className='mr-2 text-black' />
                  <Input
                    name='firstname'
                    type='text'
                    placeholder='Nombre'
                    value={formData.firstname}
                    onChange={handleChange}
                    className='border-none bg-transparent focus:outline-none outline-none placeholder-white text-white ring-0 focus:ring-0'
                    required
                  />
                </div>
                <div className='bg-[#f8ae63] rounded-xl overflow-hidden flex items-center px-4 shadow-md'>
                  <FaEnvelope className='mr-2 text-black' />
                  <Input
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    className='border-none bg-transparent placeholder-white text-white'
                    required
                  />
                </div>
                <div className='bg-[#f8ae63] rounded-xl overflow-hidden flex px-4 shadow-md'>
                  <FaCommentAlt className='mr-2 text-black mt-3' />
                  <Textarea
                    name='message'
                    placeholder='Mensaje'
                    value={formData.message}
                    onChange={handleChange}
                    className='border-none bg-transparent placeholder-white text-white min-h-[100px] py-3'
                    required
                  />
                </div>
                <div className='text-center'>
                  <Button
                    type='submit'
                    className='bg-[#3b0c0c] hover:bg-[#550f0f] rounded-full text-white px-6 md:px-10 py-4 md:py-6 text-lg md:text-xl'
                  >
                    Enviar
                  </Button>
                </div>
              </form>
            )}

            <div className='flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-8'>
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
