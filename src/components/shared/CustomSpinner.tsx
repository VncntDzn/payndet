import React from 'react';
import PropTypes from 'prop-types';

import {Spinner, Text} from '@ui-kitten/components';
import {View} from 'react-native';

const CustomSpinner = ({visible}) => {
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
        zIndex: 1,
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

CustomSpinner.propTypes = {};

export default CustomSpinner;
