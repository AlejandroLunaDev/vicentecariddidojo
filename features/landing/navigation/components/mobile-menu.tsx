'use client';
import React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { FaBars } from 'react-icons/fa';
import { NavbarMobile } from './nav-links-mobile';

export function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className='block md:hidden'>
      <SheetPrimitive.Root open={open} onOpenChange={setOpen}>
        <SheetPrimitive.Trigger asChild>
          <button
            className='fixed top-4 left-4 z-[100] bg-[#260808]  rounded-full p-2 shadow-md'
            aria-label='Open menu'
          >
            <FaBars size={28} className='text-white' />
          </button>
        </SheetPrimitive.Trigger>
        <SheetPrimitive.Portal>
          <SheetPrimitive.Overlay className='fixed inset-0 bg-black/50' />
          <SheetPrimitive.Content className='fixed right-0 top-0 h-full bg-[#260808] z-[100] p-4 shadow-lg flex flex-col'>
            <SheetPrimitive.Title className='sr-only'>
              Navigation Menu
            </SheetPrimitive.Title>
            <button
              className='text-white mb-4 self-end'
              onClick={() => setOpen(false)}
              aria-label='Close menu'
            >
              X
            </button>
            <NavbarMobile />
          </SheetPrimitive.Content>
        </SheetPrimitive.Portal>
      </SheetPrimitive.Root>
    </div>
  );
}
