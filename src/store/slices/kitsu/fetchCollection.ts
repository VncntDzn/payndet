import {createSlice} from '@reduxjs/toolkit';
import {FETCH_COLLECTION} from './thunks';
import {RootState} from 'store';
import {CollectionAnimeProps} from 'store/types';

const initialState = {
  status: 'idle',
  loading: false,
  error: null,
  data: [],
  trending: [],
  popular: [],
  favorites: [],
  upcoming: [],
  current: [],
};
const fetchCollection = createSlice({
  name: 'fetch_collection',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(FETCH_COLLECTION.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(FETCH_COLLECTION.fulfilled, (state, action) => {
      state.status = 'finished';
      state.error = null;

      state.trending = action.payload.trending;
      state.popular = action.payload.popular;
      state.upcoming = action.payload.upcoming;
      state.current = action.payload.current;
      state.favorites = action.payload.favorites;
    });
    builder.addCase(FETCH_COLLECTION.rejected, (state, action) => {
      state.status = 'error';
      state.error = 'Something went wrong.';
    });
  },
});

const {reducer} = fetchCollection;

const TRENDING = (state: RootState) => state.fetch_collection.trending;
const POPULAR = (state: RootState) => state.fetch_collection.popular;
const UPCOMING = (state: RootState) => state.fetch_collection.upcoming;
const CURRENT = (state: RootState) => state.fetch_collection.current;
const FAVORITES = (state: RootState) => state.fetch_collection.favorites;

const KITSU_STATUS = (state: RootState) => state.fetch_collection.status;

export {FAVORITES, CURRENT, UPCOMING, TRENDING, POPULAR, KITSU_STATUS};

export default reducer;
