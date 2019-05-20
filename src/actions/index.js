import axios from 'axios';
import { GET_ALL_CHARACTERS, GET_HERO_DETAILS, GET_HERO_DETAILS_SUCCESS, FETCHING_ANOTHER_PAGE, SHOWING_HERO_DETAILS, GOTO_HOME_PAGE } from './types';
import md5 from 'md5';

const APIUrl = 'http://gateway.marvel.com/v1/public';
const publicKey = 'a36f0aa0114da8bd1294eb5ec5b9c263';
const privateKey = 'a3b2f1aef8a368e6fde2db3ddc09d40f441df7fd';


export const fetchAllCharacters = (pageNumber) => {
    return (dispatch) => {
        dispatch(fetchingCharacters())
        const timeStamp = Date.now();
        return axios.get(`${APIUrl}/characters`, {
            params: {
                apikey: publicKey,
                ts: timeStamp,
                hash: md5(`${timeStamp}${privateKey}${publicKey}`),
                limit: 21,
                offset: (pageNumber - 1) * 21
            }
        })
            .then(response => {
                // console.log('response: ', response)
                dispatch(fetchAllCharactersSuccess(filterHeroList(response.data.data.results), pageNumber));
            })
            .catch(err => {
                throw (err);
            });
    };
};

const filterHeroList = heroList => {
    return heroList.filter(hero => hero.thumbnail.path.split('/')[hero.thumbnail.path.split('/').length - 1] !== 'image_not_available')
}


export const fetchingCharacters = () => {
    return {
        type: FETCHING_ANOTHER_PAGE,
        data: ''
    }
}


export const fetchAllCharactersSuccess = (data, pageNumber) => {
    // console.log('character data in dispatcher: ', data);
    // console.log('page number: ', pageNumber);
    return {
        type: GET_ALL_CHARACTERS,
        data: {
            characterList: data,
            activePage: pageNumber,

        }
    }
}



export const showingHeroDetails = (heroData, showing) => {
    // console.log('in showing hero details in index.js: ');
    console.log('hero data: ', heroData, 'showing: ', showing);
    return (dispatch) => {
        dispatch({
            type: SHOWING_HERO_DETAILS,
            data: {
                showingHeroDetails: showing,
                heroToBeShown: heroData
            }
        })
    }
}


export const gotoHomePage = () => {
    return (dispatch) => {
        dispatch({
            type: GOTO_HOME_PAGE,
            data: null
        })
    }
}




export const fetchingHeroDetails = () => {
    // console.log('in fetching hero details.');
    return (dispatch) => {
        dispatch({
            type: GET_HERO_DETAILS,
        })
    }
}


export const fetchHeroDetails = (heroId) => {
    return (dispatch) => {
        dispatch(fetchingHeroDetails());
        const timeStamp = Date.now();
        return axios.get(`${APIUrl}/characters/${heroId}`, {
            params: {
                apikey: publicKey,
                ts: timeStamp,
                hash: md5(`${timeStamp}${privateKey}${publicKey}`),
                // limit: 21,
                // offset: (pageNumber - 1) * 21
            }
        })
            .then(response => {
                // console.log('response: ', response);
                dispatch(fetchHeroDetailsSuccess(response.data.data.results));
            })
            .catch(err => {
                throw (err);
            });
    };
};


export const fetchHeroDetailsSuccess = (data) => {
    // console.log('hero details in dispatcher: ', data)
    return {
        type: GET_HERO_DETAILS_SUCCESS,
        data: data
    }
}