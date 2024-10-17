import Input from '@/components/atoms/input';
import { TokeDropdown } from '@/components/atoms/token-dropdown';
import { Button } from '@/components/ui/button';
import { BoneIcon } from '@/lib/index-icons';
import { Settings } from 'lucide-react';
import React from 'react';

const TradeNowComponent = () => {
  return (
    <div className='border border-primary/50 w-full lg:max-w-[500px] rounded-[10px] p-4'>
      <div className='flex gap-x-5'>
        <Button
          className='w-full bg-secondary rounded-[5px] flex-center text-black text-2xl'
          variant={'ghost'}
        >
          Buy
        </Button>
        <Button
          className='w-full bg-[#FF5E5E] rounded-[5px] flex-center text-black text-2xl'
          variant={'ghost'}
        >
          Sell
        </Button>
      </div>

      <div className='relative mt-7'>
        <div className='flex items-center justify-between px-2'>
          <span className='text-white/50'>Switch to YACHT</span>
          <Settings className='w-[18px] h-auto text-white cursor-pointer' />
        </div>
        <Input
          inputClass='placeholder:text-white/50 h-[80px] lg:h-[100px] pb-[30px] pl-6 pr-[15%] pt-2'
          placeholder='Enter the amount'
          required={false}
          rootClass='grow'
        />
        <span className='absolute left-6 bottom-[20px] text-xs text-white/50 mt-1'>
          Balance: -- BONE
        </span>
        <TokeDropdown>
          <div className='absolute text-[10px] lg:text-3xl flex items-center right-3 lg:right-7 bottom-[30px] cursor-pointer'>
            BONE <BoneIcon className='ml-2 lg:ml-5 w-[30px] h-auto' />
          </div>
        </TokeDropdown>
      </div>
      <div className='flex gap-x-2 mt-3 flex-wrap gap-y-2'>
        <Button className='px-3 h-[30px] bg-container' variant={'ghost'}>
          50 Bone
        </Button>
        <Button className='px-3 h-[30px] bg-container' variant={'ghost'}>
          100 Bone
        </Button>
        <Button
          className='px-3 h-[30px] bg-primary text-black'
          variant={'ghost'}
        >
          250 Bone
        </Button>
        <Button className='px-3 h-[30px] bg-container' variant={'ghost'}>
          500 Bone
        </Button>
      </div>
      <div className='flex-center h-[90px] text-white/50 bg-container mt-7 rounded-[10px] border border-primary/50'>
        You will receive <span className='text-white ml-2'>2,500 YACHT</span>
      </div>
      <Button className='text-xl h-[60px] mt-5 w-full' variant={'secondary'}>
        Trade Now
      </Button>
    </div>
  );
};

export default TradeNowComponent;
