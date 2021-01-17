import React from 'react'
import Movie from '../Movie/Movie'
import './Nominations.css'

function Nominations({ nominations, title, setNominations }) {
    let movies = ''

    if (nominations && nominations.length > 0) {
        movies = nominations.map((movie, index) =>
           <Movie
           key={index}
           movie={movie}
           nominations={nominations}
           setNominations={setNominations}
           button={'Remove'}
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

export default Nominations
