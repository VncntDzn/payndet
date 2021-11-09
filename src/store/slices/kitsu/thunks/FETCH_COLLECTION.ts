//@ts-ignore
import {KITSU_URL} from '@env';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_COLLECTION = createAsyncThunk('/anime/fetch-anime', async () => {
  try {
    const res = await axios.get(`${KITSU_URL}/trending/anime`);
    return res.data;
  } catch (e) {
    return 'Something went wrong';
  }
});

export default FETCH_COLLECTION;
