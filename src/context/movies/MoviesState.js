import React, { useReducer } from 'react';
import axios from 'axios';
import MoviesContext from './moviesContext';
import MoviesReducer from './moviesReducer';
import { SEARCH_MOVIES, SET_TEXT, REMOVE_NOMINATIONS, SET_NOMINATIONS } from '../types'

const MoviesState = props => {
    // global state
    const initialState = {
        movies: null,
        text: '',
        nominations: []
    }

    const [ state, dispatch ] = useReducer(MoviesReducer, initialState)

    // Search Movies
    const searchMovies = async text => {
        setText(text)

        const res = await axios({
            method: 'GET',
            url: `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${state.text}&r=json&type=movie`
            })  
          
       {res.data.Response === "True" ? dispatch({ type: SEARCH_MOVIES, payload: res.data.Search}) : dispatch({ type: SEARCH_MOVIES, payload: [] })}
    }

    // Input text
    const setText = (text) => dispatch({ type: SET_TEXT, payload: { text } })

    // Add a movie to the nomination list
    const setNominations = (movie) => dispatch({ type: SET_NOMINATIONS, payload: { movie }})

    // Remove a movie from the nomination list
    const removeNomination = (newArray) => dispatch({ type: REMOVE_NOMINATIONS, payload: {newArray}})

    return (
    <MoviesContext.Provider value={{ movies: state.movies, text: state.text, nominations: state.nominations, setText, searchMovies, setNominations, removeNomination }}>
        {props.children}
    </MoviesContext.Provider>
    )
}

export default MoviesState;
