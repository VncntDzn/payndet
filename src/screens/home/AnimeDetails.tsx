import React from 'react';
import {
  Layout,
  Text,
  TopNavigation,
  Divider,
  TopNavigationAction,
  Icon,
} from '@ui-kitten/components';
import {View} from 'react-native';
import YouTube from 'react-native-youtube';
import DetailsTab from './tabs/DetailsTab';

import {Tab, TabBar} from '@ui-kitten/components';
const BackIcon = props => <Icon {...props} name="arrow-back" />;
const AnimeDetails = ({navigation, route}) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <>
      <TopNavigation title="Back to Home" accessoryLeft={BackAction} />
      <Divider />
      <Layout style={{flex: 1}}>
        <YouTube
          apiKey="AIzaSyBQQnt-6KCKzUAvhN6LNpEyDYQTr7EAdGY"
          videoId={route.params.item.attributes.youtubeVideoId} // The YouTube video ID
          play // control playback of video with true/false
          fullscreen // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
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

        <TabBar
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}>
          <Tab title="DETAILS">
            <Text>ASD</Text>
          </Tab>
          <Tab title="REVIEWS" />
        </TabBar>
      </Layout>
    </>
  );
};

AnimeDetails.propTypes = {};

export default AnimeDetails;
