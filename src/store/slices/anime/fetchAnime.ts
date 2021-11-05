import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
//@ts-ignore
import {API_URL} from '@env';
import {InitialstateProps} from 'src/store/types';

const FETCH_ANIME = createAsyncThunk('/fetch-anime', async () => {
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
};
const fetchAnime = createSlice({
  name: 'fetch_anime',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(FETCH_ANIME.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(FETCH_ANIME.fulfilled, (state, action) => {
      state.status = 'finished';
      state.error = null;
      state.data = action.payload;
      console.log(action.payload)
    });
    builder.addCase(FETCH_ANIME.rejected, (state, action) => {
      state.status = 'error';
      console.log(action.payload);
      /* state.error = action.payload.error; */
    });
  },
});

export {FETCH_ANIME};
const {reducer} = fetchAnime;
export default reducer;
