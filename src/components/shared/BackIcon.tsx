import React from 'react';
import {
  TopNavigationAction,
  Icon,
  Divider,
  TopNavigation,
} from '@ui-kitten/components';

const BackIcon = ({navigation}: {navigation: any}) => {
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
