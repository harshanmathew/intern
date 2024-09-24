'use client';
import BackHomeNavbar from '@/components/atoms/back-home-navbar';
import React from 'react';
import TokenDetailsBanner from './token-details-banner';
import { Button } from '@/components/ui/button';

const IndexClientsTokenPage = () => {
  return (
    <div className='pt-7'>
      <BackHomeNavbar>
        <Button className='w-[130px] h-[50px] text-white text-lg'>
          Fun Button
        </Button>
      </BackHomeNavbar>
      <TokenDetailsBanner
        contract='Contract: 0x0da5Aae7F402f4aFbBdd045FaDCd447835983A91'
        createdBy='TE7j...Ez3U'
        description="Introducing YACHT, the latest meme coin to hit the crypto scene! Packed with unique incentives and community-driven features. Sharbi Yacht offers more than just investment potential—it's a celebration of crypto culture."
        imgUrl='/temp/trending-project2.jpg'
        ticker='$YACHT'
        title='Sharbi Yacht'
        tokenHighlights={[
          {
            title: 'Marketcap',
            value: '$100.02k',
          },
          {
            title: 'Current Liquidity',
            value: '$20.02k',
          },
          {
            title: '24H Volume',
            value: '5,000 BONE',
            isHighlight: true,
          },
          {
            title: 'Token Supply',
            value: '10,000',
          },
          {
            title: 'Price',
            value: '$ 10.002',
          },
        ]}
      />
    </div>
  );
};

export default IndexClientsTokenPage;
