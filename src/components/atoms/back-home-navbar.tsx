import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

const BackHomeNavbar: React.FC<BackHomeNavbarType> = ({
  children,
  navLink = '/start',
}) => {
  return (
    <div className='w-full h-[50px] flex items-center justify-start gap-x-10'>
      <Link
        className='flex text-lg lg:text-2xl items-center gap-x-2'
        href={navLink}
      >
        <ChevronLeft className='w-[18px] lg:w-[24px] h-auto text-white' /> Back
        Home
      </Link>
      {children}
    </div>
  );
};

export default BackHomeNavbar;
