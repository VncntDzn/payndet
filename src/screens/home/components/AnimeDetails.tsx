import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {View} from 'react-native';
import YouTube from 'react-native-youtube';
import DetailsTabBar from '../../../nav/tabs/DetailsTabBar';
import {BackIcon} from '../../../components/index';

import {useAppSelector} from '../../../store/hooks';
import {RootState} from '../../../store/index';
const AnimeDetails = ({navigation, route}) => {
  const anime = useAppSelector(
    (state: RootState) => state.fetch_anime.selectedAnime,
  );
  return (
    <>
      <BackIcon navigation={navigation} />

      <Layout style={{flex: 1}}>
        <YouTube
          apiKey="AIzaSyBQQnt-6KCKzUAvhN6LNpEyDYQTr7EAdGY"
          videoId={anime.youtubeVideoId}
          play
          fullscreen
          loop
          style={{alignSelf: 'stretch', height: 300}}
        />
        <View style={{margin: 15}}>
          <Text status="primary" category="h4">
            {anime.titles.en_jp}
          </Text>
          <Text style={{marginVertical: 10}}>
            Rating: {anime.averageRating} / 100
          </Text>
        </View>
        <DetailsTabBar />
      </Layout>
    </>
  );
};

AnimeDetails.propTypes = {};

export default AnimeDetails;
