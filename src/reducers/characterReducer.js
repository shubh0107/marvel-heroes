import {
    GET_ALL_CHARACTERS,
    FETCHING_ANOTHER_PAGE,
    ANOTHER_PAGE_FETCHED,
    SHOWING_HERO_DETAILS,
    GOTO_HOME_PAGE,
    GET_HERO_DETAILS,
    GET_HERO_DETAILS_SUCCESS
} from '../actions/types';
// import initialState from './initialState';

const initialState = {
    fetchingCharacters: false,
    activePage: 1,
    characterList: [],
    showingHeroDetails: false,
    gettingHeroDetails: false,
    heroDetails: null
}

export default function characterReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                characterList: action.data.characterList,
                activePage: action.data.activePage,
                fetchingCharacters: false
            }
        case FETCHING_ANOTHER_PAGE:
            // console.log('in fetching another page', action);
            return {
                ...state,
                fetchingCharacters: true
            }
        case ANOTHER_PAGE_FETCHED:
            return [...state, action.data]
        case SHOWING_HERO_DETAILS:
            // console.log('in reducer for showing hero details.', action);
            return {
                ...state,
                showingHeroDetails: action.data.showingHeroDetails,
                heroToBeShown: action.data.heroToBeShown
            }
        case GET_HERO_DETAILS:
            console.log('getting hero details.');
            return {
                ...state,
                gettingHeroDetails: true
            }
        case GET_HERO_DETAILS_SUCCESS:
            console.log('hero details fetched-- ', action.data)
            return {
                ...state,
                gettingHeroDetails: false,
                heroDetails: action.data[0]
            }
        case GOTO_HOME_PAGE:
            console.log('in goto home page: ');
            return {
                ...state,
                showingHeroDetails: false,
                heroToBeShown: null
            }
        default:
            return state;
    }
}