'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Logo from '@/public/svg/logo.svg';
import NavLink from '../atoms/nav-link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const pathname = usePathname();

  const headerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById('sentinel');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log({ entry });
          if (entry.isIntersecting) {
            setIsScrolled(false); // When the sentinel is visible
          } else {
            setIsScrolled(true); // When the sentinel is not visible
          }
        });
      },
      { threshold: 0.7 }
    );

    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          'fixed top-0 left-0 right-0 flex items-center justify-between lg:px-[60px] xl:px-[104px] h-[120px] z-50 transition-colors',
          isScrolled && 'bg-black/80 shadow-lg border-b border-primary/50'
        )}
        ref={headerRef}
      >
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
      <div className='h-[120px]' id='sentinel' />
    </>
  );
};
export default Header;
