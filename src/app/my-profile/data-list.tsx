import { PaginationComp } from '@/components/pagination';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const DataList = () => {
  return (
    <div className='w-full max-w-[500px] rounded-[10px] bg-container py-5 px-4'>
      <DataItem imgUrl={'/temp/trending-project1.jpg'} transaction='Bought' />
      <DataItem imgUrl={'/temp/trending-project1.jpg'} transaction='Bought' />
      <DataItem imgUrl={'/temp/trending-project1.jpg'} transaction='Bought' />
      <DataItem imgUrl={'/temp/trending-project1.jpg'} transaction='Bought' />
      <DataItem imgUrl={'/temp/trending-project1.jpg'} transaction='Bought' />
      <DataItem imgUrl={'/temp/trending-project1.jpg'} transaction='Bought' />
      <PaginationComp className='justify-center mt-5' />
    </div>
  );
};

const DataItem = ({
  transaction,
  imgUrl,
}: {
  transaction: 'Bought' | 'Sold';
  imgUrl: string;
}) => {
  return (
    <div className='flex items-center border-b border-white/25 py-3'>
      TE7j...Ez3U{' '}
      <span className='text-secondary'>
        {transaction === 'Bought' ? 'Bought' : 'Created'}
      </span>{' '}
      500 BONE of $UGLY
      <Image
        alt={'img'}
        className={cn(
          'w-[27px] h-[26px] rounded-[2px] border ml-3',
          transaction === 'Bought' ? 'border-[#39c4bb82]' : 'border-[#2926FF]'
        )}
        height={50}
        src={imgUrl}
        width={50}
      />
    </div>
  );
};

export default DataList;
