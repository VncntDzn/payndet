import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
//@ts-ignore
import {JIKAN_URL} from '@env';
import {InitialstateProps} from 'src/store/types';

const FETCH_TOP_ANIME = createAsyncThunk(
  '/anime/fetch-jikan-top-anime',
  async ({topType}: any) => {
    try {
      const res = await axios.get(`${JIKAN_URL}/top/anime/1/${topType}`);

      return {data: res.data, topType};
    } catch (e) {
      return 'Something went wrong';
    }
  },
);

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
export default reducer;
