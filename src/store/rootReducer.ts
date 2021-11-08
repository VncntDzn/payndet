import {combineReducers} from 'redux';
import {fetchCollection, fetchResource} from './slices/index';

// reducers
const rootReducer = combineReducers({
  fetch_collection: fetchCollection,
  fetch_resource: fetchResource,
});

export default rootReducer;
