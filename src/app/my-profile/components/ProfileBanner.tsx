'use client';

import { Button } from '@/components/ui/button';
import { UserNameIcon } from '@/lib/index-icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ProfileBannerProps {
  imgUrl: string;
  username: string;
  walletAddress: string;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({
  imgUrl,
  username,
  walletAddress,
}) => {
  const router = useRouter();
  return (
    <div className='my-profile w-full max-w-[900px] mx-auto bg-black/90 lg:px-5 py-7 rounded-[10px] overflow-hidden'>
      <div className='flex flex-col lg:flex-row items-center gap-x-3'>
        <div className='w-[120px] h-[116px] relative overflow-hidden rounded-[10px]'>
          <Image
            alt='Profile Image'
            className='object-cover'
            fill
            src={imgUrl}
          />
        </div>
        <div className='lg:ml-[25px] mt-5 lg:mt-0'>
          <div className='flex items-center justify-between'>
            <span className='text-base lg:text-2xl text-wrap'>{username}</span>
            <Button
              className='ml-5 text-xs h-[30px] border border-primary/50 hover:bg-primary'
              onClick={() => router.push('/my-profile/edit')}
            >
              Edit Profile <UserNameIcon className='ml-2 w-4 h-4' />
            </Button>
          </div>
          <div className='mt-5'>
            <div className='truncate text-xs lg:text-sm max-w-[300px] lg:max-w-max'>
              Wallet: {walletAddress}
            </div>
            <div className='flex gap-x-5 mt-3'>
              <span className='bg-white text-black px-5 py-1 text-xs rounded'>
                Silver Hands
              </span>
              <span className='bg-container px-5 py-1 text-xs rounded'>
                Top 50 Dev
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
