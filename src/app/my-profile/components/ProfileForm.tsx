'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import BackHomeNavbar from '@/components/atoms/back-home-navbar';
import Input from '@/components/atoms/input';
import InputImage from '@/components/atoms/input-image';
import { UserNameIcon } from '@/lib/index-icons';
import { useRouter } from 'next/navigation';
import isAuth from '@/components/isAuth';
import { me } from '@/app/actions/api/me';
import { updateUser } from '@/app/actions/api/updateUser';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

// Define Zod schema for form validation
const formSchema = z.object({
  username: z
    .string()
    .min(1, 'Username is required')
    .max(30, 'Max 30 characters allowed'),
  profileImage: z.any().optional(),
});

const ProfileForm = ({ action }: { action: string }) => {
  const router = useRouter();
  const isEditMode = action === 'edit';

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      profileImage: undefined,
    },
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userData = await me();
        if (userData) {
          form.setValue('username', userData.username);
          form.setValue('profileImage', userData.profileImage);
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchProfileData();
  }, [form]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const result = await updateUser({
        username: data.username,
        profileImage:
          data.profileImage instanceof File ? data.profileImage : null,
      });
      console.log('Profile updated:', result);
      router.push('/my-profile');
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  return (
    <div className='pt-7 pb-[30vh]'>
      <BackHomeNavbar navLink='/my-profile' navText='My Profile' />
      <div className='max-w-[600px] mx-auto bg-black/90 p-4 py-6 border border-primary/50 rounded-[10px]'>
        <h1 className='text-2xl font-bold text-center uppercase'>
          {isEditMode ? 'Edit your profile' : 'Create your profile'}
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='profileImage'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputImage
                      image={
                        field.value instanceof File
                          ? URL.createObjectURL(field.value)
                          : field.value || ''
                      }
                      imgWrapperClass='w-[180px] h-[180px]'
                      onImageChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          field.onChange(file);
                        }
                      }}
                      rootClass='mt-7 block max-w-fit mx-auto grow-0'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      label='Username'
                      labelIcon={<UserNameIcon className='w-[20px]' />}
                      rootClass='mt-7'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              className='mt-5 w-full bg-primary text-white py-2 rounded-lg'
              type='submit'
            >
              {isEditMode ? 'Update Profile' : 'Create Profile'}
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default isAuth(ProfileForm);
