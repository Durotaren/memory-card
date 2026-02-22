import { useState } from 'react';
import './styles/App.css';
import MainPage from './components/MainPage';
import FaultyTerminal from './components/FaultyTerminal';

function App() {
  return (
    <div className="main-content">
      <div style={{ width: '100%', height: '100svh', position: 'relative' }}>
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#00fbff"
          mouseReact
          mouseStrength={0.5}
          pageLoadAnimation
          brightness={1}
        />
      </div>
      <MainPage />
    </div>
  );
}

export default App;
{
  /* <MainPage /> */
}
