'use client';
import Input from '@/components/atoms/input';
import Textarea from '@/components/atoms/textarea';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';

const CreateProjectForm = () => {
  const [image, setImage] = useState('');

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className='w-full h-full p-4 lg:p-7 xl:p-10 border border-primary/50 rounded-[10px]'>
      <div className='flex w-full gap-x-7 lg:gap-x-10 xl:gap-x-12'>
        <div>
          <input className='filetype' onChange={onImageChange} type='file' />
          <div className='relative w-full max-w-[367px] h-full max-h-[300px]'>
            <Image
              alt='preview image'
              className='object-cover'
              fill
              src={image}
            />
          </div>
        </div>
        <div className='grow'>
          <Input label='Token Name' maxCharAllowed={30} rootClass='grow' />
          <Input label='Ticker' maxCharAllowed={10} rootClass='grow mt-5' />
          <Input
            label='Token Supply'
            maxCharAllowed={30}
            required={false}
            rootClass='grow mt-5'
          />
        </div>
      </div>
      <Textarea
        inputClass='h-full max-h-[240px]'
        label='Description'
        maxCharAllowed={240}
        rootClass='mt-5'
      />
      <div className='mt-10'>
        <span className='text-lg ml-4'>Cost of deployment: 50 BONE</span>
        <Button
          className='text-2xl w-full font-bold h-[70px] mt-1'
          variant={'secondary'}
        >
          Launch Your Project Now
        </Button>
      </div>
    </div>
  );
};

export default CreateProjectForm;
