import React from 'react';
import Movie from '../Movie/Movie';
import './SearchResults.css'

export default function SearchResults({ title, results, button, nominations, nominate }) {

    let movies = ''

    console.log(results)

    if (results && results.length > 0) {
        movies = results.map(movie =>
           <Movie key={movie.imdbID} movie={movie} button={button} nominate={nominate} /> 
        )
    } 

    return (
        <div className='results-card'>
            <h6>{title}</h6>
            <ul>{movies}</ul>
        </div>
    )
}
