import { useState, useEffect } from 'react';
import './styles/App.css';
import MainPage from './components/MainPage';
import IntroductionModal from './components/IntroductionModal';
import Silk from './components/Silk';

function App() {
  const [firstTime, setFirstTime] = useState<boolean>(() => {
    return localStorage.getItem('firstTime') ? false : true;
  });

  useEffect(() => {
    localStorage.setItem('firstTime', JSON.stringify(firstTime));
  }, [firstTime]);

  return (
    <div className="main-content">
      {firstTime && (
        <IntroductionModal firstTime={firstTime} setFirstTime={setFirstTime} />
      )}
      <div
        className="terminal-container"
        style={{ width: '100%', height: '100svh', position: 'relative' }}
      >
        <Silk
          speed={5}
          scale={1}
          color="#00fbff"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <MainPage firstTime={firstTime} setFirstTime={setFirstTime} />
    </div>
  );
}

export default App;
