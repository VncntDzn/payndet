//@ts-ignore
import {JIKAN_URL} from '@env';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_TOP_ANIME = createAsyncThunk(
  '/anime/fetch-jikan-top-anime',
  async ({topType}: {topType: string}) => {
    try {
      const res = await axios.get(`${JIKAN_URL}/top/anime/1/${topType}`);

      return {data: res.data, topType};
    } catch (e) {
      return 'Something went wrong';
    }
  },
);

export default FETCH_TOP_ANIME;
