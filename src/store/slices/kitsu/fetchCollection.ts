import {createSlice} from '@reduxjs/toolkit';
import {InitialstateProps} from 'store/types';
import {FETCH_COLLECTION} from './thunks';
import {RootState} from 'store';

const initialState = {
  status: 'idle',
  loading: false,
  error: null,
  data: [],
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
      state.data = action.payload;
    });
    builder.addCase(FETCH_COLLECTION.rejected, (state, action) => {
      state.status = 'error';
      state.error = 'Something went wrong.';
    });
  },
});

const {reducer} = fetchCollection;

const KITSU_DATA = (state: RootState) => state.fetch_collection.data;
const KITSU_STATUS = (state: RootState) => state.fetch_collection.status;

export {KITSU_DATA, KITSU_STATUS};

export default reducer;
