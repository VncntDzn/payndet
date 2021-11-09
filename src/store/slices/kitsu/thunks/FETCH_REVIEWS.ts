//@ts-ignore
import {KITSU_URL} from '@env';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_REVIEWS = createAsyncThunk('/anime/fetch-reviews', async ({id}) => {
  try {
    const res = await axios.get(`${KITSU_URL}/anime/${id}/reviews`);
    return res.data;
  } catch (e) {
    return 'Something went wrong';
  }
});

export default FETCH_REVIEWS;
