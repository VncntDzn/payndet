import React from 'react';
import {
  TopNavigationAction,
  Icon,
  Divider,
  Text,
  Layout,
  TopNavigation,
} from '@ui-kitten/components';

const BackIcon = ({navigation}) => {
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <TopNavigation
        title="Back to Home"
        accessoryLeft={
          <TopNavigationAction
            icon={<Icon name="arrow-back" />}
            onPress={navigateBack}
          />
        }
      />
      <Divider />
    </>
  );
};

export default BackIcon;
