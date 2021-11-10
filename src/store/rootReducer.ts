import {combineReducers} from 'redux';
import {
  fetchCollection,
  fetchResource,
  fetchTopAnime,
  fetchReviews,
  fetchSearchResource,
} from './slices/index';

// reducers
const rootReducer = combineReducers({
  fetch_collection: fetchCollection,
  fetch_resource: fetchResource,
  fetch_top_anime: fetchTopAnime,
  fetch_reviews: fetchReviews,
  fetch_search_resource: fetchSearchResource,
});

export default rootReducer;
