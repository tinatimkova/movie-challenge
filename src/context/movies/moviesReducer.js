import { SEARCH_MOVIES, SET_TEXT, REMOVE_NOMINATIONS, SET_NOMINATIONS } from '../types'

export default (state, action) => {
    switch(action.type) {
        case SET_TEXT:
            return {
                ...state, 
                text: action.payload.text
            }
        case SEARCH_MOVIES:
            return {
                ...state,
                movies: action.payload
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