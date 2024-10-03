import { Button } from '@/components/ui/button';
import { UserNameIcon } from '@/lib/index-icons';
import Image from 'next/image';
import React from 'react';
import TokenDetailBox from '../start/[slug]/token-detail-box';

const UserProfileBanner: React.FC<UserProfileType> = (props) => {
  const { imgUrl, username, walletAddress } = props;
  return (
    <div className='my-profile w-full h-full max-h-[410px] max-w-[900px] mx-auto px-5 py-7 bg-black/90 rounded-[10px] border border-primary/50'>
      <div className='flex gap-x-[10px] items-center'>
        <div className='relative rounded-[10px] w-[120px] h-[116px] overflow-hidden'>
          <Image alt='' className='object-cover' fill src={imgUrl} />
        </div>
        <div className='ml-[25px]'>
          <div className='flex-center justify-start'>
            <span className='text-2xl leading-none'>{username}</span>
            <Button
              className='ml-5 text-xs h-[25px] rounded-[5px] bg-black border border-primary/50 hover:bg-primary'
              variant={'ghost'}
            >
              Edit Profile <UserNameIcon className='w-[14px] h-auto ml-3' />{' '}
            </Button>
          </div>
          <div className='flex flex-col mt-5'>
            <div>
              Wallet : <span>{walletAddress}</span>
            </div>
            <div className='flex gap-x-[20px] mt-3'>
              <span className='flex-center px-5 h-[20px] bg-white text-black font-bold text-xs rounded-[5px]'>
                Silver Hands
              </span>
              <span className='flex-center px-5 h-[20px] text-xs font-bold rounded-[5px] bg-container'>
                Top 50 Dev
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* -----------------Holder Status--------------- */}
      <div className='holderStats'>
        <h2 className='text-xl font-bold mt-7'>Holder Stats</h2>
        <div className='flex mt-4 justify-around'>
          <TokenDetailBox title='Coins held' value='39' />
          <TokenDetailBox title='Bone invested' value='1.2K' />
          <TokenDetailBox title='Bone till lvl up' value='450' />
          <TokenDetailBox
            className='bg-[#4c3106] border-[#FF9900]'
            title='Next Rank'
            value='Golden Hands'
          />
          <TokenDetailBox
            isHighlight
            title='Learn more about'
            value='Holder Rankings'
          />
        </div>
      </div>

      {/* -----------------Holder Status--------------- */}
      <div className='devStats'>
        <h2 className='text-xl font-bold mt-7'>Dev Stats</h2>
        <div className='flex mt-4 justify-around'>
          <TokenDetailBox title='Coins created' value='27' />
          <TokenDetailBox title='Bonding reached' value='8' />
          <TokenDetailBox title='Bone till lvl up' value='2' />
          <TokenDetailBox
            className='bg-[#01003F] border-[#2926FF]'
            title='Next Rank'
            value='Top 25 Dev'
          />
          <TokenDetailBox
            isHighlight
            title='Learn more about'
            value='Dev Rankings'
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfileBanner;
