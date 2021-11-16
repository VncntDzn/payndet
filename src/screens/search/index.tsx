import React from 'react';
import {Layout} from '@ui-kitten/components';
import {SearchFlatList, SearchBar} from './components';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Search = ({navigation}: any) => {
  return (
    <Layout style={{flex: 1, padding: 10}}>
      <ScrollView>
        <SafeAreaView>
          <SearchBar navigation={navigation} />
          <SearchFlatList navigation={navigation} />
        </SafeAreaView>
      </ScrollView>
    </Layout>
  );
};

export default Search;
