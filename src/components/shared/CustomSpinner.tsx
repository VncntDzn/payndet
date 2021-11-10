import React from 'react';
import {Spinner, Text} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import {SpinnerProps} from 'components/types';

const CustomSpinner = ({visible}: SpinnerProps) => {
  return (
    <View style={styles.container}>
      {visible && (
        <View style={{alignItems: 'center'}}>
          <Spinner size="giant" />
          <Text>Fetching data from resource</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
});
export default CustomSpinner;
