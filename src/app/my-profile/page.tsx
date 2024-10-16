'use client';

import ProfileBanner from './components/ProfileBanner';
import DataList from './components/DataList';

const ProfilePage = () => {
  return (
    <div className='pt-7 pb-20 px-4'>
      <ProfileBanner
        imgUrl='/temp/trending-project2.jpg'
        username='@USER_NAME'
        walletAddress='0x0da5Aae7F402f4aFbBdd045FaDCd447835983A91'
      />
      <div className='max-w-[900px] grid grid-cols-1 gap-y-10 lg:grid-cols-2 gap-x-5 xl:gap-x-10 place-items-center mx-auto mt-10'>
        <DataList />
        <DataList />
      </div>
    </div>
  );
};

export default ProfilePage;
