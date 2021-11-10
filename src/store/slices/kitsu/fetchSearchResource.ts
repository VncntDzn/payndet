import {createSlice} from '@reduxjs/toolkit';
import {RootState} from 'store';
import {ResourceAnimeProps} from 'store/types';
import {FETCH_SEARCH_RESOURCE} from './thunks';

const initialState: ResourceAnimeProps = {
  status: 'idle',
  loading: false,
  error: null,
  anime: [],
};
const fetchSearchResource = createSlice({
  name: 'fetch_search_resource',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(FETCH_SEARCH_RESOURCE.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(FETCH_SEARCH_RESOURCE.fulfilled, (state, action) => {
      state.status = 'finished';
      state.anime = action.payload;
      state.error = null;
    });
    builder.addCase(FETCH_SEARCH_RESOURCE.rejected, (state, action) => {
      state.status = 'error';
      state.error = 'Something went wrong.';
    });
  },
});

const {reducer} = fetchSearchResource;
export {FETCH_SEARCH_RESOURCE};
const SEARCHED_ANIME_DATA = (state: RootState) =>
  state.fetch_search_resource.anime;
const SEARCHED_STATUS = (state: RootState) =>
  state.fetch_search_resource.status;

export {SEARCHED_STATUS, SEARCHED_ANIME_DATA};
export default reducer;
