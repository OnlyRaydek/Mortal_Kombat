import React, { useEffect, useState } from 'react';

import MenuPage from './views/MenuPage';
import VersusPage from './views/VersusPage';

import menuAudioUrl from './assets/audio/menu-sound.mp3';
import versusAudioUrl from './assets/audio/start-battle.mp3';

import './App.scss';

const App = () => {
  const [menuAudio] = useState(new Audio(menuAudioUrl));
  const [versusAudio] = useState(new Audio(versusAudioUrl));

  const [selectedChampions, setSelectedChampions] = useState({ firstChampion: '', secondChampion: ''});
  const [changeToVersus, setChangeToVersus] = useState(false);

  const [keyName, setKeyName] = useState('');

  const detectKeyDown = (e) => {
      setKeyName(e.key);
  };

  useEffect(() => {
      document.addEventListener('keydown', detectKeyDown, true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
    setKeyName('');
    }, 0);
}, [keyName]);

  const setChampion = (firstChampion, secondChampion) => {
    setSelectedChampions({firstChampion: firstChampion, secondChampion: secondChampion});
    versusAudio.play();
    setTimeout(() => {
      setChangeToVersus(true);
    }, 2000);
  };

  useEffect(() => {
    if (changeToVersus) {
      document.removeEventListener('keydown', detectKeyDown);
      menuAudio.loop = false;
      menuAudio.pause();
    }
  }, [changeToVersus])

  return (
    <div className="App">
      {!changeToVersus && <MenuPage keyName={keyName} setChampion={setChampion} menuAudio={menuAudio} />}
      {changeToVersus && <VersusPage keyName={keyName} selectedChampions={selectedChampions} />}
    </div>
  );
}

export default App;
