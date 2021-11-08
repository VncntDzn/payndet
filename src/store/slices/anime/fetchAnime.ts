import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
//@ts-ignore
import {API_URL} from '@env';
import {InitialstateProps} from 'src/store/types';

const FETCH_ANIME = createAsyncThunk('/trending/anime/fetch-anime', async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (e) {
    return 'Something went wrong';
  }
});

const initialState: InitialstateProps = {
  status: 'idle',
  loading: false,
  error: null,
  data: [],
  selectedAnime: [],
};
const fetchAnime = createSlice({
  name: 'fetch_anime',
  initialState,
  reducers: {
    GET_SELECTED_ANIME: (state, action) => {
      state.selectedAnime = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(FETCH_ANIME.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(FETCH_ANIME.fulfilled, (state, action) => {
      state.status = 'finished';
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(FETCH_ANIME.rejected, (state, action) => {
      state.status = 'error';
      state.error = 'Something went wrong.';
    });
  },
});

const {actions, reducer} = fetchAnime;
export const {GET_SELECTED_ANIME} = actions;
export {FETCH_ANIME};
export default reducer;
