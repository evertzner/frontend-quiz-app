import ToggleTheme from './ToggleTheme';
import { useStore } from '@nanostores/react';
import { currentStep, selectedCategory } from '../utils/store';
import { quizzes } from '../utils/data';

const Header = () => {
  const $currentStep = useStore(currentStep);
  const $selectedCategory = useStore(selectedCategory);
  const quiz = quizzes.find((quiz) => quiz.title === $selectedCategory);

  return (
    <div
      className={`flex h-[72px] px-6 py-4 ${$currentStep === 0 ? 'justify-end' : 'justify-between'} items-center self-stretch`}
    >
      <div className={`flex items-center gap-4 ${$currentStep === 0 && 'hidden'}`}>
        <div
          className={`${quiz?.color.light} p-[5.71px] w-10 h-10 flex items-center justify-center rounded-[4px]`}
        >
          {quiz?.icon()}
        </div>
        <div className='dark:text-white text-dark-navy text-lg font-medium leading-[100%]'>
          {quiz?.title}
        </div>
      </div>
      <ToggleTheme />
    </div>
  );
};

export default Header;
