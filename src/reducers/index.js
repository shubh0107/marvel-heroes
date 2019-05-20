import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import comicsReducer from './comicsReducer'

export default combineReducers({
    character: characterReducer,
    comic: comicsReducer
})