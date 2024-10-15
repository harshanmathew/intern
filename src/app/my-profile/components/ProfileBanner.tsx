'use client';

import { Button } from '@/components/ui/button';
import { UserNameIcon } from '@/lib/index-icons';
import Image from 'next/image';
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
  return (
    <div className='my-profile w-full max-w-[900px] mx-auto bg-black/90 px-5 py-7 rounded-[10px]'>
      <div className='flex items-center gap-x-3'>
        <div className='w-[120px] h-[116px] relative overflow-hidden rounded-[10px]'>
          <Image
            src={imgUrl}
            fill
            className='object-cover'
            alt='Profile Image'
          />
        </div>
        <div className='ml-[25px]'>
          <div className='flex items-center'>
            <span className='text-2xl'>{username}</span>
            <Button
              className='ml-5 text-xs h-[25px] border border-primary/50 hover:bg-primary'
              onClick={() => console.log('Edit Profile Clicked')}
            >
              Edit Profile <UserNameIcon className='ml-2 w-4 h-4' />
            </Button>
          </div>
          <div className='mt-5'>
            <div>Wallet: {walletAddress}</div>
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
