import React, {useState, useEffect} from 'react';
import {Layout} from '@ui-kitten/components';
import {ScrollView} from 'react-native';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {FETCH_COLLECTION} from 'store/slices/kitsu/thunks';
import {FETCH_TOP_ANIME} from 'store/slices/jikan/thunks';
import {CustomSpinner} from 'components';
import {KITSU_DATA, KITSU_STATUS} from 'store/slices/kitsu/fetchCollection';
import {
  AIRING_DATA,
  MOVIE_DATA,
  TV_DATA,
  UPCOMING_DATA,
} from 'store/slices/jikan/fetchTopAnime';
import {
  KitsuAnimeFlatList,
  JikanAnimeFlatList,
  HeaderCarousel,
} from './components';

const Home = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const [spinner, setSpinner] = useState<boolean>(true);
  const status = useAppSelector(KITSU_STATUS);
  const kitsuData = useAppSelector(KITSU_DATA);
  const jikanUpcoming = useAppSelector(UPCOMING_DATA);
  const jikanAiring = useAppSelector(AIRING_DATA);
  const jikanMovie = useAppSelector(MOVIE_DATA);
  const tv = useAppSelector(TV_DATA);

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
    }
  }, [status]);

  return (
    <>
      <CustomSpinner visible={spinner} />
      <Layout style={{flex: 1, zIndex: spinner ? 1 : 2}}>
        <ScrollView>
          <HeaderCarousel navigation={navigation} data={kitsuData} />
          <KitsuAnimeFlatList navigation={navigation} data={kitsuData} />
          <JikanAnimeFlatList
            title="Upcoming Anime"
            navigation={navigation}
            data={jikanUpcoming}
          />
          <JikanAnimeFlatList
            title="Airing"
            navigation={navigation}
            data={jikanAiring}
          />
          <JikanAnimeFlatList
            title="Movie"
            navigation={navigation}
            data={jikanMovie}
          />
          <JikanAnimeFlatList title="TV" navigation={navigation} data={tv} />
        </ScrollView>
      </Layout>
    </>
  );
};
export default Home;
