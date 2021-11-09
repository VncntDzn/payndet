import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

const Manga = props => {
  return (
    <Layout style={{flex:1}}>
      <Text>HI Manga</Text>
    </Layout>
  );
};

Manga.propTypes = {};

export default Manga;
