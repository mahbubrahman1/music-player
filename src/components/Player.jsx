import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Player = () => {
    return (
        <div className='player-container'>
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='back-icon' size='2x' icon={faAngleLeft} />
                <FontAwesomeIcon className='play-icon' size='2x' icon={faPlay} />
                <FontAwesomeIcon className='forward-icon' size='2x' icon={faAngleRight} />
            </div>
        </div>
    )
}

export default Player