import React, {useState, useEffect} from 'react';
import {Layout} from '@ui-kitten/components';
import {ScrollView} from 'react-native';
import TrendingAnime from './lists/TrendingAnime';
import HeaderCarousel from './HeaderCarousel';

import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {RootState} from 'src/store/index';
import {FETCH_ANIME} from '../../store/slices/anime/fetchAnime';

const Home = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state: RootState) => state.fetch_anime.status);
  const [result, setResult] = useState<any>();
  const data: any = useAppSelector(
    (state: RootState) => state.fetch_anime.data,
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(FETCH_ANIME());
    } else {
      setResult(data.data);
    }
  }, [status]);

  return (
    <Layout style={{flex: 1}}>
      <ScrollView>
        <HeaderCarousel navigation={navigation} data={result} />
        <TrendingAnime navigation={navigation} data={result} />
      </ScrollView>
    </Layout>
  );
};
export default Home;