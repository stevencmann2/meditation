import React from 'react';
import './assets/css/style.css';
import Player from './components/Layout/Player';
import SoundPicker from './components/Layout/SoundPicker';
import Timer from './components/Layout/Timer';



function App() {
  return (
    <div className="app">
      <Timer />
      <Player />
      <SoundPicker />
    </div>
  );
}

export default App;
