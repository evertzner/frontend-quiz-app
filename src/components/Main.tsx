import Header from './Header';
import Home from './Home';
import Question from './Question';
import { useStore } from '@nanostores/react';
import { currentStep, currentStatus } from '../utils/store';
import Score from './Score';

const Main = () => {
  const $currentStep = useStore(currentStep);
  const $currentStatus = useStore(currentStatus);

  return (
    <main className='flex items-start flex-col'>
      <Header />
      {$currentStep === 0 && <Home />}
      {$currentStep > 0 && $currentStatus !== 'finished' && <Question />}
      {$currentStatus === 'finished' && <Score />}
    </main>
  );
};

export default Main;
