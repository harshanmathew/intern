'use client';
import { TelegramIcon, TwitterIcon, WebsiteIcon } from '@/lib/index-icons';
import { CopyIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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
  socialLinks: {
    twitter: string;
    website: string;
    telegram: string;
  };
};

const TokenDetailsBanner: React.FC<TokenDetailsBannerType> = ({
  imgUrl,
  title,
  createdBy,
  ticker,
  contract,
  description,
  tokenHighlights,
  socialLinks,
}) => {
  return (
    <div className='w-full flex flex-col lg:flex-row gap-x-5 p-3 lg:p-[24px] min-h-[350px] rounded-[10px] bg-background border border-primary/50 mt-4'>
      <div className='relative rounded-[10px] w-full h-[200px] lg:h-[290px] max-w-[309px] overflow-hidden shrink-0'>
        <Image alt='token img' className='object-cover' fill src={imgUrl} />
      </div>
      <div>
        <div className='flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row items-center justify-between mt-3 lg:mt-0'>
          <h1 className='text-2xl lg:text-3xl font-bold'>{title}</h1>
          <div className='flex items-center gap-x-2'>
            <div className='h-6 px-4 py-1 text-sm flex-center rounded-[5px] bg-secondary'>
              Trending
            </div>
            <div className='flex gap-x-2 items-center cursor-pointer'>
              <Link href={socialLinks.twitter}>
                <TwitterIcon className='w-[20px] h-[20px]' />
              </Link>
              <Link href={socialLinks.website}>
                <WebsiteIcon className='w-[20px] h-[20px]' />
              </Link>
              <Link href={socialLinks.telegram}>
                <TelegramIcon className='w-[20px] h-[20px]' />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className='text-xs lg:text-sm flex gap-x-2 mt-5'>
            <span className='opacity-50'>Created By:</span>{' '}
            <span className='text-primary underline'>{createdBy}</span>
            <span className='opacity-50'>Ticker:</span>{' '}
            <span className='text-primary underline'>{ticker}</span>
          </div>
          <div className='text-sm flex items-center gap-x-2 mt-3'>
            <span className='opacity-50'>Contract:</span>
            <span className='font-bold truncate'>{contract}</span>
            <CopyIcon className='w-[20px] shrink-0 h-auto text-primary cursor-pointer' />
          </div>
        </div>
        <p className='text-sm lg:text-lg opacity-80 mt-4'>{description}</p>

        <div className='flex w-full gap-x-3 lg:gap-x-4 gap-y-2 mt-[30px] flex-wrap'>
          {tokenHighlights.map((item, index) => (
            <TokenDetailBox key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TokenDetailsBanner;
