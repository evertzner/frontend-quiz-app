import { Tile } from './Tiles';
import { quizzes } from '../utils/data';
import { useStore } from '@nanostores/react';
import { currentStep, selectedCategory } from '../utils/store';
import { useEffect } from 'react';
import Button from './Button';

const Question = () => {
  const $currentStep = useStore(currentStep);
  const $selectedCategory = useStore(selectedCategory);
  // const $selectedOption = useStore(selectedOption);
  const quiz = quizzes.find((quiz) => quiz.title === $selectedCategory);
  // const [status, setStatus] = useState('Submit Answer');
  const status = 'Submit Answer';

  const width = `calc(100% - ${50}%)`;

  useEffect(() => {
    const progress = document.getElementById('progress') as HTMLDivElement;
    progress.style.width = width;
  }, [width]);

  return (
    <div className='pt-8 px-6 flex flex-col items-center gap-10 flex-shrink-0 self-stretch'>
      <div className='flex flex-col items-center gap-6 self-stretch'>
        <div className='flex flex-col items-start gap-3 self-stretch'>
          <div className='self-stretch italic text-sm leading-[150%] text-grey-navy dark:text-light-bluish'>
            Question {$currentStep} of {quiz?.questions.length}
          </div>
          <div className='self-stretch font-medium text-xl leading-[120%] text-dark-navy dark:text-white'>
            {quiz?.questions[$currentStep - 1]?.question}
          </div>
        </div>
        <div className='flex h-4 p-1 flex-col justify-center items-start gap-2 self-stretch rounded-full w-full bg-white'>
          <div className='h-full bg-purple rounded-full' id='progress'></div>
        </div>
      </div>
      <div className='flex flex-col items-start gap-3 self-stretch'>
        {quiz?.questions[$currentStep - 1]?.options.map((option, index) => (
          <Tile quiz={quiz} option={option} key={index} index={index} />
        ))}
        <Button text={status} />
      </div>
    </div>
  );
};

export default Question;
