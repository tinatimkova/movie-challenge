import React from 'react';
import './Movie.css'

export default function Movie({ movie, button, setNominations, nominations }) {

    const handleClick = () => {
        if (button==='Remove') {
            let newArray = nominations.filter(nomination => nomination.imdbID !== movie.imdbID)
            return setNominations(newArray)
        } else if (button==='Nominate' && nominations.length < 5) {
            return setNominations(nominations.concat(movie))
        }
    }

    return (
        <li className='movie'>
            <span>{movie.Title}({movie.Year})</span>
            <input type='button' 
            className={'submit-button'}
            value={button} 
            onClick={handleClick}
            disabled={(nominations.findIndex(nomination => nomination.imdbID === movie.imdbID) !== -1 && button==='Nominate')
            || (nominations.length >=5 && button==='Nominate') ? 'disabled' : ''} />
        </li>
    )
}
