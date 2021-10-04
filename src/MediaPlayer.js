import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import Songlist from './Songist';
import 'react-h5-audio-player/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'


// Ref https://www.npmjs.com/package/react-h5-audio-player

const MediaPlayer = ({songs, 
                      currentMusicIndex, 
                      isShuffle, 
                      handleClickNext, 
                      handleRandom, 
                      handleToggleShuffle, 
                      handleClickPrevious,
                      handleTrackPick }) => {
    return (
        <div>
            <h1>{songs[currentMusicIndex].name}</h1>
            <h2>{songs[currentMusicIndex].artist}</h2>
            <AudioPlayer
                className="audioPlayer"
                autoPlayAfterSrcChange={true}
                onEnded={!isShuffle ? handleClickNext : handleRandom }
                loop={false}
                customAdditionalControls={
                    [
                        <FontAwesomeIcon 
                            icon={faRandom} 
                            size="2x" 
                            onClick={handleToggleShuffle}>
                        </FontAwesomeIcon>
                    ]
                }
                showSkipControls={true}
                showJumpControls={false}
                src={songs[currentMusicIndex].src}
                onClickPrevious={handleClickPrevious}
                onClickNext={!isShuffle ? handleClickNext : handleRandom }
            />
            {/* !isShuffle ? <button onClick={handleShuffle}>Turn On Shuffle</button> : <button onClick={handleShuffle}>Turn Off Shuffle</button> */}
            
            {!isShuffle ? <h3>Shuffle Off</h3> : <h3>Shuffle On</h3>}
            
            {/*!isShuffle ? <button onClick={handleRandom}>Shuffle off</button> : <button onClick={handleRandom}>Shuffle on</button>*/}

            <Songlist songs={songs} handleTrackPick={handleTrackPick} currentMusicIndex={currentMusicIndex}/>    
        </div>
    )
}

export default MediaPlayer
