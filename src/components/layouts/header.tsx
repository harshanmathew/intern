'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Logo from '@/public/svg/logo.svg?url';
import NavLink from '../atoms/nav-link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import HowToHaveFunModal from '../how-to-have-fun.modal';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePersonStore } from '@/hooks/usePersonStore';
import { useAppKit, useAppKitAccount } from '@reown/appkit/react';
import { useDisconnect, useSignMessage } from 'wagmi';
import { me } from '@/app/actions/api/me';
import { login } from '@/app/actions/api/login';

const Header = () => {
  const headerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShowHowToFun, setShowHowToFun] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  // New state and hooks
  const { open } = useAppKit();
  const { address, isConnected, status } = useAppKitAccount();
  const { disconnect } = useDisconnect();
  const { setIsLogged, isLogged } = usePersonStore();
  const { signMessage, data, error } = useSignMessage();
  const [currentMessage, setCurrentMessage] = useState('');

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

  // New functions
  const generateMessage = useCallback(() => {
    const date = new Date().toISOString();
    return 'Signing this message at : ' + date;
  }, []);

  const signUserMessage = useCallback(async () => {
    const message = generateMessage();
    setCurrentMessage(message);

    const isUser = await checkUserLoggedIn();
    if (isUser) {
      setIsLogged(true);
      return;
    }

    localStorage.setItem('token', '');
    signMessage({ message });
  }, [address, generateMessage, setIsLogged, signMessage]);

  useEffect(() => {
    if (address && !isLogged) {
      signUserMessage();
    }
    if (!address && isLogged) {
      handleLogOut();
    }
  }, [address, isLogged, signUserMessage]);

  const handleLogOut = useCallback(async () => {
    localStorage.setItem('token', '');
    setIsLogged(false);
    disconnect();
  }, [disconnect, setIsLogged]);

  const checkUserLoggedIn = async () => {
    try {
      const data = await me();
      return data?.address === address;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    if (data) {
      handleLogin(data);
    }
    if (error) {
      handleLogOut();
    }
  }, [data, error]);

  const handleLogin = useCallback(
    async (signature: string) => {
      const res = await login(address, currentMessage, signature);
      if (res?.accessToken) {
        localStorage.setItem('token', res.accessToken);
        setIsLogged(true);
      } else {
        handleLogOut();
      }
    },
    [address, currentMessage, setIsLogged, handleLogOut]
  );

  return (
    <header>
      <div
        className={cn(
          'fixed top-0 left-0 right-0 px-4 lg:px-[60px] xl:px-[104px] lg:h-[100px] z-50 transition-colors',
          (isScrolled || isMenuOpen) &&
            'bg-black/80 shadow-lg border-b border-primary/50'
        )}
        ref={headerRef}
      >
        <div className='flex items-center justify-between min-h-[70px] h-auto'>
          <div className='flex items-center justify-between lg:gap-x-10 xl:gap-x-20'>
            <Link href={'/start'}>
              <Image
                alt='logo'
                className='w-[100px] h-auto lg:w-[140px] lg:h-[50px]'
                src={Logo}
              />
            </Link>
            <NavLinks
              isShowHowToFun={isShowHowToFun}
              rootClass='hidden lg:flex'
              setShowHowToFun={setShowHowToFun}
            />
          </div>
          <div className='flex gap-x-4'>
            <Button
              className='text-xs lg:text-xl font-medium flex-center px-2 lg:px-4 h-[40px] lg:h-[50px]'
              onClick={async () => await open()}
            >
              {isConnected
                ? `${address!.slice(0, 6)}...${address!.slice(-5)}`
                : status === 'connecting' || status === 'reconnecting'
                  ? 'Loading...'
                  : 'Connect Wallet'}
            </Button>
            {isMenuOpen ? (
              <X
                className='w-[20px] h-auto text-white lg:hidden'
                onClick={() => setMenuOpen(false)}
                role='button'
              />
            ) : (
              <Menu
                className='w-[20px] h-auto text-white lg:hidden'
                onClick={() => setMenuOpen(true)}
                role='button'
              />
            )}
          </div>
        </div>
        {isMenuOpen && (
          <NavLinks
            isShowHowToFun={isShowHowToFun}
            rootClass={cn('lg:hidden')}
            setMenuOpen={setMenuOpen}
            setShowHowToFun={setShowHowToFun}
          />
        )}
      </div>
      <div className='min-h-[70px] lg:h-[120px]' id='sentinel' />
      <HowToHaveFunModal
        isOpen={isShowHowToFun}
        onOpenChange={() => setShowHowToFun(false)}
      />
    </header>
  );
};

// Keep the NavLinks component as it was
const NavLinks = ({
  setShowHowToFun,
  isShowHowToFun,
  rootClass,
  setMenuOpen,
}: {
  rootClass?: string;
  setShowHowToFun: (value: boolean) => void;
  isShowHowToFun: boolean;
  setMenuOpen?: (value: boolean) => void;
}) => {
  const pathname = usePathname();
  const searchParam = useSearchParams();

  return (
    <div
      className={cn(
        'flex flex-col lg:flex-row items-start justify-between pt-4 pb-7 gap-y-7 lg:gap-x-10 grow mt-4',
        rootClass
      )}
    >
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
        active={searchParam.has('how-it-works') && isShowHowToFun}
        href='?how-it-works'
        key={3}
        label='How it works?'
        onClickLink={() => {
          if (setMenuOpen) {
            setMenuOpen(false);
          }
          setShowHowToFun(!isShowHowToFun);
        }}
      />
      <NavLink
        active={pathname === '/rewards'}
        href='/rewards'
        key={4}
        label='Rewards'
      />
    </div>
  );
};

export default Header;
