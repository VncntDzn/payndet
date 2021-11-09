import {createSlice} from '@reduxjs/toolkit';
import {FETCH_TOP_ANIME} from './thunks';
import {RootState} from 'store';

const initialState = {
  status: 'idle',
  loading: false,
  error: null,
  data: [],
  upcoming: [],
  airing: [],
  movie: [],
  tv: [],
};
const fetchTopAnime = createSlice({
  name: 'fetch_top_anime',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(FETCH_TOP_ANIME.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(FETCH_TOP_ANIME.fulfilled, (state, action) => {
      state.status = 'finished';
      state.error = null;

      const {topType, data} = action.payload;
      if (topType === 'airing') {
        state.airing = data;
      } else if (topType === 'upcoming') {
        state.upcoming = data;
      } else if (topType === 'movie') {
        state.movie = data;
      } else {
        state.tv = data;
      }
    });
    builder.addCase(FETCH_TOP_ANIME.rejected, (state, action) => {
      state.status = 'error';
      state.error = 'Something went wrong.';
    });
  },
});

const {actions, reducer} = fetchTopAnime;
export {FETCH_TOP_ANIME};
const UPCOMING_DATA = (state: RootState) => state.fetch_top_anime.upcoming;
const AIRING_DATA = (state: RootState) => state.fetch_top_anime.airing;
const MOVIE_DATA = (state: RootState) => state.fetch_top_anime.movie;
const TV_DATA = (state: RootState) => state.fetch_top_anime.tv;

export {UPCOMING_DATA, AIRING_DATA, MOVIE_DATA, TV_DATA};
export default reducer;
