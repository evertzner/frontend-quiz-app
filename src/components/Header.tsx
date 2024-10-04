import IconAccessibility from '../icons/Accessibility';
import ToggleTheme from './ToggleTheme';
import { useStore } from '@nanostores/react';
import { currentStep } from '../utils/store';

const Header = () => {
  const $currentStep = useStore(currentStep);

  return (
    <div
      className={`flex h-[72px] px-6 py-4 ${$currentStep === 0 ? 'justify-end' : 'justify-between'} items-center self-stretch`}
    >
      <div className={`flex items-center gap-4 ${$currentStep === 0 && 'hidden'}`}>
        <div className='bg-[#F6E7FF] p-[5.71px] w-10 h-10 flex items-center justify-center rounded-[4px]'>
          <IconAccessibility />
        </div>
        <div className='dark:text-white text-dark-navy text-lg font-medium leading-[100%]'>
          Accessibility
        </div>
      </div>
      <ToggleTheme />
    </div>
  );
};

export default Header;
