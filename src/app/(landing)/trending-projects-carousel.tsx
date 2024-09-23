import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import TrendingProjectCard from './trending-project-card';

const tempTrendingProjects: TrendingProjectCardType[] = [
  {
    title: 'Get Laid In Paris',
    caption: '($PARIS)',
    description:
      'Introducing YACHT, the latest meme coin to hit the crypto scene! Packed with unique incentives and community-driven features.',
    imgUrl: '/temp/trending-project1.jpg',
  },
  {
    title: 'Sharbi Yacht',
    caption: '($YACHT)',
    description:
      'Introducing YACHT, the latest meme coin to hit the crypto scene! Packed with unique incentives and community-driven features.',
    imgUrl: '/temp/trending-project2.jpg',
  },
  {
    title: 'Lamboland',
    caption: '($LAMBOOO)',
    description:
      'Introducing YACHT, the latest meme coin to hit the crypto scene! Packed with unique incentives and community-driven features.',
    imgUrl: '/temp/trending-project3.jpg',
  },
  {
    title: 'Get Laid In Bangkok',
    caption: '($BANG)',
    description:
      'Introducing YACHT, the latest meme coin to hit the crypto scene! Packed with unique incentives and community-driven features.',
    imgUrl: '/temp/trending-project4.jpg',
  },
];

const modifiedTrendingProjects = [...Array(10)].map(
  (_, index) => tempTrendingProjects[index % tempTrendingProjects.length]
);

const TrendingProjectsCarousel = () => {
  return (
    <Carousel
      className='w-full mt-5'
      opts={{
        align: 'start',
      }}
    >
      <CarouselContent className=''>
        {modifiedTrendingProjects.map((item, index) => (
          <CarouselItem className='basis-[300px] pl-0 ml-4' key={index}>
            <TrendingProjectCard
              caption={item.caption}
              description={item.description}
              imgUrl={item.imgUrl}
              title={item.title}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant='ghost' />
      <CarouselNext variant='ghost' />
    </Carousel>
  );
};

export default TrendingProjectsCarousel;
