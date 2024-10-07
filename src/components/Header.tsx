import ToggleTheme from './ToggleTheme';
import { useStore } from '@nanostores/react';
import { currentStep, selectedCategory } from '../utils/store';
import { quizzes } from '../utils/data';

const Header = () => {
  const $currentStep = useStore(currentStep);
  const $selectedCategory = useStore(selectedCategory);
  const quiz = quizzes.find((quiz) => quiz.title === $selectedCategory)!;

  return (
    <div
      className={`flex h-[72px] md:h-[136px] xl:h-[216px] px-6 md:px-16 xl:px-[140px] py-4 md:py-10 xl:py-20 ${$currentStep === 0 ? 'justify-end' : 'justify-between'} items-center self-stretch`}
    >
      <div className={`flex items-center gap-4 md:gap-6 ${$currentStep === 0 && 'hidden'}`}>
        <div
          className={`${quiz.color.light} p-[5.71px] md:p-2 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-[4px] md:rounded-lg`}
        >
          {quiz.icon()}
        </div>
        <div className='dark:text-white text-dark-navy text-lg md:text-[28px] font-medium leading-[100%]'>
          {quiz.title}
        </div>
      </div>
      <ToggleTheme />
    </div>
  );
};

export default Header;
