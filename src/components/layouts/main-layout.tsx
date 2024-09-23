'use client';
import React from 'react';
import Header from './header';

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div className='absolute top-0 left-0 right-0'>
        <main className='block relative bg-[url("/img/hero-background.png")] bg-cover bg-center w-full h-[540px]' />
        {children}
      </div>
    </>
  );
};

export default MainLayout;
