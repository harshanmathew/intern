'use client';

import { useEffect, useState } from 'react';
import ProfileBanner from './components/ProfileBanner';
import DataList from './components/DataList';
import isAuth from '@/components/isAuth';
import { me } from '../actions/api/me';

const ProfilePage = () => {
  const [meData, setMeData] = useState<{
    name: string;
    username: string;
    address: string;
    profileImage: string;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await me();
      if (data) {
        setMeData(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='pt-7 pb-20 px-4'>
      <ProfileBanner
        imgUrl={meData?.profileImage || '/temp/trending-project2.jpg'}
        username={meData?.username || ''}
        walletAddress={meData?.address || ''}
      />
      <div className='max-w-[900px] grid grid-cols-1 gap-y-10 lg:grid-cols-2 gap-x-5 xl:gap-x-10 place-items-center mx-auto mt-10'>
        <DataList />
        <DataList />
      </div>
    </div>
  );
};

export default isAuth(ProfilePage);
