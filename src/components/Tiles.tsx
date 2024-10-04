import { type Quiz } from '../utils/data';
import { useStore } from '@nanostores/react';
import { currentStep, selectedCategory, selectedOption } from '../utils/store';

interface CategoryTileProps {
  quiz: Quiz;
}

export const CategoryTile = ({ quiz }: CategoryTileProps) => {
  const selectCategory = () => {
    currentStep.set(1);
    selectedCategory.set(quiz.title as 'HTML' | 'CSS' | 'JavaScript' | 'Accessibility');
  };

  return (
    <button
      className={`outline-none p-3 flex items-center gap-4 self-stretch rounded-xl bg-white dark:bg-navy shadow-[0px_16px_40px_0px_rgba(143,160,193,0.14)] dark:shadow-[0px_16px_40px_0px_rgba(49,62,81,0.14)]`}
      onClick={selectCategory}
    >
      <div className={`w-10 h-10 flex items-center ${quiz.color.light} rounded-md p-[5.71px]`}>
        {quiz.icon()}
      </div>
      <div className='text-lg font-medium leading-[100%] text-dark-navy dark:text-white'>
        {quiz.title}
      </div>
    </button>
  );
};

interface TileProps {
  option: string;
  index: number;
  quiz: Quiz;
}

export const Tile = ({ option, index, quiz }: TileProps) => {
  const $selectedOption = useStore(selectedOption);

  let questionLetter = '';

  switch (index) {
    case 0:
      questionLetter = 'A';
      break;
    case 1:
      questionLetter = 'B';
      break;
    case 2:
      questionLetter = 'C';
      break;
    case 3:
      questionLetter = 'D';
      break;
    default:
      questionLetter = '';
  }

  const selectOption = () => {
    selectedOption.set(option);
  };

  return (
    <button
      className={`outline-none p-3 flex items-center gap-4 self-stretch rounded-xl bg-white dark:bg-navy shadow-[0px_16px_40px_0px_rgba(143,160,193,0.14)] group dark:shadow-[0px_16px_40px_0px_rgba(49,62,81,0.14)] ${$selectedOption === option ? `${quiz.color.selected} ring-[3px]` : 'ring-transparent'}`}
      onClick={selectOption}
    >
      <div
        className={`min-w-10 min-h-10 flex justify-center items-center ${$selectedOption === option ? `${quiz.color.heavy} ${quiz.color.selectedHover} text-white` : 'bg-light-grey text-grey-navy'} rounded-md p-[5.71px] text-lg font-medium leading-[100%]  ${quiz.color.hover} `}
      >
        {questionLetter}
      </div>
      <div className='text-lg font-medium leading-[100%] text-dark-navy dark:text-white text-start'>
        {option}
      </div>
    </button>
  );
};
