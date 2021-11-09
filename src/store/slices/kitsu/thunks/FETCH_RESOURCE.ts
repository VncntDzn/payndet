//@ts-ignore
import {API_URL} from '@env';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_RESOURCE = createAsyncThunk(
  '/anime/fetch-anime',
  async ({title}: {title: string | number}) => {
    try {
      const res = await axios.get(`${API_URL}`, {
        params: {
          'filter[text]': title,
        },
      });

      return res.data;
    } catch (e) {
      return 'Something went wrong';
    }
  },
);

export default FETCH_RESOURCE;
