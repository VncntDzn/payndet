import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {View} from 'react-native';
import YouTube from 'react-native-youtube';
import DetailsNav from '../../../nav/tabs/DetailsTabBar';
import {BackIcon} from '../../../components/index';

const AnimeDetails = ({navigation, route}) => {
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
          <Text
            status="primary"
            category="h4"
            onPress={() => console.log(route.params)}>
            {route.params.item.attributes.titles.en_jp}
          </Text>
          <Text style={{marginVertical: 10}}>
            Rating: {route.params.item.attributes.averageRating}
          </Text>
        </View>
        <DetailsNav />
      </Layout>
    </>
  );
};

AnimeDetails.propTypes = {};

export default AnimeDetails;
