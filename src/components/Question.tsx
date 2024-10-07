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
  const quiz = quizzes.find((quiz) => quiz.title === $selectedCategory)!;
  const questions = quiz.questions[$currentStep - 1]!;
  const [status, setStatus] = useState('Submit Answer');
  const questionPercentage = ($currentStep / quiz.questions.length!) * 100;
  const width = `calc(100% - ${100 - questionPercentage}%)`;

  useEffect(() => {
    if ($currentStep === quiz.questions.length && $currentStatus === 'submitted') {
      setStatus('Finish Quiz');
    } else if ($currentStatus === 'submitted' && $currentStep < quiz.questions.length!) {
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
    if ($currentStatus === 'submitted' && $currentStep < quiz.questions.length!) {
      setStatus('Next Question');
    } else if ($currentStep === quiz.questions.length && $currentStatus === 'submitted') {
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

      if (questions.answer === $selectedOption) {
        totalScore.set($totalScore + 1);
      }

      selectedOption.set('');
      currentStatus.set('idle');
      setStatus('Submit Answer');

      if ($currentStep === quiz.questions.length) {
        currentStatus.set('finished');
      }
    }

    if (status === 'Finish Quiz') {
      if (questions.answer === $selectedOption) {
        totalScore.set($totalScore + 1);
      }
      currentStatus.set('finished');
    }
  };

  return (
    <div className='pt-8 md:pt-2 xl:pt-1 px-6 md:px-16 xl:px-[140px] flex xl:grid flex-col xl:grid-cols-2 items-center xl:items-start xl:justify-between gap-10 md:gap-16 flex-shrink-0 self-stretch'>
      <div className='flex flex-col items-center xl:justify-between xl:h-[452px] xl:min-w-[465px] gap-6 md:gap-10 self-stretch'>
        <div className='flex flex-col items-start gap-3 md:gap-7 self-stretch'>
          <div className='self-stretch italic text-sm md:text-xl leading-[150%] text-grey-navy dark:text-light-bluish'>
            Question {$currentStep} of {quiz.questions.length}
          </div>
          <div className='self-stretch min-h-28 md:min-h-40 xl:min-h-52 font-medium text-xl md:text-4xl leading-[120%] text-dark-navy dark:text-white'>
            {questions.question}
          </div>
        </div>
        <div className='flex h-4 p-1 flex-col justify-center items-start gap-2 self-stretch rounded-full w-full bg-white'>
          <div className='h-full bg-purple rounded-full' id='progress'></div>
        </div>
      </div>
      <div className='flex flex-col items-center gap-3 md:gap-6 self-stretch'>
        {questions.options.map((option, index) => (
          <Tile quiz={quiz} question={questions} option={option} key={index} index={index} />
        ))}
        <Button text={status} onClick={handleClick} />
        <div className='hidden items-center gap-2' id='error'>
          <div className='w-8 h-8 md:w-10 md:h-10 flex items-center'>
            <IconError />
          </div>
          <div className='text-red text-lg md:text-2xl leading-[100%] dark:text-white'>
            Please select an answer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
