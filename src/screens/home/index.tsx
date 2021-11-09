import React, {useState, useEffect} from 'react';
import {Button, Layout} from '@ui-kitten/components';
import {ScrollView, Text} from 'react-native';
import TrendingAnime from './components/lists/TrendingAnime';
import JikanAnimeFlatList from './components/jikan/JikanAnimeFlatList';
import HeaderCarousel from './components/HeaderCarousel';

import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {RootState} from 'src/store/index';
import {FETCH_COLLECTION} from '../../store/slices/anime/fetchCollection';
import {FETCH_TOP_ANIME} from '../../store/slices/jikan/fetchTopAnime';
import {CustomSpinner} from '../../components';

const Home = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(
    (state: RootState) => state.fetch_collection.status,
  );
  const data: any = useAppSelector(
    (state: RootState) => state.fetch_collection.data,
  );
  const jikanData: any = useAppSelector(
    (state: RootState) => state.fetch_top_anime.upcoming,
  );

  const sample: any = useAppSelector(
    (state: RootState) => state.fetch_top_anime.airing,
  );
  const movie: any = useAppSelector(
    (state: RootState) => state.fetch_top_anime.movie,
  );

  const tv: any = useAppSelector(
    (state: RootState) => state.fetch_top_anime.tv,
  );
  const [result, setResult] = useState<any>();
  const [spinner, setSpinner] = useState<boolean>(true);

  useEffect(() => {
    if (status === 'idle') {
      setSpinner(!spinner);
      dispatch(FETCH_COLLECTION());
      dispatch(FETCH_TOP_ANIME({topType: 'upcoming'}));
      dispatch(FETCH_TOP_ANIME({topType: 'airing'}));
      dispatch(FETCH_TOP_ANIME({topType: 'movie'}));
      dispatch(FETCH_TOP_ANIME({topType: 'tv'}));
    } else {
      setSpinner(!spinner);
      setResult(data?.data);
    }
  }, [status]);

  return (
    <>
      <CustomSpinner visible={spinner} />
      <Layout style={{flex: 1, zIndex: spinner ? 1 : 2}}>
        <ScrollView>
          <HeaderCarousel navigation={navigation} data={result} />
          <TrendingAnime navigation={navigation} data={result} />
          <JikanAnimeFlatList
            title="Upcoming Anime"
            navigation={navigation}
            data={jikanData.top}
          />
          <JikanAnimeFlatList
            title="Airing"
            navigation={navigation}
            data={sample.top}
          />
          <JikanAnimeFlatList
            title="Movie"
            navigation={navigation}
            data={movie.top}
          />
          <JikanAnimeFlatList
            title="TV"
            navigation={navigation}
            data={tv.top}
          />
        </ScrollView>
      </Layout>
    </>
  );
};
export default Home;
