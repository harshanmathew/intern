import { ImageInputIcon } from '@/lib/index-icons';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const InputImage: React.FC<{
  onImageChange?: (event: any) => void;
  image?: string;
  rootClass?: string;
  imgWrapperClass?: string;
}> = ({ image, onImageChange, rootClass, imgWrapperClass }) => {
  return (
    <label className={cn('grow cursor-pointer max-w-[350px]', rootClass)}>
      <div className='flex items-center pb-1 pl-2'>
        <ImageInputIcon className='w-[20px] h-auto text-white' />
        <span className='text-xl ml-2'>Image*</span>
      </div>
      <input className='filetype hidden' onChange={onImageChange} type='file' />
      <div
        className={cn(
          'relative w-full overflow-hidden max-w-[350px] h-full max-h-[260px] border-2 border-primary/50 rounded-[10px]',
          imgWrapperClass
        )}
      >
        {image && (
          <Image
            alt='preview image'
            className='object-contain'
            fill
            src={image || ''}
          />
        )}
        {!image && (
          <div className='absolute text-sm flex-center flex-col inset-0'>
            <ImageInputIcon className='text-[#FF00FF] w-[100px] h-auto mb-10' />
            <span>JPEG/PNG/GIF/WEBP</span>
            <span className='text-white/50'>Less than 3 MB</span>
          </div>
        )}
      </div>
    </label>
  );
};

export default InputImage;
