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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { createToken } from '../actions/create';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Define Zod schema for form validation
const schema = z.object({
  name: z
    .string()
    .min(1, 'Token Name is required')
    .max(30, 'Max 30 characters allowed'),
  ticker: z
    .string()
    .min(1, 'Ticker is required')
    .max(10, 'Max 10 characters allowed'),
  description: z
    .string()
    .min(1, 'Description is required')
    .max(240, 'Max 240 characters allowed'),
  imageFile: z
    .any()
    .refine((files) => files?.length === 1, 'Image is required'),
  tokenSupply: z
    .number({ invalid_type_error: 'Token Supply is required' })
    .positive('Token Supply must be positive'),
  initialBuyAmount: z.number().positive().optional(),
  bondingCurve: z.enum(['beginner', 'pro'], {
    errorMap: () => ({ message: 'Select a bonding curve' }),
  }),
  twitterLink: z.string().url('Invalid URL').optional(),
  telegramLink: z.string().url('Invalid URL').optional(),
  websiteLink: z.string().url('Invalid URL').optional(),
  launched: z.boolean().optional(),
});

const CreateProjectForm = () => {
  const [isShowMoreInputs, setShowMoreInputs] = useState(false);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      await createToken({
        name: data.name,
        ticker: data.ticker,
        description: data.description,
        imageFile: data.imageFile[0],
        tokenSupply: data.tokenSupply,
        initialBuyAmount: data.initialBuyAmount,
        bondingCurve: data.bondingCurve,
        twitterLink: data.twitterLink,
        telegramLink: data.telegramLink,
        websiteLink: data.websiteLink,
        launched: false,
      });
      // Handle success (e.g., navigate to a success page or display a message)
    } catch (error) {
      console.error('Failed to create token:', error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex w-full gap-x-7 lg:gap-x-10 xl:gap-x-12'>
        <InputImage
          image='' // Replace with actual image preview logic
          onImageChange={() => {}} // Replace with actual image change handler
          {...register('imageFile')}
        />
        <div className='grow'>
          <Input
            label='Token Name'
            labelIcon={<TokenNameIcon className='w-[20px] h-auto' />}
            maxCharAllowed={30}
            rootClass='grow'
            {...register('name')}
          />
          <Input
            label='Ticker'
            labelIcon={<TickerIcon className='w-[20px] h-auto' />}
            maxCharAllowed={10}
            rootClass='grow mt-5'
            {...register('ticker')}
          />
          <Input
            label='Token Supply'
            labelIcon={<TokenSupplyIcon className='w-[20px] h-auto' />}
            maxCharAllowed={30}
            rootClass='grow mt-5'
            type='number'
            {...register('tokenSupply', { valueAsNumber: true })}
          />
        </div>
      </div>
      <Textarea
        inputClass='h-full max-h-[240px]'
        label='Description'
        labelIcon={<DescriptionIcon className='w-[20px] h-auto' />}
        maxCharAllowed={240}
        rootClass='mt-10'
        {...register('description')}
      />

      {/* Bonding Curve Selection */}
      <div className='mt-10'>
        <Label className='mb-2 block'>Click to select Bonding Curve</Label>
        <RadioGroup
          className='flex gap-4'
          {...register('bondingCurve')}
          defaultValue='beginner'
        >
          <div className='flex-1'>
            <RadioGroupItem
              className='peer sr-only'
              id='beginner'
              value='beginner'
            />
            <Label
              className='flex justify-between items-center p-4 rounded-md border border-primary/50 peer-data-[state=checked]:bg-secondary peer-data-[state=checked]:text-secondary-foreground cursor-pointer'
              htmlFor='beginner'
            >
              <span>Beginner</span>
              <span>2222 BONE</span>
              <BoneIcon className='ml-5 w-[30px] h-auto' />
            </Label>
          </div>
          <div className='flex-1'>
            <RadioGroupItem className='peer sr-only' id='pro' value='pro' />
            <Label
              className='flex justify-between items-center p-4 rounded-md border border-primary/50 peer-data-[state=checked]:bg-secondary peer-data-[state=checked]:text-secondary-foreground cursor-pointer'
              htmlFor='pro'
            >
              <span>Pro</span>
              <span>9999 BONE</span>
              <BoneIcon className='ml-5 w-[30px] h-auto' />
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Initial Buy Input */}
      <div className='relative mt-7'>
        <span className='absolute top-0 left-[15%] text-white/50'>
          Buy your own token
        </span>
        <Input
          inputClass='placeholder:text-white/50 h-[100px] pb-[30px] pl-6 pr-[15%] pt-2'
          label='Initial Buy'
          labelIcon={<InitialBuyIcon className='w-[20px] h-auto' />}
          placeholder='Enter the amount'
          rootClass='grow'
          type='number'
          {...register('initialBuyAmount', { valueAsNumber: true })}
        />
        <span className='absolute left-6 bottom-[20px] text-xs text-white/50 mt-1'>
          Balance: -- BONE
        </span>
        <div className='absolute text-3xl flex items-center right-7 bottom-[30px] cursor-pointer'>
          Bone <BoneIcon className='ml-5 w-[30px] h-auto' />
        </div>
      </div>

      {/* Submit Button */}
      <div className='mt-10'>
        <span className='text-lg ml-4'>Cost of deployment: 50 BONE</span>
        <Button
          className='text-2xl w-full font-bold h-[70px] mt-1'
          type='submit'
          variant={'secondary'}
        >
          Launch Your Project Now
        </Button>
      </div>

      {/* Show More Options */}
      <div
        className='text-2xl flex items-center mt-7 cursor-pointer'
        onClick={() => setShowMoreInputs((prev) => !prev)}
        role='button'
      >
        <ShowMoreIcon
          className={cn(
            'w-[30px] h-auto mr-3 text-white',
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
            rootClass='grow mt-8'
            {...register('twitterLink')}
          />
          <Input
            label='Telegram Link'
            labelIcon={<TelegramIcon className='w-[20px] h-auto' />}
            placeholder='Add More Credibility'
            rootClass='grow mt-5'
            {...register('telegramLink')}
          />
          <Input
            label='Website Link'
            labelIcon={<WebsiteIcon className='w-[20px] h-auto' />}
            placeholder='Add More Credibility'
            rootClass='grow mt-5'
            {...register('websiteLink')}
          />
        </div>
      )}
    </form>
  );
};

export default CreateProjectForm;
