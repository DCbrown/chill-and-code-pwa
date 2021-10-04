import React from 'react'

const Songlist = ({songs, handleTrackPick, currentMusicIndex}) => {
    return (
        <div className="scrollable-list">
        {songs.map(song => {
            return <div 
                        key={song.id} 
                        onClick={() => handleTrackPick(song.id)} 
                        className={currentMusicIndex === song.id ? "list-item-active" : "list-item" }>
                            {song.name}
                    </div>       
        })}
    </div> 
    )
}

export default Songlist
