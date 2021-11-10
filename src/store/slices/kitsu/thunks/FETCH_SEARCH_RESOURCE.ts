//@ts-ignore
import {KITSU_URL} from '@env';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_SEARCH_RESOURCE = createAsyncThunk(
  '/anime-search/fetch-anime',
  async ({anime}: {anime: string | number}) => {
    try {
      const res = await axios.get(`${KITSU_URL}/anime`, {
        params: {
          'filter[text]': anime,
        },
      });

      return res.data;
    } catch (e) {
      return 'Something went wrong';
    }
  },
);

export default FETCH_SEARCH_RESOURCE;
