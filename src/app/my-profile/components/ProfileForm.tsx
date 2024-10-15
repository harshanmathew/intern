'use client';

import React, { useEffect, useState } from 'react';
import BackHomeNavbar from '@/components/atoms/back-home-navbar';
import Input from '@/components/atoms/input';
import InputImage from '@/components/atoms/input-image';
import { UserNameIcon } from '@/lib/index-icons';
import { useRouter } from 'next/navigation';

interface ProfileData {
  username: string;
  image: string;
}

const ProfileForm = ({ action }: { action: string }) => {
  const router = useRouter();
  const isEditMode = action === 'edit';

  const [formData, setFormData] = useState<ProfileData>({
    username: '',
    image: '',
  });

  // Mock API call to fetch profile data for edit mode
  useEffect(() => {
    if (isEditMode) {
      const fetchProfileData = async () => {
        const data = {
          username: 'JohnDoe',
          image: '',
        };
        setFormData(data);
      };
      fetchProfileData();
    }
  }, [isEditMode]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target?.files;

    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        image: URL.createObjectURL(files[0]),
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      isEditMode ? 'Updated profile data:' : 'Created new profile:',
      formData
    );
    router.push('/my-profile');
  };

  return (
    <div className='pt-7 pb-[30vh]'>
      <BackHomeNavbar />
      <div className='max-w-[600px] mx-auto bg-black/90 p-4 py-6 border border-primary/50 rounded-[10px]'>
        <h1 className='text-2xl font-bold text-center uppercase'>
          {isEditMode ? 'Edit your profile' : 'Create your profile'}
        </h1>
        <form onSubmit={handleSubmit}>
          <InputImage
            image={formData.image}
            onImageChange={handleImageChange}
            imgWrapperClass='w-[180px] h-[180px]'
            rootClass='mt-7 block mx-auto'
          />
          <Input
            name='username'
            label='Username'
            labelIcon={<UserNameIcon className='w-[20px]' />}
            value={formData.username}
            onChange={handleInputChange}
            rootClass='mt-7'
          />
          <button
            type='submit'
            className='mt-5 w-full bg-primary text-white py-2 rounded-lg'
          >
            {isEditMode ? 'Update Profile' : 'Create Profile'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
