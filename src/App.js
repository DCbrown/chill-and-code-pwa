import MediaPlayer from './MediaPlayer';
import React, { useState } from 'react'
import './App.css';

const songs = [
  { 
      id: 0,
      name: 'Chambers', 
      artist:"Fat Jon", 
      src: 'https://competent-bhabha-abd8d2.netlify.app/music/chambers.mp3' 
  },
  { 
      id: 1,
      name: 'Castlevania II Simon\'s Quest', 
      artist:"The One-Ups", 
      src: 'https://competent-bhabha-abd8d2.netlify.app/music/castlevania-II-simon-quest.mp3' 
  },
  { 
      id: 2,
      name: 'Don\'t Even Try It', 
      artist:"Nujabes", 
      src: 'https://competent-bhabha-abd8d2.netlify.app/music/dont-even-try-it.mp3'
  },
  { 
      id: 3,
      name: 'Fire Drill', 
      artist:"Gecko Yamori", 
      src: 'https://competent-bhabha-abd8d2.netlify.app/music/fire-drill.mp3'
  },
  { 
      id: 4,
      name: 'Just Forget', 
      artist:"Force Of Nature", 
      src: 'https://competent-bhabha-abd8d2.netlify.app/music/justforget.mp3'
  },
  { 
      id: 5,
      name: 'Let Me Know What U Think', 
      artist:"Tsutchie", 
      src: 'https://competent-bhabha-abd8d2.netlify.app/music/let-me-know-what-u-think.mp3'
  },
  { 
      id: 6,
      name: 'Next To You', 
      artist:"Flamingosis", 
      src: 'https://competent-bhabha-abd8d2.netlify.app/music/next-to-you.mp3'
  },
  { 
      id: 7,
      name: 'R.A.P Rhythm And PaRapper', 
      artist:"Emcess", 
      src: 'https://competent-bhabha-abd8d2.netlify.app/music/rhythm-and-parappa.mp3'
  },
  { 
      id: 8,
      name: 'Sincerely', 
      artist:"Tsutchie", 
      src: 'https://competent-bhabha-abd8d2.netlify.app/music/sincerely.mp3'
  },
  { 
      id: 9,
      name: 'Street Fighter II Sagat Theme', 
      artist:"The One-Ups", 
      src: 'https://competent-bhabha-abd8d2.netlify.app/music/street-fighter-sagat.mp3'
  },
  { 
      id: 10,
      name: 'ToeJam & Earl Alien Breakdown ', 
      artist:"The One-Ups", 
      src: 'https://competent-bhabha-abd8d2.netlify.app/music/toe-jam-earl-alien-break-down.mp3'
  },
  { 
    id: 11,
    name: 'Pretending-to', 
    artist:"Tsutchie", 
    src: 'https://competent-bhabha-abd8d2.netlify.app/music/flight-fantastic.mp3'
  },
  { 
    id: 12,
    name: 'Flight Fantastic', 
    artist:"Flamingosis feat", 
    src: 'https://competent-bhabha-abd8d2.netlify.app/music/flight-fantastic.mp3'
  },
  
]


function App() {
  const [currentMusicIndex, setcurrentMusicIndex] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);

  const handleClickPrevious = () => {
      setcurrentMusicIndex(currentMusicIndex === 0 ? songs.length - 1 : currentMusicIndex - 1)
      // console.log(currentMusicIndex)
  }

  const handleClickNext = () => {
      setcurrentMusicIndex(currentMusicIndex < songs.length - 1 ? currentMusicIndex + 1 : 0)
      // console.log(currentMusicIndex)
  }

  const handleRandom = () => {
      let random = Math.floor(Math.random() * songs.length);
      // console.log(random)
      setcurrentMusicIndex(random, songs[random])
  }

  const handleToggleShuffle = () => {
      setIsShuffle(isShuffle => !isShuffle)
      // console.log(isShuffle)
  }

  const handleTrackPick = (id) => {
      setcurrentMusicIndex(id, songs[id])
  }

  return (
    <div>
      <div className="container">
        <div className="card">
        <h1 className="header">Chill & Code Playlist</h1>
          <MediaPlayer
            songs={songs}
            handleClickNext={handleClickNext}
            handleClickPrevious={handleClickPrevious}
            handleRandom={handleRandom}
            handleToggleShuffle={handleToggleShuffle}
            handleTrackPick={handleTrackPick}
            isShuffle={isShuffle}
            currentMusicIndex={currentMusicIndex}
            />  
        </div>
      </div>
    </div>
  );
}

export default App;