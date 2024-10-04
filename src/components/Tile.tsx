import { type Quiz } from '../utils/data';

interface TileProps {
  quiz: Quiz;
}

const Tile = ({ quiz }: TileProps) => {
  return (
    <button className='outline-none p-3 flex items-center gap-4 self-stretch rounded-xl bg-white dark:bg-navy shadow-[0px_16px_40px_0px_rgba(143,160,193,0.14)] dark:shadow-[0px_16px_40px_0px_rgba(49,62,81,0.14)]'>
      <div className={`w-10 h-10 flex items-center ${quiz.color} rounded-md p-[5.71px]`}>
        <quiz.icon />
      </div>
      <div className='text-lg font-medium leading-[100%] text-dark-navy dark:text-white'>
        {quiz.title}
      </div>
    </button>
  );
};

export default Tile;
