import { combineReducers } from 'redux';
import movieReducer from './movies';
import sortByReducer from './sortby';
import searchByReducer from './searchby';
import searchQueryReducer from './searchquery';

const storeApp = combineReducers({
    movieReducer,
    searchByReducer,
    sortByReducer,
    searchQueryReducer
})

export default storeApp;
