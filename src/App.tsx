import { useState, useEffect } from 'react';
import './styles/App.css';
import MainPage from './components/MainPage';
import IntroductionModal from './components/IntroductionModal';
import Silk from './components/Silk';

function App() {
  const [firstTime, setFirstTime] = useState<boolean>(() => {
    const stored = localStorage.getItem('firstTime');
    return stored ? JSON.parse(stored) : true;
  });

  const [backgroundReady, setBackgroundReady] = useState(false);

  useEffect(() => {
    localStorage.setItem('firstTime', JSON.stringify(firstTime));
  }, [firstTime]);

  return (
    <div className="main-content">
      <div className={backgroundReady ? 'app-visible' : 'app-hidden'}>
        {firstTime && (
          <IntroductionModal
            firstTime={firstTime}
            setFirstTime={setFirstTime}
          />
        )}
      </div>
      <div
        className="terminal-container"
        style={{ width: '100%', height: '100svh', position: 'fixed' }}
      >
        <Silk
          speed={5}
          scale={1}
          color="#00fbff"
          noiseIntensity={1.5}
          rotation={0}
          onReady={() => setBackgroundReady(true)}
        />
      </div>
      <div className={backgroundReady ? 'app-visible' : 'app-hidden'}>
        <MainPage firstTime={firstTime} setFirstTime={setFirstTime} />
      </div>
    </div>
  );
}

export default App;
