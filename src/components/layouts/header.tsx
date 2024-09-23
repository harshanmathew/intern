'use client';
import Image from 'next/image';
import React from 'react';
import Logo from '@/public/svg/logo.svg';
import NavLink from '../atoms/nav-link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <div className='fixed top-0 left-0 right-0 flex items-center justify-between lg:px-[60px] xl:px-[104px] h-[120px]  z-50'>
        <div className='flex items-center justify-between lg:gap-x-10 xl:gap-x-20'>
          <Image alt='logo' className='w-[140px] h-[50px]' src={Logo} />
          <div className='flex items-start justify-between gap-x-10 grow mt-4'>
            <NavLink
              active={pathname === '/start'}
              href='/start'
              key={1}
              label='Start'
            />
            <NavLink
              active={pathname === '/create'}
              href='/create'
              key={2}
              label='Create'
            />
            <NavLink
              active={pathname === '/how-it-works'}
              href='/how-it-works'
              key={3}
              label='How it works?'
            />
            <NavLink
              active={pathname === '/rewards'}
              href='/rewards'
              key={4}
              label='Rewards'
            />
          </div>
        </div>
        <div className=''>
          <Button className='text-xl flex-center h-[50px]'>
            Connect Wallet
          </Button>
        </div>
      </div>
      <div className='h-[120px]' />
    </>
  );
};
export default Header;
