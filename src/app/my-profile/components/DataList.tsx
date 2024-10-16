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
          imgUrl='/temp/trending-project1.jpg'
          key={idx}
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
  <div className='flex lg:flex-row items-center border-b border-white/25 py-3'>
    <div className=''>
      TE7j...Ez3U <span className='text-secondary'>{transaction}</span> 500 BONE
      of $UGLY
    </div>
    <Image
      alt='Coin'
      className='lg:ml-3 rounded lg:mt-5'
      height={50}
      src={imgUrl}
      width={50}
    />
  </div>
);

export default DataList;
