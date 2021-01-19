import React, { useContext } from 'react';
import './Movie.css'
import MoviesContext from '../../context/movies/moviesContext'

export default function Movie({ movie, button }) {

    const moviesContext = useContext(MoviesContext)

    const { nominations, setNominations, removeNomination } = moviesContext

    const handleClick = () => {
        if (button==='Remove') {
            let newArray = nominations.filter(nomination => nomination.imdbID !== movie.imdbID)
            return removeNomination(newArray)
        } else if (button==='Nominate' && nominations.length < 5) {
            return setNominations(movie)
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
