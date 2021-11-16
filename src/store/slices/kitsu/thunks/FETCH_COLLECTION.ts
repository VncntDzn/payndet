//@ts-ignore
import {KITSU_URL} from '@env';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_COLLECTION = createAsyncThunk(
  '/anime/fetch-anime',

  async () => {
    try {
      const [trendingRes, popularRes, favoriteRes, upcomingRes, currentRes] =
        await Promise.all([
          axios.get(`${KITSU_URL}/trending/anime`),
          axios.get(`${KITSU_URL}/anime?sort=-userCount`),
          axios.get(`${KITSU_URL}/anime?sort=-averageRating`),
          axios.get(`${KITSU_URL}/anime?filter[status]=upcoming`),
          axios.get(`${KITSU_URL}/anime?filter[status]=current`),
        ]);

      return {
        trending: trendingRes.data,
        popular: popularRes.data,
        favorites: favoriteRes.data,
        upcoming: upcomingRes.data,
        current: currentRes.data,
      };
    } catch (e) {
      return 'Something went wrong';
    }
  },
);

export default FETCH_COLLECTION;
