import React, { useContext } from 'react';
import Movie from '../Movie/Movie';
import './SearchResults.css';
import MoviesContext from '../../context/movies/moviesContext';

export default function SearchResults({ title, nominations, setNominations, button }) {

    const moviesContext = useContext(MoviesContext)

    let movies = ''
    let results = ''
    {button==='Remove' ? results=nominations : results=moviesContext.results}

    if (results && results.length > 0) {
        movies = results.map((movie, index) =>
           <Movie
           key={index}
           movie={movie}
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
