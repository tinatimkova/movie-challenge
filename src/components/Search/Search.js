import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Search.css'
import axios from 'axios';

function Search({ getResults, text, setText }) {

    const fetchSearchResults = (text) => {
    return axios({
        method: 'GET',
        url: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${text}&r=json&type=movie`
        })
      }

    const handleChange = (e) => {
        setText(e.target.value)

        fetchSearchResults(text)
            .then(res => {res.data.Response === "True" && getResults(res.data.Search)})
    }


    return (
        <>
         <h5>Movie title</h5>
         <div className='search-bar'>
             <SearchIcon className='search-icon'/>
             <input className='search-field' type='text' autoFocus="autofocus" placeholder='Search Movies...' value={text} onChange={handleChange} />
        </div>
        </>
    )
}

export default Search
