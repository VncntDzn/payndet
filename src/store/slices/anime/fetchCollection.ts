import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
//@ts-ignore
import {API_URL} from '@env';
import {InitialstateProps} from 'src/store/types';

const FETCH_COLLECTION = createAsyncThunk('/anime/fetch-anime', async () => {
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

const {actions, reducer} = fetchCollection;
export {FETCH_COLLECTION};
export default reducer;
