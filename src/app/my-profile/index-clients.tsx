import BackHomeNavbar from '@/components/atoms/back-home-navbar';
import React from 'react';
import UserProfileBanner from './user-profile-banner';
import DataList from './data-list';

const IndexClientsProfilePage = () => {
  return (
    <div className='pt-7 pb-20'>
      <BackHomeNavbar />
      <UserProfileBanner
        imgUrl='/temp/trending-project2.jpg'
        username='@USER_NAME'
        walletAddress='0x0da5Aae7F402f4aFbBdd045FaDCd447835983A91'
      />

      {/* -----------------Past Coins Held and Coins Created------------- */}
      <div className='max-w-[900px] grid grid-cols-2 place-items-center mx-auto mt-10'>
        <div>
          <h2 className='uppercase text-2xl text-center mb-2'>
            Past Coins Held
          </h2>
          <DataList />
        </div>
        <div>
          <h2 className='uppercase text-2xl text-center mb-2'>Coins Created</h2>
          <DataList />
        </div>
      </div>
    </div>
  );
};

export default IndexClientsProfilePage;
