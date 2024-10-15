import ProgressBar from '@/components/atoms/progress-bar';
import Image from 'next/image';
import Link from 'next/link';

const ProjectDetailCard: React.FC<ProjectDetailCardType> = ({
  createdBy,
  description,
  imgUrl,
  title,
  marketCap,
}) => {
  return (
    <Link href={`/start/${title.split(' ').join('-').toLowerCase()}`}>
      <div className='w-full max-w-[90%] mx-auto min-h-[470px] rounded-[10px] overflow-hidden bg-background border border-primary/50'>
        <div className='relative w-full h-auto lg:h-[244px]'>
          <Image
            alt={title}
            className='object-cover !relative'
            fill
            src={imgUrl}
          />
        </div>
        <div className='p-3 pb-5'>
          <h5 className='text-base font-bold'>{title}</h5>
          <div className='mt-1 text-xs'>
            Created By : <span className='text-primary'>{createdBy}</span>
          </div>
          <p className='text-xs opacity-80 mt-2.5'>{description}</p>
          <div className='text-xs mt-4'>
            <span className='opacity-80'>MarketPlace :</span>{' '}
            <span className='font-bold ml-1'>{marketCap.amount}</span>{' '}
            <span className='opacity-80 ml-1'>({marketCap.percent}%)</span>
          </div>
          <ProgressBar className='mt-2' percent={marketCap.percent} />
        </div>
      </div>
    </Link>
  );
};

export default ProjectDetailCard;
