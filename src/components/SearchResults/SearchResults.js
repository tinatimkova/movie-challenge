import React from 'react'
import './SearchResults.css'

export default function SearchResults({ title, results, button }) {
    
    const movies = results.map(movie =>
        <li key={movie}><span>{movie}</span><input type='submit' value={button}/></li>
        )

    return (
        <div className='results-card'>
            <h6>{title}</h6>
            <ul>{movies}</ul>
        </div>
    )
}
