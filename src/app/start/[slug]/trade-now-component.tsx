import { Button } from '@/components/ui/button';
import React from 'react';

const TradeNowComponent = () => {
  return (
    <div className='border border-primary/50 w-full max-w-[500px] rounded-[10px] p-4'>
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
    </div>
  );
};

export default TradeNowComponent;
