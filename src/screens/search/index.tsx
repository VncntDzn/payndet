import React from 'react';
import {Layout} from '@ui-kitten/components';
import {SearchFlatList, SearchBar} from './components';

const Seach = ({navigation}) => {
  return (
    <Layout style={{flex: 1, padding: 10}}>
      <SearchBar navigation={navigation} />
      <SearchFlatList navigation={navigation} />
    </Layout>
  );
};

Seach.propTypes = {};

export default Seach;
