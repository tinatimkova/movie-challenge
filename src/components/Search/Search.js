import React, { useContext } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Search.css'
import axios from 'axios';

import MoviesContext from '../../context/movies/moviesContext'

function Search({ getResults }) {

    const moviesContext = useContext(MoviesContext)

    const { text, searchMovies } = moviesContext

    return (
        <>
         <h5>Movie title</h5>
         <div className='search-bar'>
             <SearchIcon className='search-icon'/>
             <input className='search-field' type='text' autoFocus="autofocus" placeholder='Search Movies...' value={text} onChange={e => searchMovies(e.target.value)} />
        </div>
        </>
    )
}

export default Search
