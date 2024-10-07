import { type Quiz, type Question } from '../utils/data';
import { useStore } from '@nanostores/react';
import { currentStep, selectedCategory, selectedOption, currentStatus } from '../utils/store';
import IconCorrect from '../icons/Correct';
import IconIncorrect from '../icons/Incorrect';

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
      className={`outline-none p-3 xl:min-w-[564px] xl:p-5 flex items-center gap-4 md:gap-8 self-stretch rounded-xl md:rounded-3xl bg-white dark:bg-navy shadow-[0px_16px_40px_0px_rgba(143,160,193,0.14)] dark:shadow-[0px_16px_40px_0px_rgba(49,62,81,0.14)]`}
      onClick={selectCategory}
    >
      <div
        className={`w-10 h-10 md:w-14 md:h-14 flex items-center ${quiz.color.light} rounded-md md:rounded-xl p-[5.71px] md:p-2`}
      >
        {quiz.icon()}
      </div>
      <div className='text-lg md:text-[28px] font-medium leading-[100%] text-dark-navy dark:text-white'>
        {quiz.title}
      </div>
    </button>
  );
};

interface TileProps {
  option: string;
  index: number;
  quiz: Quiz;
  question: Question;
}

export const Tile = ({ option, index, quiz, question }: TileProps) => {
  const $selectedOption = useStore(selectedOption);
  const $currentStatus = useStore(currentStatus);

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
    if ($currentStatus === 'submitted') {
      return;
    }

    selectedOption.set(option);
  };

  const buttonClass = () => {
    if ($currentStatus === 'idle' && $selectedOption === option) {
      return `ring-[3px] ${quiz.color.selected}`;
    } else if (
      $currentStatus === 'submitted' &&
      question.answer === option &&
      option === $selectedOption
    ) {
      return `ring-[3px] ring-green`;
    } else if (
      $currentStatus === 'submitted' &&
      question.answer !== option &&
      option === $selectedOption
    ) {
      return `ring-[3px] ring-red`;
    } else {
      return `ring-transparent`;
    }
  };

  const badgeClass = () => {
    if ($currentStatus === 'idle' && $selectedOption === option) {
      return `${quiz.color.heavy} ${quiz.color.selectedHover} text-white`;
    } else if (
      $currentStatus === 'submitted' &&
      question.answer === option &&
      option === $selectedOption
    ) {
      return `bg-green text-white group-hover:bg-green`;
    } else if (
      $currentStatus === 'submitted' &&
      question.answer !== option &&
      option === $selectedOption
    ) {
      return `bg-red text-white group-hover:bg-red`;
    } else if ($currentStatus === 'submitted') {
      return `bg-light-grey text-grey-navy group-hover:bg-light-grey`;
    } else {
      return 'bg-light-grey text-grey-navy';
    }
  };

  return (
    <button
      className={`outline-none px-3 py-3 xl:px-5 xl:py-[18px] grid grid-cols-[max-content_1fr_32px] md:grid-cols-[max-content_1fr_40px] xl:min-w-[564px] items-center gap-4 md:gap-8 self-stretch rounded-xl md:rounded-3xl bg-white dark:bg-navy 
        shadow-[0px_16px_40px_0px_rgba(143,160,193,0.14)] group dark:shadow-[0px_16px_40px_0px_rgba(49,62,81,0.14)] 
       ${buttonClass()}`}
      onClick={selectOption}
    >
      <div
        className={`min-w-10 min-h-10 md:min-w-14 md:min-h-14 flex justify-center items-center 
          rounded-md md:rounded-xl p-[5.71px] text-lg md:text-[28px] font-medium leading-[100%]  
          ${quiz.color.hover} ${badgeClass()}`}
      >
        {questionLetter}
      </div>
      <div className='text-lg md:text-[28px] font-medium leading-[100%] text-dark-navy dark:text-white text-start'>
        {option}
      </div>
      <div>
        <div
          className={`w-8 h-8 md:w-10 md:h-10 items-center ${$currentStatus === 'submitted' && question.answer === option ? 'flex' : 'hidden'}`}
        >
          <IconCorrect />
        </div>
        <div
          className={`w-8 h-8 md:w-10 md:h-10 items-center ${$currentStatus === 'submitted' && question.answer !== option && option === $selectedOption ? 'flex' : 'hidden'}`}
        >
          <IconIncorrect />
        </div>
      </div>
    </button>
  );
};
