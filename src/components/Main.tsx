import Header from './Header';
import Home from './Home';
import Question from './Question';
import { useStore } from '@nanostores/react';
import { currentStep } from '../utils/store';

const Main = () => {
  const $currentStep = useStore(currentStep);

  return (
    <main className='flex items-start flex-col'>
      <Header />
      {$currentStep === 0 && <Home />}
      {$currentStep > 0 && <Question />}
    </main>
  );
};

export default Main;
