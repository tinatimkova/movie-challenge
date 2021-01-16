import React, { useState } from 'react';
import './Movie.css'

export default function Movie({ movie, button, nominate }) {
    const [clicked, setClicked ] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()

        setClicked(!clicked)
    }

    return (
        <li className='movie'>
            <span>{movie.Title}({movie.Year})</span>
            <input type='submit' className={`submit-button ${clicked && 'clicked'}`} value={button} onClick={handleClick}/>
        </li>
    )
}
