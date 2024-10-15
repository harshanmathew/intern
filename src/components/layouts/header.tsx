'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '@/public/svg/logo.svg?url';
import NavLink from '../atoms/nav-link';
import HowToHaveFunModal from '../how-to-have-fun.modal';
import { CloseIcon } from '@/lib/index-icons';
import { Globe, XIcon, HelpCircle } from 'lucide-react';
import { useWallet } from '@/context/WalletContext';

const Header = () => {
  const pathname = usePathname();
  const searchParam = useSearchParams();
  const router = useRouter();

  const headerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShowHowToFun, setShowHowToFun] = useState(false);
  const [open, setOpen] = useState(false);

  // Use Wallet Context
  const { isConnected, username, connectWallet, disconnectWallet } = useWallet();

  const formatWalletAddress = useCallback(
    (address: string) =>
      address.length >= 6
        ? `${address.slice(0, 3)}...${address.slice(-3)}`
        : address,
    []
  );

  useEffect(() => {
    const sentinel = document.getElementById('sentinel');
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0.7 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 flex items-center justify-between lg:px-[60px] xl:px-[104px] h-[120px] z-50 transition-colors',
          isScrolled && 'bg-black/80 shadow-lg border-b border-primary/50'
        )}
        ref={headerRef}
      >
        <div className='flex items-center justify-between lg:gap-x-10 xl:gap-x-20'>
          <Image alt='logo' className='w-[140px] h-[50px]' src={Logo} />

          <nav className='flex items-start gap-x-10 grow mt-4'>
            <NavLink active={pathname === '/start'} href='/start' label='Start' />
            <NavLink active={pathname === '/create'} href='/create' label='Create' />
            <NavLink
              active={searchParam.has('how-it-works') && isShowHowToFun}
              href='?how-it-works'
              label='How it works?'
              onClickLink={() => setShowHowToFun((prev) => !prev)}
            />
            <NavLink
              active={pathname === '/rewards'}
              href='https://rewards.sharbi.net/'
              label='Rewards'
            />
          </nav>
        </div>

        <div className='relative'>
          {isConnected ? (
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <Button className='text-xl flex items-center justify-center h-[50px]'>
                  {username
                    ? `${username}`
                    : formatWalletAddress('983FA4219ABC0A91')} {/* Example wallet address */}
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className='absolute -right-[4.5rem] -top-14 w-72 bg-[#2B002B] rounded-lg shadow-lg overflow-hidden'>
                <div className='p-4'>
                  <div className='flex justify-between items-center'>
                    <Button className='text-xl flex items-center justify-center h-[50px]'>
                      {username
                        ? `${username}`
                        : formatWalletAddress('983FA4219ABC0A91')}
                    </Button>
                    <CloseIcon
                      className='cursor-pointer text-white'
                      onClick={() => setOpen(false)}
                    />
                  </div>
                  <DropdownMenuSeparator className='my-1 border-t border-white/30' />
                  <DropdownMenuItem className='flex items-center gap-2 text-white p-2 hover:bg-primary rounded-md'>
                    BUY $BONE
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className='my-1 border-t border-white/30' />
                  <DropdownMenuItem
                    onClick={() => router.push('/my-profile')}
                    className='flex items-center gap-2 text-white p-2 hover:bg-primary rounded-md'
                  >
                    User Profile
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator className='border-t border-white/30' />
                <div className='w-full bg-black'>
                  <DropdownMenuItem className='flex items-center gap-2 text-white p-2'>
                    <div className='flex gap-x-4 items-center'>
                      <div className='bg-white/10 p-3 rounded-md cursor-pointer'>
                        <XIcon />
                      </div>
                      <div className='bg-white/10 p-3 rounded-md cursor-pointer'>
                        <Globe />
                      </div>
                      <div className='bg-white/10 p-3 rounded-md cursor-pointer'>
                        <HelpCircle />
                      </div>
                    </div>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              onClick={connectWallet}
              className='text-xl flex items-center justify-center h-[50px]'
            >
              Connect Wallet
            </Button>
          )}
        </div>
      </header>

      <div className='h-[120px]' id='sentinel' />

      <HowToHaveFunModal
        isOpen={isShowHowToFun}
        onOpenChange={() => setShowHowToFun(false)}
      />
    </>
  );
};

export default Header;
