import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    const audioRef = useRef(null);
    const [songInfo, setSongInfo] = useState({ currentTime: 0, duration: 0 });

    // event handler play pause button
    const handlePlaySong = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        }
    }

    // event handler time 
    const handleTimeUpdate = (event) => {
        const current = event.target.currentTime;
        const duration = event.target.duration;
        setSongInfo({ ...songInfo, currentTime: current, duration: duration })
    }

    // convert time 
    const getTime = (time) => {
        return (Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2));
    }

    // drag handler 
    const dragHandler = (event) => {
        audioRef.current.currentTime = event.target.value;
        setSongInfo({ ...songInfo, currentTime: event.target.value })
    }

    return (
        <div className='player-container'>
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input
                    min={0}
                    max={songInfo.duration}
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                    type="range"
                />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='back-icon' size='2x' icon={faAngleLeft} />
                <FontAwesomeIcon
                    onClick={handlePlaySong}
                    className='play-icon'
                    size='2x'
                    icon={isPlaying ? faPause : faPlay}
                // if (isPlaying) {
                //     faPause
                // } else {
                //     faPlay
                // }
                />
                <FontAwesomeIcon className='forward-icon' size='2x' icon={faAngleRight} />
            </div>
            <audio
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleTimeUpdate}
                ref={audioRef}
                src={currentSong.audio}
            ></audio>
        </div>
    )
}

export default Player