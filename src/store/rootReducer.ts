import {combineReducers} from 'redux';
import {fetchAnime} from './slices/index';

// reducers
const rootReducer = combineReducers({
  fetch_anime: fetchAnime,
});

export default rootReducer;
