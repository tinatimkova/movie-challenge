import React from 'react';
import Movie from '../Movie/Movie';
import './SearchResults.css'

export default function SearchResults({ title, results, nominations, setNominations, button }) {

    let movies = ''

    if (results && results.length > 0) {
        movies = results.map((movie, index) =>
           <Movie
           key={index}
           movie={movie}
           results={results}
           nominations={nominations}
           setNominations={setNominations}
           button={button}
           /> 
        )
    } 

    return (
        <div className='results-card'>
            <h6>{title}</h6>
            <ul>{movies}</ul>
        </div>
    )
}
