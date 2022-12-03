import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    const audioRef = useRef(null);

    // event hanler 
    const handlePlaySong = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <div className='player-container'>
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='back-icon' size='2x' icon={faAngleLeft} />
                <FontAwesomeIcon onClick={handlePlaySong} className='play-icon' size='2x' icon={faPlay} />
                <FontAwesomeIcon className='forward-icon' size='2x' icon={faAngleRight} />
            </div>
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player