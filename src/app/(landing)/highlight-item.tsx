import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const HighlightItem: React.FC<HighlightItemType> = ({
  imgUrl,
  createdBy,
  counts,
  token,
  transaction,
}) => {
  return (
    <div className='text-[15px] flex items-center shrink-0'>
      <span>{createdBy}</span>
      <span
        className={cn(
          'ml-2',
          transaction === 'Bought' ? 'text-[#39c4bb]' : 'text-[#FF0000]'
        )}
      >
        {transaction}
      </span>
      <span className='ml-2 shrink-0'>
        {counts} Bone of {token}
      </span>
      <Image
        alt={'highlight'}
        className={cn(
          'w-[27px] h-[26px] rounded-[2px] border ml-3',
          transaction === 'Bought' ? 'border-[#39c4bb82]' : 'border-[#FF0000]'
        )}
        height={50}
        src={imgUrl}
        width={50}
      />
    </div>
  );
};

export default HighlightItem;
