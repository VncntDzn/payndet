import {createSlice} from '@reduxjs/toolkit';
import {ResourceAnimeProps} from 'store/types';
import {FETCH_RESOURCE} from './thunks';

const initialState: ResourceAnimeProps = {
  status: 'idle',
  loading: false,
  error: null,
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

const {reducer} = fetchAnimeResource;
export {FETCH_RESOURCE};
export default reducer;
