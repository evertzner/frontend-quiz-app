import { useStore } from '@nanostores/react';
import { selectedTheme } from '../utils/store';
import IconSun from '../icons/Sun';
import IconMoon from '../icons/Moon';

const ToggleTheme = () => {
  const $selectedTheme = useStore(selectedTheme);

  document.querySelector('html')?.classList.toggle('dark', $selectedTheme === 'dark');

  return (
    <div className='flex items-center gap-2'>
      <div className='flex w-4 h-4 items-center'>
        <IconSun />
      </div>
      <button
        className={`flex w-8 p-1 items-center ${$selectedTheme === 'light' ? 'justify-start' : 'justify-end'} rounded-full bg-purple style outline-none`}
        onClick={() => selectedTheme.set($selectedTheme === 'dark' ? 'light' : 'dark')}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
        >
          <circle cx='6' cy='6' r='6' fill='white' />
        </svg>
      </button>
      <div className='flex w-4 h-4 items-center'>
        <IconMoon />
      </div>
    </div>
  );
};

export default ToggleTheme;
