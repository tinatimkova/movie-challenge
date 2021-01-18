import React, { useReducer } from 'react';
import axios from 'axios';
import MoviesContext from './moviesContext';
import MoviesReducer from './moviesReducer';
import { SEARCH_MOVIES, SET_TEXT, REMOVE_NOMINATIONS, SET_NOMINATIONS } from '../types'

const MoviesState = props => {
    // global state
    const initialState = {
        results: null,
        text: '',
        nominations: []
    }

    const [ state, dispatch ] = useReducer(MoviesReducer, initialState)

    // Search Movies

    // Input text
    const setText = (text) => dispatch({ type: SET_TEXT, payload: { text } })

    // Add a movie to the nomination list

    // Remove a movie from the nomination list

    return (
    <MoviesContext.Provider value={{ results: state.results, text: state.text, nominations: state.nominations, setText }}>
        {props.children}
    </MoviesContext.Provider>
    )
}

export default MoviesState;
