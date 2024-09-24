'use client';
// import { GlobalIcon, TelegramIcon, TwitterIcon } from '@/lib/index-icons';
import { CopyIcon } from 'lucide-react';
import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';
import TokenDetailBox from './token-detail-box';

type TokenDetailsBannerType = {
  imgUrl: string;
  title: string;
  createdBy: string;
  ticker: string;
  contract: string;
  description: string;
  tokenHighlights: {
    title: string;
    value: string;
    isHighlight?: boolean;
  }[];
  // socialLinks: {
  //   twitter: string;
  //   discord: string;
  //   telegram: string;
  // };
};

const TokenDetailsBanner: React.FC<TokenDetailsBannerType> = ({
  imgUrl,
  title,
  createdBy,
  ticker,
  contract,
  description,
  tokenHighlights,
}) => {
  return (
    <div className='w-full flex gap-x-5 p-[24px] min-h-[350px] rounded-[10px] bg-background border border-primary/50 mt-4'>
      <div className='relative rounded-[10px] w-full h-[290px] max-w-[309px] overflow-hidden shrink-0'>
        <Image alt='token img' className='object-cover' fill src={imgUrl} />
      </div>
      <div>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold'>{title}</h1>
          <div>
            <div className='h-6 px-4 py-1 text-sm flex-center rounded-[5px] bg-secondary'>
              Trending
            </div>
            {/* <div className='flex gap-x-2 items-center cursor-pointer'>
              <Link href={socialLinks.twitter}>
                <TwitterIcon className='w-[20px] h-auto' />
              </Link>
              <Link href={socialLinks.discord}>
                <GlobalIcon className='w-[20px] h-auto' />
              </Link>
              <Link href={socialLinks.telegram}>
                <TelegramIcon className='w-[20px] h-auto' />
              </Link>
            </div> */}
          </div>
        </div>
        <div>
          <div className='text-sm flex gap-x-2 mt-5'>
            <span className='opacity-50'>Created By:</span>{' '}
            <span className='text-primary underline'>{createdBy}</span>
            <span className='opacity-50'>Ticker:</span>{' '}
            <span className='text-primary underline'>{ticker}</span>
          </div>
          <div className='text-sm flex items-center gap-x-2 mt-2'>
            <span className='opacity-50'>Contract : </span>{' '}
            <span className='font-bold'>{contract}</span>
            <CopyIcon className='w-[20px] h-auto text-primary cursor-pointer' />
          </div>
        </div>
        <p className='text-lg opacity-80 mt-4'>{description}</p>

        <div className='flex w-full gap-x-4 gap-y-2 mt-[30px] flex-wrap'>
          {tokenHighlights.map((item, index) => (
            <TokenDetailBox key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TokenDetailsBanner;
