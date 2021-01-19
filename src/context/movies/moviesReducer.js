import { SEARCH_MOVIES, SET_TEXT, REMOVE_NOMINATIONS, SET_NOMINATIONS, SET_LOADING } from '../types'

export default (state, action) => {
    switch(action.type) {
        case SET_TEXT:
            return {
                ...state, 
                text: action.payload.text
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload.value,
                movies: []
            }
        case SEARCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            }
        case SET_NOMINATIONS:
            return {
                ...state,
                nominations: state.nominations.concat(action.payload.movie)
            }
        case REMOVE_NOMINATIONS:
            return {
                ...state,
                nominations: action.payload.newArray
            }
        default:
            return state;
    }
}