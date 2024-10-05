import { Tile } from './Tiles';
import { quizzes } from '../utils/data';
import { useStore } from '@nanostores/react';
import {
  currentStep,
  selectedCategory,
  currentStatus,
  selectedOption,
  totalScore
} from '../utils/store';
import { useEffect, useState } from 'react';
import Button from './Button';
import IconError from '../icons/Error';

const Question = () => {
  const $currentStep = useStore(currentStep);
  const $selectedCategory = useStore(selectedCategory);
  const $currentStatus = useStore(currentStatus);
  const $selectedOption = useStore(selectedOption);
  const $totalScore = useStore(totalScore);
  const quiz = quizzes.find((quiz) => quiz.title === $selectedCategory);
  const [status, setStatus] = useState('Submit Answer');
  const questionPercentage = ($currentStep / quiz?.questions.length!) * 100;
  const width = `calc(100% - ${100 - questionPercentage}%)`;

  useEffect(() => {
    if ($currentStep === quiz?.questions.length && $currentStatus === 'submitted') {
      setStatus('Finish Quiz');
    } else if ($currentStatus === 'submitted' && $currentStep < quiz?.questions.length!) {
      setStatus('Next Question');
    } else {
      setStatus('Submit Answer');
    }
  }, [$currentStep]);

  useEffect(() => {
    if ($selectedOption !== '') {
      const error = document.getElementById('error') as HTMLDivElement;
      error.classList.add('hidden');
      error.classList.add('flex');
    }
  }, [$selectedOption]);

  useEffect(() => {
    const progress = document.getElementById('progress') as HTMLDivElement;
    progress.style.width = width;
  }, [width]);

  useEffect(() => {
    if ($currentStatus === 'submitted' && $currentStep < quiz?.questions.length!) {
      setStatus('Next Question');
    } else if ($currentStep === quiz?.questions.length && $currentStatus === 'submitted') {
      setStatus('Finish Quiz');
    } else {
      setStatus('Submit Answer');
    }
  }, [$currentStatus]);

  const handleClick = () => {
    if ($selectedOption === '') {
      const error = document.getElementById('error') as HTMLDivElement;
      error.classList.remove('hidden');
      error.classList.add('flex');
      return;
    }

    currentStatus.set('submitted');

    if (status === 'Next Question') {
      currentStep.set($currentStep + 1);

      if (quiz?.questions[$currentStep - 1]?.answer === $selectedOption) {
        totalScore.set($totalScore + 1);
      }

      selectedOption.set('');
      currentStatus.set('idle');
      setStatus('Submit Answer');

      if ($currentStep === quiz?.questions.length) {
        currentStatus.set('finished');
      }
    }

    if (status === 'Finish Quiz') {
      if (quiz?.questions[$currentStep - 1]?.answer === $selectedOption) {
        totalScore.set($totalScore + 1);
      }
      currentStatus.set('finished');
    }
  };

  return (
    <div className='pt-8 px-6 flex flex-col items-center gap-10 flex-shrink-0 self-stretch'>
      <div className='flex flex-col items-center gap-6 self-stretch'>
        <div className='flex flex-col items-start gap-3 self-stretch'>
          <div className='self-stretch italic text-sm leading-[150%] text-grey-navy dark:text-light-bluish'>
            Question {$currentStep} of {quiz?.questions.length}
          </div>
          <div className='self-stretch min-h-28 font-medium text-xl leading-[120%] text-dark-navy dark:text-white'>
            {quiz?.questions[$currentStep - 1]?.question}
          </div>
        </div>
        <div className='flex h-4 p-1 flex-col justify-center items-start gap-2 self-stretch rounded-full w-full bg-white'>
          <div className='h-full bg-purple rounded-full' id='progress'></div>
        </div>
      </div>
      <div className='flex flex-col items-center gap-3 self-stretch'>
        {quiz?.questions[$currentStep - 1]?.options.map((option, index) => (
          <Tile
            quiz={quiz}
            question={quiz?.questions[$currentStep - 1]!}
            option={option}
            key={index}
            index={index}
          />
        ))}
        <Button text={status} onClick={handleClick} />
        <div className='hidden items-center gap-2' id='error'>
          <div className='h-8 w-8 flex items-center'>
            <IconError />
          </div>
          <div className='text-red text-lg leading-[100%] dark:text-white'>
            Please select an answer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
