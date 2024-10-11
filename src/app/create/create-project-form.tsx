'use client';
import Input from '@/components/atoms/input';
import InputImage from '@/components/atoms/input-image';
import Textarea from '@/components/atoms/textarea';
import { Button } from '@/components/ui/button';
import {
  BoneIcon,
  DescriptionIcon,
  InitialBuyIcon,
  ShowMoreIcon,
  TelegramIcon,
  TickerIcon,
  TokenNameIcon,
  TokenSupplyIcon,
  TwitterIcon,
  WebsiteIcon,
} from '@/lib/index-icons';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const CreateProjectForm = () => {
  const [image, setImage] = useState('');
  const [isShowMoreInputs, setShowMoreInputs] = useState(false);

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className='w-full h-full p-4 lg:p-7 xl:p-10 border border-primary/50 rounded-[10px]'>
      <div className='flex flex-col lg:flex-row w-full gap-x-7 lg:gap-x-10 xl:gap-x-12'>
        <InputImage
          image={image}
          imgWrapperClass='h-[150px] lg:h-full'
          onImageChange={onImageChange}
        />
        <div className='grow mt-7'>
          <Input
            label='Token Name'
            labelIcon={<TokenNameIcon className='w-[20px] h-auto' />}
            maxCharAllowed={30}
            rootClass='grow'
          />
          <Input
            label='Ticker'
            labelIcon={<TickerIcon className='w-[20px] h-auto' />}
            maxCharAllowed={10}
            rootClass='grow mt-5'
          />
          <Input
            label='Token Supply'
            labelIcon={<TokenSupplyIcon className='w-[20px] h-auto' />}
            maxCharAllowed={30}
            required={false}
            rootClass='grow mt-5'
          />
        </div>
      </div>
      <Textarea
        inputClass='h-full max-h-[240px]'
        label='Description'
        labelIcon={<DescriptionIcon className='w-[20px] h-auto' />}
        maxCharAllowed={240}
        rootClass='mt-7 lg:mt-10'
      />
      <div className='relative mt-7'>
        <span className='absolute top-1 text-[10px] lg:text-sm left-[50%] lg:left-[25%] text-white/50'>
          Buy your own token
        </span>
        <Input
          inputClass='placeholder:text-white/50 h-[80px] lg:h-[100px] pb-[30px] pl-3 lg:pl-6 pr-[15%] pt-2'
          label='Initial Buy'
          labelClass='text-xs lg:text-xl'
          labelIcon={<InitialBuyIcon className='w-[20px] h-auto' />}
          placeholder='Enter the amount'
          required={false}
          rootClass='grow'
        />
        <span className='absolute left-3 lg:left-6 bottom-[20px] text-[10px] lg:text-xs text-white/50 mt-1'>
          Balance: -- BONE
        </span>
        <div className='absolute text-[10px] lg:text-3xl flex items-center right-3 lg:right-7 bottom-[30px] cursor-pointer'>
          Bone <BoneIcon className='ml-2 lg:ml-5 w-[30px] h-auto' />
        </div>
      </div>

      <div className='mt-10'>
        <span className='text-sm lg:text-lg ml-2 lg:ml-4'>
          Cost of deployment: 50 BONE
        </span>
        <Button
          className='text-lg lg:text-2xl w-full font-bold h-[60px] lg:h-[70px] mt-1'
          variant={'secondary'}
        >
          Launch Your Project Now
        </Button>
      </div>

      <div
        className='text-md lg:text-2xl flex items-center mt-7 cursor-pointer'
        onClick={() => setShowMoreInputs((prev) => !prev)}
        role='button'
      >
        <ShowMoreIcon
          className={cn(
            'w-[20px] lg:w-[30px] h-auto mr-3 text-white',
            isShowMoreInputs && 'text-primary'
          )}
        />{' '}
        {isShowMoreInputs ? 'Hide' : 'Show'} More Options{' '}
        <ChevronDown
          className={cn(
            'ml-2 w-[30px] h-auto mt-1',
            isShowMoreInputs ? 'rotate-180' : ''
          )}
        />{' '}
      </div>

      {isShowMoreInputs && (
        <div>
          <Input
            label='Twitter Link'
            labelIcon={<TwitterIcon className='w-[20px] h-auto' />}
            placeholder='Add More Credibility'
            required={false}
            rootClass='grow mt-8'
          />
          <Input
            label='Telegram Link'
            labelIcon={<TelegramIcon className='w-[20px] h-auto' />}
            placeholder='Add More Credibility'
            required={false}
            rootClass='grow mt-5'
          />
          <Input
            label='Website Link'
            labelIcon={<WebsiteIcon className='w-[20px] h-auto' />}
            placeholder='Add More Credibility'
            required={false}
            rootClass='grow mt-5'
          />
        </div>
      )}
    </div>
  );
};

export default CreateProjectForm;
