'use client';
import BackHomeNavbar from '@/components/atoms/back-home-navbar';
import React from 'react';
import TokenDetailsBanner from './token-details-banner';
import { Button } from '@/components/ui/button';
import TradeNowComponent from './trade-now-component';
import TradingHistory from './trading-history';
import HolderDistribution from './holder-distribution';
import ProgressBar from '@/components/atoms/progress-bar';

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
        socialLinks={{
          website: '',
          telegram: '',
          twitter: '',
        }}
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
      <div className='grid grid-cols-[auto_500px] place-items-center gap-x-5 mt-5'>
        <div className='grow' />
        <TradeNowComponent />
      </div>
      <div className='grid grid-cols-[auto_500px] place-items-start gap-x-5 mt-5 pb-[40vh]'>
        <TradingHistory />
        <div>
          <div className='pb-5'>
            <h4 className='text-xl text-white font-bold leading-none'>
              Bonding Curve Progress: 23%
            </h4>
            <ProgressBar className='mt-4' percent={40} />
            <p className='text-xs mt-3'>
              There are 7,000 YACHT still available for sale in the bonding
              curve and there are 2,300 BONE in the bonding curve.When the
              market cap reaches $400,000 all the liquidity from the bonding
              curve will be deposited into Shibaswap and burned. Progression
              increases as the price goes up.
            </p>
          </div>
          <HolderDistribution />
        </div>
      </div>
    </div>
  );
};

export default IndexClientsTokenPage;
