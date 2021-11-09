import {combineReducers} from 'redux';
import {
  fetchCollection,
  fetchResource,
  fetchTopAnime,
  fetchReviews,
} from './slices/index';

// reducers
const rootReducer = combineReducers({
  fetch_collection: fetchCollection,
  fetch_resource: fetchResource,
  fetch_top_anime: fetchTopAnime,
  fetch_reviews: fetchReviews,
});

export default rootReducer;
