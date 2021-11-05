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
       <Text>HI</Text>
    </>
  );
};

AnimeDetails.propTypes = {};

export default AnimeDetails;
