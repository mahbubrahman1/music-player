import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({ songs }) => {
    return (
        <div className='library'>
            <h2>library</h2>
            <div className="library-songs">
                {
                    songs.map((song) => <LibrarySong songs={songs} />)
                }
            </div>
        </div>
    )
}

export default Library