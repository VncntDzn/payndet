import React from 'react';
import {Spinner, Text} from '@ui-kitten/components';
import {View} from 'react-native';
import {SpinnerProps} from 'components/types';

const CustomSpinner = ({visible}: SpinnerProps) => {
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
      }}>
      {visible && (
        <View style={{alignItems: 'center'}}>
          <Spinner size="giant" />
          <Text>Fetching data from resource</Text>
        </View>
      )}
    </View>
  );
};
export default CustomSpinner;
