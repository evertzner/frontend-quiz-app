import { useStore } from '@nanostores/react';
import { selectedTheme } from '../utils/store';
import IconSun from '../icons/Sun';
import IconMoon from '../icons/Moon';

const ToggleTheme = () => {
  const $selectedTheme = useStore(selectedTheme);

  document.querySelector('html')?.classList.toggle('dark', $selectedTheme === 'dark');

  return (
    <div className='flex items-center gap-2 md:gap-4'>
      <div className='flex w-4 h-4 md:w-6 md:h-6 items-center'>
        <IconSun />
      </div>
      <button
        className={`flex w-8 p-1 md:w-12 items-center ${$selectedTheme === 'light' ? 'justify-start' : 'justify-end'} rounded-full bg-purple style outline-none`}
        onClick={() => selectedTheme.set($selectedTheme === 'dark' ? 'light' : 'dark')}
      >
        <svg className='flex md:hidden' width='12' height='12' viewBox='0 0 12 12' fill='none'>
          <circle cx='6' cy='6' r='6' fill='white' />
        </svg>

        <svg className='hidden md:flex' width='20' height='20' viewBox='0 0 20 20' fill='none'>
          <circle cx='10' cy='10' r='10' fill='white' />
        </svg>
      </button>
      <div className='flex w-4 h-4 md:w-6 md:h-6 items-center'>
        <IconMoon />
      </div>
    </div>
  );
};

export default ToggleTheme;
