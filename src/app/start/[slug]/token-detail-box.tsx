import { cn } from '@/lib/utils';
import React from 'react';

const TokenDetailBox: React.FC<TokenDetailBoxType> = ({
  title,
  value,
  isHighlight,
}) => {
  return (
    <div
      className={cn(
        'px-2 py-1 flex flex-col justify-evenly max-w-[150px] h-[50px] grow rounded-[5px] border border-primary/50',
        isHighlight && 'bg-secondary/50 border-secondary'
      )}
    >
      <span className={cn('text-xs opacity-50', isHighlight && 'opacity-100')}>
        {title}
      </span>
      <span className='text-sm font-bold'>{value}</span>
    </div>
  );
};

export default TokenDetailBox;
