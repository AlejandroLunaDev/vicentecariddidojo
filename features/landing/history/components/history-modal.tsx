'use client';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import content from '@/content/karate-history.json';
import { DialogTitle } from '@radix-ui/react-dialog';

export function HistoryModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='mt-8 px-12 py-3 bg-[#0c3b81] text-white font-sofia hover:bg-[#092a5c]'>
          {content.cta.text}
        </Button>
      </DialogTrigger>
      <DialogTitle>
    
      </DialogTitle>

      <DialogContent className='max-w-6xl max-h-[90vh] overflow-y-auto p-8'>
        <h2 className='text-3xl font-sofia font-bold italic mb-6'>
          {content.history.title}
        </h2>
        <div className='space-y-4'>
          {content.history.content.map((paragraph, index) => (
            <p key={index} className='font-arial text-gray-700 leading-relaxed'>
              {paragraph}
            </p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
