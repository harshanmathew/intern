import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const TrendingProjectCard: React.FC<TrendingProjectCardType> = ({
  caption,
  description,
  imgUrl,
  title,
}) => {
  return (
    <div className='relative w-[293px] h-[286px] rounded-[10px] overflow-hidden group border border-primary/50 cursor-pointer'>
      <Image
        alt={title}
        className='object-cover opacity-60'
        fill
        src={imgUrl}
      />
      <div className='absolute bottom-0 left-0 right-0 px-4 pt-4 pb-5'>
        <span className='block text-xl font-bold leading-none'>{title}</span>
        <span className='block text-xl font-bold text-primary leading-none mt-1'>
          {caption}
        </span>
        <div className='hidden group-hover:block mt-2'>
          <p className='text-xs text-white/80 '>{description}</p>
          <Button className='mt-2 flex-center text-base font-medium'>
            Click to get laid
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrendingProjectCard;
