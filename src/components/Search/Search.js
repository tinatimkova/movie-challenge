import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Search.css'

function Search({ searchResults, getResults }) {
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)

        searchResults(text)
        // .then(res => {res.Response && getResults(res.data.Search)})
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
