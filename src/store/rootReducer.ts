import {combineReducers} from 'redux';
import {fetchCollection, fetchResource, fetchTopAnime} from './slices/index';

// reducers
const rootReducer = combineReducers({
  fetch_collection: fetchCollection,
  fetch_resource: fetchResource,
  fetch_top_anime: fetchTopAnime,
});

export default rootReducer;
