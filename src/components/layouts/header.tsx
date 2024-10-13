'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Logo from '@/public/svg/logo.svg?url';
import NavLink from '../atoms/nav-link';
import { usePathname, useSearchParams } from 'next/navigation';
import { usePersonStore } from '@/hooks/user';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import HowToHaveFunModal from '../how-to-have-fun.modal';
import { useAppKit, useAppKitAccount } from '@reown/appkit/react';
import { useDisconnect, useSignMessage } from 'wagmi';
import { me } from '@/app/actions/me';
import { login } from '@/app/actions/login';

const Header = () => {
  const { open } = useAppKit();
  const { address, isConnected, status } = useAppKitAccount();
  const { disconnect } = useDisconnect();
  const pathname = usePathname();
  const searchParam = useSearchParams();
  const { setIsLogged, isLogged } = usePersonStore();
  const { signMessage, data, error } = useSignMessage();
  const headerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShowHowToFun, setShowHowToFun] = useState(false);
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
  }, [address]);

  useEffect(() => {
    if (address && !isLogged) {
      signUserMessage();
    }
    if (!address && isLogged) {
      handleLogOut();
    }
  }, [address, isLogged]);

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
              active={searchParam.has('how-it-works') && isShowHowToFun}
              href='?how-it-works'
              key={3}
              label='How it works?'
              onClickLink={() => setShowHowToFun((prev) => !prev)}
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
          <Button
            className='text-xl flex-center h-[50px]'
            onClick={async () => await open()}
          >
            {isConnected
              ? `${address!.slice(0, 6)}...${address!.slice(-5)}`
              : status === 'connecting' || status === 'reconnecting'
                ? 'Loading...'
                : 'Connect Wallet'}
          </Button>
        </div>
      </div>
      <div className='h-[120px]' id='sentinel' />
      <HowToHaveFunModal
        isOpen={isShowHowToFun}
        onOpenChange={() => setShowHowToFun(false)}
      />
    </>
  );
};
export default Header;
