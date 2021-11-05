import React from 'react';
import {
  Layout,
  Text,
  TopNavigation,
  Divider,
  TopNavigationAction,
  Icon,
  Tab,
  TabBar,
} from '@ui-kitten/components';
import {View} from 'react-native';
import YouTube from 'react-native-youtube';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DetailsTab from './tabs/DetailsTab';
const {Navigator, Screen} = createMaterialTopTabNavigator();

const TopTabBar = ({navigation, state}) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab title="USERS" />
    <Tab title="ORDERS" />
  </TabBar>
);
const BackIcon = props => <Icon {...props} name="arrow-back" />;
const AnimeDetails = ({navigation, route}) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  return (
    <>
      <TopNavigation title="Back to Home" accessoryLeft={BackAction} />
      <Divider />
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

        <Navigator tabBar={props => <TopTabBar {...props} />}>
          <Screen name="Users" component={DetailsTab} />
          <Screen name="Orders" component={DetailsTab} />
        </Navigator>
      </Layout>
    </>
  );
};

AnimeDetails.propTypes = {};

export default AnimeDetails;
