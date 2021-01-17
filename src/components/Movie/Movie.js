import React, { useState, useEffect } from 'react';
import './Movie.css'

export default function Movie({ movie, button, addToNominations, nominations, removeFromNominations }) {

    const handleClick = () => {
        if (button==='Remove') {
            return removeFromNominations(movie.imdbID)
        } else if (button==='Nominate') {
            return addToNominations(movie)
        }
    }

    return (
        <li className='movie'>
            <span>{movie.Title}({movie.Year})</span>
            <input type='button' 
            className={'submit-button'}
            value={button} 
            onClick={handleClick}
            disabled={(nominations.length >=5 && button==='Nominate') ? 'disabled' : ''} />
        </li>
    )
}
