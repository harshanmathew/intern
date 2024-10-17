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
import React, { useState, useEffect } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { createToken } from '../actions/api/create';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import isAuth from '@/components/isAuth';
import { useLaunchToken } from '@/hooks/useLaunchToken';
import { TokeDropdown } from '@/components/atoms/token-dropdown';
// import isAuth from '@/components/isAuth';

// Define Zod schema for form validation
const formSchema = z.object({
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
  donate2Percent: z.enum(['yes', 'no']),
  twitterLink: z.string().url('Invalid URL').optional().or(z.literal('')),
  telegramLink: z.string().url('Invalid URL').optional().or(z.literal('')),
  websiteLink: z.string().url('Invalid URL').optional().or(z.literal('')),
  launched: z.boolean().optional(),
});

const CreateProjectForm = () => {
  const [image, setImage] = useState('');
  const [isShowMoreInputs, setShowMoreInputs] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      ticker: '',
      description: '',
      tokenSupply: 0,
      initialBuyAmount: 0,
      bondingCurve: 'beginner',
      donate2Percent: 'yes',
      twitterLink: '',
      telegramLink: '',
      websiteLink: '',
      imageFile: undefined,
    },
  });

  // Prepare launchData by watching form values
  const launchData = {
    name: form.watch('name'),
    symbol: form.watch('ticker'),
    totalSupply: BigInt(form.watch('tokenSupply') * 10 ** 18 || 0),
    curveSize: form.watch('bondingCurve') === 'beginner' ? 0 : 1,
    makeDonation: form.watch('donate2Percent') === 'yes',
    initialBuy: BigInt((form.watch('initialBuyAmount') ?? 0) * 10 ** 18),
  };

  // Use the launchData in the hook
  const {
    isLoading: isLaunchLoading,
    isSuccess: isLaunchSuccess,
    hash,
    execute,
  } = useLaunchToken(launchData);

  // Monitor launch success and call the API when the transaction is confirmed
  useEffect(() => {
    if (isLaunchSuccess && hash) {
      // Call the createToken API with the form data and transaction hash
      createToken({
        ...form.getValues(),
        imageFile: form.getValues().imageFile[0],
        launched: true,
        transactionHash: hash,
      })
        .then((result) => {
          console.log('createToken result:', result);
          // Handle success (e.g., navigate to a success page or display a message)
        })
        .catch((error) => {
          console.error('Failed to create token:', error);
          // Handle error (e.g., display an error message)
        });
    }
  }, [isLaunchSuccess, hash]);

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      form.setValue('imageFile', event.target.files);
    }
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log('Form submission started');
    console.log('Form data:', data);
    setIsSubmitting(true);

    try {
      // Execute without arguments
      await execute();
      console.log('Token launch initiated');
    } catch (error) {
      console.error('Failed to launch token:', error);
      // Handle error (e.g., display an error message)
    } finally {
      setIsSubmitting(false);
      console.log('Form submission ended');
    }
  };

  return (
    <Form {...form}>
      <form
        className='w-full h-full p-4 lg:p-7 xl:p-10 border border-primary/50 rounded-[10px]'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className='flex flex-col lg:flex-row w-full gap-x-7 lg:gap-x-10 xl:gap-x-12'>
          <InputImage
            image={image}
            imgWrapperClass='h-[150px] lg:h-full'
            onImageChange={onImageChange}
            {...form.register('imageFile')}
          />
          <div className='grow mt-7'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      label='Token Name'
                      labelIcon={<TokenNameIcon className='w-[20px] h-auto' />}
                      rootClass='grow'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='ticker'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      label='Ticker'
                      labelIcon={<TickerIcon className='w-[20px] h-auto' />}
                      rootClass='grow mt-5'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='tokenSupply'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      label='Token Supply'
                      labelIcon={
                        <TokenSupplyIcon className='w-[20px] h-auto' />
                      }
                      required={true}
                      rootClass='grow mt-5'
                      type='number'
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(value === '' ? '' : Number(value));
                      }}
                      value={field.value === 0 ? '' : field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  inputClass='h-full max-h-[240px]'
                  label='Description'
                  labelIcon={<DescriptionIcon className='w-[20px] h-auto' />}
                  rootClass='mt-7 lg:mt-10'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Bonding Curve Selection */}
        <FormField
          control={form.control}
          name='bondingCurve'
          render={({ field }) => (
            <FormItem className='mt-7 lg:mt-10'>
              <FormLabel>Click to select Bonding Curve</FormLabel>
              <FormControl>
                <RadioGroup
                  className='flex flex-col sm:flex-row gap-4'
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <div className='flex-1'>
                    <RadioGroupItem
                      className='peer sr-only'
                      id='beginner'
                      value='beginner'
                    />
                    <Label
                      className='flex justify-between items-center p-4 rounded-md border border-primary/50 peer-data-[state=checked]:bg-secondary peer-data-[state=checked]:text-black peer-data-[state=checked]:border-secondary cursor-pointer'
                      htmlFor='beginner'
                    >
                      <span className='text-sm lg:text-lg'>Beginner</span>
                      <div className='flex items-center'>
                        <span className='text-sm lg:text-lg mr-2'>
                          2222 BONE
                        </span>
                        <BoneIcon className='w-[20px] lg:w-[30px] h-auto' />
                      </div>
                    </Label>
                  </div>
                  <div className='flex-1'>
                    <RadioGroupItem
                      className='peer sr-only'
                      id='pro'
                      value='pro'
                    />
                    <Label
                      className='flex justify-between items-center p-4 rounded-md border border-primary/50 peer-data-[state=checked]:bg-secondary peer-data-[state=checked]:text-black peer-data-[state=checked]:border-secondary cursor-pointer'
                      htmlFor='pro'
                    >
                      <span className='text-sm lg:text-lg'>Pro</span>
                      <div className='flex items-center'>
                        <span className='text-sm lg:text-lg mr-2'>
                          9999 BONE
                        </span>
                        <BoneIcon className='w-[20px] lg:w-[30px] h-auto' />
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Initial Buy Input */}
        <FormField
          control={form.control}
          name='initialBuyAmount'
          render={({ field }) => (
            <FormItem className='relative mt-7'>
              <div className='relative'>
                <FormControl>
                  <Input
                    inputClass='placeholder:text-white/50 h-[80px] lg:h-[100px] pb-[30px] pl-3 lg:pl-6 pr-[15%] pt-2'
                    label='Initial Buy'
                    labelClass='text-xs lg:text-xl'
                    labelIcon={<InitialBuyIcon className='w-[20px] h-auto' />}
                    placeholder='Enter the amount'
                    required={false}
                    rootClass='grow'
                    type='number'
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value;
                      field.onChange(value === '' ? '' : Number(value));
                    }}
                    value={field.value === 0 ? '' : field.value}
                  />
                </FormControl>
                <span className='absolute top-1 text-[10px] lg:text-sm left-[50%] lg:left-[25%] text-white/50'>
                  Buy your own token
                </span>
                <span className='absolute left-3 lg:left-6 bottom-[20px] text-[10px] lg:text-xs text-white/50 mt-1'>
                  Balance: -- BONE
                </span>
                <TokeDropdown>
                  <div className='absolute text-[10px] lg:text-3xl flex items-center right-3 lg:right-7 bottom-[30px] cursor-pointer'>
                    BONE <BoneIcon className='ml-2 lg:ml-5 w-[30px] h-auto' />
                  </div>
                </TokeDropdown>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='mt-10'>
          <span className='text-sm lg:text-lg ml-2 lg:ml-4'>
            Cost of deployment: 50 BONE
          </span>
          <Button
            className='text-lg lg:text-2xl w-full font-bold h-[60px] lg:h-[70px] mt-1'
            disabled={isSubmitting || isLaunchLoading}
            type='submit'
            variant={'secondary'}
          >
            {isSubmitting || isLaunchLoading
              ? 'Launching...'
              : 'Launch Your Project Now'}
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
            <FormField
              control={form.control}
              name='twitterLink'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      label='Twitter Link (Optional)'
                      labelIcon={<TwitterIcon className='w-[20px] h-auto' />}
                      placeholder='Add Twitter Link'
                      rootClass='grow mt-8'
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='telegramLink'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      label='Telegram Link (Optional)'
                      labelIcon={<TelegramIcon className='w-[20px] h-auto' />}
                      placeholder='Add Telegram Link'
                      rootClass='grow mt-5'
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='websiteLink'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      label='Website Link (Optional)'
                      labelIcon={<WebsiteIcon className='w-[20px] h-auto' />}
                      placeholder='Add Website Link'
                      rootClass='grow mt-5'
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Donate 2% Supply Selection */}
            <FormField
              control={form.control}
              name='donate2Percent'
              render={({ field }) => (
                <FormItem className='mt-7 lg:mt-10'>
                  <FormLabel>Donate 2% Supply</FormLabel>
                  <FormControl>
                    <RadioGroup
                      className='flex flex-col sm:flex-row gap-4'
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <div className='flex-1'>
                        <RadioGroupItem
                          className='peer sr-only'
                          id='donateYes'
                          value='yes'
                        />
                        <Label
                          className='flex justify-between items-center p-4 rounded-md border border-primary/50 peer-data-[state=checked]:bg-secondary peer-data-[state=checked]:text-black peer-data-[state=checked]:border-secondary cursor-pointer'
                          htmlFor='donateYes'
                        >
                          <span className='text-sm lg:text-lg'>
                            Yes, I want the benefits
                          </span>
                        </Label>
                      </div>
                      <div className='flex-1'>
                        <RadioGroupItem
                          className='peer sr-only'
                          id='donateNo'
                          value='no'
                        />
                        <Label
                          className='flex justify-between items-center p-4 rounded-md border border-primary/50 peer-data-[state=checked]:bg-secondary peer-data-[state=checked]:text-black peer-data-[state=checked]:border-secondary cursor-pointer'
                          htmlFor='donateNo'
                        >
                          <span className='text-sm lg:text-lg'>
                            No, I don't need them
                          </span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
      </form>
    </Form>
  );
};

export default isAuth(CreateProjectForm);
