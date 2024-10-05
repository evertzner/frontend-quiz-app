import { useStore } from '@nanostores/react';
import { totalScore } from '../utils/store';
import IconAccessibility from '../icons/Accessibility';
import Button from './Button';

const Score = () => {
  const $totalScore = useStore(totalScore);

  const playAgain = () => {
    // console.log('Play again');
  };

  return (
    <div className='flex pt-8 px-6 flex-col items-center gap-10 flex-shrink-0 self-stretch'>
      <div className='flex flex-col items-start gap-4 self-stretch'>
        <div className='flex flex-col items-start gap-2 *:self-stretch *:text-dark-navy *:text-[40px] *:leading-[100%] *:dark:text-white'>
          <div className='font-light'>Quiz completed</div>
          <div className='font-medium'>You scored...</div>
        </div>
      </div>
      <div className='flex flex-col items-start gap-3 self-stretch'>
        <div className='flex p-8 flex-col items-center gap-4 self-stretch rounded-xl bg-white dark:bg-navy shadow-[0px_16px_40px_0px_rgba(143,160,193,0.14)] dark:shadow-[0px_16px_40px_0px_rgba(49,62,81,0.14)]'>
          <div className='flex items-center gap-4'>
            <div className='h-10 w-10 rounded-[4px] bg-red-300 p-[5.71px] flex items-center'>
              <IconAccessibility />
            </div>
            <div className='text-dark-navy text-lg font-medium leading-[100%] dark:text-white'>
              Accessibility
            </div>
          </div>
          <div className='flex flex-col items-center gap-4 self-stretch'>
            <div className='text-dark-navy dark:text-white text-[88px] font-medium leading-[100%]'>
              {$totalScore}
            </div>
            <div className='text-grey-navy dark:text-light-bluish text-lg leading-[100%]'>
              out of 10
            </div>
          </div>
        </div>
        <Button text='Play Again' onClick={playAgain} />
      </div>
    </div>
  );
};

export default Score;
