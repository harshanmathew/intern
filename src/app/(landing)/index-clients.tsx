'use client';
import React from 'react';
import TrendingProjectsCarousel from './trending-projects-carousel';
import ProjectDetailCard from './project-detail-card';
import HighlightsBar from './highlights-bar';
import { Button } from '@/components/ui/button';

const projectDetails: ProjectDetailCardType[] = [
  {
    title: 'Get Laid In Paris',
    createdBy: 'TE7j...Ez3U',
    description:
      'Introducing YACHT, the latest meme coin to hit the crypto scene! Packed with unique incentives and community-driven features.',
    imgUrl: '/temp/trending-project1.jpg',
    marketCap: {
      amount: '$9.02k',
      percent: 9.02,
    },
  },
  {
    title: 'Sharbi Yacht',
    createdBy: 'TE7j...Ez3U',
    description:
      'Introducing YACHT, the latest meme coin to hit the crypto scene! Packed with unique incentives and community-driven features.',
    imgUrl: '/temp/trending-project2.jpg',
    marketCap: {
      amount: '$9.02k',
      percent: 23.02,
    },
  },
  {
    title: 'Lamboland',
    createdBy: 'TE7j...Ez3U',
    description:
      'Introducing YACHT, the latest meme coin to hit the crypto scene! Packed with unique incentives and community-driven features.',
    imgUrl: '/temp/trending-project3.jpg',
    marketCap: {
      amount: '$9.02k',
      percent: 3.02,
    },
  },
  {
    title: 'Get Laid In Bangkok',
    createdBy: 'TE7j...Ez3U',
    description:
      'Introducing YACHT, the latest meme coin to hit the crypto scene! Packed with unique incentives and community-driven features.',
    imgUrl: '/temp/trending-project4.jpg',
    marketCap: {
      amount: '$9.02k',
      percent: 52.02,
    },
  },
];

const extendedProjectDetails = projectDetails.length
  ? [...Array(20)].map(
      (_, index) => projectDetails[index % projectDetails.length]
    )
  : [];

const HomeIndexClients = () => {
  return (
    <div className='pt-7 lg:pt-14 pb-40'>
      <h1 className='ml-4 lg:ml-0'>Top Trending Project</h1>
      <TrendingProjectsCarousel />
      <HighlightsBar />
      <section className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-[30px] place-items-center justify-content-center place-content-center'>
        {extendedProjectDetails.map((item, index) => {
          return (
            item && (
              <ProjectDetailCard
                createdBy={item.createdBy}
                description={item.description}
                imgUrl={item.imgUrl}
                key={index}
                marketCap={item.marketCap}
                title={item.title}
              />
            )
          );
        })}
      </section>
      <div className='flex justify-center w-full'>
        <Button className=''>Load More...</Button>
      </div>
    </div>
  );
};

export default HomeIndexClients;
