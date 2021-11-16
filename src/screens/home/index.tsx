import React, {useState, useEffect} from 'react';
import {Layout} from '@ui-kitten/components';
import {ScrollView} from 'react-native';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {FETCH_COLLECTION} from 'store/slices/kitsu/thunks';
import {CustomSpinner} from 'components';
import {
  KITSU_STATUS,
  TRENDING,
  POPULAR,
  UPCOMING,
  CURRENT,
  FAVORITES,
} from 'store/slices/kitsu/fetchCollection';

import {KitsuAnimeFlatList, HeaderCarousel} from './components';

const Home = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const [spinner, setSpinner] = useState<boolean>(true);
  const status = useAppSelector(KITSU_STATUS);
  const TRENDING_DATA = useAppSelector(TRENDING);
  const POPULAR_DATA = useAppSelector(POPULAR);
  const UPCOMING_DATA = useAppSelector(UPCOMING);
  const CURRENT_DATA = useAppSelector(CURRENT);
  const FAVORITES_DATA = useAppSelector(FAVORITES);

  useEffect(() => {
    if (status === 'idle') {
      setSpinner(!spinner);
      dispatch(FETCH_COLLECTION());
    } else {
      setSpinner(!spinner);
    }
  }, [status]);

  return (
    <>
      <CustomSpinner visible={spinner} />
      <Layout style={{flex: 1, zIndex: spinner ? 1 : 2}}>
        <ScrollView>
          <HeaderCarousel navigation={navigation} data={TRENDING_DATA} />
          <KitsuAnimeFlatList
            navigation={navigation}
            title="Popular"
            data={POPULAR_DATA}
          />
          <KitsuAnimeFlatList
            navigation={navigation}
            title="Upcoming"
            data={UPCOMING_DATA}
          />
          <KitsuAnimeFlatList
            navigation={navigation}
            title="Current Shows"
            data={CURRENT_DATA}
          />
          <KitsuAnimeFlatList
            navigation={navigation}
            title="Favorites"
            data={FAVORITES_DATA}
          />
        </ScrollView>
      </Layout>
    </>
  );
};
export default Home;
