import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {
  Layout,
  Text,
  TopNavigation,
  Divider,
  TopNavigationAction,
  Icon,
} from '@ui-kitten/components';

const BackIcon = props => <Icon {...props} name="arrow-back" />;
const AnimeList = ({navigation}) => {
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
        <Text>HI</Text>
      </Layout>
    </>
  );
};

AnimeList.propTypes = {};

export default AnimeList;
