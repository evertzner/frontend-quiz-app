import { useStore } from '@nanostores/react';
import {
  totalScore,
  selectedCategory,
  currentStep,
  currentStatus,
  selectedOption
} from '../utils/store';
import Button from './Button';
import { quizzes } from '../utils/data';

const Score = () => {
  const $totalScore = useStore(totalScore);
  const $selectedCategory = useStore(selectedCategory);
  const quiz = quizzes.find((quiz) => quiz.title === $selectedCategory)!;

  const playAgain = () => {
    currentStep.set(0);
    currentStatus.set('idle');
    totalScore.set(0);
    selectedOption.set('');
  };

  return (
    <div className='pt-8 md:pt-2 xl:pt-1 px-6 md:px-16 xl:px-[140px] flex xl:grid flex-col xl:grid-cols-2 items-center xl:items-start xl:justify-between gap-10 md:gap-16 flex-shrink-0 self-stretch'>
      <div className='flex flex-col items-start gap-4 self-stretch'>
        <div className='flex flex-col items-start gap-2 *:self-stretch text-dark-navy text-[40px] md:text-[64px] leading-[100%] dark:text-white'>
          <div className='font-light'>Quiz completed</div>
          <div className='font-medium'>You scored...</div>
        </div>
      </div>
      <div className='flex flex-col items-start gap-3 md:gap-8 self-stretch'>
        <div className='flex p-8 md:p-12 flex-col items-center gap-4 md:gap-10 self-stretch rounded-xl md:rounded-3xl bg-white dark:bg-navy shadow-[0px_16px_40px_0px_rgba(143,160,193,0.14)] dark:shadow-[0px_16px_40px_0px_rgba(49,62,81,0.14)]'>
          <div className='flex items-center gap-4 md:gap-6'>
            <div
              className={`h-10 w-10 md:h-14 md:w-14 rounded-[4px] md:rounded-lg p-[5.71px] md:p-2 flex items-center ${quiz.color.light}`}
            >
              {quiz.icon()}
            </div>
            <div className='text-dark-navy text-lg md:text-[28px] font-medium leading-[100%] dark:text-white'>
              {quiz.title}
            </div>
          </div>
          <div className='flex flex-col items-center gap-4 self-stretch'>
            <div className='text-dark-navy dark:text-white text-[88px] md:text-[144px] font-medium leading-[100%]'>
              {$totalScore}
            </div>
            <div className='text-grey-navy dark:text-light-bluish text-lg md:text-2xl leading-[100%]'>
              out of {quiz.questions.length}
            </div>
          </div>
        </div>
        <Button text='Play Again' onClick={playAgain} />
      </div>
    </div>
  );
};

export default Score;
