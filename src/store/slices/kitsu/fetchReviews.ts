import {createSlice} from '@reduxjs/toolkit';
import {RootState} from 'store';
import {InitialstateProps} from 'store/types';
import {FETCH_REVIEWS} from './thunks';

const initialState = {
  status: 'idle',
  loading: false,
  error: null,
  data: [],
};
const fetchAnimeReviews = createSlice({
  name: 'fetch_reviews',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(FETCH_REVIEWS.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(FETCH_REVIEWS.fulfilled, (state, action) => {
      state.status = 'finished';
      state.data = action.payload.data;
      state.error = null;
    });
    builder.addCase(FETCH_REVIEWS.rejected, (state, action) => {
      state.status = 'error';
      state.error = 'Something went wrong.';
    });
  },
});

const {reducer} = fetchAnimeReviews;
export {FETCH_REVIEWS};

export const REVIEWS_DATA = (state: RootState) => state.fetch_reviews.data;
export default reducer;
