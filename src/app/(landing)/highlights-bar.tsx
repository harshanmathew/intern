import React from 'react';
import HighlightItem from './highlight-item';

const HighlightsBar = () => {
  return (
    <div className='relative overflow-hidden w-full h-[50px] flex items-center justify-evenly border border-[#292D32] rounded-[10px] mt-10'>
      <div className='animate-marquee flex items-center gap-x-10 shrink-0 whitespace-nowrap'>
        <HighlightItem
          counts={250}
          createdBy='TE7j...Ez3U'
          imgUrl='/temp/trending-project4.jpg'
          token='$PARIS'
          transaction='Bought'
        />
        <HighlightItem
          counts={250}
          createdBy='TE7j...Ez3U'
          imgUrl='/temp/trending-project1.jpg'
          token='$LUNAR'
          transaction='Bought'
        />
        <HighlightItem
          counts={250}
          createdBy='TE7j...Ez3U'
          imgUrl='/temp/trending-project4.jpg'
          token='$UGLY'
          transaction='Sold'
        />
      </div>
      <div className='animate-marquee2 absolute left-10 flex items-center gap-x-10 shrink-0 whitespace-nowrap'>
        <HighlightItem
          counts={250}
          createdBy='TE7j...Ez3U'
          imgUrl='/temp/trending-project4.jpg'
          token='$PARIS'
          transaction='Bought'
        />
        <HighlightItem
          counts={250}
          createdBy='TE7j...Ez3U'
          imgUrl='/temp/trending-project1.jpg'
          token='$LUNAR'
          transaction='Bought'
        />
        <HighlightItem
          counts={250}
          createdBy='TE7j...Ez3U'
          imgUrl='/temp/trending-project4.jpg'
          token='$UGLY'
          transaction='Sold'
        />
      </div>
    </div>
  );
};

export default HighlightsBar;
