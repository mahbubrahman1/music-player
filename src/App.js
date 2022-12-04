import React, { useState } from 'react';
import Song from './components/Song';
import Player from './components/Player';
import chillHop from './util';
import './styles/app.scss';
import Library from './components/Library';

function App() {
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library />
    </div>

  );
}

export default App;
