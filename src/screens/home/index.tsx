import React, {useState, useEffect} from 'react';
import {Button, Layout} from '@ui-kitten/components';
import {ScrollView, Text} from 'react-native';
import TrendingAnime from './components/lists/TrendingAnime';
import HeaderCarousel from './components/HeaderCarousel';

import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {RootState} from 'src/store/index';
import {FETCH_COLLECTION} from '../../store/slices/anime/fetchCollection';
import {CustomSpinner} from '../../components';

const Home = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(
    (state: RootState) => state.fetch_collection.status,
  );
  const data: any = useAppSelector(
    (state: RootState) => state.fetch_collection.data,
  );
  const [result, setResult] = useState<any>();
  const [spinner, setSpinner] = useState<boolean>(true);

  useEffect(() => {
    if (status === 'idle') {
      setSpinner(!spinner);
      dispatch(FETCH_COLLECTION());
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
        </ScrollView>
      </Layout>
    </>
  );
};
export default Home;
