import Input from '@/components/atoms/input';
import InputImage from '@/components/atoms/input-image';
import { UserNameIcon } from '@/lib/index-icons';
import React, { useState } from 'react';

const CreateMyProfile = () => {
  const [image, setImage] = useState('');

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className='max-w-[600px] h-full mx-auto max-h-[700px] bg-black/90 p-4 py-6 border border-primary/50 rounded-[10px]'>
      <h1 className='uppercase text-2xl leading-none font-bold text-center'>
        Create your user profile
      </h1>
      <p className='text-lg mt-2 text-center'>
        and discover your benefits of Sharbi.
        <span className='text-primary'>fun</span> rankings
      </p>
      <InputImage
        image={image}
        imgWrapperClass='w-[180px] h-[180px]'
        onImageChange={onImageChange}
        rootClass='mt-7 block mx-auto w-[180px]'
      />
      <Input
        label='Username'
        labelIcon={<UserNameIcon className='w-[20px] h-auto' />}
        maxCharAllowed={30}
        rootClass='mt-7'
      />
    </div>
  );
};

export default CreateMyProfile;
