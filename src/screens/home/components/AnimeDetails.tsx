import React, {useEffect} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {View} from 'react-native';
import YouTube from 'react-native-youtube';
import DetailsTabBar from '../../../nav/tabs/DetailsTabBar';
import {BackIcon} from '../../../components/index';

import {useAppSelector} from '../../../store/hooks';
import {RootState} from '../../../store/index';
const AnimeDetails = ({navigation, route}) => {
  const anime = useAppSelector(
    (state: RootState) => state.fetch_resource.anime,
  );

  return (
    <>
      <BackIcon navigation={navigation} />

      <Layout style={{flex: 1}}>
        <YouTube
          apiKey="AIzaSyBQQnt-6KCKzUAvhN6LNpEyDYQTr7EAdGY"
          videoId={route.params.item.attributes.youtubeVideoId}
          play
          fullscreen
          loop
          style={{alignSelf: 'stretch', height: 300}}
        />
        <View style={{margin: 15}}>
          <Text status="primary" category="h4">
            {route.params.item.attributes.titles.en_jp}
          </Text>
          <Text style={{marginVertical: 10}}>
            Rating: {route.params.item.attributes.averageRating} / 100
          </Text>
        </View>

        <DetailsTabBar data={route.params.item} />
      </Layout>
    </>
  );
};

AnimeDetails.propTypes = {};

export default AnimeDetails;
