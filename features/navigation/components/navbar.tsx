import { NavLinks } from './nav-links';

export function Navbar() {
  return (
    <nav className='fixed bottom-0 left-0 right-0 z-50 bg-[#260808]'>
      <div className='container mx-auto px-4 py-2'>
        <div className='flex flex-col justify-center items-center'>
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
