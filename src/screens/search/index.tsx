import React from 'react';
import {Layout} from '@ui-kitten/components';
import {SearchFlatList, SearchBar} from './components';
import {ScrollView} from 'react-native';

const Seach = ({navigation}: any) => {
  return (
    <ScrollView>
      <Layout style={{flex: 1, padding: 10}}>
        <SearchBar navigation={navigation} />
        <SearchFlatList navigation={navigation} />
      </Layout>
    </ScrollView>
  );
};

export default Seach;
