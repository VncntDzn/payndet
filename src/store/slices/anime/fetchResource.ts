import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
//@ts-ignore
import {API_URL} from '@env';
import {InitialstateProps} from 'src/store/types';

const FETCH_RESOURCE = createAsyncThunk(
  '/trending/anime/fetch-anime',
  async ({title}: any) => {
    try {
      const res = await axios.get(`${API_URL}`, {
        params: {
          'filter[text]': title,
        },
      });

      console.log(res.data);
      return res.data;
    } catch (e) {
      return 'Something went wrong';
    }
  },
);

const initialState: InitialstateProps = {
  status: 'idle',
  loading: false,
  error: null,
  data: [],
  anime: [],
};
const fetchAnimeResource = createSlice({
  name: 'fetch_resource',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(FETCH_RESOURCE.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(FETCH_RESOURCE.fulfilled, (state, action) => {
      state.status = 'finished';
      state.anime = action.payload;
      state.error = null;
    });
    builder.addCase(FETCH_RESOURCE.rejected, (state, action) => {
      state.status = 'error';
      state.error = 'Something went wrong.';
    });
  },
});

const {actions, reducer} = fetchAnimeResource;
export {FETCH_RESOURCE};
export default reducer;
