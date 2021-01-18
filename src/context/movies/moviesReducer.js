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
                results: action.payload
            }
        default:
            return state;
    }
}