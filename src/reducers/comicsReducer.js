// import initialState from './initialState';
import { GET_ALL_COMICS } from '../actions/types';



const initialState = {
    comicList: []
};

export default function comicsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_COMICS:
            return { ...state, comicList: action.data }
        default:
            return state;
    }
}