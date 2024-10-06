import { CategoryTile } from './Tiles';
import { quizzes } from '../utils/data';

const Home = () => {
  return (
    <div className='pt-8 md:pt-2 px-6 md:px-16 flex flex-col items-center gap-10 md:gap-16 flex-shrink-0 self-stretch'>
      <div className='flex flex-col items-start gap-4 self-stretch'>
        <div className='flex flex-col items-start gap-2 text-dark-navy dark:text-white text-[40px] md:text-[64px] leading-[100%]'>
          <div className='self-stretch font-light'>Welcome to the</div>
          <div className='self-stretch font-medium'>Frontend Quiz!</div>
        </div>
        <div className='text-grey-navy dark:text-light-bluish text-sm md:text-xl italic leading-[150%]'>
          Pick a subject to get started.
        </div>
      </div>
      <div className='flex flex-col items-start gap-3 md:gap-6 self-stretch'>
        {quizzes.map((quiz) => (
          <CategoryTile quiz={quiz} key={quiz.title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
