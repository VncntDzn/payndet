import React, {useState, useEffect} from 'react';
import {Layout} from '@ui-kitten/components';
import {ScrollView} from 'react-native';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {FETCH_COLLECTION} from 'store/slices/kitsu/thunks';
import {FETCH_TOP_ANIME} from 'store/slices/jikan/thunks';
import {CustomSpinner} from 'components';
import {kitsuData, kitsuStatus} from 'store/slices/kitsu/fetchCollection';
import {
  AIRING_DATA,
  MOVIE_DATA,
  TV_DATA,
  UPCOMING_DATA,
} from 'store/slices/jikan/fetchTopAnime';
import KitsuAnimeFlatlist from './components/kitsu/KitsuAnimeFlatList';
import JikanAnimeFlatList from './components/jikan/JikanAnimeFlatList';
import HeaderCarousel from './components/HeaderCarousel';

const Home = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(kitsuStatus);
  const data: any = useAppSelector(kitsuData);
  const jikanUpcoming: any = useAppSelector(UPCOMING_DATA);

  const jikanAiring: any = useAppSelector(AIRING_DATA);
  const jikanMovie: any = useAppSelector(MOVIE_DATA);

  const tv: any = useAppSelector(TV_DATA);
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
      console.log(status);
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
          <KitsuAnimeFlatlist navigation={navigation} data={result} />
          <JikanAnimeFlatList
            title="Upcoming Anime"
            navigation={navigation}
            data={jikanUpcoming.top}
          />
          <JikanAnimeFlatList
            title="Airing"
            navigation={navigation}
            data={jikanAiring.top}
          />
          <JikanAnimeFlatList
            title="Movie"
            navigation={navigation}
            data={jikanMovie.top}
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
