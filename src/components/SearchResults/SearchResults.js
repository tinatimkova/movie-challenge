import React, { useContext } from 'react';
import Movie from '../Movie/Movie';
import './SearchResults.css';
import MoviesContext from '../../context/movies/moviesContext';

export default function SearchResults({ title, button }) {

    const moviesContext = useContext(MoviesContext)

    const { movies, nominations } = moviesContext

    let list = ''
    let items = ''
    {button==='Remove' ? items=nominations : items=movies}

    if (items && items.length > 0) {
        list = items.map((movie, index) =>
           <Movie
           key={index}
           movie={movie}
           button={button}
           /> 
        )
    }

    return (
        <div className='results-card'>
            <h6>{title}</h6>
            <ul>{list}</ul>
        </div>
    )
}
