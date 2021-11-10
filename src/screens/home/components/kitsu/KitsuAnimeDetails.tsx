import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {View} from 'react-native';
import {DetailsTabBar} from 'nav';
import {BackIcon} from 'components';
import {AnimeListProps} from '../types';
//@ts-ignore
import {YOUTUBE_ID} from '@env';
import YouTube from 'react-native-youtube';

const KitsuAnimeDetails = ({navigation, route}: AnimeListProps) => {
  return (
    <>
      <BackIcon navigation={navigation} />

      <Layout style={{flex: 1}}>
        <YouTube
          apiKey={`${YOUTUBE_ID}`}
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

export default KitsuAnimeDetails;
