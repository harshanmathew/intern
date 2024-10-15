'use client';

import { PaginationComp } from '@/components/pagination';
import Image from 'next/image';
import React from 'react';

const DataList = () => (
  <div className='w-full max-w-[500px] bg-container p-5 rounded-[10px]'>
    {Array(6)
      .fill(null)
      .map((_, idx) => (
        <DataItem
          key={idx}
          imgUrl='/temp/trending-project1.jpg'
          transaction='Bought'
        />
      ))}
    <PaginationComp className='mt-5' />
  </div>
);

const DataItem = ({
  transaction,
  imgUrl,
}: {
  transaction: 'Bought' | 'Sold';
  imgUrl: string;
}) => (
  <div className='flex items-center border-b border-white/25 py-3'>
    TE7j...Ez3U <span className='text-secondary'>{transaction}</span> 500 BONE
    of $UGLY
    <Image
      src={imgUrl}
      width={50}
      height={50}
      className='ml-3 rounded'
      alt='Coin'
    />
  </div>
);

export default DataList;
