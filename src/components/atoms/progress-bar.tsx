import { cn } from '@/lib/utils';
import React from 'react';

type ProgressBarType = {
  className?: string;
  percent: number;
};

const ProgressBar: React.FC<ProgressBarType> = ({ percent, className }) => {
  return (
    <div
      className={cn(
        'w-full bg-white/10 rounded-full h-[10px] overflow-hidden',
        className
      )}
    >
      <div
        className='bg-primary h-[10px] rounded-full w-0 transition-all'
        style={{ width: `${percent}%` }}
      />
    </div>
  );
};

export default ProgressBar;
