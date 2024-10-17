import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import data from '@/lib/how-to-have-fun.json';
import { Button } from './ui/button';

const HowToHaveFunModal = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) => {
  return (
    <Dialog onOpenChange={onOpenChange} open={isOpen}>
      <div>
        <DialogContent
          className={`w-[95%] lg:w-full mx-auto rounded-[10px] max-w-auto bg-container`}
        >
          <DialogHeader>
            <DialogTitle className='text-center'>How to have fun?</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            {data.map((item, index) => (
              <div className='flex-center flex-col mt-2' key={index}>
                <span className='text-2xl text-primary'>Step {item.step}</span>
                <span className='text-lg text-center'>{item.details}</span>
              </div>
            ))}
            <Button className='px-5 h-[40px] flex-center !leading-[0px] text-lg mt-5 block mx-auto text-black'>
              I want to have fun
            </Button>
          </DialogDescription>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default HowToHaveFunModal;
