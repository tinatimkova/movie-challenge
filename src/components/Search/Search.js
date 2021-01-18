import React, { useContext } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Search.css'
import axios from 'axios';

import MoviesContext from '../../context/movies/moviesContext'

function Search({ getResults }) {

    const moviesContext = useContext(MoviesContext)

    const { text } = moviesContext

    const fetchSearchResults = () => {
        return axios({
            method: 'GET',
            url: `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${text}&r=json&type=movie`
            })
          }

    const searchMovies = (e) => {
        moviesContext.setText(e.target.value)

        fetchSearchResults(text)
            .then(res => {res.data.Response === "True" ? getResults(res.data.Search) : getResults([])})
            .catch(error => console.log(error))
    }


    return (
        <>
         <h5>Movie title</h5>
         <div className='search-bar'>
             <SearchIcon className='search-icon'/>
             <input className='search-field' type='text' autoFocus="autofocus" placeholder='Search Movies...' value={text} onChange={searchMovies} />
        </div>
        </>
    )
}

export default Search
