import Tile from './Tile';
import { quizzes } from '../utils/data';

const Home = () => {
  return (
    <div className='pt-8 px-6 flex flex-col items-center gap-10 flex-shrink-0 self-stretch'>
      <div className='flex flex-col items-start gap-4 self-stretch'>
        <div className='flex flex-col items-start gap-2 text-dark-navy dark:text-white text-[40px] leading-[100%]'>
          <div className='self-stretch font-light'>Welcome to the</div>
          <div className='self-stretch font-medium'>Frontend Quiz!</div>
        </div>
        <div className='text-grey-navy dark:text-light-bluish text-sm italic leading-[150%]'>
          Pick a subject to get started.
        </div>
      </div>
      <div className='flex flex-col items-start gap-3 self-stretch'>
        {quizzes.map((quiz) => (
          <Tile quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Home;
