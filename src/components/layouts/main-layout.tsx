'use client';
import React, { Suspense } from 'react';
import Header from './header';
import Image from 'next/image';

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Suspense>
      <Header />
      <div className='fixed top-0 left-0 right-0 w-full z-[-1]'>
        <div className='relative w-full h-[540px]'>
          <Image
            alt='hero-bg'
            className='object-cover opacity-20 select-none'
            fill
            priority
            src={'/img/hero-bg.png'}
          />
        </div>
      </div>
      <div className='lg:px-[60px] xl:px-[104px]'>{children}</div>
    </Suspense>
  );
};

export default MainLayout;
