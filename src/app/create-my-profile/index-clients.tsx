'use client';
import BackHomeNavbar from '@/components/atoms/back-home-navbar';
import React from 'react';
import CreateMyProfile from './create-my-profile';

const IndexClients = () => {
  return (
    <div className='pt-7 pb-[30vh] px-4 '>
      <BackHomeNavbar />
      <CreateMyProfile />
    </div>
  );
};

export default IndexClients;
